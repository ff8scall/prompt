import { PromptCard } from '../types';

export const claymorphismPrompt: PromptCard = {
  id: "trend-claymorphism-001",
  slug: "claymorphism-3d-character-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Claymorphism 3D Character Design",
  title_ko: "클레이모피즘 3D 캐릭터 디자인",
  result_first_title: "Cute and playful claymorphism 3D characters with soft matte textures and plump shapes",
  result_first_title_ko: "부드러운 매트 질감과 통통한 형태가 돋보이는 귀엽고 장난기 가득한 클레이모피즘 3D 캐릭터",
  short_description: "Trending clay-style 3D illustrations for modern web design, mobile apps, and brand mascots.",
  short_description_ko: "현대적인 웹 디자인, 모바일 앱 및 브랜드 마스코트를 위한 트렌디한 클레이 스타일 3D 일러스트레이션입니다.",
  emotional_hook: "This prompt breathes the warmth and humor of squishy clay into the cold digital screen.",
  emotional_hook_ko: "이 프롬프트는 차가운 디지털 화면에 말랑말랑한 점토의 따뜻함과 유머를 불어넣습니다.",
  category: "trend",
  vertical: "3d_illustration",
  use_cases: ["web_illustration", "app_onboarding", "brand_mascot", "social_media_content"],
  use_cases_ko: ["웹 일러스트레이션", "앱 온보딩", "브랜드 마스코트", "소셜 미디어 콘텐츠"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[character_concept] in claymorphism 3D style, soft matte clay texture, plump rounded shapes, [color_palette], studio lighting with soft shadows, minimalist background, high-quality 3D render, octane render aesthetic --ar 1:1 --v 6 --s 250",
  negative_prompt: "photorealistic, glossy surfaces, high contrast, aggressive neon, messy details, low resolution, human figures, complex background",
  aspect_ratio_tags: ["1:1", "stylized", "3d_render"],
  variables: [
    {
      name: "character_concept",
      name_ko: "캐릭터 컨셉",
      placeholder: "[character_concept]",
      default_value: "friendly robot holding a heart",
      recommended_values: ["cute animal explorer", "floating crypto coin with a face", "minimalist human character with large hands", "personified cloud with a smile"],
      variable_behavior_note: "Changing the character concept updates the subject while maintaining the soft texture and simple geometric charm.",
      variable_behavior_note_ko: "캐릭터 컨셉을 변경하면 부드러운 질감과 단순한 기하학적 매력을 유지하면서 피사체가 업데이트됩니다."
    }
  ],
  why_this_works: [
    "The soft matte clay texture creates a friendly and inviting impression, lowering the barrier to entry for users.",
    "Plump rounded shapes align perfectly with the 'Joyful design' trend in modern mobile app aesthetics."
  ],
  why_this_works_ko: [
    "부드러운 매트 클레이 질감은 친근하고 매력적인 인상을 주어 사용자들의 진입 장벽을 낮춰줍니다.",
    "통통하고 둥근 모양은 현대 모바일 앱 미학의 '조이풀 디자인(Joyful design)' 트렌드와 완벽하게 일치합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Excellent at rendering matte textures and soft Global Illumination (GI).",
      note_ko: "매트한 질감과 부드러운 전역 조명(GI) 표현이 뛰어납니다."
    }
  ],
  comparison_notes: "The fastest way to generate professional clay characters without needing Blender expertise.",
  comparison_notes_ko: "Blender 숙련도 없이도 전문적인 클레이 캐릭터를 생성할 수 있는 가장 빠른 방법입니다.",
  variations: [
    {
      label: "Glossy/Plastic",
      label_ko: "글로시/플라스틱",
      prompt_delta: "Change matte clay to glossy plastic with high reflections",
      use_case: "Toy-like aesthetic",
      use_case_ko: "장난감 같은 미학",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["If texture appears too grainy -> add 'smooth surfaces, fine clay' keywords."],
  common_failure_modes_ko: ["질감이 너무 거칠게 보임 -> 'smooth surfaces, fine clay' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "claymorphism 3d prompt",
    secondary_keywords: ["3d character design ai", "clay style illustration"],
    lsi_keywords: ["matte texture", "octane render aesthetic"],
    meta_title: "Claymorphism 3D Character Prompt | Midjourney v6 Trend",
    meta_title_ko: "클레이모피즘 3D 캐릭터 프롬프트 | 미드저니 v6 트렌드",
    meta_description: "Create trendy clay-style characters for web and apps. Verified Midjourney v6 prompt for modern 3D illustrations.",
    meta_description_ko: "웹과 앱을 위한 트렌디한 클레이 스타일 캐릭터를 제작하세요. 현대적인 3D 일러스트레이션을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/trend-claymorphism-001-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Playful claymorphism 3D robot character",
    alt_text_ko: "장난기 가득한 클레이모피즘 3D 로봇 캐릭터",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "미래지향적 타이포그래피 아트",
  result_first_title: "Experimental typography with liquid metal and glowing glass textures",
  result_first_title_ko: "액체 금속과 빛나는 유리 질감이 어우러진 실험적 타이포그래피",
  short_description: "Cutting-edge typographic compositions for posters, branding, and motion graphics backgrounds.",
  short_description_ko: "포스터, 브랜딩, 모션 그래픽 배경을 위한 최첨단 타이포그래피 구성 프롬프트입니다.",
  emotional_hook: "This prompt captures the moment where language deconstructs into a visual melody of light and texture.",
  emotional_hook_ko: "이 프롬프트는 언어가 빛과 질감의 시각적 멜로디로 해체되는 순간을 포착합니다.",
  category: "trend",
  vertical: "typography",
  use_cases: ["poster_design", "brand_identity", "experimental_art", "motion_graphics"],
  use_cases_ko: ["포스터 디자인", "브랜드 아이덴티티", "실험 예술", "모션 그래픽"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "experimental typography, [letter_concept], liquid chrome and frosted glass texture, complex intertwined forms, [lighting_mood], volumetric lighting, abstract geometric composition, ultra-modern aesthetic --ar 3:4 --v 6 --s 400",
  negative_prompt: "traditional fonts, readable text, simple layout, photorealistic, human figures, colorful chaos, low quality, blurred edges",
  aspect_ratio_tags: ["3:4", "typography", "experimental"],
  variables: [
    {
      name: "letter_concept",
      name_ko: "글자 컨셉",
      placeholder: "[letter_concept]",
      default_value: "abstract letter 'X' with organic curves",
      recommended_values: ["futuristic 'A' with sharp metallic edges", "floating 'O' made of light filaments", "intertwined 'M' with translucent layers", "minimalist 'S' in zero gravity"],
      variable_behavior_note: "Changing the letter concept modifies the core form while maintaining the avant-garde liquid metal and glass aesthetic.",
      variable_behavior_note_ko: "글자 컨셉을 변경하면 아방가르드한 액체 금속 및 유리 미학을 유지하면서 핵심 형태가 수정됩니다."
    }
  ],
  why_this_works: [
    "Liquid chrome and frosted glass are core materials of the trending 'Y2K Futurism,' providing a sophisticated visual impact.",
    "The 3:4 aspect ratio creates a composition ideal for poster design, allowing for immediate commercial application."
  ],
  why_this_works_ko: [
    "리퀴드 크롬과 프로스테드 글래스는 트렌디한 'Y2K 퓨처리즘'의 핵심 소재로, 세련된 시각적 충격을 제공합니다.",
    "3:4 종횡비는 포스터 디자인에 이상적인 구성을 만들어 즉각적인 상업적 활용을 가능하게 합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Superb at rendering amorphous forms and complex texture layering.",
      note_ko: "무정형의 형태와 복잡한 질감 레이어링 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Provides the ultimate source for graphic designers seeking artistic symbolism over legibility.",
  comparison_notes_ko: "가독성보다 예술적 상징성을 추구하는 그래픽 디자이너들을 위한 최고의 리소스를 제공합니다.",
  variations: [
    {
      label: "Iridescent Burn",
      label_ko: "이리데슨트 번",
      prompt_delta: "Add iridescent heat-map colors and oil-slick reflections",
      use_case: "Music album art",
      use_case_ko: "음악 앨범 아트",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["If form appears too simple -> add 'intricate geometric complexity' keywords."],
  common_failure_modes_ko: ["형태가 너무 단순해 보임 -> 'intricate geometric complexity' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "futuristic typography prompt",
    secondary_keywords: ["experimental art ai", "liquid metal typography"],
    lsi_keywords: ["frosted glass texture", "volumetric lighting"],
    meta_title: "Futuristic Typographic Art Prompt | Midjourney v6 Verified",
    meta_title_ko: "미래지향적 타이포그래피 아트 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate cutting-edge typographic art with liquid metal and glass. Verified Midjourney v6 prompt for designers.",
    meta_description_ko: "액체 금속과 유리를 사용한 최첨단 타이포그래피 아트를 생성하세요. 디자이너를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/trend-typography-002-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Experimental futuristic liquid metal typography",
    alt_text_ko: "실험적인 미래지향적 액체 금속 타이포그래피",
    width: 900,
    height: 1200,
    format: "webp",
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
  title_ko: "하이퍼 초현실주의 디지털 아트",
  result_first_title: "Mind-bending hyper-surrealist digital art with extreme detail and dreamlike logic",
  result_first_title_ko: "극한의 디테일과 꿈 같은 논리가 어우러진 경이로운 하이퍼 초현실주의 디지털 아트",
  short_description: "High-concept surrealist illustrations that push the boundaries of AI imagination and visual storytelling.",
  short_description_ko: "AI의 상상력과 시각적 스토리텔링의 한계를 밀어붙이는 하이컨셉 초현실주의 일러스트레이션입니다.",
  emotional_hook: "This prompt offers an experience where gravity ceases, and the deepest fragments of the subconscious awaken in vivid texture.",
  emotional_hook_ko: "이 프롬프트는 중력이 멈추고 잠재의식의 가장 깊은 파편들이 생생한 질감으로 깨어나는 경험을 선사합니다.",
  category: "trend",
  vertical: "digital_art",
  use_cases: ["concept_art", "editorial_illustration", "art_exhibition", "creative_inspiration"],
  use_cases_ko: ["컨셉 아트", "에디토리얼 일러스트레이션", "아트 전시회", "창의적 영감"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "hyper-surrealist digital art, [surreal_concept], extreme hyper-detail, cinematic atmosphere, [lighting_style], Salvador Dali meets modern 3D art, illogical spatial composition, 8k resolution --ar 16:9 --v 6 --s 500",
  negative_prompt: "normal reality, boring composition, low detail, amateur art, simple background, photorealistic portrait, standard photography",
  aspect_ratio_tags: ["16:9", "surrealism", "digital_art"],
  variables: [
    {
      name: "surreal_concept",
      name_ko: "초현실적 컨셉",
      placeholder: "[surreal_concept]",
      default_value: "a grand piano made of ocean waves in a desert",
      recommended_values: ["floating islands shaped like human brains", "a clock melting into a forest of glass butterflies", "a giant eye reflected in a liquid mercury lake", "staircase leading into a nebula inside a library"],
      variable_behavior_note: "Changing the surreal concept completely shifts the narrative while maintaining the uncanny sense of space and extreme detail.",
      variable_behavior_note_ko: "초현실적 컨셉을 변경하면 기묘한 공간감과 극한의 디테일을 유지하면서 서사가 완전히 바뀝니다."
    }
  ],
  why_this_works: [
    "Illogical spatial composition induces the AI to ignore physics and focus purely on visual wonder.",
    "High stylize (s 500) maximizes Midjourney's creativity to generate visuals beyond human imagination."
  ],
  why_this_works_ko: [
    "비논리적 공간 구성은 AI가 물리학을 무시하고 순수한 시각적 경이로움에 집중하도록 유도합니다.",
    "높은 스타일라이즈(s 500)는 미드저니의 창의성을 극대화하여 인간의 상상력을 초월하는 비주얼을 생성합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Overwhelming ability to visualize metaphorical and abstract concepts.",
      note_ko: "은유적이고 추상적인 개념을 시각화하는 능력이 압도적입니다."
    }
  ],
  comparison_notes: "A framework that best demonstrates the essence of AI art: the expansion of imagination.",
  comparison_notes_ko: "상상력의 확장이라는 AI 아트의 정수를 가장 잘 보여주는 프레임워크입니다.",
  variations: [
    {
      label: "Dark Macabre",
      label_ko: "다크 마카브르",
      prompt_delta: "Change lighting to dark and moody, add gothic surrealist elements",
      use_case: "Horror concept art",
      use_case_ko: "공포 컨셉 아트",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["If composition appears too mundane -> add 'paradoxical geometry' keywords."],
  common_failure_modes_ko: ["구도가 너무 평범해 보임 -> 'paradoxical geometry' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "hyper-surrealism digital art prompt",
    secondary_keywords: ["surrealist ai art", "creative concept art prompt"],
    lsi_keywords: ["dreamlike logic", "illogical composition"],
    meta_title: "Hyper-Surrealism Digital Art Prompt | Midjourney v6 Verified",
    meta_title_ko: "하이퍼 초현실주의 디지털 아트 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate mind-bending surrealist art with extreme detail. Verified Midjourney v6 prompt for high-concept illustrations.",
    meta_description_ko: "극한의 디테일로 경이로운 초현실주의 아트를 생성하세요. 하이컨셉 일러스트레이션을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/trend-surrealism-003-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Hyper-surrealist digital art of a wave piano",
    alt_text_ko: "파도 피아노가 있는 하이퍼 초현실주의 디지털 아트",
    width: 1600,
    height: 900,
    format: "webp",
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
  title_ko: "레트로 퓨처리즘 그래픽 포스터",
  result_first_title: "Vintage 1960s space age aesthetic combined with modern digital graphics",
  result_first_title_ko: "빈티지 1960년대 우주 시대 미학이 현대적 디지털 그래픽과 결합된 스타일",
  short_description: "Nostalgic yet futuristic poster designs inspired by mid-century sci-fi and space exploration.",
  short_description_ko: "미드센추리 SF와 우주 탐험에서 영감을 받은 노스탤지어적이면서도 미래지향적인 포스터 디자인입니다.",
  emotional_hook: "This prompt visualizes the optimistic future dreamt by the past—pure curiosity and yearning for the vast cosmos.",
  emotional_hook_ko: "이 프롬프트는 과거가 꿈꿨던 낙관적인 미래, 즉 광활한 우주에 대한 순수한 호기심과 동경을 시각화합니다.",
  category: "trend",
  vertical: "graphic_design",
  use_cases: ["poster_art", "merchandise_design", "editorial_graphic", "brand_campaign"],
  use_cases_ko: ["포스터 아트", "머천다이즈 디자인", "에디토리얼 그래픽", "브랜드 캠페인"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "retro-futurism poster art, [space_age_concept], 1960s sci-fi book cover aesthetic, vibrant flat colors, halftone dot patterns, sleek chrome rockets, orbital geometry, vintage film texture --ar 2:3 --v 6 --s 200",
  negative_prompt: "photorealistic, modern 3D render, dark gritty sci-fi, blurry, complex lighting, human faces, contemporary technology",
  aspect_ratio_tags: ["2:3", "retro_futurism", "poster"],
  variables: [
    {
      name: "space_age_concept",
      name_ko: "스페이스 에이지 컨셉",
      placeholder: "[space_age_concept]",
      default_value: "utopian city on Mars with glass domes",
      recommended_values: ["interstellar travel through a colorful nebula", "monorail passing through a forest of tomorrow", "sleek chrome spaceship entering an orbital ring", "futuristic communication device with floating screens"],
      variable_behavior_note: "Changing the concept updates the theme while maintaining the signature optimistic 60s color palette and flat graphic style.",
      variable_behavior_note_ko: "컨셉을 변경하면 특유의 낙관적인 60년대 컬러 팔레트와 플랫 그래픽 스타일을 유지하면서 테마가 업데이트됩니다."
    }
  ],
  why_this_works: [
    "Halftone dot patterns and vibrant flat colors recreate the texture of vintage prints for a unique aesthetic charm.",
    "Sleek chrome rockets are iconic elements of retro-futurism, delivering timeless sophistication."
  ],
  why_this_works_ko: [
    "하프톤 도트 패턴과 생동감 넘치는 플랫 컬러는 빈티지 인쇄물의 질감을 재현하여 독특한 미학적 매력을 선사합니다.",
    "매끄러운 크롬 로켓은 레트로 퓨처리즘의 아이코닉한 요소로, 시대를 초월한 세련미를 전달합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional at flat graphic design and vintage color reproduction.",
      note_ko: "플랫 그래픽 디자인과 빈티지 색상 재현 능력이 뛰어납니다."
    }
  ],
  comparison_notes: "Provides the perfect visual tools for merchandise design or nostalgic marketing campaigns.",
  comparison_notes_ko: "머천다이즈 디자인이나 노스탤지어 마케팅 캠페인을 위한 완벽한 시각적 도구를 제공합니다.",
  variations: [
    {
      label: "Bauhaus Mix",
      label_ko: "바우하우스 믹스",
      prompt_delta: "Add Bauhaus geometric shapes and primary colors red blue yellow",
      use_case: "Minimalist posters",
      use_case_ko: "미니멀리스트 포스터",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["If result appears too photographic -> reinforce with 'graphic flat illustration' keywords."],
  common_failure_modes_ko: ["결과물이 너무 사진처럼 보임 -> 'graphic flat illustration' 키워드로 보완하세요."],
  seo: {
    primary_keyword: "retro-futurism poster prompt",
    secondary_keywords: ["vintage sci-fi art ai", "space age aesthetic prompt"],
    lsi_keywords: ["halftone patterns", "flat color illustration"],
    meta_title: "Retro-Futurism Graphic Poster Prompt | Midjourney v6 Verified",
    meta_title_ko: "레트로 퓨처리즘 그래픽 포스터 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Create nostalgic space age posters with verified Midjourney v6 prompt. Includes vintage colors and halftone textures.",
    meta_description_ko: "검증된 미드저니 v6 프롬프트로 향수 어린 우주 시대 포스터를 제작하세요. 빈티지 색상과 하프톤 질감이 포함되어 있습니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/trend-retrofuturism-004-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Vintage retro-futurism space poster",
    alt_text_ko: "빈티지 레트로 퓨처리즘 우주 포스터",
    width: 1000,
    height: 1500,
    format: "webp",
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
  title_ko: "파라메트릭 건축 시각화",
  result_first_title: "Breathtaking parametric building design with flowing organic forms and futuristic materials",
  result_first_title_ko: "유려한 유기적 형태와 미래지향적 소재가 돋보이는 경이로운 파라메트릭 건물 디자인",
  short_description: "High-end architectural visualization for vanguard building designs and urban planning concepts.",
  short_description_ko: "선구적인 건물 디자인 및 도시 계획 컨셉을 위한 하이엔드 건축 시각화 프롬프트입니다.",
  emotional_hook: "This prompt goes beyond the limits of rigid concrete, showing new horizons of futuristic architecture that flows like a living organism.",
  emotional_hook_ko: "이 프롬프트는 딱딱한 콘크리트의 한계를 넘어, 생명체처럼 흐르는 미래 건축의 새로운 지평을 보여줍니다.",
  category: "trend",
  vertical: "architecture",
  use_cases: ["architectural_concept", "urban_planning", "interior_design", "real_estate_marketing"],
  use_cases_ko: ["건축 컨셉", "도시 계획", "인테리어 디자인", "부동산 마케팅"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "parametric architecture design, [building_context], Zaha Hadid style, flowing organic curves, [material_details], cinematic exterior lighting, lush integrated greenery, futuristic urban environment, hyper-realistic --ar 16:9 --v 6 --s 300",
  negative_prompt: "traditional boxy buildings, low detail, simple shapes, 2D drawing, blueprint, crowded city, daytime harsh sun, low quality render",
  aspect_ratio_tags: ["16:9", "architecture", "viz"],
  variables: [
    {
      name: "building_context",
      name_ko: "건물 컨텍스트",
      placeholder: "[building_context]",
      default_value: "grand cultural center with skeletal white structures",
      recommended_values: ["luxury oceanfront villa with glass bridges", "sustainable vertical garden skyscraper", "modern airport terminal with light-filtering roof", "minimalist museum inside a mountain"],
      variable_behavior_note: "Changing the building context modifies the structural complexity while maintaining the signature parametric organic aesthetic.",
      variable_behavior_note_ko: "건물 컨텍스트를 변경하면 특유의 파라메트릭 유기적 미학을 유지하면서 구조적 복잡성이 수정됩니다."
    },
    {
      name: "material_details",
      name_ko: "소재 디테일",
      placeholder: "[material_details]",
      default_value: "self-cleaning white polymer and solar-responsive glass",
      recommended_values: ["iridescent carbon fiber and polished wood", "translucent bio-plastics and vertical moss walls", "weathered copper and smart glass panels", "3D printed concrete with organic textures"],
      variable_behavior_note: "Changing materials shifts the texture and sustainability mood. White polymer emphasizes purity, while carbon fiber stresses technical precision.",
      variable_behavior_note_ko: "소재를 변경하면 질감과 지속 가능성 무드가 바뀝니다. 화이트 폴리머는 순수함을 강조하고, 카본 파이버는 기술적 정밀함을 부각합니다."
    }
  ],
  why_this_works: [
    "The Zaha Hadid style maximizes the aesthetic of curves, instantly evoking the most avant-garde aspects of modern architecture.",
    "Integrated greenery presents an eco-friendly and futuristic urban vision with high visual persuasiveness."
  ],
  why_this_works_ko: [
    "자하 하디드(Zaha Hadid) 스타일은 곡선의 미학을 극대화하여 현대 건축의 가장 전위적인 측면을 즉각적으로 환기시킵니다.",
    "통합된 녹지는 친환경적이고 미래지향적인 도시 비전을 제시하여 시각적 설득력을 높여줍니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Geometric structures and light scattering are rendered with extreme realism.",
      note_ko: "기하학적 구조와 빛의 산란이 극도로 사실적으로 렌더링됩니다."
    }
  ],
  comparison_notes: "Provides artistic inspiration and visual impact that goes beyond traditional 3D rendering tools like V-Ray or Lumion.",
  comparison_notes_ko: "V-Ray나 Lumion 같은 기존 3D 렌더링 도구를 뛰어넘는 예술적 영감과 시각적 충격을 제공합니다.",
  variations: [
    {
      label: "Interior View",
      label_ko: "인테리어 뷰",
      prompt_delta: "Change focus to interior space, flowing atrium, natural light filtering from above",
      use_case: "Interior design concepts",
      use_case_ko: "인테리어 디자인 컨셉",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["If building appears disconnected from the ground -> reinforce with 'grounded composition, heavy foundations' keywords."],
  common_failure_modes_ko: ["건물이 지면과 분리되어 보임 -> 'grounded composition, heavy foundations' 키워드로 보완하세요."],
  seo: {
    primary_keyword: "parametric architecture prompt",
    secondary_keywords: ["modern building design ai", "archviz prompt midjourney"],
    lsi_keywords: ["Zaha Hadid style", "organic curves"],
    meta_title: "Parametric Architecture Viz Prompt | Midjourney v6 Verified",
    meta_title_ko: "파라메트릭 건축 시각화 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate breathtaking futuristic building designs. Verified Midjourney v6 prompt for architects and designers.",
    meta_description_ko: "경이로운 미래형 건물 디자인을 생성하세요. 건축가와 디자이너를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/trend-archviz-005-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Futuristic parametric white building design",
    alt_text_ko: "미래지향적인 파라메트릭 화이트 건물 디자인",
    width: 1600,
    height: 900,
    format: "webp",
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
