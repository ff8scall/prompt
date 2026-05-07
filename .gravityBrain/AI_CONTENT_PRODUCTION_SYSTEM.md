# AI Content Production System

이 문서는 `prompt.lego-sia.com`에서 사용할 Visual-first 프롬프트 카드, pSEO 페이지, 검증 워크플로우, AI 생성 JSON 스키마의 운영 기준을 정의한다.

## 1. System Principle

PromptFlow의 콘텐츠 생산 시스템은 “AI가 마음대로 만든 프롬프트를 대량 발행하는 시스템”이 아니다.

목표는 사람이 먼저 검증한 고품질 시드 카드의 구조를 AI가 확장하고, 운영자가 품질 임계값에 따라 검수하며, 사용자는 미리 생성된 결과물과 복사 가능한 프롬프트만 소비하는 시스템을 만드는 것이다.

## 2. Non-API Product Constraint

PromptFlow는 사용자에게 직접 생성 기능을 제공하지 않는다.

### 2.1 허용

- 사전 생성된 이미지 결과물 노출.
- 검증된 프롬프트 텍스트 제공.
- One-click copy.
- 변수값 수정 UI.
- 수정된 프롬프트 텍스트 재조합.
- 사전 생성된 variations 제공.
- 모델별 사용 노트 제공.
- 외부 도구에서 사용하라는 안내.

### 2.2 불가

- 사용자가 사이트에서 이미지 생성 API 호출.
- 사용자 API 키 연결.
- Midjourney, DALL-E, Stable Diffusion, Runway 직접 실행.
- 실시간 생성 결과 미리보기.
- 생성 사용량 기반 과금.

## 3. Content Object Model

PromptFlow의 기본 단위는 `Visual Prompt Card`다.

### 3.1 Visual Prompt Card 구성

- 결과 이미지 (Result Image).
- 결과물 중심 제목.
- 짧은 감성 설명.
- 복사 가능한 프롬프트.
- 모델/버전 정보.
- 변수 가이드.
- Why This Works.
- 사전 생성 variations.
- SEO 태그.
- 관련 프롬프트.
- 검증 상태.

#### 결과 이미지(Result Image)란?

**결과 이미지는 PromptFlow 운영팀이 미리 생성하여 사이트에 저장한 예시 이미지다.**

생성 주체와 흐름:

```
[PromptFlow 운영자] → Midjourney/DALL-E/SDXL에서 직접 생성 → 이미지 저장 → 사이트 노출
                                            ↑                                    ↓
                                   (운영자가 외부 도구 사용)              (사용자는 복사만)
```

**사용자 경험:**

1. 사용자가 Google에서 "dashboard UI mockup" 검색
2. PromptFlow 카드 페이지 방문
3. **미리 생성된 결과 이미지**를 봄 (이건 예시/샘플)
4. "이 스타일을 원하면 이 프롬프트를 복사하세요"
5. Copy 버튼 클릭 → 자신의 Midjourney Discord에 붙여넣음
6. 사용자가 **자신의 도구에서** 실제 생성 실행

**중요한 차이:**

| 구분 | 운영자 (우리) | 사용자 |
|------|-------------|--------|
| 이미지 생성 | ✅ 외부 도구로 직접 생성 | ❌ 사이트에서 생성 불가 |
| 이미지 저장 | ✅ CDN/서버에 보관 | ❌ 필요 없음 |
| 이미지 탐색 | - | ✅ 사이트에서 예시 이미지 봄 |
| 프롬프트 복사 | - | ✅ 클릭 한 번으로 복사 |
| 실제 생성 | - | ✅ 자신의 Midjourney/도구에서 |

**왜 결과 이미지가 필요한가:**

- **Visual-first 검색**: 사용자는 "프롬프트"가 아니라 "결과물"을 검색함
- **품질 증거**: "이 프롬프트는 실제로 이런 결과가 나옵니다" 보증
- **복사 의도 상승**: 이미지를 보고 "이 스타일 원함" → 복사로 이어짐
- **SEO/Pinterest**: 이미지 검색 유입, 소셜 공유

**결과 이미지 유형:**

- `hero_image`: 카드 대표 이미지 (1600x900 권장)
- `thumbnail`: 목록/그리드용 썸네일
- `variations`: 동일 프롬프트의 색상/비율/스타일 변형 2-4개

### 3.2 Page Types

| Page type | 목적 | 주요 콘텐츠 |
|---|---|---|
| Prompt detail | 단일 카드 상세 | image, prompt, variables, model notes |
| Category landing | 카테고리 SEO | grid, intro, use cases, internal links |
| Style landing | 스타일 SEO | visual style cluster, examples |
| Workflow recipe | 작업 흐름 SEO | multi-step prompt set |
| Bundle page | 수익화 | curated pack, preview, purchase CTA |
| Comparison page | 모델별 차이 | Midjourney vs DALL-E vs SDXL notes |

## 4. Recommended JSON Schema

아래 스키마는 AI가 생성하고 사람이 검수하기 쉬운 필드 분리를 목표로 한다.

```json
{
  "id": "ui-dashboard-glassmorphism-001",
  "slug": "glassmorphism-dashboard-ui-prompt",
  "status": "draft",
  "quality_tier": "tier_1",
  "verified_badge": true,
  "last_verified_at": "2026-05-07",
  "title": "Glassmorphism SaaS Dashboard UI Prompt",
  "result_first_title": "A clean glassmorphism SaaS dashboard with glowing analytics cards",
  "short_description": "A polished dashboard concept for SaaS products that need a futuristic but usable interface.",
  "emotional_hook": "이 프롬프트는 어두운 밤의 유리 패널 위에 데이터가 조용히 빛나는 듯한 고급스러운 집중감을 만든다.",
  "category": "ui_ux",
  "vertical": "dashboard_design",
  "use_cases": ["saas_landing", "product_mockup", "design_moodboard"],
  "target_model": "midjourney",
  "model_version": "v6",
  "model_confidence": "tested",
  "version_history": [
    {
      "version": "1.0.0",
      "changed_at": "2026-05-07",
      "change_note": "Initial verified prompt for Midjourney v6."
    }
  ],
  "prompt_text": "[subject], glassmorphism dashboard UI, translucent panels, glowing analytics cards, dark navy background, soft gradients, premium SaaS interface, clean spacing, high detail --ar 16:9 --v 6",
  "negative_prompt": "cluttered layout, unreadable text, low contrast, distorted typography",
  "aspect_ratio_tags": ["16:9", "hero_image", "desktop_mockup"],
  "generation_params": {
    "aspect_ratio": "16:9",
    "style_strength": null,
    "seed": null,
    "quality": null
  },
  "variables": [
    {
      "name": "subject",
      "placeholder": "[subject]",
      "default_value": "AI analytics dashboard",
      "recommended_values": ["finance dashboard", "healthcare analytics dashboard", "creator economy dashboard"],
      "variable_behavior_note": "이 변수를 바꾸면 전체 유리 질감과 어두운 조명은 유지되고, 대시보드가 표현하는 산업과 데이터 맥락만 바뀐다."
    }
  ],
  "why_this_works": [
    "glassmorphism 키워드는 반투명 패널과 배경 흐림 효과를 유도한다.",
    "dark navy background와 soft gradients 조합은 고급 SaaS 제품의 시각적 신뢰감을 강화한다.",
    "clean spacing은 UI 이미지에서 흔한 과밀한 레이아웃 문제를 줄인다."
  ],
  "model_notes": [
    {
      "model": "midjourney",
      "version": "v6",
      "note": "UI의 전체적인 분위기와 카드 레이아웃 표현에 강하지만 실제 텍스트는 깨질 수 있다."
    },
    {
      "model": "dall-e-3",
      "version": "current",
      "note": "설명형 프롬프트에 강하나 Midjourney식 파라미터는 제거하는 것이 좋다."
    }
  ],
  "comparison_notes": "Midjourney v6는 조명과 질감이 강하고, DALL-E 3는 구성 의도 반영이 좋다. 실제 UI 텍스트가 필요한 경우 Figma에서 후처리하는 편이 안전하다.",
  "variations": [
    {
      "label": "Bright version",
      "prompt_delta": "replace dark navy background with bright white background and subtle pastel gradients",
      "pre_generated_asset_id": "asset_ui_dashboard_bright_001"
    },
    {
      "label": "Mobile version",
      "prompt_delta": "change dashboard UI to mobile app analytics screen, --ar 9:16",
      "pre_generated_asset_id": "asset_ui_dashboard_mobile_001"
    }
  ],
  "seo": {
    "primary_keyword": "glassmorphism dashboard UI prompt",
    "secondary_keywords": ["midjourney dashboard prompt", "saas dashboard ai prompt", "ui design prompt"],
    "lsi_keywords": ["translucent panels", "analytics cards", "dark mode SaaS", "futuristic UI design"],
    "meta_title": "Glassmorphism Dashboard UI Prompt for Midjourney v6",
    "meta_description": "Copy a verified Midjourney v6 prompt for a glassmorphism SaaS dashboard with variables, model notes, and ready-made variations."
  },
  "internal_links": {
    "related_prompt_ids": ["ui-dark-analytics-002", "ui-saas-landing-003"],
    "category_slug": "ui-ux-prompts",
    "bundle_slug": "saas-ui-prompt-pack"
  },
  "asset_metadata": {
    "image_url": "/images/prompts/ui-dashboard-glassmorphism-001.webp",
    "alt_text": "Glassmorphism SaaS dashboard UI with translucent cards and glowing analytics charts",
    "width": 1600,
    "height": 900,
    "format": "webp",
    "placeholder": "blurhash-or-base64-placeholder",
    "source_model": "midjourney",
    "source_prompt_hash": "short-human-readable-id",
    "exif_extracted": true,
    "exif_prompt": "raw prompt extracted from source image metadata if available",
    "cdn_cache_tier": "public_long_cache"
  },
  "ugc_policy": {
    "allow_user_submissions": true,
    "requires_rights_confirmation": true,
    "moderation_required": true
  },
  "review": {
    "human_review_required": true,
    "review_status": "approved",
    "reviewer_note": "Good seed card for UI/UX category. Text artifacts should be mentioned."
  }
}
```

## 5. Field Rules

### 5.1 Title Rules

좋은 제목은 프롬프트가 아니라 결과물을 설명한다.

좋음:

- `Glassmorphism SaaS Dashboard UI Prompt`.
- `Isometric Fantasy Village Tileset Prompt`.
- `Luxury Perfume Product Photo Prompt`.

나쁨:

- `Best Midjourney Prompt 001`.
- `Cool AI Image Prompt`.
- `Prompt for image generation`.

### 5.2 Emotional Hook Rules

`emotional_hook`은 카드의 감성적 장면을 한 문장으로 설명한다.

목표:

- 사용자가 결과물을 상상하게 한다.
- SEO 본문에 얇지 않은 설명을 추가한다.
- Pinterest식 탐색 감각을 강화한다.

예시:

- “이 프롬프트는 비 오는 날 창가에 앉아 마시는 따뜻한 커피 한 잔의 고요함을 담아낸다.”
- “이 프롬프트는 네온사인이 반사되는 밤거리의 속도감과 차가운 도시적 긴장을 만든다.”

### 5.3 Variable Behavior Note Rules

`variable_behavior_note`는 사용자의 기대를 관리한다.

반드시 설명해야 할 것:

- 이 변수를 바꾸면 무엇이 바뀌는가.
- 이 변수를 바꿔도 무엇이 유지되는가.
- 너무 과하게 바꾸면 어떤 실패가 생기는가.

예시:

- `subject`: 스타일, 조명, 카메라 무드는 유지되고 중심 피사체만 바뀐다.
- `lighting`: 피사체보다 전체 감정선과 대비에 더 큰 영향을 준다.
- `aspect_ratio`: 이미지의 목적을 바꾼다. 16:9는 hero image, 9:16은 mobile/social에 적합하다.

### 5.4 Aspect Ratio Tag Rules

`aspect_ratio_tags`는 단순 비율이 아니라 사용 목적까지 함께 표현한다.

예시:

- `16:9`, `hero_image`, `desktop_mockup`.
- `9:16`, `mobile_story`, `shorts_thumbnail`.
- `1:1`, `social_post`, `marketplace_thumbnail`.
- `4:5`, `instagram_feed`, `product_ad`.

이 필드는 필터, SEO landing page, 이미지 생성 재검증, CDN 썸네일 규격 관리에 모두 사용된다.

### 5.5 Version History Rules

`version_history`는 GitHub Gist의 revision처럼 프롬프트 변경 이력을 남긴다.

기록해야 하는 경우:

- 모델 버전이 바뀐 경우.
- prompt_text가 바뀐 경우.
- negative_prompt가 바뀐 경우.
- 변수 구조가 바뀐 경우.
- verified badge 상태가 바뀐 경우.
- 유저 신고나 재검증 결과로 deprecated 처리한 경우.

## 6. AI Generation Guideline

### 6.1 Master Instruction

AI 에이전트는 아래 기준으로 콘텐츠를 생성해야 한다.

- 결과 이미지가 먼저 떠오르는 제목을 만든다.
- 프롬프트는 특정 모델에서 실제로 사용할 수 있는 형태로 작성한다.
- 모델별 파라미터를 섞어 쓰지 않는다.
- 모든 변수에는 behavior note를 포함한다.
- Why This Works는 최소 3개 항목으로 작성한다.
- SEO 태그에는 primary, secondary, LSI 키워드를 분리한다.
- 동일 템플릿 반복을 피하고 use case별 설명을 다르게 쓴다.
- 사용자에게 사이트 안에서 생성할 수 있다고 암시하지 않는다.
- 외부 도구에 붙여넣어 사용하라는 흐름을 유지한다.

### 6.2 Few-shot Seed Pattern

AI가 따라야 할 카드 구조:

1. 결과물 중심 제목.
2. 한 줄 감성 설명.
3. 모델과 버전.
4. 복사 가능한 prompt.
5. 변수 목록.
6. 변수별 behavior note.
7. Why This Works.
8. 모델별 주의점.
9. 사전 생성 variation.
10. SEO cluster.

## 7. Production Workflow

### 7.1 Phase 1: Manual Seed Batch

첫 14일 동안 사람이 직접 50~100개 카드를 만든다.

목적:

- 품질 기준 확립.
- AI few-shot 예시 확보.
- 초기 카테고리 수요 검증.
- 이미지와 프롬프트의 실제 매칭 품질 확인.

필수 작업:

- 카테고리별 대표 카드 작성.
- 실제 외부 도구에서 프롬프트 테스트.
- 결과 이미지 저장.
- Why This Works 수동 작성.
- variable behavior note 작성.
- 모델 버전 기록.

### 7.2 Phase 2: AI-assisted Expansion

AI가 seed 구조를 바탕으로 Draft를 생성한다.

운영자는 아래만 집중 검수한다.

- 제목이 검색 의도와 맞는가.
- 프롬프트가 실제 모델 문법에 맞는가.
- 이미지 결과와 설명이 일치하는가.
- thin content가 아닌가.
- 상표, 아티스트 스타일, NSFW 문제가 없는가.

### 7.3 Phase 3: pSEO Publishing

검수 통과 콘텐츠를 카테고리, 스타일, 모델, use case별 페이지로 발행한다.

발행 전 체크:

- canonical URL.
- meta title/description.
- image alt.
- internal links.
- related prompts.
- schema markup.
- last verified date.

## 8. Quality Tier System

### 8.1 Tier 1

대상:

- Homepage featured cards.
- Paid bundles.
- Official recommended prompts.
- High-volume SEO landing pages.

기준:

- 사람 100% 검수.
- 실제 결과 이미지 필요.
- 모델 버전 확인.
- Why This Works 수동 보강.
- 변수 행동 설명 필수.

### 8.2 Tier 2

대상:

- 일반 pSEO 카드.
- 카테고리 확장 페이지.
- 롱테일 키워드 페이지.

기준:

- AI 생성 가능.
- 사람 샘플링 검수.
- 중복도 검사.
- 품질 점수 기준 미달 시 보류.

### 8.3 Tier 3

대상:

- related tags.
- related workflows.
- 자동 추천 문구.
- variation 설명 일부.

기준:

- AI 자율 생성 가능.
- 사후 모니터링.
- 검색 유입 페이지 본문에는 단독 사용 금지.

## 9. pSEO Template Strategy

### 9.1 Thin Content 방지 원칙

페이지마다 달라야 하는 축을 생성 전에 정한다.

| Axis | 반드시 달라져야 할 내용 |
|---|---|
| Use case | 사용 상황, 추천 변수, 실패 패턴 |
| Model | 파라미터, 강점, 주의점 |
| Style | 색감, 조명, 질감, 구도 |
| Difficulty | 초보자 설명, 고급 파라미터, 후처리 팁 |

### 9.2 Detail Page Template

권장 구조:

1. Hero image.
2. Copy prompt block.
3. Quick facts.
4. Why this works.
5. Variables you can change.
6. Pre-generated variations.
7. Model-specific notes.
8. Best use cases.
9. Common failure modes.
10. Related prompts.
11. FAQ.

### 9.3 Category Page Template

권장 구조:

1. Category intro.
2. Best prompt cards.
3. Filter by style/use case/model.
4. Beginner recommendations.
5. Advanced prompt packs.
6. Related categories.
7. Category FAQ.

## 10. Image Pipeline

### 10.1 Required Assets

각 카드에는 최소 1개 대표 이미지가 필요하다.

권장:

- hero image.
- thumbnail.
- 2~4 variations.
- optional before/after or model comparison.

### 10.2 Optimization Rules

- 원본 보관.
- WebP/AVIF 제공.
- 썸네일 별도 생성.
- width/height 메타데이터 기록.
- blur placeholder 생성.
- alt text 자동 생성 후 검수.
- image sitemap 포함.
- above-the-fold 대표 이미지는 preload 후보로 관리.
- masonry grid에서는 고정 aspect ratio box로 layout shift 방지.
- CDN cache tier를 hero, thumbnail, archive로 분리.

### 10.3 Metadata Extraction

이미지 생성 과정에서 남길 데이터:

- source model.
- model version.
- original prompt.
- negative prompt.
- seed if available.
- aspect ratio.
- generated date.
- operator.
- license note.

가능하면 EXIF 또는 이미지 메타데이터에서 prompt, seed, model, generation parameters를 추출한다. 단, 추출값은 그대로 신뢰하지 않고 운영자가 검수한 `prompt_text`, `negative_prompt`, `generation_params`와 분리해 저장한다.

권장 분리:

- `exif_prompt`: 이미지 파일에서 추출한 원문.
- `prompt_text`: PromptFlow가 사용자에게 제공하는 검수 완료 프롬프트.
- `source_prompt_hash`: 원문과 검수본을 연결하는 내부 식별자.
- `license_note`: 이미지 전시와 재사용 권리 판단을 위한 메모.

## 11. Model Version Control

AI 모델 업데이트는 기존 프롬프트 품질을 바꿀 수 있다.

필수 필드:

- `target_model`.
- `model_version`.
- `last_verified_at`.
- `model_confidence`.
- `verified_badge`.
- `retest_required`.

검증 상태:

| Status | 의미 |
|---|---|
| `tested` | 실제 결과 확인 완료 |
| `adapted` | 다른 모델용으로 변환됨 |
| `estimated` | 아직 결과 미확인 |
| `deprecated` | 현재 모델에서 품질 저하 |

### 11.1 Retest Queue SOP

재검증 큐에 들어가는 조건:

- 모델 major version 업데이트.
- 유저가 결과 불일치 또는 품질 저하 신고.
- Tier 1 카드의 마지막 검증일이 오래됨.
- 유료 번들 포함 예정.
- 홈페이지, 카테고리 상단, 뉴스레터에 노출 예정.

재검증 결과 처리:

- 결과가 유지되면 `tested`와 `last_verified_at`을 갱신한다.
- 작은 수정으로 복구 가능하면 prompt patch 후 `version_history`를 남긴다.
- 품질이 크게 떨어지면 `deprecated`로 내리고 대체 카드를 연결한다.
- 다른 모델에서 더 잘 작동하면 `adapted` 버전을 별도 카드로 만든다.

### 11.2 Verified Badge Display Rules

사용자에게 보여줄 배지는 구체적이어야 한다.

권장 문구:

- `Tested in Midjourney v6`.
- `Verified on 2026-05-07`.
- `Human Curated`.
- `Needs Retest`.
- `Deprecated for Midjourney v5`.

## 12. Review Checklist

발행 전 체크리스트:

- 결과물 중심 제목인가.
- 이미지와 프롬프트가 일치하는가.
- 사이트 안에서 생성 가능하다고 오해하게 만들지 않는가.
- 모델 버전이 명확한가.
- 변수 설명이 결과 예측형인가.
- Why This Works가 구체적인가.
- SEO 키워드가 자연스러운가.
- 같은 템플릿 문장이 반복되지 않는가.
- 저작권, 상표, 아티스트 스타일 문제가 없는가.
- NSFW 또는 민감 콘텐츠가 없는가.
- 관련 링크가 실제로 유용한가.

### 12.1 Contributor Submission Checklist

사용자 제출 결과물은 아래 조건을 통과해야 노출한다.

- 제출자가 본인이 생성한 이미지라고 확인했는가.
- PromptFlow에 전시할 권리를 부여했는가.
- 사용 모델과 모델 버전을 기록했는가.
- 사용한 프롬프트 또는 수정한 변수값을 기록했는가.
- 이미지에 상표, 유명인, 민감 콘텐츠, NSFW 요소가 없는가.
- 특정 생존 작가의 스타일 모방을 전면에 내세우지 않는가.
- 유료 번들, 홈페이지, 공식 추천 카드에 연결할 경우 사람이 직접 검수했는가.

### 12.2 Interactive Sandbox QA Checklist

Sandbox는 생성기가 아니라 조합기이므로 아래 문구와 동작을 지킨다.

- 변수 변경 시 이미지를 새로 생성하지 않는다.
- copy prompt block만 즉시 갱신한다.
- 사전 생성 variation이 없는 경우 예상 이미지를 보여주지 않는다.
- “외부 생성 도구에 붙여넣어 테스트하세요” 안내를 명확히 표시한다.
- 변수별 behavior note가 누락되면 발행하지 않는다.

## 13. Metrics

### 13.1 Content Quality Metrics

- copy button CTR.
- prompt detail dwell time.
- related prompt CTR.
- collection save rate.
- search impression growth.
- indexed page ratio.
- duplicate content warning count.
- manual rejection rate.

### 13.2 Production Metrics

- cards created per week.
- cards approved per week.
- average review time.
- Tier 1/Tier 2/Tier 3 ratio.
- retest queue size.
- stale model version count.

## 14. Recommended Initial Dataset

초기 100개 카드 추천 분배:

| Vertical | Count | Priority |
|---|---:|---|
| UI/UX | 25 | High |
| Game Asset | 20 | High |
| Marketing/Ecommerce | 20 | High |
| Workflow Recipe | 10 | Medium |
| Social Content | 10 | Medium |
| Experimental Styles | 10 | Medium |
| Model Comparison | 5 | Low |

## 15. Operating Rule

PromptFlow의 콘텐츠 생산은 양보다 검증 신뢰가 우선이다.

AI는 초안을 빠르게 만들 수 있지만, 사용자가 다시 방문하게 만드는 것은 “이 사이트의 프롬프트는 실제로 쓸 만하다”는 경험이다. 따라서 모든 시스템 설계는 copy, trust, clarity, repeatability를 중심으로 판단한다.
