# 체크리스트: First 14 Days 시드 데이터 대량 확장 프로젝트

## 🎯 최종 목표
- [x] 그랜드 전략 기준 85개의 고품질 마스터 프롬프트 시드 확보 (UI/UX 25, Game 20, Marketing 20, Recipe 20)
- [ ] 프롬프트 내용(텍스트)과 시각 결과물(이미지)의 생산 파이프라인 체계화
- [x] 확장 가능한 데이터 구조로의 마이그레이션 (단일 TS 파일 -> 개별 JSON 또는 모듈화)

## 🛠️ Phase 1: 콘텐츠 생산 공장(Pipeline) 설계
- [x] **AI 프롬프트 메이커 템플릿 작성**: `PROMPT_GENERATOR_MASTER.md` 구축 완료.
- [ ] **이미지 에셋 프로토콜 수립**: 생성 가이드라인 확립 (생성 전).
- [x] **데이터 모듈화**: `lib/data/` 하위 카테고리별 분리 및 통합 완료.

## 🛠️ Phase 2: 카테고리별 시드 데이터 대량 생산
- [x] **UI/UX Design (완료: 25/25개)**: Dashboard, Mobile App, Component 등 25종 확보.
- [x] **Game Assets (완료: 20/20개)**: Tileset, Monster, Prop, Background 등 20종 확보.
- [x] **Marketing & Ecommerce (완료: 20/20개)**: Product, Social, Editorial, Branding 등 20종 확보.
- [x] **Workflow Recipe & Trend (완료: 20/20개)**: Creator, Business, Strategy 워크플로우 20종 확보.

## 🛠️ Phase 3: 품질 검수 및 SEO 동기화
- [x] **Tier 1 수동 검수**: 모든 85개 프롬프트에 대해 변수 조합 및 데이터 구조 검증 완료 (Verified Badge 부여).
- [x] **SEO 메타데이터 검증**: 85개의 상세 페이지에서 JSON-LD(HowTo 스키마)와 Meta Tag 생성 로직 점검 완료.
- [x] **라우팅 무결성**: 카테고리별 정적 파라미터 및 내비게이션 링크 동기화 완료.
- [ ] **이미지 최적화 스크립트 실행**: 실제 이미지 생성 후 WebP 변환 및 최적화 진행 예정.
