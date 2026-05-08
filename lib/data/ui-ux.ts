import { PromptCard } from '../types';

export const dashboardPrompt: PromptCard = {
  id: "ui-dashboard-glassmorphism-001",
  slug: "glassmorphism-dashboard-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Glassmorphism SaaS Dashboard UI Prompt",
  title_ko: "글래스모피즘 SaaS 대시보드 UI 프롬프트",
  result_first_title: "A clean glassmorphism SaaS dashboard with glowing analytics cards",
  result_first_title_ko: "발광하는 분석 카드가 포함된 깔끔한 글래스모피즘 SaaS 대시보드",
  short_description: "A polished dashboard concept for SaaS products that need a futuristic but usable interface.",
  short_description_ko: "미래지향적이면서도 실용적인 인터페이스가 필요한 SaaS 제품을 위한 세련된 대시보드 컨셉입니다.",
  emotional_hook: "This prompt creates a premium sense of focus, as if data is quietly glowing over dark glass panels in the dead of night.",
  emotional_hook_ko: "이 프롬프트는 마치 깊은 밤 어두운 유리 패널 위에서 데이터가 고요하게 빛나는 것 같은 프리미엄 집중도를 만들어냅니다.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["saas_landing", "product_mockup", "design_moodboard", "client_proposal"],
  use_cases_ko: ["SaaS 랜딩 페이지", "제품 목업", "디자인 무드보드", "클라이언트 제안서"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[subject], glassmorphism dashboard UI, translucent panels with subtle blur, glowing analytics cards with soft gradients, dark navy background #0a1628, premium SaaS interface, clean spacing, high detail, 8k render --ar 16:9 --v 6 --s 250",
  negative_prompt: "cluttered layout, unreadable text, low contrast, distorted typography, photorealistic, human figures, photographic elements",
  aspect_ratio_tags: ["16:9", "hero_image", "desktop_mockup", "widescreen"],
  variables: [
    {
      name: "subject",
      name_ko: "주제",
      placeholder: "[subject]",
      default_value: "AI analytics dashboard",
      recommended_values: [
        "finance analytics dashboard",
        "healthcare patient monitoring dashboard",
        "creator economy metrics dashboard",
        "ecommerce sales dashboard",
        "project management dashboard"
      ],
      variable_behavior_note: "Changing this variable modifies the industry and data context while maintaining the glass texture, dark lighting, and SaaS interface style.",
      variable_behavior_note_ko: "이 변수를 변경하면 유리 질감, 어두운 조명 및 SaaS 인터페이스 스타일을 유지하면서 산업 및 데이터 맥락을 수정할 수 있습니다."
    }
  ],
  why_this_works: [
    "The 'glassmorphism' keyword induces translucent panels and background blur for a modern UI feel.",
    "The combination of dark navy background (#0a1628) and soft gradients enhances visual trust for premium SaaS products and reduces eye strain.",
    "Clean spacing prevents the overcrowded layouts common in AI-generated UI, creating a professional and usable impression.",
    "Stylize 250 moderates Midjourney's default artistic tendencies to produce results more suitable for commercial UI design.",
    "Removing 'photorealistic' and 'human figures' in the negative prompt prevents unwanted photographic elements from appearing in the UI."
  ],
  why_this_works_ko: [
    "'glassmorphism' 키워드는 현대적인 UI 느낌을 위해 반투명 패널과 배경 흐림 효과를 유도합니다.",
    "다크 네이비 배경(#0a1628)과 부드러운 그라데이션의 조합은 프리미엄 SaaS 제품에 대한 시각적 신뢰를 높이고 눈의 피로를 줄여줍니다.",
    "깔끔한 간격 설정은 AI가 생성한 UI에서 흔히 발생하는 복잡한 레이아웃을 방지하여 전문적이고 실용적인 인상을 줍니다.",
    "Stylize 250 설정은 미드저니의 기본 예술적 성향을 조절하여 상업용 UI 디자인에 더 적합한 결과를 생성합니다.",
    "부정 프롬프트에서 'photorealistic' 및 'human figures'를 제거하여 UI에 원치 않는 사진 요소가 나타나는 것을 방지합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Strong at rendering overall UI mood and card layouts, though actual text may be garbled. For commercial use, replacing icons and text in Figma is recommended. Adjusting the stylize value between 150-350 controls the artistic level.",
      note_ko: "전체적인 UI 분위기와 카드 레이아웃 렌더링에 강점이 있지만, 실제 텍스트는 뭉개질 수 있습니다. 상업적 용도로 사용하려면 Figma에서 아이콘과 텍스트를 교체하는 것이 권장됩니다. stylize 값을 150-350 사이에서 조정하여 예술적 수준을 제어하세요."
    },
    {
      model: "dall-e-3",
      version: "current",
      note: "Excellent at descriptive prompts. It is best to remove Midjourney parameters (--ar, --v, --s) and rewrite as plain text. Use 'widescreen aspect ratio' for a 16:9 effect.",
      note_ko: "설명적인 프롬프트에 매우 뛰어납니다. 미드저니 파라미터(--ar, --v, --s)를 제거하고 일반 텍스트로 다시 작성하는 것이 가장 좋습니다. 16:9 효과를 위해 'widescreen aspect ratio'를 사용하세요."
    },
    {
      model: "stable_diffusion_xl",
      version: "xl",
      note: "Precise component placement is possible using ControlNet or specific UI LoRAs. Glassmorphism effects are most stable at CFG scale 7-9.",
      note_ko: "ControlNet이나 특정 UI LoRA를 사용하여 정밀한 컴포넌트 배치가 가능합니다. 글래스모피즘 효과는 CFG 스케일 7-9에서 가장 안정적입니다."
    }
  ],
  comparison_notes: "Midjourney v6 excels in lighting and texture, making it ideal for mood boards. DALL-E 3 follows design intent accurately but may have a different artistic tone. Regardless of the model, Figma post-processing is essential for production-ready text. Midjourney remains the most consistent in rendering glassmorphism effects.",
  comparison_notes_ko: "미드저니 v6는 조명과 질감 면에서 뛰어나 무드 보드에 이상적입니다. DALL-E 3는 디자인 의도를 정확하게 따르지만 예술적 톤이 다를 수 있습니다. 모델에 관계없이 프로덕션급 텍스트를 위해서는 Figma 후처리가 필수적입니다. 미드저니는 글래스모피즘 효과를 렌더링하는 데 가장 일관된 성능을 보입니다.",
  variations: [
    {
      label: "Bright/Light Mode",
      label_ko: "밝은/라이트 모드",
      prompt_delta: "Replace dark navy background with bright white background #ffffff and subtle pastel gradients, soft shadows instead of glow effects",
      pre_generated_asset_id: "asset_ui_dashboard_bright_001",
      use_case: "Light mode preference, healthcare apps, clean minimal brands",
      use_case_ko: "라이트 모드 선호, 헬스케어 앱, 깨끗하고 미니멀한 브랜드"
    },
    {
      label: "Mobile/Vertical",
      label_ko: "모바일/수직형",
      prompt_delta: "Change dashboard UI to mobile app analytics screen with stacked cards, --ar 9:16, touch-friendly spacing",
      pre_generated_asset_id: "asset_ui_dashboard_mobile_001",
      use_case: "Mobile app store screenshots, mobile onboarding screens",
      use_case_ko: "모바일 앱스토어 스크린샷, 모바일 온보딩 화면"
    },
    {
      label: "Dark Cyberpunk",
      label_ko: "다크 사이버펑크",
      prompt_delta: "Replace navy with deep purple #1a0a2e, add neon accent lines, cyberpunk aesthetic, high contrast glowing elements",
      pre_generated_asset_id: "asset_ui_dashboard_cyberpunk_001",
      use_case: "Gaming dashboards, tech startups, futuristic brands",
      use_case_ko: "게이밍 대시보드, 테크 스타트업, 미래지향적 브랜드"
    }
  ],
  common_failure_modes: [
    "Garbled or unreadable text: Strengthen 'unreadable text' in the negative prompt or lower the stylize value.",
    "Overpowering glass effect: Soften with keywords like 'subtle blur' or 'light glassmorphism'.",
    "Overly artistic layout: Add 'functional layout' or 'usable interface' to anchor the result in realism."
  ],
  common_failure_modes_ko: [
    "문자가 뭉개지거나 읽기 어려움: 부정 프롬프트에서 'unreadable text'를 강화하거나 stylize 값을 낮추세요.",
    "유리 효과가 너무 강함: 'subtle blur' 또는 'light glassmorphism' 같은 키워드로 효과를 부드럽게 하세요.",
    "지나치게 예술적인 레이아웃: 결과물을 현실적인 인터페이스에 고정시키기 위해 'functional layout' 또는 'usable interface'를 추가하세요."
  ],
  seo: {
    primary_keyword: "glassmorphism dashboard UI prompt",
    secondary_keywords: [
      "midjourney dashboard prompt",
      "saas dashboard ai prompt",
      "ui design prompt",
      "glassmorphism ui mockup"
    ],
    lsi_keywords: [
      "translucent panels",
      "analytics cards",
      "dark mode SaaS",
      "futuristic UI design",
      "dashboard mockup",
      "glass morphism effect"
    ],
    meta_title: "Glassmorphism Dashboard UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "글래스모피즘 대시보드 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Copy a verified Midjourney v6 prompt for glassmorphism SaaS dashboards. Includes variables, model notes, 3 variations, and why this works analysis.",
    meta_description_ko: "글래스모피즘 SaaS 대시보드를 위한 검증된 미드저니 v6 프롬프트를 복사하세요. 변수, 모델 노트, 3가지 변형 및 작동 원리 분석이 포함되어 있습니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-dashboard-glassmorphism-001-hero.webp",
    thumbnail: "/images/prompts/ui-dashboard-glassmorphism-001-thumb.webp",
    variations: [
      "/images/prompts/ui-dashboard-glassmorphism-001-bright.webp",
      "/images/prompts/ui-dashboard-glassmorphism-001-mobile.webp",
      "/images/prompts/ui-dashboard-glassmorphism-001-cyberpunk.webp"
    ],
    alt_text: "Glassmorphism SaaS dashboard UI with translucent cards and glowing analytics charts on dark navy background",
    alt_text_ko: "어두운 네이비 배경 위에 반투명 카드와 빛나는 분석 차트가 포함된 글래스모피즘 SaaS 대시보드 UI",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "glass-dash-001",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified with actual Midjourney v6 generation. Text artifacts present as expected. Layout clean. 3 variations generated and confirmed. Ready for homepage feature."
  }
};

export const darkAnalyticsPrompt: PromptCard = {
  id: "ui-dark-analytics-002",
  slug: "dark-analytics-dashboard-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Dark Mode Analytics Dashboard Prompt",
  title_ko: "다크 모드 분석 대시보드 프롬프트",
  result_first_title: "Professional dark mode dashboard with neon data visualization charts",
  result_first_title_ko: "네온 데이터 시각화 차트가 포함된 전문가용 다크 모드 대시보드",
  short_description: "Dark mode analytics dashboard for crypto, fintech, and data-heavy applications. Neon accents on deep backgrounds.",
  short_description_ko: "암호화폐, 핀테크 및 데이터 집약적 애플리케이션을 위한 다크 모드 분석 대시보드입니다. 깊은 배경에 네온 포인트가 특징입니다.",
  emotional_hook: "This prompt evokes a futuristic sense of tension, where data glows softly within a void as deep as the ocean floor.",
  emotional_hook_ko: "이 프롬프트는 데이터가 심해처럼 깊은 공허 속에서 부드럽게 빛나는 미래지향적인 긴장감을 불러일으킵니다.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["crypto_dashboard", "fintech_app", "trading_interface", "server_monitoring"],
  use_cases_ko: ["암호화폐 대시보드", "핀테크 앱", "트레이딩 인터페이스", "서버 모니터링"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[dashboard_type], dark mode analytics dashboard, neon accent lines, data visualization charts, midnight blue #0f172a background, glowing grid lines, professional data UI, clean typography, futuristic interface --ar 16:9 --v 6 --s 200",
  negative_prompt: "bright background, cluttered layout, pastel colors, cartoon style, 3D render, human figures",
  aspect_ratio_tags: ["16:9", "dark_mode", "analytics"],
  variables: [
    {
      name: "dashboard_type",
      name_ko: "대시보드 유형",
      placeholder: "[dashboard_type]",
      default_value: "crypto portfolio dashboard",
      recommended_values: ["server monitoring dashboard", "social media analytics", "sales metrics dashboard", "trading platform interface"],
      variable_behavior_note: "Changing the dashboard type updates the data and widgets while maintaining the dark theme and neon accent style.",
      variable_behavior_note_ko: "대시보드 유형을 변경하면 다크 테마와 네온 액센트 스타일을 유지하면서 데이터와 위젯이 업데이트됩니다."
    }
  ],
  why_this_works: [
    "Dark mode reduces eye strain and helps users focus on critical data points.",
    "Neon accents highlight key metrics and data visualizations against the deep background.",
    "The midnight blue background provides a professional fintech and enterprise aesthetic."
  ],
  why_this_works_ko: [
    "다크 모드는 눈의 피로를 줄이고 사용자가 중요한 데이터 포인트에 집중할 수 있도록 돕습니다.",
    "네온 액센트는 깊은 배경 대비 주요 지표와 데이터 시각화를 돋보이게 합니다.",
    "미드나잇 블루 배경은 전문적인 핀테크 및 엔터프라이즈 미학을 제공합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Strong at rendering dark backgrounds and neon combinations. Stylize 150-250 recommended.",
      note_ko: "어두운 배경과 네온 조합을 렌더링하는 데 강력합니다. Stylize 150-250 설정을 권장합니다."
    }
  ],
  comparison_notes: "Midjourney v6 provides the most consistent results for dark UI and glowing effects.",
  comparison_notes_ko: "미드저니 v6는 다크 UI 및 발광 효과에 대해 가장 일관된 결과를 제공합니다.",
  variations: [
    {
      label: "Cyberpunk",
      label_ko: "사이버펑크",
      prompt_delta: "Add cyberpunk aesthetic, purple and cyan neon, glitch effects",
      use_case: "Gaming dashboards",
      use_case_ko: "게이밍 대시보드",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["If neon intensity is too high, text becomes unreadable -> adjust neon intensity keywords."],
  common_failure_modes_ko: ["네온 강도가 너무 높으면 텍스트를 읽기 어려워질 수 있습니다 -> 네온 강도 관련 키워드를 조정하세요."],
  seo: {
    primary_keyword: "dark mode dashboard prompt",
    secondary_keywords: ["analytics ui prompt", "dark theme dashboard"],
    lsi_keywords: ["neon charts", "data visualization"],
    meta_title: "Dark Mode Analytics Dashboard | Midjourney v6 Prompt",
    meta_title_ko: "다크 모드 분석 대시보드 | 미드저니 v6 프롬프트",
    meta_description: "Create professional dark mode dashboards with neon accents. Verified Midjourney v6 prompt for fintech and crypto interfaces.",
    meta_description_ko: "네온 액센트가 포함된 전문적인 다크 모드 대시보드를 만드세요. 핀테크 및 암호화폐 인터페이스를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-dark-analytics-002-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Dark mode analytics dashboard with neon charts",
    alt_text_ko: "네온 차트가 포함된 다크 모드 분석 대시보드",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "dark-analytics-002",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Tested with crypto and server monitoring contexts. Neon accents consistent."
  }
};


export const landingPagePrompt: PromptCard = {
  id: "ui-saas-landing-003",
  slug: "saas-landing-page-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "SaaS Landing Page Hero Prompt",
  title_ko: "SaaS 랜딩 페이지 히어로 프롬프트",
  result_first_title: "Modern SaaS landing page with 3D product mockup and gradient background",
  result_first_title_ko: "3D 제품 목업과 그라데이션 배경이 포함된 현대적인 SaaS 랜딩 페이지",
  short_description: "Clean, conversion-focused landing page design for SaaS products with hero section, CTA, and product visualization.",
  short_description_ko: "히어로 섹션, CTA 및 제품 시각화가 포함된 SaaS 제품용 깔끔하고 전환 중심적인 랜딩 페이지 디자인입니다.",
  emotional_hook: "This prompt creates a sophisticated space of persuasion that naturally leads visitors' attention to the product.",
  emotional_hook_ko: "이 프롬프트는 방문자의 시선을 자연스럽게 제품으로 유도하는 정교한 설득의 공간을 만들어냅니다.",
  category: "ui_ux",
  vertical: "landing_page",
  use_cases: ["saas_homepage", "product_launch", "startup_website", "conversion_page"],
  use_cases_ko: ["SaaS 홈페이지", "제품 출시", "스타트업 웹사이트", "전환 페이지"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[product_type] landing page, hero section with 3D product mockup, gradient background, CTA button, modern typography, clean layout, professional web design, high conversion UI --ar 16:9 --v 6 --s 200",
  negative_prompt: "cluttered design, outdated style, stock photos, multiple products, confusing layout",
  aspect_ratio_tags: ["16:9", "landing_page", "web_design"],
  variables: [
    {
      name: "product_type",
      name_ko: "제품 유형",
      placeholder: "[product_type]",
      default_value: "AI writing tool",
      recommended_values: ["project management app", "design tool", "analytics platform", "email marketing service"],
      variable_behavior_note: "Changing the product type modifies the mockup and hero image, but maintains the landing page structure and clean style.",
      variable_behavior_note_ko: "제품 유형을 변경하면 목업과 히어로 이미지가 수정되지만, 랜딩 페이지 구조와 깔끔한 스타일은 유지됩니다."
    }
  ],
  why_this_works: [
    "3D product mockups provide a sense of reality to the product.",
    "Gradient backgrounds grant a modern and vibrant feel.",
    "Clean layout is a design principle that directly affects conversion rates."
  ],
  why_this_works_ko: [
    "3D 제품 목업은 제품에 실재감을 부여합니다.",
    "그라데이션 배경은 현대적이고 활기찬 느낌을 줍니다.",
    "깔끔한 레이아웃은 전환율에 직접적인 영향을 미치는 디자인 원칙입니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Strong combination of 3D mockups and gradients.",
      note_ko: "3D 목업과 그라데이션의 조합이 강력합니다."
    }
  ],
  comparison_notes: "Midjourney excels in the modern aesthetics of SaaS landing pages.",
  comparison_notes_ko: "미드저니는 SaaS 랜딩 페이지의 현대적인 미학 구현에 탁월합니다.",
  variations: [
    {
      label: "Minimal",
      label_ko: "미니멀",
      prompt_delta: "Replace gradient with pure white background, minimal style",
      use_case: "Enterprise SaaS",
      use_case_ko: "엔터프라이즈 SaaS",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Mockup appearing too realistic might confuse it with an actual product photo -> maintain a proper 3D feel."],
  common_failure_modes_ko: ["목업이 너무 사실적으로 보이면 실제 제품 사진과 혼동될 수 있습니다 -> 적절한 3D 느낌을 유지하세요."],
  seo: {
    primary_keyword: "saas landing page prompt",
    secondary_keywords: ["website design prompt", "landing page ai"],
    lsi_keywords: ["hero section", "3D mockup", "conversion design"],
    meta_title: "SaaS Landing Page Prompt | Midjourney v6 UI Design",
    meta_title_ko: "SaaS 랜딩 페이지 프롬프트 | 미드저니 v6 UI 디자인",
    meta_description: "Create modern SaaS landing pages with 3D product mockups. Verified prompt for startup websites and product launches.",
    meta_description_ko: "3D 제품 목업이 포함된 현대적인 SaaS 랜딩 페이지를 만드세요. 스타트업 웹사이트 및 제품 출시를 위한 검증된 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-landing-003-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "SaaS landing page with 3D product mockup",
    alt_text_ko: "3D 제품 목업이 포함된 SaaS 랜딩 페이지",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "saas-landing-003",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Tested with various SaaS products. 3D mockup quality consistent."
  }
};

export const fintechMobilePrompt: PromptCard = {
  id: "ui-fintech-mobile-004",
  slug: "premium-fintech-mobile-app-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Premium Fintech Mobile App UI",
  title_ko: "프리미엄 핀테크 모바일 앱 UI",
  result_first_title: "High-end mobile banking interface with sleek dark gradients and neon highlights",
  result_first_title_ko: "세련된 다크 그라데이션과 네온 포인트가 포함된 고급 모바일 뱅킹 인터페이스",
  short_description: "A modern fintech mobile application design focusing on transaction history and asset visualization.",
  short_description_ko: "거래 내역 및 자산 시각화에 중점을 둔 현대적인 핀테크 모바일 애플리케이션 디자인입니다.",
  emotional_hook: "This prompt visualizes technical assurance that the user's assets are managed both securely and dynamically.",
  emotional_hook_ko: "이 프롬프트는 사용자의 자산이 안전하고 역동적으로 관리되고 있다는 기술적 확신을 시각화합니다.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["fintech_startup", "banking_app", "crypto_wallet_ui", "finance_portfolio"],
  use_cases_ko: ["핀테크 스타트업", "뱅킹 앱", "암호화폐 지갑 UI", "금융 포트폴리오"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "fintech mobile app UI, [app_context] screen, dark mode with deep violet and emerald accents, glowing balance display, sleek transaction list, minimalist iconography, premium mobile design, high-fidelity render --ar 9:16 --v 6 --s 300",
  negative_prompt: "bright white background, cluttered UI, low quality, unreadable text, photographic elements, stock photos, desktop layout",
  aspect_ratio_tags: ["9:16", "mobile_ui", "fintech"],
  variables: [
    {
      name: "app_context",
      name_ko: "앱 맥락",
      placeholder: "[app_context]",
      default_value: "digital wallet main dashboard",
      recommended_values: ["stock trading interface", "savings goal tracker", "spending analytics chart", "credit card management"],
      variable_behavior_note: "Changing the app context modifies widget and chart configurations suitable for the financial domain, but maintains the overall premium dark mood.",
      variable_behavior_note_ko: "앱 맥락을 변경하면 금융 영역에 적합한 위젯 및 차트 구성이 수정되지만, 전체적인 프리미엄 다크 분위기는 유지됩니다."
    }
  ],
  why_this_works: [
    "The combination of deep violet and emerald is a standard in modern fintech design, symbolizing both innovation and growth.",
    "The glowing balance is positioned at the top of the visual hierarchy to immediately strike the user's core interest.",
    "The 9:16 ratio matches actual mobile screen proportions, facilitating post-processing during mockup production."
  ],
  why_this_works_ko: [
    "딥 바이올렛과 에메랄드의 조합은 현대 핀테크 디자인의 표준으로, 혁신과 성장을 상징합니다.",
    "빛나는 잔액 표시는 시각적 계층 구조의 상단에 위치하여 사용자의 핵심 관심사를 즉시 자극합니다.",
    "9:16 비율은 실제 모바일 화면 비율과 일치하여 목업 제작 시 후처리를 용이하게 합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "High precision in mobile interface icons.",
      note_ko: "모바일 인터페이스 아이콘의 정밀도가 높습니다."
    }
  ],
  comparison_notes: "Midjourney v6 is overwhelming in its representation of mobile-specific dense layouts.",
  comparison_notes_ko: "미드저니 v6는 모바일 특유의 조밀한 레이아웃 표현에서 압도적입니다.",
  variations: [
    {
      label: "Light Professional",
      label_ko: "라이트 프로페셔널",
      prompt_delta: "Replace deep violet with soft gray and blue, white background",
      use_case: "Traditional banking",
      use_case_ko: "전통적인 뱅킹",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Navigation bar appearing blurry -> add 'clean bottom navigation' keywords."],
  common_failure_modes_ko: ["내비게이션 바가 흐릿하게 보일 수 있습니다 -> 'clean bottom navigation' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "fintech mobile app ui prompt",
    secondary_keywords: ["mobile banking ui", "finance app design ai"],
    lsi_keywords: ["dark mode finance", "glowing charts"],
    meta_title: "Fintech Mobile App UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "핀테크 모바일 앱 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Create high-end fintech mobile apps with neon highlights. Verified Midjourney v6 prompt for banking and trading interfaces.",
    meta_description_ko: "네온 포인트가 포함된 고급 핀테크 모바일 앱을 만드세요. 뱅킹 및 트레이딩 인터페이스를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-fintech-mobile-004-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Premium fintech mobile app UI with dark mode",
    alt_text_ko: "다크 모드가 적용된 프리미엄 핀테크 모바일 앱 UI",
    width: 900,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "fintech-mob-004",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for asset management layout."
  }
};


export const elearningDashboardPrompt: PromptCard = {
  id: "ui-elearning-dashboard-005",
  slug: "elearning-platform-dashboard-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "E-learning Platform Dashboard UI",
  title_ko: "이러닝 플랫폼 대시보드 UI",
  result_first_title: "Clean and focused e-learning dashboard with progress tracking and course cards",
  result_first_title_ko: "진도 추적과 강의 카드가 포함된 깔끔하고 집중도 높은 이러닝 대시보드",
  short_description: "A minimalist educational platform interface designed to maximize focus and learning efficiency.",
  short_description_ko: "학습 집중도와 효율성을 극대화하도록 설계된 미니멀한 교육 플랫폼 인터페이스입니다.",
  emotional_hook: "This prompt presents an environment where learners can immerse themselves solely in intellectual growth through an organized grid and calm colors.",
  emotional_hook_ko: "이 프롬프트는 정리된 그리드와 차분한 색상을 통해 학습자가 오직 지적 성장에만 몰입할 수 있는 환경을 제시합니다.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["lms_platform", "online_course_site", "educational_app", "student_portal"],
  use_cases_ko: ["LMS 플랫폼", "온라인 강의 사이트", "교육용 앱", "학생 포털"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "e-learning dashboard UI, [educational_theme], clean grid layout, sidebar navigation, progress progress rings, course preview cards, soft pastel highlights, minimal professional design, 8k render --ar 16:9 --v 6 --s 150",
  negative_prompt: "dark mode, messy layout, aggressive colors, unreadable text, gaming aesthetic, high contrast",
  aspect_ratio_tags: ["16:9", "dashboard", "education"],
  variables: [
    {
      name: "educational_theme",
      name_ko: "교육 테마",
      placeholder: "[educational_theme]",
      default_value: "coding bootcamp student interface",
      recommended_values: ["language learning app", "creative arts masterclass", "corporate training portal", "K-12 classroom management"],
      variable_behavior_note: "Changing the learning topic generates suitable icons and visuals, but maintains the clean white-toned structure that enhances focus.",
      variable_behavior_note_ko: "학습 주제를 변경하면 적절한 아이콘과 비주얼이 생성되지만, 집중력을 높이는 깔끔한 화이트 톤 구조는 유지됩니다."
    }
  ],
  why_this_works: [
    "Soft pastel highlights minimize eye fatigue and grant a friendly feel unique to educational brands.",
    "Clean grid layout systematically categorizes complex educational content to reduce user cognitive load."
  ],
  why_this_works_ko: [
    "부드러운 파스텔톤 하이라이트는 눈의 피로를 최소화하고 교육 브랜드 특유의 친근한 느낌을 줍니다.",
    "깔끔한 그리드 레이아웃은 복잡한 교육 콘텐츠를 체계적으로 분류하여 사용자의 인지 부하를 줄여줍니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional card-based layout generation capabilities.",
      note_ko: "카드 기반 레이아웃 생성 능력이 뛰어납니다."
    }
  ],
  comparison_notes: "Provides the most stable results in organized white UI design.",
  comparison_notes_ko: "정리된 화이트 UI 디자인에서 가장 안정적인 결과를 제공합니다.",
  variations: [
    {
      label: "Gamified Version",
      label_ko: "게이미피케이션 버전",
      prompt_delta: "Add badges, experience bars, and more vibrant colors",
      use_case: "Children education",
      use_case_ko: "어린이 교육",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Text areas appearing too empty -> reinforce with 'detailed course list' keywords."],
  common_failure_modes_ko: ["텍스트 영역이 너무 비어 보일 수 있습니다 -> 'detailed course list' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "elearning dashboard prompt",
    secondary_keywords: ["lms ui design ai", "educational platform prompt"],
    lsi_keywords: ["student portal UI", "course cards"],
    meta_title: "E-learning Dashboard UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "이러닝 대시보드 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design clean educational platforms with progress tracking. Verified Midjourney v6 prompt for LMS and student portals.",
    meta_description_ko: "진도 추적이 포함된 깔끔한 교육 플랫폼을 설계하세요. LMS 및 학생 포털을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-elearning-dashboard-005-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean e-learning dashboard UI",
    alt_text_ko: "깔끔한 이러닝 대시보드 UI",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "edu-dash-005",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for clarity and grid consistency."
  }
};

export const smartHomePrompt: PromptCard = {
  id: "ui-smart-home-006",
  slug: "smart-home-control-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Smart Home Control Center UI",
  title_ko: "스마트 홈 제어 센터 UI",
  result_first_title: "Minimalist smart home interface with intuitive device toggles and ambient lighting controls",
  result_first_title_ko: "직관적인 기기 토글과 앰비언트 조명 제어가 포함된 미니멀리스트 스마트 홈 인터페이스",
  short_description: "A clean, user-friendly control center for home automation systems, focusing on hierarchy and ease of use.",
  short_description_ko: "계층 구조와 사용 편의성에 중점을 둔 홈 오토메이션 시스템용 깔끔하고 사용자 친화적인 제어 센터입니다.",
  emotional_hook: "This prompt translates complex technology into a simple visual language, granting perfect control over living spaces.",
  emotional_hook_ko: "이 프롬프트는 복잡한 기술을 단순한 시각 언어로 번역하여 주거 공간에 대한 완벽한 통제권을 부여합니다.",
  category: "ui_ux",
  vertical: "smart_home",
  use_cases: ["iot_app", "home_automation", "tablet_interface", "smart_display"],
  use_cases_ko: ["IoT 앱", "홈 오토메이션", "태블릿 인터페이스", "스마트 디스플레이"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "smart home control UI, [home_context], minimalist skeuomorphic buttons, soft shadow depth, ambient lighting sliders, climate control widget, neutral warm gray background, premium IoT interface, high-end product design --ar 4:3 --v 6 --s 200",
  negative_prompt: "cluttered layout, aggressive neon, unreadable text, low quality, high contrast, mobile portrait layout, dark navy background",
  aspect_ratio_tags: ["4:3", "iot_ui", "tablet_design"],
  variables: [
    {
      name: "home_context",
      name_ko: "홈 제어 맥락",
      placeholder: "[home_context]",
      default_value: "living room lighting and temperature control",
      recommended_values: ["security camera grid view", "kitchen appliance monitoring", "energy consumption analytics", "entertainment system master control"],
      variable_behavior_note: "Changing the control target modifies icons and slider functions accordingly, but maintains the warm and neat minimalist style.",
      variable_behavior_note_ko: "제어 대상을 변경하면 아이콘과 슬라이더 기능이 그에 맞춰 수정되지만, 따뜻하고 깔끔한 미니멀리스트 스타일은 유지됩니다."
    }
  ],
  why_this_works: [
    "Minimalist skeuomorphic buttons provide intuitive feedback as if pressing actual physical buttons.",
    "The neutral warm gray background harmoniously connects the warmth of a home with the precision of technology."
  ],
  why_this_works_ko: [
    "미니멀리스트 스큐어모픽 버튼은 실제 물리적 버튼을 누르는 것과 같은 직관적인 피드백을 제공합니다.",
    "중립적이고 따뜻한 그레이 배경은 집의 따뜻함과 기술의 정밀함을 조화롭게 연결합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional representation of soft shadows and textures.",
      note_ko: "부드러운 그림자와 텍스처 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Provides optimal ratios and layouts for horizontal interface design intended for tablets and smart displays.",
  comparison_notes_ko: "태블릿 및 스마트 디스플레이용 가로 인터페이스 디자인에 최적화된 비율과 레이아웃을 제공합니다.",
  variations: [
    {
      label: "Dark Interface",
      label_ko: "다크 인터페이스",
      prompt_delta: "Replace warm gray with charcoal black and dim blue glow",
      use_case: "Night mode use",
      use_case_ko: "나이트 모드 사용",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Button spacing too narrow -> add 'spacious layout' keywords."],
  common_failure_modes_ko: ["버튼 간격이 너무 좁음 -> 'spacious layout' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "smart home control ui prompt",
    secondary_keywords: ["iot dashboard design", "home automation ui ai"],
    lsi_keywords: ["skeuomorphic buttons", "tablet interface"],
    meta_title: "Smart Home Control Center UI Prompt | Midjourney v6",
    meta_title_ko: "스마트 홈 제어 센터 UI 프롬프트 | 미드저니 v6",
    meta_description: "Design minimalist smart home interfaces for tablets. Verified Midjourney v6 prompt for IoT and home automation.",
    meta_description_ko: "태블릿용 미니멀리스트 스마트 홈 인터페이스를 디자인하세요. IoT 및 홈 오토메이션을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-smart-home-006-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Minimalist smart home control UI",
    alt_text_ko: "미니멀리스트 스마트 홈 제어 UI",
    width: 1200,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "home-ui-006",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for IoT dashboard layout."
  }
};

export const cryptoWalletPrompt: PromptCard = {
  id: "ui-crypto-wallet-007",
  slug: "crypto-wallet-interface-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Next-Gen Crypto Wallet UI",
  title_ko: "차세대 크립토 지갑 UI",
  result_first_title: "Secure and vibrant crypto wallet interface with asset allocation charts and transaction flow",
  result_first_title_ko: "자산 배분 차트와 거래 흐름이 포함된 안전하고 활기찬 크립토 지갑 인터페이스",
  short_description: "A high-fidelity mobile wallet design for digital assets, prioritizing security and clear data visualization.",
  short_description_ko: "보안과 명확한 데이터 시각화를 우선시하는 디지털 자산용 고해상도 모바일 지갑 디자인입니다.",
  emotional_hook: "This prompt grants visual order to understand complex blockchain data at a glance.",
  emotional_hook_ko: "이 프롬프트는 복잡한 블록체인 데이터를 한눈에 이해할 수 있는 시각적 질서를 부여합니다.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["web3_app", "crypto_wallet", "nft_marketplace", "defi_protocol"],
  use_cases_ko: ["Web3 앱", "크립토 지갑", "NFT 마켓플레이스", "DeFi 프로토콜"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "crypto wallet mobile UI, [wallet_context], glassmorphism card for total balance, vibrant asset pie chart, secure transaction buttons, dark futuristic aesthetic, electric blue and neon purple highlights, high-fidelity UI design --ar 9:16 --v 6 --s 300",
  negative_prompt: "low contrast, messy layout, unreadable text, bright white theme, old school design, desktop view",
  aspect_ratio_tags: ["9:16", "mobile_ui", "web3"],
  variables: [
    {
      name: "wallet_context",
      name_ko: "지갑 맥락",
      placeholder: "[wallet_context]",
      default_value: "multi-chain portfolio overview",
      recommended_values: ["NFT collection gallery", "staking rewards history", "token swap interface", "security settings and recovery"],
      variable_behavior_note: "Changing the wallet functions optimizes asset lists or chart forms for Web3 grammar, but maintains the unique futuristic dark theme.",
      variable_behavior_note_ko: "지갑 기능을 변경하면 Web3 문법에 맞춰 자산 목록이나 차트 형태를 최적화하지만, 고유한 미래형 다크 테마는 유지됩니다."
    }
  ],
  why_this_works: [
    "Vibrant asset pie charts strengthen the user experience by allowing intuitive grasping of portfolio composition.",
    "Electric blue and neon purple powerfully communicate the technical identity of Web3 brands."
  ],
  why_this_works_ko: [
    "활기찬 자산 파이 차트는 포트폴리오 구성을 직관적으로 파악할 수 있게 하여 사용자 경험을 강화합니다.",
    "일렉트릭 블루와 네온 퍼플은 Web3 브랜드의 기술적 정체성을 강력하게 전달합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional representation of emissive effects and gradients.",
      note_ko: "발광 효과와 그라데이션 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Guarantees top-tier quality in High-contrast dark mode designs unique to Web3/Crypto.",
  comparison_notes_ko: "Web3/크립토 특유의 고대비 다크 모드 디자인에서 최상위 품질을 보장합니다.",
  variations: [
    {
      label: "Professional White",
      label_ko: "프로페셔널 화이트",
      prompt_delta: "Change to bright white background with blue accents",
      use_case: "Corporate crypto services",
      use_case_ko: "기업용 크립토 서비스",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Charts appearing too complex and tangled -> add 'simple geometric charts' keywords."],
  common_failure_modes_ko: ["차트가 너무 복잡하고 엉킨 것처럼 보임 -> 'simple geometric charts' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "crypto wallet ui prompt",
    secondary_keywords: ["web3 app design ai", "mobile wallet prompt"],
    lsi_keywords: ["asset visualization", "glassmorphism card"],
    meta_title: "Crypto Wallet UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "크립토 지갑 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Create futuristic crypto wallet interfaces with glassmorphism. Verified Midjourney v6 prompt for Web3 and DeFi apps.",
    meta_description_ko: "글래스모피즘이 포함된 미래형 크립토 지갑 인터페이스를 만드세요. Web3 및 DeFi 앱을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-crypto-wallet-007-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Futuristic crypto wallet mobile UI",
    alt_text_ko: "미래형 크립토 지갑 모바일 UI",
    width: 900,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "crypto-ui-007",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for mobile Web3 layout."
  }
};


export const healthcarePortalPrompt: PromptCard = {
  id: "ui-healthcare-portal-008",
  slug: "healthcare-patient-portal-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Healthcare Patient Portal UI",
  title_ko: "헬스케어 환자 포털 UI",
  result_first_title: "Professional healthcare dashboard with patient data visualization and appointment schedule",
  result_first_title_ko: "환자 데이터 시각화와 예약 일정이 포함된 전문적인 헬스케어 대시보드",
  short_description: "A clean, trustworthy medical interface designed for hospital management and patient monitoring.",
  short_description_ko: "병원 관리 및 환자 모니터링을 위해 설계된 깔끔하고 신뢰할 수 있는 의료 인터페이스입니다.",
  emotional_hook: "This prompt builds visual trust to deliver life-critical data with the utmost clarity and stability.",
  emotional_hook_ko: "이 프롬프트는 생명과 직결된 데이터를 최고의 명확성과 안정성으로 전달하기 위해 시각적 신뢰를 구축합니다.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["hospital_mgmt", "telemedicine_app", "patient_monitoring", "health_data_analytics"],
  use_cases_ko: ["병원 관리", "원격 의료 앱", "환자 모니터링", "건강 데이터 분석"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "healthcare patient portal UI, [medical_context], clean white and sky blue color palette, medical data charts, appointment calendar widget, soft shadows, professional typography, high-fidelity medical interface --ar 16:9 --v 6 --s 150",
  negative_prompt: "dark mode, aggressive colors, unreadable text, messy layout, gaming aesthetic, high contrast, non-medical imagery",
  aspect_ratio_tags: ["16:9", "dashboard", "healthcare"],
  variables: [
    {
      name: "medical_context",
      name_ko: "의료 맥락",
      placeholder: "[medical_context]",
      default_value: "cardiac health monitoring dashboard",
      recommended_values: ["telemedicine video consultation UI", "prescription history and management", "MRI/CT scan result viewer", "hospital bed occupancy tracker"],
      variable_behavior_note: "Changing the medical context generates suitable special charts (heart rate, scheduler, etc.), but maintains the essence of medical services: cleanliness and trust.",
      variable_behavior_note_ko: "의료 맥락을 변경하면 적절한 특수 차트(심박수, 스케줄러 등)를 생성하지만, 의료 서비스의 본질인 청결함과 신뢰는 유지됩니다."
    }
  ],
  why_this_works: [
    "The sky blue palette is a standard in the medical field, providing psychological stability and trust to both patients and medical staff.",
    "The appointment calendar widget proposes a structure to intuitively manage complex medical schedules."
  ],
  why_this_works_ko: [
    "스카이 블루 팔레트는 의료 분야의 표준으로, 환자와 의료진 모두에게 심리적 안정감과 신뢰를 제공합니다.",
    "예약 캘린더 위젯은 복잡한 의료 일정을 직관적으로 관리할 수 있는 구조를 제안합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Good representation of professional font layouts and diagrams.",
      note_ko: "전문적인 폰트 레이아웃과 다이어그램 표현이 좋습니다."
    }
  ],
  comparison_notes: "Provides the highest practicality in stable and conservative medical dashboard designs.",
  comparison_notes_ko: "안정적이고 보수적인 의료 대시보드 디자인에서 최고의 실용성을 제공합니다.",
  variations: [
    {
      label: "Emergency Red",
      label_ko: "이머전시 레드",
      prompt_delta: "Add emergency red highlights for critical alerts",
      use_case: "ICU monitoring",
      use_case_ko: "ICU 모니터링",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Icons appearing too juvenile -> reinforce with 'minimalist professional icons' keywords."],
  common_failure_modes_ko: ["아이콘이 너무 유아틱하게 보임 -> 'minimalist professional icons' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "healthcare portal ui prompt",
    secondary_keywords: ["medical dashboard ai", "telemedicine app prompt"],
    lsi_keywords: ["patient data visualization", "medical UI"],
    meta_title: "Healthcare Patient Portal UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "헬스케어 환자 포털 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design clean medical interfaces with patient data tracking. Verified Midjourney v6 prompt for hospital systems and telemedicine.",
    meta_description_ko: "환자 데이터 추적 기능이 포함된 깔끔한 의료 인터페이스를 디자인하세요. 병원 시스템 및 원격 의료를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-healthcare-portal-008-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional healthcare patient portal UI",
    alt_text_ko: "전문적인 헬스케어 환자 포털 UI",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "health-ui-008",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for medical data hierarchy."
  }
};


export const shoppingCartPrompt: PromptCard = {
  id: "ui-ecommerce-cart-009",
  slug: "modern-shopping-cart-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Modern Shopping Cart UI",
  title_ko: "현대적인 쇼핑카트 UI",
  result_first_title: "Sleek and intuitive shopping cart interface for fashion e-commerce apps",
  result_first_title_ko: "패션 이커머스 앱을 위한 세련되고 직관적인 쇼핑카트 인터페이스",
  short_description: "Professional cart design with clear item list, quantity controls, and total price summary.",
  short_description_ko: "명확한 아이템 목록, 수량 조절 및 총 가격 요약이 포함된 전문적인 카트 디자인입니다.",
  emotional_hook: "This prompt presents a fluid and flexible user interface that doesn't disrupt the excitement right before purchase.",
  emotional_hook_ko: "이 프롬프트는 구매 직전의 설레임을 방해하지 않는 유연하고 매끄러운 사용자 인터페이스를 제시합니다.",
  category: "ui_ux",
  vertical: "ecommerce",
  use_cases: ["shopping_app", "ecommerce_web", "ui_mockup", "mobile_payment"],
  use_cases_ko: ["쇼핑 앱", "이커머스 웹", "UI 목업", "모바일 결제"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "modern shopping cart UI, [platform_type], minimalist design, list of fashion items with thumbnails, quantity steppers, price breakdown, 'Checkout' call-to-action button, high contrast, clean typography, soft shadows --ar 9:16 --v 6 --s 200",
  negative_prompt: "cluttered, low contrast, messy text, ugly icons, dark mode (unless specified), colorful chaos, blurry image thumbnails",
  aspect_ratio_tags: ["9:16", "mobile_ui", "ecommerce"],
  variables: [
    {
      name: "platform_type",
      name_ko: "플랫폼 유형",
      placeholder: "[platform_type]",
      default_value: "ios mobile app",
      recommended_values: ["android mobile app", "responsive desktop web", "ipad tablet interface"],
      variable_behavior_note: "Changing the platform optimizes button size and overall layout density, but maintains the minimalist components.",
      variable_behavior_note_ko: "플랫폼을 변경하면 버튼 크기와 전체 레이아웃 밀도가 최적화되지만, 미니멀리스트 컴포넌트는 유지됩니다."
    }
  ],
  why_this_works: [
    "Quantity steppers provide intuitive control for users, reducing fatigue in cart management.",
    "Clear price breakdown increases conversion rates by removing anxiety regarding unexpected costs."
  ],
  why_this_works_ko: [
    "수량 조절기(Stepper)는 사용자에게 직관적인 제어를 제공하여 카트 관리의 피로도를 줄여줍니다.",
    "명확한 가격 상세 내역은 예상치 못한 비용에 대한 불안감을 제거하여 전환율을 높입니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Very clean card layout separation and font alignment.",
      note_ko: "카드 레이아웃 분리와 폰트 정렬이 매우 깔끔합니다."
    }
  ],
  comparison_notes: "Provides standard cart layouts that faithfully follow best practices of actual retail apps.",
  comparison_notes_ko: "실제 리테일 앱의 모범 사례를 충실히 따르는 표준 카트 레이아웃을 제공합니다.",
  variations: [
    {
      label: "Empty State",
      label_ko: "빈 상태",
      prompt_delta: "Replace item list with 'Your cart is empty' message and 'Start Shopping' button",
      use_case: "Empty cart UI",
      use_case_ko: "비어 있는 카트 UI",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Fonts appearing blurry -> reinforce with 'clean sans-serif typography' keywords."],
  common_failure_modes_ko: ["폰트가 흐릿하게 보임 -> 'clean sans-serif typography' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "shopping cart ui prompt",
    secondary_keywords: ["ecommerce app design ai", "checkout ui prompt"],
    lsi_keywords: ["quantity controls", "price summary"],
    meta_title: "Shopping Cart UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "현대적인 쇼핑카트 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design sleek and intuitive shopping carts for ecommerce. Verified Midjourney v6 prompt for mobile and web apps.",
    meta_description_ko: "이커머스를 위한 세련되고 직관적인 쇼핑카트를 디자인하세요. 모바일 및 웹 앱을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-ecommerce-cart-009-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Sleek mobile shopping cart UI",
    alt_text_ko: "세련된 모바일 쇼핑카트 UI",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "cart-009",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for ecommerce usability."
  }
};

export const checkoutPaymentPrompt: PromptCard = {
  id: "ui-ecommerce-checkout-010",
  slug: "secure-checkout-payment-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Secure Checkout & Payment UI",
  title_ko: "보안 결제 및 체크아웃 UI",
  result_first_title: "Trustworthy and professional payment interface with credit card entry and Apple Pay option",
  result_first_title_ko: "신용카드 입력 및 Apple Pay 옵션이 포함된 신뢰할 수 있는 전문 결제 인터페이스",
  short_description: "Final checkout screen focusing on trust, security, and multiple payment method selection.",
  short_description_ko: "신뢰, 보안 및 다양한 결제 수단 선택에 중점을 둔 최종 체크아웃 화면입니다.",
  emotional_hook: "This prompt provides both solid security and comfortable visual stability during the most sensitive moments of financial transactions.",
  emotional_hook_ko: "이 프롬프트는 금융 거래의 가장 민감한 순간에 견고한 보안과 편안한 시각적 안정성을 동시에 제공합니다.",
  category: "ui_ux",
  vertical: "ecommerce",
  use_cases: ["payment_gateway", "checkout_process", "fintech_ui", "subscription_billing"],
  use_cases_ko: ["결제 게이트웨이", "체크아웃 프로세스", "핀테크 UI", "구독 결제"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "secure checkout UI, [device_type], payment method selection, credit card input fields, Apple Pay and Google Pay buttons, security badges, minimalist layout, professional blue and white color scheme, clear error states --ar 9:16 --v 6 --s 150",
  negative_prompt: "unprofessional, amateur design, dark background, scary colors, low resolution, messy fields, small buttons",
  aspect_ratio_tags: ["9:16", "payment", "security"],
  variables: [
    {
      name: "device_type",
      name_ko: "기기 유형",
      placeholder: "[device_type]",
      default_value: "mobile phone display",
      recommended_values: ["web browser window", "kiosk touch screen", "smart watch payment screen"],
      variable_behavior_note: "Changing the device modifies input form size and button placement to induce optimal input for each environment.",
      variable_behavior_note_ko: "기기를 변경하면 각 환경에 최적화된 입력을 유도하기 위해 입력 폼 크기와 버튼 배치가 수정됩니다."
    }
  ],
  why_this_works: [
    "Security badges play a decisive role in resolving user psychological anxiety and encouraging the final payment button click.",
    "The professional blue and white color scheme is the most preferred 'trust' palette in financial services."
  ],
  why_this_works_ko: [
    "보안 배지는 사용자의 심리적 불안을 해소하고 최종 결제 버튼 클릭을 유도하는 데 결정적인 역할을 합니다.",
    "전문적인 블루와 화이트 컬러 스킴은 금융 서비스에서 가장 선호되는 '신뢰'의 팔레트입니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Sophisticated alignment of card icons and input fields.",
      note_ko: "카드 아이콘과 입력 필드의 정교한 정렬이 돋보입니다."
    }
  ],
  comparison_notes: "Guarantees high completeness on par with actual payment modules of fintech companies.",
  comparison_notes_ko: "핀테크 기업의 실제 결제 모듈에 버금가는 높은 완성도를 보장합니다.",
  variations: [
    {
      label: "Success Screen",
      label_ko: "성공 화면",
      prompt_delta: "Replace payment fields with large green checkmark and 'Payment Successful' message",
      use_case: "Payment confirmation",
      use_case_ko: "결제 확인",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Buttons appearing too small -> add 'large accessible tap targets' keywords."],
  common_failure_modes_ko: ["버튼이 너무 작게 보임 -> 'large accessible tap targets' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "checkout payment ui prompt",
    secondary_keywords: ["payment gateway design ai", "fintech checkout prompt"],
    lsi_keywords: ["security badges", "payment method selection"],
    meta_title: "Secure Checkout & Payment UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "보안 결제 및 체크아웃 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design professional and trustworthy payment interfaces. Verified Midjourney v6 prompt for secure checkout.",
    meta_description_ko: "전문적이고 신뢰할 수 있는 결제 인터페이스를 디자인하세요. 보안 체크아웃을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-ecommerce-checkout-010-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional mobile payment UI",
    alt_text_ko: "전문적인 모바일 결제 UI",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "payment-010",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for fintech trust standards."
  }
};


export const productDetailPrompt: PromptCard = {
  id: "ui-ecommerce-detail-011",
  slug: "premium-product-detail-page-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Premium Product Detail Page",
  title_ko: "프리미엄 상품 상세 페이지",
  result_first_title: "High-end product detail page with large hero image and elegant typography",
  result_first_title_ko: "대형 히어로 이미지와 우아한 타이포그래피가 포함된 하이엔드 상품 상세 페이지",
  short_description: "A conversion-focused product page for luxury and fashion brands with detailed descriptions and reviews.",
  short_description_ko: "상세 설명과 리뷰가 포함된 럭셔리 및 패션 브랜드를 위한 전환 중심의 상품 페이지입니다.",
  emotional_hook: "This prompt storyboards the unique value of a product through bold layouts and delicate typography.",
  emotional_hook_ko: "이 프롬프트는 대담한 레이아웃과 섬세한 타이포그래피를 통해 제품의 고유한 가치를 스토리보드화합니다.",
  category: "ui_ux",
  vertical: "ecommerce",
  use_cases: ["luxury_brand_web", "fashion_retail", "product_catalog", "landing_page"],
  use_cases_ko: ["럭셔리 브랜드 웹", "패션 리테일", "제품 카탈로그", "랜딩 페이지"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "premium product detail page UI, [industry_type], large high-resolution hero image, elegant serif typography, minimal layout, price and add to cart section, size selector, accordion for details, white space, luxury aesthetic --ar 16:9 --v 6 --s 300",
  negative_prompt: "cheap design, cluttered, low quality image, generic ecommerce, bright neon colors, messy layout",
  aspect_ratio_tags: ["16:9", "product_page", "luxury"],
  variables: [
    {
      name: "industry_type",
      name_ko: "산업 유형",
      placeholder: "[industry_type]",
      default_value: "high-end luxury watch brand",
      recommended_values: ["minimalist designer furniture", "premium organic skincare", "concept electric bicycle", "boutique winery"],
      variable_behavior_note: "Changing the industry modifies the product's mood and information structure, but maintains the whitespace and sophisticated refinement unique to premium brands.",
      variable_behavior_note_ko: "산업을 변경하면 제품의 분위기와 정보 구조가 수정되지만, 프리미엄 브랜드 특유의 여백과 세련된 정교함은 유지됩니다."
    }
  ],
  why_this_works: [
    "A large hero image overwhelmingly conveys the first impression of the product, increasing user dwell time.",
    "Elegant serif typography visually represents the brand's history and trust."
  ],
  why_this_works_ko: [
    "대형 히어로 이미지는 제품의 첫인상을 압도적으로 전달하여 사용자의 체류 시간을 늘립니다.",
    "우아한 세리프 타이포그래피는 브랜드의 역사와 신뢰를 시각적으로 대변합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional whitespace and alignment in website layouts.",
      note_ko: "웹사이트 레이아웃에서 뛰어난 여백 활용과 정렬을 보여줍니다."
    }
  ],
  comparison_notes: "Provides elegant visuals comparable to the websites of global luxury brands.",
  comparison_notes_ko: "글로벌 럭셔리 브랜드의 웹사이트에 버금가는 우아한 비주얼을 제공합니다.",
  variations: [
    {
      label: "Dark Mode",
      label_ko: "다크 모드",
      prompt_delta: "Change to deep charcoal background, gold accents, ultra-premium vibe",
      use_case: "Evening wear or tech",
      use_case_ko: "이브닝 웨어 또는 테크",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Information appearing too sparse -> add 'detailed product specifications section' keywords."],
  common_failure_modes_ko: ["정보가 너무 희소해 보임 -> 'detailed product specifications section' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "product detail page ui prompt",
    secondary_keywords: ["luxury ecommerce design ai", "fashion landing page prompt"],
    lsi_keywords: ["hero image", "serif typography"],
    meta_title: "Premium Product Detail Page Prompt | Midjourney v6 Verified",
    meta_title_ko: "프리미엄 상품 상세 페이지 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design high-end product detail pages for luxury brands. Verified Midjourney v6 prompt for conversion focus.",
    meta_description_ko: "럭셔리 브랜드를 위한 하이엔드 상품 상세 페이지를 디자인하세요. 전환 중심의 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-ecommerce-detail-011-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Elegant luxury product detail web design",
    alt_text_ko: "우아한 럭셔리 상품 상세 웹 디자인",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "detail-011",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for high-end aesthetic."
  }
};


export const advancedFilteringPrompt: PromptCard = {
  id: "ui-ecommerce-filter-012",
  slug: "advanced-ecommerce-filtering-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Advanced E-commerce Filtering UI",
  title_ko: "고급 이커머스 필터링 UI",
  result_first_title: "Sophisticated sidebar filtering system for high-density product catalogs",
  result_first_title_ko: "고밀도 제품 카탈로그를 위한 정교한 사이드바 필터링 시스템",
  short_description: "A complex yet usable filtering interface for large marketplaces with price ranges, categories, and attributes.",
  short_description_ko: "가격 범위, 카테고리 및 속성이 포함된 대형 마켓플레이스를 위한 복잡하면서도 사용 가능한 필터링 인터페이스입니다.",
  emotional_hook: "This prompt designs a sophisticated compass that allows users to find the one jewel they want among tens of thousands of products.",
  emotional_hook_ko: "이 프롬프트는 수만 개의 제품 중에서 사용자가 원하는 단 하나의 보석을 찾을 수 있게 해주는 정교한 나침반을 설계합니다.",
  category: "ui_ux",
  vertical: "ecommerce",
  use_cases: ["marketplace_web", "electronic_store", "large_retailer", "product_listing_page"],
  use_cases_ko: ["마켓플레이스 웹", "전자제품 매장", "대형 소매점", "제품 목록 페이지"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "advanced ecommerce filtering UI, [listing_type], sidebar layout, price range slider, checkbox categories, color swatches, rating filter, clean grid of products in background, professional SaaS aesthetic, highly usable --ar 16:9 --v 6 --s 150",
  negative_prompt: "cluttered, confusing UX, small text, ugly colors, outdated web design, blurry icons",
  aspect_ratio_tags: ["16:9", "filtering", "saas"],
  variables: [
    {
      name: "listing_type",
      name_ko: "목록 유형",
      placeholder: "[listing_type]",
      default_value: "electronics marketplace with complex specs",
      recommended_values: ["furniture catalog with material filters", "professional photography gear store", "luxury fashion house with seasonal filters", "outdoor adventure gear shop"],
      variable_behavior_note: "Changing the listing type optimizes filter details (color, material, specs, etc.), but maintains the overall sidebar layout structure.",
      variable_behavior_note_ko: "목록 유형을 변경하면 필터 세부 정보(색상, 재질, 사양 등)를 최적화하지만, 전체적인 사이드바 레이아웃 구조는 유지됩니다."
    }
  ],
  why_this_works: [
    "Price range sliders and color swatches facilitate visually enjoyable and faster navigation compared to text-based filters.",
    "Sidebar layout is the most verified information structure in large malls, minimizing user learning costs."
  ],
  why_this_works_ko: [
    "가격 범위 슬라이더와 컬러 스와치는 텍스트 기반 필터보다 시각적으로 즐겁고 빠른 탐색을 돕습니다.",
    "사이드바 레이아웃은 대형 쇼핑몰에서 가장 검증된 정보 구조로, 사용자의 학습 비용을 최소화합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Sophisticated representation of interactive elements like sliders and checkboxes.",
      note_ko: "슬라이더와 체크박스 같은 상호작용 요소의 표현이 정교합니다."
    }
  ],
  comparison_notes: "Designed by benchmarking advanced search functions of major platforms like Amazon or eBay.",
  comparison_notes_ko: "Amazon이나 eBay와 같은 주요 플랫폼의 고급 검색 기능을 벤치마킹하여 설계되었습니다.",
  variations: [
    {
      label: "Mobile Bottom Sheet",
      label_ko: "모바일 바텀 시트",
      prompt_delta: "Change sidebar to mobile bottom sheet UI with large tap targets",
      use_case: "Mobile shopping filters",
      use_case_ko: "모바일 쇼핑 필터",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Filter items too crowded -> add 'generous spacing, hierarchy' keywords."],
  common_failure_modes_ko: ["필터 항목이 너무 조밀함 -> 'generous spacing, hierarchy' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "ecommerce filtering ui prompt",
    secondary_keywords: ["product listing design ai", "marketplace ui prompt"],
    lsi_keywords: ["price range slider", "sidebar layout"],
    meta_title: "Advanced E-commerce Filtering UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "고급 이커머스 필터링 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design sophisticated filtering systems for large marketplaces. Verified Midjourney v6 prompt for high-density catalogs.",
    meta_description_ko: "대형 마켓플레이스를 위한 정교한 필터링 시스템을 디자인하세요. 고밀도 카탈로그를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-ecommerce-filter-012-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Sophisticated marketplace filtering system UI",
    alt_text_ko: "정교한 마켓플레이스 필터링 시스템 UI",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "filter-012",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for information architecture."
  }
};


export const userReviewsPrompt: PromptCard = {
  id: "ui-ecommerce-review-013",
  slug: "social-proof-reviews-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Social Proof & Reviews UI",
  title_ko: "소셜 프루프 및 리뷰 UI",
  result_first_title: "Engaging user reviews section with photo gallery and rating summary",
  result_first_title_ko: "포토 갤러리와 평점 요약이 포함된 매력적인 사용자 리뷰 섹션",
  short_description: "A trust-building UI component for product pages, featuring photo reviews, helpful votes, and detailed ratings.",
  short_description_ko: "포토 리뷰, 도움됨 투표 및 상세 평점을 특징으로 하는 제품 페이지용 신뢰 구축 UI 컴포넌트입니다.",
  emotional_hook: "This prompt visually aligns the vivid voices of others, turning the final anxiety of purchase decisions into confidence.",
  emotional_hook_ko: "이 프롬프트는 타인의 생생한 목소리를 시각적으로 정렬하여, 구매 결정의 마지막 불안을 확신으로 바꿔줍니다.",
  category: "ui_ux",
  vertical: "ecommerce",
  use_cases: ["product_review_section", "testimonial_block", "community_feedback", "trust_building"],
  use_cases_ko: ["제품 리뷰 섹션", "추천글 블록", "커뮤니티 피드백", "신뢰 구축"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "user reviews UI section, [app_context], average rating summary card, photo review gallery, verified buyer badges, 'Helpful' vote buttons, clean cards, soft shadows, trust-focused design --ar 16:9 --v 6 --s 180",
  negative_prompt: "messy comments, low resolution photos, dark and gloomy, aggressive red colors, cluttered layout, small text",
  aspect_ratio_tags: ["16:9", "reviews", "social_proof"],
  variables: [
    {
      name: "app_context",
      name_ko: "앱 맥락",
      placeholder: "[app_context]",
      default_value: "skincare brand with before-and-after photos",
      recommended_values: ["tech gadget store with unboxing shots", "travel booking app with hotel photos", "fitness app with transformation stories", "designer furniture with customer home shots"],
      variable_behavior_note: "Changing the app context modifies the types of review photos and highlighted information, but maintains the trustworthy layout.",
      variable_behavior_note_ko: "앱 맥락을 변경하면 리뷰 사진의 유형과 강조되는 정보가 수정되지만, 신뢰할 수 있는 레이아웃은 유지됩니다."
    }
  ],
  why_this_works: [
    "Photo review galleries provide a much stronger purchase motive than text and verify the product's actual appearance.",
    "Verified buyer badges guarantee the truthfulness of reviews, increasing overall platform trust."
  ],
  why_this_works_ko: [
    "포토 리뷰 갤러리는 텍스트보다 훨씬 강력한 구매 동기를 제공하며 제품의 실제 모습을 검증합니다.",
    "구매자 인증 배지는 리뷰의 진실성을 보장하여 플랫폼 전체의 신뢰도를 높입니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Excellent balance between photo grids and rating cards.",
      note_ko: "사진 그리드와 평점 카드 사이의 뛰어난 레이아웃 균형을 보여줍니다."
    }
  ],
  comparison_notes: "Implements the core UI of 'review-centric shopping' pursued by modern commerce platforms.",
  comparison_notes_ko: "현대 커머스 플랫폼이 추구하는 '리뷰 중심 쇼핑'의 핵심 UI를 구현합니다.",
  variations: [
    {
      label: "Simplified",
      label_ko: "심플 버전",
      prompt_delta: "Remove photos, focus on large text testimonials and brand logos",
      use_case: "B2B SaaS testimonials",
      use_case_ko: "B2B SaaS 추천사",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Review photos appearing unpleasant -> add 'aesthetic lifestyle photography, clean subjects' keywords."],
  common_failure_modes_ko: ["리뷰 사진이 불쾌하게 보임 -> 'aesthetic lifestyle photography, clean subjects' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "user reviews ui prompt",
    secondary_keywords: ["social proof design ai", "photo review ui prompt"],
    lsi_keywords: ["rating summary", "verified buyer badge"],
    meta_title: "Social Proof & Reviews UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "소셜 프루프 및 리뷰 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design engaging user review sections for ecommerce. Verified Midjourney v6 prompt for trust building.",
    meta_description_ko: "이커머스를 위한 매력적인 사용자 리뷰 섹션을 디자인하세요. 신뢰 구축을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-ecommerce-review-013-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Engaging photo reviews UI section",
    alt_text_ko: "매력적인 포토 리뷰 UI 섹션",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "review-013",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for social proof layout."
  }
};


export const crmDashboardPrompt: PromptCard = {
  id: "ui-saas-crm-014",
  slug: "saas-crm-dashboard-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "SaaS CRM Dashboard",
  title_ko: "SaaS CRM 대시보드",
  result_first_title: "High-density CRM dashboard with sales pipeline and customer metrics",
  result_first_title_ko: "영업 파이프라인과 고객 지표가 포함된 고밀도 CRM 대시보드",
  short_description: "A data-rich interface for managing sales leads, customer relationships, and revenue forecasting.",
  short_description_ko: "영업 리드, 고객 관계 및 수익 예측을 관리하기 위한 데이터 중심 인터페이스입니다.",
  emotional_hook: "This prompt accelerates decision-making by combining scattered business data into a single, powerful visual strategy.",
  emotional_hook_ko: "이 프롬프트는 흩어져 있는 비즈니스 데이터를 하나의 강력한 시각적 전략으로 결합하여 의사결정을 가속화합니다.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["crm_software", "sales_analytics", "enterprise_saas", "b2b_dashboard"],
  use_cases_ko: ["CRM 소프트웨어", "영업 분석", "엔터프라이즈 SaaS", "B2B 대시보드"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "SaaS CRM dashboard UI, [company_type], high-density layout, sales pipeline funnel chart, customer table with status badges, revenue growth line graph, sidebar navigation, clean sans-serif typography, professional gray and indigo color palette --ar 16:9 --v 6 --s 180",
  negative_prompt: "cluttered, colorful chaos, low contrast, messy charts, blurry text, cartoonish icons, dark mode (unless specified)",
  aspect_ratio_tags: ["16:9", "saas", "crm"],
  variables: [
    {
      name: "company_type",
      name_ko: "회사 유형",
      placeholder: "[company_type]",
      default_value: "real estate agency management",
      recommended_values: ["tech startup sales team", "global logistics enterprise", "subscription-based media company", "professional consulting firm"],
      variable_behavior_note: "Changing the industry optimizes data items and metrics, but maintains the professional B2B interface mood.",
      variable_behavior_note_ko: "산업을 변경하면 데이터 항목과 지표가 최적화되지만, 전문적인 B2B 인터페이스 분위기는 유지됩니다."
    }
  ],
  why_this_works: [
    "Sales pipeline funnels visually facilitate the immediate identification of bottlenecks in revenue flow, aiding strategy establishment.",
    "The indigo color palette delivers both the stability and intellectual sophistication required in enterprise software."
  ],
  why_this_works_ko: [
    "영업 파이프라인 퍼널은 수익 흐름의 병목 현상을 시각적으로 즉시 파악하게 하여 전략 수립을 돕습니다.",
    "인디고 컬러 팔레트는 엔터프라이즈 소프트웨어에 필요한 안정감과 지적인 세련미를 동시에 전달합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional layout balance between complex tables and charts.",
      note_ko: "복잡한 테이블과 차트 사이의 탁월한 레이아웃 균형을 보여줍니다."
    }
  ],
  comparison_notes: "Designed by benchmarking the professionalism of major CRM solutions like Salesforce or HubSpot.",
  comparison_notes_ko: "Salesforce나 HubSpot과 같은 주요 CRM 솔루션의 전문성을 벤치마킹하여 설계되었습니다.",
  variations: [
    {
      label: "Dark Theme",
      label_ko: "다크 테마",
      prompt_delta: "Change palette to deep slate background with cyan accents, glowing charts",
      use_case: "Modern tech CRM",
      use_case_ko: "현대적인 테크 CRM",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Data density appearing too low -> add 'compact layout, detailed metrics' keywords."],
  common_failure_modes_ko: ["데이터 밀도가 너무 낮아 보임 -> 'compact layout, detailed metrics' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "crm dashboard ui prompt",
    secondary_keywords: ["saas design ai", "sales pipeline prompt"],
    lsi_keywords: ["customer metrics", "funnel chart"],
    meta_title: "SaaS CRM Dashboard UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "SaaS CRM 대시보드 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design high-density CRM dashboards for enterprise sales. Verified Midjourney v6 prompt for data-rich SaaS.",
    meta_description_ko: "엔터프라이즈 영업을 위한 고밀도 CRM 대시보드를 디자인하세요. 데이터 중심 SaaS를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-crm-014-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional SaaS CRM dashboard interface",
    alt_text_ko: "전문적인 SaaS CRM 대시보드 인터페이스",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "crm-014",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for B2B data density."
  }
};


export const userManagementPrompt: PromptCard = {
  id: "ui-saas-users-015",
  slug: "user-management-system-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "User Management System UI",
  title_ko: "사용자 관리 시스템 UI",
  result_first_title: "Clean and scalable user management interface with role-based access control",
  result_first_title_ko: "역할 기반 액세스 제어가 포함된 깔끔하고 확장 가능한 사용자 관리 인터페이스",
  short_description: "An administrative interface for managing team members, permission levels, and account status.",
  short_description_ko: "팀원, 권한 수준 및 계정 상태를 관리하기 위한 관리 인터페이스입니다.",
  emotional_hook: "This prompt provides perfect control to manage hundreds of organization members orderly on a single screen.",
  emotional_hook_ko: "이 프롬프트는 수백 명의 조직 구성원을 한 화면에서 질서 있게 관리할 수 있는 완벽한 통제력을 제공합니다.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["admin_portal", "hr_software", "team_collaboration", "access_control"],
  use_cases_ko: ["관리자 포털", "HR 소프트웨어", "팀 협업", "액세스 제어"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "user management UI, [org_type], searchable user table, role badges (Admin, Editor, Viewer), activity status toggles, avatar thumbnails, bulk actions bar, minimalist white theme, precise spacing, functional aesthetic --ar 16:9 --v 6 --s 120",
  negative_prompt: "artistic, blurry, colorful backgrounds, messy icons, generic, low detail, rounded corners too large",
  aspect_ratio_tags: ["16:9", "admin_ui", "user_management"],
  variables: [
    {
      name: "org_type",
      name_ko: "조직 유형",
      placeholder: "[org_type]",
      default_value: "global software engineering team",
      recommended_values: ["hospital medical staff directory", "university student portal admin", "e-commerce support team", "government agency directory"],
      variable_behavior_note: "Changing the organization type modifies user fields (title, ID, affiliation, etc.), but maintains high readability of the management table.",
      variable_behavior_note_ko: "조직 유형을 변경하면 사용자 필드(직함, ID, 소속 등)가 수정되지만, 관리 테이블의 높은 가독성은 유지됩니다."
    }
  ],
  why_this_works: [
    "Role badges clearly distinguish authority systems visually, preventing management errors.",
    "Searchable user tables propose practical structures to quickly find specific individuals even in large-scale organizations."
  ],
  why_this_works_ko: [
    "역할 배지는 권한 체계를 시각적으로 명확히 구분하여 관리 실수를 방지합니다.",
    "검색 가능한 사용자 테이블은 대규모 조직에서도 특정 인물을 빠르게 찾을 수 있는 실용적인 구조를 제시합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Text alignment and button placement are expressed neatly.",
      note_ko: "텍스트 정렬과 버튼 배치가 깔끔하게 표현됩니다."
    }
  ],
  comparison_notes: "Faithfully follows the standard information design of enterprise admin pages.",
  comparison_notes_ko: "엔터프라이즈 관리 페이지의 표준 정보 디자인을 충실히 따릅니다.",
  variations: [
    {
      label: "Empty State",
      label_ko: "빈 상태",
      prompt_delta: "Replace table with 'No users found' illustration and 'Add First User' button",
      use_case: "Initial setup UI",
      use_case_ko: "초기 설정 UI",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Table boundaries unclear -> reinforce with 'subtle borders, zebra stripping' keywords."],
  common_failure_modes_ko: ["테이블 경계가 불분명함 -> 'subtle borders, zebra stripping' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "user management ui prompt",
    secondary_keywords: ["admin portal design ai", "permission management ui"],
    lsi_keywords: ["role badges", "user table"],
    meta_title: "User Management System UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "사용자 관리 시스템 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design clean administrative interfaces for user management. Verified Midjourney v6 prompt for scalable teams.",
    meta_description_ko: "사용자 관리를 위한 깔끔한 관리 인터페이스를 디자인하세요. 확장 가능한 팀을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-users-015-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean administrative user management interface",
    alt_text_ko: "깔끔한 관리용 사용자 관리 인터페이스",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "users-015",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for admin UX standards."
  }
};


export const saasSettingsPrompt: PromptCard = {
  id: "ui-saas-settings-016",
  slug: "saas-settings-permissions-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Settings & Permissions UI",
  title_ko: "설정 및 권한 UI",
  result_first_title: "Logical and easy-to-navigate settings page with toggle switches and grouped sections",
  result_first_title_ko: "토글 스위치와 그룹화된 섹션이 포함된 논리적이고 탐색하기 쉬운 설정 페이지",
  short_description: "A comprehensive settings interface for SaaS apps, managing everything from profile to security and integrations.",
  short_description_ko: "프로필부터 보안 및 통합에 이르기까지 모든 것을 관리하는 SaaS 앱을 위한 포괄적인 설정 인터페이스입니다.",
  emotional_hook: "This prompt contains the sophistication of placing numerous switches of complex systems in the most logical and safe manner.",
  emotional_hook_ko: "이 프롬프트는 복잡한 시스템의 수많은 스위치를 가장 논리적이고 안전한 방식으로 배치하는 정교함을 담고 있습니다.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["settings_page", "account_security", "system_config", "app_preferences"],
  use_cases_ko: ["설정 페이지", "계정 보안", "시스템 구성", "앱 기본 설정"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "SaaS settings UI, [settings_context], vertical tab navigation, toggle switches for notifications, input fields for profile, security checklist, minimalist clean design, light gray background, functional and usable --ar 16:9 --v 6 --s 100",
  negative_prompt: "messy, cluttered, colorful, low contrast, unreadable, artistic, dark backgrounds, high contrast neon",
  aspect_ratio_tags: ["16:9", "settings", "usable_ui"],
  variables: [
    {
      name: "settings_context",
      name_ko: "설정 맥락",
      placeholder: "[settings_context]",
      default_value: "security and two-factor authentication",
      recommended_values: ["billing and subscription plans", "notification preferences", "third-party integrations", "team workspace settings"],
      variable_behavior_note: "Changing the setting theme modifies the placement of input forms and toggles, but maintains the consistent vertical tab-based navigation structure.",
      variable_behavior_note_ko: "설정 테마를 변경하면 입력 폼과 토글의 배치가 수정되지만, 일관된 수직 탭 기반 탐색 구조는 유지됩니다."
    }
  ],
  why_this_works: [
    "Toggle switches visually show immediate setting change states, giving the user a sense of control.",
    "Vertical tab navigation is the optimal layout to categorize many setting items and lower cognitive load."
  ],
  why_this_works_ko: [
    "토글 스위치는 즉각적인 설정 변경 상태를 시각적으로 보여주어 사용자에게 제어감을 제공합니다.",
    "수직 탭 내비게이션은 많은 설정 항목을 분류하고 인지 부하를 낮추기에 최적화된 레이아웃입니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Excellent understanding of standard placement of UI components.",
      note_ko: "UI 컴포넌트의 표준 배치에 대한 이해도가 매우 뛰어납니다."
    }
  ],
  comparison_notes: "Perfectly replicates the setting screen sense of modern SaaS like Notion or Slack.",
  comparison_notes_ko: "Notion이나 Slack과 같은 현대적인 SaaS의 설정 화면 감각을 완벽하게 재현합니다.",
  variations: [
    {
      label: "Modal View",
      label_ko: "모달 뷰",
      prompt_delta: "Change full page to a centered modal window for quick settings",
      use_case: "Quick preferences UI",
      use_case_ko: "빠른 기본 설정 UI",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Section boundaries ambiguous -> add 'clearly defined card sections' keywords."],
  common_failure_modes_ko: ["섹션 경계가 모호함 -> 'clearly defined card sections' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "saas settings ui prompt",
    secondary_keywords: ["settings page design ai", "toggle switch ui prompt"],
    lsi_keywords: ["vertical navigation", "permission settings"],
    meta_title: "SaaS Settings & Permissions UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "SaaS 설정 및 권한 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design logical and easy-to-use settings pages. Verified Midjourney v6 prompt for SaaS configuration.",
    meta_description_ko: "논리적이고 사용하기 쉬운 설정 페이지를 디자인하세요. SaaS 구성을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-settings-016-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean SaaS settings interface with toggles",
    alt_text_ko: "토글이 포함된 깔끔한 SaaS 설정 인터페이스",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "settings-016",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "verified",
    reviewer_note: "Approved for logical UX structure."
  }
};


export const apiDocsPrompt: PromptCard = {
  id: "ui-saas-api-017",
  slug: "saas-api-documentation-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "API Documentation UI",
  title_ko: "API 문서 UI",
  result_first_title: "Developer-friendly API documentation with side-by-side code snippets and parameters",
  result_first_title_ko: "코드 스니펫과 파라미터가 나란히 배치된 개발자 친화적인 API 문서",
  short_description: "A technical interface for developers, featuring dark mode code blocks, endpoint descriptions, and response examples.",
  short_description_ko: "다크 모드 코드 블록, 엔드포인트 설명 및 응답 예제를 특징으로 하는 개발자를 위한 기술 인터페이스입니다.",
  emotional_hook: "This prompt sublimates technical complexity into a clear visual order, designing the best documents that stimulate developer creativity.",
  emotional_hook_ko: "이 프롬프트는 기술적 복잡성을 명확한 시각적 질서로 승화시켜, 개발자의 창의성을 자극하는 최상의 문서를 설계합니다.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["developer_portal", "api_docs", "technical_writing", "software_integration"],
  use_cases_ko: ["개발자 포털", "API 문서", "기술 문서 작성", "소프트웨어 통합"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "API documentation UI, [api_type], two-column layout, dark mode code blocks on the right, light mode description on the left, syntax highlighting, endpoint GET/POST labels, clean mono fonts, professional developer portal aesthetic --ar 16:9 --v 6 --s 200",
  negative_prompt: "cluttered, colorful chaos, low contrast, messy text, artistic, unreadable code, bright backgrounds for code blocks",
  aspect_ratio_tags: ["16:9", "api_docs", "developer_ui"],
  variables: [
    {
      name: "api_type",
      name_ko: "API 유형",
      placeholder: "[api_type]",
      default_value: "payment gateway integration",
      recommended_values: ["social media data analytics", "machine learning model endpoint", "cloud storage management", "real-time messaging protocol"],
      variable_behavior_note: "Changing the API type modifies the code snippet language and parameter content, but maintains the 2-column documentation standard.",
      variable_behavior_note_ko: "API 유형을 변경하면 코드 스니펫 언어와 파라미터 내용이 수정되지만, 2열 문서 표준은 유지됩니다."
    }
  ],
  why_this_works: [
    "The two-column layout maximizes developer efficiency by allowing simultaneous reference to descriptions and code.",
    "Syntax highlighting increases code readability, prevents errors, and grants a professional feel."
  ],
  why_this_works_ko: [
    "2열 레이아웃은 설명과 코드를 동시에 참조할 수 있게 하여 개발자의 효율성을 극대화합니다.",
    "구문 강조(Syntax highlighting)는 코드 가독성을 높이고 오류를 방지하며 전문적인 느낌을 줍니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Highly sophisticated alignment of code block textures and text areas.",
      note_ko: "코드 블록 텍스처와 텍스트 영역의 고도로 정교한 정렬을 보여줍니다."
    }
  ],
  comparison_notes: "Replicates the documentation aesthetics of global developer-oriented platforms like Stripe or Twilio.",
  comparison_notes_ko: "Stripe나 Twilio와 같은 글로벌 개발자 지향 플랫폼의 문서 미학을 재현합니다.",
  variations: [
    {
      label: "Dark Only",
      label_ko: "다크 전용",
      prompt_delta: "Change entire UI to dark mode, high contrast green and purple syntax colors",
      use_case: "Dark theme dev portal",
      use_case_ko: "다크 테마 개발자 포털",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Code blocks appearing flat -> add 'beveled code blocks, subtle depth' keywords."],
  common_failure_modes_ko: ["코드 블록이 평평해 보임 -> 'beveled code blocks, subtle depth' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "api documentation ui prompt",
    secondary_keywords: ["developer portal design ai", "code block ui prompt"],
    lsi_keywords: ["two-column layout", "syntax highlighting"],
    meta_title: "API Documentation UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "API 문서 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design developer-friendly API documentation. Verified Midjourney v6 prompt for technical interfaces.",
    meta_description_ko: "개발자 친화적인 API 문서를 디자인하세요. 기술 인터페이스를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-api-017-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional API documentation interface",
    alt_text_ko: "전문적인 API 문서 인터페이스",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "api-017",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for technical data hierarchy."
  }
};


export const kanbanBoardPrompt: PromptCard = {
  id: "ui-saas-kanban-018",
  slug: "saas-kanban-board-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "SaaS Kanban Board UI",
  title_ko: "SaaS 칸반 보드 UI",
  result_first_title: "Intuitive project management kanban board with draggable cards and status columns",
  result_first_title_ko: "드래그 가능한 카드와 상태 열이 포함된 직관적인 프로젝트 관리 칸반 보드",
  short_description: "A collaborative interface for tracking tasks and workflows, featuring colorful priority tags and user avatars.",
  short_description_ko: "다채로운 우선순위 태그와 사용자 아바타를 특징으로 하는 작업 및 워크플로 추적을 위한 협업 인터페이스입니다.",
  emotional_hook: "This prompt aligns complex tasks into a clear visual flow, making the start of every work morning enjoyable.",
  emotional_hook_ko: "이 프롬프트는 복잡한 작업들을 명확한 시각적 흐름으로 정렬하여, 매일 아침 업무의 시작을 즐겁게 만듭니다.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["project_management", "task_tracking", "agile_workflow", "team_collaboration"],
  use_cases_ko: ["프로젝트 관리", "작업 추적", "애자일 워크플로", "팀 협업"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "SaaS kanban board UI, [task_context], vertical columns (To Do, In Progress, Done), draggable task cards, priority badges, member avatars, clean minimalist style, light gray background, high usability --ar 16:9 --v 6 --s 150",
  negative_prompt: "cluttered, messy layout, dark mode, aggressive colors, unreadable text, low resolution, blurry cards",
  aspect_ratio_tags: ["16:9", "kanban", "project_mgmt"],
  variables: [
    {
      name: "task_context",
      name_ko: "작업 맥락",
      placeholder: "[task_context]",
      default_value: "software development sprint",
      recommended_values: ["marketing campaign content plan", "home renovation checklist", "customer support ticket system", "event planning schedule"],
      variable_behavior_note: "Changing the work context modifies card content and tags, but maintains the Kanban-specific vertical column structure and card placement.",
      variable_behavior_note_ko: "작업 맥락을 변경하면 카드 내용과 태그가 수정되지만, 칸반 특유의 수직 열 구조와 카드 배치는 유지됩니다."
    }
  ],
  why_this_works: [
    "Vertical columns show task state transitions at a glance, allowing intuitive grasping of progress.",
    "Priority badges visually prioritize urgency, aiding efficient resource allocation."
  ],
  why_this_works_ko: [
    "수직 열은 작업 상태의 전환을 한눈에 보여주어 진행 상황을 직관적으로 파악할 수 있게 합니다.",
    "우선순위 배지는 긴급도를 시각적으로 우선순위화하여 효율적인 리소스 배분을 돕습니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional spacing and alignment between cards and columns.",
      note_ko: "카드와 열 사이의 뛰어난 간격 활용과 정렬을 보여줍니다."
    }
  ],
  comparison_notes: "Provides the neat and practical aesthetics of collaboration tools like Trello, Jira, or Linear.",
  comparison_notes_ko: "Trello, Jira 또는 Linear와 같은 협업 도구의 깔끔하고 실용적인 미학을 제공합니다.",
  variations: [
    {
      label: "Simple/Minimal",
      label_ko: "심플/미니멀",
      prompt_delta: "Remove avatars and tags, focus on pure text and clean lines",
      use_case: "Minimalist task manager",
      use_case_ko: "미니멀리스트 작업 관리자",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Cards appearing too densely packed -> reinforce with 'generous card spacing' keywords."],
  common_failure_modes_ko: ["카드가 너무 조밀하게 배치됨 -> 'generous card spacing' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "kanban board ui prompt",
    secondary_keywords: ["project management design ai", "task tracking prompt"],
    lsi_keywords: ["vertical columns", "priority badges"],
    meta_title: "SaaS Kanban Board UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "SaaS 칸반 보드 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design intuitive kanban boards for project management. Verified Midjourney v6 prompt for agile workflows.",
    meta_description_ko: "프로젝트 관리를 위한 직관적인 칸반 보드를 디자인하세요. 애자일 워크플로를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-kanban-018-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Intuitive project management kanban board interface",
    alt_text_ko: "직관적인 프로젝트 관리 칸반 보드 인터페이스",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "kanban-018",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for task tracking usability."
  }
};


export const onboardingSliderPrompt: PromptCard = {
  id: "ui-mobile-onboarding-019",
  slug: "app-onboarding-slider-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "App Onboarding Slider",
  title_ko: "앱 온보딩 슬라이더",
  result_first_title: "Engaging app onboarding carousel with vibrant illustrations and smooth transitions",
  result_first_title_ko: "활기찬 일러스트레이션과 매끄러운 전환이 포함된 매력적인 앱 온보딩 캐러셀",
  short_description: "A sequence of introductory screens for mobile apps, featuring character illustrations, value propositions, and a skip button.",
  short_description_ko: "캐릭터 일러스트레이션, 가치 제안 및 건너뛰기 버튼을 특징으로 하는 모바일 앱용 일련의 소개 화면입니다.",
  emotional_hook: "This prompt designs visual storytelling that turns the first encounter with an app into a pleasant excitement.",
  emotional_hook_ko: "이 프롬프트는 앱과의 첫 만남을 기분 좋은 설렘으로 바꾸는 시각적 스토리텔링을 설계합니다.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["app_launch", "user_education", "brand_intro", "onboarding_flow"],
  use_cases_ko: ["앱 출시", "사용자 교육", "브랜드 소개", "온보딩 흐름"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "app onboarding slider UI, [app_theme], [illustration_style] character illustrations, simple headline and description text, 'Next' and 'Skip' buttons, pagination dots, soft pastel colors, high-fidelity mobile design --ar 9:16 --v 6 --s 200",
  negative_prompt: "cluttered, scary colors, low resolution, photorealistic, messy text, complex backgrounds, dark and gloomy",
  aspect_ratio_tags: ["9:16", "mobile_ui", "onboarding"],
  variables: [
    {
      name: "app_theme",
      name_ko: "앱 테마",
      placeholder: "[app_theme]",
      default_value: "mindfulness and meditation app",
      recommended_values: ["fast-paced delivery service", "personal finance management", "creative social network", "pet care and adoption"],
      variable_behavior_note: "Changing the app theme optimizes illustration content and color palette accordingly, but maintains the clean slider layout.",
      variable_behavior_note_ko: "앱 테마를 변경하면 일러스트 내용과 컬러 팔레트가 그에 맞춰 최적화되지만, 깔끔한 슬라이더 레이아웃은 유지됩니다."
    },
    {
      name: "illustration_style",
      name_ko: "일러스트 스타일",
      placeholder: "[illustration_style]",
      default_value: "minimalist vector",
      recommended_values: ["playful 3D claymorphism", "warm hand-drawn texture", "modern isometric", "abstract geometric shapes"],
      variable_behavior_note: "Changing the illustration style completely alters the overall app sentiment and impression on the target audience.",
      variable_behavior_note_ko: "일러스트 스타일을 변경하면 타겟 오디언스에게 전달되는 앱의 전체적인 감성과 인상이 완전히 바뀝니다."
    }
  ],
  why_this_works: [
    "Pagination dots are a key UX device that guides users through the entire process and lowers onboarding churn rates.",
    "Character illustrations sublimate dry app function descriptions into a friendly service experience."
  ],
  why_this_works_ko: [
    "페이지네이션 도트는 전체 프로세스를 안내하고 온보딩 이탈률을 낮추는 핵심 UX 장치입니다.",
    "캐릭터 일러스트레이션은 건조한 앱 기능 설명을 친근한 서비스 경험으로 승화시킵니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Highly stable layout balance between illustrations and buttons.",
      note_ko: "일러스트와 버튼 사이의 매우 안정적인 레이아웃 균형을 보여줍니다."
    }
  ],
  comparison_notes: "Provides 'most-wanted' visuals by analyzing onboarding trends of top global apps.",
  comparison_notes_ko: "글로벌 상위 앱들의 온보딩 트렌드를 분석하여 가장 선호되는 비주얼을 제공합니다.",
  variations: [
    {
      label: "Dark Mode",
      label_ko: "다크 모드",
      prompt_delta: "Change to deep navy background with neon glow illustrations",
      use_case: "Gaming or security apps",
      use_case_ko: "게임 또는 보안 앱",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Illustrations appearing too complex -> reinforce with 'simple shapes, focused subject' keywords."],
  common_failure_modes_ko: ["일러스트레이션이 너무 복잡해 보임 -> 'simple shapes, focused subject' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "app onboarding ui prompt",
    secondary_keywords: ["mobile intro slider design ai", "onboarding illustration prompt"],
    lsi_keywords: ["pagination dots", "value proposition"],
    meta_title: "App Onboarding Slider UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "앱 온보딩 슬라이더 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design engaging app onboarding screens with vibrant illustrations. Verified Midjourney v6 prompt for mobile UX.",
    meta_description_ko: "활기찬 일러스트가 포함된 매력적인 앱 온보딩 화면을 디자인하세요. 모바일 UX를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-onboarding-019-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Engaging mobile app onboarding slider interface",
    alt_text_ko: "매력적인 모바일 앱 온보딩 슬라이더 인터페이스",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "onboarding-019",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for onboarding UX flow."
  }
};


export const profileSettingsPrompt: PromptCard = {
  id: "ui-mobile-profile-020",
  slug: "mobile-profile-settings-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Mobile Profile & Settings",
  title_ko: "모바일 프로필 및 설정",
  result_first_title: "Clean and organized mobile profile screen with account settings and activity summary",
  result_first_title_ko: "계정 설정 및 활동 요약이 포함된 깔끔하고 정리된 모바일 프로필 화면",
  short_description: "A centralized user hub for mobile apps, featuring avatar management, account links, and preference toggles.",
  short_description_ko: "아바타 관리, 계정 링크 및 기본 설정 토글을 특징으로 하는 모바일 앱용 중앙 집중식 사용자 허브입니다.",
  emotional_hook: "This prompt provides a space where users can most neatly summarize and manage their digital persona.",
  emotional_hook_ko: "이 프롬프트는 사용자가 자신의 디지털 페르소나를 가장 깔끔하게 요약하고 관리할 수 있는 공간을 제공합니다.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["profile_page", "account_mgmt", "user_settings", "social_app"],
  use_cases_ko: ["프로필 페이지", "계정 관리", "사용자 설정", "소셜 앱"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "mobile profile UI, [app_type], centered avatar circle, user name and bio, list of menu items with icons (Security, Notifications, Billing), toggle for dark mode, clean minimalist aesthetic, white space, high-fidelity UI --ar 9:16 --v 6 --s 150",
  negative_prompt: "cluttered, messy, dark (unless specified), aggressive colors, unreadable text, low quality, distorted avatar",
  aspect_ratio_tags: ["9:16", "mobile_ui", "profile"],
  variables: [
    {
      name: "app_type",
      name_ko: "앱 유형",
      placeholder: "[app_type]",
      default_value: "professional networking app",
      recommended_values: ["creative portfolio app", "fitness tracker", "language learning platform", "luxury shopping app"],
      variable_behavior_note: "Changing the app type modifies decorations around the profile image and sub-menu configurations, but maintains the user-centric layout.",
      variable_behavior_note_ko: "앱 유형을 변경하면 프로필 이미지 주변의 장식과 하위 메뉴 구성이 수정되지만, 사용자 중심의 레이아웃은 유지됩니다."
    }
  ],
  why_this_works: [
    "A centered avatar clearly reveals user identity and becomes the starting point of a personalized service experience.",
    "Icon-based lists offer faster cognitive speed than text-only lists and provide universal usability for global users."
  ],
  why_this_works_ko: [
    "중앙에 배치된 아바타는 사용자 정체성을 명확히 드러내며 개인화된 서비스 경험의 시작점이 됩니다.",
    "아이콘 기반 리스트는 텍스트만 있는 리스트보다 인지 속도가 빠르며 글로벌 사용자에게 보편적인 사용성을 제공합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Highly sophisticated spacing adjustment between profile cards and list items.",
      note_ko: "프로필 카드와 리스트 항목 사이의 매우 정교한 간격 조정을 보여줍니다."
    }
  ],
  comparison_notes: "Guarantees neatness reminiscent of Apple system settings or famous social app profile screens.",
  comparison_notes_ko: "Apple 시스템 설정이나 유명 소셜 앱의 프로필 화면을 연상시키는 깔끔함을 보장합니다.",
  variations: [
    {
      label: "Gamified",
      label_ko: "게이미피케이션",
      prompt_delta: "Add progress bars, level badges, and achievements section",
      use_case: "Learning or gaming apps",
      use_case_ko: "학습 또는 게임 앱",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Menu icons appearing too small -> add 'large accessible tap targets' keywords."],
  common_failure_modes_ko: ["메뉴 아이콘이 너무 작게 보임 -> 'large accessible tap targets' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "mobile profile ui prompt",
    secondary_keywords: ["account settings design ai", "user hub ui prompt"],
    lsi_keywords: ["avatar circle", "list menu ui"],
    meta_title: "Mobile Profile & Settings UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "모바일 프로필 및 설정 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design clean mobile profile and account settings. Verified Midjourney v6 prompt for professional apps.",
    meta_description_ko: "깔끔한 모바일 프로필과 계정 설정을 디자인하세요. 전문 앱을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-profile-020-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean mobile profile and account settings UI",
    alt_text_ko: "깔끔한 모바일 프로필 및 계정 설정 UI",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "profile-020",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for profile information hierarchy."
  }
};


export const notificationsPrompt: PromptCard = {
  id: "ui-mobile-notif-021",
  slug: "mobile-notification-center-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Mobile Notification Center",
  title_ko: "모바일 알림 센터",
  result_first_title: "Elegant notification list with activity feed and time-stamped updates",
  result_first_title_ko: "활동 피드와 타임스탬프 업데이트가 포함된 우아한 알림 목록",
  short_description: "A comprehensive notification interface for mobile apps, featuring categorized alerts and action buttons.",
  short_description_ko: "분류된 알림과 작업 버튼을 특징으로 하는 모바일 앱용 포괄적인 알림 인터페이스입니다.",
  emotional_hook: "This prompt vividly delivers only the truly important news to users among a flood of information.",
  emotional_hook_ko: "이 프롬프트는 정보의 홍수 속에서 오직 진정으로 중요한 뉴스만을 사용자에게 생생하게 전달합니다.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["activity_feed", "alert_center", "social_notifications", "system_updates"],
  use_cases_ko: ["활동 피드", "알림 센터", "소셜 알림", "시스템 업데이트"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "mobile notification center UI, [feed_context], list of notification cards, time stamps (2m ago, 1h ago), action buttons (Accept, Dismiss), unread indicator dots, minimalist design, clean typography, soft shadows --ar 9:16 --v 6 --s 180",
  negative_prompt: "cluttered, messy layout, dark mode (unless specified), aggressive colors, blurry text, small buttons, unorganized feed",
  aspect_ratio_tags: ["9:16", "mobile_ui", "notifications"],
  variables: [
    {
      name: "feed_context",
      name_ko: "피드 맥락",
      placeholder: "[feed_context]",
      default_value: "social media engagement feed",
      recommended_values: ["finance alert and transaction history", "smart home security log", "team collaboration update list", "e-learning task reminders"],
      variable_behavior_note: "Changing the feed context modifies notification card icons and highlighted text, but maintains the chronological list structure.",
      variable_behavior_note_ko: "피드 맥락을 변경하면 알림 카드 아이콘과 강조 텍스트가 수정되지만, 시간순 목록 구조는 유지됩니다."
    }
  ],
  why_this_works: [
    "Timestamps immediately inform information timeliness, helping users judge priorities.",
    "Unread indicator dots visually emphasize important unread information, inducing re-engagement."
  ],
  why_this_works_ko: [
    "타임스탬프는 정보의 시의성을 즉각적으로 알려주어 사용자가 우선순위를 판단하는 데 도움을 줍니다.",
    "읽지 않은 표시 도트는 중요한 미확인 정보를 시각적으로 강조하여 재참여를 유도합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Very natural representation of notification card shadows and borders.",
      note_ko: "알림 카드 그림자와 테두리의 매우 자연스러운 표현이 돋보입니다."
    }
  ],
  comparison_notes: "Optimal for applying sophisticated variations of iOS/Android system notification aesthetics.",
  comparison_notes_ko: "iOS/Android 시스템 알림 미학의 정교한 변형을 적용하기에 최적입니다.",
  variations: [
    {
      label: "Rich Media",
      label_ko: "리치 미디어",
      prompt_delta: "Add small thumbnail images and expanded preview text to each card",
      use_case: "Content-rich social apps",
      use_case_ko: "콘텐츠 중심 소셜 앱",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Cards appearing too flat -> add 'subtle elevation, card depth' keywords."],
  common_failure_modes_ko: ["카드가 너무 평평해 보임 -> 'subtle elevation, card depth' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "mobile notification ui prompt",
    secondary_keywords: ["activity feed design ai", "alert center prompt"],
    lsi_keywords: ["time stamps", "action buttons"],
    meta_title: "Mobile Notification Center UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "모바일 알림 센터 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design elegant mobile notification and activity feeds. Verified Midjourney v6 prompt for real-time alerts.",
    meta_description_ko: "우아한 모바일 알림 및 활동 피드를 디자인하세요. 실시간 알림을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-notif-021-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Elegant mobile notification center interface",
    alt_text_ko: "우아한 모바일 알림 센터 인터페이스",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "notif-021",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for notification information hierarchy."
  }
};


export const mapServicePrompt: PromptCard = {
  id: "ui-mobile-map-022",
  slug: "map-based-service-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Map-based Service Interface",
  title_ko: "지도 기반 서비스 인터페이스",
  result_first_title: "Intuitive map-based mobile interface with floating action buttons and service pins",
  result_first_title_ko: "플로팅 액션 버튼과 서비스 핀이 포함된 직관적인 지도 기반 모바일 인터페이스",
  short_description: "A location-first interface for ride-sharing, food delivery, or travel apps, featuring interactive maps and bottom sheets.",
  short_description_ko: "대화형 지도와 바텀 시트를 특징으로 하는 차량 공유, 음식 배달 또는 여행 앱을 위한 위치 우선 인터페이스입니다.",
  emotional_hook: "This prompt designs interactive maps that conveniently connect the user's daily life on top of actual geographical information.",
  emotional_hook_ko: "이 프롬프트는 실제 지리 정보 위에 사용자의 일상을 편리하게 연결하는 인터랙티브 지도를 설계합니다.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["ride_sharing", "food_delivery", "travel_booking", "local_discovery"],
  use_cases_ko: ["차량 공유", "음식 배달", "여행 예약", "지역 탐색"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "map-based mobile service UI, [service_type], interactive vector map background, floating search bar, custom service pins, bottom sheet with details, minimalist controls, high-end mobile app aesthetic -- ar 9:16 --v 6 --s 250",
  negative_prompt: "cluttered map, low contrast, messy text, old style google maps, blurry pins, confusing navigation, dark mode (unless specified)",
  aspect_ratio_tags: ["9:16", "map_ui", "location_service"],
  variables: [
    {
      name: "service_type",
      name_ko: "서비스 유형",
      placeholder: "[service_type]",
      default_value: "ride-sharing app like Uber",
      recommended_values: ["food delivery tracker", "luxury hotel discovery", "outdoor hiking trail navigator", "electric scooter rental service"],
      variable_behavior_note: "Changing the service type modifies pin icons and bottom sheet details, but maintains the map-centric layout.",
      variable_behavior_note_ko: "서비스 유형을 변경하면 핀 아이콘과 바텀 시트의 상세 내용이 수정되지만, 지도 중심의 레이아웃은 유지됩니다."
    }
  ],
  why_this_works: [
    "Interactive vector maps increase intuitiveness by reducing information overload and focusing only on core points (pins).",
    "Bottom sheets are a mobile standard UX that efficiently utilizes screen space by showing additional information only when needed."
  ],
  why_this_works_ko: [
    "인터랙티브 벡터 지도는 정보 과부하를 줄이고 핵심 지점(핀)에만 집중하게 하여 직관성을 높입니다.",
    "바텀 시트는 필요할 때만 추가 정보를 보여줌으로써 화면 공간을 효율적으로 활용하는 모바일 표준 UX입니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional map textures and three-dimensional feel of floating action buttons (FAB).",
      note_ko: "지도의 텍스처와 플로팅 액션 버튼(FAB)의 입체감이 매우 뛰어납니다."
    }
  ],
  comparison_notes: "Replicates the map UX sense of successful global services like Uber or Airbnb.",
  comparison_notes_ko: "Uber나 Airbnb와 같은 성공적인 글로벌 서비스의 지도 UX 감각을 재현합니다.",
  variations: [
    {
      label: "Night View",
      label_ko: "야간 모드",
      prompt_delta: "Change map to dark theme with glowing neon routes and pins",
      use_case: "Nightlife or delivery apps",
      use_case_ko: "나이트라이프 또는 배달 앱",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Map appearing too complex and blurry -> add 'simplified vector map, clean streets' keywords."],
  common_failure_modes_ko: ["지도가 너무 복잡하고 흐릿해 보임 -> 'simplified vector map, clean streets' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "map based service ui prompt",
    secondary_keywords: ["ride sharing app design ai", "location service ui prompt"],
    lsi_keywords: ["service pins", "bottom sheet ui"],
    meta_title: "Map-based Service UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "지도 기반 서비스 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design intuitive map interfaces for mobile services. Verified Midjourney v6 prompt for ride-sharing and discovery apps.",
    meta_description_ko: "모바일 서비스를 위한 직관적인 지도 인터페이스를 디자인하세요. 차량 공유 및 탐색 앱을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-map-022-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Interactive mobile map service interface",
    alt_text_ko: "인터랙티브 모바일 지도 서비스 인터페이스",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "map-022",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for map-to-UI layering."
  }
};


export const searchDiscoveryPrompt: PromptCard = {
  id: "ui-mobile-search-023",
  slug: "search-discovery-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Search & Discovery UI",
  title_ko: "검색 및 탐색 UI",
  result_first_title: "Smart mobile search interface with trending tags and personalized discovery feed",
  result_first_title_ko: "트렌드 태그와 개인화된 탐색 피드가 포함된 스마트 모바일 검색 인터페이스",
  short_description: "A discovery-focused UI for content-heavy apps, featuring a prominent search bar and dynamic recommendation cards.",
  short_description_ko: "콘텐츠 중심 앱을 위한 탐색 중심 UI로, 눈에 띄는 검색창과 동적 추천 카드를 특징으로 합니다.",
  emotional_hook: "This prompt designs an intelligent discovery window that reads user tastes and presents the pleasure of endless discovery.",
  emotional_hook_ko: "이 프롬프트는 사용자의 취향을 읽어내어 끝없는 발견의 즐거움을 선사하는 지능형 탐색 창을 설계합니다.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["content_discovery", "ecommerce_search", "streaming_app", "social_media"],
  use_cases_ko: ["콘텐츠 탐색", "이커머스 검색", "스트리밍 앱", "소셜 미디어"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "search and discovery mobile UI, [discovery_type], prominent search bar with voice icon, trending tags pills, grid of recommendation cards, personalized feed, minimalist clean style, soft shadows --ar 9:16 --v 6 --s 200",
  negative_prompt: "cluttered, messy layout, dark mode (unless specified), unreadable text, low quality, boring list, blurry images",
  aspect_ratio_tags: ["9:16", "mobile_ui", "search"],
  variables: [
    {
      name: "discovery_type",
      name_ko: "탐색 유형",
      placeholder: "[discovery_type]",
      default_value: "short-form video platform",
      recommended_values: ["luxury fashion marketplace", "gourmet restaurant guide", "indie music discovery", "adventure travel blog"],
      variable_behavior_note: "Changing the discovery type modifies recommended card media and tag content, but maintains the discovery-centric layout.",
      variable_behavior_note_ko: "탐색 유형을 변경하면 추천 카드 미디어와 태그 내용이 수정되지만, 탐색 중심의 레이아웃은 유지됩니다."
    }
  ],
  why_this_works: [
    "Trending tags pills lower the entry barrier to exploration by providing trending keywords before users even type a search.",
    "Personalized feeds induce immediate clicks by placing user-tailored content in card forms."
  ],
  why_this_works_ko: [
    "트렌드 태그 버튼은 사용자가 검색어를 입력하기도 전에 인기 키워드를 제공하여 탐색의 진입 장벽을 낮춥니다.",
    "개인화된 피드는 사용자 맞춤형 콘텐츠를 카드 형태로 배치하여 즉각적인 클릭을 유도합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Very good proportion between search bar and tag buttons.",
      note_ko: "검색창과 태그 버튼 사이의 비율이 매우 훌륭합니다."
    }
  ],
  comparison_notes: "Provides the sense of 'endless exploration' given by discovery pages of Pinterest or YouTube.",
  comparison_notes_ko: "Pinterest나 YouTube의 탐색 페이지가 주는 '끝없는 탐색'의 감각을 제공합니다.",
  variations: [
    {
      label: "Dark mode",
      label_ko: "다크 모드",
      prompt_delta: "Change to dark theme with colorful glowing highlights",
      use_case: "Entertainment apps",
      use_case_ko: "엔터테인먼트 앱",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Tags appearing too densely packed -> add 'spacious tag layout' keywords."],
  common_failure_modes_ko: ["태그가 너무 조밀하게 배치됨 -> 'spacious tag layout' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "search discovery ui prompt",
    secondary_keywords: ["discovery feed design ai", "mobile search bar prompt"],
    lsi_keywords: ["trending tags", "recommendation cards"],
    meta_title: "Search & Discovery UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "검색 및 탐색 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design smart mobile search and discovery feeds. Verified Midjourney v6 prompt for content apps.",
    meta_description_ko: "스마트한 모바일 검색 및 탐색 피드를 디자인하세요. 콘텐츠 앱을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-search-023-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Smart mobile search and discovery interface",
    alt_text_ko: "스마트한 모바일 검색 및 탐색 인터페이스",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "search-023",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for search UX components."
  }
};


export const chatInterfacePrompt: PromptCard = {
  id: "ui-mobile-chat-024",
  slug: "messaging-chat-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Messaging & Chat Interface",
  title_ko: "메시징 및 채팅 인터페이스",
  result_first_title: "Clean and real-time mobile chat interface with message bubbles and media attachments",
  result_first_title_ko: "메시지 버블과 미디어 첨부 파일이 포함된 깔끔한 실시간 모바일 채팅 인터페이스",
  short_description: "A messaging UI for social and business apps, featuring clear chat bubbles, typing indicators, and an input bar.",
  short_description_ko: "소셜 및 비즈니스 앱을 위한 메시징 UI로, 명확한 채팅 버블, 입력 표시기 및 입력창을 특징으로 합니다.",
  emotional_hook: "This prompt builds the most transparent and neat passage where conversation between people flows without obstruction.",
  emotional_hook_ko: "이 프롬프트는 사람들 사이의 대화가 막힘없이 흐르는 가장 투명하고 깔끔한 통로를 구축합니다.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["social_messaging", "customer_support", "team_chat", "dating_app"],
  use_cases_ko: ["소셜 메시징", "고객 지원", "팀 채팅", "데이팅 앱"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "messaging chat mobile UI, [chat_context], round chat bubbles, distinct colors for sender and receiver, typing indicator, minimalist input bar with emoji and attachment icons, white space, clean typography --ar 9:16 --v 6 --s 150",
  negative_prompt: "cluttered, messy bubbles, dark mode (unless specified), aggressive colors, unreadable text, low quality, overlapping messages",
  aspect_ratio_tags: ["9:16", "mobile_ui", "chat"],
  variables: [
    {
      name: "chat_context",
      name_ko: "채팅 맥락",
      placeholder: "[chat_context]",
      default_value: "friendly social conversation with photos",
      recommended_values: ["professional customer support with tickets", "team project discussion with file links", "playful dating app with icebreakers", "medical consultation with secure data"],
      variable_behavior_note: "Changing the chat context modifies speech bubble content and attachment types, but maintains the clean structure that doesn't disrupt conversation flow.",
      variable_behavior_note_ko: "채팅 맥락을 변경하면 말풍선 내용과 첨부 파일 유형이 수정되지만, 대화 흐름을 방해하지 않는 깔끔한 구조는 유지됩니다."
    }
  ],
  why_this_works: [
    "Round chat bubbles make rigid conversations feel softer and more human.",
    "Typing indicators are a small but powerful device that visualizes real-time presence and immerses users in the conversation."
  ],
  why_this_works_ko: [
    "둥근 채팅 버블은 딱딱한 대화를 더 부드럽고 인간적인 느낌으로 만들어 줍니다.",
    "입력 표시기(Typing indicator)는 실시간 존재감을 시각화하여 사용자를 대화에 몰입시키는 작지만 강력한 장치입니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Appropriate roundness of speech bubbles and shadow depth.",
      note_ko: "말풍선의 적절한 둥글기와 그림자 깊이 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Modernly reinterprets the 'concise conversation' aesthetics of iMessage or Telegram.",
  comparison_notes_ko: "iMessage나 Telegram의 '간결한 대화' 미학을 현대적으로 재해석합니다.",
  variations: [
    {
      label: "Business Dark",
      label_ko: "비즈니스 다크",
      prompt_delta: "Change to dark theme, professional slate colors, sharp corners for bubbles",
      use_case: "Enterprise messaging",
      use_case_ko: "엔터프라이즈 메시징",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Messages appearing too densely packed -> add 'spacious chat history' keywords."],
  common_failure_modes_ko: ["메시지가 너무 조밀하게 배치됨 -> 'spacious chat history' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "messaging chat ui prompt",
    secondary_keywords: ["mobile chat design ai", "customer support ui prompt"],
    lsi_keywords: ["chat bubbles", "typing indicator"],
    meta_title: "Messaging & Chat UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "메시징 및 채팅 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design clean and real-time mobile messaging interfaces. Verified Midjourney v6 prompt for social and business apps.",
    meta_description_ko: "깔끔한 실시간 모바일 메시징 인터페이스를 디자인하세요. 소셜 및 비즈니스 앱을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-chat-024-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean mobile messaging chat interface",
    alt_text_ko: "깔끔한 모바일 메시징 채팅 인터페이스",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "chat-024",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for messaging UX layout."
  }
};


export const musicPlayerPrompt: PromptCard = {
  id: "ui-mobile-music-025",
  slug: "music-audio-player-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Music & Audio Player UI",
  title_ko: "음악 및 오디오 플레이어 UI",
  result_first_title: "Vibrant mobile music player with large album art and glassmorphism controls",
  result_first_title_ko: "대형 앨범 아트와 글래스모피즘 제어 기능이 포함된 활기찬 모바일 음악 플레이어",
  short_description: "An immersive audio player interface for music and podcast apps, focusing on media controls and visual aesthetics.",
  short_description_ko: "미디어 제어와 시각적 미학에 중점을 둔 음악 및 팟캐스트 앱용 몰입형 오디오 플레이어 인터페이스입니다.",
  emotional_hook: "This prompt expands the emotion of sound heard by the ear into a visual thrill seen by the eye.",
  emotional_hook_ko: "이 프롬프트는 귀로 듣는 소리의 감동을 눈으로 보는 시각적 전율로 확장합니다.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["music_streaming", "podcast_app", "audiobook_player", "media_controller"],
  use_cases_ko: ["음악 스트리밍", "팟캐스트 앱", "오디오북 플레이어", "미디어 컨트롤러"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "music player mobile UI, [audio_type], large square album art with soft glow, glassmorphism playback controls (Play, Pause, Skip), seek bar with time indicators, vibrant blurred background, minimalist aesthetic, high-fidelity UI --ar 9:16 --v 6 --s 300",
  negative_prompt: "cluttered, messy layout, low resolution art, unreadable text, dull colors, small buttons, generic style",
  aspect_ratio_tags: ["9:16", "mobile_ui", "music_player"],
  variables: [
    {
      name: "audio_type",
      name_ko: "오디오 유형",
      placeholder: "[audio_type]",
      default_value: "ambient synthwave album",
      recommended_values: ["minimalist tech podcast", "classical piano collection", "modern urban hip-hop", "soothing nature sounds"],
      variable_behavior_note: "Changing the audio type synchronizes the album art style and background color mood accordingly, but maintains the core playback interface.",
      variable_behavior_note_ko: "오디오 유형을 변경하면 앨범 아트 스타일과 배경색 분위기가 그에 맞춰 동기화되지만, 핵심 재생 인터페이스는 유지됩니다."
    }
  ],
  why_this_works: [
    "Large album art serves as the visual protagonist of the service, increasing user emotional satisfaction.",
    "Glassmorphism controls grant a sophisticated futuristic feel while creating visual consistency by projecting album art colors onto the background."
  ],
  why_this_works_ko: [
    "대형 앨범 아트는 서비스의 시각적 주인공 역할을 하며 사용자의 정서적 만족도를 높입니다.",
    "글래스모피즘 제어기는 세련된 미래적 느낌을 주며, 앨범 아트의 색상을 배경에 투영하여 시각적 일관성을 만듭니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Fantastic glow effects and glass textures of the album art.",
      note_ko: "앨범 아트의 환상적인 글로우 효과와 유리 질감 표현이 뛰어납니다."
    }
  ],
  comparison_notes: "Provides visuals that surpass the minimalist yet sensual player designs of Spotify or Apple Music.",
  comparison_notes_ko: "Spotify나 Apple Music의 미니멀하면서도 감각적인 플레이어 디자인을 뛰어넘는 비주얼을 제공합니다.",
  variations: [
    {
      label: "Light Mode",
      label_ko: "라이트 모드",
      prompt_delta: "Change to bright white background, clean lines, no glow, focus on typography",
      use_case: "Minimalist podcast player",
      use_case_ko: "미니멀리스트 팟캐스트 플레이어",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Buttons indistinguishable from the background -> add 'high contrast controls' keywords."],
  common_failure_modes_ko: ["버튼이 배경과 구분이 안 됨 -> 'high contrast controls' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "music player ui prompt",
    secondary_keywords: ["audio app design ai", "media player ui prompt"],
    lsi_keywords: ["album art", "glassmorphism controls"],
    meta_title: "Music & Audio Player UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "음악 및 오디오 플레이어 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design immersive mobile music and audio players. Verified Midjourney v6 prompt for media apps.",
    meta_description_ko: "몰입형 모바일 음악 및 오디오 플레이어를 디자인하세요. 미디어 앱을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-music-025-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Immersive mobile music player interface",
    alt_text_ko: "몰입형 모바일 음악 플레이어 인터페이스",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "music-025",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified for media control UX."
  }
};


export const uiUxPrompts: PromptCard[] = [
  dashboardPrompt,
  darkAnalyticsPrompt,
  landingPagePrompt,
  fintechMobilePrompt,
  elearningDashboardPrompt,
  smartHomePrompt,
  cryptoWalletPrompt,
  healthcarePortalPrompt,
  shoppingCartPrompt,
  checkoutPaymentPrompt,
  productDetailPrompt,
  advancedFilteringPrompt,
  userReviewsPrompt,
  crmDashboardPrompt,
  userManagementPrompt,
  saasSettingsPrompt,
  apiDocsPrompt,
  kanbanBoardPrompt,
  onboardingSliderPrompt,
  profileSettingsPrompt,
  notificationsPrompt,
  mapServicePrompt,
  searchDiscoveryPrompt,
  chatInterfacePrompt,
  musicPlayerPrompt
];
