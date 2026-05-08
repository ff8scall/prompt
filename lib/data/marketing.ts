import { PromptCard } from '../types';

export const productPhotoPrompt: PromptCard = {
  id: "marketing-product-photo-001",
  slug: "luxury-product-photography-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Luxury Product Photography Prompt",
  title_ko: "럭셔리 제품 사진 프롬프트",
  result_first_title: "Premium product photo with elegant studio lighting and soft reflections",
  result_first_title_ko: "우아한 스튜디오 조명과 부드러운 반사가 특징인 프리미엄 제품 사진",
  short_description: "High-end product photography for ecommerce listings, Instagram ads, and luxury brand campaigns. Works for cosmetics, jewelry, tech, and fashion accessories.",
  short_description_ko: "이커머스 리스팅, 인스타그램 광고, 럭셔리 브랜드 캠페인을 위한 하이엔드 제품 사진. 화장품, 주얼리, 테크, 패션 액세서리에 최적화되어 있습니다.",
  emotional_hook: "This prompt captures the moment a product glows serenely under the soft spotlights of a luxury department store showcase.",
  emotional_hook_ko: "이 프롬프트는 럭셔리 백화점 쇼케이스의 부드러운 스포트라이트 아래에서 제품이 고요하게 빛나는 순간을 포착합니다.",
  category: "marketing",
  vertical: "ecommerce",
  use_cases: ["instagram_ad", "amazon_listing", "shopify_banner", "product_catalog", "facebook_ad", "tiktok_product_video_thumbnail"],
  use_cases_ko: ["인스타그램 광고", "아마존 리스팅", "쇼피파이 배너", "제품 카탈로그", "페이스북 광고", "틱톡 제품 비디오 썸네일"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[product_description], luxury product photography, soft diffused studio lighting from upper left, elegant subtle reflections on surface, premium [background_type] background, high-end commercial photography, 8k detail, professional color grading, shallow depth of field --ar 4:5 --v 6 --s 150",
  negative_prompt: "busy cluttered background, harsh direct flash shadows, amateur lighting, watermark, text overlay, multiple products, crowded composition, oversaturated colors",
  aspect_ratio_tags: ["4:5", "instagram_feed", "product_ad", "ecommerce_listing"],
  variables: [
    {
      name: "product_description",
      name_ko: "제품 설명",
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
      variable_behavior_note: "Changing the product updates the subject while maintaining soft studio lighting, elegant reflections, and professional color grading. Reflection properties automatically adjust based on material (glass, metal, leather).",
      variable_behavior_note_ko: "제품 설명을 변경하면 부드러운 스튜디오 조명, 우아한 반사, 전문가급 컬러 그레이딩을 유지하면서 피사체가 업데이트됩니다. 반사 특성은 재질(유리, 금속, 가죽)에 따라 자동으로 조정됩니다."
    },
    {
      name: "background_type",
      name_ko: "배경 유형",
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
      variable_behavior_note: "Changing the background shifts the brand tone. Marble/Linen suits beauty products, Matte Black/Acrylic for tech, and Wood/Paper for eco-friendly brands.",
      variable_behavior_note_ko: "배경을 변경하면 브랜드 톤이 바뀝니다. 대리석/리넨은 뷰티 제품에, 매트 블랙/아크릴은 테크 제품에, 나무/종이는 친환경 브랜드에 적합합니다."
    }
  ],
  why_this_works: [
    "Soft diffused studio lighting is a universal setting applicable to beauty, tech, and fashion, providing a professional studio feel.",
    "The 4:5 aspect ratio is optimized for Instagram feeds and vertical thumbnails for Amazon and Shopify.",
    "Elegant subtle reflections emphasize the premium quality of the product without being overwhelming, mimicking actual studio results.",
    "Shallow depth of field isolates the product, focusing the viewer's attention and increasing CTR for ads.",
    "Stylize 150 suppresses Midjourney's default artistic tendencies for more realistic commercial results.",
    "The negative prompt 'busy cluttered background' ensures a clean, professional studio environment."
  ],
  why_this_works_ko: [
    "부드러운 확산형 스튜디오 조명은 뷰티, 테크, 패션에 보편적으로 적용 가능한 설정으로 전문적인 스튜디오 느낌을 제공합니다.",
    "4:5 종횡비는 인스타그램 피드와 아마존, 쇼피파이의 세로형 썸네일에 최적화되어 있습니다.",
    "우아하고 미묘한 반사는 과하지 않으면서도 제품의 프리미엄 품질을 강조하며 실제 스튜디오 결과물을 모방합니다.",
    "얕은 심도는 제품을 분리하여 시청자의 주의를 집중시키고 광고 클릭률(CTR)을 높입니다.",
    "Stylize 150 설정은 미드저니의 기본 예술적 성향을 억제하여 더 사실적인 상업적 결과물을 만들어냅니다.",
    "'복잡한 배경(busy cluttered background)' 네거티브 프롬프트는 깨끗하고 전문적인 스튜디오 환경을 보장합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Excellent at rendering material textures (glass, metal, plastic). It cannot generate actual brand logos or text, so these should be added during post-processing. A stylize range of 100-200 is ideal for commercial product photography.",
      note_ko: "질감(유리, 금속, 플라스틱) 렌더링이 뛰어납니다. 실제 브랜드 로고나 텍스트는 생성할 수 없으므로 후처리 과정에서 추가해야 합니다. 상업용 제품 사진에는 stylize 범위를 100-200으로 설정하는 것이 이상적입니다."
    },
    {
      model: "dall-e-3",
      version: "current",
      note: "Often more realistic and closer to advertising studio quality than Midjourney. Use natural language descriptions like 'vertical format for Instagram' instead of aspect ratio parameters.",
      note_ko: "종종 미드저니보다 더 사실적이고 광고 스튜디오 품질에 가깝습니다. 종횡비 파라미터 대신 '인스타그램용 세로 형식'과 같은 자연어 설명을 사용하세요."
    }
  ],
  comparison_notes: "Midjourney v6 provides an artistic premium mood, while DALL-E 3 is more realistic and closer to studio standards. Recommend Midjourney for Instagram/Beauty and DALL-E 3 for Amazon/Ecommerce detail pages. Post-processing for logos in Canva/Figma is required for both.",
  comparison_notes_ko: "미드저니 v6는 예술적인 프리미엄 분위기를 제공하는 반면, DALL-E 3는 더 사실적이고 스튜디오 표준에 가깝습니다. 인스타그램/뷰티용으로는 미드저니를, 아마존/이커머스 상세 페이지용으로는 DALL-E 3를 권장합니다. 로고 추가를 위한 Canva/Figma 후처리는 두 모델 모두 필수입니다.",
  variations: [
    {
      label: "Lifestyle/Contextual shot",
      label_ko: "라이프스타일/맥락 샷",
      prompt_delta: "Add lifestyle context: product on vanity table with flowers, morning light, lifestyle photography",
      pre_generated_asset_id: "marketing_product_lifestyle_001",
      use_case: "Instagram lifestyle content, brand storytelling",
      use_case_ko: "인스타그램 라이프스타일 콘텐츠, 브랜드 스토리텔링"
    },
    {
      label: "Flat lay/Top-down",
      label_ko: "플랫 레이/탑다운",
      prompt_delta: "Change to flat lay composition, top-down view, product surrounded by complementary items, knolling style --ar 1:1",
      pre_generated_asset_id: "marketing_product_flatlay_001",
      use_case: "Instagram carousel, unboxing content, Pinterest",
      use_case_ko: "인스타그램 캐러셀, 언박싱 콘텐츠, 핀터레스트"
    },
    {
      label: "Dramatic/High contrast",
      label_ko: "드라마틱/고대비",
      prompt_delta: "Replace soft lighting with dramatic side lighting, strong shadows, cinematic mood, dark background",
      pre_generated_asset_id: "marketing_product_dramatic_001",
      use_case: "Luxury brand campaigns, perfume ads, high-end fashion",
      use_case_ko: "럭셔리 브랜드 캠페인, 향수 광고, 하이엔드 패션"
    }
  ],
  common_failure_modes: [
    "Product appearing with cluttered items: Strengthen negative prompt with 'multiple products, crowded' or specify a minimal background.",
    "Lighting too harsh or weak: Adjust keywords like 'soft diffused' or 'subtle' for lighting.",
    "Broken brand logos or text: This is a limitation of Midjourney/DALL-E. Add logos separately in Photoshop/Canva.",
    "Reflections obscuring the product: Change to 'subtle reflections' or lower the reflection keyword intensity."
  ],
  common_failure_modes_ko: [
    "복잡한 아이템과 함께 제품이 나타나는 경우: 'multiple products, crowded'로 네거티브 프롬프트를 강화하거나 미니멀한 배경을 지정하세요.",
    "조명이 너무 강하거나 약한 경우: 'soft diffused' 또는 'subtle'과 같은 키워드를 조정하여 조명을 조절하세요.",
    "브랜드 로고나 텍스트가 깨지는 경우: 이는 모델의 한계입니다. Photoshop/Canva에서 별도로 로고를 추가하세요.",
    "반사가 제품을 가리는 경우: 'subtle reflections'로 변경하거나 반사 키워드의 강도를 낮추세요."
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
    meta_title_ko: "럭셔리 제품 사진 프롬프트 | 미드저니 v6 이커머스",
    meta_description: "Create premium product photos for Instagram and Amazon with verified Midjourney v6 prompt. Includes 3 variations: lifestyle, flat lay, dramatic lighting.",
    meta_description_ko: "검증된 미드저니 v6 프롬프트로 인스타그램 및 아마존용 프리미엄 제품 사진을 제작하세요. 라이프스타일, 플랫 레이, 드라마틱 조명의 3가지 변형이 포함되어 있습니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-product-photo-001-hero.webp",
    thumbnail: "/images/prompts/marketing-product-photo-001-thumb.webp",
    variations: [
      "/images/prompts/marketing-product-lifestyle-001.webp",
      "/images/prompts/marketing-product-flatlay-001.webp",
      "/images/prompts/marketing-product-dramatic-001.webp"
    ],
    alt_text: "Luxury perfume bottle product photography with soft studio lighting on marble surface",
    alt_text_ko: "대리석 표면 위 부드러운 스튜디오 조명이 비치는 럭셔리 향수 병 제품 사진",
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
  title_ko: "인스타그램 패션 라이프스타일",
  result_first_title: "Candid lifestyle fashion photography with natural golden hour lighting",
  result_first_title_ko: "자연스러운 골든 아워 조명이 특징인 스냅 형식의 라이프스타일 패션 사진",
  short_description: "Aesthetic fashion photography for clothing brands, influencers, and lookbook content on social media.",
  short_description_ko: "의류 브랜드, 인플루언서, 소셜 미디어 룩북 콘텐츠를 위한 감성적인 패션 사진.",
  emotional_hook: "This prompt captures magical moments under the pouring sunlight where ordinary daily life transforms into a scene from a movie.",
  emotional_hook_ko: "이 프롬프트는 쏟아지는 햇살 아래 평범한 일상이 영화의 한 장면으로 변하는 마법 같은 순간을 포착합니다.",
  category: "marketing",
  vertical: "lifestyle",
  use_cases: ["instagram_content", "fashion_lookbook", "brand_storytelling", "influencer_marketing"],
  use_cases_ko: ["인스타그램 콘텐츠", "패션 룩북", "브랜드 스토리텔링", "인플루언서 마케팅"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[model_description] wearing [outfit_details], candid lifestyle photography, [location_setting], natural golden hour lighting, soft film grain, vogue aesthetic, high-end fashion editorial style --ar 4:5 --v 6 --s 250",
  negative_prompt: "studio lighting, harsh shadows, heavy makeup, posing for camera, looking at camera, low quality, amateur photography, distorted face",
  aspect_ratio_tags: ["4:5", "instagram", "fashion"],
  variables: [
    {
      name: "model_description",
      name_ko: "모델 설명",
      placeholder: "[model_description]",
      default_value: "graceful young woman",
      recommended_values: ["stylish male model", "diverse group of friends", "mature elegant woman", "streetwear enthusiast"],
      variable_behavior_note: "Changing the model modifies the brand's target persona, but maintains the natural lifestyle tone and high-end editorial sentiment.",
      variable_behavior_note_ko: "모델을 변경하면 브랜드의 타겟 페르소나가 수정되지만, 자연스러운 라이프스타일 톤과 하이엔드 에디토리얼 정서는 유지됩니다."
    },
    {
      name: "location_setting",
      name_ko: "위치 설정",
      placeholder: "[location_setting]",
      default_value: "at a Parisian street cafe",
      recommended_values: ["on a sun-drenched rooftop", "walking through a minimalist art gallery", "in a cozy urban apartment", "at a serene beach during sunset"],
      variable_behavior_note: "Changing the location alters the context of the attire and brand image. Urban areas emphasize sophistication, while vacation spots highlight freedom.",
      variable_behavior_note_ko: "위치를 변경하면 의상과 브랜드 이미지의 맥락이 바뀝니다. 도시 지역은 세련미를 강조하고, 휴양지는 자유로움을 돋보이게 합니다."
    }
  ],
  why_this_works: [
    "Natural golden hour lighting expresses people and attire in the most beautiful and warm manner, increasing social media engagement.",
    "Candid lifestyle photography gains consumer trust and empathy for the brand by reducing a staged feel."
  ],
  why_this_works_ko: [
    "자연스러운 골든 아워 조명은 인물과 의상을 가장 아름답고 따뜻하게 표현하여 소셜 미디어 참여도를 높여줍니다.",
    "스냅 형식의 라이프스타일 사진은 연출된 느낌을 줄여 브랜드에 대한 소비자의 신뢰와 공감을 얻는 데 유리합니다."
  ],
  model_notes: [{ 
    model: "midjourney", 
    version: "v6", 
    note: "Extremely realistic representation of skin textures and fabric weaves.",
    note_ko: "피부 질감과 직물 짜임새를 매우 사실적으로 표현합니다."
  }],
  comparison_notes: "Provides emotional fashion visuals that draw the highest reactions on Instagram feeds.",
  comparison_notes_ko: "인스타그램 피드에서 가장 높은 반응을 이끌어내는 감성적인 패션 비주얼을 제공합니다.",
  variations: [{ 
    label: "Black & White", 
    label_ko: "흑백",
    prompt_delta: "Change to high-contrast black and white film photography", 
    use_case: "Artistic campaigns", 
    use_case_ko: "예술적 캠페인",
    pre_generated_asset_id: null 
  }],
  common_failure_modes: ["Poses appearing too awkward -> add 'unposed, relaxed movement' keywords."],
  common_failure_modes_ko: ["포즈가 너무 어색하게 나타남 -> 'unposed, relaxed movement' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "instagram fashion prompt",
    secondary_keywords: ["lifestyle photography ai", "fashion lookbook prompt"],
    lsi_keywords: ["golden hour lighting", "editorial style"],
    meta_title: "Instagram Fashion Lifestyle Prompt | Midjourney v6 Verified",
    meta_title_ko: "인스타그램 패션 라이프스타일 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Create aesthetic fashion photos for Instagram. Verified Midjourney v6 prompt for brands and influencers.",
    meta_description_ko: "인스타그램을 위한 감성적인 패션 사진을 제작하세요. 브랜드와 인플루언서를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-fashion-002-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Aesthetic lifestyle fashion photography",
    alt_text_ko: "감성적인 라이프스타일 패션 사진",
    width: 1000,
    height: 1250,
    format: "webp",
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
  title_ko: "미니멀 테크 제품 목업",
  result_first_title: "Sleek tech product photography with apple-style minimalist aesthetic",
  result_first_title_ko: "애플 스타일의 미니멀 미학이 돋보이는 세련된 테크 제품 사진",
  short_description: "Professional product shots for gadgets, hardware, and tech accessories with a focus on form and material.",
  short_description_ko: "형태와 소재에 중점을 둔 가젯, 하드웨어 및 테크 액세서리용 전문 제품 사진입니다.",
  emotional_hook: "This prompt captures the cold yet intellectual charm that arises when technical sophistication meets restrained minimalism.",
  emotional_hook_ko: "이 프롬프트는 기술적 정교함이 절제된 미니멀리즘과 만날 때 발생하는 차갑고 지적인 매력을 포착합니다.",
  category: "marketing",
  vertical: "tech",
  use_cases: ["tech_startup", "gadget_listing", "product_launch", "hardware_branding"],
  use_cases_ko: ["테크 스타트업", "가젯 리스팅", "제품 출시", "하드웨어 브랜딩"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[tech_product], [material_finish], minimalist product photography, clean white background, soft studio lighting with crisp shadows, industrial design focus, 8k resolution, apple-style aesthetic --ar 16:9 --v 6 --s 200",
  negative_prompt: "busy background, glowing neon, low quality, cluttered, outdated tech, cheap plastic texture",
  aspect_ratio_tags: ["16:9", "tech", "minimalist"],
  variables: [
    {
      name: "tech_product",
      name_ko: "테크 제품",
      placeholder: "[tech_product]",
      default_value: "high-end wireless earbuds",
      recommended_values: ["sleek aluminum laptop", "smart home hub with glass finish", "premium mechanical keyboard", "minimalist fitness tracker"],
      variable_behavior_note: "Changing the product modifies the hardware design, but maintains the refined minimalist white mood unique to Apple.",
      variable_behavior_note_ko: "제품을 변경하면 하드웨어 디자인이 수정되지만, Apple 특유의 정제된 미니멀 화이트 무드는 유지됩니다."
    }
  ],
  why_this_works: [
    "Apple-style aesthetic is the most preferred design language in the tech industry, instilling an immediate premium impression.",
    "Crisp shadows bring out the three-dimensional feel of the product while maintaining cleanliness, making it optimal for detail page thumbnails."
  ],
  why_this_works_ko: [
    "Apple 스타일의 미학은 테크 업계에서 가장 선호되는 디자인 언어로, 즉각적인 프리미엄 인상을 심어줍니다.",
    "선명한 그림자는 깔끔함을 유지하면서 제품의 입체감을 살려주어, 상세 페이지 썸네일에 최적화되어 있습니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional representation of reflective textures on metal and plastic.",
      note_ko: "금속과 플라스틱의 반사 질감 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Guarantees high-quality product images most suitable for tech startup websites and marketing materials.",
  comparison_notes_ko: "테크 스타트업 웹사이트 및 마케팅 자료에 가장 적합한 고품질 제품 이미지를 보장합니다.",
  variations: [
    {
      label: "Space Gray",
      label_ko: "스페이스 그레이",
      prompt_delta: "Change white background to deep gray, anodized aluminum finish",
      use_case: "Dark theme products",
      use_case_ko: "어두운 테마 제품",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Details appearing blurry -> reinforce with 'macro photography, sharp focus' keywords."],
  common_failure_modes_ko: ["디테일이 흐릿하게 보임 -> 'macro photography, sharp focus' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "tech product mockup prompt",
    secondary_keywords: ["minimalist gadget photo ai", "apple style prompt"],
    lsi_keywords: ["industrial design", "studio lighting"],
    meta_title: "Minimalist Tech Product Mockup Prompt | Midjourney v6 Verified",
    meta_title_ko: "미니멀 테크 제품 목업 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate professional tech product shots with a clean minimalist aesthetic. Verified Midjourney v6 prompt for gadgets.",
    meta_description_ko: "깔끔하고 미니멀한 미감의 전문 테크 제품 사진을 생성하세요. 가젯을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-tech-003-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Sleek tech product on white background",
    alt_text_ko: "화이트 배경 위의 세련된 테크 제품",
    width: 1600,
    height: 900,
    format: "webp",
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
  title_ko: "럭셔리 주얼리 매크로 사진",
  result_first_title: "Stunning close-up of high-end jewelry with sparkling diamonds and elegant reflections",
  result_first_title_ko: "반짝이는 다이아몬드와 우아한 반사가 특징인 하이엔드 주얼리 초근접 샷",
  short_description: "Macro photography for jewelry brands, focusing on gems, precious metals, and intricate craftsmanship.",
  short_description_ko: "보석, 귀금속 및 정교한 장인 정신에 초점을 맞춘 주얼리 브랜드용 매크로 사진 프롬프트입니다.",
  emotional_hook: "This prompt delves into the heart of gems with everlasting brilliance, as if through a microscope.",
  emotional_hook_ko: "이 프롬프트는 영원한 광채를 지닌 보석의 심장부를 마치 현미경으로 들여다보듯 세밀하게 포착합니다.",
  category: "marketing",
  vertical: "jewelry",
  use_cases: ["jewelry_catalog", "luxury_ad", "high_end_ecommerce", "engagement_campaign"],
  use_cases_ko: ["주얼리 카탈로그", "럭셔리 광고", "하이엔드 이커머스", "약혼/결혼 캠페인"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[jewelry_type], macro photography, extreme close-up, [lighting_style], sparkling diamonds with caustic reflections, 18k [metal_color] gold, dark reflective surface, high-end commercial photography --ar 4:5 --v 6 --s 350",
  negative_prompt: "blurry gem, out of focus, poor lighting, hand holding jewelry, amateur shot, low resolution, fingerprint, dust",
  aspect_ratio_tags: ["4:5", "jewelry", "macro"],
  variables: [
    {
      name: "jewelry_type",
      name_ko: "주얼리 유형",
      placeholder: "[jewelry_type]",
      default_value: "diamond engagement ring",
      recommended_values: ["sapphire pendant necklace", "emerald stud earrings", "platinum luxury watch", "ruby tennis bracelet"],
      variable_behavior_note: "Changing the gem and jewelry types modifies gemstone colors and setting designs, but maintains the ultra-precision detail unique to macro shots.",
      variable_behavior_note_ko: "보석과 주얼리 유형을 변경하면 보석 색상과 세팅 디자인이 수정되지만, 매크로 샷 특유의 초정밀 디테일은 유지됩니다."
    }
  ],
  why_this_works: [
    "Caustic reflections maximize light refraction within the gem, granting splendor on par with actual high-jewelry advertisements.",
    "Extreme close-ups visually emphasize product completeness and rarity, stimulating purchase desire."
  ],
  why_this_works_ko: [
    "가성 반사(Caustic reflections)는 보석 내부의 빛 굴절을 극대화하여 실제 하이 주얼리 광고와 같은 화려함을 부여합니다.",
    "초근접 촬영은 제품의 완결성과 희소성을 시각적으로 강조하여 구매 욕구를 자극합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "The ability to express metallic reflections and gemstone transparency is divine.",
      note_ko: "금속 반사와 보석의 투명도를 표현하는 능력이 경이로운 수준입니다."
    }
  ],
  comparison_notes: "Overwhelmingly represents the minute details and brilliance unique to jewelry.",
  comparison_notes_ko: "주얼리 특유의 미세한 디테일과 광채를 압도적으로 표현합니다.",
  variations: [
    {
      label: "Natural Lighting",
      label_ko: "자연 조명",
      prompt_delta: "Change to soft window light, blurred garden background",
      use_case: "Bohemian jewelry brands",
      use_case_ko: "보헤미안 주얼리 브랜드",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Gems appearing like fake glass -> add 'internal light refraction' keywords."],
  common_failure_modes_ko: ["보석이 가짜 유리처럼 보임 -> 'internal light refraction' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "jewelry macro prompt",
    secondary_keywords: ["diamond photography ai", "luxury jewelry ad prompt"],
    lsi_keywords: ["macro close-up", "caustic reflections"],
    meta_title: "Luxury Jewelry Macro Prompt | Midjourney v6 Verified",
    meta_title_ko: "럭셔리 주얼리 매크로 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate stunning close-up jewelry photos with sparkling gems. Verified Midjourney v6 prompt for luxury brands.",
    meta_description_ko: "반짝이는 보석이 돋보이는 놀라운 주얼리 근접 사진을 생성하세요. 럭셔리 브랜드를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-jewelry-004-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Extreme macro of a diamond ring",
    alt_text_ko: "다이아몬드 반지의 초근접 매크로 사진",
    width: 1000,
    height: 1250,
    format: "webp",
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
  title_ko: "고메 푸드 사진",
  result_first_title: "Hyper-realistic gourmet burger with melting cheese and fresh ingredients for food ads",
  result_first_title_ko: "녹아내리는 치즈와 신선한 재료가 돋보이는 음식 광고용 하이퍼 리얼리스틱 고메 버거",
  short_description: "Mouth-watering food photography for restaurants, delivery apps, and culinary marketing.",
  short_description_ko: "레스토랑, 배달 앱 및 요리 마케팅을 위한 군침 도는 음식 사진 프롬프트입니다.",
  emotional_hook: "This prompt creates vivid sensory stimulation, as if the aroma of freshly baked bread and the flavor of succulent meat are bursting through the screen.",
  emotional_hook_ko: "이 프롬프트는 갓 구운 빵의 향기와 육즙이 가득한 고기의 풍미가 화면을 뚫고 나올 듯한 생생한 감각적 자극을 선사합니다.",
  category: "marketing",
  vertical: "food",
  use_cases: ["restaurant_menu", "delivery_app_photo", "food_blog", "culinary_ad"],
  use_cases_ko: ["레스토랑 메뉴", "배달 앱 사진", "푸드 블로그", "요리 광고"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[food_item], professional food photography, top-down angle, dramatic side lighting, steam rising, macro detail, wooden table background, gourmet styling, 8k resolution --ar 4:5 --v 6 --s 150",
  negative_prompt: "unappetizing, messy, dark, blurry, low resolution, hands in frame, plastic texture",
  aspect_ratio_tags: ["4:5", "food", "gourmet"],
  variables: [
    {
      name: "food_item",
      name_ko: "음식 항목",
      placeholder: "[food_item]",
      default_value: "artisan beef burger with melting cheddar and caramelized onions",
      recommended_values: ["authentic napoli pizza with fresh basil", "colorful sushi platter on slate", "steaming bowl of tonkotsu ramen", "delicate french macarons"],
      variable_behavior_note: "Changing the food type modifies textures and styling, but maintains the vivid details and professional lighting that stimulate the appetite.",
      variable_behavior_note_ko: "음식 유형을 변경하면 질감과 스타일링이 수정되지만, 식욕을 자극하는 생생한 디테일과 전문적인 조명은 유지됩니다."
    }
  ],
  why_this_works: [
    "Dramatic side lighting highlights food textures (grain, moisture, crispness), maximizing visual palatability.",
    "Rising steam communicates food freshness and temperature, inducing an immediate response."
  ],
  why_this_works_ko: [
    "드라마틱한 측면 조명은 음식의 질감(결, 수분, 바삭함)을 강조하여 시각적인 맛을 극대화합니다.",
    "피어오르는 김은 음식의 신선도와 온도를 전달하여 즉각적인 반응을 유도합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Photorealistically depicts ingredient textures and colors.",
      note_ko: "재료의 질감과 색상을 포토리얼리스틱하게 묘사합니다."
    }
  ],
  comparison_notes: "Guarantees high commercial quality ready for immediate use in delivery apps or menus.",
  comparison_notes_ko: "배달 앱이나 메뉴판에서 즉시 사용할 수 있는 높은 상업적 품질을 보장합니다.",
  variations: [
    {
      label: "Bright Cafe",
      label_ko: "밝은 카페",
      prompt_delta: "Change to bright natural light, marble table, flat lay",
      use_case: "Instagram-worthy cafe food",
      use_case_ko: "인스타그램 감성 카페 음식",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Food appearing like processed goods -> add 'freshly cooked, natural textures' keywords."],
  common_failure_modes_ko: ["음식이 가공품처럼 보임 -> 'freshly cooked, natural textures' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "gourmet food photography prompt",
    secondary_keywords: ["food ad ai prompt", "restaurant menu photo ai"],
    lsi_keywords: ["macro food detail", "gourmet styling"],
    meta_title: "Gourmet Food Photography Prompt | Midjourney v6 Verified",
    meta_title_ko: "고메 푸드 사진 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Create mouth-watering food photos for menus and ads. Verified Midjourney v6 prompt for restaurants and delivery apps.",
    meta_description_ko: "메뉴와 광고를 위한 군침 도는 음식 사진을 제작하세요. 레스토랑과 배달 앱을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-food-005-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Hyper-realistic gourmet burger ad",
    alt_text_ko: "하이퍼 리얼리스틱 고메 버거 광고",
    width: 1000,
    height: 1250,
    format: "webp",
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
  title_ko: "코스메틱 플랫 레이 사진",
  result_first_title: "Aesthetic flat lay of cosmetics and skincare products on neutral textured background",
  result_first_title_ko: "뉴트럴 톤의 질감 있는 배경 위에 배치된 감성적인 코스메틱 및 스킨케어 플랫 레이",
  short_description: "Stylish, Instagram-worthy product arrangements for beauty brands and lifestyle influencers.",
  short_description_ko: "뷰티 브랜드와 라이프스타일 인플루언서를 위한 세련되고 인스타그램 감성이 넘치는 제품 배치 사진 프롬프트입니다.",
  emotional_hook: "This prompt presents sensory pleasure given by soft textures that caress the skin and neat arrangements.",
  emotional_hook_ko: "이 프롬프트는 피부를 어루만지는 부드러운 질감과 깔끔한 배치가 주는 감각적 즐거움을 선사합니다.",
  category: "marketing",
  vertical: "beauty",
  use_cases: ["instagram_flatlay", "beauty_blog", "skincare_branding", "pinterest_content"],
  use_cases_ko: ["인스타그램 플랫레이", "뷰티 블로그", "스킨케어 브랜딩", "핀터레스트 콘텐츠"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[product_list], cosmetics flat lay, top-down view, organized composition, [accent_elements], neutral linen background, soft diffused natural light, high-end beauty photography --ar 1:1 --v 6 --s 200",
  negative_prompt: "cluttered, messy, harsh lighting, shadows, low quality, human hands, blurry gems",
  aspect_ratio_tags: ["1:1", "beauty", "flatlay"],
  variables: [
    {
      name: "product_list",
      name_ko: "제품 리스트",
      placeholder: "[product_list]",
      default_value: "minimalist glass serum bottle and cream jar",
      recommended_values: ["luxury lipstick collection with swatches", "herbal skincare set with natural ingredients", "organic facial oils and flowers", "premium foundation and makeup brushes"],
      variable_behavior_note: "Changing the product list alters the brand concept, but maintains the neat horizontal layout (flat lay) style unique to Instagram.",
      variable_behavior_note_ko: "제품 리스트를 변경하면 브랜드 컨셉이 바뀌지만, 인스타그램 특유의 깔끔한 수평 배치(플랫 레이) 스타일은 유지됩니다."
    },
    {
      name: "accent_elements",
      name_ko: "액센트 요소",
      placeholder: "[accent_elements]",
      default_value: "white rose petals and gold silk",
      recommended_values: ["fresh eucalyptus leaves", "rough stone textures", "soft shadow of a window frame", "pearls and silver jewelry"],
      variable_behavior_note: "Changing props alters the brand mood to sophisticated (stone), feminine (rose), or natural (leaves).",
      variable_behavior_note_ko: "소품을 변경하면 브랜드 분위기가 세련된(돌), 여성스러운(장미), 또는 자연스러운(잎사귀) 느낌으로 바뀝니다."
    }
  ],
  why_this_works: [
    "A top-down view is optimal for showing the brand lineup at a glance by arranging products equally.",
    "The neutral linen background serves as a calm supporting role so that product colors and designs stand out."
  ],
  why_this_works_ko: [
    "탑다운 뷰는 제품을 균등하게 배치하여 브랜드 라인업을 한눈에 보여주기에 최적입니다.",
    "뉴트럴 리넨 배경은 차분한 조연 역할을 하여 제품의 색상과 디자인이 돋보이게 합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Perfectly captures minute differences in textures (glass, cream, fabric).",
      note_ko: "유리, 크림, 직물 등 질감의 미세한 차이를 완벽하게 포착합니다."
    }
  ],
  comparison_notes: "Provides the most consistent and sophisticated style in creating Instagram-aesthetic beauty content.",
  comparison_notes_ko: "인스타그램 감성의 뷰티 콘텐츠를 제작하는 데 있어 가장 일관되고 세련된 스타일을 제공합니다.",
  variations: [
    {
      label: "Action/Texture",
      label_ko: "액션/질감",
      prompt_delta: "Add cream smudges and liquid splashes for texture focus",
      use_case: "Texture shots",
      use_case_ko: "질감 강조 샷",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Items overlapping awkwardly -> add 'organized flat lay, no overlap' keywords."],
  common_failure_modes_ko: ["아이템이 어색하게 겹침 -> 'organized flat lay, no overlap' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "cosmetics flat lay prompt",
    secondary_keywords: ["beauty photography ai", "skincare photo prompt"],
    lsi_keywords: ["top-down view", "neutral background"],
    meta_title: "Cosmetics Flat Lay Prompt | Midjourney v6 Verified",
    meta_title_ko: "코스메틱 플랫 레이 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design aesthetic beauty flat lays for Instagram. Verified Midjourney v6 prompt for skincare and makeup brands.",
    meta_description_ko: "인스타그램을 위한 감성적인 뷰티 플랫 레이를 디자인하세요. 스킨케어 및 메이크업 브랜드를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-cosmetics-006-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Aesthetic cosmetics flat lay arrangement",
    alt_text_ko: "감성적인 코스메틱 플랫 레이 배치 사진",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "프리미엄 자동차 사진",
  result_first_title: "Sleek luxury car in urban nighttime setting with dramatic light trails",
  result_first_title_ko: "드라마틱한 빛의 궤적이 있는 도시의 밤 풍경 속 세련된 럭셔리 카",
  short_description: "High-end automotive photography for brand campaigns and car enthusiasts.",
  short_description_ko: "브랜드 캠페인과 자동차 애호가들을 위한 하이엔드 자동차 사진 프롬프트입니다.",
  emotional_hook: "This prompt chases the dynamism of machines cutting through the night city and the light trails formed on that cold metal.",
  emotional_hook_ko: "이 프롬프트는 밤의 도시를 가르는 기계의 역동성과 그 차가운 금속 위에 형성되는 빛의 궤적을 쫓습니다.",
  category: "marketing",
  vertical: "automotive",
  use_cases: ["car_ad", "brand_campaign", "automotive_blog", "desktop_wallpaper"],
  use_cases_ko: ["자동차 광고", "브랜드 캠페인", "자동차 블로그", "데스크탑 월페이퍼"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[car_model], side profile, [location_setting], long exposure light trails, motion blur, cinematic nighttime lighting, wet pavement, high-speed photography aesthetic --ar 21:9 --v 6 --s 300",
  negative_prompt: "daylight, stationary car, low detail, people, amateur photography, distorted wheels, bright sun",
  aspect_ratio_tags: ["21:9", "automotive", "cinematic"],
  variables: [
    {
      name: "car_model",
      name_ko: "자동차 모델",
      placeholder: "[car_model]",
      default_value: "modern electric supercar with aerodynamic curves",
      recommended_values: ["classic vintage porsche 911", "rugged off-road expedition vehicle", "futuristic concept hydrogen car", "luxury executive sedan"],
      variable_behavior_note: "Changing the vehicle model modifies form and texture, but maintains the long exposure effect with a sense of speed and cinematic night lighting.",
      variable_behavior_note_ko: "차량 모델을 변경하면 형태와 질감이 수정되지만, 속도감 넘치는 장노출 효과와 시네마틱한 야간 조명은 유지됩니다."
    }
  ],
  why_this_works: [
    "Long exposure light trails increase visual immersion by granting explosive speed within a static image.",
    "The 21:9 ratio presents a cinematic panoramic view, emphasizing the grandeur of luxury car brands."
  ],
  why_this_works_ko: [
    "장노출 빛의 궤적은 정적인 이미지에 폭발적인 속도감을 부여하여 시각적 몰입도를 높여줍니다.",
    "21:9 비율은 시네마틱한 파노라마 뷰를 제공하여 럭셔리 자동차 브랜드의 웅장함을 강조합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Extremely realistic representation of metallic reflections and motion blur.",
      note_ko: "금속 반사와 모션 블러 표현이 매우 사실적입니다."
    }
  ],
  comparison_notes: "Perfectly implements the 'Night City Drive' aesthetics most preferred in car advertisements.",
  comparison_notes_ko: "자동차 광고에서 가장 선호되는 '나이트 시티 드라이브' 미학을 완벽하게 구현합니다.",
  variations: [
    {
      label: "Sunset Desert",
      label_ko: "일몰 사막",
      prompt_delta: "Change to desert road at sunset, warm golden glow, dust trails",
      use_case: "SUV/Adventure brands",
      use_case_ko: "SUV/어드벤처 브랜드",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Wheels appearing distorted -> add 'perfectly circular alloy wheels' keywords."],
  common_failure_modes_ko: ["휠이 왜곡되어 보임 -> 'perfectly circular alloy wheels' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "premium car photography prompt",
    secondary_keywords: ["automotive ad ai", "car wallpaper prompt"],
    lsi_keywords: ["light trails", "motion blur photography"],
    meta_title: "Premium Car Photography Prompt | Midjourney v6 Verified",
    meta_title_ko: "프리미엄 자동차 사진 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate cinematic car photos with light trails and motion blur. Verified Midjourney v6 prompt for automotive ads.",
    meta_description_ko: "빛의 궤적과 모션 블러가 포함된 시네마틱한 자동차 사진을 생성하세요. 자동차 광고를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/marketing-car-007-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Sleek luxury car with light trails",
    alt_text_ko: "빛의 궤적과 함께 달리는 세련된 럭셔리 카",
    width: 2100,
    height: 900,
    format: "webp",
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
  title_ko: "인스타그램 제품 광고 디자인",
  result_first_title: "Aesthetic Instagram product photography with trendy props and soft lighting",
  result_first_title_ko: "트렌디한 소품과 부드러운 조명이 특징인 감성적인 인스타그램 제품 사진",
  short_description: "High-end product showcase for social media ads, featuring curated aesthetics, lifestyle props, and premium lighting.",
  short_description_ko: "큐레이션된 미감, 라이프스타일 소품, 프리미엄 조명을 활용한 소셜 미디어 광고용 하이엔드 제품 쇼케이스 프롬프트입니다.",
  emotional_hook: "Beyond simple product exposure, this prompt stimulates desire by visualizing the wannabe lifestyle consumers aspire to.",
  emotional_hook_ko: "단순한 제품 노출을 넘어, 소비자들이 갈망하는 '워너비 라이프스타일'을 시각화하여 소유욕을 자극합니다.",
  category: "marketing",
  vertical: "social_media_ads",
  use_cases: ["instagram_ad", "facebook_marketing", "product_launch", "lifestyle_branding"],
  use_cases_ko: ["인스타그램 광고", "페이스북 마케팅", "제품 출시", "라이프스타일 브랜딩"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "aesthetic product photography, [product_category], placed on [surface_type], surrounded by [lifestyle_props], soft natural sunlight with harsh shadows, [color_palette] tones, high-end magazine style, hyper-detailed --ar 4:5 --v 6 --s 250",
  negative_prompt: "low quality, blurry, messy, amateur photography, dark and gloomy, cluttered background, cheap looking, distorted product shape",
  aspect_ratio_tags: ["4:5", "instagram", "lifestyle"],
  variables: [
    {
      name: "product_category",
      name_ko: "제품 카테고리",
      placeholder: "[product_category]",
      default_value: "minimalist skincare glass bottle",
      recommended_values: ["luxury leather handbag", "sleek wireless headphones", "organic artisanal coffee beans", "modern ceramic watch"],
      variable_behavior_note: "Changing the product category slightly adjusts lighting and composition according to the trendy aesthetics of that industry.",
      variable_behavior_note_ko: "제품 카테고리를 변경하면 해당 산업의 트렌디한 미학에 따라 조명과 구도가 미세하게 조정됩니다."
    },
    {
      name: "surface_type",
      name_ko: "표면 유형",
      placeholder: "[surface_type]",
      default_value: "textured travertine stone block",
      recommended_values: ["minimalist oak wood table", "reflective glass pool edge", "soft linen fabric folds", "architectural concrete pedestal"],
      variable_behavior_note: "Changing the floor material visually hints at the overall 'temperature' of the ad and the brand's price range.",
      variable_behavior_note_ko: "바닥 재질을 변경하면 광고의 전체적인 '온도'와 브랜드의 가격대를 시각적으로 암시합니다."
    },
    {
      name: "lifestyle_props",
      name_ko: "라이프스타일 소품",
      placeholder: "[lifestyle_props]",
      default_value: "dried eucalyptus and a silk ribbon",
      recommended_values: ["fresh morning coffee and a tablet", "abstract geometric sculptures", "scattered rose petals and pearls", "modern architecture in the background"],
      variable_behavior_note: "Changing props allows for the completion of a lifestyle look preferred by the target customer base.",
      variable_behavior_note_ko: "소품을 변경하면 타겟 고객층이 선호하는 라이프스타일 룩을 완성할 수 있습니다."
    }
  ],
  why_this_works: [
    "Soft natural sunlight with harsh shadows is the core lighting aesthetic of 'emotional photos' most popular on Instagram recently.",
    "Hyper-detailed magazine style delivers brand credibility and product premium value at a glance."
  ],
  why_this_works_ko: [
    "강한 그림자가 있는 부드러운 자연광은 최근 인스타그램에서 가장 인기 있는 '감성 사진'의 핵심 조명 미학입니다.",
    "하이퍼 디테일 매거진 스타일은 브랜드의 신뢰도와 제품의 프리미엄 가치를 한눈에 전달합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional representation of texture and shadow sharpness, hard to distinguish from actual studio shots.",
      note_ko: "질감과 그림자의 선명도 표현이 뛰어나 실제 스튜디오 촬영본과 구분이 어려울 정도입니다."
    }
  ],
  comparison_notes: "Guarantees high-level commercial results as if shot by a professional ad studio photographer.",
  comparison_notes_ko: "전문 광고 스튜디오 사진가가 촬영한 듯한 높은 수준의 상업적 결과물을 보장합니다.",
  variations: [
    {
      label: "Dark Moody",
      label_ko: "다크 무드",
      prompt_delta: "Change to deep shadows, spotlighting on product, moody navy and gold tones",
      use_case: "Luxury night-time products",
      use_case_ko: "럭셔리 야간용 제품",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Product logos appearing strange -> recommended to perform background removal or retouching on the logo part after generation."],
  common_failure_modes_ko: ["제품 로고가 이상하게 나타남 -> 생성 후 로고 부분에 배경 제거 또는 리터칭을 수행하는 것을 권장합니다."],
  seo: {
    primary_keyword: "instagram product ad design prompt",
    secondary_keywords: ["social media marketing ai art", "lifestyle product photography prompt"],
    lsi_keywords: ["magazine style", "natural lighting"],
    meta_title: "Instagram Product Ad Design Prompt | Midjourney v6 Verified",
    meta_title_ko: "인스타그램 제품 광고 디자인 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design aesthetic Instagram ads with premium product photography. Verified Midjourney v6 prompt for high-conversion social media marketing.",
    meta_description_ko: "프리미엄 제품 사진으로 감성적인 인스타그램 광고를 디자인하세요. 높은 전환율을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-ad-008-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Aesthetic Instagram product ad photography",
    alt_text_ko: "감성적인 인스타그램 제품 광고 사진",
    width: 1000,
    height: 1250,
    format: "webp",
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
  title_ko: "링크드인 프로페셔널 배너",
  result_first_title: "Modern and professional LinkedIn background banner for corporate and personal branding",
  result_first_title_ko: "기업 및 퍼스널 브랜딩을 위한 현대적이고 전문적인 링크드인 배경 배너",
  short_description: "A clean, high-impact background for LinkedIn profiles or company pages, featuring abstract tech motifs or professional workspaces.",
  short_description_ko: "추상적인 테크 모티프나 전문적인 업무 공간을 특징으로 하는, 링크드인 프로필이나 기업 페이지용 깔끔하고 임팩트 있는 배경 프롬프트입니다.",
  emotional_hook: "This prompt visually proves your professionalism and career depth during the fleeting moment a first impression is decided.",
  emotional_hook_ko: "이 프롬프트는 첫인상이 결정되는 찰나의 순간에 당신의 전문성과 커리어의 깊이를 시각적으로 증명해줍니다.",
  category: "marketing",
  vertical: "social_media_branding",
  use_cases: ["linkedin_profile", "company_page", "personal_branding", "corporate_identity"],
  use_cases_ko: ["링크드인 프로필", "기업 페이지", "퍼스널 브랜딩", "기업 아이덴티티"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "LinkedIn banner background, [banner_theme], clean minimalist composition, plenty of copy space on the right, [color_scheme], professional high-tech aesthetic, subtle gradients, high-fidelity --ar 4:1 --v 6 --s 150",
  negative_prompt: "cluttered, messy, faces (to avoid overlap with profile pic), low resolution, text (unless requested), dark and gloomy, unprofessional",
  aspect_ratio_tags: ["4:1", "linkedin", "branding"],
  variables: [
    {
      name: "banner_theme",
      name_ko: "배너 테마",
      placeholder: "[banner_theme]",
      default_value: "abstract network of flowing glass lines",
      recommended_values: ["modern architectural office interior", "minimalist desk setup with apple devices", "creative workshop with sticky notes and sketches", "dynamic tech world map with light trails"],
      variable_behavior_note: "Changing the banner theme immediately reflects the characteristics of the industry you are engaged in.",
      variable_behavior_note_ko: "배너 테마를 변경하면 종사하고 있는 산업의 특성이 즉각적으로 반영됩니다."
    },
    {
      name: "color_scheme",
      name_ko: "색상 구성",
      placeholder: "[color_scheme]",
      default_value: "corporate blue and silver grey",
      recommended_values: ["vibrant creative orange and white", "eco-friendly green and wood tones", "luxurious dark charcoal and gold", "clean startup white and sky blue"],
      variable_behavior_note: "Changing the color configuration alters the emotional message regarding the brand's personality (trust, creativity, innovation, etc.).",
      variable_behavior_note_ko: "색상 구성을 변경하면 브랜드의 성격(신뢰, 창의성, 혁신 등)에 관한 감성적인 메시지가 달라집니다."
    }
  ],
  why_this_works: [
    "Copy space on the right prevents overlapping with the profile picture positioned at the bottom left and secures space for slogans.",
    "The 4:1 aspect ratio is optimized for LinkedIn header specifications, applying perfectly without image distortion."
  ],
  why_this_works_ko: [
    "오른쪽의 텍스트 공간(Copy space)은 왼쪽 하단에 배치되는 프로필 사진과의 겹침을 방지하고 슬로건을 위한 공간을 확보합니다.",
    "4:1 종횡비는 링크드인 헤더 사양에 최적화되어 있어 이미지 왜곡 없이 완벽하게 적용됩니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Highly harmonious balance between abstract graphic precision and the beauty of whitespace.",
      note_ko: "추상적인 그래픽의 정밀함과 여백의 미가 매우 조화롭게 균형을 이룹니다."
    }
  ],
  comparison_notes: "Completes a unique professional look that is on a different level from generic backgrounds on free stock image sites.",
  comparison_notes_ko: "무료 스톡 이미지 사이트의 일반적인 배경과는 차원이 다른, 독보적인 전문적 룩을 완성합니다.",
  variations: [
    {
      label: "Team/Company",
      label_ko: "팀/기업",
      prompt_delta: "Add a blurred background of a collaborative team meeting in a bright office",
      use_case: "Corporate branding",
      use_case_ko: "기업 브랜딩",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Images too complex, reducing text readability -> add 'blurry background, simple elements' keywords."],
  common_failure_modes_ko: ["이미지가 너무 복잡하여 텍스트 가독성이 떨어짐 -> 'blurry background, simple elements' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "linkedin professional banner prompt",
    secondary_keywords: ["corporate branding background ai", "personal branding banner prompt"],
    lsi_keywords: ["copy space", "minimalist composition"],
    meta_title: "LinkedIn Professional Banner Prompt | Midjourney v6 Verified",
    meta_title_ko: "링크드인 프로페셔널 배너 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design modern and clean LinkedIn banners for professional branding. Verified Midjourney v6 prompt with copy space for slogans.",
    meta_description_ko: "전문적인 브랜딩을 위한 현대적이고 깔끔한 링크드인 배너를 디자인하세요. 슬로건을 위한 여백이 포함된 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-linkedin-009-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional LinkedIn background banner design",
    alt_text_ko: "전문적인 링크드인 배경 배너 디자인",
    width: 1584,
    height: 396,
    format: "webp",
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
  title_ko: "유튜브 고클릭 썸네일",
  result_first_title: "Eye-catching YouTube thumbnail background with dynamic composition and high contrast",
  result_first_title_ko: "다이나믹한 구도와 고대비가 돋보이는 시선을 사로잡는 유튜브 썸네일 배경",
  short_description: "A visually striking background for YouTube thumbnails, designed to drive clicks with bold colors and clear focal points.",
  short_description_ko: "대담한 색상과 명확한 초점을 통해 클릭을 유도하도록 설계된, 시각적으로 강렬한 유튜브 썸네일 배경 프롬프트입니다.",
  emotional_hook: "This prompt creates a 'visual magnet' that forcefully locks viewers' eyes and induces clicks among countless videos.",
  emotional_hook_ko: "이 프롬프트는 수많은 영상 사이에서 시청자의 눈을 강제로 고정시키고 클릭을 유도하는 '시각적 자석'을 만들어냅니다.",
  category: "marketing",
  vertical: "social_media_content",
  use_cases: ["youtube_thumbnail", "video_marketing", "content_creation", "clickthrough_optimization"],
  use_cases_ko: ["유튜브 썸네일", "비디오 마케팅", "콘텐츠 제작", "클릭률 최적화"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "YouTube thumbnail art, [video_topic], centered [subject_focus], extreme high contrast, vibrant neon colors, dramatic lighting, dynamic action pose, cinematic depth of field, bold graphic style --ar 16:9 --v 6 --s 300",
  negative_prompt: "dull colors, low contrast, cluttered background, blurry subject, boring composition, small details, messy text, scary faces",
  aspect_ratio_tags: ["16:9", "youtube", "click_bait"],
  variables: [
    {
      name: "video_topic",
      name_ko: "비디오 주제",
      placeholder: "[video_topic]",
      default_value: "future of artificial intelligence tech",
      recommended_values: ["luxury travel world tour", "epic gaming world adventure", "healthy meal prep challenge", "modern home renovation reveal"],
      variable_behavior_note: "Changing the video topic emphasizes symbolic visual elements that allow viewers to immediately infer the content.",
      variable_behavior_note_ko: "비디오 주제를 변경하면 시청자가 내용을 즉각적으로 유추할 수 있도록 상징적인 시각적 요소를 강조합니다."
    },
    {
      name: "subject_focus",
      name_ko: "주요 대상",
      placeholder: "[subject_focus]",
      default_value: "glowing robotic brain and neural network",
      recommended_values: ["shocked person face", "luxury private jet interior", "giant gold trophy", "mysterious locked chest"],
      variable_behavior_note: "Changing the focal subject alters the thumbnail's 'hooking point'.",
      variable_behavior_note_ko: "주요 대상을 변경하면 썸네일의 '후킹 포인트'가 달라집니다."
    }
  ],
  why_this_works: [
    "Extreme high contrast is the most powerful element that makes thumbnails stand out even on small mobile screens.",
    "Cinematic depth of field clearly isolates the core subject, guiding viewers on what to look at."
  ],
  why_this_works_ko: [
    "극한의 고대비는 작은 모바일 화면에서도 썸네일을 돋보이게 하는 가장 강력한 요소입니다.",
    "시네마틱한 심도 표현은 핵심 피사체를 명확하게 분리하여 시청자가 무엇을 보아야 할지 안내합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Very high intensity of hue and contrast, good for use as thumbnails without post-processing.",
      note_ko: "채도와 대비의 강도가 매우 높아 후처리 없이 썸네일로 사용하기 좋습니다."
    }
  ],
  comparison_notes: "Perfectly replicates the 'eye-catching' visual grammar of thumbnails used by top YouTube creators.",
  comparison_notes_ko: "최정상 유튜버들이 사용하는 '시선을 사로잡는' 비주얼 문법을 완벽하게 재현합니다.",
  variations: [
    {
      label: "Educational",
      label_ko: "교육용",
      prompt_delta: "Change to clean studio background, professional lighting, focus on a single high-quality product",
      use_case: "Review or Tech channels",
      use_case_ko: "리뷰 또는 테크 채널",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Subject appearing too small -> add 'close-up, large focal point' keywords."],
  common_failure_modes_ko: ["피사체가 너무 작게 나타남 -> 'close-up, large focal point' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "youtube thumbnail art prompt",
    secondary_keywords: ["high ctr thumbnail ai", "video marketing art prompt"],
    lsi_keywords: ["high contrast", "vibrant colors"],
    meta_title: "YouTube High-CTR Thumbnail Art Prompt | Midjourney v6 Verified",
    meta_title_ko: "유튜브 고클릭 썸네일 아트 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate striking backgrounds for YouTube thumbnails to increase CTR. Verified Midjourney v6 prompt for creators.",
    meta_description_ko: "클릭률(CTR)을 높이기 위한 강렬한 유튜브 썸네일 배경을 생성하세요. 크리에이터를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-yt-010-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "High contrast YouTube thumbnail background art",
    alt_text_ko: "고대비 유튜브 썸네일 배경 아트",
    width: 1280,
    height: 720,
    format: "webp",
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
  title_ko: "틱톡 다이나믹 라이프스타일",
  result_first_title: "Natural and dynamic lifestyle photography with a Gen-Z aesthetic and smartphone vibe",
  result_first_title_ko: "스마트폰으로 찍은 듯한 Gen-Z 감성의 자연스럽고 역동적인 라이프스타일 사진",
  short_description: "Authentic-looking photography for short-form video ads or social posts, featuring motion blur and candid moments.",
  short_description_ko: "모션 블러와 캔디드 샷을 특징으로 하는, 숏폼 광고나 소셜 포스트를 위한 실감 나는 사진 프롬프트입니다.",
  emotional_hook: "This prompt eliminates the rejection of staged ads and captures a friendly and dynamic daily life that looks like something from a friend's feed.",
  emotional_hook_ko: "이 프롬프트는 연출된 광고에 대한 거부감을 없애고, 친구의 피드에서 본 듯한 친근하고 역동적인 일상을 포착합니다.",
  category: "marketing",
  vertical: "social_media_content",
  use_cases: ["tiktok_ad", "instagram_reels", "ugc_marketing", "brand_storytelling"],
  use_cases_ko: ["틱톡 광고", "인스타그램 릴스", "UGC 마케팅", "브랜드 스토리텔링"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "candid lifestyle photography, [lifestyle_scene], captured on a modern smartphone, slight motion blur, Gen-Z fashion aesthetic, [lighting_vibe], vibrant and natural colors, vertical composition --ar 9:16 --v 6 --s 100",
  negative_prompt: "staged, professional studio lighting, low resolution, blurry (too much), old-fashioned, corporate style, over-edited, fake looking",
  aspect_ratio_tags: ["9:16", "tiktok", "lifestyle"],
  variables: [
    {
      name: "lifestyle_scene",
      name_ko: "라이프스타일 장면",
      placeholder: "[lifestyle_scene]",
      default_value: "skating through a sunny city park while holding a soda",
      recommended_values: ["friends laughing in a neon-lit night market", "unboxing a tech gadget in a minimalist bedroom", "dancing at a beach music festival", "sipping matcha in a cozy sunlit cafe"],
      variable_behavior_note: "Changing the scene forms various visual narratives that stimulate the empathy of the target community.",
      variable_behavior_note_ko: "장면을 변경하면 타겟 커뮤니티의 공감을 자극하는 다양한 시각적 서사가 형성됩니다."
    },
    {
      name: "lighting_vibe",
      name_ko: "조명 분위기",
      placeholder: "[lighting_vibe]",
      default_value: "warm golden hour glow",
      recommended_values: ["cool neon street lights", "natural overcast soft light", "vibrant flash photography vibe", "shadowy cinematic interior lighting"],
      variable_behavior_note: "Changing the lighting completely alters the video's emotional line and 'vibe'.",
      variable_behavior_note_ko: "조명을 변경하면 영상의 감정선과 '바이브(vibe)'가 완전히 달라집니다."
    }
  ],
  why_this_works: [
    "Captured on a modern smartphone removes the distance of professional equipment and grants credibility like user-generated content (UGC).",
    "Slight motion blur vividly replicates the energy and real-time nature unique to TikTok or Reels."
  ],
  why_this_works_ko: [
    "최신 스마트폰으로 촬영된 느낌은 전문 장비의 거리감을 없애고 사용자 생성 콘텐츠(UGC)와 같은 신뢰성을 부여합니다.",
    "약간의 모션 블러는 틱톡이나 릴스 특유의 에너지와 실시간성을 생생하게 재현합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "The ability to implement natural facial expressions and poses has significantly improved.",
      note_ko: "자연스러운 얼굴 표정과 포즈를 구현하는 능력이 크게 향상되었습니다."
    }
  ],
  comparison_notes: "Yields highest efficiency in performance marketing phases where 'non-ad ads' are required.",
  comparison_notes_ko: "'광고 같지 않은 광고'가 필요한 퍼포먼스 마케팅 단계에서 최고의 효율을 발휘합니다.",
  variations: [
    {
      label: "Product Focused",
      label_ko: "제품 중심",
      prompt_delta: "Change to close-up hand holding the product in use, blurred lifestyle background",
      use_case: "Direct response ads",
      use_case_ko: "직접 반응 광고(DR)",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Appearing too much like a model photoshoot -> add 'amateur shot, non-professional model' keywords."],
  common_failure_modes_ko: ["모델 화보처럼 너무 정제되어 보임 -> 'amateur shot, non-professional model' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "tiktok lifestyle photography prompt",
    secondary_keywords: ["ugc style marketing ai", "gen-z aesthetic prompt"],
    lsi_keywords: ["vertical composition", "motion blur"],
    meta_title: "TikTok Dynamic Lifestyle Prompt | Midjourney v6 Verified",
    meta_title_ko: "틱톡 다이나믹 라이프스타일 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design authentic and dynamic lifestyle shots for short-form video ads. Verified Midjourney v6 prompt for TikTok and Reels.",
    meta_description_ko: "숏폼 비디오 광고를 위한 실감 나고 역동적인 라이프스타일 샷을 디자인하세요. 틱톡과 릴스를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-tiktok-011-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Dynamic Gen-Z lifestyle photography for TikTok",
    alt_text_ko: "틱톡을 위한 다이나믹한 Gen-Z 라이프스타일 사진",
    width: 1080,
    height: 1920,
    format: "webp",
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
  title_ko: "뉴스레터 프리미엄 헤더",
  result_first_title: "Clean and modern newsletter header with abstract 3D elements and soft palette",
  result_first_title_ko: "추상적인 3D 요소와 소프트한 색조가 어우러진 깔끔하고 현대적인 뉴스레터 헤더",
  short_description: "A sophisticated header for email marketing, designed to set a premium tone and accommodate logos and headlines.",
  short_description_ko: "이메일 마케팅을 위한 세련된 헤더로, 프리미엄 톤을 설정하고 로고와 헤드라인을 배치하기 적합하도록 설계되었습니다.",
  emotional_hook: "This prompt makes your news the most dignified and welcomed in the subscriber's inbox.",
  emotional_hook_ko: "이 프롬프트는 구독자의 인박스에서 당신의 소식이 가장 품격 있고 반갑게 느껴지도록 만들어줍니다.",
  category: "marketing",
  vertical: "email_marketing",
  use_cases: ["newsletter_header", "email_banner", "blog_hero", "saas_marketing"],
  use_cases_ko: ["뉴스레터 헤더", "이메일 배너", "블로그 히어로", "SaaS 마케팅"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "newsletter header background, [newsletter_topic], clean minimalist composition, [color_palette], soft 3D abstract shapes, plenty of copy space, premium high-fidelity finish --ar 3:1 --v 6 --s 150",
  negative_prompt: "cluttered, messy, low resolution, dark and gloomy, faces, text, distracting background, bright neon colors (unless specified)",
  aspect_ratio_tags: ["3:1", "email", "minimalist"],
  variables: [
    {
      name: "newsletter_topic",
      name_ko: "뉴스레터 주제",
      placeholder: "[newsletter_topic]",
      default_value: "tech and innovation updates",
      recommended_values: ["luxury travel and lifestyle", "finance and market analysis", "creative design and art curation", "health and wellness tips"],
      variable_behavior_note: "Changing the newsletter topic subtly expresses suitable abstract forms and symbols.",
      variable_behavior_note_ko: "뉴스레터 주제를 변경하면 적합한 추상적 형태와 상징이 미묘하게 표현됩니다."
    },
    {
      name: "color_palette",
      name_ko: "색상 팔레트",
      placeholder: "[color_palette]",
      default_value: "soft pastel blue and cream white",
      recommended_values: ["professional navy and silver", "vibrant lime and charcoal", "warm terracotta and beige", "modern dark mode purple and black"],
      variable_behavior_note: "Changing the color palette visualizes information credibility and brand temperature.",
      variable_behavior_note_ko: "색상 팔레트를 변경하면 정보의 신뢰도와 브랜드의 온도가 시각화됩니다."
    }
  ],
  why_this_works: [
    "The 3:1 aspect ratio is the most stable specification that fills the top of email client screens without obscuring the body.",
    "Plenty of copy space maximizes readability by not interfering with titles and logos when placed."
  ],
  why_this_works_ko: [
    "3:1 종횡비는 본문을 가리지 않으면서 이메일 클라이언트 화면 상단을 가득 채우는 가장 안정적인 규격입니다.",
    "충분한 여백(Copy space)은 타이틀과 로고를 배치했을 때 간섭하지 않아 가독성을 극대화합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Very elegant depth of soft gradients and 3D textures.",
      note_ko: "부드러운 그라데이션과 3D 질감의 깊이감이 매우 우아합니다."
    }
  ],
  comparison_notes: "Replicates sensual headers of well-made newsletters sent by global tech unicorn companies.",
  comparison_notes_ko: "글로벌 테크 유니콘 기업들이 발송하는 잘 만들어진 뉴스레터의 감각적인 헤더를 재현합니다.",
  variations: [
    {
      label: "Illustration",
      label_ko: "일러스트레이션",
      prompt_delta: "Change 3D shapes to flat 2D minimalist vector illustrations",
      use_case: "Artistic/Creative newsletters",
      use_case_ko: "예술/크리에이티브 뉴스레터",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Background appearing too bland -> add 'subtle texture, soft grain' keywords."],
  common_failure_modes_ko: ["배경이 너무 밋밋해 보임 -> 'subtle texture, soft grain' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "newsletter header design prompt",
    secondary_keywords: ["email marketing banner ai", "saas newsletter background prompt"],
    lsi_keywords: ["copy space", "minimalist composition"],
    meta_title: "Newsletter Premium Header Prompt | Midjourney v6 Verified",
    meta_title_ko: "뉴스레터 프리미엄 헤더 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design clean and sophisticated headers for email marketing. Verified Midjourney v6 prompt for high-impact newsletters.",
    meta_description_ko: "이메일 마케팅을 위한 깔끔하고 세련된 헤더를 디자인하세요. 높은 영향력을 가진 뉴스레터를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-news-012-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean modern newsletter header background",
    alt_text_ko: "깔끔하고 현대적인 뉴스레터 헤더 배경",
    width: 1500,
    height: 500,
    format: "webp",
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
  title_ko: "테크 이벤트 포스터 아트",
  result_first_title: "Impactful event poster background with futuristic motifs and bold lighting",
  result_first_title_ko: "미래지향적 모티프와 대담한 조명이 돋보이는 임팩트 있는 이벤트 포스터 배경",
  short_description: "A high-energy background for conferences, webinars, or music events, featuring dynamic shapes and deep perspective.",
  short_description_ko: "역동적인 모양과 깊은 원근감을 특징으로 하는 컨퍼런스, 웨비나 또는 음악 이벤트를 위한 고에너지 배경 프롬프트입니다.",
  emotional_hook: "This prompt proclaims the excitement and grand scale of an upcoming special moment with a single overwhelming image.",
  emotional_hook_ko: "이 프롬프트는 단 하나의 압도적인 이미지로 곧 다가올 특별한 순간의 흥분과 웅장한 규모를 선포합니다.",
  category: "marketing",
  vertical: "print_digital_ads",
  use_cases: ["event_poster", "webinar_banner", "conference_identity", "promotion_art"],
  use_cases_ko: ["이벤트 포스터", "웨비나 배너", "컨퍼런스 아이덴티티", "프로모션 아트"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "event poster background, [event_type], futuristic [core_motif], centered composition, dramatic [lighting_color] lighting, deep perspective, plenty of copy space for headlines, high-fidelity digital art --ar 2:3 --v 6 --s 350",
  negative_prompt: "low quality, blurry, messy, faces, unreadable text, low resolution, cluttered, boring composition, old-fashioned",
  aspect_ratio_tags: ["2:3", "poster", "event"],
  variables: [
    {
      name: "event_type",
      name_ko: "이벤트 유형",
      placeholder: "[event_type]",
      default_value: "global AI innovation summit",
      recommended_values: ["underground electronic music festival", "luxury watch expo", "indie game developer meetup", "future city architecture forum"],
      variable_behavior_note: "Changing the event type selects visual languages (Tech vs Art vs Luxury) suitable for the nature and scale of the event.",
      variable_behavior_note_ko: "이벤트 유형을 변경하면 이벤트의 성격과 규모에 적합한 시각적 언어(테크, 예술, 럭셔리 등)를 선택하게 됩니다."
    },
    {
      name: "core_motif",
      name_ko: "핵심 모티프",
      placeholder: "[core_motif]",
      default_value: "glowing holographic neural network sphere",
      recommended_values: ["shattering geometric glass crystals", "neon light trails forming a city", "abstract liquid metal waves", "minimalist architectural monolithic pillar"],
      variable_behavior_note: "Changing the core motif alters the poster's 'visual anchor', leading the entire concept.",
      variable_behavior_note_ko: "핵심 모티프를 변경하면 포스터의 '시각적 앵커(Visual anchor)'가 바뀌어 전체 컨셉을 주도합니다."
    }
  ],
  why_this_works: [
    "Deep perspective strongly draws the reader's eye to the center of the image, emphasizing the importance of the event.",
    "Plenty of copy space ensures the visuals remain intact even with vast information like event dates, venues, and lineups."
  ],
  why_this_works_ko: [
    "깊은 원근감은 독자의 시선을 이미지 중앙으로 강력하게 끌어들여 이벤트의 중요성을 강조합니다.",
    "충분한 여백(Copy space)은 이벤트 날짜, 장소, 라인업 등 방대한 정보가 들어가더라도 비주얼의 무결성을 유지해줍니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Overwhelming representation of three-dimensional structures and dramatic light-dark contrast.",
      note_ko: "3차원 구조물과 극적인 명암 대비 표현이 압도적입니다."
    }
  ],
  comparison_notes: "Boasts a level of completion on par with the main key visuals of global IT conferences or large music festivals.",
  comparison_notes_ko: "글로벌 IT 컨퍼런스나 대형 음악 페스티벌의 메인 키 비주얼과 맞먹는 완성도를 자랑합니다.",
  variations: [
    {
      label: "Minimalist",
      label_ko: "미니멀리스트",
      prompt_delta: "Change to single minimalist shape on a clean white background, focus on Swiss design style",
      use_case: "Design/Art exhibitions",
      use_case_ko: "디자인/예술 전시회",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Motif appearing too large with no space for text -> add 'smaller motif, wide background' keywords."],
  common_failure_modes_ko: ["모티프가 너무 커서 텍스트 공간이 부족함 -> 'smaller motif, wide background' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "event poster design prompt",
    secondary_keywords: ["conference background ai", "webinar banner prompt"],
    lsi_keywords: ["deep perspective", "copy space"],
    meta_title: "Tech Event Poster Art Prompt | Midjourney v6 Verified",
    meta_title_ko: "테크 이벤트 포스터 아트 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design impactful poster backgrounds for conferences and events. Verified Midjourney v6 prompt for high-scale promotions.",
    meta_description_ko: "컨퍼런스 및 이벤트를 위한 임팩트 있는 포스터 배경을 디자인하세요. 대규모 프로모션을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-event-013-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "High-impact tech event poster background art",
    alt_text_ko: "임팩트 있는 테크 이벤트 포스터 배경 아트",
    width: 1000,
    height: 1500,
    format: "webp",
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
  title_ko: "트위터/X 바이럴 공지",
  result_first_title: "Trendy and bold graphic for viral Twitter announcements and product reveals",
  result_first_title_ko: "바이럴 트위터 공지 및 제품 공개를 위한 트렌디하고 대담한 그래픽",
  short_description: "A high-impact, minimalist graphic optimized for the Twitter/X feed, designed to stand out in a fast-scrolling environment.",
  short_description_ko: "빠르게 스크롤되는 환경에서도 돋보이도록 설계된, 트위터/X 피드에 최적화된 고임팩트 미니멀 그래픽 프롬프트입니다.",
  emotional_hook: "This prompt instantly snatches attention in text-heavy Twitter feeds and induces a click on the retweet button.",
  emotional_hook_ko: "이 프롬프트는 텍스트 위주의 트위터 피드에서 즉각적으로 시선을 낚아채고 리트윗 버튼 클릭을 유도합니다.",
  category: "marketing",
  vertical: "social_media_content",
  use_cases: ["twitter_announcement", "product_reveal", "viral_marketing", "community_update"],
  use_cases_ko: ["트위터 공지", "제품 공개", "바이럴 마케팅", "커뮤니티 업데이트"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "Twitter announcement graphic, [announcement_type], centered [main_object], bold high-contrast colors, minimalist flat 3D style, clean background, sharp focus, vibrant energy --ar 16:9 --v 6 --s 200",
  negative_prompt: "cluttered, messy, low resolution, dark, blurry, realistic (to avoid stock photo look), faces, text, distracting background",
  aspect_ratio_tags: ["16:9", "twitter", "announcement"],
  variables: [
    {
      name: "announcement_type",
      name_ko: "공지 유형",
      placeholder: "[announcement_type]",
      default_value: "major software update release",
      recommended_values: ["new community milestone 100k", "exclusive limited edition drop", "secret collaboration reveal", "important security update"],
      variable_behavior_note: "Changing the announcement type selects visual metaphors suitable for the nature of the news (Congratulations, Urgent, Innovation, etc.).",
      variable_behavior_note_ko: "공지 유형을 변경하면 소식의 성격(축하, 긴급, 혁신 등)에 적합한 시각적 메타포를 선택하게 됩니다."
    },
    {
      name: "main_object",
      name_ko: "주요 오브젝트",
      placeholder: "[main_object]",
      default_value: "glowing 3D rocket ship taking off",
      recommended_values: ["giant golden party popper", "sleek futuristic lock icon", "vibrant abstract starburst", "minimalist open treasure box"],
      variable_behavior_note: "Changing the main object allows for immediate visual communication of the core keywords of the news.",
      variable_behavior_note_ko: "주요 오브젝트를 변경하면 소식의 핵심 키워드를 즉각적으로 시각 전달할 수 있습니다."
    }
  ],
  why_this_works: [
    "Minimalist flat 3D style is the trendy design grammar most preferred in recent tech communities on Twitter/X.",
    "The 16:9 aspect ratio is optimized for Twitter card specifications, showing the entire visual without cropping in the feed."
  ],
  why_this_works_ko: [
    "미니멀한 플랫 3D 스타일은 최근 트위터/X의 테크 커뮤니티에서 가장 선호되는 트렌디한 디자인 문법입니다.",
    "16:9 종횡비는 트위터 카드 사양에 최적화되어 있어, 피드에서 이미지 잘림 없이 전체 비주얼을 보여줍니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Extremely clear color clarity and object silhouettes.",
      note_ko: "색상의 선명도와 오브젝트의 실루엣이 매우 명확하게 표현됩니다."
    }
  ],
  comparison_notes: "Replicates the restrained high-quality graphic sentiment used during new product announcements by Apple or Tesla.",
  comparison_notes_ko: "애플이나 테슬라의 신제품 발표 시 사용되는 절제된 고품질 그래픽 정서를 재현합니다.",
  variations: [
    {
      label: "Celebration",
      label_ko: "축하",
      prompt_delta: "Add confetti, sparkles, and festive warm lighting, use bright gold and orange",
      use_case: "Milestone celebrations",
      use_case_ko: "이정표 달성 축하",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Image appearing too serious -> reinforce with 'playful 3D style, vibrant tones' keywords."],
  common_failure_modes_ko: ["이미지가 너무 진지해 보임 -> 'playful 3D style, vibrant tones' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "twitter viral graphic prompt",
    secondary_keywords: ["product announcement ai design", "social media viral art prompt"],
    lsi_keywords: ["16:9 aspect ratio", "minimalist 3D"],
    meta_title: "Twitter/X Viral Announcement Prompt | Midjourney v6 Verified",
    meta_title_ko: "트위터/X 바이럴 공지 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design high-impact announcement graphics for Twitter/X. Verified Midjourney v6 prompt for viral marketing and reveals.",
    meta_description_ko: "트위터/X를 위한 고임팩트 공지 그래픽을 디자인하세요. 바이럴 마케팅 및 공개를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-social-tw-014-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Trendy viral announcement graphic for Twitter",
    alt_text_ko: "트렌디한 트위터 바이럴 공지 그래픽",
    width: 1280,
    height: 720,
    format: "webp",
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
  title_ko: "하이엔드 매거진 에디토리얼",
  result_first_title: "Sophisticated fashion editorial photography for high-end magazine spreads",
  result_first_title_ko: "하이엔드 매거진 화보를 위한 세련된 패션 에디토리얼 사진",
  short_description: "Professional, avant-garde fashion photography featuring dramatic lighting, artistic poses, and high-fashion aesthetics.",
  short_description_ko: "드라마틱한 조명, 예술적인 포즈, 하이패션 미학을 특징으로 하는 전문적인 아방가르드 패션 사진 프롬프트입니다.",
  emotional_hook: "Beyond a simple photo, this prompt records a narrative containing the brand's philosophy and artistic identity as an editorial photoshoot.",
  emotional_hook_ko: "단순한 사진을 넘어, 이 프롬프트는 에디토리얼 화보로서 브랜드의 철학과 예술적 정체성을 담은 내러티브를 기록합니다.",
  category: "marketing",
  vertical: "editorial",
  use_cases: ["magazine_spread", "fashion_campaign", "brand_lookbook", "artistic_direction"],
  use_cases_ko: ["매거진 화보", "패션 캠페인", "브랜드 룩북", "아트 디렉션"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "high-end fashion editorial photography, [model_archetype], wearing [avant_garde_outfit], dramatic [lighting_style], [artistic_backdrop], vogue aesthetic, high contrast, cinematic grain, professional color grading --ar 2:3 --v 6 --s 300",
  negative_prompt: "low quality, blurry, amateur, smiling, looking at camera (unless specified), messy, plain studio background (unless specified), commercial look, bright daylight",
  aspect_ratio_tags: ["2:3", "editorial", "fashion"],
  variables: [
    {
      name: "model_archetype",
      name_ko: "모델 아키타입",
      placeholder: "[model_archetype]",
      default_value: "androgynous model with sharp features",
      recommended_values: ["graceful elder model with silver hair", "diverse group of avant-garde models", "mysterious hooded figure", "elegant dancer in motion"],
      variable_behavior_note: "Changing the model archetype alters the artistic message and brand 'edge' conveyed by the photoshoot.",
      variable_behavior_note_ko: "모델 아키타입을 변경하면 화보가 전달하는 예술적 메시지와 브랜드의 '엣지'가 달라집니다."
    },
    {
      name: "avant_garde_outfit",
      name_ko: "아방가르드 의상",
      placeholder: "[avant_garde_outfit]",
      default_value: "architectural pleated silk gown in crimson",
      recommended_values: ["oversized metallic puffer coat", "minimalist black tailoring with deconstructed elements", "ethereal sheer fabric layers", "bold geometric leather structures"],
      variable_behavior_note: "Changing attire determines the theme of the photoshoot (Minimalism vs Maximalism).",
      variable_behavior_note_ko: "의상을 변경하면 화보의 테마(미니멀리즘 vs 맥시멀리즘)가 결정됩니다."
    }
  ],
  why_this_works: [
    "Vogue aesthetic satisfies the highest visual standards of the fashion industry, immediately elevating the brand's stature.",
    "Cinematic grain and professional color grading remove digital coldness and add artistic analog film depth."
  ],
  why_this_works_ko: [
    "보그(Vogue) 미학은 패션 업계의 가장 높은 시각적 기준을 충족시켜 브랜드의 위상을 즉각적으로 높여줍니다.",
    "시네마틱 그레인과 전문적인 컬러 그레이딩은 디지털의 차가움을 제거하고 예술적인 아날로그 필름의 깊이감을 더합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Unequaled ability to express facial expressions and complex fabric details.",
      note_ko: "얼굴 표정과 복잡한 옷감 디테일을 표현하는 능력이 타의 추종을 불허합니다."
    }
  ],
  comparison_notes: "Guarantees overwhelming artistry on par with season campaign visuals of global fashion houses.",
  comparison_notes_ko: "글로벌 패션 하우스의 시즌 캠페인 비주얼과 맞먹는 압도적인 예술성을 보장합니다.",
  variations: [
    {
      label: "Studio Minimal",
      label_ko: "스튜디오 미니멀",
      prompt_delta: "Change backdrop to plain charcoal grey, use single spotlight, focus on silhouette",
      use_case: "Minimalist brand campaigns",
      use_case_ko: "미니멀리스트 브랜드 캠페인",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Image appearing like too generic an ad -> reinforce with 'avant-garde, conceptual, unusual angles' keywords."],
  common_failure_modes_ko: ["이미지가 너무 일반적인 광고처럼 보임 -> 'avant-garde, conceptual, unusual angles' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "magazine editorial fashion prompt",
    secondary_keywords: ["high fashion ai photography", "vogue style prompt"],
    lsi_keywords: ["avant-garde outfit", "cinematic grain"],
    meta_title: "High-End Magazine Editorial Prompt | Midjourney v6 Verified",
    meta_title_ko: "하이엔드 매거진 에디토리얼 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design sophisticated fashion editorials for high-end magazines. Verified Midjourney v6 prompt for artistic brand campaigns.",
    meta_description_ko: "하이엔드 매거진을 위한 세련된 패션 에디토리얼을 디자인하세요. 예술적인 브랜드 캠페인을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-editorial-015-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Sophisticated high-end fashion editorial photography",
    alt_text_ko: "세련된 하이엔드 패션 에디토리얼 사진",
    width: 1000,
    height: 1500,
    format: "webp",
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
  title_ko: "미니멀 브랜드 아이덴티티",
  result_first_title: "Clean and cohesive brand identity mockup with stationery and business cards",
  result_first_title_ko: "명함과 문구가 포함된 깔끔하고 통일감 있는 브랜드 아이덴티티 목업",
  short_description: "Professional mockup for brand visual systems, featuring business cards, envelopes, and letterheads on premium paper.",
  short_description_ko: "프리미엄 종이 위의 명함, 봉투, 레터헤드를 특징으로 하는 브랜드 비주얼 시스템용 전문 목업 프롬프트입니다.",
  emotional_hook: "This prompt designs neat and orderly beauty where a single logo spreads into the brand's philosophy.",
  emotional_hook_ko: "이 프롬프트는 하나의 로고가 브랜드의 철학으로 번져나가는 정갈하고 질서 있는 아름다움을 디자인합니다.",
  category: "marketing",
  vertical: "branding",
  use_cases: ["brand_guidelines", "client_presentation", "portfolio_showcase", "identity_design"],
  use_cases_ko: ["브랜드 가이드라인", "클라이언트 프레젠테이션", "포트폴리오 쇼케이스", "아이덴티티 디자인"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "minimalist brand identity mockup, [brand_industry], centered composition, [stationery_items], premium textured paper, [color_palette], soft natural window light, clean minimalist aesthetic, high-fidelity --ar 4:3 --v 6 --s 150",
  negative_prompt: "cluttered, messy, low resolution, dark, blurry, realistic (to avoid stock photo look), faces, text, distracting background, bright neon colors (unless specified)",
  aspect_ratio_tags: ["4:3", "branding", "mockup"],
  variables: [
    {
      name: "brand_industry",
      name_ko: "브랜드 산업군",
      placeholder: "[brand_industry]",
      default_value: "luxury skincare brand",
      recommended_values: ["modern architectural firm", "sustainable coffee roastery", "high-tech software startup", "artisanal organic bakery"],
      variable_behavior_note: "Changing the industry adjusts paper texture (smooth vs rough) and overall design tone to match that field's grammar.",
      variable_behavior_note_ko: "산업군을 변경하면 해당 분야의 문법에 맞게 종이 질감(매끄러움 vs 거침)과 전체적인 디자인 톤이 조정됩니다."
    },
    {
      name: "stationery_items",
      name_ko: "문구류 구성",
      placeholder: "[stationery_items]",
      default_value: "business cards, letterhead, and a minimalist envelope",
      recommended_values: ["packaging boxes and shopping bag", "digital tablet and smartphone screens", "notebook and premium pen", "folded brochures and stickers"],
      variable_behavior_note: "Changing item configurations allows for diverse visualization of brand touchpoints.",
      variable_behavior_note_ko: "아이템 구성을 변경하면 브랜드의 다양한 접점을 다채롭게 시각화할 수 있습니다."
    }
  ],
  why_this_works: [
    "The premium textured paper keyword grants physical luxury that feels as if it can actually be touched, beyond simple graphics.",
    "Soft natural window light creates a much more comfortable and sophisticated atmosphere than artificial studio lighting."
  ],
  why_this_works_ko: [
    "프리미엄 질감의 종이(Premium textured paper) 키워드는 단순한 그래픽을 넘어 실제로 만져질 듯한 물리적인 고급스러움을 부여합니다.",
    "부드러운 자연광(Natural window light)은 인위적인 스튜디오 조명보다 훨씬 편안하고 세련된 분위기를 연출합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Highly realistic representation of minute paper textures and shadow depth.",
      note_ko: "미세한 종이 질감과 그림자의 깊이감을 매우 사실적으로 표현합니다."
    }
  ],
  comparison_notes: "Provides quality ready for immediate use as brand design portfolios or key visuals for client proposals.",
  comparison_notes_ko: "브랜드 디자인 포트폴리오나 클라이언트 제안용 키 비주얼로 즉시 사용 가능한 품질을 제공합니다.",
  variations: [
    {
      label: "Dark Mode",
      label_ko: "다크 모드",
      prompt_delta: "Change color palette to charcoal and copper, use dark moody lighting",
      use_case: "Premium/Luxury branding",
      use_case_ko: "프리미엄/럭셔리 브랜딩",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Items overlapping and appearing cluttered -> add 'neatly organized, geometric arrangement' keywords."],
  common_failure_modes_ko: ["아이템들이 겹쳐서 어수선해 보임 -> 'neatly organized, geometric arrangement' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "minimalist brand identity mockup prompt",
    secondary_keywords: ["branding stationery ai design", "corporate identity mockup prompt"],
    lsi_keywords: ["textured paper", "natural light"],
    meta_title: "Minimalist Brand Identity Mockup Prompt | Midjourney v6 Verified",
    meta_title_ko: "미니멀 브랜드 아이덴티티 목업 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design clean and cohesive brand identity mockups. Verified Midjourney v6 prompt for stationery and business cards.",
    meta_description_ko: "깔끔하고 통일감 있는 브랜드 아이덴티티 목업을 디자인하세요. 문구류와 명함을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-identity-016-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Clean minimalist brand identity stationery mockup",
    alt_text_ko: "깔끔하고 미니멀한 브랜드 아이덴티티 문구 목업",
    width: 1600,
    height: 1200,
    format: "webp",
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
  title_ko: "야외 빌보드 목업",
  result_first_title: "Massive outdoor billboard mockup in a prime urban location for brand campaigns",
  result_first_title_ko: "브랜드 캠페인을 위한 주요 도심 위치의 거대한 야외 빌보드 목업",
  short_description: "High-impact outdoor advertising visualization, featuring large-scale billboards in realistic city environments.",
  short_description_ko: "사실적인 도시 환경의 대형 빌보드를 특징으로 하는, 임팩트 있는 옥외 광고 시각화 프롬프트입니다.",
  emotional_hook: "This prompt proves the scale of the brand with an overwhelming sense of size that dominates the city skyline.",
  emotional_hook_ko: "이 프롬프트는 도시의 스카이라인을 압도하는 거대한 규모감을 통해 브랜드의 위상을 증명합니다.",
  category: "marketing",
  vertical: "advertising",
  use_cases: ["brand_campaign", "outdoor_advertising", "marketing_presentation", "urban_mockup"],
  use_cases_ko: ["브랜드 캠페인", "옥외 광고", "마케팅 프레젠테이션", "어반 목업"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "large outdoor billboard mockup, [urban_location], [time_of_day], cinematic wide shot, [advertising_content] background, professional photography, hyper-realistic city environment --ar 16:9 --v 6 --s 200",
  negative_prompt: "low quality, blurry, messy, distorted billboard shape, unrealistic lighting, small billboards, cluttered foreground, people in focus",
  aspect_ratio_tags: ["16:9", "billboard", "advertising"],
  variables: [
    {
      name: "urban_location",
      name_ko: "도시 위치",
      placeholder: "[urban_location]",
      default_value: "Times Square-style bustling intersection",
      recommended_values: ["minimalist modern highway", "upscale shopping district", "foggy coastal bridge", "underground subway entrance"],
      variable_behavior_note: "Changing the city location visually alters the brand's target region and exposure context.",
      variable_behavior_note_ko: "도시 위치를 변경하면 브랜드의 타겟 지역과 노출 컨텍스트가 시각적으로 달라집니다."
    },
    {
      name: "time_of_day",
      name_ko: "시간대",
      placeholder: "[time_of_day]",
      default_value: "dusk with vibrant city lights",
      recommended_values: ["bright sunny morning with clear sky", "rainy night with neon reflections", "foggy early morning", "golden hour sunset"],
      variable_behavior_note: "Changing the time of day alters lighting effects (billboard light vs natural light), leading the atmosphere.",
      variable_behavior_note_ko: "시간대를 변경하면 조명 효과(빌보드 조명 vs 자연광)가 달라져 전체적인 분위기를 주도합니다."
    }
  ],
  why_this_works: [
    "Cinematic wide shot emphasizes the massive physical presence of the billboard and shows harmony with the surroundings.",
    "Hyper-realistic city environment helps accurately simulate the feel of the actual ad implementation."
  ],
  why_this_works_ko: [
    "시네마틱한 와이드 샷(Wide shot)은 빌보드의 거대한 물리적 존재감을 강조하고 주변 환경과의 조화를 보여줍니다.",
    "초현실적인 도시 환경은 실제 광고 집행 시의 느낌을 정확하게 시뮬레이션할 수 있도록 돕습니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional representation of city building details and billboard illumination.",
      note_ko: "도시 건물의 디테일과 빌보드의 조명 효과를 표현하는 능력이 매우 뛰어납니다."
    }
  ],
  comparison_notes: "Optimal for high-quality mockups for major brand campaigns or client persuasion.",
  comparison_notes_ko: "대규모 브랜드 캠페인이나 클라이언트 설득을 위한 고품질 목업 제작에 최적화되어 있습니다.",
  variations: [
    {
      label: "Mega Screen",
      label_ko: "메가 스크린",
      prompt_delta: "Change to giant 3D anamorphic LED screen on a corner building",
      use_case: "Future-tech advertising",
      use_case_ko: "미래 지향적 테크 광고",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Billboard appearing small -> add 'massive scale, skyscraper billboard' keywords."],
  common_failure_modes_ko: ["빌보드가 작게 나타남 -> 'massive scale, skyscraper billboard' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "outdoor billboard mockup prompt",
    secondary_keywords: ["urban advertising ai design", "city billboard prompt"],
    lsi_keywords: ["cinematic wide shot", "urban location"],
    meta_title: "Outdoor Billboard Mockup Prompt | Midjourney v6 Verified",
    meta_title_ko: "야외 빌보드 목업 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design massive outdoor billboard mockups in urban locations. Verified Midjourney v6 prompt for brand campaigns.",
    meta_description_ko: "도시의 주요 거점에 설치될 거대한 야외 빌보드 목업을 디자인하세요. 브랜드 캠페인을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-billboard-017-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Massive urban outdoor billboard mockup",
    alt_text_ko: "웅장한 도시 야외 빌보드 목업",
    width: 1600,
    height: 900,
    format: "webp",
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
  title_ko: "대중교통 및 지하철 광고",
  result_first_title: "Vibrant subway station advertising posters and digital screens mockup",
  result_first_title_ko: "활기찬 지하철역 광고 포스터 및 디지털 스크린 목업",
  short_description: "Professional mockup for public transit advertising, including subway walls, bus stops, and digital kiosks.",
  short_description_ko: "지하철 벽면, 버스 정류장, 디지털 키오스크를 포함한 대중교통 광고용 전문 목업 프롬프트입니다.",
  emotional_hook: "This prompt fills the fleeting moments where thousands of eyes linger every day with the brand's voice.",
  emotional_hook_ko: "이 프롬프트는 매일 수천 명의 시선이 머무는 찰나의 순간을 브랜드의 목소리로 채웁니다.",
  category: "marketing",
  vertical: "advertising",
  use_cases: ["transit_advertising", "subway_campaign", "urban_marketing", "mockup_presentation"],
  use_cases_ko: ["교통 광고", "지하철 캠페인", "어반 마케팅", "목업 프레젠테이션"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "transit advertising mockup, [transit_type], clean minimalist poster designs, [lighting_vibe], blurred commuters in motion, high-end urban photography, hyper-detailed environment --ar 16:9 --v 6 --s 150",
  negative_prompt: "low quality, blurry (subjects), messy, cluttered foreground, people in focus, old stations, dirty environment",
  aspect_ratio_tags: ["16:9", "transit", "subway"],
  variables: [
    {
      name: "transit_type",
      name_ko: "대중교통 유형",
      placeholder: "[transit_type]",
      default_value: "modern Tokyo subway station platform",
      recommended_values: ["futuristic bus stop in a glass shelter", "clean airport terminal corridor", "underground train interior with digital screens", "exterior of a high-speed train wrapping"],
      variable_behavior_note: "Changing the transit type adjusts the exposure context and visual clutter.",
      variable_behavior_note_ko: "대중교통 유형을 변경하면 노출 컨텍스트와 시각적 어수선함의 정도가 조정됩니다."
    }
  ],
  why_this_works: [
    "Blurred commuters in motion adds liveliness to static billboards and grants credibility as space where actual people are active.",
    "High-end urban photography style elevates everyday spaces into premium advertising media."
  ],
  why_this_works_ko: [
    "이동 중인 보행자의 블러(Blur) 처리는 정적인 빌보드에 생동감을 더하고, 실제 사람들이 활동하는 공간이라는 신뢰성을 부여합니다.",
    "하이엔드 어반 사진 스타일은 일상적인 공간을 프리미엄 광고 매체로 격상시켜줍니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Highly sophisticated representation of artificial interior lighting and reflections.",
      note_ko: "인위적인 실내 조명과 반사 효과를 매우 정교하게 표현합니다."
    }
  ],
  comparison_notes: "Provides highest quality images most suitable for simulation of lifestyle-embedded branding campaigns.",
  comparison_notes_ko: "생활 밀착형 브랜딩 캠페인의 시뮬레이션에 가장 적합한 최고 품질의 이미지를 제공합니다.",
  variations: [
    {
      label: "Night Stop",
      label_ko: "야간 정류장",
      prompt_delta: "Change to bus stop at night with glowing LED ads and wet pavement",
      use_case: "Nighttime campaigns",
      use_case_ko: "야간 광고 캠페인",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Space appearing too cluttered -> add 'clean minimalist architecture, modern station' keywords."],
  common_failure_modes_ko: ["공간이 너무 어수선해 보임 -> 'clean minimalist architecture, modern station' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "transit advertising mockup prompt",
    secondary_keywords: ["subway ad design ai", "bus stop poster prompt"],
    lsi_keywords: ["motion blur commuters", "urban photography"],
    meta_title: "Transit & Subway Ad Mockup Prompt | Midjourney v6 Verified",
    meta_title_ko: "대중교통 및 지하철 광고 목업 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design professional transit and subway advertisements. Verified Midjourney v6 prompt for urban marketing campaigns.",
    meta_description_ko: "지하철과 버스 정류장을 위한 전문적인 대중교통 광고를 디자인하세요. 어반 마케팅 캠페인을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-transit-018-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Modern subway station transit advertising mockup",
    alt_text_ko: "현대적인 지하철역 대중교통 광고 목업",
    width: 1600,
    height: 900,
    format: "webp",
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
  title_ko: "패션 룩북 레이아웃",
  result_first_title: "Minimalist fashion lookbook grid with multiple outfit variations and detail shots",
  result_first_title_ko: "다양한 의상 구성과 디테일 샷이 포함된 미니멀 패션 룩북 그리드",
  short_description: "A professional layout for fashion brands, combining full-body shots and macro details in a cohesive grid.",
  short_description_ko: "전신 샷과 매크로 디테일을 통일감 있는 그리드로 결합한, 패션 브랜드를 위한 전문적인 레이아웃 프롬프트입니다.",
  emotional_hook: "This prompt gathers fragmentary photos to build a vast world of style that the brand aims for.",
  emotional_hook_ko: "이 프롬프트는 단편적인 사진들을 모아 브랜드가 지향하는 거대한 스타일의 세계를 구축합니다.",
  category: "marketing",
  vertical: "editorial",
  use_cases: ["fashion_lookbook", "ecommerce_grid", "brand_storytelling", "instagram_carousel"],
  use_cases_ko: ["패션 룩북", "이커머스 그리드", "브랜드 스토리텔링", "인스타그램 캐러셀"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "fashion lookbook layout, [brand_style] aesthetic, grid composition with multiple frames, [shot_types], minimalist white space, soft natural light, consistent professional color grading, high-end editorial style --ar 3:4 --v 6 --s 200",
  negative_prompt: "messy, cluttered, inconsistent lighting, low quality, blurry, text, logos, bright neon (unless specified), low resolution",
  aspect_ratio_tags: ["3:4", "lookbook", "fashion"],
  variables: [
    {
      name: "brand_style",
      name_ko: "브랜드 스타일",
      placeholder: "[brand_style]",
      default_value: "Scandinavian minimalist",
      recommended_values: ["Parisian chic", "streetwear hypebeast", "bohemian artisanal", "futuristic techwear"],
      variable_behavior_note: "Changing the brand style consistently alters attire and background tones across all frames within the layout.",
      variable_behavior_note_ko: "브랜드 스타일을 변경하면 레이아웃 내의 모든 프레임에서 의상과 배경 톤이 일관되게 달라집니다."
    },
    {
      name: "shot_types",
      name_ko: "샷 유형",
      placeholder: "[shot_types]",
      default_value: "mix of full-body and close-up fabric details",
      recommended_values: ["dynamic movement poses and static portraits", "interior setting and outdoor landscape shots", "multiple models and product flat lays"],
      variable_behavior_note: "Changing shot configurations alters the visual rhythm and amount of information conveyed by the lookbook.",
      variable_behavior_note_ko: "샷 구성을 변경하면 룩북이 전달하는 시각적 리듬과 정보의 양이 달라집니다."
    }
  ],
  why_this_works: [
    "Grid composition shows multiple subjects and details at a glance, strongly imprinting the brand's season theme.",
    "Minimalist white space gives the images room to breathe, enhancing editorial design completion."
  ],
  why_this_works_ko: [
    "그리드 구성은 한눈에 여러 피사체와 디테일을 보여주어 브랜드의 시즌 테마를 강력하게 각인시킵니다.",
    "미니멀한 여백(White space)은 이미지에 숨쉴 공간을 주어 에디토리얼 디자인의 완성도를 높입니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional maintenance of tone and manner consistency across multiple frames.",
      note_ko: "여러 프레임에 걸쳐 톤 앤 매너의 일관성을 유지하는 능력이 탁월합니다."
    }
  ],
  comparison_notes: "Optimal for implementing neat and emotional brand lookbooks in the style of Kinfolk or MUJI.",
  comparison_notes_ko: "킨포크(Kinfolk)나 무인양품(MUJI) 스타일의 깔끔하고 감성적인 브랜드 룩북을 구현하는 데 최적입니다.",
  variations: [
    {
      label: "Action Focus",
      label_ko: "액션 포커스",
      prompt_delta: "Change to sequence of action shots, motion blur, dynamic layout",
      use_case: "Activewear brands",
      use_case_ko: "액티브웨어 브랜드",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Inconsistent lighting between frames -> add 'single lighting source, studio setting' keywords."],
  common_failure_modes_ko: ["프레임 간 조명이 일관되지 않음 -> 'single lighting source, studio setting' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "fashion lookbook layout prompt",
    secondary_keywords: ["brand storytelling grid ai", "ecommerce lookbook prompt"],
    lsi_keywords: ["grid composition", "minimalist white space"],
    meta_title: "Fashion Lookbook Layout Prompt | Midjourney v6 Verified",
    meta_title_ko: "패션 룩북 레이아웃 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design minimalist fashion lookbook grids for brands. Verified Midjourney v6 prompt for cohesive style storytelling.",
    meta_description_ko: "브랜드를 위한 미니멀한 패션 룩북 그리드를 디자인하세요. 일관된 스타일 스토리텔링을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-lookbook-019-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Minimalist fashion lookbook grid layout",
    alt_text_ko: "미니멀한 패션 룩북 그리드 레이아웃",
    width: 1200,
    height: 1600,
    format: "webp",
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
  title_ko: "프리미엄 기프트 카드 디자인",
  result_first_title: "Luxurious gift card design with metallic foil and premium textured cardstock",
  result_first_title_ko: "메탈릭 포일과 프리미엄 질감의 카드지를 사용한 럭셔리 기프트 카드 디자인",
  short_description: "Professional design for retail and service brands, featuring high-end materials, elegant patterns, and a tangible sense of value.",
  short_description_ko: "하이엔드 소재, 우아한 패턴, 체감되는 가치를 특징으로 하는 리테일 및 서비스 브랜드용 전문 디자인 프롬프트입니다.",
  emotional_hook: "Beyond a simple card, this prompt designs the most dignified form of sincerity you want to convey to someone.",
  emotional_hook_ko: "단순한 카드를 넘어, 누군가에게 전하고 싶은 가장 품격 있는 진심의 형태를 디자인합니다.",
  category: "marketing",
  vertical: "branding",
  use_cases: ["loyalty_program", "retail_marketing", "membership_card", "corporate_gift"],
  use_cases_ko: ["로열티 프로그램", "리테일 마케팅", "멤버십 카드", "기업용 기프트"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "premium gift card design, [card_theme], centered, [material_effect], elegant minimalist graphics, professional studio lighting, plain dark background, hyper-detailed texture --ar 3:2 --v 6 --s 250",
  negative_prompt: "low quality, blurry, messy, cheap looking plastic, bright neon (unless specified), text, logos, cluttered background, multiple cards",
  aspect_ratio_tags: ["3:2", "gift_card", "branding"],
  variables: [
    {
      name: "card_theme",
      name_ko: "카드 테마",
      placeholder: "[card_theme]",
      default_value: "high-end luxury boutique",
      recommended_values: ["sustainable eco-friendly organic shop", "modern minimalist tech brand", "vibrant artistic museum membership", "classic five-star hotel spa"],
      variable_behavior_note: "Changing the card theme selects symbolic colors and graphic motifs suitable for the brand's personality.",
      variable_behavior_note_ko: "카드 테마를 변경하면 브랜드의 성격에 적합한 상징적 색상과 그래픽 모티프가 선택됩니다."
    },
    {
      name: "material_effect",
      name_ko: "소재 효과",
      placeholder: "[material_effect]",
      default_value: "gold foil stamping on black matte paper",
      recommended_values: ["embossed silver on white textured linen", "transparent frosted acrylic with white ink", "recycled craft paper with dark green print", "iridescent holographic finish on pearl card"],
      variable_behavior_note: "Changing material effects visualizes the physical value of the card and the brand's price range.",
      variable_behavior_note_ko: "소재 효과를 변경하면 카드의 물리적 가치와 브랜드의 가격대를 시각화할 수 있습니다."
    }
  ],
  why_this_works: [
    "The material_effect keyword grants 'physicality' that reflects light and feels textured, beyond flat cards.",
    "The 3:2 aspect ratio is similar to actual card specifications, making it highly practical as a design proposal."
  ],
  why_this_works_ko: [
    "소재 효과(Material effect) 키워드는 평면적인 카드를 넘어 빛을 반사하고 질감이 느껴지는 '물리성'을 부여합니다.",
    "3:2 종횡비는 실제 카드 사양과 유사하여 디자인 제안서로서의 실용성이 매우 높습니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Extremely precise light reflection representation of foil stamping and embossing.",
      note_ko: "포일 스탬핑과 엠보싱의 정교한 빛 반사 표현이 매우 뛰어납니다."
    }
  ],
  comparison_notes: "Perfectly replicates the sentiment of top-tier membership/gift cards provided by department stores or luxury brands.",
  comparison_notes_ko: "백화점이나 럭셔리 브랜드에서 제공하는 최상위 멤버십/기프트 카드의 감성을 완벽하게 재현합니다.",
  variations: [
    {
      label: "Digital Version",
      label_ko: "디지털 버전",
      prompt_delta: "Change to flat 2D graphic version, clean gradients, no shadows, focus on UI design",
      use_case: "Mobile app wallet cards",
      use_case_ko: "모바일 앱 지갑 카드",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Card appearing too generic -> reinforce with 'intricate geometric patterns, premium stock' keywords."],
  common_failure_modes_ko: ["카드가 너무 평범해 보임 -> 'intricate geometric patterns, premium stock' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "premium gift card design prompt",
    secondary_keywords: ["luxury membership card ai", "retail loyalty card prompt"],
    lsi_keywords: ["metallic foil", "textured cardstock"],
    meta_title: "Premium Gift Card Design Prompt | Midjourney v6 Verified",
    meta_title_ko: "프리미엄 기프트 카드 디자인 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design luxurious gift and membership cards for retail brands. Verified Midjourney v6 prompt for high-end loyalty programs.",
    meta_description_ko: "리테일 브랜드를 위한 럭셔리 기프트 및 멤버십 카드를 디자인하세요. 하이엔드 로열티 프로그램을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/mkt-branding-giftcard-020-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Luxurious gold foil gift card design mockup",
    alt_text_ko: "호화로운 골드 포일 기프트 카드 디자인 목업",
    width: 1500,
    height: 1000,
    format: "webp",
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
