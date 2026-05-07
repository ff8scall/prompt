# PromptFlow Grand Strategy Plan

prompt.lego-sia.com을 Visual-first 프롬프트 탐색 서비스로 기획하되, 사용자가 직접 API를 호출하지 않고 우리가 미리 생성·검증한 결과물만 소비하는 구조로 전략 문서와 콘텐츠 생산 시스템을 설계한다.

## 1. 현재 폴더 상태

- **프로젝트 위치**: `c:\AI\Antigravity\Prompt`
- **현재 상태**: 빈 폴더로 확인됨.
- **문서 생성 방향**: 승인 후 프로젝트 루트에 기획 문서와 콘텐츠 시스템 문서를 새로 생성한다.
- **주의 조건**: plan mode에서는 실제 프로젝트 문서를 만들지 않고, 승인 후 implementation mode에서 생성한다.

## 2. 핵심 전제

- **Visual-first 가설**: 사용자는 프롬프트 자체보다 원하는 이미지 결과물을 먼저 찾는다.
- **서비스 포지션**: Pinterest식 시각 탐색 + GitHub Gist식 실용 복사/재사용 + pSEO형 프롬프트 라이브러리.
- **중요 제약**: 사용자는 사이트에서 직접 Midjourney, DALL-E, SDXL, Runway 등 외부 API를 호출할 수 없다.
- **허용 기능**: 프롬프트 복사, 변수값 수정, 사전 생성된 결과 이미지 탐색, 사전 검증된 variations/워크플로우/번들 제공.
- **제외 기능**: 실시간 이미지 생성, 사용자 API 키 연결, 외부 모델 직접 호출, 사용량 기반 생성 과금.

## 3. 통합 보완안 반영 방향

- **대체 솔루션 분석**: 경쟁 플랫폼뿐 아니라 Discord 검색, Midjourney 피드 스크롤, YouTube 튜토리얼, 개인 메모장/Gist 같은 기존 작업 방식을 비교한다.
- **인간 개입 임계값**: Tier 1은 100% 사람 검수, Tier 2는 AI 생성+샘플링, Tier 3는 AI 자율 생성으로 운영한다.
- **변수 UX 기대치 관리**: `variable_behavior_note`를 추가해 “이 변수를 바꾸면 무엇이 유지되고 무엇이 바뀌는지”를 설명한다.
- **pSEO 변형 축**: Use case, model, visual style, difficulty 기준으로 thin content를 피하는 변형 전략을 설계한다.
- **첫 14일 시드 전략**: AI 대량 생산 전 50~100개 수제 큐레이션 카드로 검색 수요와 품질 기준을 검증한다.
- **멀티 모델/버전 관리**: `target_model`, `model_version`, `negative_prompt`, `aspect_ratio_tags`, `verified_badge`를 포함한다.
- **이미지 파이프라인**: WebP/AVIF, lazy loading, blur-up placeholder, CDN 비용, 이미지 메타데이터 관리를 포함한다.
- **Helpful Content 방어**: Why This Works, variable guide, model comparison, human curation signal을 페이지마다 포함한다.
- **UGC 루프**: 초기 MVP에서는 직접 생성 API 없이 사용자가 결과물/후기/리믹스 사례를 제출하는 구조만 검토한다.

## 4. 작성할 최종 산출물

- **`PROMPTFLOW_GRAND_STRATEGY.md`**: 시장 분석, 포지셔닝, 대체 솔루션 분석, 콘텐츠 버티컬, 수익화, UX 여정, 리스크, 0~90일 로드맵.
- **`AI_CONTENT_PRODUCTION_SYSTEM.md`**: JSON 스키마, AI 생성 가이드라인, 품질 티어, pSEO 템플릿, seed batch 운영, 검수 기준.
- **선택 문서**: 필요 시 `README.md`에 문서 인덱스와 프로젝트 목적을 짧게 정리한다.

## 5. `/grand-strategy` 적용 구조

- **Research**: 시장과 경쟁사가 아니라 사용자의 대체 행동까지 분석한다.
- **Brainstorm**: Visual-first 카드, 카테고리, JSON 콘텐츠 단위, pSEO 변형 축을 설계한다.
- **Monetize**: API 사용량 과금이 아닌 검증 번들, 프리미엄 큐레이션, 제휴, 광고, Pro 저장/컬렉션 중심으로 설계한다.
- **User Journey**: 검색 유입 → 이미지 탐색 → 프롬프트 복사/변수 수정 → 외부 도구에서 생성 → 재방문/저장 흐름을 설계한다.
- **Pre-verify**: AI 콘텐츠 품질, 중복 SEO, 이미지 저작권, 모델 버전 노후화, CDN 비용을 점검한다.
- **MVP Scope**: 첫 14일 수제 시드, 30/60/90일 확장, Go/No-go 지표를 정한다.

## 6. 승인 후 실행 계획

- 프로젝트 폴더 `c:\AI\Antigravity\Prompt` 안에 문서 파일을 생성한다.
- 본문은 한국어 중심으로 작성하고, 스키마 필드명과 SEO 키워드는 영어를 병기한다.
- API 직접 호출 불가 조건을 모든 UX, 수익화, 콘텐츠 생산 설계에 반영한다.
- 최종적으로 문서 위치와 요약을 사용자에게 보고한다.
