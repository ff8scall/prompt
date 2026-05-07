import { PromptCard } from '../types';

export const claymorphismPrompt: PromptCard = {
  id: "trend-claymorphism-001",
  slug: "claymorphism-3d-character-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Claymorphism 3D Character Design",
  result_first_title: "Cute and playful claymorphism 3D characters with soft matte textures and plump shapes",
  short_description: "Trending clay-style 3D illustrations for modern web design, mobile apps, and brand mascots.",
  emotional_hook: "이 프롬프트는 차가운 디지털 화면 속에 말랑말랑한 클레이의 온기와 유머를 불어넣는다.",
  category: "trend",
  vertical: "3d_illustration",
  use_cases: ["web_illustration", "app_onboarding", "brand_mascot", "social_media_content"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[character_concept] in claymorphism 3D style, soft matte clay texture, plump rounded shapes, [color_palette], studio lighting with soft shadows, minimalist background, high-quality 3D render, octane render aesthetic --ar 1:1 --v 6 --s 250",
  negative_prompt: "photorealistic, glossy surfaces, high contrast, aggressive neon, messy details, low resolution, human figures, complex background",
  aspect_ratio_tags: ["1:1", "stylized", "3d_render"],
  variables: [
    {
      name: "character_concept",
      placeholder: "[character_concept]",
      default_value: "friendly robot holding a heart",
      recommended_values: ["cute animal explorer", "floating crypto coin with a face", "minimalist human character with large hands", "personified cloud with a smile"],
      variable_behavior_note: "캐릭터 컨셉을 바꾸면 디자인의 중심 대상이 변경되지만, 말랑한 질감과 단순한 기하학적 매력은 유지된다."
    }
  ],
  why_this_works: [
    "soft matte clay texture는 사용자에게 친근하고 포근한 인상을 주어 서비스의 진입 장벽을 낮춘다.",
    "plump rounded shapes는 현대 모바일 앱 디자인 트렌드인 'Joyful design'과 완벽하게 일치한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "질감의 매트함과 부드러운 전역 조명(Global Illumination) 표현이 우수함." }],
  comparison_notes: "블렌더(Blender) 없이도 전문가급 클레이 캐릭터를 즉시 생성할 수 있는 가장 빠른 방법이다.",
  variations: [{ label: "Glossy/Plastic", prompt_delta: "Change matte clay to glossy plastic with high reflections", use_case: "Toy-like aesthetic", pre_generated_asset_id: null }],
  common_failure_modes: ["질감이 너무 거칠게 나오는 경우 → 'smooth surfaces, fine clay' 키워드 추가"],
  seo: {
    primary_keyword: "claymorphism 3d prompt",
    secondary_keywords: ["3d character design ai", "clay style illustration"],
    lsi_keywords: ["matte texture", "octane render aesthetic"],
    meta_title: "Claymorphism 3D Character Prompt | Midjourney v6 Trend",
    meta_description: "Create trendy clay-style characters for web and apps. Verified Midjourney v6 prompt for modern 3D illustrations."
  },
  asset_metadata: {
    hero_image: "/images/prompts/trend-claymorphism-001-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Playful claymorphism 3D robot character",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "clay-001",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for trendy web illustration." }
};

export const futuristicTypographyPrompt: PromptCard = {
  id: "trend-typography-002",
  slug: "futuristic-typographic-art-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Futuristic Typographic Art",
  result_first_title: "Experimental typography with liquid metal and glowing glass textures",
  short_description: "Cutting-edge typographic compositions for posters, branding, and motion graphics backgrounds.",
  emotional_hook: "이 프롬프트는 언어라는 기호가 해체되어 빛과 질감의 시각적 선율로 재탄생하는 찰나를 포착한다.",
  category: "trend",
  vertical: "typography",
  use_cases: ["poster_design", "brand_identity", "experimental_art", "motion_graphics"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "experimental typography, [letter_concept], liquid chrome and frosted glass texture, complex intertwined forms, [lighting_mood], volumetric lighting, abstract geometric composition, ultra-modern aesthetic --ar 3:4 --v 6 --s 400",
  negative_prompt: "traditional fonts, readable text, simple layout, photorealistic, human figures, colorful chaos, low quality, blurred edges",
  aspect_ratio_tags: ["3:4", "typography", "experimental"],
  variables: [
    {
      name: "letter_concept",
      placeholder: "[letter_concept]",
      default_value: "abstract letter 'X' with organic curves",
      recommended_values: ["futuristic 'A' with sharp metallic edges", "floating 'O' made of light filaments", "intertwined 'M' with translucent layers", "minimalist 'S' in zero gravity"],
      variable_behavior_note: "글자 컨셉을 바꾸면 중심 형태가 변경되지만, 액체 금속과 유리 질감이 어우러진 실험적 미학은 유지된다."
    }
  ],
  why_this_works: [
    "liquid chrome and frosted glass는 현재 가장 유행하는 'Y2K 퓨처리즘'의 핵심 소재로 세련된 시각적 충격을 준다.",
    "ar 3:4 비율은 포스터 디자인에 적합한 구도를 형성하여 즉각적인 상업적 활용이 가능하다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "비정형적 형태와 복잡한 질감 겹침 표현이 우수함." }],
  comparison_notes: "가독성보다는 예술적 상징성을 추구하는 그래픽 디자이너를 위한 최상의 소스를 제공한다.",
  variations: [{ label: "Iridescent Burn", prompt_delta: "Add iridescent heat-map colors and oil-slick reflections", use_case: "Music album art", pre_generated_asset_id: null }],
  common_failure_modes: ["형태가 너무 단순하게 나오는 경우 → 'intricate geometric complexity' 키워드 추가"],
  seo: {
    primary_keyword: "futuristic typography prompt",
    secondary_keywords: ["experimental art ai", "liquid metal typography"],
    lsi_keywords: ["frosted glass texture", "volumetric lighting"],
    meta_title: "Futuristic Typographic Art Prompt | Midjourney v6 Verified",
    meta_description: "Generate cutting-edge typographic art with liquid metal and glass. Verified Midjourney v6 prompt for designers."
  },
  asset_metadata: {
    hero_image: "/images/prompts/trend-typography-002-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Experimental futuristic liquid metal typography",
    width: 900,
    height: 1200,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "typo-002",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for complex texture overlay." }
};

export const hyperSurrealismPrompt: PromptCard = {
  id: "trend-surrealism-003",
  slug: "hyper-surrealism-digital-art-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Hyper-Surrealism Digital Art",
  result_first_title: "Mind-bending hyper-surrealist digital art with extreme detail and dreamlike logic",
  short_description: "High-concept surrealist illustrations that push the boundaries of AI imagination and visual storytelling.",
  emotional_hook: "이 프롬프트는 현실의 중력이 멈추고, 잠재의식 속 가장 깊은 꿈의 파편들이 선명한 질감으로 부활하는 경험을 제공한다.",
  category: "trend",
  vertical: "digital_art",
  use_cases: ["concept_art", "editorial_illustration", "art_exhibition", "creative_inspiration"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "hyper-surrealist digital art, [surreal_concept], extreme hyper-detail, cinematic atmosphere, [lighting_style], Salvador Dali meets modern 3D art, illogical spatial composition, 8k resolution --ar 16:9 --v 6 --s 500",
  negative_prompt: "normal reality, boring composition, low detail, amateur art, simple background, photorealistic portrait, standard photography",
  aspect_ratio_tags: ["16:9", "surrealism", "digital_art"],
  variables: [
    {
      name: "surreal_concept",
      placeholder: "[surreal_concept]",
      default_value: "a grand piano made of ocean waves in a desert",
      recommended_values: ["floating islands shaped like human brains", "a clock melting into a forest of glass butterflies", "a giant eye reflected in a liquid mercury lake", "staircase leading into a nebula inside a library"],
      variable_behavior_note: "초현실적 컨셉을 바꾸면 작품의 서사는 완전히 달라지지만, 꿈속을 걷는 듯한 기묘한 공간감과 극도로 세밀한 묘사는 유지된다."
    }
  ],
  why_this_works: [
    "illogical spatial composition은 AI가 현실의 물리 법칙을 무시하고 오직 시각적 경이로움에만 집중하도록 유도한다.",
    "high stylize(s 500)는 Midjourney의 창의성을 극대화하여 인간이 상상하기 힘든 비주얼을 생성한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "비유적이고 추상적인 개념의 시각화 능력이 압도적임." }],
  comparison_notes: "AI 아트의 본질인 '상상력의 확장'을 가장 잘 보여주는 프롬프트 체계이다.",
  variations: [{ label: "Dark Macabre", prompt_delta: "Change lighting to dark and moody, add gothic surrealist elements", use_case: "Horror concept art", pre_generated_asset_id: null }],
  common_failure_modes: ["구성이 너무 평범한 경우 → 'paradoxical geometry' 키워드 추가"],
  seo: {
    primary_keyword: "hyper-surrealism digital art prompt",
    secondary_keywords: ["surrealist ai art", "creative concept art prompt"],
    lsi_keywords: ["dreamlike logic", "illogical composition"],
    meta_title: "Hyper-Surrealism Digital Art Prompt | Midjourney v6 Verified",
    meta_description: "Generate mind-bending surrealist art with extreme detail. Verified Midjourney v6 prompt for high-concept illustrations."
  },
  asset_metadata: {
    hero_image: "/images/prompts/trend-surrealism-003-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Hyper-surrealist digital art of a wave piano",
    width: 1600,
    height: 900,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "surreal-003",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for high artistic creativity." }
};

export const retroFuturismPrompt: PromptCard = {
  id: "trend-retrofuturism-004",
  slug: "retro-futurism-graphic-poster-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Retro-Futurism Graphic Poster",
  result_first_title: "Vintage 1960s space age aesthetic combined with modern digital graphics",
  short_description: "Nostalgic yet futuristic poster designs inspired by mid-century sci-fi and space exploration.",
  emotional_hook: "이 프롬프트는 과거의 인류가 꿈꿨던 낙관적인 미래, 그 순수한 호기심과 거대한 우주에 대한 동경을 시각화한다.",
  category: "trend",
  vertical: "graphic_design",
  use_cases: ["poster_art", "merchandise_design", "editorial_graphic", "brand_campaign"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "retro-futurism poster art, [space_age_concept], 1960s sci-fi book cover aesthetic, vibrant flat colors, halftone dot patterns, sleek chrome rockets, orbital geometry, vintage film texture --ar 2:3 --v 6 --s 200",
  negative_prompt: "photorealistic, modern 3D render, dark gritty sci-fi, blurry, complex lighting, human faces, contemporary technology",
  aspect_ratio_tags: ["2:3", "retro_futurism", "poster"],
  variables: [
    {
      name: "space_age_concept",
      placeholder: "[space_age_concept]",
      default_value: "utopian city on Mars with glass domes",
      recommended_values: ["interstellar travel through a colorful nebula", "monorail passing through a forest of tomorrow", "sleek chrome spaceship entering an orbital ring", "futuristic communication device with floating screens"],
      variable_behavior_note: "미래 컨셉을 바꾸면 포스터의 주제가 변경되지만, 60년대 특유의 낙관적인 컬러 팔레트와 평면적인 그래픽 스타일은 유지된다."
    }
  ],
  why_this_works: [
    "halftone dot patterns와 vibrant flat colors는 실제 빈티지 인쇄물의 질감을 재현하여 독특한 미학적 매력을 준다.",
    "sleek chrome rockets는 레트로 퓨처리즘의 아이코닉한 요소로, 시대를 초월한 세련됨을 전달한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "플랫한 그래픽 디자인과 빈티지 색감 재현력이 탁월함." }],
  comparison_notes: "굿즈 디자인이나 레트로 감성의 마케팅 캠페인에 가장 완벽한 시각적 도구를 제공한다.",
  variations: [{ label: "Bauhaus Mix", prompt_delta: "Add Bauhaus geometric shapes and primary colors red blue yellow", use_case: "Minimalist posters", pre_generated_asset_id: null }],
  common_failure_modes: ["너무 사실적인 사진처럼 나오는 경우 → 'graphic flat illustration' 키워드 보강"],
  seo: {
    primary_keyword: "retro-futurism poster prompt",
    secondary_keywords: ["vintage sci-fi art ai", "space age aesthetic prompt"],
    lsi_keywords: ["halftone patterns", "flat color illustration"],
    meta_title: "Retro-Futurism Graphic Poster Prompt | Midjourney v6 Verified",
    meta_description: "Create nostalgic space age posters with verified Midjourney v6 prompt. Includes vintage colors and halftone textures."
  },
  asset_metadata: {
    hero_image: "/images/prompts/trend-retrofuturism-004-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Vintage retro-futurism space poster",
    width: 1000,
    height: 1500,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "retro-004",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for vintage graphic style." }
};

export const archVizPrompt: PromptCard = {
  id: "trend-archviz-005",
  slug: "parametric-architecture-viz-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Parametric Architecture Visualization",
  result_first_title: "Breathtaking parametric building design with flowing organic forms and futuristic materials",
  short_description: "High-end architectural visualization for vanguard building designs and urban planning concepts.",
  emotional_hook: "이 프롬프트는 딱딱한 콘크리트의 한계를 넘어, 생명체처럼 유연하게 흐르는 미래 건축의 새로운 지평을 보여준다.",
  category: "trend",
  vertical: "architecture",
  use_cases: ["architectural_concept", "urban_planning", "interior_design", "real_estate_marketing"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "parametric architecture design, [building_context], Zaha Hadid style, flowing organic curves, [material_details], cinematic exterior lighting, lush integrated greenery, futuristic urban environment, hyper-realistic --ar 16:9 --v 6 --s 300",
  negative_prompt: "traditional boxy buildings, low detail, simple shapes, 2D drawing, blueprint, crowded city, daytime harsh sun, low quality render",
  aspect_ratio_tags: ["16:9", "architecture", "viz"],
  variables: [
    {
      name: "building_context",
      placeholder: "[building_context]",
      default_value: "grand cultural center with skeletal white structures",
      recommended_values: ["luxury oceanfront villa with glass bridges", "sustainable vertical garden skyscraper", "modern airport terminal with light-filtering roof", "minimalist museum inside a mountain"],
      variable_behavior_note: "건축물의 용도를 바꾸면 구조적 복잡성과 공간적 맥락이 변경되지만, 비정형(Parametric) 건축 특유의 유려한 곡선 미학은 유지된다."
    },
    {
      name: "material_details",
      placeholder: "[material_details]",
      default_value: "self-cleaning white polymer and solar-responsive glass",
      recommended_values: ["iridescent carbon fiber and polished wood", "translucent bio-plastics and vertical moss walls", "weathered copper and smart glass panels", "3D printed concrete with organic textures"],
      variable_behavior_note: "소재를 바꾸면 건축물의 질감과 지속 가능성 무드가 달라진다. 화이트 폴리머는 순수함, 카본 파이버는 기술적 정교함을 강조한다."
    }
  ],
  why_this_works: [
    "Zaha Hadid style은 곡선의 미학을 극대화하여 현대 건축의 가장 아방가르드한 측면을 즉각적으로 소환한다.",
    "integrated greenery는 환경 친화적이고 미래지향적인 도시 비전을 제시하여 높은 시각적 설득력을 가진다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "복잡한 기하학적 구조와 빛의 산란 표현이 매우 사실적임." }],
  comparison_notes: "3D 렌더링 툴(V-Ray, Lumion)의 한계를 뛰어넘는 예술적 영감과 시각적 충격을 제공한다.",
  variations: [{ label: "Interior View", prompt_delta: "Change focus to interior space, flowing atrium, natural light filtering from above", use_case: "Interior design concepts", pre_generated_asset_id: null }],
  common_failure_modes: ["건축물이 너무 붕 떠 보이는 경우 → 'grounded composition, heavy foundations' 키워드 보강"],
  seo: {
    primary_keyword: "parametric architecture prompt",
    secondary_keywords: ["modern building design ai", "archviz prompt midjourney"],
    lsi_keywords: ["Zaha Hadid style", "organic curves"],
    meta_title: "Parametric Architecture Viz Prompt | Midjourney v6 Verified",
    meta_description: "Generate breathtaking futuristic building designs. Verified Midjourney v6 prompt for architects and designers."
  },
  asset_metadata: {
    hero_image: "/images/prompts/trend-archviz-005-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Futuristic parametric white building design",
    width: 1600,
    height: 900,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "arch-005",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for architectural accuracy and lighting." }
};

export const trendPrompts: PromptCard[] = [
  claymorphismPrompt,
  futuristicTypographyPrompt,
  hyperSurrealismPrompt,
  retroFuturismPrompt,
  archVizPrompt
];
