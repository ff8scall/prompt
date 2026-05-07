# Task Checklist: Static i18n Implementation (2026-05-07)

## 🎯 목표 (Objective)
Next.js App Router(Static Export 환경)에서 다국어(i18n) 라우팅을 구현하여, `/ko/...` 경로 접근 시 한국어 UI 및 데이터를 제공한다. 기존 영문 구조는 기본값으로 유지한다.

## ⚠️ 아키텍처 제약사항 (Architectural Constraints)
- 현재 `next.config.mjs` 설정이 `output: 'export'` (정적 내보내기) 상태이므로 Next.js Middleware 기반의 동적 라우팅/리다이렉트는 불가.
- **해결책**: `app/[lang]/` 형태의 동적 세그먼트를 구축하고, `generateStaticParams`를 통해 정적으로 언어별 페이지를 모두 빌드해야 함.

## 🛠 작업 단계 (Task Phases)

- [x] **Phase 1: i18n 라우팅 구조 변경 (Architecture)**
    - [x] `app/(main)` 또는 기존 라우트 파일들을 `app/[lang]/` 폴더 안으로 이동.
    - [x] `next-intl` (static 지원) 또는 커스텀 다이렉토리(Dictionary) 시스템 구축.
    - [x] 각 페이지의 `generateStaticParams`에 `lang: ['en', 'ko']` 파라미터 반환 추가.

- [x] **Phase 2: UI 컴포넌트 다국어 처리 (UI Translation)**
    - [x] `components/` 내 하드코딩된 영문 텍스트(예: "Verified Result", "Back to Archive")를 번역 키로 추출.
    - [x] `ko.json` 및 `en.json` (또는 ts 객체) 생성하여 다국어 문자열 매핑.
    - [x] `VariableSandbox`, `PromptCard` 등에 언어 컨텍스트 주입.

- [x] **Phase 3: 프롬프트 데이터 이중화 (Data Localization)**
    - [x] 85개의 방대한 프롬프트 데이터를 지원하기 위한 구조 설계 (예: 필드명 `title_ko` 추가 또는 `lib/data/ko/` 분리).
    - [x] `marketing.ts` 및 `workflow-recipe.ts` (총 40개) 프롬프트 데이터 박물관급 로컬라이징 및 스키마 정규화 완료.
    - [x] 스크립트 또는 LLM을 활용하여 기존 영문 데이터를 기반으로 한국어 데이터 복원 및 번역 진행.
    - [x] 카테고리 정보(`CategoryClient.tsx`) 다국어 매핑.

- [x] **Phase 4: SEO 및 라우팅 안정성 확보 (SEO & Stability)**
    - [x] `layout.tsx`에서 `lang` 속성을 동적으로 할당 (`<html lang={lang}>`).
    - [x] `metadata` 생성 시 `hreflang` 태그 적용하여 검색 엔진 페널티 방지. (layout.tsx 및 page.tsx alternates 설정)
    - [x] `sitemap.ts`에 다국어 URL 구조 반영. (en/ko 동적 분기 생성 완료)

## ✅ 완료 기준 (Completion Criteria)
1. `http://localhost:3000/ko/` 로 접속 시 전체 UI가 한국어로 표시됨. (완료)
2. 기존 `npm 일방 build` 가 102개 -> 약 204개(언어별)의 정적 페이지를 오류 없이 생성함. (완료: 잔여 구형 라우트 삭제 및 빌드 성공)
3. 데이터 번역이 구조적으로 연동되어 상세 페이지에서도 한국어 가이드가 노출됨. (완료)
