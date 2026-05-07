# PromptFlow MVP Site

Next.js 기반 PromptFlow 최소 실행 가능 제품 (MVP)

## 구조

```
app/
├── page.tsx              # 홈페이지 (카드 그리드)
├── prompt/[slug]/        # 프롬프트 상세 페이지
├── category/[slug]/      # 카테고리 목록
├── layout.tsx            # 루트 레이아웃
└── globals.css           # 스타일

components/
├── PromptCard.tsx        # 카드 컴포넌트
├── PromptDetail.tsx      # 상세 컴포넌트
├── VariableSandbox.tsx   # 변수 조합기
└── CopyButton.tsx        # 복사 버튼

lib/
├── prompts.ts            # 프롬프트 데이터 로더
└── types.ts              # TypeScript 타입

public/
└── images/               # 결과 이미지 저장
```

## 핵심 기능

- ✅ 카드 목록 (Visual-first 그리드)
- ✅ 상세 페이지 (이미지, 프롬프트, 변수, 모델 노트)
- ✅ One-click copy
- ✅ Variable sandbox (조합기, 생성기 아님)
- ✅ 반응형

## 제약 조건 (중요)

- ❌ 사용자 API 키 입력 불가
- ❌ 실시간 이미지 생성 불가
- ❌ 외부 모델 직접 호출 불가
- ✅ 사전 생성 이미지만 노출
- ✅ 프롬프트 복사만 제공
