# PromptFlow Seed Cards Index

First 14 Days 수제 카드 제작 진행 상황

## 목표
- 총 50-100개의 Tier 1 검증 카드
- 5개 핵심 카테고리

## 현재 진행 상황

### UI/UX (목표: 25개) - ✅ 완료
| # | ID | 제목 | 상태 | 비고 |
|---|-----|------|------|------|
| 1 | ui-dashboard-glassmorphism-001 | Glassmorphism Dashboard | ✅ **완성 예시** | Full schema, verified |
| 2-7 | | | 📝 템플릿 | 기본 필드만, 확장 필요 |
| 8-25 | 008-025 | 18개 추가 카드 | 📝 템플릿 | 컴팩트 형태, 확장 필요 |

### Game Asset (목표: 20개)
| # | ID | 제목 | 상태 | 비고 |
|---|-----|------|------|------|
| 1 | game-isometric-tileset-001 | Isometric Fantasy Tileset | ✅ **완성 예시** | Full schema, 2 variables |
| 2 | game-rpg-icon-002 | RPG Item Icon | 📝 미니 | 확장 필요 |
| 3-20 | | | ⬜ 미생성 | |

### Marketing/Ecommerce (목표: 20개)
| # | ID | 제목 | 상태 | 비고 |
|---|-----|------|------|------|
| 1 | marketing-product-photo-001 | Luxury Product Photo | ✅ **완성 예시** | Full schema, 2 variables |
| 2-20 | | | ⬜ 미생성 | |

### Workflow Recipe (목표: 10개)
| # | ID | 제목 | 상태 | 비고 |
|---|-----|------|------|------|
| 1 | workflow-chatgpt-midjourney-001 | ChatGPT→Midjourney | 📝 템플릿 | 워크플로우 구조 |
| 2-10 | | | ⬜ 미생성 | |

### Experimental/Trend (목표: 10개)
| # | ID | 제목 | 상태 | 비고 |
|---|-----|------|------|------|
| 1-10 | | | ⬜ 미생성 | |

## 📊 현재 진행률 (업데이트됨)

| 카테고리 | 목표 | 현재 | 진행률 | 상태 |
|---------|-----|------|-------|------|
| UI/UX | 25 | 25 | **100%** | ✅ 템플릿 완료, 1개 완성 |
| Game Asset | 20 | 2 | 10% | 📝 1개 완성, 1개 템플릿 |
| Marketing | 20 | 1 | 5% | 📝 1개 완성 |
| Workflow | 10 | 1 | 10% | 📝 템플릿 |
| Experimental | 10 | 0 | 0% | ⬜ 미시작 |
| **총계** | **85** | **29** | **34%** | **3개 완성 예시** |

## ✅ 완료된 작업

### 1단계: 완성 예시 3개 확보 ✅
- ✅ UI/UX: Glassmorphism Dashboard (8.4KB, full schema)
- ✅ Game Asset: Isometric Fantasy Tileset (7.2KB, 2 variables)
- ✅ Marketing: Luxury Product Photo (7.5KB, 2 variables)

### 2단계: 템플릿 일괴 생성 ✅
- ✅ UI/UX 25개 전체 템플릿 생성 완료
- ✅ TEMPLATE.json 표준 템플릿 제공
- ✅ Python 벌크 생성 스크립트 준비

## 🎯 다음 단계 (제안)

### 3단계: 이미지 파이프라인 (권장)
- [ ] Midjourney v6 API/웹에서 완성 예시 3개 실제 테스트
- [ ] 결과 이미지 저장 및 메타데이터 추출
- [ ] `asset_metadata` 필드 채우기
- [ ] WebP 변환 및 CDN 경로 설정

### 4단계: Game/Marketing 확장
- [ ] Game Asset 3-5개 완성 예시로 확장
- [ ] Marketing 3-5개 완성 예시로 확장
- [ ] Workflow 2-3개 완성 예시로 확장

### 5단계: 운영 도구
- [ ] JSON 스키마 검증 스크립트
- [ ] 완성도 자동 체크리스트
- [ ] Midjourney 배치 테스트 자동화

## 파일 구조
```
seed_cards/
├── INDEX.md                    # 이 파일
├── ui_ux/
│   ├── TEMPLATE.json           # UI/UX 카드 템플릿
│   ├── 001_glassmorphism_dashboard.json  # ✅ 완성 예시
│   ├── 002_dark_analytics.json
│   ├── ...
│   └── 025_xxx.json
├── game_asset/
│   ├── 001_isometric_tileset.json
│   └── ...
├── marketing/
│   ├── 001_product_photo.json
│   └── ...
└── workflow/
    ├── 001_chatgpt_to_midjourney.json
    └── ...
```

## 카드 완성 기준 (Tier 1)

필수 필드:
- ✅ id, slug, title, result_first_title
- ✅ category, vertical, target_model, model_version
- ✅ prompt_text, negative_prompt
- ✅ 최소 1개 variable + behavior_note
- ✅ why_this_works (3개 이상)
- ✅ model_notes
- ✅ seo (primary_keyword, meta_description)

선택/나중 채움:
- 📝 variations (이미지 생성 후)
- 📝 asset_metadata (이미지 저장 후)
- 📝 review.reviewer_note (검수 후)
- 📝 copy_stats (퍼블리싱 후)

## JSON 스키마 참조
- `AI_CONTENT_PRODUCTION_SYSTEM.md` 섹션 4 참조
- 모든 필드명은 스키마와 일치해야 함
