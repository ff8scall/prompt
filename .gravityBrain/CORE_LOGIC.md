# Core Logic (2026-05-07)

## Design Philosophy
PromptFlow는 단순한 프롬프트 나열이 아니라, **"검증된 시각 결과물로부터 프롬프트를 역추적하고 변주하는 경험"**을 제공합니다. 사용자는 이미지를 보고 그 이미지를 만든 원리(Variables, Why this works)를 학습합니다.

## Data Schema & Architecture
### 1. PromptCard Interface (`lib/types.ts`)
- 모든 프롬프트는 `PromptCard` 인터페이스를 엄격히 따릅니다.
- **Variables**: 프롬프트 텍스트 내의 특정 부분을 교체 가능하도록 설계 (`[subject]`, `[product_description]` 등).
- **SEO & pSEO**: 각 데이터는 고유의 `seo` 객체를 통해 동적 메타데이터와 JSON-LD(HowTo)를 생성합니다.

### 2. Modular Data System (`lib/data/`)
- 데이터 확장성 및 유지보수를 위해 카테고리별로 모듈을 분리했습니다.
  - `ui-ux.ts`, `game-asset.ts`, `marketing.ts`, `workflow-recipe.ts`.
- **Centralized Hub (`lib/prompts.ts`)**: 모든 모듈은 이 파일에서 통합(spread)되어 플랫폼 전체의 단일 소스(Single Source of Truth)인 `prompts` 배열을 형성합니다.

### 3. Routing & Rendering Strategy
- **Category Routing**: `app/category/[slug]/page.tsx`는 `generateStaticParams`를 통해 사전에 정의된 카테고리 페이지를 정적으로 생성합니다.
- **Prompt Detail**: `app/prompt/[slug]/page.tsx`는 동적 라우팅을 사용하며, 유효하지 않은 슬러그 접근 시 `notFound()`를 처리합니다.

## 핵심 비즈니스 로직
### 1. 변수 처리 및 샌드박스 (Variable Sandbox)
- 사용자가 `VariableSandbox` 컴포넌트에서 변수를 수정하면, `prompt_text` 내의 `[variable_name]`이 실시간으로 교체되는 시뮬레이션을 제공합니다.
- `variable_behavior_note`를 통해 사용자가 값을 바꿨을 때 결과물에서 "무엇이 유지되고 무엇이 변하는지"에 대한 시각적 예측 지식을 제공합니다.

### 2. 모델별 최적화 (Multi-Model Support)
- Midjourney v6, DALL-E 3, Stable Diffusion 등 각 모델의 특성에 맞춘 `model_notes`를 제공하여 모델 간 전환 시의 시행착오를 줄입니다.

## 지식 전수 (For Future Agents)
- **데이터 추가 절차**: 
  1. `lib/data/` 내 적절한 카테고리 파일에 `PromptCard` 객체 추가.
  2. 해당 파일의 export 배열(예: `uiUxPrompts`)에 객체 등록.
  3. `lib/prompts.ts`의 `prompts` 배열에 자동 합산되는지 확인.
- **라우팅 추가**: 새로운 카테고리를 만들 경우 `app/category/[slug]/page.tsx`의 `generateStaticParams`와 `validSlugs` 배열을 반드시 업데이트해야 합니다.
- **이미지 명명 규칙**: `asset_metadata.hero_image`에 명시된 경로(예: `/images/prompts/category-id-xxx.webp`)에 맞춰 실제 파일을 배치해야 합니다.
