#!/usr/bin/env python3
"""
ComfyUI API를 통해 PromptFlow용 이미지 3개 자동 생성
"""

import json
import urllib.request
import urllib.parse
import os
import time
from pathlib import Path

# ComfyUI 서버 주소
COMFYUI_URL = "http://127.0.0.1:8188"

# 출력 폴더
OUTPUT_DIR = Path(r"c:\AI\Antigravity\Prompt\public\images\prompts")

# 생성할 프롬프트 설정
PROMPTS = [
    {
        "id": "ui-dashboard-glassmorphism-001",
        "filename": "ui-dashboard-glassmorphism-001-hero.png",
        "prompt": "glassmorphism dashboard UI, translucent panels with subtle blur, glowing analytics cards with soft gradients, dark navy background, premium SaaS interface, clean spacing, high detail, 8k render, modern web design, data visualization, professional",
        "negative": "cluttered layout, unreadable text, low contrast, distorted typography, photorealistic, human figures, blurry, watermark, text",
        "width": 1600,
        "height": 900,
        "seed": 42
    },
    {
        "id": "game-tileset-fantasy-001",
        "filename": "game-tileset-fantasy-001-hero.png",
        "prompt": "isometric medieval village, timber houses, cobblestone paths, 2.5D pixel art game tileset, hand-painted texture style, top-down 45-degree angle, modular buildings, autumn foliage, soft shadows, game-ready asset, clean edges, pixel art, warm colors",
        "negative": "photorealistic, 3D render, perspective distortion, blurry edges, human figures, modern buildings, cars, text",
        "width": 1024,
        "height": 1024,
        "seed": 123
    },
    {
        "id": "marketing-product-luxury-001",
        "filename": "marketing-product-luxury-001-hero.png",
        "prompt": "elegant perfume bottle with gold cap on marble surface, luxury product photography, soft diffused studio lighting from upper left, elegant subtle reflections, premium background, high-end commercial photography, 8k detail, professional color grading, shallow depth of field",
        "negative": "busy cluttered background, harsh flash shadows, amateur lighting, watermark, text overlay, multiple products, crowded, oversaturated",
        "width": 1024,
        "height": 1280,
        "seed": 456
    },
    {
        "id": "ui-dark-analytics-002",
        "filename": "ui-dark-analytics-002-hero.png",
        "prompt": "crypto portfolio dashboard, dark mode analytics dashboard, neon accent lines, data visualization charts, midnight blue background, glowing grid lines, professional data UI, clean typography, futuristic interface",
        "negative": "bright background, cluttered layout, pastel colors, cartoon style, 3D render, human figures",
        "width": 1600,
        "height": 900,
        "seed": 789
    },
    {
        "id": "ui-saas-landing-003",
        "filename": "ui-saas-landing-003-hero.png",
        "prompt": "AI writing tool landing page, hero section with 3D product mockup, gradient background, CTA button, modern typography, clean layout, professional web design, high conversion UI",
        "negative": "cluttered design, outdated style, stock photos, multiple products, confusing layout",
        "width": 1600,
        "height": 900,
        "seed": 101
    },
    {
        "id": "game-rpg-icon-003",
        "filename": "game-rpg-icon-003-hero.png",
        "prompt": "magic sword game icon, RPG item, centered composition, plain background, detailed texture, game UI asset, fantasy style, high quality",
        "negative": "photorealistic, human figure, complex background, 3D render, blurry, low detail",
        "width": 1024,
        "height": 1024,
        "seed": 202
    }
]

def check_comfyui_running():
    """ComfyUI 서버 확인"""
    try:
        req = urllib.request.Request(f"{COMFYUI_URL}/system_stats")
        with urllib.request.urlopen(req, timeout=5) as response:
            return True
    except:
        return False

def queue_prompt(workflow):
    """ComfyUI에 프롬프트 전송"""
    p = {"prompt": workflow}
    data = json.dumps(p).encode('utf-8')
    req = urllib.request.Request(
        f"{COMFYUI_URL}/prompt",
        data=data,
        headers={'Content-Type': 'application/json'}
    )
    
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read())

def get_history(prompt_id):
    """생성 결과 조회"""
    req = urllib.request.Request(f"{COMFYUI_URL}/history/{prompt_id}")
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read())

def get_image(filename, subfolder, folder_type):
    """이미지 다운로드"""
    data = {"filename": filename, "subfolder": subfolder, "type": folder_type}
    url = f"{COMFYUI_URL}/view?{urllib.parse.urlencode(data)}"
    
    with urllib.request.urlopen(url) as response:
        return response.read()

def create_workflow(prompt_config):
    """SDXL 기본 workflow 생성"""
    return {
        "1": {
            "inputs": {
                "ckpt_name": "RealVisXL_V4.0.safetensors"
            },
            "class_type": "CheckpointLoaderSimple"
        },
        "2": {
            "inputs": {
                "text": prompt_config["prompt"],
                "clip": ["1", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "3": {
            "inputs": {
                "text": prompt_config["negative"],
                "clip": ["1", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "4": {
            "inputs": {
                "seed": prompt_config["seed"],
                "steps": 30,
                "cfg": 7,
                "sampler_name": "dpmpp_2m",
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
            "inputs": {
                "width": prompt_config["width"],
                "height": prompt_config["height"],
                "batch_size": 1
            },
            "class_type": "EmptyLatentImage"
        },
        "6": {
            "inputs": {
                "samples": ["4", 0],
                "vae": ["1", 2]
            },
            "class_type": "VAEDecode"
        },
        "7": {
            "inputs": {
                "filename_prefix": prompt_config["id"],
                "images": ["6", 0]
            },
            "class_type": "SaveImage"
        }
    }

def main():
    print("=" * 60)
    print("PromptFlow Image Generator")
    print("=" * 60)
    
    # 폴더 생성
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"\nOutput folder: {OUTPUT_DIR}")
    
    # ComfyUI 확인
    print("\nChecking ComfyUI server...")
    if not check_comfyui_running():
        print(f"ERROR: ComfyUI server not running at {COMFYUI_URL}")
        print("Please start ComfyUI first.")
        return
    print("OK: ComfyUI server connected")
    
    # 각 프롬프트로 생성
    for idx, prompt_config in enumerate(PROMPTS, 1):
        print(f"\n[{idx}/3] Generating: {prompt_config['id']}")
        print(f"    Prompt: {prompt_config['prompt'][:60]}...")
        
        try:
            # workflow 생성 및 전송
            workflow = create_workflow(prompt_config)
            result = queue_prompt(workflow)
            prompt_id = result["prompt_id"]
            print(f"    Prompt ID: {prompt_id}")
            
            # 생성 완료 대기 (최대 2분)
            print("    Generating...", end="", flush=True)
            max_wait = 120
            waited = 0
            
            while waited < max_wait:
                time.sleep(2)
                waited += 2
                print(".", end="", flush=True)
                
                history = get_history(prompt_id)
                if prompt_id in history:
                    break
            
            print(" Done!")
            
            # 결과 확인
            history = get_history(prompt_id)
            if prompt_id not in history:
                print(f"    WARNING: Result not found")
                continue
            
            outputs = history[prompt_id]["outputs"]
            
            # 이미지 저장
            for node_id, node_output in outputs.items():
                if "images" in node_output:
                    for image in node_output["images"]:
                        image_data = get_image(
                            image["filename"],
                            image["subfolder"],
                            image["type"]
                        )
                        
                        output_path = OUTPUT_DIR / prompt_config["filename"]
                        with open(output_path, "wb") as f:
                            f.write(image_data)
                        
                        print(f"    Saved: {output_path}")
                        
        except Exception as e:
            print(f"    ERROR: {e}")
    
    print("\n" + "=" * 60)
    print("Generation complete!")
    print(f"Images saved to: {OUTPUT_DIR}")
    print("Refresh the website to see the images.")
    print("=" * 60)

if __name__ == "__main__":
    main()
