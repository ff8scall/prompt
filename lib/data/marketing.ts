import { PromptCard } from '../types';

export const productPhotoPrompt: PromptCard = {
  id: "marketing-product-photo-001",
  slug: "luxury-product-photography-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Luxury Product Photography Prompt",
  result_first_title: "Premium product photo with elegant studio lighting and soft reflections",
  short_description: "High-end product photography for ecommerce listings, Instagram ads, and luxury brand campaigns. Works for cosmetics, jewelry, tech, and fashion accessories.",
  emotional_hook: "이 프롬프트는 고급 백화점 진열장의 부드러운 스포트라이트 아래, 제품이 고요하게 빛나는 순간을 포착한다.",
  category: "marketing",
  vertical: "ecommerce",
  use_cases: ["instagram_ad", "amazon_listing", "shopify_banner", "product_catalog", "facebook_ad", "tiktok_product_video_thumbnail"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[product_description], luxury product photography, soft diffused studio lighting from upper left, elegant subtle reflections on surface, premium [background_type] background, high-end commercial photography, 8k detail, professional color grading, shallow depth of field --ar 4:5 --v 6 --s 150",
  negative_prompt: "busy cluttered background, harsh direct flash shadows, amateur lighting, watermark, text overlay, multiple products, crowded composition, oversaturated colors",
  aspect_ratio_tags: ["4:5", "instagram_feed", "product_ad", "ecommerce_listing"],
  variables: [
    {
      name: "product_description",
      placeholder: "[product_description]",
      default_value: "elegant perfume bottle with gold cap on marble surface",
      recommended_values: [
        "luxury skincare cream jar with minimalist packaging",
        "premium wristwatch on velvet cushion",
        "wireless headphones with metallic finish",
        "designer leather handbag with brass hardware",
        "high-end sunglasses on reflective surface",
        "artisanal candle in glass container"
      ],
      variable_behavior_note: "제품을 바꾸면 촬영 대상이 바뀌지만 부드러운 스튜디오 조명, 고급스러운 반사, 전문적인 컬러그레이딩은 유지된다. 제품 재질(유리, 금속, 가죽)에 따라 반사 특성이 자연스럽게 조정된다."
    },
    {
      name: "background_type",
      placeholder: "[background_type]",
      default_value: "neutral gradient gray",
      recommended_values: [
        "soft beige linen texture",
        "marble surface with subtle veins",
        "matte black acrylic",
        "warm cream paper texture",
        "natural wood grain",
        "soft bokeh lights"
      ],
      variable_behavior_note: "배경을 바꾸면 브랜드 톤이 달라진다. 뷰티 제품은 marble/linen, 테크 제품은 matte black/acrylic, 자연 친화 브랜드는 wood/paper가 적합하다."
    }
  ],
  why_this_works: [
    "soft diffused studio lighting은 모든 제품 카테고리(뷰티, 테크, 패션)에 적용 가능한 보편적 설정으로 전문적인 느낌을 준다.",
    "4:5 aspect ratio는 Instagram feed에 최적화된 크기이며 Amazon, Shopify에서도 세로형 썸네일로 활용 가능하다.",
    "elegant subtle reflections는 제품의 프리미엄 느낌을 강조하되 과하지 않게 조절하여 실제 스튜디오 촬영처럼 보인다.",
    "shallow depth of field는 제품을 분리하여 시선을 집중시키고 광고의 클릭 유도 효과를 높인다.",
    "stylize 150은 Midjourney의 기본 경향을 억제하여 상업적 사용에 적합한 보다 사실적인 결과를 만든다.",
    "negative prompt의 'busy cluttered background' 제거는 전문적인 스튜디오 배경을 확보한다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "제품의 재질(유리, 금속, 플라스틱) 표현이 우수하다. 그러나 실제 브랜드 로고나 텍스트는 생성하지 못하므로 후처리에서 추가해야 한다. --stylize 100-200 범위가 상업적 제품 사진에 가장 적합하다."
    },
    {
      model: "dall-e-3",
      version: "current",
      note: "Midjourney보다 더 사실적이고 광고 스튜디오 품질에 가깝다. 그러나 aspect ratio 파라미터 대신 자연어 설명('vertical format for Instagram')을 사용해야 한다."
    }
  ],
  comparison_notes: "Midjourney v6은 아티스틱한 프리미엄 느낌이 강하고, DALL-E 3는 더 사실적이고 광고 스튜디오 품질에 가깝다. Instagram/뷰티 브랜드에는 Midjourney, Amazon/쇼핑몰 상세페이지에는 DALL-E 3를 추천. 두 모델 모두 실제 브랜드 로고는 생성하지 못하므로 Canva/Figma에서 후처리 필수.",
  variations: [
    {
      label: "Lifestyle/Contextual shot",
      prompt_delta: "Add lifestyle context: product on vanity table with flowers, morning light, lifestyle photography",
      pre_generated_asset_id: "marketing_product_lifestyle_001",
      use_case: "Instagram lifestyle content, brand storytelling"
    },
    {
      label: "Flat lay/Top-down",
      prompt_delta: "Change to flat lay composition, top-down view, product surrounded by complementary items, knolling style --ar 1:1",
      pre_generated_asset_id: "marketing_product_flatlay_001",
      use_case: "Instagram carousel, unboxing content, Pinterest"
    },
    {
      label: "Dramatic/High contrast",
      prompt_delta: "Replace soft lighting with dramatic side lighting, strong shadows, cinematic mood, dark background",
      pre_generated_asset_id: "marketing_product_dramatic_001",
      use_case: "Luxury brand campaigns, perfume ads, high-end fashion"
    }
  ],
  common_failure_modes: [
    "제품이 주변 잡물과 함께 생성되는 경우: negative prompt에 'multiple products, crowded'를 강화하거나 단순 배경을 지정한다.",
    "조명이 너무 강하거나 약한 경우: 'soft diffused', 'subtle' 조명 관련 키워드를 조절한다.",
    "브랜드 로고나 텍스트가 이상하게 생성되는 경우: 이는 Midjourney/DALL-E의 한계. Photoshop/Canva에서 로고를 별도로 추가한다.",
    "반사가 너무 강해 제품이 안 보이는 경우: 'subtle reflections'로 변경하거나 reflections 키워드를 약하게 조정한다."
  ],
  seo: {
    primary_keyword: "luxury product photography ai prompt",
    secondary_keywords: [
      "midjourney product photo",
      "ecommerce image prompt",
      "instagram ad creative prompt",
      "ai product photography",
      "shopify banner prompt"
    ],
    lsi_keywords: [
      "studio lighting",
      "product mockup",
      "commercial photography",
      "premium branding",
      "soft shadows",
      "marble background"
    ],
    meta_title: "Luxury Product Photography Prompt | Midjourney v6 Ecommerce",
    meta_description: "Create premium product photos for Instagram and Amazon with verified Midjourney v6 prompt. Includes 3 variations: lifestyle, flat lay, dramatic lighting."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-product-luxury-001-hero.png",
    thumbnail: "/images/prompts/marketing-product-luxury-001-thumb.png",
    variations: [
      "/images/prompts/marketing-product-lifestyle-001.png",
      "/images/prompts/marketing-product-flatlay-001.png",
      "/images/prompts/marketing-product-dramatic-001.png"
    ],
    alt_text: "Luxury perfume bottle product photography with soft studio lighting on marble surface",
    width: 1024,
    height: 1280,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "luxury-product-001",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Tested with perfume, skincare, watch products. Consistent luxury feel across all. 4:5 ratio perfect for Instagram. Suitable for ecommerce bundle feature."
  }
};

export const fashionLifestylePrompt: PromptCard = {
  id: "marketing-fashion-002",
  slug: "instagram-fashion-lifestyle-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Instagram Fashion Lifestyle",
  result_first_title: "Candid lifestyle fashion photography with natural golden hour lighting",
  short_description: "Aesthetic fashion photography for clothing brands, influencers, and lookbook content on social media.",
  emotional_hook: "이 프롬프트는 쏟아지는 햇살 아래, 평범한 일상이 영화 속 한 장면으로 변하는 마법 같은 순간을 기록한다.",
  category: "marketing",
  vertical: "lifestyle",
  use_cases: ["instagram_content", "fashion_lookbook", "brand_storytelling", "influencer_marketing"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[model_description] wearing [outfit_details], candid lifestyle photography, [location_setting], natural golden hour lighting, soft film grain, vogue aesthetic, high-end fashion editorial style --ar 4:5 --v 6 --s 250",
  negative_prompt: "studio lighting, harsh shadows, heavy makeup, posing for camera, looking at camera, low quality, amateur photography, distorted face",
  aspect_ratio_tags: ["4:5", "instagram", "fashion"],
  variables: [
    {
      name: "model_description",
      placeholder: "[model_description]",
      default_value: "graceful young woman",
      recommended_values: ["stylish male model", "diverse group of friends", "mature elegant woman", "streetwear enthusiast"],
      variable_behavior_note: "모델을 바꾸면 브랜드의 타겟 페르소나가 변경되지만, 자연스러운 라이프스타일 톤과 고급스러운 편집 감성은 유지된다."
    },
    {
      name: "location_setting",
      placeholder: "[location_setting]",
      default_value: "at a Parisian street cafe",
      recommended_values: ["on a sun-drenched rooftop", "walking through a minimalist art gallery", "in a cozy urban apartment", "at a serene beach during sunset"],
      variable_behavior_note: "장소를 바꾸면 의상의 맥락과 브랜드 이미지가 달라진다. 도심은 세련됨, 휴양지는 자유로움을 강조한다."
    }
  ],
  why_this_works: [
    "natural golden hour lighting은 인물과 의상을 가장 아름답고 따뜻하게 표현하며 소셜 미디어 유입을 높인다.",
    "candid lifestyle photography는 연출된 느낌을 줄여 브랜드에 대한 소비자 신뢰와 공감을 얻는다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "피부 질감과 직물 표현이 극도로 사실적임." }],
  comparison_notes: "Instagram 피드에서 가장 높은 반응을 끌어내는 감성적인 패션 비주얼을 제공한다.",
  variations: [{ label: "Black & White", prompt_delta: "Change to high-contrast black and white film photography", use_case: "Artistic campaigns", pre_generated_asset_id: null }],
  common_failure_modes: ["포즈가 너무 어색하게 나오는 경우 → 'unposed, relaxed movement' 키워드 추가"],
  seo: {
    primary_keyword: "instagram fashion prompt",
    secondary_keywords: ["lifestyle photography ai", "fashion lookbook prompt"],
    lsi_keywords: ["golden hour lighting", "editorial style"],
    meta_title: "Instagram Fashion Lifestyle Prompt | Midjourney v6 Verified",
    meta_description: "Create aesthetic fashion photos for Instagram. Verified Midjourney v6 prompt for brands and influencers."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-fashion-002-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Aesthetic lifestyle fashion photography",
    width: 1000,
    height: 1250,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "fashion-002",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for natural skin tones." }
};

export const techMockupPrompt: PromptCard = {
  id: "marketing-tech-003",
  slug: "minimalist-tech-product-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Minimalist Tech Product Mockup",
  result_first_title: "Sleek tech product photography with apple-style minimalist aesthetic",
  short_description: "Professional product shots for gadgets, hardware, and tech accessories with a focus on form and material.",
  emotional_hook: "이 프롬프트는 기술의 정교함이 절제된 미니멀리즘과 만났을 때 생기는 차가우면서도 지적인 매력을 포착한다.",
  category: "marketing",
  vertical: "tech",
  use_cases: ["tech_startup", "gadget_listing", "product_launch", "hardware_branding"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[tech_product], [material_finish], minimalist product photography, clean white background, soft studio lighting with crisp shadows, industrial design focus, 8k resolution, apple-style aesthetic --ar 16:9 --v 6 --s 200",
  negative_prompt: "busy background, glowing neon, low quality, cluttered, outdated tech, cheap plastic texture",
  aspect_ratio_tags: ["16:9", "tech", "minimalist"],
  variables: [
    {
      name: "tech_product",
      placeholder: "[tech_product]",
      default_value: "high-end wireless earbuds",
      recommended_values: ["sleek aluminum laptop", "smart home hub with glass finish", "premium mechanical keyboard", "minimalist fitness tracker"],
      variable_behavior_note: "제품을 바꾸면 하드웨어 디자인이 변경되지만, 애플 특유의 정제된 미니멀 화이트 무드는 유지된다."
    }
  ],
  why_this_works: [
    "apple-style aesthetic은 테크 업계에서 가장 선호되는 디자인 언어로, 즉각적인 프리미엄 인상을 심어준다.",
    "crisp shadows는 제품의 입체감을 살리면서도 깔끔함을 유지하여 상세 페이지 썸네일로 최적이다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "금속 및 플라스틱의 반사 질감 표현이 뛰어남." }],
  comparison_notes: "테크 스타트업의 웹사이트 및 마케팅 자료에 가장 적합한 고퀄리티 제품 이미지를 보장한다.",
  variations: [{ label: "Space Gray", prompt_delta: "Change white background to deep gray, anodized aluminum finish", use_case: "Dark theme products", pre_generated_asset_id: null }],
  common_failure_modes: ["디테일이 뭉개지는 경우 → 'macro photography, sharp focus' 키워드 보강"],
  seo: {
    primary_keyword: "tech product mockup prompt",
    secondary_keywords: ["minimalist gadget photo ai", "apple style prompt"],
    lsi_keywords: ["industrial design", "studio lighting"],
    meta_title: "Minimalist Tech Product Mockup Prompt | Midjourney v6 Verified",
    meta_description: "Generate professional tech product shots with a clean minimalist aesthetic. Verified Midjourney v6 prompt for gadgets."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-tech-003-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Sleek tech product on white background",
    width: 1600,
    height: 900,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "tech-003",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for clean hardware edges." }
};

export const jewelryMacroPrompt: PromptCard = {
  id: "marketing-jewelry-004",
  slug: "luxury-jewelry-macro-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Luxury Jewelry Macro Photography",
  result_first_title: "Stunning close-up of high-end jewelry with sparkling diamonds and elegant reflections",
  short_description: "Macro photography for jewelry brands, focusing on gems, precious metals, and intricate craftsmanship.",
  emotional_hook: "이 프롬프트는 영원히 변치 않는 광채를 가진 보석의 심장부를 현미경처럼 정교하게 파고든다.",
  category: "marketing",
  vertical: "jewelry",
  use_cases: ["jewelry_catalog", "luxury_ad", "high_end_ecommerce", "engagement_campaign"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[jewelry_type], macro photography, extreme close-up, [lighting_style], sparkling diamonds with caustic reflections, 18k [metal_color] gold, dark reflective surface, high-end commercial photography --ar 4:5 --v 6 --s 350",
  negative_prompt: "blurry gem, out of focus, poor lighting, hand holding jewelry, amateur shot, low resolution, fingerprint, dust",
  aspect_ratio_tags: ["4:5", "jewelry", "macro"],
  variables: [
    {
      name: "jewelry_type",
      placeholder: "[jewelry_type]",
      default_value: "diamond engagement ring",
      recommended_values: ["sapphire pendant necklace", "emerald stud earrings", "platinum luxury watch", "ruby tennis bracelet"],
      variable_behavior_note: "보석과 주얼리 종류를 바꾸면 원석의 색상과 세팅 디자인이 변경되지만, 매크로 특유의 초정밀 디테일은 유지된다."
    }
  ],
  why_this_works: [
    "caustic reflections는 보석 내부의 빛 굴절을 극대화하여 실제 하이 주얼리 광고 같은 화려함을 준다.",
    "extreme close-up은 제품의 완성도와 희소성을 시각적으로 강조하여 구매 욕구를 자극한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "금속의 반사광과 보석의 투명도 표현력이 신의 경지임." }],
  comparison_notes: "주얼리 특유의 미세한 디테일과 광채를 가장 압도적으로 표현한다.",
  variations: [{ label: "Natural Lighting", prompt_delta: "Change to soft window light, blurred garden background", use_case: "Bohemian jewelry brands", pre_generated_asset_id: null }],
  common_failure_modes: ["보석이 가짜 유리처럼 보이는 경우 → 'internal light refraction' 키워드 추가"],
  seo: {
    primary_keyword: "jewelry macro prompt",
    secondary_keywords: ["diamond photography ai", "luxury jewelry ad prompt"],
    lsi_keywords: ["macro close-up", "caustic reflections"],
    meta_title: "Luxury Jewelry Macro Prompt | Midjourney v6 Verified",
    meta_description: "Generate stunning close-up jewelry photos with sparkling gems. Verified Midjourney v6 prompt for luxury brands."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-jewelry-004-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Extreme macro of a diamond ring",
    width: 1000,
    height: 1250,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "jewelry-004",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for gemstone clarity." }
};

export const gourmetFoodPrompt: PromptCard = {
  id: "marketing-food-005",
  slug: "gourmet-food-photography-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Gourmet Food Photography",
  result_first_title: "Hyper-realistic gourmet burger with melting cheese and fresh ingredients for food ads",
  short_description: "Mouth-watering food photography for restaurants, delivery apps, and culinary marketing.",
  emotional_hook: "이 프롬프트는 갓 구운 빵의 향기와 육즙의 풍미가 화면을 뚫고 나올 듯한 생생한 미각적 자극을 창조한다.",
  category: "marketing",
  vertical: "food",
  use_cases: ["restaurant_menu", "delivery_app_photo", "food_blog", "culinary_ad"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[food_item], professional food photography, top-down angle, dramatic side lighting, steam rising, macro detail, wooden table background, gourmet styling, 8k resolution --ar 4:5 --v 6 --s 150",
  negative_prompt: "unappetizing, messy, dark, blurry, low resolution, hands in frame, plastic texture",
  aspect_ratio_tags: ["4:5", "food", "gourmet"],
  variables: [
    {
      name: "food_item",
      placeholder: "[food_item]",
      default_value: "artisan beef burger with melting cheddar and caramelized onions",
      recommended_values: ["authentic napoli pizza with fresh basil", "colorful sushi platter on slate", "steaming bowl of tonkotsu ramen", "delicate french macarons"],
      variable_behavior_note: "음식 종류를 바꾸면 재질과 스타일링이 변경되지만, 입맛을 자극하는 선명한 디테일과 전문적인 조명은 유지된다."
    }
  ],
  why_this_works: [
    "dramatic side lighting은 음식의 질감(결, 수분감, 바삭함)을 살려 시각적 식감을 극대화한다.",
    "steam rising은 음식의 신선함과 온도감을 전달하여 즉각적인 반응을 유도한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "식재료의 질감과 색감을 극사실적으로 묘사함." }],
  comparison_notes: "배달 앱이나 메뉴판에 즉시 사용 가능한 수준의 높은 상업적 퀄리티를 보장한다.",
  variations: [{ label: "Bright Cafe", prompt_delta: "Change to bright natural light, marble table, flat lay", use_case: "Instagram-worthy cafe food", pre_generated_asset_id: null }],
  common_failure_modes: ["음식이 가공품처럼 보이는 경우 → 'freshly cooked, natural textures' 키워드 추가"],
  seo: {
    primary_keyword: "gourmet food photography prompt",
    secondary_keywords: ["food ad ai prompt", "restaurant menu photo ai"],
    lsi_keywords: ["macro food detail", "gourmet styling"],
    meta_title: "Gourmet Food Photography Prompt | Midjourney v6 Verified",
    meta_description: "Create mouth-watering food photos for menus and ads. Verified Midjourney v6 prompt for restaurants and delivery apps."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-food-005-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Hyper-realistic gourmet burger ad",
    width: 1000,
    height: 1250,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "food-005",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for appetizing texture." }
};

export const cosmeticsFlatlayPrompt: PromptCard = {
  id: "marketing-cosmetics-006",
  slug: "cosmetics-flat-lay-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Cosmetics Flat Lay Photography",
  result_first_title: "Aesthetic flat lay of cosmetics and skincare products on neutral textured background",
  short_description: "Stylish, Instagram-worthy product arrangements for beauty brands and lifestyle influencers.",
  emotional_hook: "이 프롬프트는 피부를 어루만지는 부드러운 텍스처와 정갈한 배치가 주는 감각적 즐거움을 선사한다.",
  category: "marketing",
  vertical: "beauty",
  use_cases: ["instagram_flatlay", "beauty_blog", "skincare_branding", "pinterest_content"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[product_list], cosmetics flat lay, top-down view, organized composition, [accent_elements], neutral linen background, soft diffused natural light, high-end beauty photography --ar 1:1 --v 6 --s 200",
  negative_prompt: "cluttered, messy, harsh lighting, shadows, low quality, human hands, blurry gems",
  aspect_ratio_tags: ["1:1", "beauty", "flatlay"],
  variables: [
    {
      name: "product_list",
      placeholder: "[product_list]",
      default_value: "minimalist glass serum bottle and cream jar",
      recommended_values: ["luxury lipstick collection with swatches", "herbal skincare set with natural ingredients", "organic facial oils and flowers", "premium foundation and makeup brushes"],
      variable_behavior_note: "제품 목록을 바꾸면 브랜드 컨셉이 달라지지만, 인스타그램 특유의 정갈한 수평 배치(Flat lay) 스타일은 유지된다."
    },
    {
      name: "accent_elements",
      placeholder: "[accent_elements]",
      default_value: "white rose petals and gold silk",
      recommended_values: ["fresh eucalyptus leaves", "rough stone textures", "soft shadow of a window frame", "pearls and silver jewelry"],
      variable_behavior_note: "소품을 바꾸면 브랜드 무드가 세련되거나(stone), 여성스럽거나(rose), 내추럴하게(leaves) 변한다."
    }
  ],
  why_this_works: [
    "top-down view는 제품들을 평등하게 배열하여 브랜드 라인업을 한눈에 보여주기에 최적이다.",
    "neutral linen background는 제품의 색감과 디자인이 돋보이도록 차분한 조연 역할을 수행한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "질감의 미세한 차이(유리, 크림, 천)를 완벽하게 포착함." }],
  comparison_notes: "인스타그램 감성의 뷰티 콘텐츠 제작에서 가장 일관되고 세련된 스타일을 제공한다.",
  variations: [{ label: "Action/Texture", prompt_delta: "Add cream smudges and liquid splashes for texture focus", use_case: "Texture shots", pre_generated_asset_id: null }],
  common_failure_modes: ["배치가 너무 산만한 경우 → 'symmetrical, grid-like arrangement' 키워드 추가"],
  seo: {
    primary_keyword: "cosmetics flat lay prompt",
    secondary_keywords: ["beauty photography ai", "skincare photo prompt"],
    lsi_keywords: ["top-down view", "neutral background"],
    meta_title: "Cosmetics Flat Lay Prompt | Midjourney v6 Verified",
    meta_description: "Design aesthetic beauty flat lays for Instagram. Verified Midjourney v6 prompt for skincare and makeup brands."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-cosmetics-006-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Aesthetic cosmetics flat lay arrangement",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "beauty-006",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for aesthetic arrangement." }
};

export const carPhotographyPrompt: PromptCard = {
  id: "marketing-car-007",
  slug: "premium-car-photography-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Premium Car Photography",
  result_first_title: "Sleek luxury car in urban nighttime setting with dramatic light trails",
  short_description: "High-end automotive photography for brand campaigns and car enthusiasts.",
  emotional_hook: "이 프롬프트는 밤의 도시를 가르는 기계의 역동성과 그 차가운 금속 위에 맺히는 빛의 궤적을 쫓는다.",
  category: "marketing",
  vertical: "automotive",
  use_cases: ["car_ad", "brand_campaign", "automotive_blog", "desktop_wallpaper"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[car_model], side profile, [location_setting], long exposure light trails, motion blur, cinematic nighttime lighting, wet pavement, high-speed photography aesthetic --ar 21:9 --v 6 --s 300",
  negative_prompt: "daylight, stationary car, low detail, people, amateur photography, distorted wheels, bright sun",
  aspect_ratio_tags: ["21:9", "automotive", "cinematic"],
  variables: [
    {
      name: "car_model",
      placeholder: "[car_model]",
      default_value: "modern electric supercar with aerodynamic curves",
      recommended_values: ["classic vintage porsche 911", "rugged off-road expedition vehicle", "futuristic concept hydrogen car", "luxury executive sedan"],
      variable_behavior_note: "차량 모델을 바꾸면 형태와 질감이 변경되지만, 속도감이 느껴지는 롱 익스포저 효과와 시네마틱한 야간 조명은 유지된다."
    }
  ],
  why_this_works: [
    "long exposure light trails는 정지된 이미지 속에 폭발적인 속도감을 부여하여 시각적 몰입도를 높인다.",
    "21:9 비율은 영화적 파노라마 뷰를 선사하여 럭셔리 자동차 브랜드의 웅장함을 강조한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "금속 반사와 모션 블러 표현이 극히 사실적임." }],
  comparison_notes: "자동차 광고에서 가장 선호되는 'Night City Drive' 미학을 완벽하게 구현한다.",
  variations: [{ label: "Sunset Desert", prompt_delta: "Change to desert road at sunset, warm golden glow, dust trails", use_case: "SUV/Adventure brands", pre_generated_asset_id: null }],
  common_failure_modes: ["바퀴가 찌그러지는 경우 → 'perfectly circular alloy wheels' 키워드 추가"],
  seo: {
    primary_keyword: "premium car photography prompt",
    secondary_keywords: ["automotive ad ai", "car wallpaper prompt"],
    lsi_keywords: ["light trails", "motion blur photography"],
    meta_title: "Premium Car Photography Prompt | Midjourney v6 Verified",
    meta_description: "Generate cinematic car photos with light trails and motion blur. Verified Midjourney v6 prompt for automotive ads."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-car-007-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Sleek luxury car with light trails",
    width: 2100,
    height: 900,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "car-007",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for cinematic motion." }
};

export const fbIgProductAdPrompt: PromptCard = {
  id: "mkt-social-ad-008",
  slug: "instagram-product-ad-design-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Instagram Product Ad Design",
  result_first_title: "Aesthetic Instagram product photography with trendy props and soft lighting",
  short_description: "High-end product showcase for social media ads, featuring curated aesthetics, lifestyle props, and premium lighting.",
  emotional_hook: "이 프롬프트는 단순한 상품 노출을 넘어, 소비자가 동경하는 워너비 라이프스타일을 시각화하여 소유욕을 자극한다.",
  category: "marketing",
  vertical: "social_media_ads",
  use_cases: ["instagram_ad", "facebook_marketing", "product_launch", "lifestyle_branding"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "aesthetic product photography, [product_category], placed on [surface_type], surrounded by [lifestyle_props], soft natural sunlight with harsh shadows, [color_palette] tones, high-end magazine style, hyper-detailed --ar 4:5 --v 6 --s 250",
  negative_prompt: "low quality, blurry, messy, amateur photography, dark and gloomy, cluttered background, cheap looking, distorted product shape",
  aspect_ratio_tags: ["4:5", "instagram", "lifestyle"],
  variables: [
    {
      name: "product_category",
      placeholder: "[product_category]",
      default_value: "minimalist skincare glass bottle",
      recommended_values: ["luxury leather handbag", "sleek wireless headphones", "organic artisanal coffee beans", "modern ceramic watch"],
      variable_behavior_note: "제품 카테고리를 바꾸면 해당 산업군의 트렌디한 미학에 맞춰 조명과 구도가 미세하게 조정된다."
    },
    {
      name: "surface_type",
      placeholder: "[surface_type]",
      default_value: "textured travertine stone block",
      recommended_values: ["minimalist oak wood table", "reflective glass pool edge", "soft linen fabric folds", "architectural concrete pedestal"],
      variable_behavior_note: "바닥 재질을 바꾸면 광고의 전반적인 '온도'와 브랜드의 가격대가 시각적으로 암시된다."
    },
    {
      name: "lifestyle_props",
      placeholder: "[lifestyle_props]",
      default_value: "dried eucalyptus and a silk ribbon",
      recommended_values: ["fresh morning coffee and a tablet", "abstract geometric sculptures", "scattered rose petals and pearls", "modern architecture in the background"],
      variable_behavior_note: "소품을 바꾸면 타겟 고객층이 선호하는 라이프스타일 룩을 완성할 수 있다."
    }
  ],
  why_this_works: [
    "soft natural sunlight with harsh shadows는 최근 인스타그램에서 가장 인기를 끄는 '감성 사진'의 핵심 광원 미학이다.",
    "hyper-detailed magazine style은 브랜드의 신뢰도와 제품의 프리미엄 가치를 한눈에 전달한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "질감 표현과 그림자의 선명도가 실제 스튜디오 촬영물과 구분하기 힘들 정도로 탁월함." }],
  comparison_notes: "전문 광고 스튜디오의 포토그래퍼가 촬영한 듯한 수준 높은 상업 결과물을 보장한다.",
  variations: [{ label: "Dark Moody", prompt_delta: "Change to deep shadows, spotlighting on product, moody navy and gold tones", use_case: "Luxury night-time products", pre_generated_asset_id: null }],
  common_failure_modes: ["제품 로고가 이상하게 나오는 경우 → 생성 후 로고 부분만 누끼 작업이나 리터칭 권장"],
  seo: {
    primary_keyword: "instagram product ad design prompt",
    secondary_keywords: ["social media marketing ai art", "lifestyle product photography prompt"],
    lsi_keywords: ["magazine style", "natural lighting"],
    meta_title: "Instagram Product Ad Design Prompt | Midjourney v6 Verified",
    meta_description: "Design aesthetic Instagram ads with premium product photography. Verified Midjourney v6 prompt for high-conversion social media marketing."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-ad-008-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Aesthetic Instagram product ad photography",
    width: 1000,
    height: 1250,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "insta-ad-008",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for social media conversion aesthetics." }
};

export const linkedinBannerPrompt: PromptCard = {
  id: "mkt-social-linkedin-009",
  slug: "linkedin-professional-banner-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "LinkedIn Professional Banner",
  result_first_title: "Modern and professional LinkedIn background banner for corporate and personal branding",
  short_description: "A clean, high-impact background for LinkedIn profiles or company pages, featuring abstract tech motifs or professional workspaces.",
  emotional_hook: "이 프롬프트는 첫인상이 결정되는 찰나의 순간, 당신의 전문성과 커리어의 깊이를 시각적으로 증명한다.",
  category: "marketing",
  vertical: "social_media_branding",
  use_cases: ["linkedin_profile", "company_page", "personal_branding", "corporate_identity"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "LinkedIn banner background, [banner_theme], clean minimalist composition, plenty of copy space on the right, [color_scheme], professional high-tech aesthetic, subtle gradients, high-fidelity --ar 4:1 --v 6 --s 150",
  negative_prompt: "cluttered, messy, faces (to avoid overlap with profile pic), low resolution, text (unless requested), dark and gloomy, unprofessional",
  aspect_ratio_tags: ["4:1", "linkedin", "branding"],
  variables: [
    {
      name: "banner_theme",
      placeholder: "[banner_theme]",
      default_value: "abstract network of flowing glass lines",
      recommended_values: ["modern architectural office interior", "minimalist desk setup with apple devices", "creative workshop with sticky notes and sketches", "dynamic tech world map with light trails"],
      variable_behavior_note: "배너 테마를 바꾸면 종사하는 산업군의 특징을 즉각적으로 반영할 수 있다."
    },
    {
      name: "color_scheme",
      placeholder: "[color_scheme]",
      default_value: "corporate blue and silver grey",
      recommended_values: ["vibrant creative orange and white", "eco-friendly green and wood tones", "luxurious dark charcoal and gold", "clean startup white and sky blue"],
      variable_behavior_note: "컬러 구성을 바꾸면 브랜드의 성격(신뢰, 창의성, 혁신 등)에 대한 정서적 메시지가 달라진다."
    }
  ],
  why_this_works: [
    "copy space on the right는 왼쪽 하단에 위치하는 프로필 사진과의 겹침을 방지하고 슬로건을 넣을 공간을 확보한다.",
    "4:1 aspect ratio는 링크드인 헤더 규격에 최적화되어 이미지 왜곡 없이 완벽하게 적용된다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "추상적인 그래픽의 정밀함과 여백의 미가 매우 조화로움." }],
  comparison_notes: "무료 스톡 이미지 사이트의 뻔한 배경과는 차원이 다른 유니크한 프로페셔널 룩을 완성한다.",
  variations: [{ label: "Team/Company", prompt_delta: "Add a blurred background of a collaborative team meeting in a bright office", use_case: "Corporate branding", pre_generated_asset_id: null }],
  common_failure_modes: ["이미지가 너무 복잡하여 텍스트 가독성이 떨어지는 경우 → 'blurry background, simple elements' 키워드 추가"],
  seo: {
    primary_keyword: "linkedin professional banner prompt",
    secondary_keywords: ["corporate branding background ai", "personal branding banner prompt"],
    lsi_keywords: ["copy space", "minimalist composition"],
    meta_title: "LinkedIn Professional Banner Prompt | Midjourney v6 Verified",
    meta_description: "Design modern and clean LinkedIn banners for professional branding. Verified Midjourney v6 prompt with copy space for slogans."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-linkedin-009-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Professional LinkedIn background banner design",
    width: 1584,
    height: 396,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "linkedin-009",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for LinkedIn layout compatibility." }
};

export const youtubeThumbnailPrompt: PromptCard = {
  id: "mkt-social-yt-010",
  slug: "youtube-thumbnail-art-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "YouTube High-CTR Thumbnail",
  result_first_title: "Eye-catching YouTube thumbnail background with dynamic composition and high contrast",
  short_description: "A visually striking background for YouTube thumbnails, designed to drive clicks with bold colors and clear focal points.",
  emotional_hook: "이 프롬프트는 수많은 영상들 속에서 시청자의 시선을 강제로 고정시키고 클릭을 유도하는 '시각적 자석'을 만든다.",
  category: "marketing",
  vertical: "social_media_content",
  use_cases: ["youtube_thumbnail", "video_marketing", "content_creation", "clickthrough_optimization"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "YouTube thumbnail art, [video_topic], centered [subject_focus], extreme high contrast, vibrant neon colors, dramatic lighting, dynamic action pose, cinematic depth of field, bold graphic style --ar 16:9 --v 6 --s 300",
  negative_prompt: "dull colors, low contrast, cluttered background, blurry subject, boring composition, small details, messy text, scary faces",
  aspect_ratio_tags: ["16:9", "youtube", "click_bait"],
  variables: [
    {
      name: "video_topic",
      placeholder: "[video_topic]",
      default_value: "future of artificial intelligence tech",
      recommended_values: ["luxury travel world tour", "epic gaming world adventure", "healthy meal prep challenge", "modern home renovation reveal"],
      variable_behavior_note: "영상 주제를 바꾸면 시청자가 즉각적으로 내용을 유추할 수 있는 상징적인 시각 요소들이 강조된다."
    },
    {
      name: "subject_focus",
      placeholder: "[subject_focus]",
      default_value: "glowing robotic brain and neural network",
      recommended_values: ["shocked person face", "luxury private jet interior", "giant gold trophy", "mysterious locked chest"],
      variable_behavior_note: "핵심 피사체를 바꾸면 썸네일의 '후킹 포인트'가 변경된다."
    }
  ],
  why_this_works: [
    "extreme high contrast는 작은 모바일 화면에서도 썸네일을 돋보이게 하는 가장 강력한 요소다.",
    "cinematic depth of field는 핵심 주제를 선명하게 분리하여 시청자가 무엇을 보아야 할지 명확히 안내한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "색조와 대비의 강도가 매우 높아 후보정 없이도 썸네일로 사용하기 좋음." }],
  comparison_notes: "유튜브 상위권 크리에이터들이 사용하는 '눈에 띄는' 썸네일의 시각 문법을 완벽히 재현한다.",
  variations: [{ label: "Educational", prompt_delta: "Change to clean studio background, professional lighting, focus on a single high-quality product", use_case: "Review or Tech channels", pre_generated_asset_id: null }],
  common_failure_modes: ["화면이 너무 빽빽한 경우 → 'minimalist focal point, clean negative space' 키워드 추가"],
  seo: {
    primary_keyword: "youtube thumbnail art prompt",
    secondary_keywords: ["high ctr thumbnail design ai", "video marketing background prompt"],
    lsi_keywords: ["high contrast", "focal point"],
    meta_title: "YouTube High-CTR Thumbnail Prompt | Midjourney v6 Verified",
    meta_description: "Design eye-catching YouTube thumbnails that drive clicks. Verified Midjourney v6 prompt for content creators and marketers."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-yt-010-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "High contrast YouTube thumbnail background art",
    width: 1280,
    height: 720,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "yt-010",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for thumbnail visual hierarchy." }
};

export const tiktokLifestylePrompt: PromptCard = {
  id: "mkt-social-tiktok-011",
  slug: "tiktok-lifestyle-photography-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "TikTok Dynamic Lifestyle",
  result_first_title: "Natural and dynamic lifestyle photography with a Gen-Z aesthetic and smartphone vibe",
  short_description: "Authentic-looking photography for short-form video ads or social posts, featuring motion blur and candid moments.",
  emotional_hook: "이 프롬프트는 연출된 광고의 거부감을 없애고, 친구의 피드에서 본 듯한 친근하고 역동적인 일상을 포착한다.",
  category: "marketing",
  vertical: "social_media_content",
  use_cases: ["tiktok_ad", "instagram_reels", "ugc_marketing", "brand_storytelling"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "candid lifestyle photography, [lifestyle_scene], captured on a modern smartphone, slight motion blur, Gen-Z fashion aesthetic, [lighting_vibe], vibrant and natural colors, vertical composition --ar 9:16 --v 6 --s 100",
  negative_prompt: "staged, professional studio lighting, low resolution, blurry (too much), old-fashioned, corporate style, over-edited, fake looking",
  aspect_ratio_tags: ["9:16", "tiktok", "lifestyle"],
  variables: [
    {
      name: "lifestyle_scene",
      placeholder: "[lifestyle_scene]",
      default_value: "skating through a sunny city park while holding a soda",
      recommended_values: ["friends laughing in a neon-lit night market", "unboxing a tech gadget in a minimalist bedroom", "dancing at a beach music festival", "sipping matcha in a cozy sunlit cafe"],
      variable_behavior_note: "장면을 바꾸면 타겟 커뮤니티의 공감대를 자극하는 다양한 시각적 내러티브가 형성된다."
    },
    {
      name: "lighting_vibe",
      placeholder: "[lighting_vibe]",
      default_value: "warm golden hour glow",
      recommended_values: ["cool neon street lights", "natural overcast soft light", "vibrant flash photography vibe", "shadowy cinematic interior lighting"],
      variable_behavior_note: "조명을 바꾸면 영상의 감정선과 '바이브'가 완전히 달라진다."
    }
  ],
  why_this_works: [
    "captured on a modern smartphone은 전문 장비의 거리감을 없애고 사용자 생성 콘텐츠(UGC) 같은 신뢰도를 준다.",
    "slight motion blur는 틱톡이나 릴스 특유의 에너지와 실시간성을 생생하게 재현한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "인물의 자연스러운 표정과 포즈 구현 능력이 매우 향상됨." }],
  comparison_notes: "광고 같지 않은 광고(Non-ad ads)가 필요한 퍼포먼스 마케팅 단계에서 최고의 효율을 낸다.",
  variations: [{ label: "Product Focused", prompt_delta: "Change to close-up hand holding the product in use, blurred lifestyle background", use_case: "Direct response ads", pre_generated_asset_id: null }],
  common_failure_modes: ["너무 모델 화보처럼 나오는 경우 → 'amateur shot, non-professional model' 키워드 추가"],
  seo: {
    primary_keyword: "tiktok lifestyle photography prompt",
    secondary_keywords: ["ugc style marketing ai", "gen-z aesthetic prompt"],
    lsi_keywords: ["vertical composition", "motion blur"],
    meta_title: "TikTok Dynamic Lifestyle Prompt | Midjourney v6 Verified",
    meta_description: "Design authentic and dynamic lifestyle shots for short-form video ads. Verified Midjourney v6 prompt for TikTok and Reels."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-tiktok-011-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Dynamic Gen-Z lifestyle photography for TikTok",
    width: 1080,
    height: 1920,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "tiktok-011",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for UGC-style authenticity." }
};

export const newsletterHeaderPrompt: PromptCard = {
  id: "mkt-social-news-012",
  slug: "newsletter-header-design-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Newsletter Premium Header",
  result_first_title: "Clean and modern newsletter header with abstract 3D elements and soft palette",
  short_description: "A sophisticated header for email marketing, designed to set a premium tone and accommodate logos and headlines.",
  emotional_hook: "이 프롬프트는 구독자의 메일함에서 당신의 소식을 가장 품격 있고 반갑게 맞이하게 한다.",
  category: "marketing",
  vertical: "email_marketing",
  use_cases: ["newsletter_header", "email_banner", "blog_hero", "saas_marketing"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "newsletter header background, [newsletter_topic], clean minimalist composition, [color_palette], soft 3D abstract shapes, plenty of copy space, premium high-fidelity finish --ar 3:1 --v 6 --s 150",
  negative_prompt: "cluttered, messy, low resolution, dark and gloomy, faces, text, distracting background, bright neon colors (unless specified)",
  aspect_ratio_tags: ["3:1", "email", "minimalist"],
  variables: [
    {
      name: "newsletter_topic",
      placeholder: "[newsletter_topic]",
      default_value: "tech and innovation updates",
      recommended_values: ["luxury travel and lifestyle", "finance and market analysis", "creative design and art curation", "health and wellness tips"],
      variable_behavior_note: "뉴스레터 주제를 바꾸면 그에 어울리는 추상적인 형태와 상징물이 은은하게 표현된다."
    },
    {
      name: "color_palette",
      placeholder: "[color_palette]",
      default_value: "soft pastel blue and cream white",
      recommended_values: ["professional navy and silver", "vibrant lime and charcoal", "warm terracotta and beige", "modern dark mode purple and black"],
      variable_behavior_note: "컬러 팔레트를 바꾸면 정보의 신뢰도와 브랜드의 온도가 시각화된다."
    }
  ],
  why_this_works: [
    "3:1 aspect ratio는 이메일 클라이언트 화면 상단에 꽉 차면서도 본문을 가리지 않는 가장 안정적인 규격이다.",
    "plenty of copy space는 제목과 로고를 올렸을 때 배경과 간섭되지 않아 가독성을 극대화한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "부드러운 그라데이션과 3D 질감의 깊이감이 매우 우아함." }],
  comparison_notes: "글로벌 테크 유니콘 기업들이 보내는 웰메이드 뉴스레터의 감각적인 헤더를 재현한다.",
  variations: [{ label: "Illustration", prompt_delta: "Change 3D shapes to flat 2D minimalist vector illustrations", use_case: "Artistic/Creative newsletters", pre_generated_asset_id: null }],
  common_failure_modes: ["배경이 너무 밋밋한 경우 → 'subtle texture, soft grain' 키워드 추가"],
  seo: {
    primary_keyword: "newsletter header design prompt",
    secondary_keywords: ["email marketing banner ai", "saas newsletter background prompt"],
    lsi_keywords: ["copy space", "minimalist composition"],
    meta_title: "Newsletter Premium Header Prompt | Midjourney v6 Verified",
    meta_description: "Design clean and sophisticated headers for email marketing. Verified Midjourney v6 prompt for high-impact newsletters."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-news-012-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Clean modern newsletter header background",
    width: 1500,
    height: 500,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "news-012",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for email client layout compatibility." }
};

export const eventPosterPrompt: PromptCard = {
  id: "mkt-social-event-013",
  slug: "event-poster-design-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Tech Event Poster Art",
  result_first_title: "Impactful event poster background with futuristic motifs and bold lighting",
  short_description: "A high-energy background for conferences, webinars, or music events, featuring dynamic shapes and deep perspective.",
  emotional_hook: "이 프롬프트는 다가올 특별한 순간의 설렘과 거대한 스케일을 한 장의 압도적인 이미지로 선포한다.",
  category: "marketing",
  vertical: "print_digital_ads",
  use_cases: ["event_poster", "webinar_banner", "conference_identity", "promotion_art"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "event poster background, [event_type], futuristic [core_motif], centered composition, dramatic [lighting_color] lighting, deep perspective, plenty of copy space for headlines, high-fidelity digital art --ar 2:3 --v 6 --s 350",
  negative_prompt: "low quality, blurry, messy, faces, unreadable text, low resolution, cluttered, boring composition, old-fashioned",
  aspect_ratio_tags: ["2:3", "poster", "event"],
  variables: [
    {
      name: "event_type",
      placeholder: "[event_type]",
      default_value: "global AI innovation summit",
      recommended_values: ["underground electronic music festival", "luxury watch expo", "indie game developer meetup", "future city architecture forum"],
      variable_behavior_note: "이벤트 종류를 바꾸면 행사의 성격과 규모에 맞는 시각적 언어(테크 vs 예술 vs 럭셔리)가 선택된다."
    },
    {
      name: "core_motif",
      placeholder: "[core_motif]",
      default_value: "glowing holographic neural network sphere",
      recommended_values: ["shattering geometric glass crystals", "neon light trails forming a city", "abstract liquid metal waves", "minimalist architectural monolithic pillar"],
      variable_behavior_note: "핵심 모티프를 바꾸면 포스터의 '비주얼 앵커'가 변경되어 전체 컨셉을 주도한다."
    }
  ],
  why_this_works: [
    "deep perspective는 독자의 시선을 이미지 중앙으로 강하게 끌어당겨 행사의 중요성을 강조한다.",
    "plenty of copy space는 행사 일시, 장소, 라인업 등의 방대한 정보를 넣어도 비주얼이 깨지지 않게 한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "입체적인 구조물과 극적인 명암 대비 표현이 압도적임." }],
  comparison_notes: "글로벌 IT 컨퍼런스나 대형 뮤직 페스티벌의 메인 키 비주얼 수준의 완성도를 자랑한다.",
  variations: [{ label: "Minimalist", prompt_delta: "Change to single minimalist shape on a clean white background, focus on Swiss design style", use_case: "Design/Art exhibitions", pre_generated_asset_id: null }],
  common_failure_modes: ["모티프가 너무 커서 글자 쓸 공간이 없는 경우 → 'smaller motif, wide background' 키워드 추가"],
  seo: {
    primary_keyword: "event poster design prompt",
    secondary_keywords: ["conference background ai", "webinar banner prompt"],
    lsi_keywords: ["deep perspective", "copy space"],
    meta_title: "Tech Event Poster Art Prompt | Midjourney v6 Verified",
    meta_description: "Design impactful poster backgrounds for conferences and events. Verified Midjourney v6 prompt for high-scale promotions."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-event-013-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "High-impact tech event poster background art",
    width: 1000,
    height: 1500,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "event-013",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for poster visual hierarchy." }
};

export const twitterViralCardPrompt: PromptCard = {
  id: "mkt-social-tw-014",
  slug: "twitter-viral-graphic-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Twitter/X Viral Announcement",
  result_first_title: "Trendy and bold graphic for viral Twitter announcements and product reveals",
  short_description: "A high-impact, minimalist graphic optimized for the Twitter/X feed, designed to stand out in a fast-scrolling environment.",
  emotional_hook: "이 프롬프트는 텍스트 위주의 트위터 피드에서 단숨에 시선을 낚아채고 리트윗 버튼을 누르게 만든다.",
  category: "marketing",
  vertical: "social_media_content",
  use_cases: ["twitter_announcement", "product_reveal", "viral_marketing", "community_update"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "Twitter announcement graphic, [announcement_type], centered [main_object], bold high-contrast colors, minimalist flat 3D style, clean background, sharp focus, vibrant energy --ar 16:9 --v 6 --s 200",
  negative_prompt: "cluttered, messy, low resolution, dark, blurry, realistic (to avoid stock photo look), faces, text, distracting background",
  aspect_ratio_tags: ["16:9", "twitter", "announcement"],
  variables: [
    {
      name: "announcement_type",
      placeholder: "[announcement_type]",
      default_value: "major software update release",
      recommended_values: ["new community milestone 100k", "exclusive limited edition drop", "secret collaboration reveal", "important security update"],
      variable_behavior_note: "발표 유형을 바꾸면 소식의 성격(축하, 긴급, 혁신 등)에 맞는 시각적 비유가 선택된다."
    },
    {
      name: "main_object",
      placeholder: "[main_object]",
      default_value: "glowing 3D rocket ship taking off",
      recommended_values: ["giant golden party popper", "sleek futuristic lock icon", "vibrant abstract starburst", "minimalist open treasure box"],
      variable_behavior_note: "메인 오브젝트를 바꾸면 소식의 핵심 키워드를 시각적으로 즉각 전달할 수 있다."
    }
  ],
  why_this_works: [
    "minimalist flat 3D style은 최근 트위터/X의 테크 커뮤니티에서 가장 선호하는 트렌디한 디자인 문법이다.",
    "16:9 aspect ratio는 트위터 카드 규격에 최적화되어 피드에서 잘림 없이 전체 비주얼을 보여준다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "색감의 명확도와 오브젝트의 실루엣이 매우 선명함." }],
  comparison_notes: "애플이나 테슬라의 신제품 발표 시 사용되는 절제된 고품격 그래픽 감성을 재현한다.",
  variations: [{ label: "Celebration", prompt_delta: "Add confetti, sparkles, and festive warm lighting, use bright gold and orange", use_case: "Milestone celebrations", pre_generated_asset_id: null }],
  common_failure_modes: ["이미지가 너무 진지한 경우 → 'playful 3D style, vibrant tones' 키워드 보강"],
  seo: {
    primary_keyword: "twitter viral graphic prompt",
    secondary_keywords: ["product announcement ai design", "social media viral art prompt"],
    lsi_keywords: ["16:9 aspect ratio", "minimalist 3D"],
    meta_title: "Twitter/X Viral Announcement Prompt | Midjourney v6 Verified",
    meta_description: "Design high-impact announcement graphics for Twitter/X. Verified Midjourney v6 prompt for viral marketing and reveals."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-tw-014-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Trendy viral announcement graphic for Twitter",
    width: 1280,
    height: 720,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "tw-014",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for social media visual impact." }
};

export const magazineEditorialPrompt: PromptCard = {
  id: "mkt-branding-editorial-015",
  slug: "magazine-editorial-fashion-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "High-End Magazine Editorial",
  result_first_title: "Sophisticated fashion editorial photography for high-end magazine spreads",
  short_description: "Professional, avant-garde fashion photography featuring dramatic lighting, artistic poses, and high-fashion aesthetics.",
  emotional_hook: "이 프롬프트는 단순한 사진을 넘어, 브랜드의 철학과 예술적 정체성이 담긴 한 편의 서사를 화보로 기록한다.",
  category: "marketing",
  vertical: "editorial",
  use_cases: ["magazine_spread", "fashion_campaign", "brand_lookbook", "artistic_direction"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "high-end fashion editorial photography, [model_archetype], wearing [avant_garde_outfit], dramatic [lighting_style], [artistic_backdrop], vogue aesthetic, high contrast, cinematic grain, professional color grading --ar 2:3 --v 6 --s 300",
  negative_prompt: "low quality, blurry, amateur, smiling, looking at camera (unless specified), messy, plain studio background (unless specified), commercial look, bright daylight",
  aspect_ratio_tags: ["2:3", "editorial", "fashion"],
  variables: [
    {
      name: "model_archetype",
      placeholder: "[model_archetype]",
      default_value: "androgynous model with sharp features",
      recommended_values: ["graceful elder model with silver hair", "diverse group of avant-garde models", "mysterious hooded figure", "elegant dancer in motion"],
      variable_behavior_note: "모델 아키타입을 바꾸면 화보가 전달하는 예술적 메시지와 브랜드의 '엣지'가 변경된다."
    },
    {
      name: "avant_garde_outfit",
      placeholder: "[avant_garde_outfit]",
      default_value: "architectural pleated silk gown in crimson",
      recommended_values: ["oversized metallic puffer coat", "minimalist black tailoring with deconstructed elements", "ethereal sheer fabric layers", "bold geometric leather structures"],
      variable_behavior_note: "의상을 바꾸면 화보의 테마(미니멀리즘 vs 맥시멀리즘)가 결정된다."
    }
  ],
  why_this_works: [
    "vogue aesthetic은 패션 업계의 가장 높은 시각적 기준을 충족시켜 브랜드의 위상을 즉각적으로 격상시킨다.",
    "cinematic grain과 professional color grading은 디지털의 차가움을 없애고 예술적인 아날로그 필름의 깊이감을 더한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "인물의 표정과 복잡한 직물의 디테일 표현이 타의 추종을 불허함." }],
  comparison_notes: "글로벌 패션 하우스의 시즌 캠페인 비주얼 수준의 압도적인 예술성을 보장한다.",
  variations: [{ label: "Studio Minimal", prompt_delta: "Change backdrop to plain charcoal grey, use single spotlight, focus on silhouette", use_case: "Minimalist brand campaigns", pre_generated_asset_id: null }],
  common_failure_modes: ["이미지가 너무 평범한 광고처럼 나오는 경우 → 'avant-garde, conceptual, unusual angles' 키워드 강화"],
  seo: {
    primary_keyword: "magazine editorial fashion prompt",
    secondary_keywords: ["high fashion ai photography", "vogue style prompt"],
    lsi_keywords: ["avant-garde outfit", "cinematic grain"],
    meta_title: "High-End Magazine Editorial Prompt | Midjourney v6 Verified",
    meta_description: "Design sophisticated fashion editorials for high-end magazines. Verified Midjourney v6 prompt for artistic brand campaigns."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-editorial-015-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Sophisticated high-end fashion editorial photography",
    width: 1000,
    height: 1500,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "editorial-015",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for high-fashion artistic consistency." }
};

export const minimalistBrandIdentityPrompt: PromptCard = {
  id: "mkt-branding-identity-016",
  slug: "minimalist-brand-identity-mockup-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Minimalist Brand Identity",
  result_first_title: "Clean and cohesive brand identity mockup with stationery and business cards",
  short_description: "Professional mockup for brand visual systems, featuring business cards, envelopes, and letterheads on premium paper.",
  emotional_hook: "이 프롬프트는 로고 하나가 브랜드의 철학으로 번져나가는, 정갈하고 질서 정연한 아름다움을 설계한다.",
  category: "marketing",
  vertical: "branding",
  use_cases: ["brand_guidelines", "client_presentation", "portfolio_showcase", "identity_design"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "minimalist brand identity mockup, [brand_industry], centered composition, [stationery_items], premium textured paper, [color_palette], soft natural window light, clean minimalist aesthetic, high-fidelity --ar 4:3 --v 6 --s 150",
  negative_prompt: "cluttered, messy, low resolution, dark, blurry, realistic (to avoid stock photo look), faces, text, distracting background, bright neon colors (unless specified)",
  aspect_ratio_tags: ["4:3", "branding", "mockup"],
  variables: [
    {
      name: "brand_industry",
      placeholder: "[brand_industry]",
      default_value: "luxury skincare brand",
      recommended_values: ["modern architectural firm", "sustainable coffee roastery", "high-tech software startup", "artisanal organic bakery"],
      variable_behavior_note: "산업군을 바꾸면 종이의 질감(매끄러운 vs 거친)과 전반적인 디자인 톤이 해당 분야의 문법에 맞춰 조정된다."
    },
    {
      name: "stationery_items",
      placeholder: "[stationery_items]",
      default_value: "business cards, letterhead, and a minimalist envelope",
      recommended_values: ["packaging boxes and shopping bag", "digital tablet and smartphone screens", "notebook and premium pen", "folded brochures and stickers"],
      variable_behavior_note: "아이템 구성을 바꾸면 브랜드의 고객 접점(터치포인트)을 다양하게 시각화할 수 있다."
    }
  ],
  why_this_works: [
    "premium textured paper 키워드는 단순한 그래픽을 넘어 실제 손에 잡힐 듯한 물리적 고급스러움을 부여한다.",
    "soft natural window light은 인위적인 스튜디오 조명보다 훨씬 편안하고 세련된 분위기를 연출한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "종이의 미세한 질감과 그림자의 깊이 표현이 매우 사실적임." }],
  comparison_notes: "브랜드 디자인 포트폴리오나 클라이언트 제안용 키 비주얼로 즉시 활용 가능한 품질을 제공한다.",
  variations: [{ label: "Dark Mode", prompt_delta: "Change color palette to charcoal and copper, use dark moody lighting", use_case: "Premium/Luxury branding", pre_generated_asset_id: null }],
  common_failure_modes: ["아이템들이 겹쳐서 난잡해 보이는 경우 → 'neatly organized, geometric arrangement' 키워드 추가"],
  seo: {
    primary_keyword: "minimalist brand identity mockup prompt",
    secondary_keywords: ["branding stationery ai design", "corporate identity mockup prompt"],
    lsi_keywords: ["textured paper", "natural light"],
    meta_title: "Minimalist Brand Identity Mockup Prompt | Midjourney v6 Verified",
    meta_description: "Design clean and cohesive brand identity mockups. Verified Midjourney v6 prompt for stationery and business cards."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-identity-016-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Clean minimalist brand identity stationery mockup",
    width: 1600,
    height: 1200,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "branding-016",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for branding layout consistency." }
};

export const outdoorBillboardPrompt: PromptCard = {
  id: "mkt-branding-billboard-017",
  slug: "outdoor-billboard-mockup-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Outdoor Billboard Mockup",
  result_first_title: "Massive outdoor billboard mockup in a prime urban location for brand campaigns",
  short_description: "High-impact outdoor advertising visualization, featuring large-scale billboards in realistic city environments.",
  emotional_hook: "이 프롬프트는 도심의 스카이라인을 장악하는 압도적인 크기감으로 브랜드의 스케일을 증명한다.",
  category: "marketing",
  vertical: "advertising",
  use_cases: ["brand_campaign", "outdoor_advertising", "marketing_presentation", "urban_mockup"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "large outdoor billboard mockup, [urban_location], [time_of_day], cinematic wide shot, [advertising_content] background, professional photography, hyper-realistic city environment --ar 16:9 --v 6 --s 200",
  negative_prompt: "low quality, blurry, messy, distorted billboard shape, unrealistic lighting, small billboards, cluttered foreground, people in focus",
  aspect_ratio_tags: ["16:9", "billboard", "advertising"],
  variables: [
    {
      name: "urban_location",
      placeholder: "[urban_location]",
      default_value: "Times Square-style bustling intersection",
      recommended_values: ["minimalist modern highway", "upscale shopping district", "foggy coastal bridge", "underground subway entrance"],
      variable_behavior_note: "도시 위치를 바꾸면 브랜드의 타겟 지역과 노출 맥락이 시각적으로 변화한다."
    },
    {
      name: "time_of_day",
      placeholder: "[time_of_day]",
      default_value: "dusk with vibrant city lights",
      recommended_values: ["bright sunny morning with clear sky", "rainy night with neon reflections", "foggy early morning", "golden hour sunset"],
      variable_behavior_note: "시간대를 바꾸면 조명 효과(전광판 빛 vs 자연광)가 달라져 분위기를 주도한다."
    }
  ],
  why_this_works: [
    "cinematic wide shot은 광고판의 거대한 물리적 존재감을 강조하며 주변 환경과의 조화를 보여준다.",
    "hyper-realistic city environment는 실제 집행될 광고의 느낌을 정확하게 시뮬레이션할 수 있게 돕는다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "도시 건물의 디테일과 전광판의 발광 표현이 매우 우수함." }],
  comparison_notes: "대형 브랜드의 캠페인 기획이나 클라이언트 설득용 고퀄리티 목업으로 최적이다.",
  variations: [{ label: "Mega Screen", prompt_delta: "Change to giant 3D anamorphic LED screen on a corner building", use_case: "Future-tech advertising", pre_generated_asset_id: null }],
  common_failure_modes: ["광고판이 작게 보이는 경우 → 'massive scale, skyscraper billboard' 키워드 추가"],
  seo: {
    primary_keyword: "outdoor billboard mockup prompt",
    secondary_keywords: ["urban advertising ai design", "city billboard prompt"],
    lsi_keywords: ["cinematic wide shot", "urban location"],
    meta_title: "Outdoor Billboard Mockup Prompt | Midjourney v6 Verified",
    meta_description: "Design massive outdoor billboard mockups in urban locations. Verified Midjourney v6 prompt for brand campaigns."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-billboard-017-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Massive urban outdoor billboard mockup",
    width: 1600,
    height: 900,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "billboard-017",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for billboard perspective." }
};

export const transitAdPrompt: PromptCard = {
  id: "mkt-branding-transit-018",
  slug: "transit-advertising-mockup-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Transit & Subway Advertising",
  result_first_title: "Vibrant subway station advertising posters and digital screens mockup",
  short_description: "Professional mockup for public transit advertising, including subway walls, bus stops, and digital kiosks.",
  emotional_hook: "이 프롬프트는 매일 수천 명의 시선이 머무는 길목, 그 찰나의 순간을 브랜드의 소리로 채운다.",
  category: "marketing",
  vertical: "advertising",
  use_cases: ["transit_advertising", "subway_campaign", "urban_marketing", "mockup_presentation"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "transit advertising mockup, [transit_type], clean minimalist poster designs, [lighting_vibe], blurred commuters in motion, high-end urban photography, hyper-detailed environment --ar 16:9 --v 6 --s 150",
  negative_prompt: "low quality, blurry (subjects), messy, cluttered foreground, people in focus, old stations, dirty environment",
  aspect_ratio_tags: ["16:9", "transit", "subway"],
  variables: [
    {
      name: "transit_type",
      placeholder: "[transit_type]",
      default_value: "modern Tokyo subway station platform",
      recommended_values: ["futuristic bus stop in a glass shelter", "clean airport terminal corridor", "underground train interior with digital screens", "exterior of a high-speed train wrapping"],
      variable_behavior_note: "교통 수단 종류를 바꾸면 노출 맥락과 시각적 혼잡도가 조정된다."
    }
  ],
  why_this_works: [
    "blurred commuters in motion은 정적인 광고판에 생동감을 더하고 실제 사람들이 활동하는 공간이라는 신뢰감을 준다.",
    "high-end urban photography 스타일은 일상적인 공간을 프리미엄 광고 매체로 격상시킨다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "도시 내부의 인공 조명과 반사광 표현이 매우 세련됨." }],
  comparison_notes: "생활 밀착형 브랜딩 캠페인의 시뮬레이션에 가장 적합한 고품질 이미지를 제공한다.",
  variations: [{ label: "Night Stop", prompt_delta: "Change to bus stop at night with glowing LED ads and wet pavement", use_case: "Nighttime campaigns", pre_generated_asset_id: null }],
  common_failure_modes: ["공간이 너무 지저분해 보이는 경우 → 'clean minimalist architecture, modern station' 키워드 추가"],
  seo: {
    primary_keyword: "transit advertising mockup prompt",
    secondary_keywords: ["subway ad design ai", "bus stop poster prompt"],
    lsi_keywords: ["motion blur commuters", "urban photography"],
    meta_title: "Transit & Subway Ad Mockup Prompt | Midjourney v6 Verified",
    meta_description: "Design professional transit and subway advertisements. Verified Midjourney v6 prompt for urban marketing campaigns."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-transit-018-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Modern subway station transit advertising mockup",
    width: 1600,
    height: 900,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "transit-018",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for urban realism." }
};

export const lookbookLayoutPrompt: PromptCard = {
  id: "mkt-branding-lookbook-019",
  slug: "fashion-lookbook-layout-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Fashion Lookbook Layout",
  result_first_title: "Minimalist fashion lookbook grid with multiple outfit variations and detail shots",
  short_description: "A professional layout for fashion brands, combining full-body shots and macro details in a cohesive grid.",
  emotional_hook: "이 프롬프트는 단편적인 사진들을 모아 브랜드가 지향하는 거대한 스타일의 세계관을 구축한다.",
  category: "marketing",
  vertical: "editorial",
  use_cases: ["fashion_lookbook", "ecommerce_grid", "brand_storytelling", "instagram_carousel"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "fashion lookbook layout, [brand_style] aesthetic, grid composition with multiple frames, [shot_types], minimalist white space, soft natural light, consistent professional color grading, high-end editorial style --ar 3:4 --v 6 --s 200",
  negative_prompt: "messy, cluttered, inconsistent lighting, low quality, blurry, text, logos, bright neon (unless specified), low resolution",
  aspect_ratio_tags: ["3:4", "lookbook", "fashion"],
  variables: [
    {
      name: "brand_style",
      placeholder: "[brand_style]",
      default_value: "Scandinavian minimalist",
      recommended_values: ["Parisian chic", "streetwear hypebeast", "bohemian artisanal", "futuristic techwear"],
      variable_behavior_note: "브랜드 스타일을 바꾸면 레이아웃 내 모든 프레임의 의상과 배경 톤이 일관되게 변경된다."
    },
    {
      name: "shot_types",
      placeholder: "[shot_types]",
      default_value: "mix of full-body and close-up fabric details",
      recommended_values: ["dynamic movement poses and static portraits", "interior setting and outdoor landscape shots", "multiple models and product flat lays"],
      variable_behavior_note: "샷 구성을 바꾸면 룩북이 전달하는 시각적 리듬과 정보량이 달라진다."
    }
  ],
  why_this_works: [
    "grid composition은 여러 피사체와 디테일을 한눈에 보여주어 브랜드의 시즌 테마를 강력하게 각인시킨다.",
    "minimalist white space는 이미지가 숨 쉴 공간을 주어 편집 디자인의 완성도를 높인다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "여러 프레임 간의 톤 앤 매너 일관성 유지가 매우 뛰어남." }],
  comparison_notes: "킨포크나 무지(MUJI) 스타일의 정갈하고 감성적인 브랜드 룩북을 구현하기에 최적이다.",
  variations: [{ label: "Action Focus", prompt_delta: "Change to sequence of action shots, motion blur, dynamic layout", use_case: "Activewear brands", pre_generated_asset_id: null }],
  common_failure_modes: ["프레임 간 조명이 다른 경우 → 'single lighting source, studio setting' 키워드 추가"],
  seo: {
    primary_keyword: "fashion lookbook layout prompt",
    secondary_keywords: ["brand storytelling grid ai", "ecommerce lookbook prompt"],
    lsi_keywords: ["grid composition", "minimalist white space"],
    meta_title: "Fashion Lookbook Layout Prompt | Midjourney v6 Verified",
    meta_description: "Design minimalist fashion lookbook grids for brands. Verified Midjourney v6 prompt for cohesive style storytelling."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-lookbook-019-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Minimalist fashion lookbook grid layout",
    width: 1200,
    height: 1600,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "lookbook-019",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for grid consistency." }
};

export const premiumGiftCardPrompt: PromptCard = {
  id: "mkt-branding-giftcard-020",
  slug: "premium-gift-card-design-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Premium Gift Card Design",
  result_first_title: "Luxurious gift card design with metallic foil and premium textured cardstock",
  short_description: "Professional design for retail and service brands, featuring high-end materials, elegant patterns, and a tangible sense of value.",
  emotional_hook: "이 프롬프트는 단순한 카드를 넘어, 누군가에게 전하고 싶은 가장 품격 있는 진심의 형태를 설계한다.",
  category: "marketing",
  vertical: "branding",
  use_cases: ["loyalty_program", "retail_marketing", "membership_card", "corporate_gift"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "premium gift card design, [card_theme], centered, [material_effect], elegant minimalist graphics, professional studio lighting, plain dark background, hyper-detailed texture --ar 3:2 --v 6 --s 250",
  negative_prompt: "low quality, blurry, messy, cheap looking plastic, bright neon (unless specified), text, logos, cluttered background, multiple cards",
  aspect_ratio_tags: ["3:2", "gift_card", "branding"],
  variables: [
    {
      name: "card_theme",
      placeholder: "[card_theme]",
      default_value: "high-end luxury boutique",
      recommended_values: ["sustainable eco-friendly organic shop", "modern minimalist tech brand", "vibrant artistic museum membership", "classic five-star hotel spa"],
      variable_behavior_note: "카드 테마를 바꾸면 브랜드의 성격에 맞는 상징적인 컬러와 그래픽 모티프가 선택된다."
    },
    {
      name: "material_effect",
      placeholder: "[material_effect]",
      default_value: "gold foil stamping on black matte paper",
      recommended_values: ["embossed silver on white textured linen", "transparent frosted acrylic with white ink", "recycled craft paper with dark green print", "iridescent holographic finish on pearl card"],
      variable_behavior_note: "재질 효과를 바꾸면 카드의 물리적 가치와 브랜드의 가격대가 시각화된다."
    }
  ],
  why_this_works: [
    "material_effect 키워드는 평면적인 카드를 넘어 실제 빛을 반사하고 질감이 느껴지는 '물질성'을 부여한다.",
    "3:2 aspect ratio는 실제 카드 규격과 유사하여 디자인 시안으로서의 실용성이 매우 높다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "박 가공(Foil stamping)과 형압(Embossing)의 빛 반사 표현이 극도로 정밀함." }],
  comparison_notes: "백화점이나 명품 브랜드에서 제공하는 최고급 멤버십/기프트 카드의 감성을 완벽하게 재현한다.",
  variations: [{ label: "Digital Version", prompt_delta: "Change to flat 2D graphic version, clean gradients, no shadows, focus on UI design", use_case: "Mobile app wallet cards", pre_generated_asset_id: null }],
  common_failure_modes: ["카드가 너무 평범해 보이는 경우 → 'intricate geometric patterns, premium stock' 키워드 보강"],
  seo: {
    primary_keyword: "premium gift card design prompt",
    secondary_keywords: ["luxury membership card ai", "retail loyalty card prompt"],
    lsi_keywords: ["metallic foil", "textured cardstock"],
    meta_title: "Premium Gift Card Design Prompt | Midjourney v6 Verified",
    meta_description: "Design luxurious gift and membership cards for retail brands. Verified Midjourney v6 prompt for high-end loyalty programs."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-giftcard-020-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Luxurious gold foil gift card design mockup",
    width: 1500,
    height: 1000,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "giftcard-020",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for material lighting fidelity." }
};

export const marketingPrompts: PromptCard[] = [
  productPhotoPrompt,
  fashionLifestylePrompt,
  techMockupPrompt,
  jewelryMacroPrompt,
  gourmetFoodPrompt,
  cosmeticsFlatlayPrompt,
  carPhotographyPrompt,
  fbIgProductAdPrompt,
  linkedinBannerPrompt,
  youtubeThumbnailPrompt,
  tiktokLifestylePrompt,
  newsletterHeaderPrompt,
  eventPosterPrompt,
  twitterViralCardPrompt,
  magazineEditorialPrompt,
  minimalistBrandIdentityPrompt,
  outdoorBillboardPrompt,
  transitAdPrompt,
  lookbookLayoutPrompt,
  premiumGiftCardPrompt
];
