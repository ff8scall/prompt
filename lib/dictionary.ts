export type Locale = 'en' | 'ko';

export const locales: Locale[] = ['en', 'ko'];
export const defaultLocale: Locale = 'en';

export const dictionaries = {
  en: {
    nav: {
      back: "Back to Archive",
      logo: "PROMPTFLOW",
      view_all: "View Full Archive"
    },
    hero: {
      tag: "THE ARCHIVE V.2.0",
      title: "PROMPTFLOW",
      subtitle: "Museum-grade prompt engineering archive for modern creators. Verified frameworks for visual excellence.",
      cta: "Explore Archive",
      verified_framework: "Verified Framework"
    },
    home: {
      curated: "Curated Collection",
      master_title: "Master Frameworks",
      search_placeholder: "Search visual assets...",
      no_results: "No Assets Found",
      no_results_sub: "Try adjusting your search criteria or explore our curated categories."
    },
    category: {
      vertical: "Vertical Archive",
      verified: "Verified Master Frameworks",
      sort: "Authority Rank",
      filter: "Filter",
      exploration: "Cross-Vertical Exploration",
      tags: {
        assets: "Verified Assets",
        confidence: "High Confidence",
        ready: "Production Ready",
        tier: "Master Tier"
      }
    },
    prompt: {
      copy: "Copy Verified Prompt",
      copied: "Copied to Clipboard",
      sandbox: "Variable Sandbox",
      sandbox_sub: "Real-time Engineering Module",
      adjustable: "Adjustable",
      final: "Final Compiled Framework",
      modification: "Modification Logic",
      insights: "Cross-Model Insights",
      tags: "Semantic Tags",
      why: "Why This Works",
      notes: "Technical Model Notes",
      failures: "Common Failure Modes",
      scenarios: "Best Application Scenarios",
      variations: "Prompt Variations",
      optimization: "Model Optimization",
      related: "Related Strategic Frameworks",
      verified: "Verified Result"
    },
    footer: {
      rights: "© 2026 PromptFlow Protocol. Engineering verified results.",
      encrypted: "AES-256 Encrypted",
      indexing: "Global Indexing",
      curated: "Human Curated"
    },
    categories: {
      ui_ux: "UI/UX Design",
      game_asset: "Game Assets",
      marketing: "Marketing",
      workflow_recipe: "Workflow Recipes",
      trend: "Visual Trends"
    }
  },
  ko: {
    nav: {
      back: "아카이브로 돌아가기",
      logo: "PROMPTFLOW",
      view_all: "전체 아카이브 보기"
    },
    hero: {
      tag: "아카이브 V.2.0",
      title: "PROMPTFLOW",
      subtitle: "현대 크리에이터를 위한 전문가급 프롬프트 엔지니어링 아카이브. 시각적 탁월함을 위해 검증된 프레임워크.",
      cta: "아카이브 탐색",
      verified_framework: "검증된 프레임워크"
    },
    home: {
      curated: "선별된 컬렉션",
      master_title: "마스터 프레임워크",
      search_placeholder: "비주얼 에셋 검색...",
      no_results: "검색 결과 없음",
      no_results_sub: "검색 조건을 조정하거나 카테고리를 탐색해 보세요."
    },
    category: {
      vertical: "버티컬 아카이브",
      verified: "검증된 마스터 프레임워크",
      sort: "권위도 순",
      filter: "필터",
      exploration: "교차 버티컬 탐색",
      tags: {
        assets: "검증된 에셋",
        confidence: "높은 신뢰도",
        ready: "프로덕션 준비 완료",
        tier: "마스터 티어"
      }
    },
    prompt: {
      copy: "검증된 프롬프트 복사",
      copied: "클립보드에 복사됨",
      sandbox: "변수 샌드박스",
      sandbox_sub: "실시간 엔지니어링 모듈",
      adjustable: "조정 가능",
      final: "최종 컴파일된 프레임워크",
      modification: "수정 로직",
      insights: "모델별 인사이트",
      tags: "시맨틱 태그",
      why: "작동 원리",
      notes: "기술 모델 노트",
      failures: "주요 실패 사례",
      scenarios: "최적의 적용 시나리오",
      variations: "프롬프트 변형",
      optimization: "모델 최적화",
      related: "관련 전략적 프레임워크",
      verified: "검증된 결과"
    },
    footer: {
      rights: "© 2026 PromptFlow Protocol. 검증된 결과를 설계합니다.",
      encrypted: "AES-256 암호화",
      indexing: "글로벌 인덱싱",
      curated: "휴먼 큐레이션"
    },
    categories: {
      ui_ux: "UI/UX 디자인",
      game_asset: "게임 에셋",
      marketing: "마케팅",
      workflow_recipe: "워크플로우 레시피",
      trend: "비주얼 트렌드"
    }
  }
};

export const getDictionary = (lang: Locale) => dictionaries[lang] || dictionaries[defaultLocale];
