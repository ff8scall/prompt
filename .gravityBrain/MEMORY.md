# Memory (2026-05-07)

## 🚨 Ironclad Rules
- **[Push Restriction]**: Git Push is performed ONLY with explicit user approval. (Auto-push strictly prohibited)

## 🗓️ 2026-05-07 (Session Conclusion)
- **[Global English Unification]**: 100% of the codebase, data modules, and internal documentation (`.gravityBrain`) have been localized to professional English. Zero Korean characters remain in the production source.
- **[Asset Recovery Pipeline]**: Successfully implemented `comfy_generate_single.py` using the local ComfyUI system. Recovered all assets for the "Luxury Product Photography" prompt (Hero, Thumb, 3 Variations).
- **[Deployment & Build Integrity]**: Verified success of `npm run build` (102 static pages) and pushed all changes to the production repository.

## 📅 최근 결정 및 작업 결과 (Recent Decisions & Results)
- [2026-05-07] `ui-ux.ts` (총 25개) 프롬프트 데이터 박물관급 로컬라이징 및 정규화(위치 정렬) 완료.
- [2026-05-07] `marketing.ts` 및 `workflow-recipe.ts` 최종 로컬라이징 오딧 완료 (구조적 결함 및 누락 필드 전수 수정).
- [2026-05-07] 모든 데이터 아카이브(`ui-ux.ts`, `marketing.ts`, `workflow-recipe.ts`, `game-asset.ts`, `trend.ts`)에 대한 박물관급 로컬라이징 및 스키마 정규화 100% 완료.
- [2026-05-07] `npx tsc --noEmit`을 통해 최종 데이터 무결성 검증 완료.

## 🚀 현재 목표 (Current Goals)
- [Complete] 모든 데이터 아카이브 로컬라이제이션 및 구조적 정합성 확보 완료.
- [High] 프로덕션 최종 빌드 배포 및 모니터링.
- [Medium] 다국어 라우팅 시스템 최종 빌드 테스트 및 배포 준비.

## 🗓️ 2026-05-07 (Session: i18n Architecture Migration)
- **[i18n Architecture]**: Successfully migrated the App Router to support bilingual static export via `app/[lang]/` dynamic segment.
- **[UI Localization]**: Implemented a centralized `lib/dictionary.ts` and successfully translated global UI components (Navigation, Headers, Footers, Sandboxes).
- **[Data Translation Setup]**: Extended `lib/types.ts` with `_ko` fields to support dual-language data within the same objects. Applied and verified the first sample (Glassmorphism SaaS Dashboard).
- **[Routing Stability]**: Resolved root layout conflicts, ensuring `/ko/` and `/en/` paths build correctly without breaking the `npm run dev` environment.

## 🔑 Key Learnings
- **Static Export Constraints**: Without Middleware, full static generation of all locales via `generateStaticParams` is mandatory.
- **Root Layout Handling**: Moving the primary layout to `[lang]/layout.tsx` requires careful management of the root `/` redirect path to avoid `html`/`body` tag duplication errors.

## 🎯 Next Milestone (Completed)
- [x] **Phase 3: 프롬프트 데이터 이중화 (Data Localization)**
    - [x] 85개의 방대한 프롬프트 데이터를 지원하기 위한 구조 설계 (예: 필드명 `title_ko` 추가 또는 `lib/data/ko/` 분리).
    - [x] `marketing.ts` 및 `workflow-recipe.ts` (총 40개) 프롬프트 데이터 박물관급 로컬라이징 및 스키마 정규화 완료.
    - [x] 스크립트 또는 LLM을 활용하여 기존 영문 데이터를 기반으로 한국어 데이터 복원 및 번역 진행.
    - [x] 카테고리 정보(`CategoryClient.tsx`) 다국어 매핑.
- **[SEO & Stability]**: Implemented `hreflang` meta tags in Layout and Page levels. `sitemap.ts` now outputs dual `/en/` and `/ko/` paths.
- **[Cleanup]**: Removed old `app/about`, `app/category`, and `app/prompt` directories to resolve layout conflicts. Build passes perfectly generating 186 paths.
