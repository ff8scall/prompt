# Task Checklist: Advanced i18n & Korean Localization (2026-05-07)

## 🎯 목표 (Objective)
한글 페이지(`/ko/...`)에서 여전히 노출되는 영문 텍스트를 전수 조사하여 제거하고, API 제한으로 중단되었던 프롬프트 데이터 번역을 완성하여 완벽한 다국어 경험을 제공한다.

## ⚠️ 핵심 과제
- UI 컴포넌트 내 잔류하는 하드코딩 영문 문자열을 `dictionary.ts`로 이전.
- 프롬프트 데이터(`lib/data/*.ts`)의 `_ko` 필드 누락분 보완 (특히 use_cases, why_this_works 등 배열 필드).

## 🛠 작업 단계 (Task Phases)

### Phase 1: UI 컴포넌트 지역화 완성
- [ ] `app/[lang]/page.tsx` (홈페이지) 하드코딩 영문 추출
- [ ] `app/[lang]/prompt/[slug]/page.tsx` (상세페이지) 하드코딩 영문 추출
- [ ] `components/CategoryClient.tsx` 하드코딩 영문 추출
- [ ] `components/VariableSandbox.tsx` 및 `components/PromptCard.tsx` 검토
- [ ] `lib/dictionary.ts`에 추출된 키 추가 및 번역

### Phase 2: 데이터 번역 전수 보완
- [ ] `lib/data/ui-ux.ts` 번역 상태 점검 및 보완
- [ ] `lib/data/marketing.ts` 번역 상태 점검 및 보완
- [ ] `lib/data/game-asset.ts` 번역 상태 점검 및 보완
- [ ] `lib/data/workflow-recipe.ts` 번역 상태 점검 및 보완
- [ ] `lib/data/trend.ts` 번역 상태 점검 및 보완

### Phase 3: 최종 검증
- [ ] 모든 카테고리 페이지에서 한글 노출 확인
- [ ] 모든 프롬프트 상세 페이지에서 한글 노출 확인
- [ ] `npm run build`를 통한 정적 추출 결과물 검증

## ✅ 완료 기준 (Completion Criteria)
1. `/ko/` 경로의 모든 UI 버튼, 라벨, 설명이 한국어로 표시됨.
2. 프롬프트 상세 내용(작동 원리, 변수 설명 등)이 한국어로 표시됨.
3. `/en/` 경로의 영문 무결성이 유지됨.
