# Task Checklist: Global English Standardization Audit (2026-05-07)

## 🎯 Objective
Completely eliminate all traces of Korean from all pages of the PromptFlow platform (especially detail pages) and optimize for professional global English service standards.

## 🛠 Task Phases
- [x] **Phase 1: Precision Scan & Identification**
    - [x] Scan all `.ts` files in `lib/data/` for Korean characters using regex (`[ㄱ-ㅎㅏ-ㅣ가-힣]`)
    - [x] Review all UI labels and hardcoded text in `app/` and `components/`
    - [x] Remove or translate comments in utility files like `lib/prompts.ts`
- [x] **Phase 2: English Translation & Refinement**
    - [x] Replace all identified Korean with high-fidelity professional English
    - [x] Review dynamic metadata and UI text in the detail page (`app/prompt/[slug]/page.tsx`)
    - [x] Localize guide text in the Variable Sandbox (`VariableSandbox.tsx`)
- [ ] **Phase 3: Integrity Validation**
    - [ ] Sample audit of 10 random detail pages in local environment (`npm run dev`)
    - [ ] Verify zero Korean across the entire project via `grep`
    - [ ] Perform local build test (`npm run build`) and scan `dist/` artifacts

## ✅ Completion Criteria
1. Zero Korean characters present in source code (`.ts`, `.tsx`, `.js`, `.jsx`).
2. All prompt data and UI consist of natural, professional English.
3. Local build succeeds with no Korean patterns found in output artifacts.
