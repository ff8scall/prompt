import { PromptCard } from '../types';

export const tilesetPrompt: PromptCard = {
  id: "game-isometric-tileset-001",
  slug: "isometric-fantasy-village-tileset-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Isometric Fantasy Village Tileset Prompt",
  result_first_title: "Detailed isometric tiles for fantasy RPG game environments with consistent lighting",
  short_description: "Complete tileset for building isometric fantasy villages, dungeons, and environments in indie games and RPG Maker projects.",
  emotional_hook: "이 프롬프트는 손으로 깎은 듯한 따뜻한 픽셀 아트 마을의 정겨움과 모험의 설렘을 담아낸다.",
  category: "game_asset",
  vertical: "tileset",
  use_cases: ["indie_game_dev", "rpg_maker", "game_prototype", "steam_capsule_art", "itch_io_thumbnail"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "isometric [environment_type], 2.5D pixel art game tileset, hand-painted texture style, consistent top-down 45-degree angle, modular building pieces, [biome_features], soft shadows, game-ready asset, clean edges for tiling --ar 1:1 --v 6 --s 200 --tile",
  negative_prompt: "photorealistic, 3D render, perspective distortion, inconsistent shadows, human figures, blurry edges, photographic background, depth of field",
  aspect_ratio_tags: ["1:1", "sprite_sheet", "game_asset", "isometric"],
  variables: [
    {
      name: "environment_type",
      placeholder: "[environment_type]",
      default_value: "medieval village with timber houses and cobblestone paths",
      recommended_values: [
        "fantasy dungeon with stone walls and torches",
        "forest camp with tents and campfires",
        "coastal fishing port with wooden piers",
        "magical crystal cave with glowing minerals",
        "steampunk factory with brass pipes",
        "jungle temple with ancient ruins"
      ],
      variable_behavior_note: "환경 타입을 바꾸면 건축물과 자연 요소가 바뀌지만 isometric 2.5D 투시법, 타일 크기, 픽셀 아트 스타일, 조명 각도는 유지되어 여러 타일을 함께 쓸 수 있다."
    },
    {
      name: "biome_features",
      placeholder: "[biome_features]",
      default_value: "autumn foliage and hay bales",
      recommended_values: [
        "winter snow and frozen ponds",
        "spring flowers and green grass",
        "summer wheat fields",
        "nighttime with lanterns",
        "rainy weather with puddles"
      ],
      variable_behavior_note: "계절/시간대를 바꾸면 색감과 분위기가 달라지지만 타일 구조는 동일하다."
    }
  ],
  why_this_works: [
    "isometric 키워드는 게임에서 사용 가능한 2.5D 시점(45도 각도)을 생성하여 Unity, Godot, RPG Maker와 호환된다.",
    "--tile 파라미터는 Midjourney에서 원활하게 타일링되는 패턴을 만들어 여러 타일을 이어 붙일 수 있다.",
    "hand-painted texture style은 기계적 3D 렌더링과 달리 따뜻한 인디 게임 느낌을 준다.",
    "consistent top-down 45-degree angle은 여러 프롬프트를 실행해도 같은 시점을 유지하게 한다.",
    "negative prompt의 'perspective distortion' 제거는 isometric 왜곡을 방지하고 깔끔한 게임 에셋을 만든다.",
    "clean edges for tiling은 타일 간 경계선이 뚜렷하게 유지되어 게임 엔진에서 배치할 때 깨지지 않는다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "타일 간 일관성은 v6에서 개선되었지만, 여러 타일을 동일한 세션에서 생성하려면 --seed 고정이나 reference image 사용이 권장된다. --stylize 150-250 범위가 게임 에셋에 적합하다."
    },
    {
      model: "dall-e-3",
      version: "current",
      note: "타일링 패턴 생성에 약하다. 단일 컨셉 아트로는 가능하나 실제 게임 타일셋으로는 완성도가 떨어진다. Midjourney 사용을 강력히 권장."
    },
    {
      model: "stable_diffusion_xl",
      version: "xl",
      note: "isometric LoRA나 ControlNet을 사용하면 더 정확한 투시와 타일 일관성을 얻을 수 있다. img2img로 반복 생성 시 일관된 스타일 유지가 가능하다."
    }
  ],
  comparison_notes: "Midjourney v6는 게임 에셋의 아티스틱 품질이 가장 높고 --tile 옵션으로 실제 타일링도 가능하다. Stable Diffusion은 ControlNet으로 정밀도가 높지만 아티스틱 톤은 Midjourney가 우수. DALL-E 3는 타일셋 생성에 부적합. 인디 게임 개발자에게 Midjourney v6를 가장 먼저 추천.",
  variations: [
    {
      label: "Winter/Snow biome",
      prompt_delta: "Replace biome with winter snow, frozen ponds, snow-covered roofs, cool blue lighting",
      pre_generated_asset_id: "game_tileset_winter_001",
      use_case: "Winter game events, ice dungeons, snow villages"
    },
    {
      label: "Desert/Oasis theme",
      prompt_delta: "Replace with desert sand, palm trees, oasis water, warm orange lighting, adobe buildings",
      pre_generated_asset_id: "game_tileset_desert_001",
      use_case: "Desert biomes, Arabian-themed games"
    },
    {
      label: "Interior/Dungeon tiles",
      prompt_delta: "Focus on indoor spaces, stone walls, wooden doors, torch lighting, treasure chests",
      pre_generated_asset_id: "game_tileset_interior_001",
      use_case: "RPG dungeons, interior scenes"
    }
  ],
  common_failure_modes: [
    "투시각이 일관되지 않는 경우: --seed를 고정하거나 reference image를 사용하여 동일한 세션에서 생성한다.",
    "타일 경계가 깨지는 경우: 'clean edges for tiling'을 강화하거나 --tile 파라미터를 확인한다.",
    "너무 사실적인 3D 느낌이 나는 경우: stylize 값을 낮추고 'pixel art', 'hand-painted'를 강조한다.",
    "배경이 투명하지 않은 경우: RPG Maker나 Unity에서 배경 제거 도구로 후처리하거나, 'transparent background'를 negative prompt에서 제거하지 않았는지 확인."
  ],
  seo: {
    primary_keyword: "isometric game tileset prompt",
    secondary_keywords: [
      "midjourney game asset",
      "fantasy tileset ai",
      "rpg map tiles",
      "indie game art prompt",
      "pixel art tileset"
    ],
    lsi_keywords: [
      "2.5D perspective",
      "game environment",
      "modular tiles",
      "rpg maker",
      "unity 2D",
      "hand painted texture"
    ],
    meta_title: "Isometric Fantasy Tileset Prompt | Midjourney v6 Game Asset",
    meta_description: "Generate consistent isometric game tilesets for RPGs with verified Midjourney v6 prompt. Includes biome variations, model tips, and tiling guide."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-tileset-fantasy-001-hero.png",
    thumbnail: "/images/prompts/game-tileset-fantasy-001-thumb.png",
    variations: [
      "/images/prompts/game-tileset-winter-001.png",
      "/images/prompts/game-tileset-desert-001.png"
    ],
    alt_text: "Isometric fantasy village tileset with timber houses, cobblestone paths, and autumn foliage in pixel art style",
    width: 1024,
    height: 1024,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "iso-tileset-fantasy-001",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Tested with Midjourney v6. Consistent isometric angle achieved. 3 biome variations generated. Suitable for RPG Maker and Unity 2D. Verified for game asset bundle."
  }
};

export const rpgIconPrompt: PromptCard = {
  id: "game-rpg-icon-003",
  slug: "rpg-item-icon-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "RPG Item/Weapon Icon Prompt",
  result_first_title: "Detailed RPG item icons for game UI inventory systems",
  short_description: "Fantasy RPG item icons with transparent background ready for Unity, Godot, and game engines.",
  emotional_hook: "이 프롬프트는 모험가의 가방 속 보물들이 빛나는 판타지 세계의 아이템을 만든다.",
  category: "game_asset",
  vertical: "icon",
  use_cases: ["rpg_inventory", "game_ui", "loot_system", "mobile_game"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[item_type] game icon, RPG item, centered composition, plain background, detailed texture, game UI asset, fantasy style, high quality --ar 1:1 --v 6 --s 200",
  negative_prompt: "photorealistic, human figure, complex background, 3D render, blurry, low detail",
  aspect_ratio_tags: ["1:1", "icon", "game_asset"],
  variables: [
    {
      name: "item_type",
      placeholder: "[item_type]",
      default_value: "magic sword",
      recommended_values: ["health potion", "legendary armor", "gold coins", "ancient scroll", "crystal gem"],
      variable_behavior_note: "아이템 타입을 바꾸면 아이콘의 내용물이 바뀌지만 중앙 배치, 게임 UI 스타일, 배경 처리는 유지된다."
    }
  ],
  why_this_works: [
    "centered composition은 인벤토리 그리드에 들어갈 때 일관되게 보인다.",
    "plain background은 게임 엔진에서 아이콘으로 사용하기 쉽다.",
    "detailed texture은 장비 등급(희귀도)을 시각적으로 전달한다."
  ],
  model_notes: [
    { model: "midjourney", version: "v6", note: "1:1 비율에서 아이콘 중앙 배치가 안정적이다. 배경 제거는 후처리 필요할 수 있음." }
  ],
  comparison_notes: "Midjourney가 아이콘의 예술적 퀄리티에서 우수. 배경 투명도는 후처리 권장.",
  variations: [
    { label: "Common", prompt_delta: "Simple design, basic item, worn texture", use_case: "Common items", pre_generated_asset_id: null },
    { label: "Legendary", prompt_delta: "Glowing effects, ornate design, magical aura", use_case: "Legendary items", pre_generated_asset_id: null }
  ],
  common_failure_modes: ["배경이 투명하지 않음 → Unity/Godot에서 배경 제거 필요"],
  seo: {
    primary_keyword: "rpg item icon prompt",
    secondary_keywords: ["game icon ai", "rpg inventory icons"],
    lsi_keywords: ["fantasy items", "game assets", "inventory icons"],
    meta_title: "RPG Item Icon Prompt | Midjourney v6 Game Asset",
    meta_description: "Generate fantasy RPG item icons for game UIs. Verified prompt for Unity, Godot, and mobile games."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-rpg-icon-003-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "RPG item icon with fantasy design",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "rpg-icon-003",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: {
    human_review_required: true,
    review_status: "approved",
    reviewer_note: "Tested with various item types. Icon centering consistent. Background may need post-processing."
  }
};

export const cyberpunkCityPrompt: PromptCard = {
  id: "game-cyberpunk-bg-004",
  slug: "cyberpunk-cityscape-background-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Cyberpunk Cityscape Background",
  result_first_title: "Cinematic cyberpunk city with neon lights and rainy streets for game backgrounds",
  short_description: "High-fidelity environmental art for cyberpunk RPGs and visual novels, focusing on atmosphere and lighting.",
  emotional_hook: "이 프롬프트는 차가운 빗줄기와 뜨거운 네온사인이 교차하는 미래 도시의 고독한 느와르를 포착한다.",
  category: "game_asset",
  vertical: "background",
  use_cases: ["visual_novel", "rpg_background", "loading_screen", "marketing_art"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "cyberpunk city background, [time_and_weather], neon signage in Kanji and English, wet asphalt with reflections, flying vehicles in distance, blade runner aesthetic, cinematic lighting, ultra-detailed --ar 16:9 --v 6 --s 300",
  negative_prompt: "bright daylight, peaceful atmosphere, low detail, people in foreground, blurry, cartoonish",
  aspect_ratio_tags: ["16:9", "background", "cyberpunk"],
  variables: [
    {
      name: "time_and_weather",
      placeholder: "[time_and_weather]",
      default_value: "midnight with heavy rain and fog",
      recommended_values: ["sunset with orange smog", "early morning with neon reflections", "stormy night with lightning", "dusk with purple haze"],
      variable_behavior_note: "시간과 날씨를 바꾸면 도시의 색감과 분위기가 급변하지만, 사이버펑크 특유의 고밀도 레이아웃과 네온 미학은 유지된다."
    }
  ],
  why_this_works: [
    "blade runner aesthetic은 사이버펑크 장르의 시각적 기준점을 제시하여 의도한 분위기를 정확히 구현한다.",
    "wet asphalt reflections는 조명 효과를 증폭시켜 화면의 깊이감과 화려함을 극대화한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "도시의 세부 묘사와 빛의 반사 표현이 매우 정교함." }],
  comparison_notes: "환경 아트의 시각적 밀도와 시네마틱한 조명에서 최고의 퀄리티를 보장한다.",
  variations: [{ label: "Slum Area", prompt_delta: "Replace skyscrapers with crowded slums, exposed wires, and more grime", use_case: "Underground settings", pre_generated_asset_id: null }],
  common_failure_modes: ["화면이 너무 어두워 형체를 알 수 없는 경우 → 'ambient neon glow' 키워드 강화"],
  seo: {
    primary_keyword: "cyberpunk city background prompt",
    secondary_keywords: ["game environment ai", "neon city art prompt"],
    lsi_keywords: ["cinematic lighting", "rainy street reflections"],
    meta_title: "Cyberpunk Cityscape Background Prompt | Midjourney v6 Verified",
    meta_description: "Generate high-fidelity cyberpunk backgrounds with neon and rain. Verified Midjourney v6 prompt for RPGs and visual novels."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-cyberpunk-bg-004-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Cinematic cyberpunk cityscape with neon",
    width: 1600,
    height: 900,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "cyber-bg-004",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for environment art quality." }
};

export const spaceInteriorPrompt: PromptCard = {
  id: "game-space-interior-005",
  slug: "modular-space-station-interior-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Modular Space Station Interior",
  result_first_title: "Sci-fi space station hallway with modular panels and blue emissive lighting",
  short_description: "Hard sci-fi interior assets for first-person shooters and space exploration games.",
  emotional_hook: "이 프롬프트는 우주 공간의 차가운 금속성과 인류의 기술적 정교함이 만나는 폐쇄적인 경외감을 담는다.",
  category: "game_asset",
  vertical: "interior",
  use_cases: ["fps_level_design", "sci_fi_rpg", "environment_mockup", "concept_art"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "sci-fi space station interior, [room_type], modular wall panels, blue emissive light strips, metallic textures, hard-surface design, cinematic perspective, clean minimalist sci-fi aesthetic --ar 16:9 --v 6 --s 250",
  negative_prompt: "organic shapes, dirty environment, retro-future, cluttered, human figures, low tech, steam-punk",
  aspect_ratio_tags: ["16:9", "interior", "sci_fi"],
  variables: [
    {
      name: "room_type",
      placeholder: "[room_type]",
      default_value: "main corridor with view of the galaxy",
      recommended_values: ["high-tech medical bay", "spaceship cockpit", "engine room with glowing reactors", "crew quarters with minimal beds"],
      variable_behavior_note: "방의 용도를 바꾸면 가구와 장비 구성이 변경되지만, 전체적인 하드 서피스(Hard-surface) 디자인 톤은 일관되게 유지된다."
    }
  ],
  why_this_works: [
    "hard-surface design은 공상과학 장르 특유의 기계적이고 정밀한 표면 질감을 생성한다.",
    "blue emissive light strips는 화면에 미래지향적인 포인트를 주어 시각적 깊이를 더한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "금속 질감과 조명 선명도가 뛰어남." }],
  comparison_notes: "레벨 디자인을 위한 컨셉 아트 단계에서 가장 정교한 하드 서피스 품질을 제공한다.",
  variations: [{ label: "Abandoned/Broken", prompt_delta: "Add sparks, broken panels, and red emergency lighting", use_case: "Horror sci-fi", pre_generated_asset_id: null }],
  common_failure_modes: ["조명이 너무 평면적인 경우 → 'dynamic light and shadow' 키워드 추가"],
  seo: {
    primary_keyword: "space station interior prompt",
    secondary_keywords: ["sci-fi environment ai", "spaceship concept art"],
    lsi_keywords: ["modular panels", "hard surface design"],
    meta_title: "Modular Space Station Interior Prompt | Midjourney v6 Verified",
    meta_description: "Generate hard sci-fi interiors for space games. Verified Midjourney v6 prompt for level design and concept art."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-space-interior-005-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Sci-fi space station modular interior",
    width: 1600,
    height: 900,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "space-int-005",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for hard-surface consistency." }
};

export const lowPolyNaturePrompt: PromptCard = {
  id: "game-low-poly-nature-006",
  slug: "low-poly-nature-pack-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Low Poly Nature Asset Pack",
  result_first_title: "Stylized low poly forest environment with faceted terrain and colorful trees",
  short_description: "Modular low poly nature assets for 3D adventure games and stylized mobile projects.",
  emotional_hook: "이 프롬프트는 단순함의 미학 속에 숨겨진 평화로운 자연의 조각들을 시각화한다.",
  category: "game_asset",
  vertical: "environment_pack",
  use_cases: ["3d_adventure_game", "mobile_game_asset", "stylized_environment", "unity_asset_store"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "low poly [nature_element], flat shaded, faceted geometry, vibrant colors, stylized 3D art, isometric view, clean edges, game-ready asset, minimalist aesthetic --ar 1:1 --v 6 --s 150",
  negative_prompt: "photorealistic, high poly, smooth surfaces, blurry, organic textures, depth of field, cluttered background",
  aspect_ratio_tags: ["1:1", "stylized", "3d_asset"],
  variables: [
    {
      name: "nature_element",
      placeholder: "[nature_element]",
      default_value: "modular pine trees and rocky boulders",
      recommended_values: ["autumn forest with orange bushes", "snowy mountain peaks", "tropical island with palm trees", "crystal pond with water lilies"],
      variable_behavior_note: "자연 요소를 바꾸면 지형과 식생이 변경되지만, 로우 폴리 특유의 각진 기하학(Faceted geometry)과 플랫 셰이딩 스타일은 유지된다."
    }
  ],
  why_this_works: [
    "flat shaded와 faceted geometry는 로우 폴리 아트의 핵심인 명확한 면 분할을 유도한다.",
    "vibrant colors는 스타일리시한 게임에서 요구되는 시각적 활기를 불어넣는다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "기하학적 형태의 단순화 표현력이 매우 안정적임." }],
  comparison_notes: "3D 게임 엔진용 컨셉 아트 및 텍스처 소스로서 가장 높은 실용성을 제공한다.",
  variations: [{ label: "Desert Oasis", prompt_delta: "Replace pine trees with cacti and sand dunes", use_case: "Desert levels", pre_generated_asset_id: null }],
  common_failure_modes: ["면이 너무 매끄럽게 나오는 경우 → 'sharp edges, low polygon count' 키워드 보강"],
  seo: {
    primary_keyword: "low poly nature prompt",
    secondary_keywords: ["stylized 3d asset ai", "low poly environment prompt"],
    lsi_keywords: ["faceted geometry", "flat shaded"],
    meta_title: "Low Poly Nature Asset Pack Prompt | Midjourney v6 Verified",
    meta_description: "Generate stylish low poly nature assets for 3D games. Verified Midjourney v6 prompt for adventure and mobile projects."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-low-poly-nature-006-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Stylized low poly nature environment",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "lowpoly-006",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for low-poly geometry consistency." }
};

export const retroArcadeUiPrompt: PromptCard = {
  id: "game-retro-ui-007",
  slug: "retro-arcade-ui-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Retro Arcade Game UI",
  result_first_title: "16-bit retro arcade interface with neon colors and pixel art typography",
  short_description: "Vibrant, nostalgic user interface for arcade-style games and retro-themed projects.",
  emotional_hook: "이 프롬프트는 80년대 오락실의 화려한 네온과 전자음이 느껴지는 향수를 현대적으로 재해석한다.",
  category: "game_asset",
  vertical: "ui_design",
  use_cases: ["arcade_game", "retro_rpg", "game_menu_mockup", "indie_game_ui"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "retro arcade game UI, [ui_screen_type], 16-bit pixel art style, neon pink and cyan color palette, CRT scanline effect, pixelated typography, glowing buttons, arcade cabinet aesthetic --ar 16:9 --v 6 --s 200",
  negative_prompt: "photorealistic, modern flat design, 3D render, high poly, blurry, smooth gradients",
  aspect_ratio_tags: ["16:9", "retro_ui", "pixel_art"],
  variables: [
    {
      name: "ui_screen_type",
      placeholder: "[ui_screen_type]",
      default_value: "character selection screen",
      recommended_values: ["high score leaderboard", "game over screen with insert coin", "level clear rewards", "settings menu with CRT sliders"],
      variable_behavior_note: "화면 종류를 바꾸면 레이아웃과 텍스트 구성이 변경되지만, 16비트 픽셀 아트 무드와 CRT 효과는 일관되게 유지된다."
    }
  ],
  why_this_works: [
    "CRT scanline effect는 실제 아케이드 모니터의 질감을 재현하여 몰입감을 높인다.",
    "neon pink and cyan은 레트로 웨이브 미학의 핵심 컬러로 강력한 브랜드 개성을 부여한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "픽셀 아트 특유의 블록 질감 표현이 뛰어남." }],
  comparison_notes: "레트로 스타일의 게임 UI 컨셉 설계에서 독보적인 분위기를 연출한다.",
  variations: [{ label: "Game Boy Style", prompt_delta: "Replace colors with 4 shades of green, 8-bit handheld aesthetic", use_case: "Handheld retro games", pre_generated_asset_id: null }],
  common_failure_modes: ["픽셀이 너무 뭉개지는 경우 → 'sharp pixels, integer scaling' 키워드 추가"],
  seo: {
    primary_keyword: "retro arcade ui prompt",
    secondary_keywords: ["pixel art game ui ai", "arcade menu prompt"],
    lsi_keywords: ["CRT scanlines", "16-bit aesthetic"],
    meta_title: "Retro Arcade Game UI Prompt | Midjourney v6 Verified",
    meta_description: "Design nostalgic 16-bit arcade interfaces with neon colors. Verified Midjourney v6 prompt for retro games."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-retro-ui-007-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Retro 16-bit arcade game UI",
    width: 1600,
    height: 900,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "retro-ui-007",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for retro pixel art consistency." }
};

export const magicVfxPrompt: PromptCard = {
  id: "game-magic-vfx-008",
  slug: "magic-spell-vfx-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Magic Spell VFX Assets",
  result_first_title: "Spectacular magic spell particle effects with glowing elements on black background",
  short_description: "High-quality visual effects assets for magic spells, abilities, and combat in fantasy games.",
  emotional_hook: "이 프롬프트는 신비로운 마나가 폭발하며 전장을 수놓는 압도적인 시각적 전율을 창조한다.",
  category: "game_asset",
  vertical: "vfx",
  use_cases: ["magic_effect", "combat_vfx", "spell_icon", "game_cinematic"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[magic_type] spell effect, game VFX asset, magic circle, particle explosion, glowing energy trails, dark background, high contrast, cinematic particle system, ethereal atmosphere --ar 1:1 --v 6 --s 300",
  negative_prompt: "low contrast, blurry, human figure, complex background, cartoonish, low resolution",
  aspect_ratio_tags: ["1:1", "vfx", "magic"],
  variables: [
    {
      name: "magic_type",
      placeholder: "[magic_type]",
      default_value: "blue frost explosion with ice shards",
      recommended_values: ["golden holy light aura", "dark purple void portal", "green nature healing energy", "red fire phoenix burst"],
      variable_behavior_note: "마법의 종류를 바꾸면 색상과 입자의 형태가 속성에 맞게 변하지만, 검은 배경 위의 고대비 효과(VFX 추출용)는 유지된다."
    }
  ],
  why_this_works: [
    "dark background는 게임 엔진에서 블렌딩 모드(Additive/Screen)를 통해 VFX를 쉽게 합성할 수 있게 한다.",
    "particle explosion은 화면에 화려함과 타격감을 동시에 부여하는 핵심 시각 요소다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "에너지의 흐름과 파티클의 밀도 표현이 탁월함." }],
  comparison_notes: "게임 내 스킬 아이콘 및 VFX 리소스 제작을 위한 레퍼런스로서 최상의 품질을 보장한다.",
  variations: [{ label: "Simple Icon", prompt_delta: "Focus on single centered symbol, less particles, more graphic", use_case: "Spell icons", pre_generated_asset_id: null }],
  common_failure_modes: ["배경이 너무 밝게 나오는 경우 → 'pure black background' 키워드 강조"],
  seo: {
    primary_keyword: "magic spell vfx prompt",
    secondary_keywords: ["game particle effect ai", "fantasy magic prompt"],
    lsi_keywords: ["energy trails", "particle explosion"],
    meta_title: "Magic Spell VFX Asset Prompt | Midjourney v6 Verified",
    meta_description: "Generate spectacular magic effects for fantasy games. Verified Midjourney v6 prompt for combat VFX and spell icons."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-magic-vfx-008-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Spectacular magic spell VFX energy",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "vfx-008",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for high-contrast VFX layout." }
};

export const cyberpunkAssassinPrompt: PromptCard = {
  id: "game-char-cyberpunk-009",
  slug: "cyberpunk-assassin-concept-art-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Cyberpunk Assassin Concept Art",
  result_first_title: "High-detail cyberpunk assassin character sheet with tactical gear and neon accents",
  short_description: "A professional character design for futuristic games, featuring modular tactical armor, hidden blades, and a glowing visor.",
  emotional_hook: "이 프롬프트는 차가운 금속과 뜨거운 네온이 교차하는 미래의 긴장감을 캐릭터의 실루엣에 담아낸다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["concept_art", "character_sheet", "game_design", "3d_modeling_ref"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "cyberpunk assassin character design, [character_role], full body shot, tactical tech-wear armor, [weapon_type], glowing neon cyan accents, futuristic urban background, cinematic lighting, sharp focus, hyper-detailed --ar 2:3 --v 6 --s 250",
  negative_prompt: "fantasy, medieval, messy, low quality, blurry, organic, soft lighting, simple clothes, historical",
  aspect_ratio_tags: ["2:3", "character_sheet", "cyberpunk"],
  variables: [
    {
      name: "character_role",
      placeholder: "[character_role]",
      default_value: "high-tech stealth infiltrator",
      recommended_values: ["heavy armored street brawler", "cyber-enhanced hacker scout", "bio-synthetic elite guard", "wasteland scavenger mercenary"],
      variable_behavior_note: "캐릭터의 역할을 바꾸면 장비의 부피와 장갑의 두께, 전반적인 실루엣이 그 전문성에 맞게 변경된다."
    },
    {
      name: "weapon_type",
      placeholder: "[weapon_type]",
      default_value: "twin folding thermal blades",
      recommended_values: ["compact railgun sniper", "electromagnetic pulse grenades", "holographic wire trap", "high-frequency katana"],
      variable_behavior_note: "무기 유형을 바꾸면 캐릭터의 자세와 장비의 부착 위치가 동적으로 조정된다."
    }
  ],
  why_this_works: [
    "tactical tech-wear armor 키워드는 현대적인 군용 장비와 미래적 미학을 결합하여 실용적이면서도 멋진 디자인을 유도한다.",
    "glowing neon cyan accents는 어두운 배경 속에서 캐릭터의 가시성을 높이고 사이버펑크 특유의 에너지를 부여한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "금속 재질의 반사와 네온 광원 표현이 매우 탁월함." }],
  comparison_notes: "사이버펑크 2077이나 고스트 인 더 쉘 같은 명작의 캐릭터 감각을 프로젝트에 즉시 이식할 수 있다.",
  variations: [{ label: "Action Pose", prompt_delta: "Change to dynamic action pose, leaping through rain-slicked city streets", use_case: "Promotional art", pre_generated_asset_id: null }],
  common_failure_modes: ["디테일이 너무 뭉개지는 경우 → 'mechanical joints, complex layers' 키워드 추가"],
  seo: {
    primary_keyword: "cyberpunk assassin concept art",
    secondary_keywords: ["futuristic character design ai", "tactical techwear prompt"],
    lsi_keywords: ["character sheet", "neon accents"],
    meta_title: "Cyberpunk Assassin Concept Art Prompt | Midjourney v6 Verified",
    meta_description: "Design high-detail cyberpunk assassins with tactical gear. Verified Midjourney v6 prompt for game character concepts."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-char-cyberpunk-009-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "High-detail cyberpunk assassin character concept",
    width: 1000,
    height: 1500,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "assassin-009",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for character design consistency." }
};

export const medievalWizardPrompt: PromptCard = {
  id: "game-char-wizard-010",
  slug: "medieval-wizard-mage-concept-art-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Medieval Wizard Concept Art",
  result_first_title: "Majestic medieval wizard character design with ornate robes and magical aura",
  short_description: "A classic fantasy mage design featuring layered silk robes, an ancient staff, and swirling elemental energy.",
  emotional_hook: "이 프롬프트는 고대의 지혜와 강력한 원소의 힘이 결합된 마법사의 신비로움을 시각화한다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["rpg_character", "concept_art", "fantasy_illustration", "npc_design"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "medieval wizard character design, [element_type], full body, ornate layered robes with gold embroidery, [staff_style], glowing magical aura, ancient library background, cinematic fantasy lighting, hyper-detailed --ar 2:3 --v 6 --s 300",
  negative_prompt: "modern, sci-fi, technology, messy, low quality, blurry, simplistic, poor fabric texture",
  aspect_ratio_tags: ["2:3", "fantasy", "wizard"],
  variables: [
    {
      name: "element_type",
      placeholder: "[element_type]",
      default_value: "blue frost and ice magic",
      recommended_values: ["crimson fire and lava", "emerald nature and vines", "golden lightning and storm", "violet arcane and void"],
      variable_behavior_note: "원소 유형을 바꾸면 마법사의 의상 컬러, 효과음, 그리고 주변 입자 효과가 완전히 동기화되어 변경된다."
    },
    {
      name: "staff_style",
      placeholder: "[staff_style]",
      default_value: "twisted ancient oak staff with floating crystal",
      recommended_values: ["gold scepter with glowing orb", "iron staff with sharp dragon claws", "bone staff with dark skull", "crystalline wand with intense light"],
      variable_behavior_note: "지팡이 스타일을 바꾸면 마법사의 권위와 성향(선/악)에 대한 시각적 암시가 달라진다."
    }
  ],
  why_this_works: [
    "ornate layered robes 키워드는 캐릭터의 무게감과 디테일을 풍부하게 하여 고위 마법사의 품격을 만든다.",
    "glowing magical aura는 정적인 캐릭터 시트에 동적인 에너지를 부여하여 시선을 사로잡는다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "천의 질감과 금실 자수, 빛의 산란 효과가 매우 아름다움." }],
  comparison_notes: "반지의 제왕이나 디아블로 같은 정통 판타지 세계관의 정수를 담고 있다.",
  variations: [{ label: "Casting Spell", prompt_delta: "Change to action pose, chanting a powerful spell with massive light effects", use_case: "Skill card illustration", pre_generated_asset_id: null }],
  common_failure_modes: ["의상이 너무 단순하게 나오는 경우 → 'intricate patterns, silk and velvet' 키워드 추가"],
  seo: {
    primary_keyword: "medieval wizard concept art",
    secondary_keywords: ["fantasy mage design ai", "magical character prompt"],
    lsi_keywords: ["elemental energy", "ornate robes"],
    meta_title: "Medieval Wizard Concept Art Prompt | Midjourney v6 Verified",
    meta_description: "Design majestic fantasy wizards with elemental magic. Verified Midjourney v6 prompt for RPG character concepts."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-char-wizard-010-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Majestic medieval wizard character concept",
    width: 1000,
    height: 1500,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "wizard-010",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for fantasy aesthetic." }
};

export const mechWarriorPrompt: PromptCard = {
  id: "game-char-mech-011",
  slug: "futuristic-mech-warrior-concept-art-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Futuristic Mech Warrior",
  result_first_title: "Gargantuan mech suit design with heavy weaponry and industrial detail",
  short_description: "A professional design for robotic combat units, focusing on mechanical joints, hydraulic systems, and tactical armor plates.",
  emotional_hook: "이 프롬프트는 강철의 육중한 무게감과 첨단 기술의 정교함이 충돌하는 전장의 지배자를 설계한다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["mech_design", "robotic_concept", "sci_fi_game", "3d_asset_ref"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "futuristic mech warrior design, [mech_class], massive industrial robotic suit, [weapon_mount], hydraulic pistons, weathered metal texture, tactical camouflage, hangar background, dramatic lighting, hyper-detailed mechanical parts --ar 3:4 --v 6 --s 200",
  negative_prompt: "organic, human face, soft, fantasy, magical, clean and shiny (unless specified), small, fragile",
  aspect_ratio_tags: ["3:4", "mech", "robotic"],
  variables: [
    {
      name: "mech_class",
      placeholder: "[mech_class]",
      default_value: "heavy assault juggernaut",
      recommended_values: ["agile scout interceptor", "long-range artillery platform", "all-terrain support unit", "stealthy electronic warfare mech"],
      variable_behavior_note: "메카 클래스를 바꾸면 기체의 체급, 다리 개수, 장갑의 형태가 그 용도에 맞게 완전히 재설계된다."
    },
    {
      name: "weapon_mount",
      placeholder: "[weapon_mount]",
      default_value: "shoulder-mounted rail cannons",
      recommended_values: ["arm-mounted plasma cutters", "back-mounted missile pods", "integrated heavy machine guns", "energy shield generators"],
      variable_behavior_note: "무기 장착 형태를 바꾸면 기체의 전투 실루엣과 위협 수준이 시각적으로 변화한다."
    }
  ],
  why_this_works: [
    "hydraulic pistons와 weathered metal texture는 메카물에서 가장 중요한 '실제 작동할 것 같은 현실성'을 부여한다.",
    "hangar background는 기체의 거대한 크기를 가늠하게 하는 훌륭한 시각적 대비를 제공한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "기계적인 구조물과 금속의 부식 표현이 매우 현실적임." }],
  comparison_notes: "아머드 코어로나 타이탄폴 같은 명작 메카닉 게임의 감각을 구현하기에 최적이다.",
  variations: [{ label: "Close-up", prompt_delta: "Focus on the pilot cockpit and head sensor array, high-detail macro shot", use_case: "Technical breakdown", pre_generated_asset_id: null }],
  common_failure_modes: ["형태가 너무 추상적으로 나오는 경우 → 'functional mechanical joints' 키워드 추가"],
  seo: {
    primary_keyword: "futuristic mech warrior concept art",
    secondary_keywords: ["robotic suit design ai", "industrial mech prompt"],
    lsi_keywords: ["mechanical joints", "tactical armor"],
    meta_title: "Futuristic Mech Warrior Concept Art Prompt | Midjourney v6 Verified",
    meta_description: "Design massive industrial mech warriors with heavy weaponry. Verified Midjourney v6 prompt for sci-fi game assets."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-char-mech-011-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Gargantuan futuristic mech warrior design",
    width: 1200,
    height: 1600,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "mech-011",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for mechanical realism." }
};

export const darkFantasyRoguePrompt: PromptCard = {
  id: "game-char-rogue-012",
  slug: "dark-fantasy-rogue-concept-art-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Dark Fantasy Rogue",
  result_first_title: "Shadowy dark fantasy rogue character with hooded cloak and poison-tipped daggers",
  short_description: "A stealth-focused character design featuring worn leather armor, a deep hood, and a mysterious, lethal aura.",
  emotional_hook: "이 프롬프트는 소리 없는 죽음이 지배하는 어둠의 세계, 그 중심에 선 고독한 사냥꾼을 소환한다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["assassin_concept", "rpg_rogue", "horror_fantasy", "villain_design"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "dark fantasy rogue character design, [rogue_archetype], full body, worn dark leather armor, tattered hooded cloak, [signature_weapon], glowing ominous eyes, foggy medieval alley background, dramatic rim lighting, moody atmosphere --ar 2:3 --v 6 --s 180",
  negative_prompt: "bright colors, heroic, clean, sci-fi, technology, messy, low quality, blurry, day light",
  aspect_ratio_tags: ["2:3", "dark_fantasy", "rogue"],
  variables: [
    {
      name: "rogue_archetype",
      placeholder: "[rogue_archetype]",
      default_value: "poison-specialist silent assassin",
      recommended_values: ["shadow-manipulating void walker", "exiled royal spy", "grave-robbing treasure hunter", "vampiric night stalker"],
      variable_behavior_note: "도적의 아키타입을 바꾸면 무기의 독 기운, 의상의 장식물, 그리고 캐릭터가 뿜어내는 분위기의 색채가 변경된다."
    },
    {
      name: "signature_weapon",
      placeholder: "[signature_weapon]",
      default_value: "twin serrated poison-dipped daggers",
      recommended_values: ["hidden wrist blades", "barbed throwing knives", "compact collapsible crossbow", "smoke bomb belt"],
      variable_behavior_note: "시그니처 무기를 바꾸면 캐릭터의 은신 자세와 전투 준비 태세가 그에 맞춰 조정된다."
    }
  ],
  why_this_works: [
    "tattered hooded cloak과 rim lighting은 캐릭터의 정체를 숨기면서도 실루엣을 강조하여 강렬한 인상을 남긴다.",
    "glowing ominous eyes는 어둠 속에서도 캐릭터의 의지를 드러내는 포인트가 된다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "어두운 영역 내의 가죽 질감과 안개 표현이 탁월함." }],
  comparison_notes: "다크 소울이나 블러드본 같은 고딕/다크 판타지 스타일의 캐릭터 설계에 최적이다.",
  variations: [{ label: "Hiding", prompt_delta: "Crouched pose, partially hidden behind a stone pillar, intense shadow", use_case: "Stealth mechanic preview", pre_generated_asset_id: null }],
  common_failure_modes: ["캐릭터가 너무 선명하게 보이는 경우 → 'deep shadows, obscure facial features' 키워드 추가"],
  seo: {
    primary_keyword: "dark fantasy rogue concept art",
    secondary_keywords: ["assassin character design ai", "stealth rogue prompt"],
    lsi_keywords: ["hooded cloak", "leather armor"],
    meta_title: "Dark Fantasy Rogue Concept Art Prompt | Midjourney v6 Verified",
    meta_description: "Design shadowy dark fantasy rogues with hooded cloaks. Verified Midjourney v6 prompt for lethal assassin concepts."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-char-rogue-012-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Shadowy dark fantasy rogue character concept",
    width: 1000,
    height: 1500,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "rogue-012",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for dark fantasy atmosphere." }
};

export const steampunkExplorerPrompt: PromptCard = {
  id: "game-char-steampunk-013",
  slug: "steampunk-explorer-concept-art-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Steampunk Explorer",
  result_first_title: "Vintage steampunk explorer character with brass goggles and mechanical gadgets",
  short_description: "A character design blending Victorian fashion with industrial machinery, featuring leather gear and brass clockwork.",
  emotional_hook: "이 프롬프트는 증기 기관의 낭만과 미지의 세계를 향한 모험심이 가득한 탐험가를 소환한다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["adventure_game", "steampunk_world", "concept_art", "character_sheet"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "steampunk explorer character design, [explorer_gender], full body, brown leather vest and flight pants, [gadget_type], brass goggles on forehead, clockwork mechanical arm, Victorian city background with airships, warm sepia lighting, hyper-detailed --ar 2:3 --v 6 --s 200",
  negative_prompt: "modern, sci-fi, magical, messy, low quality, blurry, neon, plastic, generic",
  aspect_ratio_tags: ["2:3", "steampunk", "explorer"],
  variables: [
    {
      name: "explorer_gender",
      placeholder: "[explorer_gender]",
      default_value: "female adventurer with messy hair",
      recommended_values: ["dashing male pilot with mustache", "elderly professor with monocle", "young street orphan with oversized coat", "mysterious hooded mapmaker"],
      variable_behavior_note: "성별과 외형 특성을 바꾸면 캐릭터의 개성과 스토리가 시각적으로 구체화되지만, 스팀펑크의 산업 미학은 유지된다."
    },
    {
      name: "gadget_type",
      placeholder: "[gadget_type]",
      default_value: "folding brass telescope and compass",
      recommended_values: ["steam-powered backpack with wings", "mechanical analytical engine", "ornate clockwork pistol", "vial of glowing bio-fuel"],
      variable_behavior_note: "가젯 유형을 바꾸면 캐릭터의 전문 분야와 탐험의 성격이 시각적으로 암시된다."
    }
  ],
  why_this_works: [
    "brass와 leather의 조합은 스팀펑크 장르의 시각적 문법을 가장 충실히 구현하여 장르적 쾌감을 준다.",
    "clockwork mechanical arm은 신체와 기계의 결합이라는 장르적 테마를 캐릭터의 핵심 포인트로 만든다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "구리, 황동, 가죽의 질감 대비가 매우 우수함." }],
  comparison_notes: "바이오쇼크 인피니트나 스팀보이 같은 작품의 빈티지하면서도 세밀한 기계 미학을 담고 있다.",
  variations: [{ label: "Close-up", prompt_delta: "Macro shot of the mechanical arm and gadgets, showing gears and rivets", use_case: "Prop detail ref", pre_generated_asset_id: null }],
  common_failure_modes: ["기계 장치가 너무 현대적으로 나오는 경우 → 'brass gears, rivets, steam vents' 키워드 추가"],
  seo: {
    primary_keyword: "steampunk explorer concept art",
    secondary_keywords: ["victorian industrial design ai", "clockwork character prompt"],
    lsi_keywords: ["brass goggles", "mechanical arm"],
    meta_title: "Steampunk Explorer Concept Art Prompt | Midjourney v6 Verified",
    meta_description: "Design vintage steampunk explorers with brass and leather gear. Verified Midjourney v6 prompt for adventure game characters."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-char-steampunk-013-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Vintage steampunk explorer character concept",
    width: 1000,
    height: 1500,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "steampunk-013",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for material texture contrast." }
};

export const treasureChestsPrompt: PromptCard = {
  id: "game-prop-chest-014",
  slug: "treasure-chest-item-design-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Treasure Chest Item Design",
  result_first_title: "Intricate treasure chest design variations with gold filigree and magical glow",
  short_description: "A collection of high-detail treasure chests for RPGs, including common wood, ornate gold, and mimic variations.",
  emotional_hook: "이 프롬프트는 모험의 끝에서 마주하는 가장 짜릿한 보상의 순간을 시각적 화려함으로 보답한다.",
  category: "game_asset",
  vertical: "item_design",
  use_cases: ["loot_system", "rpg_item", "game_prop", "concept_art"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "treasure chest item design, [chest_rarity], centered composition, [material_type], ornate gold filigree, soft magical glow from within, plain dark background, high-fidelity 3D render style, hyper-detailed --ar 1:1 --v 6 --s 200",
  negative_prompt: "low quality, blurry, human figure, complex background, messy, flat shading, modern technology, cartoonish",
  aspect_ratio_tags: ["1:1", "item_design", "fantasy_prop"],
  variables: [
    {
      name: "chest_rarity",
      placeholder: "[chest_rarity]",
      default_value: "legendary ancient artifact chest",
      recommended_values: ["common weathered wooden crate", "rare silver knight chest", "epic glowing arcane box", "cursed dark mimic chest with teeth"],
      variable_behavior_note: "희귀도를 바꾸면 상자의 크기, 장식의 밀도, 그리고 뿜어져 나오는 빛의 강도가 등급에 맞게 변화한다."
    },
    {
      name: "material_type",
      placeholder: "[material_type]",
      default_value: "weathered oak and reinforced iron",
      recommended_values: ["polished white marble and gold", "dark obsidian with glowing runes", "organic bone and leather", "crystalline glass with liquid core"],
      variable_behavior_note: "재질을 바꾸면 상자가 속한 문명권이나 배경 스토리의 성격이 시각적으로 암시된다."
    }
  ],
  why_this_works: [
    "centered composition은 게임 엔진의 아이템 미리보기 창이나 인벤토리 UI에 즉시 활용하기 가장 적합한 구도다.",
    "magical glow from within은 상자 안에 무엇인가 대단한 것이 들어있다는 기대를 시각적으로 증폭시킨다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "금속 광택과 나무 결의 질감 대비가 매우 현실적임." }],
  comparison_notes: "월드 오브 워크래프트나 디아블로 시리즈의 전설적인 전리품 상자 느낌을 재현한다.",
  variations: [{ label: "Mimic", prompt_delta: "Add sharp teeth, a long purple tongue, and multiple eyes peeking from the lid", use_case: "Enemy/Trap design", pre_generated_asset_id: null }],
  common_failure_modes: ["상자가 잘려 보이는 경우 → 'full object in frame' 키워드 추가"],
  seo: {
    primary_keyword: "treasure chest item design prompt",
    secondary_keywords: ["rpg loot design ai", "game prop prompt"],
    lsi_keywords: ["gold filigree", "magical glow"],
    meta_title: "Treasure Chest Item Design Prompt | Midjourney v6 Verified",
    meta_description: "Design intricate treasure chests for RPGs. Verified Midjourney v6 prompt for loot systems and game props."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-prop-chest-014-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Intricate treasure chest item design",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "chest-014",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for prop centering." }
};

export const magicPotionsPrompt: PromptCard = {
  id: "game-item-potion-015",
  slug: "magic-potions-vial-design-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Magic Potions & Vials",
  result_first_title: "Ornate magic potion vials with glowing liquids and cork stoppers",
  short_description: "A set of stylized alchemical potions, featuring unique glass shapes, bubbling liquids, and decorative labels.",
  emotional_hook: "이 프롬프트는 연금술사의 선반 위에 놓인 신비로운 약병들, 그 투명한 유리 속 에너지를 포착한다.",
  category: "game_asset",
  vertical: "item_design",
  use_cases: ["rpg_inventory", "alchemy_system", "ui_icons", "game_assets"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "magic potion vial design, [potion_type], centered, [vial_shape] glass bottle, glowing [liquid_color] liquid with bubbles, ornate silver cap, plain light gray background, 3D render style, hyper-detailed --ar 1:1 --v 6 --s 150",
  negative_prompt: "complex background, human figure, messy, low quality, blurry, modern plastic, dirty liquid, text, labels",
  aspect_ratio_tags: ["1:1", "item_design", "alchemy"],
  variables: [
    {
      name: "potion_type",
      placeholder: "[potion_type]",
      default_value: "elixir of ultimate restoration",
      recommended_values: ["volatile fire blast oil", "shimmering mana essence", "corrosive venom extract", "divine holy water flask"],
      variable_behavior_note: "포션의 종류를 바꾸면 액체의 농도와 내부 입자(빛 가루, 연기 등)가 효과에 맞게 변경된다."
    },
    {
      name: "vial_shape",
      placeholder: "[vial_shape]",
      default_value: "elegant heart-shaped",
      recommended_values: ["sturdy round spherical", "tall crystalline hexagonal", "jagged lightning-bolt style", "mysterious crescent moon"],
      variable_behavior_note: "병의 모양을 바꾸면 포션의 희귀도와 시각적 개성이 뚜렷하게 강조된다."
    }
  ],
  why_this_works: [
    "glowing liquid with bubbles는 정적인 이미지에 생동감을 부여하고 마법 아이템으로서의 정체성을 강화한다.",
    "plain light gray background는 투명한 유리의 굴절과 반사광을 가장 선명하게 관찰할 수 있게 돕는다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "유리의 굴절과 유체 내 광원 표현이 매우 뛰어남." }],
  comparison_notes: "모바일 RPG의 인벤토리 아이콘이나 연금술 컨텐츠 레퍼런스로 사용하기에 완벽하다.",
  variations: [{ label: "Ingredient Pack", prompt_delta: "Change vial to raw alchemy ingredients like glowing herbs and crushed dragon scales in jars", use_case: "Crafting system", pre_generated_asset_id: null }],
  common_failure_modes: ["액체가 탁해 보이는 경우 → 'crystal clear liquid, intense inner glow' 키워드 추가"],
  seo: {
    primary_keyword: "magic potion vial design prompt",
    secondary_keywords: ["alchemy item ai design", "rpg inventory potion prompt"],
    lsi_keywords: ["glowing liquid", "glass bottle design"],
    meta_title: "Magic Potions & Vials Design Prompt | Midjourney v6 Verified",
    meta_description: "Design ornate magic potions for RPGs. Verified Midjourney v6 prompt for alchemical item concepts."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-item-potion-015-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Ornate magic potion vial design",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "potion-015",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for liquid lighting effects." }
};

export const ancientArtifactsPrompt: PromptCard = {
  id: "game-item-artifact-016",
  slug: "ancient-relic-artifact-design-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Ancient Relics & Artifacts",
  result_first_title: "Powerful ancient artifact with mystical inscriptions and floating components",
  short_description: "Unique quest items and legendary relics for fantasy games, featuring floating parts and elemental energy.",
  emotional_hook: "이 프롬프트는 수천 년의 시간을 견뎌온 유물, 그 속에 잠든 압도적인 권능과 비밀을 설계한다.",
  category: "game_asset",
  vertical: "item_design",
  use_cases: ["quest_item", "legendary_gear", "world_lore", "game_assets"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "ancient fantasy artifact, [artifact_type], centered, [primary_material] with glowing runes, floating parts, mystical energy arcs, cinematic lighting, plain dark background, hyper-detailed 3D concept --ar 1:1 --v 6 --s 300",
  negative_prompt: "modern, low tech, messy, low quality, blurry, human figure, complex background, cartoonish, wooden (unless specified)",
  aspect_ratio_tags: ["1:1", "item_design", "relic"],
  variables: [
    {
      name: "artifact_type",
      placeholder: "[artifact_type]",
      default_value: "floating sun-dial of eternity",
      recommended_values: ["skull of a fallen god with jewels", "mechanical heart of a titan", "floating crystalline crown", "sealed box of cosmic whispers"],
      variable_behavior_note: "유물의 유형을 바꾸면 전체적인 실루엣과 유물이 주는 서사적 무게감이 완전히 달라진다."
    },
    {
      name: "primary_material",
      placeholder: "[primary_material]",
      default_value: "etched ivory and obsidian",
      recommended_values: ["cracked celestial bronze", "glowing ethereal ether-stone", "ancient rusted dragon-scale iron", "polished white divine marble"],
      variable_behavior_note: "주요 재질을 바꾸면 유물이 제작된 시대나 문명의 기술적 수준이 시각화된다."
    }
  ],
  why_this_works: [
    "floating parts와 energy arcs는 유물이 일반적인 물건이 아닌 '초자연적인 힘'을 가지고 있음을 즉각적으로 보여준다.",
    "glowing runes는 유물에 고대의 지식이나 저주가 깃들어 있다는 서사적 깊이를 더한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "부유하는 부품들 사이의 공간감과 광원 처리가 매우 훌륭함." }],
  comparison_notes: "갓 오브 워나 엘든 링의 키 아이템(Key items) 수준의 시각적 무게감을 보장한다.",
  variations: [{ label: "Corrupted", prompt_delta: "Add black shadow smoke, cracked surface, and red bleeding energy", use_case: "Evil/Cursed relics", pre_generated_asset_id: null }],
  common_failure_modes: ["유물이 너무 단순해 보이는 경우 → 'intricate clockwork, layered engravings' 키워드 추가"],
  seo: {
    primary_keyword: "ancient relic artifact design prompt",
    secondary_keywords: ["fantasy quest item ai", "legendary artifact prompt"],
    lsi_keywords: ["floating parts", "glowing runes"],
    meta_title: "Ancient Relics & Artifacts Design Prompt | Midjourney v6 Verified",
    meta_description: "Design powerful ancient artifacts for RPGs. Verified Midjourney v6 prompt for quest items and legendary relics."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-item-artifact-016-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Powerful ancient relic artifact design",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "artifact-016",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for mystical atmosphere." }
};

export const medievalWeaponsPrompt: PromptCard = {
  id: "game-item-weapon-017",
  slug: "medieval-weapon-design-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Medieval Weapons & Armor",
  result_first_title: "Exquisite medieval weapon design with ornate engravings and battle-worn texture",
  short_description: "A professional character-centric weapon design for RPGs, including swords, axes, and shields.",
  emotional_hook: "이 프롬프트는 기사의 명예와 전사의 투지가 서린, 가장 날카롭고 강인한 강철의 조형미를 설계한다.",
  category: "game_asset",
  vertical: "item_design",
  use_cases: ["weapon_concept", "rpg_gear", "character_asset", "3d_modeling_ref"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "medieval weapon design, [weapon_type], centered full shot, [material_finish] with [engraving_style] patterns, leather wrapped hilt, cinematic studio lighting, plain dark background, hyper-detailed metal texture --ar 2:3 --v 6 --s 250",
  negative_prompt: "low quality, blurry, human figure holding it, complex background, modern, sci-fi, cartoonish, plastic looking metal",
  aspect_ratio_tags: ["2:3", "weapon_design", "medieval"],
  variables: [
    {
      name: "weapon_type",
      placeholder: "[weapon_type]",
      default_value: "broadsword with a heavy crossguard",
      recommended_values: ["double-headed battle axe", "long reaching steel halberd", "ornate kite shield with royal crest", "recurve longbow with silver tips"],
      variable_behavior_note: "무기 종류를 바꾸면 무기의 길이와 무게감이 조정되며, 전사의 전투 스타일이 시각적으로 표현된다."
    },
    {
      name: "material_finish",
      placeholder: "[material_finish]",
      default_value: "polished cold steel",
      recommended_values: ["battle-worn rusted iron", "glowing dragon-forged gold", "dark obsidian glass", "etched damascus steel"],
      variable_behavior_note: "재질 마감을 바꾸면 무기의 상태(새것 vs 낡은 것)와 전설적인 정도가 시각화된다."
    }
  ],
  why_this_works: [
    "hyper-detailed metal texture 키워드는 칼날의 날카로움과 표면의 미세한 흠집까지 표현하여 사실성을 높인다.",
    "plain dark background는 금속의 광택과 실루엣을 가장 돋보이게 하여 3D 모델링 참고 시 유리하다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "금속 반사와 장식용 문양의 정밀도가 타 모델 대비 매우 높음." }],
  comparison_notes: "어쌔신 크리드나 포 아너 같은 고증 중심 혹은 화려한 판타지 무기 설계에 모두 대응한다.",
  variations: [{ label: "Elemental", prompt_delta: "Add fire/lightning effects flowing through the blade/axe head", use_case: "Magic weapons", pre_generated_asset_id: null }],
  common_failure_modes: ["무기의 비율이 어색한 경우 → 'historically accurate proportions' 키워드 추가"],
  seo: {
    primary_keyword: "medieval weapon design prompt",
    secondary_keywords: ["rpg sword concept art ai", "battle axe design prompt"],
    lsi_keywords: ["metal texture", "leather wrapped hilt"],
    meta_title: "Medieval Weapons Design Prompt | Midjourney v6 Verified",
    meta_description: "Design exquisite medieval weapons and armor. Verified Midjourney v6 prompt for RPG gear and character assets."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-item-weapon-017-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Exquisite medieval broadsword weapon design",
    width: 1000,
    height: 1500,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "weapon-017",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for metal material fidelity." }
};

export const sciFiConsumablesPrompt: PromptCard = {
  id: "game-item-scifi-018",
  slug: "sci-fi-consumable-item-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Sci-Fi Consumables",
  result_first_title: "Futuristic sci-fi consumable items with glowing canisters and digital displays",
  short_description: "High-tech utility items for sci-fi games, including batteries, data chips, and medical stims.",
  emotional_hook: "이 프롬프트는 미래 도시의 차가운 금속과 뜨거운 데이터가 공존하는 기능적 미학을 포착한다.",
  category: "game_asset",
  vertical: "item_design",
  use_cases: ["sci_fi_rpg", "survival_game", "ui_icons", "game_assets"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "sci-fi consumable item, [consumable_type], centered, [packaging_style], glowing emissive lights, digital hologram interface, futuristic materials (carbon fiber, matte plastic), plain dark background, hyper-detailed 3D render --ar 1:1 --v 6 --s 200",
  negative_prompt: "fantasy, organic, wooden, messy, low quality, blurry, human figure, complex background, old technology, retro",
  aspect_ratio_tags: ["1:1", "item_design", "sci_fi"],
  variables: [
    {
      name: "consumable_type",
      placeholder: "[consumable_type]",
      default_value: "high-capacity energy cell",
      recommended_values: ["encrypted data crystal", "neuro-stimulant injector", "holographic map drive", "portable fusion battery"],
      variable_behavior_note: "소모품 종류를 바꾸면 아이템의 용도에 맞는 기술적 장치와 라이팅 효과가 변경된다."
    },
    {
      name: "packaging_style",
      placeholder: "[packaging_style]",
      default_value: "sleek carbon fiber casing",
      recommended_values: ["rugged industrial metal canister", "transparent glass stim injector", "minimalist white ceramic shell", "weathered cyberpunk junk-tech"],
      variable_behavior_note: "패키징 스타일을 바꾸면 아이템이 제작된 문명이나 제조사의 성격이 시각화된다."
    }
  ],
  why_this_works: [
    "glowing emissive lights는 미래적인 아이템이라는 인상을 즉각적으로 전달하며 저조도 환경에서의 가시성을 높인다.",
    "digital hologram interface는 아이템이 작동 중이거나 데이터를 담고 있다는 인터랙티브한 감각을 부여한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "플라스틱과 탄소 섬유 등 미래적 소재의 질감이 매우 사실적임." }],
  comparison_notes: "데스 스트랜딩이나 사이버펑크 2077의 아이템 목록에서 볼 법한 고품질 비주얼을 제공한다.",
  variations: [{ label: "Damaged/Junk", prompt_delta: "Add exposed wires, cracked screens, and dirty metal texture", use_case: "Post-apocalyptic settings", pre_generated_asset_id: null }],
  common_failure_modes: ["아이템이 너무 작게 나오는 경우 → 'close-up shot, focus on device' 키워드 추가"],
  seo: {
    primary_keyword: "sci-fi consumable item prompt",
    secondary_keywords: ["futuristic game item ai", "high-tech stim design"],
    lsi_keywords: ["emissive lights", "hologram interface"],
    meta_title: "Sci-Fi Consumables Design Prompt | Midjourney v6 Verified",
    meta_description: "Design high-tech consumables for sci-fi games. Verified Midjourney v6 prompt for energy cells and medical stims."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-item-scifi-018-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Futuristic sci-fi energy cell item design",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "scifi-018",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for material realism." }
};

export const fantasyFloraPrompt: PromptCard = {
  id: "game-asset-flora-019",
  slug: "fantasy-flora-plant-design-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Fantasy Flora & Plants",
  result_first_title: "Bioluminescent fantasy plant with unique glowing petals and mystical aura",
  short_description: "Extraterrestrial and magical plants for world-building, featuring bioluminescence and organic shapes.",
  emotional_hook: "이 프롬프트는 낯선 행성의 숲이나 마법사의 정원에서만 볼 수 있는 기묘하고 아름다운 생명력을 설계한다.",
  category: "game_asset",
  vertical: "environment_asset",
  use_cases: ["world_building", "alchemy_ingredients", "environment_concept", "game_assets"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "fantasy flora plant design, [plant_type], [bioluminescent_color] glow, bioluminescent particles, organic alien shapes, plain dark background, cinematic lighting, hyper-detailed 3D concept --ar 1:1 --v 6 --s 200",
  negative_prompt: "real-world plants, boring, low quality, blurry, human figure, complex background, simple colors, dead plants",
  aspect_ratio_tags: ["1:1", "item_design", "nature"],
  variables: [
    {
      name: "plant_type",
      placeholder: "[plant_type]",
      default_value: "floating crystal lily with pulsating core",
      recommended_values: ["spiky purple bioluminescent mushroom", "twisting vine with glowing berries", "giant transparent pitcher plant", "ancient tree root with embedded gems"],
      variable_behavior_note: "식물의 종류를 바꾸면 전체적인 실루엣과 식물의 생태적 특성(부유, 발광, 기생 등)이 시각적으로 변화한다."
    },
    {
      name: "bioluminescent_color",
      placeholder: "[bioluminescent_color]",
      default_value: "electric cyan and violet",
      recommended_values: ["eerie neon green", "pulsating crimson red", "soft warm golden", "ghostly pale blue"],
      variable_behavior_note: "발광 색상을 바꾸면 식물이 위치한 환경의 분위기와 식물이 가진 속성(치유 vs 맹독)이 암시된다."
    }
  ],
  why_this_works: [
    "bioluminescent particles와 glow는 어두운 게임 환경에서 플레이어의 시선을 끄는 탐험의 목표물로 활용하기에 최적이다.",
    "organic alien shapes는 지구상에 없는 식물이라는 이질감을 주어 판타지 세계관의 설득력을 높인다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "식물 조직의 투명도와 발광 입자 표현이 매우 환상적임." }],
  comparison_notes: "영화 아바타나 게임 노 맨즈 스카이 스타일의 외계 식생 컨셉 설계에 탁월하다.",
  variations: [{ label: "Indoor Pot", prompt_delta: "Add an ornate ceramic pot and place the plant in a high-end interior setting", use_case: "Base decoration", pre_generated_asset_id: null }],
  common_failure_modes: ["지구의 일반 식물처럼 나오는 경우 → 'alien structures, glowing veins' 키워드 보강"],
  seo: {
    primary_keyword: "fantasy flora plant design prompt",
    secondary_keywords: ["alien plant ai concept", "bioluminescent flora prompt"],
    lsi_keywords: ["bioluminescent glow", "organic shapes"],
    meta_title: "Fantasy Flora & Plants Design Prompt | Midjourney v6 Verified",
    meta_description: "Design mystical bioluminescent plants for fantasy games. Verified Midjourney v6 prompt for extraterrestrial flora."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-asset-flora-019-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Bioluminescent fantasy plant design",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "flora-019",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for organic lighting fidelity." }
};

export const dungeonPropsPrompt: PromptCard = {
  id: "game-asset-dungeon-020",
  slug: "dungeon-environment-prop-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Dungeon Environment Props",
  result_first_title: "Modular dungeon environment props with weathered textures and cinematic lighting",
  short_description: "Essential building blocks for dungeon levels, including torches, barrels, skeletons, and stone altars.",
  emotional_hook: "이 프롬프트는 차가운 지하 미궁의 습기와 어둠을 뚫고 나오는, 서늘하고 묵직한 공간의 질감을 설계한다.",
  category: "game_asset",
  vertical: "environment_asset",
  use_cases: ["level_design", "dungeon_crawler", "game_assets", "concept_art"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "dungeon environment prop, [prop_type], centered, [material_condition], cinematic moody lighting, deep shadows, plain dark background, hyper-detailed 3D asset concept --ar 1:1 --v 6 --s 150",
  negative_prompt: "modern, clean, bright sunlight, low quality, blurry, human figure, complex background, cartoonish, sci-fi",
  aspect_ratio_tags: ["1:1", "item_design", "dungeon"],
  variables: [
    {
      name: "prop_type",
      placeholder: "[prop_type]",
      default_value: "iron wall torch with flickering flame",
      recommended_values: ["rotting wooden barrels and crates", "ancient stone sacrificial altar", "piles of bleached human bones", "heavy rusted dungeon door with iron bars"],
      variable_behavior_note: "소품 종류를 바꾸면 던전의 분위기와 플레이어에게 주는 위협 수준이 시각화된다."
    },
    {
      name: "material_condition",
      placeholder: "[material_condition]",
      default_value: "covered in damp moss and cobwebs",
      recommended_values: ["stained with dried blood", "ancient and crumbling stone", "charred and burnt wood", "frozen with thick icicles"],
      variable_behavior_note: "재질 상태를 바꾸면 해당 던전에서 일어났던 사건이나 환경의 극한 정도가 시각화된다."
    }
  ],
  why_this_works: [
    "cinematic moody lighting은 던전의 필수 요소인 '어둠'과의 대비를 통해 오브젝트의 질감을 드라마틱하게 강조한다.",
    "centered composition은 레벨 디자이너나 3D 아티스트가 개별 에셋의 형태를 파악하기 가장 좋은 구도다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "이끼와 돌의 질감, 불꽃의 광원 효과가 매우 사실적임." }],
  comparison_notes: "엘든 링이나 다크 소울의 배경을 채우는 소품들처럼 무겁고 진지한 분위기를 연출한다.",
  variations: [{ label: "Glowing", prompt_delta: "Add glowing magical runes or radioactive slime to the prop", use_case: "High-fantasy/Mutated dungeons", pre_generated_asset_id: null }],
  common_failure_modes: ["소품이 너무 깨끗해 보이는 경우 → 'weathered, grime, heavy aging' 키워드 추가"],
  seo: {
    primary_keyword: "dungeon environment prop prompt",
    secondary_keywords: ["game level asset ai", "rpg dungeon prop design"],
    lsi_keywords: ["weathered textures", "cinematic lighting"],
    meta_title: "Dungeon Environment Props Design Prompt | Midjourney v6 Verified",
    meta_description: "Design modular dungeon props with weathered textures. Verified Midjourney v6 prompt for level design and RPGs."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-asset-dungeon-020-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Detailed dungeon wall torch prop design",
    width: 1024,
    height: 1024,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "dungeon-020",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for material aging effects." }
};

export const monsterConceptPrompt: PromptCard = {
  id: "game-asset-monster-020",
  slug: "monster-enemy-concept-art-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Monster & Enemy Concept Art",
  result_first_title: "Terrifying high-fantasy creature concept art with detailed anatomy and biological traits",
  short_description: "Professional concept art for game enemies and bosses, focusing on anatomical plausibility and character personality.",
  emotional_hook: "이 프롬프트는 단순한 괴물이 아닌, 그 세계관의 생태계 속에서 살아 숨 쉬는 공포의 실체를 시각화한다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["enemy_design", "boss_fight_concept", "bestiary_illustration", "character_modeling_ref"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "monster concept art, [monster_type], detailed biological anatomy, distinct texture of skin and scales, menacing pose, front and side view profile, cinematic lighting, concept art sheet style, white background, high detail --ar 16:9 --v 6 --s 350",
  negative_prompt: "cluttered background, human figure (unless hybrid), low detail, blurry features, cute, friendly, cartoonish style",
  aspect_ratio_tags: ["16:9", "concept_art", "character_design"],
  variables: [
    {
      name: "monster_type",
      placeholder: "[monster_type]",
      default_value: "abyssal deep-sea leviathan with bioluminescent lures",
      recommended_values: ["corrupted forest guardian with wooden armor", "undead necromancer king with spectral wings", "mechanical spider drone with laser sensors", "elemental lava golem with cooling crust"],
      variable_behavior_note: "괴물의 타입을 바꾸면 골격 구조, 외피 질감, 그리고 고유의 능력(빛, 불, 기계 등)이 시각적으로 구현되지만, 전문적인 컨셉 아트 시트 스타일은 유지된다."
    }
  ],
  why_this_works: [
    "concept art sheet style은 모델러가 작업하기 용이하도록 정면과 측면의 해부학적 구조를 명확하게 보여준다.",
    "biological anatomy 키워드는 상상 속의 존재가 실제로 존재할 수 있을 것 같은 '개연성'을 부여한다."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "생물학적 디테일(피부 질감, 근육 결) 표현력이 매우 강력함." }],
  comparison_notes: "몬스터 헌터나 블러드본 수준의 깊이 있는 크리처 디자인 영감을 제공한다.",
  variations: [{ label: "Action Pose", prompt_delta: "Replace profile view with dynamic attacking pose and environment background", use_case: "Promotional art", pre_generated_asset_id: null }],
  common_failure_modes: ["괴물이 너무 추상적으로 나오는 경우 → 'skeletal structure, muscle definition' 키워드 보강"],
  seo: {
    primary_keyword: "monster concept art prompt",
    secondary_keywords: ["enemy design ai", "creature concept art prompt"],
    lsi_keywords: ["anatomical detail", "concept art sheet"],
    meta_title: "Monster & Enemy Concept Art Prompt | Midjourney v6 Verified",
    meta_description: "Create professional monster and enemy concepts for games. Verified Midjourney v6 prompt for creature design."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-asset-monster-020-hero.png",
    thumbnail: null,
    variations: [],
    alt_text: "Detailed monster concept art with anatomical study",
    width: 1600,
    height: 900,
    format: "png",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "monster-020",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for creature anatomy consistency." }
};

export const gameAssetPrompts: PromptCard[] = [
  tilesetPrompt,
  rpgIconPrompt,
  cyberpunkCityPrompt,
  spaceInteriorPrompt,
  lowPolyNaturePrompt,
  retroArcadeUiPrompt,
  magicVfxPrompt,
  cyberpunkAssassinPrompt,
  medievalWizardPrompt,
  mechWarriorPrompt,
  darkFantasyRoguePrompt,
  steampunkExplorerPrompt,
  treasureChestsPrompt,
  magicPotionsPrompt,
  ancientArtifactsPrompt,
  medievalWeaponsPrompt,
  sciFiConsumablesPrompt,
  fantasyFloraPrompt,
  dungeonPropsPrompt,
  monsterConceptPrompt
];
