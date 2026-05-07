# 체크리스트: 데이터 전수 영문화 및 언어 혼재 수선

## 1. 한글 문자열 전수 조사 (Bug Trace)
- [ ] `lib/data/*.ts` 내에 남아있는 모든 한글 패턴(`[가-힣]`) 탐색
- [ ] 치환 대상 필드 식별: `emotional_hook`, `variable_behavior_note`, `why_this_works`, `model_notes`, `comparison_notes`

## 2. 전문 영문 번역 및 치환 (Surgical Fix)
- [ ] UI/UX 프롬프트(25개) 영문화
- [ ] Game Asset 프롬프트(20개) 영문화
- [ ] Marketing 프롬프트(20개) 영문화
- [ ] Workflow Recipe 프롬프트(20개) 영문화
- [ ] Trend 프롬프트(5개) 영문화

## 3. 무결성 검증
- [ ] 모든 파일에 한글이 남아있는지 재검색
- [ ] `npm run build`를 통한 데이터 정합성 확인
- [ ] 로컬 서버에서 실제 UI 노출 상태 최종 검수
