import json
import urllib.request
import urllib.parse
import os
import time
import re
from pathlib import Path
from PIL import Image
import io

# 설정
COMFYUI_URL = "http://127.0.0.1:8188"
PROJECT_ROOT = Path(r"c:\AI\Antigravity\Prompt")
DATA_DIR = PROJECT_ROOT / "lib" / "data"
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "prompts"
CKPT_NAME = "RealVisXL_V4.0.safetensors"

def parse_prompts_from_ts():
    """lib/data/*.ts 파일에서 프롬프트 데이터 추출"""
    all_prompts = []
    ts_files = list(DATA_DIR.glob("*.ts"))
    
    # 정규표현식 패턴
    id_re = re.compile(r'id:\s*["\']([^"\']+)["\']')
    prompt_re = re.compile(r'prompt_text:\s*["\']([^"\']+)["\']')
    neg_re = re.compile(r'negative_prompt:\s*["\']([^"\']+)["\']')
    
    for ts_file in ts_files:
        content = ts_file.read_text(encoding="utf-8")
        # 객체 단위로 분리 (단순화된 파싱)
        blocks = content.split("id:")
        for block in blocks[1:]:
            try:
                # 'id:'를 다시 붙여서 파싱
                full_block = "id:" + block.split("},")[0]
                prompt_id = id_re.search(full_block).group(1)
                prompt_text = prompt_re.search(full_block).group(1)
                negative = neg_re.search(full_block).group(1) if neg_re.search(full_block) else "blurry, low quality, distorted, text, watermark"
                
                all_prompts.append({
                    "id": prompt_id,
                    "prompt": prompt_text,
                    "negative": negative,
                    "category": ts_file.stem
                })
            except Exception as e:
                continue
                
    return all_prompts

def check_comfyui_running():
    try:
        req = urllib.request.Request(f"{COMFYUI_URL}/system_stats")
        with urllib.request.urlopen(req, timeout=5) as response:
            return True
    except:
        return False

def queue_prompt(workflow):
    p = {"prompt": workflow}
    data = json.dumps(p).encode('utf-8')
    req = urllib.request.Request(f"{COMFYUI_URL}/prompt", data=data, headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read())

def get_history(prompt_id):
    req = urllib.request.Request(f"{COMFYUI_URL}/history/{prompt_id}")
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read())

def get_image(filename, subfolder, folder_type):
    data = {"filename": filename, "subfolder": subfolder, "type": folder_type}
    url = f"{COMFYUI_URL}/view?{urllib.parse.urlencode(data)}"
    with urllib.request.urlopen(url) as response:
        return response.read()

def create_workflow(config):
    """RealVisXL V4.0 최적화 워크플로우"""
    # 카테고리에 따른 해상도 결정
    width, height = 1024, 1024
    if config["category"] == "ui-ux":
        width, height = 1600, 900
    elif config["category"] == "marketing":
        width, height = 1024, 1280
        
    return {
        "1": {
            "inputs": {"ckpt_name": CKPT_NAME},
            "class_type": "CheckpointLoaderSimple"
        },
        "2": {
            "inputs": {"text": config["prompt"], "clip": ["1", 1]},
            "class_type": "CLIPTextEncode"
        },
        "3": {
            "inputs": {"text": config["negative"], "clip": ["1", 1]},
            "class_type": "CLIPTextEncode"
        },
        "4": {
            "inputs": {
                "seed": int(time.time()) % 1000000,
                "steps": 25,
                "cfg": 6.5,
                "sampler_name": "dpmpp_2m_sde",
                "scheduler": "karras",
                "denoise": 1,
                "model": ["1", 0],
                "positive": ["2", 0],
                "negative": ["3", 0],
                "latent_image": ["5", 0]
            },
            "class_type": "KSampler"
        },
        "5": {
            "inputs": {"width": width, "height": height, "batch_size": 1},
            "class_type": "EmptyLatentImage"
        },
        "6": {
            "inputs": {"samples": ["4", 0], "vae": ["1", 2]},
            "class_type": "VAEDecode"
        },
        "7": {
            "inputs": {"filename_prefix": f"batch_{config['id']}", "images": ["6", 0]},
            "class_type": "SaveImage"
        }
    }

def process_and_save_as_webp(image_data, target_path):
    """PNG 데이터를 WebP로 변환하여 저장"""
    img = Image.open(io.BytesIO(image_data))
    img.save(target_path.with_suffix(".webp"), "WEBP", quality=90, lossless=False)

def main():
    print("=" * 60)
    print("ComfyFlow Batch Generator (RTX 5080 Optimized)")
    print("=" * 60)
    
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    if not check_comfyui_running():
        print(f"Error: ComfyUI server not running at {COMFYUI_URL}")
        return

    print("Loading data...")
    prompts = parse_prompts_from_ts()
    print(f"Done: Total {len(prompts)} prompts loaded.")
    
    for idx, config in enumerate(prompts, 1):
        target_path = OUTPUT_DIR / f"{config['id']}-hero.webp"
        
        # 이미 존재하는 경우 스킵 (선택 사항)
        if target_path.exists():
            print(f"Skip: {config['id']} (Already exists)")
            # continue # 덮어쓰기 위해 주석 처리
            
        print(f"[{idx}/{len(prompts)}] Generating: {config['id']}")
        
        try:
            workflow = create_workflow(config)
            # 품질 상향 및 문자 스타일 고정 (영어 권장, 한자 배제)
            workflow["4"]["inputs"]["steps"] = 35
            workflow["4"]["inputs"]["cfg"] = 7.5
            workflow["2"]["inputs"]["text"] = config["prompt"] + ", high-quality English text, Latin characters, professional typography"
            workflow["3"]["inputs"]["text"] = config["negative"] + ", Chinese characters, Hanja, Kanji, Korean text, Japanese text, Asian characters, messy text"
            
            result = queue_prompt(workflow)
            prompt_id = result["prompt_id"]
            
            # 생성 대기
            print("   In queue...", end="", flush=True)
            while True:
                time.sleep(2)
                print(".", end="", flush=True)
                history = get_history(prompt_id)
                if prompt_id in history:
                    break
            
            # 이미지 다운로드 및 처리
            outputs = history[prompt_id]["outputs"]
            for node_id, node_output in outputs.items():
                if "images" in node_output:
                    for image in node_output["images"]:
                        image_data = get_image(image["filename"], image["subfolder"], image["type"])
                        
                        # [1단계] 원본 PNG 저장
                        orig_dir = PROJECT_ROOT / "public" / "images" / "originals"
                        orig_dir.mkdir(parents=True, exist_ok=True)
                        orig_path = orig_dir / f"{config['id']}-original.png"
                        with open(orig_path, "wb") as f:
                            f.write(image_data)
                        
                        # [2단계] WebP 변환 및 저장
                        process_and_save_as_webp(image_data, target_path)
                        print(f"\n   Success: {target_path.name} (Original saved to originals/)")
                        
        except Exception as e:
            print(f"\n   Error generating {config['id']}: {e}")

    print("\n" + "=" * 60)
    print("Sample generation process finished.")
    print(f"Check output at: {OUTPUT_DIR}")
    print("=" * 60)

if __name__ == "__main__":
    main()
