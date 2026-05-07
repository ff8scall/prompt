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
      prompt_delta: "Replace dark navy background with bright white background #ffffff and subtle pastel gradients, soft shadows instead of glow effects",
      pre_generated_asset_id: "asset_ui_dashboard_bright_001",
      use_case: "Light mode preference, healthcare apps, clean minimal brands",
        label_ko: "Bright/Light Mode",
        use_case_ko: "Light mode preference, healthcare apps, clean minimal brands"
    },
    {
      label: "Mobile/Vertical",
      prompt_delta: "Change dashboard UI to mobile app analytics screen with stacked cards, --ar 9:16, touch-friendly spacing",
      pre_generated_asset_id: "asset_ui_dashboard_mobile_001",
      use_case: "Mobile app store screenshots, mobile onboarding screens",
        label_ko: "Mobile/Vertical",
        use_case_ko: "Mobile app store screenshots, mobile onboarding screens"
    },
    {
      label: "Dark Cyberpunk",
      prompt_delta: "Replace navy with deep purple #1a0a2e, add neon accent lines, cyberpunk aesthetic, high contrast glowing elements",
      pre_generated_asset_id: "asset_ui_dashboard_cyberpunk_001",
      use_case: "Gaming dashboards, tech startups, futuristic brands",
        label_ko: "Dark Cyberpunk",
        use_case_ko: "Gaming dashboards, tech startups, futuristic brands"
    }
  ],
  common_failure_modes: [
    "Garbled or unreadable text: Strengthen 'unreadable text' in the negative prompt or lower the stylize value.",
    "Overpowering glass effect: Soften with keywords like 'subtle blur' or 'light glassmorphism'.",
    "Overly artistic layout: Add 'functional layout' or 'usable interface' to anchor the result in realism."
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
    meta_description: "Copy a verified Midjourney v6 prompt for glassmorphism SaaS dashboards. Includes variables, model notes, 3 variations, and why this works analysis.",
      meta_title_ko: "Glassmorphism Dashboard UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Copy a verified Midjourney v6 prompt for glassmorphism SaaS dashboards. Includes variables, model notes, 3 variations, and why this works analysis."
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
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "glass-dash-001",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Glassmorphism SaaS dashboard UI with translucent cards and glowing analytics charts on dark navy background"
},
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Verified with actual Midjourney v6 generation. Text artifacts present as expected. Layout clean. 3 variations generated and confirmed. Ready for homepage feature."
  },
    common_failure_modes_ko: ["Garbled or unreadable text: Strengthen 'unreadable text' in the negative prompt or lower the stylize value.", "Overpowering glass effect: Soften with keywords like 'subtle blur' or 'light glassmorphism'.", "Overly artistic layout: Add 'functional layout' or 'usable interface' to anchor the result in realism."]
};

export const darkAnalyticsPrompt: PromptCard = {
  id: "ui-dark-analytics-002",
  slug: "dark-analytics-dashboard-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Dark Mode Analytics Dashboard Prompt",
  result_first_title: "Professional dark mode dashboard with neon data visualization charts",
  short_description: "Dark mode analytics dashboard for crypto, fintech, and data-heavy applications. Neon accents on deep backgrounds.",
  emotional_hook: "This prompt evokes a futuristic sense of tension, where data glows softly within a void as deep as the ocean floor.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["crypto_dashboard", "fintech_app", "trading_interface", "server_monitoring"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[dashboard_type], dark mode analytics dashboard, neon accent lines, data visualization charts, midnight blue #0f172a background, glowing grid lines, professional data UI, clean typography, futuristic interface --ar 16:9 --v 6 --s 200",
  negative_prompt: "bright background, cluttered layout, pastel colors, cartoon style, 3D render, human figures",
  aspect_ratio_tags: ["16:9", "dark_mode", "analytics"],
  variables: [
    {
      name: "dashboard_type",
      placeholder: "[dashboard_type]",
      default_value: "crypto portfolio dashboard",
      recommended_values: ["server monitoring dashboard", "social media analytics", "sales metrics dashboard", "trading platform interface"],
      variable_behavior_note: "Changing the dashboard type updates the data and widgets while maintaining the dark theme and neon accent style.",
        name_ko: "dashboard_type",
        variable_behavior_note_ko: "Changing the dashboard type updates the data and widgets while maintaining the dark theme and neon accent style."
    }
  ],
  why_this_works: [
    "Dark mode reduces eye strain and helps users focus on critical data points.",
    "Neon accents highlight key metrics and data visualizations against the deep background.",
    "The midnight blue background provides a professional fintech and enterprise aesthetic."
  ],
  model_notes: [
    { model: "midjourney", version: "v6", note: "Strong at rendering dark backgrounds and neon combinations. Stylize 150-250 recommended.",
        note_ko: "Strong at rendering dark backgrounds and neon combinations. Stylize 150-250 recommended."
    }
  ],
  comparison_notes: "Midjourney v6 provides the most consistent results for dark UI and glowing effects.",
  variations: [
    { label: "Cyberpunk", prompt_delta: "Add cyberpunk aesthetic, purple and cyan neon, glitch effects", use_case: "Gaming dashboards", pre_generated_asset_id: null,
        label_ko: "Cyberpunk",
        use_case_ko: "Gaming dashboards"
    }
  ],
  common_failure_modes: ["If neon intensity is too high, text becomes unreadable -> adjust neon intensity keywords."],
  seo: {
    primary_keyword: "dark mode dashboard prompt",
    secondary_keywords: ["analytics ui prompt", "dark theme dashboard"],
    lsi_keywords: ["neon charts", "data visualization"],
    meta_title: "Dark Mode Analytics Dashboard | Midjourney v6 Prompt",
    meta_description: "Create professional dark mode dashboards with neon accents. Verified Midjourney v6 prompt for fintech and crypto interfaces.",
      meta_title_ko: "Dark Mode Analytics Dashboard | Midjourney v6 Prompt",
      meta_description_ko: "Create professional dark mode dashboards with neon accents. Verified Midjourney v6 prompt for fintech and crypto interfaces."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-dark-analytics-002-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Dark mode analytics dashboard with neon charts",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "dark-analytics-002",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Dark mode analytics dashboard with neon charts"
},
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Tested with crypto and server monitoring contexts. Neon accents consistent."
  },
    title_ko: "Dark Mode Analytics Dashboard Prompt",
    result_first_title_ko: "Professional dark mode dashboard with neon data visualization charts",
    short_description_ko: "Dark mode analytics dashboard for crypto, fintech, and data-heavy applications. Neon accents on deep backgrounds.",
    emotional_hook_ko: "This prompt evokes a futuristic sense of tension, where data glows softly within a void as deep as the ocean floor.",
    comparison_notes_ko: "Midjourney v6 provides the most consistent results for dark UI and glowing effects.",
    use_cases_ko: ["crypto_dashboard", "fintech_app", "trading_interface", "server_monitoring"],
    why_this_works_ko: ["Dark mode reduces eye strain and helps users focus on critical data points.", "Neon accents highlight key metrics and data visualizations against the deep background.", "The midnight blue background provides a professional fintech and enterprise aesthetic."],
    common_failure_modes_ko: ["If neon intensity is too high, text becomes unreadable -> adjust neon intensity keywords."]
};

export const landingPagePrompt: PromptCard = {
  id: "ui-saas-landing-003",
  slug: "saas-landing-page-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "SaaS Landing Page Hero Prompt",
  result_first_title: "Modern SaaS landing page with 3D product mockup and gradient background",
  short_description: "Clean, conversion-focused landing page design for SaaS products with hero section, CTA, and product visualization.",
  emotional_hook: "This prompt creates a sophisticated space of persuasion that naturally leads visitors' attention to the product.",
  category: "ui_ux",
  vertical: "landing_page",
  use_cases: ["saas_homepage", "product_launch", "startup_website", "conversion_page"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[product_type] landing page, hero section with 3D product mockup, gradient background, CTA button, modern typography, clean layout, professional web design, high conversion UI --ar 16:9 --v 6 --s 200",
  negative_prompt: "cluttered design, outdated style, stock photos, multiple products, confusing layout",
  aspect_ratio_tags: ["16:9", "landing_page", "web_design"],
  variables: [
    {
      name: "product_type",
      placeholder: "[product_type]",
      default_value: "AI writing tool",
      recommended_values: ["project management app", "design tool", "analytics platform", "email marketing service"],
      variable_behavior_note: "Changing the product type modifies the mockup and hero image, but maintains the landing page structure and clean style.",
        name_ko: "product_type",
        variable_behavior_note_ko: "Changing the product type modifies the mockup and hero image, but maintains the landing page structure and clean style."
    }
  ],
  why_this_works: [
    "3D product mockups provide a sense of reality to the product.",
    "Gradient backgrounds grant a modern and vibrant feel.",
    "Clean layout is a design principle that directly affects conversion rates."
  ],
  model_notes: [
    { model: "midjourney", version: "v6", note: "Strong combination of 3D mockups and gradients.",
        note_ko: "Strong combination of 3D mockups and gradients."
    }
  ],
  comparison_notes: "Midjourney excels in the modern aesthetics of SaaS landing pages.",
  variations: [
    { label: "Minimal", prompt_delta: "Replace gradient with pure white background, minimal style", use_case: "Enterprise SaaS", pre_generated_asset_id: null,
        label_ko: "Minimal",
        use_case_ko: "Enterprise SaaS"
    }
  ],
  common_failure_modes: ["Mockup appearing too realistic might confuse it with an actual product photo -> maintain a proper 3D feel."],
  seo: {
    primary_keyword: "saas landing page prompt",
    secondary_keywords: ["website design prompt", "landing page ai"],
    lsi_keywords: ["hero section", "3D mockup", "conversion design"],
    meta_title: "SaaS Landing Page Prompt | Midjourney v6 UI Design",
    meta_description: "Create modern SaaS landing pages with 3D product mockups. Verified prompt for startup websites and product launches.",
      meta_title_ko: "SaaS Landing Page Prompt | Midjourney v6 UI Design",
      meta_description_ko: "Create modern SaaS landing pages with 3D product mockups. Verified prompt for startup websites and product launches."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-landing-003-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "SaaS landing page with 3D product mockup",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "saas-landing-003",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "SaaS landing page with 3D product mockup"
},
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Tested with various SaaS products. 3D mockup quality consistent."
  },
    title_ko: "SaaS Landing Page Hero Prompt",
    result_first_title_ko: "Modern SaaS landing page with 3D product mockup and gradient background",
    short_description_ko: "Clean, conversion-focused landing page design for SaaS products with hero section, CTA, and product visualization.",
    emotional_hook_ko: "This prompt creates a sophisticated space of persuasion that naturally leads visitors' attention to the product.",
    comparison_notes_ko: "Midjourney excels in the modern aesthetics of SaaS landing pages.",
    use_cases_ko: ["saas_homepage", "product_launch", "startup_website", "conversion_page"],
    why_this_works_ko: ["3D product mockups provide a sense of reality to the product.", "Gradient backgrounds grant a modern and vibrant feel.", "Clean layout is a design principle that directly affects conversion rates."],
    common_failure_modes_ko: ["Mockup appearing too realistic might confuse it with an actual product photo -> maintain a proper 3D feel."]
};

export const fintechMobilePrompt: PromptCard = {
  id: "ui-fintech-mobile-004",
  slug: "premium-fintech-mobile-app-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Premium Fintech Mobile App UI",
  result_first_title: "High-end mobile banking interface with sleek dark gradients and neon highlights",
  short_description: "A modern fintech mobile application design focusing on transaction history and asset visualization.",
  emotional_hook: "This prompt visualizes technical assurance that the user's assets are managed both securely and dynamically.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["fintech_startup", "banking_app", "crypto_wallet_ui", "finance_portfolio"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "fintech mobile app UI, [app_context] screen, dark mode with deep violet and emerald accents, glowing balance display, sleek transaction list, minimalist iconography, premium mobile design, high-fidelity render --ar 9:16 --v 6 --s 300",
  negative_prompt: "bright white background, cluttered UI, low quality, unreadable text, photographic elements, stock photos, desktop layout",
  aspect_ratio_tags: ["9:16", "mobile_ui", "fintech"],
  variables: [
    {
      name: "app_context",
      placeholder: "[app_context]",
      default_value: "digital wallet main dashboard",
      recommended_values: ["stock trading interface", "savings goal tracker", "spending analytics chart", "credit card management"],
      variable_behavior_note: "Changing the app context modifies widget and chart configurations suitable for the financial domain, but maintains the overall premium dark mood.",
        name_ko: "app_context",
        variable_behavior_note_ko: "Changing the app context modifies widget and chart configurations suitable for the financial domain, but maintains the overall premium dark mood."
    }
  ],
  why_this_works: [
    "The combination of deep violet and emerald is a standard in modern fintech design, symbolizing both innovation and growth.",
    "The glowing balance is positioned at the top of the visual hierarchy to immediately strike the user's core interest.",
    "The 9:16 ratio matches actual mobile screen proportions, facilitating post-processing during mockup production."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "High precision in mobile interface icons.",
      note_ko: "High precision in mobile interface icons."
}],
  comparison_notes: "Midjourney v6 is overwhelming in its representation of mobile-specific dense layouts.",
  variations: [{ label: "Light Professional", prompt_delta: "Replace deep violet with soft gray and blue, white background", use_case: "Traditional banking", pre_generated_asset_id: null,
      label_ko: "Light Professional",
      use_case_ko: "Traditional banking"
}],
  common_failure_modes: ["Navigation bar appearing blurry -> add 'clean bottom navigation' keywords."],
  seo: {
    primary_keyword: "fintech mobile app ui prompt",
    secondary_keywords: ["mobile banking ui", "finance app design ai"],
    lsi_keywords: ["dark mode finance", "glowing charts"],
    meta_title: "Fintech Mobile App UI Prompt | Midjourney v6 Verified",
    meta_description: "Create high-end fintech mobile apps with neon highlights. Verified Midjourney v6 prompt for banking and trading interfaces.",
      meta_title_ko: "Fintech Mobile App UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Create high-end fintech mobile apps with neon highlights. Verified Midjourney v6 prompt for banking and trading interfaces."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-fintech-mobile-004-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Premium fintech mobile app UI with dark mode",
    width: 900,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "fintech-mob-004",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Premium fintech mobile app UI with dark mode"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for asset management layout." },
    title_ko: "Premium Fintech Mobile App UI",
    result_first_title_ko: "High-end mobile banking interface with sleek dark gradients and neon highlights",
    short_description_ko: "A modern fintech mobile application design focusing on transaction history and asset visualization.",
    emotional_hook_ko: "This prompt visualizes technical assurance that the user's assets are managed both securely and dynamically.",
    comparison_notes_ko: "Midjourney v6 is overwhelming in its representation of mobile-specific dense layouts.",
    use_cases_ko: ["fintech_startup", "banking_app", "crypto_wallet_ui", "finance_portfolio"],
    why_this_works_ko: ["The combination of deep violet and emerald is a standard in modern fintech design, symbolizing both innovation and growth.", "The glowing balance is positioned at the top of the visual hierarchy to immediately strike the user's core interest.", "The 9:16 ratio matches actual mobile screen proportions, facilitating post-processing during mockup production."],
    common_failure_modes_ko: ["Navigation bar appearing blurry -> add 'clean bottom navigation' keywords."]
};

export const elearningDashboardPrompt: PromptCard = {
  id: "ui-elearning-dashboard-005",
  slug: "elearning-platform-dashboard-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "E-learning Platform Dashboard UI",
  result_first_title: "Clean and focused e-learning dashboard with progress tracking and course cards",
  short_description: "A minimalist educational platform interface designed to maximize focus and learning efficiency.",
  emotional_hook: "This prompt presents an environment where learners can immerse themselves solely in intellectual growth through an organized grid and calm colors.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["lms_platform", "online_course_site", "educational_app", "student_portal"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "e-learning dashboard UI, [educational_theme], clean grid layout, sidebar navigation, progress progress rings, course preview cards, soft pastel highlights, minimal professional design, 8k render --ar 16:9 --v 6 --s 150",
  negative_prompt: "dark mode, messy layout, aggressive colors, unreadable text, gaming aesthetic, high contrast",
  aspect_ratio_tags: ["16:9", "dashboard", "education"],
  variables: [
    {
      name: "educational_theme",
      placeholder: "[educational_theme]",
      default_value: "coding bootcamp student interface",
      recommended_values: ["language learning app", "creative arts masterclass", "corporate training portal", "K-12 classroom management"],
      variable_behavior_note: "Changing the learning topic generates suitable icons and visuals, but maintains the clean white-toned structure that enhances focus.",
        name_ko: "educational_theme",
        variable_behavior_note_ko: "Changing the learning topic generates suitable icons and visuals, but maintains the clean white-toned structure that enhances focus."
    }
  ],
  why_this_works: [
    "Soft pastel highlights minimize eye fatigue and grant a friendly feel unique to educational brands.",
    "Clean grid layout systematically categorizes complex educational content to reduce user cognitive load."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Exceptional card-based layout generation capabilities.",
      note_ko: "Exceptional card-based layout generation capabilities."
}],
  comparison_notes: "Provides the most stable results in organized white UI design.",
  variations: [{ label: "Gamified Version", prompt_delta: "Add badges, experience bars, and more vibrant colors", use_case: "Children education", pre_generated_asset_id: null,
      label_ko: "Gamified Version",
      use_case_ko: "Children education"
}],
  common_failure_modes: ["Text areas appearing too empty -> reinforce with 'detailed course list' keywords."],
  seo: {
    primary_keyword: "elearning dashboard prompt",
    secondary_keywords: ["lms ui design ai", "educational platform prompt"],
    lsi_keywords: ["student portal UI", "course cards"],
    meta_title: "E-learning Dashboard UI Prompt | Midjourney v6 Verified",
    meta_description: "Design clean educational platforms with progress tracking. Verified Midjourney v6 prompt for LMS and student portals.",
      meta_title_ko: "E-learning Dashboard UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design clean educational platforms with progress tracking. Verified Midjourney v6 prompt for LMS and student portals."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-elearning-dashboard-005-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean e-learning dashboard UI",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "edu-dash-005",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Clean e-learning dashboard UI"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for clarity and grid consistency." },
    title_ko: "E-learning Platform Dashboard UI",
    result_first_title_ko: "Clean and focused e-learning dashboard with progress tracking and course cards",
    short_description_ko: "A minimalist educational platform interface designed to maximize focus and learning efficiency.",
    emotional_hook_ko: "This prompt presents an environment where learners can immerse themselves solely in intellectual growth through an organized grid and calm colors.",
    comparison_notes_ko: "Provides the most stable results in organized white UI design.",
    use_cases_ko: ["lms_platform", "online_course_site", "educational_app", "student_portal"],
    why_this_works_ko: ["Soft pastel highlights minimize eye fatigue and grant a friendly feel unique to educational brands.", "Clean grid layout systematically categorizes complex educational content to reduce user cognitive load."],
    common_failure_modes_ko: ["Text areas appearing too empty -> reinforce with 'detailed course list' keywords."]
};

export const smartHomePrompt: PromptCard = {
  id: "ui-smart-home-006",
  slug: "smart-home-control-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Smart Home Control Center UI",
  result_first_title: "Minimalist smart home interface with intuitive device toggles and ambient lighting controls",
  short_description: "A clean, user-friendly control center for home automation systems, focusing on hierarchy and ease of use.",
  emotional_hook: "This prompt translates complex technology into a simple visual language, granting perfect control over living spaces.",
  category: "ui_ux",
  vertical: "smart_home",
  use_cases: ["iot_app", "home_automation", "tablet_interface", "smart_display"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "smart home control UI, [home_context], minimalist skeuomorphic buttons, soft shadow depth, ambient lighting sliders, climate control widget, neutral warm gray background, premium IoT interface, high-end product design --ar 4:3 --v 6 --s 200",
  negative_prompt: "cluttered layout, aggressive neon, unreadable text, low quality, high contrast, mobile portrait layout, dark navy background",
  aspect_ratio_tags: ["4:3", "iot_ui", "tablet_design"],
  variables: [
    {
      name: "home_context",
      placeholder: "[home_context]",
      default_value: "living room lighting and temperature control",
      recommended_values: ["security camera grid view", "kitchen appliance monitoring", "energy consumption analytics", "entertainment system master control"],
      variable_behavior_note: "Changing the control target modifies icons and slider functions accordingly, but maintains the warm and neat minimalist style.",
        name_ko: "home_context",
        variable_behavior_note_ko: "Changing the control target modifies icons and slider functions accordingly, but maintains the warm and neat minimalist style."
    }
  ],
  why_this_works: [
    "Minimalist skeuomorphic buttons provide intuitive feedback as if pressing actual physical buttons.",
    "The neutral warm gray background harmoniously connects the warmth of a home with the precision of technology."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Exceptional representation of soft shadows and textures.",
      note_ko: "Exceptional representation of soft shadows and textures."
}],
  comparison_notes: "Provides optimal ratios and layouts for horizontal interface design intended for tablets and smart displays.",
  variations: [{ label: "Dark Interface", prompt_delta: "Replace warm gray with charcoal black and dim blue glow", use_case: "Night mode use", pre_generated_asset_id: null,
      label_ko: "Dark Interface",
      use_case_ko: "Night mode use"
}],
  common_failure_modes: ["Button spacing too narrow -> add 'spacious layout' keywords."],
  seo: {
    primary_keyword: "smart home ui prompt",
    secondary_keywords: ["iot app design ai", "home automation interface"],
    lsi_keywords: ["ambient control", "minimalist buttons"],
    meta_title: "Smart Home Control UI Prompt | Midjourney v6 Verified",
    meta_description: "Design intuitive home automation interfaces with soft shadows. Verified Midjourney v6 prompt for IoT and smart displays.",
      meta_title_ko: "Smart Home Control UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design intuitive home automation interfaces with soft shadows. Verified Midjourney v6 prompt for IoT and smart displays."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-smart-home-006-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Minimalist smart home control UI",
    width: 1200,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "home-ui-006",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Minimalist smart home control UI"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for IoT dashboard layout." },
    title_ko: "Smart Home Control Center UI",
    result_first_title_ko: "Minimalist smart home interface with intuitive device toggles and ambient lighting controls",
    short_description_ko: "A clean, user-friendly control center for home automation systems, focusing on hierarchy and ease of use.",
    emotional_hook_ko: "This prompt translates complex technology into a simple visual language, granting perfect control over living spaces.",
    comparison_notes_ko: "Provides optimal ratios and layouts for horizontal interface design intended for tablets and smart displays.",
    use_cases_ko: ["iot_app", "home_automation", "tablet_interface", "smart_display"],
    why_this_works_ko: ["Minimalist skeuomorphic buttons provide intuitive feedback as if pressing actual physical buttons.", "The neutral warm gray background harmoniously connects the warmth of a home with the precision of technology."],
    common_failure_modes_ko: ["Button spacing too narrow -> add 'spacious layout' keywords."]
};

export const cryptoWalletPrompt: PromptCard = {
  id: "ui-crypto-wallet-007",
  slug: "crypto-wallet-interface-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Next-Gen Crypto Wallet UI",
  result_first_title: "Secure and vibrant crypto wallet interface with asset allocation charts and transaction flow",
  short_description: "A high-fidelity mobile wallet design for digital assets, prioritizing security and clear data visualization.",
  emotional_hook: "This prompt grants visual order to understand complex blockchain data at a glance.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["web3_app", "crypto_wallet", "nft_marketplace", "defi_protocol"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "crypto wallet mobile UI, [wallet_context], glassmorphism card for total balance, vibrant asset pie chart, secure transaction buttons, dark futuristic aesthetic, electric blue and neon purple highlights, high-fidelity UI design --ar 9:16 --v 6 --s 300",
  negative_prompt: "low contrast, messy layout, unreadable text, bright white theme, old school design, desktop view",
  aspect_ratio_tags: ["9:16", "mobile_ui", "web3"],
  variables: [
    {
      name: "wallet_context",
      placeholder: "[wallet_context]",
      default_value: "multi-chain portfolio overview",
      recommended_values: ["NFT collection gallery", "staking rewards history", "token swap interface", "security settings and recovery"],
      variable_behavior_note: "Changing the wallet functions optimizes asset lists or chart forms for Web3 grammar, but maintains the unique futuristic dark theme.",
        name_ko: "wallet_context",
        variable_behavior_note_ko: "Changing the wallet functions optimizes asset lists or chart forms for Web3 grammar, but maintains the unique futuristic dark theme."
    }
  ],
  why_this_works: [
    "Vibrant asset pie charts strengthen the user experience by allowing intuitive grasping of portfolio composition.",
    "Electric blue and neon purple powerfully communicate the technical identity of Web3 brands."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Exceptional representation of emissive effects and gradients.",
      note_ko: "Exceptional representation of emissive effects and gradients."
}],
  comparison_notes: "Guarantees top-tier quality in High-contrast dark mode designs unique to Web3/Crypto.",
  variations: [{ label: "Professional White", prompt_delta: "Change to bright white background with blue accents", use_case: "Corporate crypto services", pre_generated_asset_id: null,
      label_ko: "Professional White",
      use_case_ko: "Corporate crypto services"
}],
  common_failure_modes: ["Charts appearing too complex and tangled -> add 'simple geometric charts' keywords."],
  seo: {
    primary_keyword: "crypto wallet ui prompt",
    secondary_keywords: ["web3 app design ai", "mobile wallet prompt"],
    lsi_keywords: ["asset visualization", "glassmorphism card"],
    meta_title: "Crypto Wallet UI Prompt | Midjourney v6 Verified",
    meta_description: "Create futuristic crypto wallet interfaces with glassmorphism. Verified Midjourney v6 prompt for Web3 and DeFi apps.",
      meta_title_ko: "Crypto Wallet UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Create futuristic crypto wallet interfaces with glassmorphism. Verified Midjourney v6 prompt for Web3 and DeFi apps."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-crypto-wallet-007-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Futuristic crypto wallet mobile UI",
    width: 900,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "crypto-ui-007",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Futuristic crypto wallet mobile UI"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for mobile Web3 layout." },
    title_ko: "Next-Gen Crypto Wallet UI",
    result_first_title_ko: "Secure and vibrant crypto wallet interface with asset allocation charts and transaction flow",
    short_description_ko: "A high-fidelity mobile wallet design for digital assets, prioritizing security and clear data visualization.",
    emotional_hook_ko: "This prompt grants visual order to understand complex blockchain data at a glance.",
    comparison_notes_ko: "Guarantees top-tier quality in High-contrast dark mode designs unique to Web3/Crypto.",
    use_cases_ko: ["web3_app", "crypto_wallet", "nft_marketplace", "defi_protocol"],
    why_this_works_ko: ["Vibrant asset pie charts strengthen the user experience by allowing intuitive grasping of portfolio composition.", "Electric blue and neon purple powerfully communicate the technical identity of Web3 brands."],
    common_failure_modes_ko: ["Charts appearing too complex and tangled -> add 'simple geometric charts' keywords."]
};

export const healthcarePortalPrompt: PromptCard = {
  id: "ui-healthcare-portal-008",
  slug: "healthcare-patient-portal-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Healthcare Patient Portal UI",
  result_first_title: "Professional healthcare dashboard with patient data visualization and appointment schedule",
  short_description: "A clean, trustworthy medical interface designed for hospital management and patient monitoring.",
  emotional_hook: "This prompt builds visual trust to deliver life-critical data with the utmost clarity and stability.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["hospital_mgmt", "telemedicine_app", "patient_monitoring", "health_data_analytics"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "healthcare patient portal UI, [medical_context], clean white and sky blue color palette, medical data charts, appointment calendar widget, soft shadows, professional typography, high-fidelity medical interface --ar 16:9 --v 6 --s 150",
  negative_prompt: "dark mode, aggressive colors, unreadable text, messy layout, gaming aesthetic, high contrast, non-medical imagery",
  aspect_ratio_tags: ["16:9", "dashboard", "healthcare"],
  variables: [
    {
      name: "medical_context",
      placeholder: "[medical_context]",
      default_value: "cardiac health monitoring dashboard",
      recommended_values: ["telemedicine video consultation UI", "prescription history and management", "MRI/CT scan result viewer", "hospital bed occupancy tracker"],
      variable_behavior_note: "Changing the medical context generates suitable special charts (heart rate, scheduler, etc.), but maintains the essence of medical services: cleanliness and trust.",
        name_ko: "medical_context",
        variable_behavior_note_ko: "Changing the medical context generates suitable special charts (heart rate, scheduler, etc.), but maintains the essence of medical services: cleanliness and trust."
    }
  ],
  why_this_works: [
    "The sky blue palette is a standard in the medical field, providing psychological stability and trust to both patients and medical staff.",
    "The appointment calendar widget proposes a structure to intuitively manage complex medical schedules."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Good representation of professional font layouts and diagrams.",
      note_ko: "Good representation of professional font layouts and diagrams."
}],
  comparison_notes: "Provides the highest practicality in stable and conservative medical dashboard designs.",
  variations: [{ label: "Emergency Red", prompt_delta: "Add emergency red highlights for critical alerts", use_case: "ICU monitoring", pre_generated_asset_id: null,
      label_ko: "Emergency Red",
      use_case_ko: "ICU monitoring"
}],
  common_failure_modes: ["Icons appearing too juvenile -> reinforce with 'minimalist professional icons' keywords."],
  seo: {
    primary_keyword: "healthcare portal ui prompt",
    secondary_keywords: ["medical dashboard ai", "telemedicine app prompt"],
    lsi_keywords: ["patient data visualization", "medical UI"],
    meta_title: "Healthcare Patient Portal UI Prompt | Midjourney v6 Verified",
    meta_description: "Design clean medical interfaces with patient data tracking. Verified Midjourney v6 prompt for hospital systems and telemedicine.",
      meta_title_ko: "Healthcare Patient Portal UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design clean medical interfaces with patient data tracking. Verified Midjourney v6 prompt for hospital systems and telemedicine."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-healthcare-portal-008-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional healthcare patient portal UI",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "health-ui-008",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Professional healthcare patient portal UI"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for medical data hierarchy." },
    title_ko: "Healthcare Patient Portal UI",
    result_first_title_ko: "Professional healthcare dashboard with patient data visualization and appointment schedule",
    short_description_ko: "A clean, trustworthy medical interface designed for hospital management and patient monitoring.",
    emotional_hook_ko: "This prompt builds visual trust to deliver life-critical data with the utmost clarity and stability.",
    comparison_notes_ko: "Provides the highest practicality in stable and conservative medical dashboard designs.",
    use_cases_ko: ["hospital_mgmt", "telemedicine_app", "patient_monitoring", "health_data_analytics"],
    why_this_works_ko: ["The sky blue palette is a standard in the medical field, providing psychological stability and trust to both patients and medical staff.", "The appointment calendar widget proposes a structure to intuitively manage complex medical schedules."],
    common_failure_modes_ko: ["Icons appearing too juvenile -> reinforce with 'minimalist professional icons' keywords."]
};

export const shoppingCartPrompt: PromptCard = {
  id: "ui-ecommerce-cart-009",
  slug: "modern-shopping-cart-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Modern Shopping Cart UI",
  result_first_title: "Sleek and intuitive shopping cart interface for fashion e-commerce apps",
  short_description: "Professional cart design with clear item list, quantity controls, and total price summary.",
  emotional_hook: "This prompt presents a fluid and flexible user interface that doesn't disrupt the excitement right before purchase.",
  category: "ui_ux",
  vertical: "ecommerce",
  use_cases: ["shopping_app", "ecommerce_web", "ui_mockup", "mobile_payment"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "modern shopping cart UI, [platform_type], minimalist design, list of fashion items with thumbnails, quantity steppers, price breakdown, 'Checkout' call-to-action button, high contrast, clean typography, soft shadows --ar 9:16 --v 6 --s 200",
  negative_prompt: "cluttered, low contrast, messy text, ugly icons, dark mode (unless specified), colorful chaos, blurry image thumbnails",
  aspect_ratio_tags: ["9:16", "mobile_ui", "ecommerce"],
  variables: [
    {
      name: "platform_type",
      placeholder: "[platform_type]",
      default_value: "ios mobile app",
      recommended_values: ["android mobile app", "responsive desktop web", "ipad tablet interface"],
      variable_behavior_note: "Changing the platform optimizes button size and overall layout density, but maintains the minimalist components.",
        name_ko: "platform_type",
        variable_behavior_note_ko: "Changing the platform optimizes button size and overall layout density, but maintains the minimalist components."
    }
  ],
  why_this_works: [
    "Quantity steppers provide intuitive control for users, reducing fatigue in cart management.",
    "Clear price breakdown increases conversion rates by removing anxiety regarding unexpected costs."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Very clean card layout separation and font alignment.",
      note_ko: "Very clean card layout separation and font alignment."
}],
  comparison_notes: "Provides standard cart layouts that faithfully follow best practices of actual retail apps.",
  variations: [{ label: "Empty State", prompt_delta: "Replace item list with 'Your cart is empty' message and 'Start Shopping' button", use_case: "Empty cart UI", pre_generated_asset_id: null,
      label_ko: "Empty State",
      use_case_ko: "Empty cart UI"
}],
  common_failure_modes: ["Fonts appearing blurry -> reinforce with 'clean sans-serif typography' keywords."],
  seo: {
    primary_keyword: "shopping cart ui prompt",
    secondary_keywords: ["ecommerce app design ai", "checkout ui prompt"],
    lsi_keywords: ["quantity controls", "price summary"],
    meta_title: "Modern Shopping Cart UI Prompt | Midjourney v6 Verified",
    meta_description: "Design sleek and intuitive shopping carts for ecommerce. Verified Midjourney v6 prompt for mobile and web apps.",
      meta_title_ko: "Modern Shopping Cart UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design sleek and intuitive shopping carts for ecommerce. Verified Midjourney v6 prompt for mobile and web apps."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-ecommerce-cart-009-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Sleek mobile shopping cart UI",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "cart-009",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Sleek mobile shopping cart UI"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for ecommerce usability." },
    title_ko: "Modern Shopping Cart UI",
    result_first_title_ko: "Sleek and intuitive shopping cart interface for fashion e-commerce apps",
    short_description_ko: "Professional cart design with clear item list, quantity controls, and total price summary.",
    emotional_hook_ko: "This prompt presents a fluid and flexible user interface that doesn't disrupt the excitement right before purchase.",
    comparison_notes_ko: "Provides standard cart layouts that faithfully follow best practices of actual retail apps.",
    use_cases_ko: ["shopping_app", "ecommerce_web", "ui_mockup", "mobile_payment"],
    why_this_works_ko: ["Quantity steppers provide intuitive control for users, reducing fatigue in cart management.", "Clear price breakdown increases conversion rates by removing anxiety regarding unexpected costs."],
    common_failure_modes_ko: ["Fonts appearing blurry -> reinforce with 'clean sans-serif typography' keywords."]
};

export const checkoutPaymentPrompt: PromptCard = {
  id: "ui-ecommerce-checkout-010",
  slug: "secure-checkout-payment-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Secure Checkout & Payment UI",
  result_first_title: "Trustworthy and professional payment interface with credit card entry and Apple Pay option",
  short_description: "Final checkout screen focusing on trust, security, and multiple payment method selection.",
  emotional_hook: "This prompt provides both solid security and comfortable visual stability during the most sensitive moments of financial transactions.",
  category: "ui_ux",
  vertical: "ecommerce",
  use_cases: ["payment_gateway", "checkout_process", "fintech_ui", "subscription_billing"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "secure checkout UI, [device_type], payment method selection, credit card input fields, Apple Pay and Google Pay buttons, security badges, minimalist layout, professional blue and white color scheme, clear error states --ar 9:16 --v 6 --s 150",
  negative_prompt: "unprofessional, amateur design, dark background, scary colors, low resolution, messy fields, small buttons",
  aspect_ratio_tags: ["9:16", "payment", "security"],
  variables: [
    {
      name: "device_type",
      placeholder: "[device_type]",
      default_value: "mobile phone display",
      recommended_values: ["web browser window", "kiosk touch screen", "smart watch payment screen"],
      variable_behavior_note: "Changing the device modifies input form size and button placement to induce optimal input for each environment.",
        name_ko: "device_type",
        variable_behavior_note_ko: "Changing the device modifies input form size and button placement to induce optimal input for each environment."
    }
  ],
  why_this_works: [
    "Security badges play a decisive role in resolving user psychological anxiety and encouraging the final payment button click.",
    "The professional blue and white color scheme is the most preferred 'trust' palette in financial services."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Sophisticated alignment of card icons and input fields.",
      note_ko: "Sophisticated alignment of card icons and input fields."
}],
  comparison_notes: "Guarantees high completeness on par with actual payment modules of fintech companies.",
  variations: [{ label: "Success Screen", prompt_delta: "Replace payment fields with large green checkmark and 'Payment Successful' message", use_case: "Payment confirmation", pre_generated_asset_id: null,
      label_ko: "Success Screen",
      use_case_ko: "Payment confirmation"
}],
  common_failure_modes: ["Buttons appearing too small -> add 'large accessible tap targets' keywords."],
  seo: {
    primary_keyword: "checkout payment ui prompt",
    secondary_keywords: ["payment gateway design ai", "fintech checkout prompt"],
    lsi_keywords: ["security badges", "payment method selection"],
    meta_title: "Secure Checkout & Payment UI Prompt | Midjourney v6 Verified",
    meta_description: "Design professional and trustworthy payment interfaces. Verified Midjourney v6 prompt for secure checkout.",
      meta_title_ko: "Secure Checkout & Payment UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design professional and trustworthy payment interfaces. Verified Midjourney v6 prompt for secure checkout."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-ecommerce-checkout-010-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional mobile payment UI",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "payment-010",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Professional mobile payment UI"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for fintech trust standards." },
    title_ko: "Secure Checkout & Payment UI",
    result_first_title_ko: "Trustworthy and professional payment interface with credit card entry and Apple Pay option",
    short_description_ko: "Final checkout screen focusing on trust, security, and multiple payment method selection.",
    emotional_hook_ko: "This prompt provides both solid security and comfortable visual stability during the most sensitive moments of financial transactions.",
    comparison_notes_ko: "Guarantees high completeness on par with actual payment modules of fintech companies.",
    use_cases_ko: ["payment_gateway", "checkout_process", "fintech_ui", "subscription_billing"],
    why_this_works_ko: ["Security badges play a decisive role in resolving user psychological anxiety and encouraging the final payment button click.", "The professional blue and white color scheme is the most preferred 'trust' palette in financial services."],
    common_failure_modes_ko: ["Buttons appearing too small -> add 'large accessible tap targets' keywords."]
};

export const productDetailPrompt: PromptCard = {
  id: "ui-ecommerce-detail-011",
  slug: "premium-product-detail-page-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Premium Product Detail Page",
  result_first_title: "High-end product detail page with large hero image and elegant typography",
  short_description: "A conversion-focused product page for luxury and fashion brands with detailed descriptions and reviews.",
  emotional_hook: "This prompt storyboards the unique value of a product through bold layouts and delicate typography.",
  category: "ui_ux",
  vertical: "ecommerce",
  use_cases: ["luxury_brand_web", "fashion_retail", "product_catalog", "landing_page"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "premium product detail page UI, [industry_type], large high-resolution hero image, elegant serif typography, minimal layout, price and add to cart section, size selector, accordion for details, white space, luxury aesthetic --ar 16:9 --v 6 --s 300",
  negative_prompt: "cheap design, cluttered, low quality image, generic ecommerce, bright neon colors, messy layout",
  aspect_ratio_tags: ["16:9", "product_page", "luxury"],
  variables: [
    {
      name: "industry_type",
      placeholder: "[industry_type]",
      default_value: "high-end luxury watch brand",
      recommended_values: ["minimalist designer furniture", "premium organic skincare", "concept electric bicycle", "boutique winery"],
      variable_behavior_note: "Changing the industry modifies the product's mood and information structure, but maintains the whitespace and sophisticated refinement unique to premium brands.",
        name_ko: "industry_type",
        variable_behavior_note_ko: "Changing the industry modifies the product's mood and information structure, but maintains the whitespace and sophisticated refinement unique to premium brands."
    }
  ],
  why_this_works: [
    "A large hero image overwhelmingly conveys the first impression of the product, increasing user dwell time.",
    "Elegant serif typography visually represents the brand's history and trust."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Exceptional whitespace and alignment in website layouts.",
      note_ko: "Exceptional whitespace and alignment in website layouts."
}],
  comparison_notes: "Provides elegant visuals comparable to the websites of global luxury brands.",
  variations: [{ label: "Dark Mode", prompt_delta: "Change to deep charcoal background, gold accents, ultra-premium vibe", use_case: "Evening wear or tech", pre_generated_asset_id: null,
      label_ko: "Dark Mode",
      use_case_ko: "Evening wear or tech"
}],
  common_failure_modes: ["Information appearing too sparse -> add 'detailed product specifications section' keywords."],
  seo: {
    primary_keyword: "product detail page ui prompt",
    secondary_keywords: ["luxury ecommerce design ai", "fashion landing page prompt"],
    lsi_keywords: ["hero image", "serif typography"],
    meta_title: "Premium Product Detail Page Prompt | Midjourney v6 Verified",
    meta_description: "Design high-end product detail pages for luxury brands. Verified Midjourney v6 prompt for conversion focus.",
      meta_title_ko: "Premium Product Detail Page Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design high-end product detail pages for luxury brands. Verified Midjourney v6 prompt for conversion focus."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-ecommerce-detail-011-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Elegant luxury product detail web design",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "detail-011",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Elegant luxury product detail web design"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for high-end aesthetic." },
    title_ko: "Premium Product Detail Page",
    result_first_title_ko: "High-end product detail page with large hero image and elegant typography",
    short_description_ko: "A conversion-focused product page for luxury and fashion brands with detailed descriptions and reviews.",
    emotional_hook_ko: "This prompt storyboards the unique value of a product through bold layouts and delicate typography.",
    comparison_notes_ko: "Provides elegant visuals comparable to the websites of global luxury brands.",
    use_cases_ko: ["luxury_brand_web", "fashion_retail", "product_catalog", "landing_page"],
    why_this_works_ko: ["A large hero image overwhelmingly conveys the first impression of the product, increasing user dwell time.", "Elegant serif typography visually represents the brand's history and trust."],
    common_failure_modes_ko: ["Information appearing too sparse -> add 'detailed product specifications section' keywords."]
};

export const advancedFilteringPrompt: PromptCard = {
  id: "ui-ecommerce-filter-012",
  slug: "advanced-ecommerce-filtering-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Advanced E-commerce Filtering UI",
  result_first_title: "Sophisticated sidebar filtering system for high-density product catalogs",
  short_description: "A complex yet usable filtering interface for large marketplaces with price ranges, categories, and attributes.",
  emotional_hook: "This prompt designs a sophisticated compass that allows users to find the one jewel they want among tens of thousands of products.",
  category: "ui_ux",
  vertical: "ecommerce",
  use_cases: ["marketplace_web", "electronic_store", "large_retailer", "product_listing_page"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "advanced ecommerce filtering UI, [listing_type], sidebar layout, price range slider, checkbox categories, color swatches, rating filter, clean grid of products in background, professional SaaS aesthetic, highly usable --ar 16:9 --v 6 --s 150",
  negative_prompt: "cluttered, confusing UX, small text, ugly colors, outdated web design, blurry icons",
  aspect_ratio_tags: ["16:9", "filtering", "saas"],
  variables: [
    {
      name: "listing_type",
      placeholder: "[listing_type]",
      default_value: "electronics marketplace with complex specs",
      recommended_values: ["furniture catalog with material filters", "professional photography gear store", "luxury fashion house with seasonal filters", "outdoor adventure gear shop"],
      variable_behavior_note: "Changing the listing type optimizes filter details (color, material, specs, etc.), but maintains the overall sidebar layout structure.",
        name_ko: "listing_type",
        variable_behavior_note_ko: "Changing the listing type optimizes filter details (color, material, specs, etc.), but maintains the overall sidebar layout structure."
    }
  ],
  why_this_works: [
    "Price range sliders and color swatches facilitate visually enjoyable and faster navigation compared to text-based filters.",
    "Sidebar layout is the most verified information structure in large malls, minimizing user learning costs."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Sophisticated representation of interactive elements like sliders and checkboxes.",
      note_ko: "Sophisticated representation of interactive elements like sliders and checkboxes."
}],
  comparison_notes: "Designed by benchmarking advanced search functions of major platforms like Amazon or eBay.",
  variations: [{ label: "Mobile Bottom Sheet", prompt_delta: "Change sidebar to mobile bottom sheet UI with large tap targets", use_case: "Mobile shopping filters", pre_generated_asset_id: null,
      label_ko: "Mobile Bottom Sheet",
      use_case_ko: "Mobile shopping filters"
}],
  common_failure_modes: ["Filter items too crowded -> add 'generous spacing, hierarchy' keywords."],
  seo: {
    primary_keyword: "ecommerce filtering ui prompt",
    secondary_keywords: ["product listing design ai", "marketplace ui prompt"],
    lsi_keywords: ["price range slider", "sidebar layout"],
    meta_title: "Advanced E-commerce Filtering UI Prompt | Midjourney v6 Verified",
    meta_description: "Design sophisticated filtering systems for large marketplaces. Verified Midjourney v6 prompt for high-density catalogs.",
      meta_title_ko: "Advanced E-commerce Filtering UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design sophisticated filtering systems for large marketplaces. Verified Midjourney v6 prompt for high-density catalogs."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-ecommerce-filter-012-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Sophisticated marketplace filtering system UI",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "filter-012",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Sophisticated marketplace filtering system UI"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for information architecture." },
    title_ko: "Advanced E-commerce Filtering UI",
    result_first_title_ko: "Sophisticated sidebar filtering system for high-density product catalogs",
    short_description_ko: "A complex yet usable filtering interface for large marketplaces with price ranges, categories, and attributes.",
    emotional_hook_ko: "This prompt designs a sophisticated compass that allows users to find the one jewel they want among tens of thousands of products.",
    comparison_notes_ko: "Designed by benchmarking advanced search functions of major platforms like Amazon or eBay.",
    use_cases_ko: ["marketplace_web", "electronic_store", "large_retailer", "product_listing_page"],
    why_this_works_ko: ["Price range sliders and color swatches facilitate visually enjoyable and faster navigation compared to text-based filters.", "Sidebar layout is the most verified information structure in large malls, minimizing user learning costs."],
    common_failure_modes_ko: ["Filter items too crowded -> add 'generous spacing, hierarchy' keywords."]
};

export const userReviewsPrompt: PromptCard = {
  id: "ui-ecommerce-review-013",
  slug: "social-proof-reviews-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Social Proof & Reviews UI",
  result_first_title: "Engaging user reviews section with photo gallery and rating summary",
  short_description: "A trust-building UI component for product pages, featuring photo reviews, helpful votes, and detailed ratings.",
  emotional_hook: "This prompt visually aligns the vivid voices of others, turning the final anxiety of purchase decisions into confidence.",
  category: "ui_ux",
  vertical: "ecommerce",
  use_cases: ["product_review_section", "testimonial_block", "community_feedback", "trust_building"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "user reviews UI section, [app_context], average rating summary card, photo review gallery, verified buyer badges, 'Helpful' vote buttons, clean cards, soft shadows, trust-focused design --ar 16:9 --v 6 --s 180",
  negative_prompt: "messy comments, low resolution photos, dark and gloomy, aggressive red colors, cluttered layout, small text",
  aspect_ratio_tags: ["16:9", "reviews", "social_proof"],
  variables: [
    {
      name: "app_context",
      placeholder: "[app_context]",
      default_value: "skincare brand with before-and-after photos",
      recommended_values: ["tech gadget store with unboxing shots", "travel booking app with hotel photos", "fitness app with transformation stories", "designer furniture with customer home shots"],
      variable_behavior_note: "Changing the app context modifies the types of review photos and highlighted information, but maintains the trustworthy layout.",
        name_ko: "app_context",
        variable_behavior_note_ko: "Changing the app context modifies the types of review photos and highlighted information, but maintains the trustworthy layout."
    }
  ],
  why_this_works: [
    "Photo review galleries provide a much stronger purchase motive than text and verify the product's actual appearance.",
    "Verified buyer badges guarantee the truthfulness of reviews, increasing overall platform trust."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Excellent balance between photo grids and rating cards.",
      note_ko: "Excellent balance between photo grids and rating cards."
}],
  comparison_notes: "Implements the core UI of 'review-centric shopping' pursued by modern commerce platforms.",
  variations: [{ label: "Simplified", prompt_delta: "Remove photos, focus on large text testimonials and brand logos", use_case: "B2B SaaS testimonials", pre_generated_asset_id: null,
      label_ko: "Simplified",
      use_case_ko: "B2B SaaS testimonials"
}],
  common_failure_modes: ["Review photos appearing unpleasant -> add 'aesthetic lifestyle photography, clean subjects' keywords."],
  seo: {
    primary_keyword: "user reviews ui prompt",
    secondary_keywords: ["social proof design ai", "photo review ui prompt"],
    lsi_keywords: ["rating summary", "verified buyer badge"],
    meta_title: "Social Proof & Reviews UI Prompt | Midjourney v6 Verified",
    meta_description: "Design engaging user review sections for ecommerce. Verified Midjourney v6 prompt for trust building.",
      meta_title_ko: "Social Proof & Reviews UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design engaging user review sections for ecommerce. Verified Midjourney v6 prompt for trust building."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-ecommerce-review-013-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Engaging photo reviews UI section",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "review-013",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Engaging photo reviews UI section"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for social proof layout." },
    title_ko: "Social Proof & Reviews UI",
    result_first_title_ko: "Engaging user reviews section with photo gallery and rating summary",
    short_description_ko: "A trust-building UI component for product pages, featuring photo reviews, helpful votes, and detailed ratings.",
    emotional_hook_ko: "This prompt visually aligns the vivid voices of others, turning the final anxiety of purchase decisions into confidence.",
    comparison_notes_ko: "Implements the core UI of 'review-centric shopping' pursued by modern commerce platforms.",
    use_cases_ko: ["product_review_section", "testimonial_block", "community_feedback", "trust_building"],
    why_this_works_ko: ["Photo review galleries provide a much stronger purchase motive than text and verify the product's actual appearance.", "Verified buyer badges guarantee the truthfulness of reviews, increasing overall platform trust."],
    common_failure_modes_ko: ["Review photos appearing unpleasant -> add 'aesthetic lifestyle photography, clean subjects' keywords."]
};

export const crmDashboardPrompt: PromptCard = {
  id: "ui-saas-crm-014",
  slug: "saas-crm-dashboard-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "SaaS CRM Dashboard",
  result_first_title: "High-density CRM dashboard with sales pipeline and customer metrics",
  short_description: "A data-rich interface for managing sales leads, customer relationships, and revenue forecasting.",
  emotional_hook: "This prompt accelerates decision-making by combining scattered business data into a single, powerful visual strategy.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["crm_software", "sales_analytics", "enterprise_saas", "b2b_dashboard"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "SaaS CRM dashboard UI, [company_type], high-density layout, sales pipeline funnel chart, customer table with status badges, revenue growth line graph, sidebar navigation, clean sans-serif typography, professional gray and indigo color palette --ar 16:9 --v 6 --s 180",
  negative_prompt: "cluttered, colorful chaos, low contrast, messy charts, blurry text, cartoonish icons, dark mode (unless specified)",
  aspect_ratio_tags: ["16:9", "saas", "crm"],
  variables: [
    {
      name: "company_type",
      placeholder: "[company_type]",
      default_value: "real estate agency management",
      recommended_values: ["tech startup sales team", "global logistics enterprise", "subscription-based media company", "professional consulting firm"],
      variable_behavior_note: "Changing the industry optimizes data items and metrics, but maintains the professional B2B interface mood.",
        name_ko: "company_type",
        variable_behavior_note_ko: "Changing the industry optimizes data items and metrics, but maintains the professional B2B interface mood."
    }
  ],
  why_this_works: [
    "Sales pipeline funnels visually facilitate the immediate identification of bottlenecks in revenue flow, aiding strategy establishment.",
    "The indigo color palette delivers both the stability and intellectual sophistication required in enterprise software."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Exceptional layout balance between complex tables and charts.",
      note_ko: "Exceptional layout balance between complex tables and charts."
}],
  comparison_notes: "Designed by benchmarking the professionalism of major CRM solutions like Salesforce or HubSpot.",
  variations: [{ label: "Dark Theme", prompt_delta: "Change palette to deep slate background with cyan accents, glowing charts", use_case: "Modern tech CRM", pre_generated_asset_id: null,
      label_ko: "Dark Theme",
      use_case_ko: "Modern tech CRM"
}],
  common_failure_modes: ["Data density appearing too low -> add 'compact layout, detailed metrics' keywords."],
  seo: {
    primary_keyword: "crm dashboard ui prompt",
    secondary_keywords: ["saas design ai", "sales pipeline prompt"],
    lsi_keywords: ["customer metrics", "funnel chart"],
    meta_title: "SaaS CRM Dashboard UI Prompt | Midjourney v6 Verified",
    meta_description: "Design high-density CRM dashboards for enterprise sales. Verified Midjourney v6 prompt for data-rich SaaS.",
      meta_title_ko: "SaaS CRM Dashboard UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design high-density CRM dashboards for enterprise sales. Verified Midjourney v6 prompt for data-rich SaaS."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-crm-014-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional SaaS CRM dashboard interface",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "crm-014",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Professional SaaS CRM dashboard interface"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for B2B data density." },
    title_ko: "SaaS CRM Dashboard",
    result_first_title_ko: "High-density CRM dashboard with sales pipeline and customer metrics",
    short_description_ko: "A data-rich interface for managing sales leads, customer relationships, and revenue forecasting.",
    emotional_hook_ko: "This prompt accelerates decision-making by combining scattered business data into a single, powerful visual strategy.",
    comparison_notes_ko: "Designed by benchmarking the professionalism of major CRM solutions like Salesforce or HubSpot.",
    use_cases_ko: ["crm_software", "sales_analytics", "enterprise_saas", "b2b_dashboard"],
    why_this_works_ko: ["Sales pipeline funnels visually facilitate the immediate identification of bottlenecks in revenue flow, aiding strategy establishment.", "The indigo color palette delivers both the stability and intellectual sophistication required in enterprise software."],
    common_failure_modes_ko: ["Data density appearing too low -> add 'compact layout, detailed metrics' keywords."]
};

export const userManagementPrompt: PromptCard = {
  id: "ui-saas-users-015",
  slug: "user-management-system-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "User Management System UI",
  result_first_title: "Clean and scalable user management interface with role-based access control",
  short_description: "An administrative interface for managing team members, permission levels, and account status.",
  emotional_hook: "This prompt provides perfect control to manage hundreds of organization members orderly on a single screen.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["admin_portal", "hr_software", "team_collaboration", "access_control"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "user management UI, [org_type], searchable user table, role badges (Admin, Editor, Viewer), activity status toggles, avatar thumbnails, bulk actions bar, minimalist white theme, precise spacing, functional aesthetic --ar 16:9 --v 6 --s 120",
  negative_prompt: "artistic, blurry, colorful backgrounds, messy icons, generic, low detail, rounded corners too large",
  aspect_ratio_tags: ["16:9", "admin_ui", "user_management"],
  variables: [
    {
      name: "org_type",
      placeholder: "[org_type]",
      default_value: "global software engineering team",
      recommended_values: ["hospital medical staff directory", "university student portal admin", "e-commerce support team", "government agency directory"],
      variable_behavior_note: "Changing the organization type modifies user fields (title, ID, affiliation, etc.), but maintains high readability of the management table.",
        name_ko: "org_type",
        variable_behavior_note_ko: "Changing the organization type modifies user fields (title, ID, affiliation, etc.), but maintains high readability of the management table."
    }
  ],
  why_this_works: [
    "Role badges clearly distinguish authority systems visually, preventing management errors.",
    "Searchable user tables propose practical structures to quickly find specific individuals even in large-scale organizations."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Text alignment and button placement are expressed neatly.",
      note_ko: "Text alignment and button placement are expressed neatly."
}],
  comparison_notes: "Faithfully follows the standard information design of enterprise admin pages.",
  variations: [{ label: "Empty State", prompt_delta: "Replace table with 'No users found' illustration and 'Add First User' button", use_case: "Initial setup UI", pre_generated_asset_id: null,
      label_ko: "Empty State",
      use_case_ko: "Initial setup UI"
}],
  common_failure_modes: ["Table boundaries unclear -> reinforce with 'subtle borders, zebra stripping' keywords."],
  seo: {
    primary_keyword: "user management ui prompt",
    secondary_keywords: ["admin portal design ai", "permission management ui"],
    lsi_keywords: ["role badges", "user table"],
    meta_title: "User Management System UI Prompt | Midjourney v6 Verified",
    meta_description: "Design clean administrative interfaces for user management. Verified Midjourney v6 prompt for scalable teams.",
      meta_title_ko: "User Management System UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design clean administrative interfaces for user management. Verified Midjourney v6 prompt for scalable teams."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-users-015-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean administrative user management interface",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "users-015",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Clean administrative user management interface"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for admin UX standards." },
    title_ko: "User Management System UI",
    result_first_title_ko: "Clean and scalable user management interface with role-based access control",
    short_description_ko: "An administrative interface for managing team members, permission levels, and account status.",
    emotional_hook_ko: "This prompt provides perfect control to manage hundreds of organization members orderly on a single screen.",
    comparison_notes_ko: "Faithfully follows the standard information design of enterprise admin pages.",
    use_cases_ko: ["admin_portal", "hr_software", "team_collaboration", "access_control"],
    why_this_works_ko: ["Role badges clearly distinguish authority systems visually, preventing management errors.", "Searchable user tables propose practical structures to quickly find specific individuals even in large-scale organizations."],
    common_failure_modes_ko: ["Table boundaries unclear -> reinforce with 'subtle borders, zebra stripping' keywords."]
};

export const saasSettingsPrompt: PromptCard = {
  id: "ui-saas-settings-016",
  slug: "saas-settings-permissions-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Settings & Permissions UI",
  result_first_title: "Logical and easy-to-navigate settings page with toggle switches and grouped sections",
  short_description: "A comprehensive settings interface for SaaS apps, managing everything from profile to security and integrations.",
  emotional_hook: "This prompt contains the sophistication of placing numerous switches of complex systems in the most logical and safe manner.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["settings_page", "account_security", "system_config", "app_preferences"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "SaaS settings UI, [settings_context], vertical tab navigation, toggle switches for notifications, input fields for profile, security checklist, minimalist clean design, light gray background, functional and usable --ar 16:9 --v 6 --s 100",
  negative_prompt: "messy, cluttered, colorful, low contrast, unreadable, artistic, dark backgrounds, high contrast neon",
  aspect_ratio_tags: ["16:9", "settings", "usable_ui"],
  variables: [
    {
      name: "settings_context",
      placeholder: "[settings_context]",
      default_value: "security and two-factor authentication",
      recommended_values: ["billing and subscription plans", "notification preferences", "third-party integrations", "team workspace settings"],
      variable_behavior_note: "Changing the setting theme modifies the placement of input forms and toggles, but maintains the consistent vertical tab-based navigation structure.",
        name_ko: "settings_context",
        variable_behavior_note_ko: "Changing the setting theme modifies the placement of input forms and toggles, but maintains the consistent vertical tab-based navigation structure."
    }
  ],
  why_this_works: [
    "Toggle switches visually show immediate setting change states, giving the user a sense of control.",
    "Vertical tab navigation is the optimal layout to categorize many setting items and lower cognitive load."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Excellent understanding of standard placement of UI components.",
      note_ko: "Excellent understanding of standard placement of UI components."
}],
  comparison_notes: "Perfectly replicates the setting screen sense of modern SaaS like Notion or Slack.",
  variations: [{ label: "Modal View", prompt_delta: "Change full page to a centered modal window for quick settings", use_case: "Quick preferences UI", pre_generated_asset_id: null,
      label_ko: "Modal View",
      use_case_ko: "Quick preferences UI"
}],
  common_failure_modes: ["Section boundaries ambiguous -> add 'clearly defined card sections' keywords."],
  seo: {
    primary_keyword: "saas settings ui prompt",
    secondary_keywords: ["settings page design ai", "toggle switch ui prompt"],
    lsi_keywords: ["vertical navigation", "permission settings"],
    meta_title: "SaaS Settings & Permissions UI Prompt | Midjourney v6 Verified",
    meta_description: "Design logical and easy-to-use settings pages. Verified Midjourney v6 prompt for SaaS configuration.",
      meta_title_ko: "SaaS Settings & Permissions UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design logical and easy-to-use settings pages. Verified Midjourney v6 prompt for SaaS configuration."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-settings-016-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean SaaS settings interface with toggles",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "settings-016",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Clean SaaS settings interface with toggles"
},
  review: { human_review_required: true, review_status: "verified", reviewer_note: "Approved for logical UX structure." },
    title_ko: "Settings & Permissions UI",
    result_first_title_ko: "Logical and easy-to-navigate settings page with toggle switches and grouped sections",
    short_description_ko: "A comprehensive settings interface for SaaS apps, managing everything from profile to security and integrations.",
    emotional_hook_ko: "This prompt contains the sophistication of placing numerous switches of complex systems in the most logical and safe manner.",
    comparison_notes_ko: "Perfectly replicates the setting screen sense of modern SaaS like Notion or Slack.",
    use_cases_ko: ["settings_page", "account_security", "system_config", "app_preferences"],
    why_this_works_ko: ["Toggle switches visually show immediate setting change states, giving the user a sense of control.", "Vertical tab navigation is the optimal layout to categorize many setting items and lower cognitive load."],
    common_failure_modes_ko: ["Section boundaries ambiguous -> add 'clearly defined card sections' keywords."]
};

export const apiDocsPrompt: PromptCard = {
  id: "ui-saas-api-017",
  slug: "saas-api-documentation-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "API Documentation UI",
  result_first_title: "Developer-friendly API documentation with side-by-side code snippets and parameters",
  short_description: "A technical interface for developers, featuring dark mode code blocks, endpoint descriptions, and response examples.",
  emotional_hook: "This prompt sublimates technical complexity into a clear visual order, designing the best documents that stimulate developer creativity.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["developer_portal", "api_docs", "technical_writing", "software_integration"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "API documentation UI, [api_type], two-column layout, dark mode code blocks on the right, light mode description on the left, syntax highlighting, endpoint GET/POST labels, clean mono fonts, professional developer portal aesthetic --ar 16:9 --v 6 --s 200",
  negative_prompt: "cluttered, colorful chaos, low contrast, messy text, artistic, unreadable code, bright backgrounds for code blocks",
  aspect_ratio_tags: ["16:9", "api_docs", "developer_ui"],
  variables: [
    {
      name: "api_type",
      placeholder: "[api_type]",
      default_value: "payment gateway integration",
      recommended_values: ["social media data analytics", "machine learning model endpoint", "cloud storage management", "real-time messaging protocol"],
      variable_behavior_note: "Changing the API type modifies the code snippet language and parameter content, but maintains the 2-column documentation standard.",
        name_ko: "api_type",
        variable_behavior_note_ko: "Changing the API type modifies the code snippet language and parameter content, but maintains the 2-column documentation standard."
    }
  ],
  why_this_works: [
    "The two-column layout maximizes developer efficiency by allowing simultaneous reference to descriptions and code.",
    "Syntax highlighting increases code readability, prevents errors, and grants a professional feel."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Highly sophisticated alignment of code block textures and text areas.",
      note_ko: "Highly sophisticated alignment of code block textures and text areas."
}],
  comparison_notes: "Replicates the documentation aesthetics of global developer-oriented platforms like Stripe or Twilio.",
  variations: [{ label: "Dark Only", prompt_delta: "Change entire UI to dark mode, high contrast green and purple syntax colors", use_case: "Dark theme dev portal", pre_generated_asset_id: null,
      label_ko: "Dark Only",
      use_case_ko: "Dark theme dev portal"
}],
  common_failure_modes: ["Code blocks appearing flat -> add 'beveled code blocks, subtle depth' keywords."],
  seo: {
    primary_keyword: "api documentation ui prompt",
    secondary_keywords: ["developer portal design ai", "code block ui prompt"],
    lsi_keywords: ["two-column layout", "syntax highlighting"],
    meta_title: "API Documentation UI Prompt | Midjourney v6 Verified",
    meta_description: "Design developer-friendly API documentation. Verified Midjourney v6 prompt for technical interfaces.",
      meta_title_ko: "API Documentation UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design developer-friendly API documentation. Verified Midjourney v6 prompt for technical interfaces."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-api-017-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional API documentation interface",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "api-017",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Professional API documentation interface"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for technical data hierarchy." },
    title_ko: "API Documentation UI",
    result_first_title_ko: "Developer-friendly API documentation with side-by-side code snippets and parameters",
    short_description_ko: "A technical interface for developers, featuring dark mode code blocks, endpoint descriptions, and response examples.",
    emotional_hook_ko: "This prompt sublimates technical complexity into a clear visual order, designing the best documents that stimulate developer creativity.",
    comparison_notes_ko: "Replicates the documentation aesthetics of global developer-oriented platforms like Stripe or Twilio.",
    use_cases_ko: ["developer_portal", "api_docs", "technical_writing", "software_integration"],
    why_this_works_ko: ["The two-column layout maximizes developer efficiency by allowing simultaneous reference to descriptions and code.", "Syntax highlighting increases code readability, prevents errors, and grants a professional feel."],
    common_failure_modes_ko: ["Code blocks appearing flat -> add 'beveled code blocks, subtle depth' keywords."]
};

export const kanbanBoardPrompt: PromptCard = {
  id: "ui-saas-kanban-018",
  slug: "saas-kanban-board-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "SaaS Kanban Board UI",
  result_first_title: "Intuitive project management kanban board with draggable cards and status columns",
  short_description: "A collaborative interface for tracking tasks and workflows, featuring colorful priority tags and user avatars.",
  emotional_hook: "This prompt aligns complex tasks into a clear visual flow, making the start of every work morning enjoyable.",
  category: "ui_ux",
  vertical: "dashboard_design",
  use_cases: ["project_management", "task_tracking", "agile_workflow", "team_collaboration"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "SaaS kanban board UI, [task_context], vertical columns (To Do, In Progress, Done), draggable task cards, priority badges, member avatars, clean minimalist style, light gray background, high usability --ar 16:9 --v 6 --s 150",
  negative_prompt: "cluttered, messy layout, dark mode, aggressive colors, unreadable text, low resolution, blurry cards",
  aspect_ratio_tags: ["16:9", "kanban", "project_mgmt"],
  variables: [
    {
      name: "task_context",
      placeholder: "[task_context]",
      default_value: "software development sprint",
      recommended_values: ["marketing campaign content plan", "home renovation checklist", "customer support ticket system", "event planning schedule"],
      variable_behavior_note: "Changing the work context modifies card content and tags, but maintains the Kanban-specific vertical column structure and card placement.",
        name_ko: "task_context",
        variable_behavior_note_ko: "Changing the work context modifies card content and tags, but maintains the Kanban-specific vertical column structure and card placement."
    }
  ],
  why_this_works: [
    "Vertical columns show task state transitions at a glance, allowing intuitive grasping of progress.",
    "Priority badges visually prioritize urgency, aiding efficient resource allocation."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Exceptional spacing and alignment between cards and columns.",
      note_ko: "Exceptional spacing and alignment between cards and columns."
}],
  comparison_notes: "Provides the neat and practical aesthetics of collaboration tools like Trello, Jira, or Linear.",
  variations: [{ label: "Simple/Minimal", prompt_delta: "Remove avatars and tags, focus on pure text and clean lines", use_case: "Minimalist task manager", pre_generated_asset_id: null,
      label_ko: "Simple/Minimal",
      use_case_ko: "Minimalist task manager"
}],
  common_failure_modes: ["Cards appearing too densely packed -> reinforce with 'generous card spacing' keywords."],
  seo: {
    primary_keyword: "kanban board ui prompt",
    secondary_keywords: ["project management design ai", "task tracking prompt"],
    lsi_keywords: ["vertical columns", "priority badges"],
    meta_title: "SaaS Kanban Board UI Prompt | Midjourney v6 Verified",
    meta_description: "Design intuitive kanban boards for project management. Verified Midjourney v6 prompt for agile workflows.",
      meta_title_ko: "SaaS Kanban Board UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design intuitive kanban boards for project management. Verified Midjourney v6 prompt for agile workflows."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-saas-kanban-018-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Intuitive project management kanban board interface",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "kanban-018",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Intuitive project management kanban board interface"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for task tracking usability." },
    title_ko: "SaaS Kanban Board UI",
    result_first_title_ko: "Intuitive project management kanban board with draggable cards and status columns",
    short_description_ko: "A collaborative interface for tracking tasks and workflows, featuring colorful priority tags and user avatars.",
    emotional_hook_ko: "This prompt aligns complex tasks into a clear visual flow, making the start of every work morning enjoyable.",
    comparison_notes_ko: "Provides the neat and practical aesthetics of collaboration tools like Trello, Jira, or Linear.",
    use_cases_ko: ["project_management", "task_tracking", "agile_workflow", "team_collaboration"],
    why_this_works_ko: ["Vertical columns show task state transitions at a glance, allowing intuitive grasping of progress.", "Priority badges visually prioritize urgency, aiding efficient resource allocation."],
    common_failure_modes_ko: ["Cards appearing too densely packed -> reinforce with 'generous card spacing' keywords."]
};

export const onboardingSliderPrompt: PromptCard = {
  id: "ui-mobile-onboarding-019",
  slug: "app-onboarding-slider-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "App Onboarding Slider",
  result_first_title: "Engaging app onboarding carousel with vibrant illustrations and smooth transitions",
  short_description: "A sequence of introductory screens for mobile apps, featuring character illustrations, value propositions, and a skip button.",
  emotional_hook: "This prompt designs visual storytelling that turns the first encounter with an app into a pleasant excitement.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["app_launch", "user_education", "brand_intro", "onboarding_flow"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "app onboarding slider UI, [app_theme], [illustration_style] character illustrations, simple headline and description text, 'Next' and 'Skip' buttons, pagination dots, soft pastel colors, high-fidelity mobile design --ar 9:16 --v 6 --s 200",
  negative_prompt: "cluttered, scary colors, low resolution, photorealistic, messy text, complex backgrounds, dark and gloomy",
  aspect_ratio_tags: ["9:16", "mobile_ui", "onboarding"],
  variables: [
    {
      name: "app_theme",
      placeholder: "[app_theme]",
      default_value: "mindfulness and meditation app",
      recommended_values: ["fast-paced delivery service", "personal finance management", "creative social network", "pet care and adoption"],
      variable_behavior_note: "Changing the app theme optimizes illustration content and color palette accordingly, but maintains the clean slider layout.",
        name_ko: "app_theme",
        variable_behavior_note_ko: "Changing the app theme optimizes illustration content and color palette accordingly, but maintains the clean slider layout."
    },
    {
      name: "illustration_style",
      placeholder: "[illustration_style]",
      default_value: "minimalist vector",
      recommended_values: ["playful 3D claymorphism", "warm hand-drawn texture", "modern isometric", "abstract geometric shapes"],
      variable_behavior_note: "Changing the illustration style completely alters the overall app sentiment and impression on the target audience.",
        name_ko: "illustration_style",
        variable_behavior_note_ko: "Changing the illustration style completely alters the overall app sentiment and impression on the target audience."
    }
  ],
  why_this_works: [
    "Pagination dots are a key UX device that guides users through the entire process and lowers onboarding churn rates.",
    "Character illustrations sublimate dry app function descriptions into a friendly service experience."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Highly stable layout balance between illustrations and buttons.",
      note_ko: "Highly stable layout balance between illustrations and buttons."
}],
  comparison_notes: "Provides 'most-wanted' visuals by analyzing onboarding trends of top global apps.",
  variations: [{ label: "Dark Mode", prompt_delta: "Change to deep navy background with neon glow illustrations", use_case: "Gaming or security apps", pre_generated_asset_id: null,
      label_ko: "Dark Mode",
      use_case_ko: "Gaming or security apps"
}],
  common_failure_modes: ["Illustrations appearing too complex -> reinforce with 'simple shapes, focused subject' keywords."],
  seo: {
    primary_keyword: "app onboarding ui prompt",
    secondary_keywords: ["mobile intro slider design ai", "onboarding illustration prompt"],
    lsi_keywords: ["pagination dots", "value proposition"],
    meta_title: "App Onboarding Slider UI Prompt | Midjourney v6 Verified",
    meta_description: "Design engaging app onboarding screens with vibrant illustrations. Verified Midjourney v6 prompt for mobile UX.",
      meta_title_ko: "App Onboarding Slider UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design engaging app onboarding screens with vibrant illustrations. Verified Midjourney v6 prompt for mobile UX."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-onboarding-019-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Engaging mobile app onboarding slider interface",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "onboarding-019",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Engaging mobile app onboarding slider interface"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for onboarding UX flow." },
    title_ko: "App Onboarding Slider",
    result_first_title_ko: "Engaging app onboarding carousel with vibrant illustrations and smooth transitions",
    short_description_ko: "A sequence of introductory screens for mobile apps, featuring character illustrations, value propositions, and a skip button.",
    emotional_hook_ko: "This prompt designs visual storytelling that turns the first encounter with an app into a pleasant excitement.",
    comparison_notes_ko: "Provides 'most-wanted' visuals by analyzing onboarding trends of top global apps.",
    use_cases_ko: ["app_launch", "user_education", "brand_intro", "onboarding_flow"],
    why_this_works_ko: ["Pagination dots are a key UX device that guides users through the entire process and lowers onboarding churn rates.", "Character illustrations sublimate dry app function descriptions into a friendly service experience."],
    common_failure_modes_ko: ["Illustrations appearing too complex -> reinforce with 'simple shapes, focused subject' keywords."]
};

export const profileSettingsPrompt: PromptCard = {
  id: "ui-mobile-profile-020",
  slug: "mobile-profile-settings-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Mobile Profile & Settings",
  result_first_title: "Clean and organized mobile profile screen with account settings and activity summary",
  short_description: "A centralized user hub for mobile apps, featuring avatar management, account links, and preference toggles.",
  emotional_hook: "This prompt provides a space where users can most neatly summarize and manage their digital persona.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["profile_page", "account_mgmt", "user_settings", "social_app"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "mobile profile UI, [app_type], centered avatar circle, user name and bio, list of menu items with icons (Security, Notifications, Billing), toggle for dark mode, clean minimalist aesthetic, white space, high-fidelity UI --ar 9:16 --v 6 --s 150",
  negative_prompt: "cluttered, messy, dark (unless specified), aggressive colors, unreadable text, low quality, distorted avatar",
  aspect_ratio_tags: ["9:16", "mobile_ui", "profile"],
  variables: [
    {
      name: "app_type",
      placeholder: "[app_type]",
      default_value: "professional networking app",
      recommended_values: ["creative portfolio app", "fitness tracker", "language learning platform", "luxury shopping app"],
      variable_behavior_note: "Changing the app type modifies decorations around the profile image and sub-menu configurations, but maintains the user-centric layout.",
        name_ko: "app_type",
        variable_behavior_note_ko: "Changing the app type modifies decorations around the profile image and sub-menu configurations, but maintains the user-centric layout."
    }
  ],
  why_this_works: [
    "A centered avatar clearly reveals user identity and becomes the starting point of a personalized service experience.",
    "Icon-based lists offer faster cognitive speed than text-only lists and provide universal usability for global users."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Highly sophisticated spacing adjustment between profile cards and list items.",
      note_ko: "Highly sophisticated spacing adjustment between profile cards and list items."
}],
  comparison_notes: "Guarantees neatness reminiscent of Apple system settings or famous social app profile screens.",
  variations: [{ label: "Gamified", prompt_delta: "Add progress bars, level badges, and achievements section", use_case: "Learning or gaming apps", pre_generated_asset_id: null,
      label_ko: "Gamified",
      use_case_ko: "Learning or gaming apps"
}],
  common_failure_modes: ["Menu icons appearing too small -> add 'large accessible tap targets' keywords."],
  seo: {
    primary_keyword: "mobile profile ui prompt",
    secondary_keywords: ["account settings design ai", "user hub ui prompt"],
    lsi_keywords: ["avatar circle", "list menu ui"],
    meta_title: "Mobile Profile & Settings UI Prompt | Midjourney v6 Verified",
    meta_description: "Design clean mobile profile and account settings. Verified Midjourney v6 prompt for professional apps.",
      meta_title_ko: "Mobile Profile & Settings UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design clean mobile profile and account settings. Verified Midjourney v6 prompt for professional apps."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-profile-020-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean mobile profile and account settings UI",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "profile-020",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Clean mobile profile and account settings UI"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for profile information hierarchy." },
    title_ko: "Mobile Profile & Settings",
    result_first_title_ko: "Clean and organized mobile profile screen with account settings and activity summary",
    short_description_ko: "A centralized user hub for mobile apps, featuring avatar management, account links, and preference toggles.",
    emotional_hook_ko: "This prompt provides a space where users can most neatly summarize and manage their digital persona.",
    comparison_notes_ko: "Guarantees neatness reminiscent of Apple system settings or famous social app profile screens.",
    use_cases_ko: ["profile_page", "account_mgmt", "user_settings", "social_app"],
    why_this_works_ko: ["A centered avatar clearly reveals user identity and becomes the starting point of a personalized service experience.", "Icon-based lists offer faster cognitive speed than text-only lists and provide universal usability for global users."],
    common_failure_modes_ko: ["Menu icons appearing too small -> add 'large accessible tap targets' keywords."]
};

export const notificationsPrompt: PromptCard = {
  id: "ui-mobile-notif-021",
  slug: "mobile-notification-center-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Mobile Notification Center",
  result_first_title: "Elegant notification list with activity feed and time-stamped updates",
  short_description: "A comprehensive notification interface for mobile apps, featuring categorized alerts and action buttons.",
  emotional_hook: "This prompt vividly delivers only the truly important news to users among a flood of information.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["activity_feed", "alert_center", "social_notifications", "system_updates"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "mobile notification center UI, [feed_context], list of notification cards, time stamps (2m ago, 1h ago), action buttons (Accept, Dismiss), unread indicator dots, minimalist design, clean typography, soft shadows --ar 9:16 --v 6 --s 180",
  negative_prompt: "cluttered, messy layout, dark mode (unless specified), aggressive colors, blurry text, small buttons, unorganized feed",
  aspect_ratio_tags: ["9:16", "mobile_ui", "notifications"],
  variables: [
    {
      name: "feed_context",
      placeholder: "[feed_context]",
      default_value: "social media engagement feed",
      recommended_values: ["finance alert and transaction history", "smart home security log", "team collaboration update list", "e-learning task reminders"],
      variable_behavior_note: "Changing the feed context modifies notification card icons and highlighted text, but maintains the chronological list structure.",
        name_ko: "feed_context",
        variable_behavior_note_ko: "Changing the feed context modifies notification card icons and highlighted text, but maintains the chronological list structure."
    }
  ],
  why_this_works: [
    "Timestamps immediately inform information timeliness, helping users judge priorities.",
    "Unread indicator dots visually emphasize important unread information, inducing re-engagement."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Very natural representation of notification card shadows and borders.",
      note_ko: "Very natural representation of notification card shadows and borders."
}],
  comparison_notes: "Optimal for applying sophisticated variations of iOS/Android system notification aesthetics.",
  variations: [{ label: "Rich Media", prompt_delta: "Add small thumbnail images and expanded preview text to each card", use_case: "Content-rich social apps", pre_generated_asset_id: null,
      label_ko: "Rich Media",
      use_case_ko: "Content-rich social apps"
}],
  common_failure_modes: ["Cards appearing too flat -> add 'subtle elevation, card depth' keywords."],
  seo: {
    primary_keyword: "mobile notification ui prompt",
    secondary_keywords: ["activity feed design ai", "alert center prompt"],
    lsi_keywords: ["time stamps", "action buttons"],
    meta_title: "Mobile Notification Center UI Prompt | Midjourney v6 Verified",
    meta_description: "Design elegant mobile notification and activity feeds. Verified Midjourney v6 prompt for real-time alerts.",
      meta_title_ko: "Mobile Notification Center UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design elegant mobile notification and activity feeds. Verified Midjourney v6 prompt for real-time alerts."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-notif-021-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Elegant mobile notification center interface",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "notif-021",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Elegant mobile notification center interface"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for information grouping." },
    title_ko: "Mobile Notification Center",
    result_first_title_ko: "Elegant notification list with activity feed and time-stamped updates",
    short_description_ko: "A comprehensive notification interface for mobile apps, featuring categorized alerts and action buttons.",
    emotional_hook_ko: "This prompt vividly delivers only the truly important news to users among a flood of information.",
    comparison_notes_ko: "Optimal for applying sophisticated variations of iOS/Android system notification aesthetics.",
    use_cases_ko: ["activity_feed", "alert_center", "social_notifications", "system_updates"],
    why_this_works_ko: ["Timestamps immediately inform information timeliness, helping users judge priorities.", "Unread indicator dots visually emphasize important unread information, inducing re-engagement."],
    common_failure_modes_ko: ["Cards appearing too flat -> add 'subtle elevation, card depth' keywords."]
};

export const mapServicePrompt: PromptCard = {
  id: "ui-mobile-map-022",
  slug: "map-based-service-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Map-based Service Interface",
  result_first_title: "Intuitive map-based mobile interface with floating action buttons and service pins",
  short_description: "A location-first interface for ride-sharing, food delivery, or travel apps, featuring interactive maps and bottom sheets.",
  emotional_hook: "This prompt designs interactive maps that conveniently connect the user's daily life on top of actual geographical information.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["ride_sharing", "food_delivery", "travel_booking", "local_discovery"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "map-based mobile service UI, [service_type], interactive vector map background, floating search bar, custom service pins, bottom sheet with details, minimalist controls, high-end mobile app aesthetic --ar 9:16 --v 6 --s 250",
  negative_prompt: "cluttered map, low contrast, messy text, old style google maps, blurry pins, confusing navigation, dark mode (unless specified)",
  aspect_ratio_tags: ["9:16", "map_ui", "location_service"],
  variables: [
    {
      name: "service_type",
      placeholder: "[service_type]",
      default_value: "ride-sharing app like Uber",
      recommended_values: ["food delivery tracker", "luxury hotel discovery", "outdoor hiking trail navigator", "electric scooter rental service"],
      variable_behavior_note: "Changing the service type modifies pin icons and bottom sheet details, but maintains the map-centric layout.",
        name_ko: "service_type",
        variable_behavior_note_ko: "Changing the service type modifies pin icons and bottom sheet details, but maintains the map-centric layout."
    }
  ],
  why_this_works: [
    "Interactive vector maps increase intuitiveness by reducing information overload and focusing only on core points (pins).",
    "Bottom sheets are a mobile standard UX that efficiently utilizes screen space by showing additional information only when needed."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Exceptional map textures and three-dimensional feel of floating action buttons (FAB).",
      note_ko: "Exceptional map textures and three-dimensional feel of floating action buttons (FAB)."
}],
  comparison_notes: "Replicates the map UX sense of successful global services like Uber or Airbnb.",
  variations: [{ label: "Night View", prompt_delta: "Change map to dark theme with glowing neon routes and pins", use_case: "Nightlife or delivery apps", pre_generated_asset_id: null,
      label_ko: "Night View",
      use_case_ko: "Nightlife or delivery apps"
}],
  common_failure_modes: ["Map appearing too complex and blurry -> add 'simplified vector map, clean streets' keywords."],
  seo: {
    primary_keyword: "map based service ui prompt",
    secondary_keywords: ["ride sharing app design ai", "location service ui prompt"],
    lsi_keywords: ["service pins", "bottom sheet ui"],
    meta_title: "Map-based Service UI Prompt | Midjourney v6 Verified",
    meta_description: "Design intuitive map interfaces for mobile services. Verified Midjourney v6 prompt for ride-sharing and discovery apps.",
      meta_title_ko: "Map-based Service UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design intuitive map interfaces for mobile services. Verified Midjourney v6 prompt for ride-sharing and discovery apps."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-map-022-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Interactive mobile map service interface",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "map-022",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Interactive mobile map service interface"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for map-to-UI layering." },
    title_ko: "Map-based Service Interface",
    result_first_title_ko: "Intuitive map-based mobile interface with floating action buttons and service pins",
    short_description_ko: "A location-first interface for ride-sharing, food delivery, or travel apps, featuring interactive maps and bottom sheets.",
    emotional_hook_ko: "This prompt designs interactive maps that conveniently connect the user's daily life on top of actual geographical information.",
    comparison_notes_ko: "Replicates the map UX sense of successful global services like Uber or Airbnb.",
    use_cases_ko: ["ride_sharing", "food_delivery", "travel_booking", "local_discovery"],
    why_this_works_ko: ["Interactive vector maps increase intuitiveness by reducing information overload and focusing only on core points (pins).", "Bottom sheets are a mobile standard UX that efficiently utilizes screen space by showing additional information only when needed."],
    common_failure_modes_ko: ["Map appearing too complex and blurry -> add 'simplified vector map, clean streets' keywords."]
};

export const searchDiscoveryPrompt: PromptCard = {
  id: "ui-mobile-search-023",
  slug: "search-discovery-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Search & Discovery UI",
  result_first_title: "Smart mobile search interface with trending tags and personalized discovery feed",
  short_description: "A discovery-focused UI for content-heavy apps, featuring a prominent search bar and dynamic recommendation cards.",
  emotional_hook: "This prompt designs an intelligent discovery window that reads user tastes and presents the pleasure of endless discovery.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["content_discovery", "ecommerce_search", "streaming_app", "social_media"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "search and discovery mobile UI, [discovery_type], prominent search bar with voice icon, trending tags pills, grid of recommendation cards, personalized feed, minimalist clean style, soft shadows --ar 9:16 --v 6 --s 200",
  negative_prompt: "cluttered, messy layout, dark mode (unless specified), unreadable text, low quality, boring list, blurry images",
  aspect_ratio_tags: ["9:16", "mobile_ui", "search"],
  variables: [
    {
      name: "discovery_type",
      placeholder: "[discovery_type]",
      default_value: "short-form video platform",
      recommended_values: ["luxury fashion marketplace", "gourmet restaurant guide", "indie music discovery", "adventure travel blog"],
      variable_behavior_note: "Changing the discovery type modifies recommended card media and tag content, but maintains the discovery-centric layout.",
        name_ko: "discovery_type",
        variable_behavior_note_ko: "Changing the discovery type modifies recommended card media and tag content, but maintains the discovery-centric layout."
    }
  ],
  why_this_works: [
    "Trending tags pills lower the entry barrier to exploration by providing trending keywords before users even type a search.",
    "Personalized feeds induce immediate clicks by placing user-tailored content in card forms."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Very good proportion between search bar and tag buttons.",
      note_ko: "Very good proportion between search bar and tag buttons."
}],
  comparison_notes: "Provides the sense of 'endless exploration' given by discovery pages of Pinterest or YouTube.",
  variations: [{ label: "Dark mode", prompt_delta: "Change to dark theme with colorful glowing highlights", use_case: "Entertainment apps", pre_generated_asset_id: null,
      label_ko: "Dark mode",
      use_case_ko: "Entertainment apps"
}],
  common_failure_modes: ["Tags appearing too densely packed -> add 'spacious tag layout' keywords."],
  seo: {
    primary_keyword: "search discovery ui prompt",
    secondary_keywords: ["discovery feed design ai", "mobile search bar prompt"],
    lsi_keywords: ["trending tags", "recommendation cards"],
    meta_title: "Search & Discovery UI Prompt | Midjourney v6 Verified",
    meta_description: "Design smart mobile search and discovery feeds. Verified Midjourney v6 prompt for content apps.",
      meta_title_ko: "Search & Discovery UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design smart mobile search and discovery feeds. Verified Midjourney v6 prompt for content apps."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-search-023-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Smart mobile search and discovery interface",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "search-023",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Smart mobile search and discovery interface"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for search UX components." },
    title_ko: "Search & Discovery UI",
    result_first_title_ko: "Smart mobile search interface with trending tags and personalized discovery feed",
    short_description_ko: "A discovery-focused UI for content-heavy apps, featuring a prominent search bar and dynamic recommendation cards.",
    emotional_hook_ko: "This prompt designs an intelligent discovery window that reads user tastes and presents the pleasure of endless discovery.",
    comparison_notes_ko: "Provides the sense of 'endless exploration' given by discovery pages of Pinterest or YouTube.",
    use_cases_ko: ["content_discovery", "ecommerce_search", "streaming_app", "social_media"],
    why_this_works_ko: ["Trending tags pills lower the entry barrier to exploration by providing trending keywords before users even type a search.", "Personalized feeds induce immediate clicks by placing user-tailored content in card forms."],
    common_failure_modes_ko: ["Tags appearing too densely packed -> add 'spacious tag layout' keywords."]
};

export const chatInterfacePrompt: PromptCard = {
  id: "ui-mobile-chat-024",
  slug: "messaging-chat-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Messaging & Chat Interface",
  result_first_title: "Clean and real-time mobile chat interface with message bubbles and media attachments",
  short_description: "A messaging UI for social and business apps, featuring clear chat bubbles, typing indicators, and an input bar.",
  emotional_hook: "This prompt builds the most transparent and neat passage where conversation between people flows without obstruction.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["social_messaging", "customer_support", "team_chat", "dating_app"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "messaging chat mobile UI, [chat_context], round chat bubbles, distinct colors for sender and receiver, typing indicator, minimalist input bar with emoji and attachment icons, white space, clean typography --ar 9:16 --v 6 --s 150",
  negative_prompt: "cluttered, messy bubbles, dark mode (unless specified), aggressive colors, unreadable text, low quality, overlapping messages",
  aspect_ratio_tags: ["9:16", "mobile_ui", "chat"],
  variables: [
    {
      name: "chat_context",
      placeholder: "[chat_context]",
      default_value: "friendly social conversation with photos",
      recommended_values: ["professional customer support with tickets", "team project discussion with file links", "playful dating app with icebreakers", "medical consultation with secure data"],
      variable_behavior_note: "Changing the chat context modifies speech bubble content and attachment types, but maintains the clean structure that doesn't disrupt conversation flow.",
        name_ko: "chat_context",
        variable_behavior_note_ko: "Changing the chat context modifies speech bubble content and attachment types, but maintains the clean structure that doesn't disrupt conversation flow."
    }
  ],
  why_this_works: [
    "Round chat bubbles make rigid conversations feel softer and more human.",
    "Typing indicators are a small but powerful device that visualizes real-time presence and immerses users in the conversation."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Appropriate roundness of speech bubbles and shadow depth.",
      note_ko: "Appropriate roundness of speech bubbles and shadow depth."
}],
  comparison_notes: "Modernly reinterprets the 'concise conversation' aesthetics of iMessage or Telegram.",
  variations: [{ label: "Business Dark", prompt_delta: "Change to dark theme, professional slate colors, sharp corners for bubbles", use_case: "Enterprise messaging", pre_generated_asset_id: null,
      label_ko: "Business Dark",
      use_case_ko: "Enterprise messaging"
}],
  common_failure_modes: ["Messages appearing too densely packed -> add 'spacious chat history' keywords."],
  seo: {
    primary_keyword: "messaging chat ui prompt",
    secondary_keywords: ["mobile chat design ai", "customer support ui prompt"],
    lsi_keywords: ["chat bubbles", "typing indicator"],
    meta_title: "Messaging & Chat UI Prompt | Midjourney v6 Verified",
    meta_description: "Design clean and real-time mobile messaging interfaces. Verified Midjourney v6 prompt for social and business apps.",
      meta_title_ko: "Messaging & Chat UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design clean and real-time mobile messaging interfaces. Verified Midjourney v6 prompt for social and business apps."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-chat-024-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean mobile messaging chat interface",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "chat-024",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Clean mobile messaging chat interface"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for messaging UX layout." },
    title_ko: "Messaging & Chat Interface",
    result_first_title_ko: "Clean and real-time mobile chat interface with message bubbles and media attachments",
    short_description_ko: "A messaging UI for social and business apps, featuring clear chat bubbles, typing indicators, and an input bar.",
    emotional_hook_ko: "This prompt builds the most transparent and neat passage where conversation between people flows without obstruction.",
    comparison_notes_ko: "Modernly reinterprets the 'concise conversation' aesthetics of iMessage or Telegram.",
    use_cases_ko: ["social_messaging", "customer_support", "team_chat", "dating_app"],
    why_this_works_ko: ["Round chat bubbles make rigid conversations feel softer and more human.", "Typing indicators are a small but powerful device that visualizes real-time presence and immerses users in the conversation."],
    common_failure_modes_ko: ["Messages appearing too densely packed -> add 'spacious chat history' keywords."]
};

export const musicPlayerPrompt: PromptCard = {
  id: "ui-mobile-music-025",
  slug: "music-audio-player-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Music & Audio Player UI",
  result_first_title: "Vibrant mobile music player with large album art and glassmorphism controls",
  short_description: "An immersive audio player interface for music and podcast apps, focusing on media controls and visual aesthetics.",
  emotional_hook: "This prompt expands the emotion of sound heard by the ear into a visual thrill seen by the eye.",
  category: "ui_ux",
  vertical: "mobile_app",
  use_cases: ["music_streaming", "podcast_app", "audiobook_player", "media_controller"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "music player mobile UI, [audio_type], large square album art with soft glow, glassmorphism playback controls (Play, Pause, Skip), seek bar with time indicators, vibrant blurred background, minimalist aesthetic, high-fidelity UI --ar 9:16 --v 6 --s 300",
  negative_prompt: "cluttered, messy layout, low resolution art, unreadable text, dull colors, small buttons, generic style",
  aspect_ratio_tags: ["9:16", "mobile_ui", "music_player"],
  variables: [
    {
      name: "audio_type",
      placeholder: "[audio_type]",
      default_value: "ambient synthwave album",
      recommended_values: ["minimalist tech podcast", "classical piano collection", "modern urban hip-hop", "soothing nature sounds"],
      variable_behavior_note: "Changing the audio type synchronizes the album art style and background color mood accordingly, but maintains the core playback interface.",
        name_ko: "audio_type",
        variable_behavior_note_ko: "Changing the audio type synchronizes the album art style and background color mood accordingly, but maintains the core playback interface."
    }
  ],
  why_this_works: [
    "Large album art serves as the visual protagonist of the service, increasing user emotional satisfaction.",
    "Glassmorphism controls grant a sophisticated futuristic feel while creating visual consistency by projecting album art colors onto the background."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Fantastic glow effects and glass textures of the album art.",
      note_ko: "Fantastic glow effects and glass textures of the album art."
}],
  comparison_notes: "Provides visuals that surpass the minimalist yet sensual player designs of Spotify or Apple Music.",
  variations: [{ label: "Light Mode", prompt_delta: "Change to bright white background, clean lines, no glow, focus on typography", use_case: "Minimalist podcast player", pre_generated_asset_id: null,
      label_ko: "Light Mode",
      use_case_ko: "Minimalist podcast player"
}],
  common_failure_modes: ["Buttons indistinguishable from the background -> add 'high contrast controls' keywords."],
  seo: {
    primary_keyword: "music player ui prompt",
    secondary_keywords: ["audio app design ai", "media player ui prompt"],
    lsi_keywords: ["album art", "glassmorphism controls"],
    meta_title: "Music & Audio Player UI Prompt | Midjourney v6 Verified",
    meta_description: "Design immersive mobile music and audio players. Verified Midjourney v6 prompt for media apps.",
      meta_title_ko: "Music & Audio Player UI Prompt | Midjourney v6 Verified",
      meta_description_ko: "Design immersive mobile music and audio players. Verified Midjourney v6 prompt for media apps."
},
  asset_metadata: {
    hero_image: "/images/prompts/ui-mobile-music-025-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Immersive mobile music player interface",
    width: 1000,
    height: 1778,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "music-025",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Immersive mobile music player interface"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for media control UX." },
    title_ko: "Music & Audio Player UI",
    result_first_title_ko: "Vibrant mobile music player with large album art and glassmorphism controls",
    short_description_ko: "An immersive audio player interface for music and podcast apps, focusing on media controls and visual aesthetics.",
    emotional_hook_ko: "This prompt expands the emotion of sound heard by the ear into a visual thrill seen by the eye.",
    comparison_notes_ko: "Provides visuals that surpass the minimalist yet sensual player designs of Spotify or Apple Music.",
    use_cases_ko: ["music_streaming", "podcast_app", "audiobook_player", "media_controller"],
    why_this_works_ko: ["Large album art serves as the visual protagonist of the service, increasing user emotional satisfaction.", "Glassmorphism controls grant a sophisticated futuristic feel while creating visual consistency by projecting album art colors onto the background."],
    common_failure_modes_ko: ["Buttons indistinguishable from the background -> add 'high contrast controls' keywords."]
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
