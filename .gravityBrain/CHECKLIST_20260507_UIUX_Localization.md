# 체크리스트: ui-ux.ts 다국어 로컬라이징 완성

## 1. 사전 준비 및 분석
- [x] `ui-ux.ts` 전체 구조 재검토 및 누락된 `_ko` 필드 식별
- [x] `shoppingCartPrompt` 등 기존에 잘못 번역된(영어 중복 등) 데이터 리스트 업
- [x] 번역 중단 현상 방지를 위한 작업 섹션 분할 (8개 프롬프트 단위)

## 2. 섹션 1: 기초 및 이커머스 (001~008)
- [x] `dashboardPrompt` (001) ~ `healthcarePortalPrompt` (008) 검토 및 보완
- [x] `_ko` 필드 위치 정규화 (영문 필드 바로 아래 배치)
- [x] 오탈자 및 문맥적 어색함 수정

## 3. 섹션 2: 이커머스 상세 및 CRM (009~016)
- [x] `shoppingCartPrompt` (009) 복구 및 정밀 번역
- [x] `checkoutPaymentPrompt` (010) ~ `saasSettingsPrompt` (016) 번역 완성
- [x] `variables_ko`, `why_this_works_ko` 등 하위 객체 누락 체크

## 4. 섹션 3: 개발자 도구 및 모바일 기능 (017~025)
- [x] `apiDocsPrompt` (017) ~ `musicPlayerPrompt` (025) 번역 완성
- [x] `seo_ko`, `asset_metadata_ko` 등 메타데이터 필드 번역 및 동기화
- [x] 전체 배열 `uiUxPrompts` 내 누락 프롬프트 확인

## 5. 검증 및 마무리
- [x] `npx tsc`를 통한 타입 안정성 검사 (완료)
- [x] `npm run build`를 통한 빌드 영향도 테스트 (완료)
- [x] `.gravityBrain/MEMORY.md` 업데이트 및 최종 보고 (진행 중)
