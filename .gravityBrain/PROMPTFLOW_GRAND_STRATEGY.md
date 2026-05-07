# PromptFlow Grand Strategy

`prompt.lego-sia.com`은 사용자가 “프롬프트를 찾는 것”이 아니라 “원하는 시각 결과물을 찾는 것”에서 출발하는 Visual-first 프롬프트 탐색 서비스다.

## 1. Executive Summary

PromptFlow의 핵심 전략은 프롬프트를 텍스트 조각이 아니라 검증된 시각 결과물과 재사용 가능한 제작 레시피로 포장하는 것이다.

사용자는 보통 “좋은 프롬프트”를 검색하지 않는다. 사용자는 “대시보드 디자인”, “아이소메트릭 게임 타일”, “따뜻한 무드의 제품 사진”, “모바일 앱 랜딩페이지”처럼 자신이 얻고 싶은 결과물을 검색한다. 따라서 PromptFlow는 검색 결과의 첫 단위를 프롬프트 텍스트가 아니라 이미지 카드, 스타일 태그, 사용 목적, 모델 노트, 복사 가능한 프롬프트로 구성해야 한다.

핵심 제약은 명확하다. 사용자는 사이트 안에서 직접 AI 모델 API를 호출하지 않는다. PromptFlow는 실시간 생성 도구가 아니라 우리가 미리 생성하고 검증한 결과물, 프롬프트, 변형, 워크플로우를 탐색하고 복사하는 라이브러리다.

## 2. Core Positioning

### 2.1 한 줄 포지셔닝

PromptFlow는 원하는 AI 이미지 결과물을 먼저 보고, 검증된 프롬프트와 변수 가이드를 즉시 복사하는 Visual-first prompt library다.

### 2.2 결합해야 할 경험

| 레퍼런스 | 가져올 강점 | PromptFlow 적용 |
|---|---|---|
| Pinterest | 시각 중심 탐색, 무한 발견감 | 결과물 카드, 보드형 카테고리, 스타일 태그 |
| GitHub Gist | 복사 가능한 실용성, 버전 감각 | Prompt copy, model version, verified badge |
| PromptHero/Lexica | AI 이미지 검색과 프롬프트 연결 | 이미지-프롬프트 매핑, 모델별 노트 |
| Civitai | 모델/파라미터 커뮤니티 지식 | generation metadata, negative prompt, seed notes |
| PromptBase | 프롬프트 상품화 | curated bundle, megabundle, premium pack |

### 2.3 하지 말아야 할 것

- 실시간 이미지 생성 도구처럼 포지셔닝하지 않는다.
- 사용자의 API 키를 입력받지 않는다.
- 외부 모델 API 호출을 핵심 UX로 만들지 않는다.
- AI가 대량 생성한 얇은 프롬프트 페이지를 무검수로 발행하지 않는다.
- “프롬프트 저장소”처럼 텍스트만 나열하지 않는다.

## 3. Research: 경쟁 분석보다 대체 솔루션 분석

PromptFlow의 경쟁자는 프롬프트 라이브러리 사이트만이 아니다. 더 큰 경쟁자는 사용자의 기존 작업 방식이다.

| 사용자가 원하는 것 | 현재 대체 행동 | 문제 | PromptFlow의 차별 |
|---|---|---|---|
| 특정 스타일 이미지 찾기 | Midjourney Discord 피드 스크롤 | 검색과 필터가 약하고 재현성이 낮음 | 카테고리 + 스타일 태그 + 결과물 카드로 3초 탐색 |
| 바로 쓸 프롬프트 확보 | 커뮤니티 글, Gist, 블로그 복붙 | 모델 버전, 변수, 파라미터 맥락 부족 | verified prompt, variables, model notes 제공 |
| 왜 잘 나오는지 이해 | YouTube 튜토리얼 시청 | 시간이 오래 걸림 | Why This Works로 즉시 이해 |
| 비슷한 변형 만들기 | 직접 시행착오 | 결과 예측이 어려움 | 사전 생성 variations와 variable behavior note 제공 |
| 팀/클라이언트에 공유 | 스크린샷과 텍스트 따로 전달 | 맥락 손실 | 공유 가능한 카드 페이지 제공 |

### 3.1 시간 절약 메시지

마케팅 메시지는 “프롬프트 모음”보다 “탐색 시간 단축”을 강조해야 한다.

- Discord에서 20분 스크롤할 것을 20초 안에 찾는다.
- YouTube 튜토리얼 15분을 Why This Works 30초 설명으로 압축한다.
- 모델별 시행착오를 verified badge와 model notes로 줄인다.
- 변수 변경 실패를 variable behavior note로 줄인다.

## 4. Target Personas

### 4.1 UI/UX Designer

- 찾는 것: dashboard UI, app landing page, glassmorphism card, neumorphism button.
- 원하는 가치: 클라이언트 제안서나 디자인 무드보드에 쓸 시각 레퍼런스.
- 핵심 UX: 카테고리 필터, aspect ratio, UI component tag, copy prompt.

### 4.2 Indie Game Developer

- 찾는 것: isometric tileset, RPG item icon, fantasy background, pixel art character.
- 원하는 가치: 빠르게 콘셉트 아트를 만들 수 있는 검증 프롬프트.
- 핵심 UX: asset type, art style, game genre, transparent background note.

### 4.3 Marketer & Ecommerce Owner

- 찾는 것: product photo, Instagram ad visual, package mockup, seasonal banner.
- 원하는 가치: 광고 소재와 상세페이지 비주얼을 빠르게 실험.
- 핵심 UX: use case, platform size, commercial tone, brand mood variables.

### 4.4 AI Content Operator

- 찾는 것: 대량 콘텐츠 아이디어, 워크플로우 레시피, pSEO 확장 구조.
- 원하는 가치: 프롬프트 하나를 여러 검색 의도 페이지로 확장하는 운영 체계.
- 핵심 UX: workflow recipe, JSON schema, reusable prompt set.

## 5. Content Verticals

### 5.1 UI/UX Component Library

- Dashboard design prompt.
- SaaS landing page prompt.
- Mobile onboarding screen prompt.
- Neumorphism button prompt.
- Glassmorphism card prompt.
- Dark mode analytics UI prompt.

SEO 검색 의도는 “AI로 UI 시안 만들기”, “Midjourney UI design prompt”, “app landing page prompt”처럼 실용적이다.

### 5.2 Game Asset Production

- Isometric tileset.
- RPG item icon.
- Pixel art character.
- Fantasy map.
- Cyberpunk background.
- Game inventory UI.

이 카테고리는 결과물 품질과 반복 가능성이 중요하다. 모델별 파라미터, negative prompt, background handling, sprite consistency note가 필요하다.

### 5.3 Marketing & Ecommerce

- Product hero image.
- Instagram ad creative.
- Package design mockup.
- Event banner background.
- Seasonal campaign visual.
- Brand mood board.

상업적 사용 맥락이 강하므로 brand tone, color palette, target audience, ad platform size를 변수로 제공한다.

### 5.4 Workflow Recipes

단일 프롬프트가 아니라 작업 흐름 전체를 제공한다.

예시:

1. ChatGPT로 캠페인 콘셉트 작성.
2. PromptFlow에서 검증 이미지 프롬프트 선택.
3. Midjourney 또는 DALL-E에서 사용자가 외부에서 생성.
4. Canva/Figma에서 편집.
5. Runway 등 외부 도구에서 영상화.

PromptFlow는 이 과정에서 직접 API를 호출하지 않고, 사전 검증된 프롬프트와 단계별 지침만 제공한다.

## 6. UX Strategy

### 6.1 핵심 사용자 흐름

1. 사용자가 Google에서 결과물 중심 키워드로 유입된다.
2. 랜딩 페이지에서 대표 이미지와 관련 변형을 본다.
3. Why This Works로 프롬프트의 작동 원리를 빠르게 이해한다.
4. variable guide로 바꿀 수 있는 부분을 확인한다.
5. Copy Prompt 버튼으로 외부 AI 도구에 붙여넣는다.
6. related prompts, variations, bundles를 탐색한다.
7. 저장, 공유, 컬렉션 기능으로 재방문한다.

### 6.2 API 호출 불가 조건에서의 Remix UX

PromptFlow는 실시간 생성 Remix를 제공하지 않는다. 대신 아래 UX를 제공한다.

- 프롬프트 내부 변수를 UI에서 수정한다.
- 수정된 프롬프트 텍스트가 즉시 조합된다.
- 실제 이미지는 생성하지 않는다.
- variable behavior note로 변경 결과를 설명한다.
- 사전에 만들어둔 variations 이미지가 있으면 함께 보여준다.

예시:

| 변수 | 설명 | Behavior note |
|---|---|---|
| `[subject]` | 중심 피사체 | 이 값을 바꾸면 전체 스타일과 조명은 유지되고 피사체만 교체된다. |
| `[lighting]` | 조명 분위기 | 이 값을 바꾸면 이미지의 감정선과 대비가 가장 크게 변한다. |
| `[camera_angle]` | 카메라 시점 | 이 값을 바꾸면 같은 장면도 제품 사진, 영화 스틸, UI 목업처럼 보일 수 있다. |

### 6.3 리텐션 장치

- One-click copy.
- Prompt variations.
- Related visual styles.
- Save to collection.
- Recently copied prompts.
- Verified badge.
- Model version badge.
- Weekly curated pack.
- User-submitted result showcase.

### 6.4 Interactive Variable Sandbox

PromptFlow의 Sandbox는 생성기가 아니라 프롬프트 조합기다. 사용자가 변수값을 바꾸면 프롬프트 텍스트와 설명만 즉시 갱신되고, 실제 이미지는 생성하지 않는다.

- `[subject]`, `[color]`, `[lighting]`, `[camera_angle]`, `[aspect_ratio]` 같은 변수를 입력창, 드롭다운, preset chip으로 분리한다.
- 사용자가 값을 바꾸면 copy block의 최종 프롬프트가 즉시 재조합된다.
- 각 변수 옆에는 “무엇이 바뀌고 무엇이 유지되는지”를 설명하는 behavior note를 보여준다.
- 사전 생성된 variation이 있는 경우에만 예상 결과 이미지를 보여준다.
- 사전 생성 이미지가 없으면 “이 변경은 외부 생성 도구에서 직접 테스트해야 한다”고 명확히 안내한다.

### 6.5 UGC & Social Proof Loop

초기 MVP 이후에는 사용자가 외부 도구에서 직접 생성한 결과물을 제출하는 구조를 추가한다. 이 기능은 PromptFlow가 API를 호출하는 기능이 아니라 사용자의 결과 사례를 수집하는 커뮤니티 플라이휠이다.

- `I made this` 제출 버튼을 제공한다.
- 사용자는 이미지, 사용 모델, 모델 버전, 사용한 프롬프트, 수정한 변수값을 제출한다.
- 제출 시 본인이 생성했으며 PromptFlow에 전시할 권리가 있음을 확인한다.
- 승인된 제출물은 원본 카드의 하위 사례, social proof, variation evidence로 노출한다.
- 유료 번들 또는 공식 추천 카드에는 검수된 UGC만 연결한다.

## 7. Technical SEO Strategy

### 7.1 Helpful Content 방어

AI 대량 생성 pSEO 페이지는 thin content 위험이 있다. 각 페이지는 최소한 아래 고유 가치를 가져야 한다.

- 실제 결과 이미지 또는 검증 썸네일.
- Why This Works 분석.
- Variable guide.
- Model-specific notes.
- Use case examples.
- Related prompts.
- Human curation signal.
- Last verified model version.

### 7.2 pSEO 변형 축

프롬프트 하나를 의미 있는 여러 페이지로 확장하려면 템플릿 차별 축이 필요하다.

| 변형 축 | 예시 | 목적 |
|---|---|---|
| Use case | UI용, 게임용, 마케팅용 | 검색 의도 분리 |
| Model | Midjourney v6, DALL-E 3, SDXL | 실행 환경 차이 설명 |
| Visual style | Minimal, 3D, illustration, cinematic | 결과 취향 분리 |
| Difficulty | beginner simplified, advanced full params | 사용자 숙련도 분리 |

단, 하나의 원본 카드에서 파생되는 페이지는 각기 다른 설명, 예시, 변수 가이드, 모델 주의점을 포함해야 한다.

### 7.3 이미지 SEO

Visual-first 서비스는 이미지 로딩이 곧 SEO와 전환율이다.

- WebP/AVIF 변환.
- responsive image sizes.
- lazy loading.
- blur-up placeholder.
- descriptive alt text.
- image sitemap.
- CDN cache.
- LCP 최적화.
- infinite scroll 사용 시 crawlable pagination 병행.

### 7.4 구조화 데이터

검토 대상 schema:

- `ImageObject`.
- `CreativeWork`.
- `HowTo` for workflow recipes.
- `FAQPage` for prompt usage questions.
- `BreadcrumbList`.

### 7.5 Helpful Content UI Signals

검색엔진과 사용자 모두에게 “얇은 AI 콘텐츠가 아니라 검수된 제작 레시피”라는 신호를 줘야 한다.

- Why This Works를 접힌 부록이 아니라 prompt block 근처의 핵심 섹션으로 배치한다.
- Variable Guide는 단순 placeholder 목록이 아니라 결과 예측형 설명으로 보여준다.
- Tested in Midjourney v6, Last verified date, Human curated badge를 카드 상단 quick facts에 노출한다.
- 모델별 한계, 실패 패턴, 후처리 팁을 숨기지 않고 명시한다.
- 동일한 프롬프트 파생 페이지라도 use case, model, style, difficulty별 본문 구조와 예시를 다르게 유지한다.

## 8. Monetization Strategy

사용자 직접 API 호출이 불가하므로 수익화는 생성 사용량 과금이 아니라 검증 콘텐츠와 큐레이션 가치에 집중한다.

### 8.1 무료 트래픽 기반

- SEO 유입.
- 광고.
- 제휴 링크.
- 뉴스레터 전환.

### 8.2 Premium Packs

- UI prompt megabundle.
- Game asset prompt pack.
- Ecommerce product photo prompt pack.
- Seasonal marketing visual pack.
- Workflow recipe bundle.

### 8.3 Pro Features

- private collections.
- advanced filters.
- export as JSON/CSV.
- team sharing.
- saved variable presets.
- trend report.

`trend report`는 MVP 초기 유료 기능으로 바로 만들지 않는다. 0~60일 구간에서는 수동 큐레이션 기반의 “weekly popular prompts”로 시작하고, 충분한 copy/save/search 데이터가 쌓인 뒤 61~90일 이후 유료 리포트로 전환한다.

### 8.4 Affiliate

- 이미지 생성 도구.
- 디자인 도구.
- 에셋 마켓.
- 교육 콘텐츠.

단, affiliate는 사용자 신뢰를 해치지 않도록 명확히 표시한다.

## 9. Quality & Risk Strategy

### 9.1 인간 개입 임계값

| Tier | 대상 | 검수 방식 |
|---|---|---|
| Tier 1 | 유료 번들, 공식 추천 카드, 홈페이지 노출 카드 | 사람 100% 검수 |
| Tier 2 | 일반 pSEO 페이지, 카테고리 확장 콘텐츠 | AI 생성 + 사람 샘플링 검수 |
| Tier 3 | 관련 태그, related workflows, 일부 variations 텍스트 | AI 자율 + 사후 모니터링 |

### 9.2 주요 리스크

| 리스크 | 영향 | 대응 |
|---|---|---|
| Thin content | 검색 노출 저하 | Why This Works, 모델 노트, 변수 설명 필수화 |
| 이미지 저작권 | 법적/브랜드 리스크 | 생성 출처, 사용 모델, 금지 스타일 정책 기록 |
| 모델 버전 노후화 | 프롬프트 품질 저하 | verified date, model_version, retest queue |
| CDN 비용 증가 | 운영비 증가 | 이미지 압축, tiered cache, 썸네일 우선 |
| NSFW/상표 문제 | 도메인 평판 손상 | 금칙어, moderation queue, manual review |
| UGC 권리 불명확 | 게시 중단/분쟁 리스크 | 제출자 권리 확인, 모델/프롬프트 기록, 승인 전 검수 |

### 9.3 Verified Badge Maintenance SOP

Verified badge는 한 번 붙이면 끝나는 장식이 아니라 운영 루틴이다.

Retest queue에 들어가는 조건:

- 대상 모델의 major version이 업데이트된 경우.
- 사용자가 “결과가 다르다”, “작동하지 않는다”고 신고한 경우.
- copy 수가 높은 핵심 카드의 마지막 검증일이 오래된 경우.
- 유료 번들에 포함하기 전.
- 홈페이지나 카테고리 상단에 노출하기 전.

운영 방식:

- Tier 1 카드는 사람이 외부 생성 도구에서 직접 재테스트한다.
- Tier 2 카드는 샘플링 재테스트를 수행한다.
- 실패한 카드는 `deprecated`, `needs_update`, `tested` 중 하나로 상태를 갱신한다.
- 업데이트 이력은 Gist처럼 version history로 남긴다.

## 10. First 14 Days Seed Strategy

AI 대량 생산보다 먼저 50~100개의 수제 큐레이션 카드가 필요하다.

### 10.1 이유

- 품질 기준을 먼저 만든다.
- 어떤 카테고리가 검색 유입을 만드는지 확인한다.
- AI가 따라 할 좋은 few-shot 예시를 확보한다.
- 빈 플랫폼처럼 보이는 문제를 막는다.

### 10.2 추천 시드 구성

| 카테고리 | 카드 수 |
|---|---:|
| UI/UX | 25 |
| Game Asset | 20 |
| Marketing/Ecommerce | 20 |
| Workflow Recipe | 10 |
| Experimental/Trend | 10 |

각 카드는 title, visual result, prompt, variables, why this works, model notes, tags, related prompts를 포함한다.

## 11. MVP Roadmap

### 0~14일: Manual Seed

- 50~100개 수제 카드 제작.
- 5개 핵심 카테고리 정의.
- JSON 스키마 확정.
- 대표 페이지 템플릿 3종 설계.
- Search Console/Analytics 준비.

Go/No-go:

- 100개 카드 중 최소 70개가 사람이 보기에도 즉시 복사 가치가 있어야 한다.
- 카테고리별 대표 검색 키워드가 명확해야 한다.

### 15~30일: MVP Publishing

- 카드 목록 페이지.
- 상세 페이지.
- copy prompt.
- variable guide.
- related prompts.
- SEO metadata.
- image optimization.

Go/No-go:

- 페이지 로딩 속도와 이미지 LCP가 허용 기준을 만족해야 한다.
- 사용자가 2클릭 안에 프롬프트를 복사할 수 있어야 한다.

### 31~60일: pSEO Expansion

- AI 보조 생성 batch 운영.
- Tier 2 샘플링 검수.
- 카테고리별 landing page.
- model comparison notes.
- internal link cluster.

Go/No-go:

- 중복 페이지 비율을 낮게 유지한다.
- 검색 노출이 생기는 카테고리에 집중한다.

### 61~90일: Retention & Monetization

- collections.
- weekly pack.
- premium bundle.
- contributor submission form.
- verified badge workflow.
- email capture.
- user-made result moderation.
- manual popular prompts report.

Go/No-go:

- 복사율, 저장률, 재방문율 중 최소 하나가 명확히 개선되어야 한다.
- UGC 제출물의 권리 확인과 검수 흐름이 운영 가능해야 한다.

## 12. North Star Metric

추천 North Star Metric:

**Verified Prompt Copies per Week**

이 지표는 단순 방문자 수보다 PromptFlow의 실질 가치를 더 잘 보여준다. 사용자가 결과물을 보고 프롬프트를 복사했다는 것은 탐색, 신뢰, 실행 의도가 모두 통과되었다는 의미다.

보조 지표:

- organic landing page impressions.
- prompt detail CTR.
- copy button CTR.
- related prompt click rate.
- collection save rate.
- returning user rate.
- premium pack conversion.

## 13. Final Strategic Principle

PromptFlow는 “AI 생성 버튼”을 팔지 않는다. PromptFlow는 시행착오를 줄이는 검증된 결과물 지도와 복사 가능한 제작 레시피를 제공한다.

성공 조건은 더 많은 프롬프트를 쌓는 것이 아니라, 사용자가 “이 결과를 원한다면 이 프롬프트부터 쓰면 된다”고 믿게 만드는 것이다.
