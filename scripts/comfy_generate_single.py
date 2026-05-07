import json
import urllib.request
import urllib.parse
import os
import time
import sys
from pathlib import Path
from PIL import Image
import io

# Settings
COMFYUI_URL = "http://127.0.0.1:8188"
PROJECT_ROOT = Path(r"c:\AI\Antigravity\Prompt")
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "prompts"
ORIGINALS_DIR = PROJECT_ROOT / "public" / "images" / "originals"
CKPT_NAME = "RealVisXL_V4.0.safetensors"

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
    """RealVisXL V4.0 Optimized Workflow"""
    width, height = 1024, 1024
    if config["category"] == "ui-ux" or config["category"] == "ui_ux":
        width, height = 1600, 900
    elif config["category"] == "marketing":
        width, height = 1024, 1280
        
    return {
        "1": {
            "inputs": {"ckpt_name": CKPT_NAME},
            "class_type": "CheckpointLoaderSimple"
        },
        "2": {
            "inputs": {"text": config["prompt"] + ", high-quality English text, Latin characters, professional typography", "clip": ["1", 1]},
            "class_type": "CLIPTextEncode"
        },
        "3": {
            "inputs": {"text": config["negative"] + ", Chinese characters, Hanja, Kanji, Korean text, Japanese text, Asian characters, messy text", "clip": ["1", 1]},
            "class_type": "CLIPTextEncode"
        },
        "4": {
            "inputs": {
                "seed": int(time.time()) % 1000000,
                "steps": 35,
                "cfg": 7.5,
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
            "inputs": {"filename_prefix": f"single_{config['id']}", "images": ["6", 0]},
            "class_type": "SaveImage"
        }
    }

def process_and_save_as_webp(image_data, target_path):
    img = Image.open(io.BytesIO(image_data))
    img.save(target_path.with_suffix(".webp"), "WEBP", quality=90, lossless=False)

def main():
    if len(sys.argv) < 5:
        print("Usage: python comfy_generate_single.py <id> <category> <prompt> <negative>")
        return

    prompt_id = sys.argv[1]
    category = sys.argv[2]
    prompt_text = sys.argv[3]
    negative_text = sys.argv[4]

    config = {
        "id": prompt_id,
        "category": category,
        "prompt": prompt_text,
        "negative": negative_text
    }

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    ORIGINALS_DIR.mkdir(parents=True, exist_ok=True)
    
    if not check_comfyui_running():
        print(f"Error: ComfyUI server not running at {COMFYUI_URL}")
        return

    print(f"Generating image for ID: {prompt_id}...")
    
    try:
        workflow = create_workflow(config)
        result = queue_prompt(workflow)
        comfy_prompt_id = result["prompt_id"]
        
        print("   In queue...", end="", flush=True)
        while True:
            time.sleep(2)
            print(".", end="", flush=True)
            history = get_history(comfy_prompt_id)
            if comfy_prompt_id in history:
                break
        
        outputs = history[comfy_prompt_id]["outputs"]
        for node_id, node_output in outputs.items():
            if "images" in node_output:
                for image in node_output["images"]:
                    image_data = get_image(image["filename"], image["subfolder"], image["type"])
                    
                    # Save Original
                    orig_path = ORIGINALS_DIR / f"{prompt_id}-original.png"
                    with open(orig_path, "wb") as f:
                        f.write(image_data)
                    
                    # Save WebP
                    target_path = OUTPUT_DIR / f"{prompt_id}.webp"
                    process_and_save_as_webp(image_data, target_path)
                    print(f"\n   Success: {target_path.name}")
                    
    except Exception as e:
        print(f"\n   Error: {e}")

if __name__ == "__main__":
    main()
