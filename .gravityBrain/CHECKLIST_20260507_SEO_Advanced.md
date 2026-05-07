# 체크리스트: SEO 고도화 및 검색 엔진 인증

## 1. 메타 태그 삽입 (Ownership Verification)
- [ ] `app/layout.tsx`에 Bing 소유권 인증 태그 추가 (`msvalidate.01`)
- [ ] `app/layout.tsx`에 네이버 소유권 인증 태그 추가 (`naver-site-verification`)

## 2. 동적 사이트맵 최적화 (Sitemap & Robots)
- [ ] `app/sitemap.ts`의 기본 도메인을 `https://prompt.lego-sia.com`으로 변경
- [ ] 90개의 프롬프트 상세 페이지가 사이트맵에 모두 포함되는지 로직 확인
- [ ] `app/robots.txt` 설정 확인 (Sitemap 경로 명시)

## 3. 고급 SEO 검증 (Advanced SEO Workflow)
- [ ] [SEO-Advanced] JSON-LD 구조화 데이터 적용 상태 확인
- [ ] [SEO-Bing] IndexNow 연동 및 핵심 요약 상단 배치 구조 검토
- [ ] [SEO-Google] 모바일 친화성 및 E-E-A-T 신호 점검

## 4. 최종 빌드 및 검증
- [ ] `npm run build` 실행하여 사이트맵 생성 결과물 확인
- [ ] (사용자 요청 시) GitHub Push 진행
