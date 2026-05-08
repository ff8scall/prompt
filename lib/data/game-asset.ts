import { PromptCard } from '../types';

export const tilesetPrompt: PromptCard = {
  id: "game-isometric-tileset-001",
  slug: "isometric-fantasy-village-tileset-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Isometric Fantasy Village Tileset Prompt",
  title_ko: "아이소메트릭 판타지 마을 타일셋 프롬프트",
  result_first_title: "Detailed isometric tiles for fantasy RPG game environments with consistent lighting",
  result_first_title_ko: "일관된 조명을 가진 판타지 RPG 게임 환경을 위한 상세한 아이소메트릭 타일",
  short_description: "Complete tileset for building isometric fantasy villages, dungeons, and environments in indie games and RPG Maker projects.",
  short_description_ko: "인디 게임 및 RPG Maker 프로젝트에서 아이소메트릭 판타지 마을, 던전, 환경을 구축하기 위한 전체 타일셋.",
  emotional_hook: "This prompt captures the cozy charm of hand-carved pixel art villages and the thrill of a new adventure.",
  emotional_hook_ko: "이 프롬프트는 직접 깎아 만든 듯한 픽셀 아트 마을의 아늑한 매력과 새로운 모험의 설렘을 담아냅니다.",
  category: "game_asset",
  vertical: "tileset",
  use_cases: ["indie_game_dev", "rpg_maker", "game_prototype", "steam_capsule_art", "itch_io_thumbnail"],
  use_cases_ko: ["인디 게임 개발", "RPG Maker", "게임 프로토타입", "스팀 캡슐 아트", "Itch.io 썸네일"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "isometric [environment_type], 2.5D pixel art game tileset, hand-painted texture style, consistent top-down 45-degree angle, modular building pieces, [biome_features], soft shadows, game-ready asset, clean edges for tiling --ar 1:1 --v 6 --s 200 --tile",
  negative_prompt: "photorealistic, 3D render, perspective distortion, inconsistent shadows, human figures, blurry edges, photographic background, depth of field",
  aspect_ratio_tags: ["1:1", "sprite_sheet", "game_asset", "isometric"],
  variables: [
    {
      name: "environment_type",
      name_ko: "환경 유형",
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
      variable_behavior_note: "Changing the environment type modifies the structures and natural elements, but maintains the isometric 2.5D perspective, tile size, pixel art style, and lighting angle for seamless integration.",
      variable_behavior_note_ko: "환경 유형을 변경하면 구조물과 자연 요소가 수정되지만, 완벽한 통합을 위해 아이소메트릭 2.5D 투영법, 타일 크기, 픽셀 아트 스타일, 조명 각도는 유지됩니다."
    },
    {
      name: "biome_features",
      name_ko: "생태계 특징",
      placeholder: "[biome_features]",
      default_value: "autumn foliage and hay bales",
      recommended_values: [
        "winter snow and frozen ponds",
        "spring flowers and green grass",
        "summer wheat fields",
        "nighttime with lanterns",
        "rainy weather with puddles"
      ],
      variable_behavior_note: "Changing the season or time of day modifies the color palette and atmosphere while keeping the tile structure identical.",
      variable_behavior_note_ko: "계절이나 시간대를 변경하면 타일 구조를 동일하게 유지하면서 색상 팔레트와 분위기가 수정됩니다."
    }
  ],
  why_this_works: [
    "The 'isometric' keyword generates a 2.5D perspective (45-degree angle) compatible with Unity, Godot, and RPG Maker.",
    "The '--tile' parameter enables Midjourney to create seamless tiling patterns for continuous environment building.",
    "Hand-painted texture style provides a warm, indie game feel, distinct from mechanical 3D rendering.",
    "Consistent top-down 45-degree angle ensures perspective continuity across multiple prompt executions.",
    "Eliminating 'perspective distortion' in the negative prompt prevents isometric warping for clean game assets.",
    "Clean edges for tiling ensure boundary integrity when placing tiles in game engines."
  ],
  why_this_works_ko: [
    "'isometric' 키워드는 Unity, Godot, RPG Maker와 호환되는 2.5D 투영법(45도 각도)을 생성합니다.",
    "'--tile' 파라미터는 미드저니가 연속적인 환경 구축을 위해 이음새 없는 타일링 패턴을 만들 수 있게 합니다.",
    "수작업 텍스처 스타일은 기계적인 3D 렌더링과 차별화된 따뜻한 인디 게임 느낌을 제공합니다.",
    "일관된 탑다운 45도 각도는 여러 프롬프트 실행 시 투영법의 연속성을 보장합니다.",
    "부정 프롬프트에서 'perspective distortion'을 제거하여 깔끔한 게임 에셋을 위한 아이소메트릭 왜곡을 방지합니다.",
    "타일링을 위한 깨끗한 가장자리는 게임 엔진에서 타일을 배치할 때 경계 무결성을 보장합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Tile consistency is improved in v6, but for generating multiple tiles in the same session, fixing the --seed or using a reference image is recommended. A stylize range of 150-250 is ideal for game assets.",
      note_ko: "v6에서 타일 일관성이 향상되었지만, 동일한 세션에서 여러 타일을 생성할 때는 --seed를 고정하거나 참조 이미지를 사용하는 것이 좋습니다. 게임 에셋에는 150-250 사이의 stylize 범위가 이상적입니다."
    },
    {
      model: "dall-e-3",
      version: "current",
      note: "Weak at generating tiling patterns. While suitable for single concept art, it lacks the technical finish for actual game tilesets. Midjourney is strongly recommended.",
      note_ko: "타일링 패턴 생성에 취약합니다. 단일 컨셉 아트에는 적합하지만 실제 게임 타일셋을 위한 기술적 마감이 부족합니다. 미드저니를 강력히 추천합니다."
    },
    {
      model: "stable_diffusion_xl",
      version: "xl",
      note: "Using isometric LoRAs or ControlNet provides more accurate perspective and tile consistency. Consistent styles can be maintained through iterative img2img generation.",
      note_ko: "Isometric LoRA나 ControlNet을 사용하면 더 정확한 투영법과 타일 일관성을 제공합니다. 반복적인 img2img 생성을 통해 일관된 스타일을 유지할 수 있습니다."
    }
  ],
  comparison_notes: "Midjourney v6 offers the highest artistic quality and actual tiling via the --tile option. Stable Diffusion provides high precision through ControlNet, but Midjourney excels in artistic tone. DALL-E 3 is unsuitable for tileset generation. Highly recommended for indie game developers.",
  comparison_notes_ko: "미드저니 v6는 최고의 예술적 품질과 --tile 옵션을 통한 실제 타일링을 제공합니다. 스테이블 디퓨전은 ControlNet을 통해 높은 정밀도를 제공하지만, 미드저니는 예술적 톤에서 뛰어납니다. DALL-E 3는 타일셋 생성에 적합하지 않습니다. 인디 게임 개발자에게 강력히 추천합니다.",
  variations: [
    {
      label: "Winter/Snow biome",
      label_ko: "겨울/눈 생태계",
      prompt_delta: "Replace biome with winter snow, frozen ponds, snow-covered roofs, cool blue lighting",
      pre_generated_asset_id: "game_tileset_winter_001",
      use_case: "Winter game events, ice dungeons, snow villages",
      use_case_ko: "겨울 게임 이벤트, 아이스 던전, 눈 내린 마을"
    },
    {
      label: "Desert/Oasis theme",
      label_ko: "사막/오아시스 테마",
      prompt_delta: "Replace with desert sand, palm trees, oasis water, warm orange lighting, adobe buildings",
      pre_generated_asset_id: "game_tileset_desert_001",
      use_case: "Desert biomes, Arabian-themed games",
      use_case_ko: "사막 생태계, 아라비안 테마 게임"
    },
    {
      label: "Interior/Dungeon tiles",
      label_ko: "내부/던전 타일",
      prompt_delta: "Focus on indoor spaces, stone walls, wooden doors, torch lighting, treasure chests",
      pre_generated_asset_id: "game_tileset_interior_001",
      use_case: "RPG dungeons, interior scenes",
      use_case_ko: "RPG 던전, 인테리어 장면"
    }
  ],
  common_failure_modes: [
    "Inconsistent perspective: Fix the --seed or use reference images in the same session.",
    "Broken tile boundaries: Reinforce 'clean edges for tiling' or check the --tile parameter.",
    "Overly realistic 3D feel: Lower the stylize value and emphasize 'pixel art' and 'hand-painted' keywords.",
    "Background transparency: Post-process with background removal tools in RPG Maker or Unity."
  ],
  common_failure_modes_ko: [
    "일관되지 않은 투영법: --seed를 고정하거나 동일한 세션에서 참조 이미지를 사용하세요.",
    "끊어진 타일 경계: 'clean edges for tiling'을 강조하거나 --tile 파라미터를 확인하세요.",
    "지나치게 사실적인 3D 느낌: stylize 값을 낮추고 'pixel art', 'hand-painted' 키워드를 강조하세요.",
    "배경 투명도: RPG Maker나 Unity에서 배경 제거 도구를 사용하여 후처리하세요."
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
    meta_title_ko: "아이소메트릭 판타지 타일셋 프롬프트 | 미드저니 v6 게임 에셋",
    meta_description: "Generate consistent isometric game tilesets for RPGs with verified Midjourney v6 prompt. Includes biome variations, model tips, and tiling guide.",
    meta_description_ko: "검증된 미드저니 v6 프롬프트로 RPG용 일관된 아이소메트릭 게임 타일셋을 생성하세요. 생태계 변형, 모델 팁, 타일링 가이드가 포함되어 있습니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-isometric-tileset-001-hero.webp",
    thumbnail: "/images/prompts/game-isometric-tileset-001-thumb.webp",
    variations: [
      "/images/prompts/game-tileset-winter-001.webp",
      "/images/prompts/game-tileset-desert-001.webp"
    ],
    alt_text: "Isometric fantasy village tileset with timber houses, cobblestone paths, and autumn foliage in pixel art style",
    alt_text_ko: "목조 주택, 자갈길, 단풍이 픽셀 아트 스타일로 표현된 아이소메트릭 판타지 마을 타일셋",
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
  title_ko: "RPG 아이템/무기 아이콘 프롬프트",
  result_first_title: "Detailed RPG item icons for game UI inventory systems",
  result_first_title_ko: "게임 UI 인벤토리 시스템을 위한 상세한 RPG 아이템 아이콘",
  short_description: "Fantasy RPG item icons with transparent background ready for Unity, Godot, and game engines.",
  short_description_ko: "Unity, Godot 및 게임 엔진에 즉시 사용할 수 있는 투명 배경의 판타지 RPG 아이템 아이콘.",
  emotional_hook: "This prompt crafts the treasures shining inside an adventurer's bag in a vibrant fantasy world.",
  emotional_hook_ko: "이 프롬프트는 활기찬 판타지 세계 속 모험가의 가방 안에서 빛나는 보물들을 만들어냅니다.",
  category: "game_asset",
  vertical: "icon",
  use_cases: ["rpg_inventory", "game_ui", "loot_system", "mobile_game"],
  use_cases_ko: ["RPG 인벤토리", "게임 UI", "전리품 시스템", "모바일 게임"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[item_type] game icon, RPG item, centered composition, plain background, detailed texture, game UI asset, fantasy style, high quality --ar 1:1 --v 6 --s 200",
  negative_prompt: "photorealistic, human figure, complex background, 3D render, blurry, low detail",
  aspect_ratio_tags: ["1:1", "icon", "game_asset"],
  variables: [
    {
      name: "item_type",
      name_ko: "아이템 유형",
      placeholder: "[item_type]",
      default_value: "magic sword",
      recommended_values: ["health potion", "legendary armor", "gold coins", "ancient scroll", "crystal gem"],
      variable_behavior_note: "Changing the item type modifies the icon content while maintaining center composition, game UI style, and background treatment.",
      variable_behavior_note_ko: "아이템 유형을 변경하면 중앙 집중식 구성, 게임 UI 스타일 및 배경 처리를 유지하면서 아이콘 콘텐츠가 수정됩니다."
    }
  ],
  why_this_works: [
    "Centered composition ensures visual consistency when placed in inventory grids.",
    "Plain background simplifies usage as icons within game engines.",
    "Detailed texture visually communicates equipment grade and rarity."
  ],
  why_this_works_ko: [
    "중앙 집중식 구성은 인벤토리 그리드에 배치할 때 시각적 일관성을 보장합니다.",
    "단순한 배경은 게임 엔진 내에서 아이콘으로 사용하기 쉽게 해줍니다.",
    "상세한 텍스처는 장비 등급과 희귀도를 시각적으로 전달합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Icon centering is stable at a 1:1 ratio. Background removal might require post-processing.",
      note_ko: "1:1 비율에서 아이콘 중앙 배치가 안정적입니다. 배경 제거를 위해 후처리가 필요할 수 있습니다."
    }
  ],
  comparison_notes: "Midjourney excels in the artistic quality of icons. Post-processing is recommended for background transparency.",
  comparison_notes_ko: "미드저니는 아이콘의 예술적 품질에서 뛰어납니다. 배경 투명도를 위해 후처리를 권장합니다.",
  variations: [
    {
      label: "Common",
      label_ko: "일반",
      prompt_delta: "Simple design, basic item, worn texture",
      use_case: "Common items",
      use_case_ko: "일반 아이템",
      pre_generated_asset_id: null
    },
    {
      label: "Legendary",
      label_ko: "전설",
      prompt_delta: "Glowing effects, ornate design, magical aura",
      use_case: "Legendary items",
      use_case_ko: "전설 아이템",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Background not transparent -> requires removal in Unity/Godot"],
  common_failure_modes_ko: ["배경이 투명하지 않음 -> Unity/Godot에서 제거가 필요함"],
  seo: {
    primary_keyword: "rpg item icon prompt",
    secondary_keywords: ["game icon ai", "rpg inventory icons"],
    lsi_keywords: ["fantasy items", "game assets", "inventory icons"],
    meta_title: "RPG Item Icon Prompt | Midjourney v6 Game Asset",
    meta_title_ko: "RPG 아이템 아이콘 프롬프트 | 미드저니 v6 게임 에셋",
    meta_description: "Generate fantasy RPG item icons for game UIs. Verified prompt for Unity, Godot, and mobile games.",
    meta_description_ko: "게임 UI를 위한 판타지 RPG 아이템 아이콘을 생성하세요. Unity, Godot 및 모바일 게임을 위한 검증된 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-rpg-icon-003-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "RPG item icon with fantasy design",
    alt_text_ko: "판타지 디자인의 RPG 아이템 아이콘",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "사이버펑크 도시 전경 배경",
  result_first_title: "Cinematic cyberpunk city with neon lights and rainy streets for game backgrounds",
  result_first_title_ko: "게임 배경을 위한 네온 사인과 비 내리는 거리가 포함된 시네마틱 사이버펑크 도시",
  short_description: "High-fidelity environmental art for cyberpunk RPGs and visual novels, focusing on atmosphere and lighting.",
  short_description_ko: "분위기와 조명에 중점을 둔 사이버펑크 RPG 및 비주얼 노벨용 고품질 환경 아트.",
  emotional_hook: "This prompt captures the solitary noir of a future city where cold raindrops and hot neon signs intersect.",
  emotional_hook_ko: "이 프롬프트는 차가운 빗방울과 뜨거운 네온 사인이 교차하는 미래 도시의 고독한 느와르를 포착합니다.",
  category: "game_asset",
  vertical: "background",
  use_cases: ["visual_novel", "rpg_background", "loading_screen", "marketing_art"],
  use_cases_ko: ["비주얼 노벨", "RPG 배경", "로딩 화면", "마케팅 아트"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "cyberpunk city background, [time_and_weather], neon signage in Kanji and English, wet asphalt with reflections, flying vehicles in distance, blade runner aesthetic, cinematic lighting, ultra-detailed --ar 16:9 --v 6 --s 300",
  negative_prompt: "bright daylight, peaceful atmosphere, low detail, people in foreground, blurry, cartoonish",
  aspect_ratio_tags: ["16:9", "background", "cyberpunk"],
  variables: [
    {
      name: "time_and_weather",
      name_ko: "시간 및 날씨",
      placeholder: "[time_and_weather]",
      default_value: "midnight with heavy rain and fog",
      recommended_values: ["sunset with orange smog", "early morning with neon reflections", "stormy night with lightning", "dusk with purple haze"],
      variable_behavior_note: "Changing the time and weather dramatically shifts the city's color and mood, but maintains the high-density layout and neon aesthetic unique to cyberpunk.",
      variable_behavior_note_ko: "시간과 날씨를 변경하면 도시의 색상과 분위기가 극적으로 바뀌지만, 사이버펑크 특유의 고밀도 레이아웃과 네온 에스테틱은 유지됩니다."
    }
  ],
  why_this_works: [
    "Blade Runner aesthetic provides a visual benchmark for the cyberpunk genre to accurately implement the intended atmosphere.",
    "Wet asphalt reflections amplify lighting effects to maximize visual depth and brilliance."
  ],
  why_this_works_ko: [
    "블레이드 러너(Blade Runner) 에스테틱은 사이버펑크 장르의 시각적 기준점을 제공하여 의도한 분위기를 정확하게 구현합니다.",
    "젖은 아스팔트 반사는 조명 효과를 증폭시켜 시각적 깊이와 화려함을 극대화합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Highly sophisticated representation of city details and light reflections.",
      note_ko: "도시의 세부 사항과 빛 반사에 대한 매우 정교한 표현을 제공합니다."
    }
  ],
  comparison_notes: "Guarantees top-tier quality in visual density and cinematic lighting for environment art.",
  comparison_notes_ko: "환경 아트를 위한 시각적 밀도와 시네마틱 조명에서 최상위 품질을 보장합니다.",
  variations: [
    {
      label: "Slum Area",
      label_ko: "슬럼가",
      prompt_delta: "Replace skyscrapers with crowded slums, exposed wires, and more grime",
      use_case: "Underground settings",
      use_case_ko: "지하 설정",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Screen too dark to distinguish shapes -> reinforce with 'ambient neon glow' keywords."],
  common_failure_modes_ko: ["화면이 너무 어두워 형태를 구분하기 어려움 -> 'ambient neon glow' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "cyberpunk city background prompt",
    secondary_keywords: ["game environment ai", "neon city art prompt"],
    lsi_keywords: ["cinematic lighting", "rainy street reflections"],
    meta_title: "Cyberpunk Cityscape Background Prompt | Midjourney v6 Verified",
    meta_title_ko: "사이버펑크 도시 전경 배경 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate high-fidelity cyberpunk backgrounds with neon and rain. Verified Midjourney v6 prompt for RPGs and visual novels.",
    meta_description_ko: "네온과 비가 어우러진 고품질 사이버펑크 배경을 생성하세요. RPG 및 비주얼 노벨을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-cyberpunk-bg-004-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Cinematic cyberpunk cityscape with neon",
    alt_text_ko: "네온 사인이 빛나는 시네마틱 사이버펑크 도시 전경",
    width: 1600,
    height: 900,
    format: "webp",
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
  title_ko: "모듈형 우주 정거장 내부",
  result_first_title: "Sci-fi space station hallway with modular panels and blue emissive lighting",
  result_first_title_ko: "모듈형 패널과 파란색 발광 조명이 포함된 SF 우주 정거장 복도",
  short_description: "Hard sci-fi interior assets for first-person shooters and space exploration games.",
  short_description_ko: "1인칭 슈팅 게임 및 우주 탐사 게임을 위한 하드 SF 인테리어 에셋.",
  emotional_hook: "This prompt captures the cloistered awe where the cold metallicity of outer space meets human technical sophistication.",
  emotional_hook_ko: "이 프롬프트는 외계의 차가운 금속성과 인류의 기술적 정교함이 만나는 폐쇄적인 경외감을 포착합니다.",
  category: "game_asset",
  vertical: "interior",
  use_cases: ["fps_level_design", "sci_fi_rpg", "environment_mockup", "concept_art"],
  use_cases_ko: ["FPS 레벨 디자인", "SF RPG", "환경 목업", "컨셉 아트"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "sci-fi space station interior, [room_type], modular wall panels, blue emissive light strips, metallic textures, hard-surface design, cinematic perspective, clean minimalist sci-fi aesthetic --ar 16:9 --v 6 --s 250",
  negative_prompt: "organic shapes, dirty environment, retro-future, cluttered, human figures, low tech, steam-punk",
  aspect_ratio_tags: ["16:9", "interior", "sci_fi"],
  variables: [
    {
      name: "room_type",
      name_ko: "방 유형",
      placeholder: "[room_type]",
      default_value: "main corridor with view of the galaxy",
      recommended_values: ["high-tech medical bay", "spaceship cockpit", "engine room with glowing reactors", "crew quarters with minimal beds"],
      variable_behavior_note: "Changing the room type modifies furniture and equipment layout, but keeps the overall hard-surface design tone consistent.",
      variable_behavior_note_ko: "방 유형을 변경하면 가구와 장비 배치가 수정되지만, 전반적인 하드 서페이스(Hard-surface) 디자인 톤은 일관되게 유지됩니다."
    }
  ],
  why_this_works: [
    "Hard-surface design generates mechanical and precise surface textures unique to the sci-fi genre.",
    "Blue emissive light strips add futuristic points to the screen for visual depth."
  ],
  why_this_works_ko: [
    "하드 서페이스 디자인은 SF 장르 특유의 기계적이고 정밀한 표면 질감을 생성합니다.",
    "파란색 발광(Emissive) 스트립 조명은 시각적 깊이를 위해 화면에 미래 지향적인 포인트를 추가합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Excellent metal texture and lighting clarity.",
      note_ko: "금속 질감과 조명의 명확성이 매우 뛰어납니다."
    }
  ],
  comparison_notes: "Provides the most sophisticated hard-surface quality for concept art during level design phases.",
  comparison_notes_ko: "레벨 디자인 단계에서 컨셉 아트를 위한 가장 정교한 하드 서페이스 품질을 제공합니다.",
  variations: [
    {
      label: "Abandoned/Broken",
      label_ko: "버려진/파손된",
      prompt_delta: "Add sparks, broken panels, and red emergency lighting",
      use_case: "Horror sci-fi",
      use_case_ko: "호러 SF",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Lighting too flat -> add 'dynamic light and shadow' keywords."],
  common_failure_modes_ko: ["조명이 너무 평면적임 -> 'dynamic light and shadow' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "space station interior prompt",
    secondary_keywords: ["sci-fi environment ai", "spaceship concept art"],
    lsi_keywords: ["modular panels", "hard surface design"],
    meta_title: "Modular Space Station Interior Prompt | Midjourney v6 Verified",
    meta_title_ko: "모듈형 우주 정거장 내부 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate hard sci-fi interiors for space games. Verified Midjourney v6 prompt for level design and concept art.",
    meta_description_ko: "우주 게임을 위한 하드 SF 인테리어를 생성하세요. 레벨 디자인 및 컨셉 아트를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-space-interior-005-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Sci-fi space station modular interior",
    alt_text_ko: "SF 우주 정거장 모듈형 인테리어",
    width: 1600,
    height: 900,
    format: "webp",
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
  title_ko: "로우 폴리 자연 에셋 팩",
  result_first_title: "Stylized low poly forest environment with faceted terrain and colorful trees",
  result_first_title_ko: "단면 처리된 지형과 화려한 나무가 포함된 스타일라이즈드 로우 폴리 숲 환경",
  short_description: "Modular low poly nature assets for 3D adventure games and stylized mobile projects.",
  short_description_ko: "3D 어드벤처 게임 및 스타일라이즈드 모바일 프로젝트를 위한 모듈형 로우 폴리 자연 에셋.",
  emotional_hook: "This prompt visualizes peaceful fragments of nature hidden within the aesthetics of simplicity.",
  emotional_hook_ko: "이 프롬프트는 단순함의 미학 속에 숨겨진 평화로운 자연의 파편들을 시각화합니다.",
  category: "game_asset",
  vertical: "environment_pack",
  use_cases: ["3d_adventure_game", "mobile_game_asset", "stylized_environment", "unity_asset_store"],
  use_cases_ko: ["3D 어드벤처 게임", "모바일 게임 에셋", "스타일라이즈드 환경", "유니티 에셋 스토어"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "low poly [nature_element], flat shaded, faceted geometry, vibrant colors, stylized 3D art, isometric view, clean edges, game-ready asset, minimalist aesthetic --ar 1:1 --v 6 --s 150",
  negative_prompt: "photorealistic, high poly, smooth surfaces, blurry, organic textures, depth of field, cluttered background",
  aspect_ratio_tags: ["1:1", "stylized", "3d_asset"],
  variables: [
    {
      name: "nature_element",
      name_ko: "자연 요소",
      placeholder: "[nature_element]",
      default_value: "modular pine trees and rocky boulders",
      recommended_values: ["autumn forest with orange bushes", "snowy mountain peaks", "tropical island with palm trees", "crystal pond with water lilies"],
      variable_behavior_note: "Changing the nature element modifies terrain and vegetation, but maintains the angular geometry (faceted geometry) and flat shading style unique to low poly.",
      variable_behavior_note_ko: "자연 요소를 변경하면 지형과 식생이 수정되지만, 로우 폴리 특유의 각진 기하학적 구조(Faceted geometry)와 플랫 셰이딩 스타일은 유지됩니다."
    }
  ],
  why_this_works: [
    "Flat shaded and faceted geometry induce clear surface division, the core of low poly art.",
    "Vibrant colors breathe visual energy required in stylish games."
  ],
  why_this_works_ko: [
    "플랫 셰이딩(Flat shaded)과 단면 처리된 기하학적 구조는 로우 폴리 아트의 핵심인 명확한 표면 분할을 유도합니다.",
    "활기찬 색상은 스타일리시한 게임에 필요한 시각적 에너지를 불어넣습니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Very stable expression of simplified geometric forms.",
      note_ko: "단순화된 기하학적 형태에 대한 매우 안정적인 표현을 제공합니다."
    }
  ],
  comparison_notes: "Offers the highest practicality as a concept art and texture source for 3D game engines.",
  comparison_notes_ko: "3D 게임 엔진을 위한 컨셉 아트 및 텍스처 소스로서 최고의 실용성을 제공합니다.",
  variations: [
    {
      label: "Desert Oasis",
      label_ko: "사막 오아시스",
      prompt_delta: "Replace pine trees with cacti and sand dunes",
      use_case: "Desert levels",
      use_case_ko: "사막 레벨",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Surfaces too smooth -> reinforce with 'sharp edges, low polygon count' keywords."],
  common_failure_modes_ko: ["표면이 너무 매끄러움 -> 'sharp edges, low polygon count' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "low poly nature prompt",
    secondary_keywords: ["stylized 3d asset ai", "low poly environment prompt"],
    lsi_keywords: ["faceted geometry", "flat shaded"],
    meta_title: "Low Poly Nature Asset Pack Prompt | Midjourney v6 Verified",
    meta_title_ko: "로우 폴리 자연 에셋 팩 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate stylish low poly nature assets for 3D games. Verified Midjourney v6 prompt for adventure and mobile projects.",
    meta_description_ko: "3D 게임을 위한 스타일리시한 로우 폴리 자연 에셋을 생성하세요. 어드벤처 및 모바일 프로젝트를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-low-poly-nature-006-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Stylized low poly nature environment",
    alt_text_ko: "스타일라이즈드 로우 폴리 자연 환경",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "레트로 아케이드 게임 UI",
  result_first_title: "16-bit retro arcade interface with neon colors and pixel art typography",
  result_first_title_ko: "네온 컬러와 픽셀 아트 타이포그래피가 포함된 16비트 레트로 아케이드 인터페이스",
  short_description: "Vibrant, nostalgic user interface for arcade-style games and retro-themed projects.",
  short_description_ko: "아케이드 스타일 게임 및 레트로 테마 프로젝트를 위한 활기차고 향수 어린 사용자 인터페이스.",
  emotional_hook: "This prompt modernizes the nostalgia of 80s arcades, filled with brilliant neon and electronic sounds.",
  emotional_hook_ko: "이 프롬프트는 화려한 네온과 전자음으로 가득했던 80년대 아케이드의 향수를 현대적으로 재해석합니다.",
  category: "game_asset",
  vertical: "ui_design",
  use_cases: ["arcade_game", "retro_rpg", "game_menu_mockup", "indie_game_ui"],
  use_cases_ko: ["아케이드 게임", "레트로 RPG", "게임 메뉴 목업", "인디 게임 UI"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "retro arcade game UI, [ui_screen_type], 16-bit pixel art style, neon pink and cyan color palette, CRT scanline effect, pixelated typography, glowing buttons, arcade cabinet aesthetic --ar 16:9 --v 6 --s 200",
  negative_prompt: "photorealistic, modern flat design, 3D render, high poly, blurry, smooth gradients",
  aspect_ratio_tags: ["16:9", "retro_ui", "pixel_art"],
  variables: [
    {
      name: "ui_screen_type",
      name_ko: "UI 화면 유형",
      placeholder: "[ui_screen_type]",
      default_value: "character selection screen",
      recommended_values: ["high score leaderboard", "game over screen with insert coin", "level clear rewards", "settings menu with CRT sliders"],
      variable_behavior_note: "Changing the screen type modifies layout and text structure, but maintains the 16-bit pixel art mood and CRT effects consistently.",
      variable_behavior_note_ko: "화면 유형을 변경하면 레이아웃과 텍스트 구조가 수정되지만, 16비트 픽셀 아트 분위기와 CRT 효과는 일관되게 유지됩니다."
    }
  ],
  why_this_works: [
    "The CRT scanline effect replicates the texture of actual arcade monitors to enhance immersion.",
    "Neon pink and cyan are key colors of retrowave aesthetics, granting strong brand identity."
  ],
  why_this_works_ko: [
    "CRT 스캔라인 효과는 실제 아케이드 모니터의 질감을 재현하여 몰입감을 높입니다.",
    "네온 핑크와 시안은 레트로웨이브 에스테틱의 핵심 색상으로, 강력한 브랜드 아이덴티티를 부여합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional representation of block textures unique to pixel art.",
      note_ko: "픽셀 아트 특유의 블록 텍스처 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Creates an unrivaled atmosphere for retro-style game UI concept designs.",
  comparison_notes_ko: "레트로 스타일 게임 UI 컨셉 디자인을 위해 독보적인 분위기를 조성합니다.",
  variations: [
    {
      label: "Game Boy Style",
      label_ko: "게임보이 스타일",
      prompt_delta: "Replace colors with 4 shades of green, 8-bit handheld aesthetic",
      use_case: "Handheld retro games",
      use_case_ko: "휴대용 레트로 게임",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Pixels too blurry -> add 'sharp pixels, integer scaling' keywords."],
  common_failure_modes_ko: ["픽셀이 너무 흐릿함 -> 'sharp pixels, integer scaling' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "retro arcade ui prompt",
    secondary_keywords: ["pixel art game ui ai", "arcade menu prompt"],
    lsi_keywords: ["CRT scanlines", "16-bit aesthetic"],
    meta_title: "Retro Arcade Game UI Prompt | Midjourney v6 Verified",
    meta_title_ko: "레트로 아케이드 게임 UI 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design nostalgic 16-bit arcade interfaces with neon colors. Verified Midjourney v6 prompt for retro games.",
    meta_description_ko: "네온 컬러가 돋보이는 향수 어린 16비트 아케이드 인터페이스를 디자인하세요. 레트로 게임을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-retro-ui-007-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Retro 16-bit arcade game UI",
    alt_text_ko: "레트로 16비트 아케이드 게임 UI",
    width: 1600,
    height: 900,
    format: "webp",
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
  title_ko: "마법 주문 VFX 에셋",
  result_first_title: "Spectacular magic spell particle effects with glowing elements on black background",
  result_first_title_ko: "검은 배경 위에서 빛나는 요소들이 포함된 화려한 마법 주문 파티클 효과",
  short_description: "High-quality visual effects assets for magic spells, abilities, and combat in fantasy games.",
  short_description_ko: "판타지 게임의 마법 주문, 능력 및 전투를 위한 고품질 시각 효과 에셋.",
  emotional_hook: "This prompt creates an overwhelming visual thrill, where mysterious mana explodes to adorn the battlefield.",
  emotional_hook_ko: "이 프롬프트는 신비로운 마나가 폭발하여 전장을 장식하는 압도적인 시각적 전율을 선사합니다.",
  category: "game_asset",
  vertical: "vfx",
  use_cases: ["magic_effect", "combat_vfx", "spell_icon", "game_cinematic"],
  use_cases_ko: ["마법 효과", "전투 VFX", "주문 아이콘", "게임 시네마틱"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "[magic_type] spell effect, game VFX asset, magic circle, particle explosion, glowing energy trails, dark background, high contrast, cinematic particle system, ethereal atmosphere --ar 1:1 --v 6 --s 300",
  negative_prompt: "low contrast, blurry, human figure, complex background, cartoonish, low resolution",
  aspect_ratio_tags: ["1:1", "vfx", "magic"],
  variables: [
    {
      name: "magic_type",
      name_ko: "마법 유형",
      placeholder: "[magic_type]",
      default_value: "blue frost explosion with ice shards",
      recommended_values: ["golden holy light aura", "dark purple void portal", "green nature healing energy", "red fire phoenix burst"],
      variable_behavior_note: "Changing the magic type modifies colors and particle shapes according to properties, but maintains high-contrast effects on black backgrounds (for VFX extraction).",
      variable_behavior_note_ko: "마법 유형을 변경하면 속성에 따라 색상과 파티클 모양이 수정되지만, (VFX 추출을 위해) 검은색 배경의 고대비 효과는 유지됩니다."
    }
  ],
  why_this_works: [
    "Dark backgrounds enable easy VFX composition through blending modes (Additive/Screen) in game engines.",
    "Particle explosions are key visual elements that grant both brilliance and impact to the screen."
  ],
  why_this_works_ko: [
    "어두운 배경은 게임 엔진에서 블렌딩 모드(Additive/Screen)를 통해 쉬운 VFX 합성을 가능하게 합니다.",
    "파티클 폭발은 화면에 화려함과 타격감을 동시에 부여하는 핵심 시각 요소입니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Superb representation of energy flow and particle density.",
      note_ko: "에너지의 흐름과 파티클 밀도 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Guarantees top quality as a reference for creating in-game skill icons and VFX resources.",
  comparison_notes_ko: "게임 내 스킬 아이콘 및 VFX 리소스 제작을 위한 참고 자료로서 최상의 품질을 보장합니다.",
  variations: [
    {
      label: "Simple Icon",
      label_ko: "심플 아이콘",
      prompt_delta: "Focus on single centered symbol, less particles, more graphic",
      use_case: "Spell icons",
      use_case_ko: "주문 아이콘",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Background too bright -> emphasize 'pure black background' keywords."],
  common_failure_modes_ko: ["배경이 너무 밝음 -> 'pure black background' 키워드를 강조하세요."],
  seo: {
    primary_keyword: "magic spell vfx prompt",
    secondary_keywords: ["game particle effect ai", "fantasy magic prompt"],
    lsi_keywords: ["energy trails", "particle explosion"],
    meta_title: "Magic Spell VFX Asset Prompt | Midjourney v6 Verified",
    meta_title_ko: "마법 주문 VFX 에셋 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Generate spectacular magic effects for fantasy games. Verified Midjourney v6 prompt for combat VFX and spell icons.",
    meta_description_ko: "판타지 게임을 위한 화려한 마법 효과를 생성하세요. 전투 VFX 및 주문 아이콘을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-magic-vfx-008-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Spectacular magic spell VFX energy",
    alt_text_ko: "화려한 마법 주문 VFX 에너지",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "사이버펑크 암살자 컨셉 아트",
  result_first_title: "High-detail cyberpunk assassin character sheet with tactical gear and neon accents",
  result_first_title_ko: "전술 장비와 네온 포인트가 포함된 고해상도 사이버펑크 암살자 캐릭터 시트",
  short_description: "A professional character design for futuristic games, featuring modular tactical armor, hidden blades, and a glowing visor.",
  short_description_ko: "모듈형 전술 아머, 히든 블레이드, 빛나는 바이저를 특징으로 하는 미래형 게임을 위한 전문 캐릭터 디자인.",
  emotional_hook: "This prompt captures the future's tension, where cold metal and hot neon intersect, within the character's silhouette.",
  emotional_hook_ko: "이 프롬프트는 캐릭터의 실루엣 안에 차가운 금속과 뜨거운 네온이 교차하는 미래의 긴장감을 포착합니다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["concept_art", "character_sheet", "game_design", "3d_modeling_ref"],
  use_cases_ko: ["컨셉 아트", "캐릭터 시트", "게임 디자인", "3D 모델링 참조"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "cyberpunk assassin character design, [character_role], full body shot, tactical tech-wear armor, [weapon_type], glowing neon cyan accents, futuristic urban background, cinematic lighting, sharp focus, hyper-detailed --ar 2:3 --v 6 --s 250",
  negative_prompt: "fantasy, medieval, messy, low quality, blurry, organic, soft lighting, simple clothes, historical",
  aspect_ratio_tags: ["2:3", "character_sheet", "cyberpunk"],
  variables: [
    {
      name: "character_role",
      name_ko: "캐릭터 역할",
      placeholder: "[character_role]",
      default_value: "high-tech stealth infiltrator",
      recommended_values: ["heavy armored street brawler", "cyber-enhanced hacker scout", "bio-synthetic elite guard", "wasteland scavenger mercenary"],
      variable_behavior_note: "Changing the character's role modifies the gear's volume, armor thickness, and the overall silhouette to match their expertise.",
      variable_behavior_note_ko: "캐릭터의 역할을 변경하면 전문성에 맞춰 장비의 부피, 장갑 두께 및 전체적인 실루엣이 수정됩니다."
    },
    {
      name: "weapon_type",
      name_ko: "무기 유형",
      placeholder: "[weapon_type]",
      default_value: "twin folding thermal blades",
      recommended_values: ["compact railgun sniper", "electromagnetic pulse grenades", "holographic wire trap", "high-frequency katana"],
      variable_behavior_note: "Changing the weapon type dynamically adjusts the character's posture and gear attachment points.",
      variable_behavior_note_ko: "무기 유형을 변경하면 캐릭터의 자세와 장비 장착 지점이 동적으로 조정됩니다."
    }
  ],
  why_this_works: [
    "The 'tactical tech-wear armor' keyword combines modern military gear with futuristic aesthetics to induce practical yet cool designs.",
    "Glowing neon cyan accents increase character visibility in dark backgrounds and grant unique cyberpunk energy."
  ],
  why_this_works_ko: [
    "'tactical tech-wear armor' 키워드는 현대적인 밀리터리 장비와 미래 지향적인 에스테틱을 결합하여 실용적이면서도 멋진 디자인을 유도합니다.",
    "빛나는 네온 시안 포인트는 어두운 배경에서 캐릭터의 가시성을 높이고 독특한 사이버펑크 에너지를 부여합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional representation of metal material reflections and neon light sources.",
      note_ko: "금속 재질의 반사와 네온 광원 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Instantly imports the character sense of masterpieces like Cyberpunk 2077 or Ghost in the Shell into your project.",
  comparison_notes_ko: "Cyberpunk 2077이나 공각기동대(Ghost in the Shell)와 같은 명작의 캐릭터 감성을 프로젝트에 즉시 가져올 수 있습니다.",
  variations: [
    {
      label: "Action Pose",
      label_ko: "액션 포즈",
      prompt_delta: "Change to dynamic action pose, leaping through rain-slicked city streets",
      use_case: "Promotional art",
      use_case_ko: "프로모션 아트",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Details too blurry -> add 'mechanical joints, complex layers' keywords."],
  common_failure_modes_ko: ["세부 사항이 너무 흐릿함 -> 'mechanical joints, complex layers' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "cyberpunk assassin concept art",
    secondary_keywords: ["futuristic character design ai", "tactical techwear prompt"],
    lsi_keywords: ["character sheet", "neon accents"],
    meta_title: "Cyberpunk Assassin Concept Art Prompt | Midjourney v6 Verified",
    meta_title_ko: "사이버펑크 암살자 컨셉 아트 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design high-detail cyberpunk assassins with tactical gear. Verified Midjourney v6 prompt for game character concepts.",
    meta_description_ko: "전술 장비를 갖춘 고해상도 사이버펑크 암살자를 디자인하세요. 게임 캐릭터 컨셉을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-char-cyberpunk-009-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "High-detail cyberpunk assassin character concept",
    alt_text_ko: "고해상도 사이버펑크 암살자 캐릭터 컨셉",
    width: 1000,
    height: 1500,
    format: "webp",
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
  title_ko: "중세 마법사 컨셉 아트",
  result_first_title: "Majestic medieval wizard character design with ornate robes and magical aura",
  result_first_title_ko: "화려한 예복과 마법 오오라가 포함된 위엄 있는 중세 마법사 캐릭터 디자인",
  short_description: "A classic fantasy mage design featuring layered silk robes, an ancient staff, and swirling elemental energy.",
  short_description_ko: "레이어드 실크 로브, 고대의 지팡이, 소용돌이치는 원소 에너지를 특징으로 하는 클래식 판타지 마법사 디자인.",
  emotional_hook: "This prompt visualizes the mystery of a wizard, combining ancient wisdom with powerful elemental forces.",
  emotional_hook_ko: "이 프롬프트는 고대의 지혜와 강력한 원소의 힘을 결합하여 마법사의 신비로움을 시각화합니다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["rpg_character", "concept_art", "fantasy_illustration", "npc_design"],
  use_cases_ko: ["RPG 캐릭터", "컨셉 아트", "판타지 일러스트", "NPC 디자인"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "medieval wizard character design, [element_type], full body, ornate layered robes with gold embroidery, [staff_style], glowing magical aura, ancient library background, cinematic fantasy lighting, hyper-detailed --ar 2:3 --v 6 --s 300",
  negative_prompt: "modern, sci-fi, technology, messy, low quality, blurry, simplistic, poor fabric texture",
  aspect_ratio_tags: ["2:3", "fantasy", "wizard"],
  variables: [
    {
      name: "element_type",
      name_ko: "원소 유형",
      placeholder: "[element_type]",
      default_value: "blue frost and ice magic",
      recommended_values: ["crimson fire and lava", "emerald nature and vines", "golden lightning and storm", "violet arcane and void"],
      variable_behavior_note: "Changing the elemental type completely synchronizes the wizard's outfit color, sound effects, and surrounding particle effects.",
      variable_behavior_note_ko: "원소 유형을 변경하면 마법사의 의상 색상, 효과음 및 주변 파티클 효과가 완전히 동기화됩니다."
    },
    {
      name: "staff_style",
      name_ko: "지팡이 스타일",
      placeholder: "[staff_style]",
      default_value: "twisted ancient oak staff with floating crystal",
      recommended_values: ["gold scepter with glowing orb", "iron staff with sharp dragon claws", "bone staff with dark skull", "crystalline wand with intense light"],
      variable_behavior_note: "Changing the staff style modifies the visual hints regarding the wizard's authority and alignment (Good/Evil).",
      variable_behavior_note_ko: "지팡이 스타일을 변경하면 마법사의 권위와 성향(선/악)에 대한 시각적 힌트가 수정됩니다."
    }
  ],
  why_this_works: [
    "The 'ornate layered robes' keyword enriches the character's weight and detail, creating the dignity of a high mage.",
    "The 'glowing magical aura' grants dynamic energy to a static character sheet, capturing attention."
  ],
  why_this_works_ko: [
    "'ornate layered robes' 키워드는 캐릭터의 무게감과 디테일을 풍부하게 하여 대마법사의 품격을 만들어냅니다.",
    "'glowing magical aura'는 정적인 캐릭터 시트에 동적인 에너지를 부여하여 시선을 사로잡습니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional representation of fabric textures, gold embroidery, and light scattering effects.",
      note_ko: "패브릭 텍스처, 금사 자수 및 빛 산란 효과 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Captures the essence of authentic fantasy universes like Lord of the Rings or Diablo.",
  comparison_notes_ko: "반지의 제왕(Lord of the Rings)이나 디아블로(Diablo)와 같은 정통 판타지 세계관의 정수를 담아냅니다.",
  variations: [
    {
      label: "Casting Spell",
      label_ko: "주문 시전",
      prompt_delta: "Change to action pose, chanting a powerful spell with massive light effects",
      use_case: "Skill card illustration",
      use_case_ko: "스킬 카드 일러스트",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Outfits appearing too simple -> add 'intricate patterns, silk and velvet' keywords."],
  common_failure_modes_ko: ["의상이 너무 단순해 보임 -> 'intricate patterns, silk and velvet' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "medieval wizard concept art",
    secondary_keywords: ["fantasy mage design ai", "magical character prompt"],
    lsi_keywords: ["elemental energy", "ornate robes"],
    meta_title: "Medieval Wizard Concept Art Prompt | Midjourney v6 Verified",
    meta_title_ko: "중세 마법사 컨셉 아트 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design majestic fantasy wizards with elemental magic. Verified Midjourney v6 prompt for RPG character concepts.",
    meta_description_ko: "원소 마법을 사용하는 위엄 있는 판타지 마법사를 디자인하세요. RPG 캐릭터 컨셉을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-char-wizard-010-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Majestic medieval wizard character concept",
    alt_text_ko: "위엄 있는 중세 마법사 캐릭터 컨셉",
    width: 1000,
    height: 1500,
    format: "webp",
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
  title_ko: "미래형 메카 워리어",
  result_first_title: "Gargantuan mech suit design with heavy weaponry and industrial detail",
  result_first_title_ko: "중화기와 산업적 디테일을 갖춘 거대한 메카 슈트 디자인",
  short_description: "A professional design for robotic combat units, focusing on mechanical joints, hydraulic systems, and tactical armor plates.",
  short_description_ko: "기계 관절, 유압 시스템 및 전술 아머 플레이트에 중점을 둔 로봇 전투 유닛을 위한 전문 디자인.",
  emotional_hook: "This prompt designs the ruler of the battlefield, where the heavy weight of steel clashes with technical sophistication.",
  emotional_hook_ko: "이 프롬프트는 강철의 묵직함과 기술적 정교함이 충돌하는 전장의 지배자를 디자인합니다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["mech_design", "robotic_concept", "sci_fi_game", "3d_asset_ref"],
  use_cases_ko: ["메카 디자인", "로봇 컨셉", "SF 게임", "3D 에셋 참조"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "futuristic mech warrior design, [mech_class], massive industrial robotic suit, [weapon_mount], hydraulic pistons, weathered metal texture, tactical camouflage, hangar background, dramatic lighting, hyper-detailed mechanical parts --ar 3:4 --v 6 --s 200",
  negative_prompt: "organic, human face, soft, fantasy, magical, clean and shiny (unless specified), small, fragile",
  aspect_ratio_tags: ["3:4", "mech", "robotic"],
  variables: [
    {
      name: "mech_class",
      name_ko: "메카 클래스",
      placeholder: "[mech_class]",
      default_value: "heavy assault juggernaut",
      recommended_values: ["agile scout interceptor", "long-range artillery platform", "all-terrain support unit", "stealthy electronic warfare mech"],
      variable_behavior_note: "Changing the mech class completely redesigns the unit's weight class, leg count, and armor shape to match its purpose.",
      variable_behavior_note_ko: "메카 클래스를 변경하면 목적에 맞춰 유닛의 중량 등급, 다리 개수 및 아머 형태가 완전히 재디자인됩니다."
    },
    {
      name: "weapon_mount",
      name_ko: "무기 장착",
      placeholder: "[weapon_mount]",
      default_value: "shoulder-mounted rail cannons",
      recommended_values: ["arm-mounted plasma cutters", "back-mounted missile pods", "integrated heavy machine guns", "energy shield generators"],
      variable_behavior_note: "Changing the weapon mount visually shifts the unit's combat silhouette and threat level.",
      variable_behavior_note_ko: "무기 장착을 변경하면 유닛의 전투 실루엣과 위협 수준이 시각적으로 바뀝니다."
    }
  ],
  why_this_works: [
    "The 'hydraulic pistons' and 'weathered metal texture' keywords grant the crucial 'functional realism' to mecha designs.",
    "The 'hangar background' provides an excellent visual contrast to gauge the massive scale of the unit."
  ],
  why_this_works_ko: [
    "'hydraulic pistons'와 'weathered metal texture' 키워드는 메카 디자인에 필수적인 '기능적 리얼리즘'을 부여합니다.",
    "'hangar background'는 유닛의 거대한 규모를 가늠할 수 있는 훌륭한 시각적 대비를 제공합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Mechanical structures and metal corrosion effects are highly realistic.",
      note_ko: "기계 구조와 금속 부식 효과가 매우 사실적입니다."
    }
  ],
  comparison_notes: "Optimal for implementing the feel of iconic mecha games like Armored Core or Titanfall.",
  comparison_notes_ko: "아머드 코어(Armored Core)나 타이탄폴(Titanfall)과 같은 상징적인 메카 게임의 느낌을 구현하는 데 최적입니다.",
  variations: [
    {
      label: "Close-up",
      label_ko: "클로즈업",
      prompt_delta: "Focus on the pilot cockpit and head sensor array, high-detail macro shot",
      use_case: "Technical breakdown",
      use_case_ko: "기술적 분석",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Shapes appearing too abstract -> add 'functional mechanical joints' keywords."],
  common_failure_modes_ko: ["형태가 너무 추상적으로 보임 -> 'functional mechanical joints' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "futuristic mech warrior concept art",
    secondary_keywords: ["robotic suit design ai", "industrial mech prompt"],
    lsi_keywords: ["mechanical joints", "tactical armor"],
    meta_title: "Futuristic Mech Warrior Concept Art Prompt | Midjourney v6 Verified",
    meta_title_ko: "미래형 메카 워리어 컨셉 아트 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design massive industrial mech warriors with heavy weaponry. Verified Midjourney v6 prompt for sci-fi game assets.",
    meta_description_ko: "중화기를 갖춘 거대한 산업용 메카 워리어를 디자인하세요. SF 게임 에셋을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-char-mech-011-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Gargantuan futuristic mech warrior design",
    alt_text_ko: "거대한 미래형 메카 워리어 디자인",
    width: 1200,
    height: 1600,
    format: "webp",
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
  title_ko: "다크 판타지 로그",
  result_first_title: "Shadowy dark fantasy rogue character with hooded cloak and poison-tipped daggers",
  result_first_title_ko: "후드 망토와 독이 묻은 단검을 든 그림자 같은 다크 판타지 로그 캐릭터",
  short_description: "A stealth-focused character design featuring worn leather armor, a deep hood, and a mysterious, lethal aura.",
  short_description_ko: "낡은 가죽 아머, 깊은 후드, 그리고 신비롭고 치명적인 오오라를 특징으로 하는 은신 중심의 캐릭터 디자인.",
  emotional_hook: "This prompt summons a lone hunter at the center of a world of darkness ruled by silent death.",
  emotional_hook_ko: "이 프롬프트는 침묵의 죽음이 지배하는 어둠의 세계 중심에 있는 고독한 사냥꾼을 소환합니다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["assassin_concept", "rpg_rogue", "horror_fantasy", "villain_design"],
  use_cases_ko: ["암살자 컨셉", "RPG 로그", "호러 판타지", "빌런 디자인"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "dark fantasy rogue character design, [rogue_archetype], full body, worn dark leather armor, tattered hooded cloak, [signature_weapon], glowing ominous eyes, foggy medieval alley background, dramatic rim lighting, moody atmosphere --ar 2:3 --v 6 --s 180",
  negative_prompt: "bright colors, heroic, clean, sci-fi, technology, messy, low quality, blurry, day light",
  aspect_ratio_tags: ["2:3", "dark_fantasy", "rogue"],
  variables: [
    {
      name: "rogue_archetype",
      name_ko: "로그 아키타입",
      placeholder: "[rogue_archetype]",
      default_value: "poison-specialist silent assassin",
      recommended_values: ["shadow-manipulating void walker", "exiled royal spy", "grave-robbing treasure hunter", "vampiric night stalker"],
      variable_behavior_note: "Changing the rogue archetype modifies the weapon's poison aura, outfit ornaments, and the color palette of the atmosphere emitted by the character.",
      variable_behavior_note_ko: "로그 아키타입을 변경하면 무기의 독 오오라, 의상 장식 및 캐릭터가 뿜어내는 분위기의 색상 팔레트가 수정됩니다."
    },
    {
      name: "signature_weapon",
      name_ko: "시그니처 무기",
      placeholder: "[signature_weapon]",
      default_value: "twin serrated poison-dipped daggers",
      recommended_values: ["hidden wrist blades", "barbed throwing knives", "compact collapsible crossbow", "smoke bomb belt"],
      variable_behavior_note: "Changing the signature weapon adjusts the character's stealth posture and combat readiness accordingly.",
      variable_behavior_note_ko: "시그니처 무기를 변경하면 그에 맞춰 캐릭터의 은신 자세와 전투 준비 상태가 조정됩니다."
    }
  ],
  why_this_works: [
    "The 'tattered hooded cloak' and 'rim lighting' highlight the silhouette while hiding the character's identity for a strong impression.",
    "The 'glowing ominous eyes' serve as a point revealing the character's will even in darkness."
  ],
  why_this_works_ko: [
    "'tattered hooded cloak'과 'rim lighting'은 캐릭터의 정체를 숨기면서 실루엣을 강조하여 강렬한 인상을 남깁니다.",
    "'glowing ominous eyes'는 어둠 속에서도 캐릭터의 의지를 드러내는 포인트 역할을 합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Superb leather texture and fog representation within dark areas.",
      note_ko: "어두운 영역 내의 가죽 질감과 안개 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Optimal for designing characters in Gothic/Dark Fantasy styles like Dark Souls or Bloodborne.",
  comparison_notes_ko: "다크 소울(Dark Souls)이나 블러드본(Bloodborne)과 같은 고딕/다크 판타지 스타일의 캐릭터 디자인에 최적입니다.",
  variations: [
    {
      label: "Hiding",
      label_ko: "은신",
      prompt_delta: "Crouched pose, partially hidden behind a stone pillar, intense shadow",
      use_case: "Stealth mechanic preview",
      use_case_ko: "스텔스 메커니즘 미리보기",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Character appearing too clearly -> add 'deep shadows, obscure facial features' keywords."],
  common_failure_modes_ko: ["캐릭터가 너무 선명하게 보임 -> 'deep shadows, obscure facial features' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "dark fantasy rogue concept art",
    secondary_keywords: ["assassin character design ai", "stealth rogue prompt"],
    lsi_keywords: ["hooded cloak", "leather armor"],
    meta_title: "Dark Fantasy Rogue Concept Art Prompt | Midjourney v6 Verified",
    meta_title_ko: "다크 판타지 로그 컨셉 아트 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design shadowy dark fantasy rogues with hooded cloaks. Verified Midjourney v6 prompt for lethal assassin concepts.",
    meta_description_ko: "후드 망토를 두른 그림자 같은 다크 판타지 로그를 디자인하세요. 치명적인 암살자 컨셉을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-char-rogue-012-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Shadowy dark fantasy rogue character concept",
    alt_text_ko: "그림자 같은 다크 판타지 로그 캐릭터 컨셉",
    width: 1000,
    height: 1500,
    format: "webp",
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
  title_ko: "스팀펑크 탐험가",
  result_first_title: "Vintage steampunk explorer character with brass goggles and mechanical gadgets",
  result_first_title_ko: "황동 고글과 기계 장치를 갖춘 빈티지 스팀펑크 탐험가 캐릭터",
  short_description: "A character design blending Victorian fashion with industrial machinery, featuring leather gear and brass clockwork.",
  short_description_ko: "빅토리아 시대의 패션과 산업 기계가 조화를 이룬 가죽 장비와 황동 태엽 장치를 특징으로 하는 캐릭터 디자인.",
  emotional_hook: "This prompt summons an explorer full of the romance of steam engines and a sense of adventure toward the unknown.",
  emotional_hook_ko: "이 프롬프트는 증기 기관의 낭만과 미지에 대한 모험심으로 가득 찬 탐험가를 소환합니다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["adventure_game", "steampunk_world", "concept_art", "character_sheet"],
  use_cases_ko: ["어드벤처 게임", "스팀펑크 세계관", "컨셉 아트", "캐릭터 시트"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "steampunk explorer character design, [explorer_gender], full body, brown leather vest and flight pants, [gadget_type], brass goggles on forehead, clockwork mechanical arm, Victorian city background with airships, warm sepia lighting, hyper-detailed --ar 2:3 --v 6 --s 200",
  negative_prompt: "modern, sci-fi, magical, messy, low quality, blurry, neon, plastic, generic",
  aspect_ratio_tags: ["2:3", "steampunk", "explorer"],
  variables: [
    {
      name: "explorer_gender",
      name_ko: "탐험가 성별/외형",
      placeholder: "[explorer_gender]",
      default_value: "female adventurer with messy hair",
      recommended_values: ["dashing male pilot with mustache", "elderly professor with monocle", "young street orphan with oversized coat", "mysterious hooded mapmaker"],
      variable_behavior_note: "Changing gender and appearance features visually concretizes the character's personality and story while maintaining steampunk industrial aesthetics.",
      variable_behavior_note_ko: "성별과 외모 특징을 변경하면 스팀펑크의 산업적 에스테틱을 유지하면서 캐릭터의 성격과 이야기를 시각적으로 구체화합니다."
    },
    {
      name: "gadget_type",
      name_ko: "도구 유형",
      placeholder: "[gadget_type]",
      default_value: "folding brass telescope and compass",
      recommended_values: ["steam-powered backpack with wings", "mechanical analytical engine", "ornate clockwork pistol", "vial of glowing bio-fuel"],
      variable_behavior_note: "Changing the gadget type visually suggests the character's specialty and the nature of their exploration.",
      variable_behavior_note_ko: "도구 유형을 변경하면 캐릭터의 전문성과 탐험의 성격을 시각적으로 암시합니다."
    }
  ],
  why_this_works: [
    "The combination of brass and leather faithfully implements the visual grammar of the steampunk genre, providing genre satisfaction.",
    "The 'clockwork mechanical arm' makes the genre theme of body and machine union the character's core point."
  ],
  why_this_works_ko: [
    "황동과 가죽의 조합은 스팀펑크 장르의 시각적 문법을 충실히 구현하여 장르적 만족감을 제공합니다.",
    "'clockwork mechanical arm'은 신체와 기계의 결합이라는 장르적 테마를 캐릭터의 핵심 포인트로 만듭니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional texture contrast between copper, brass, and leather.",
      note_ko: "구리, 황동, 가죽 사이의 뛰어난 질감 대비가 돋보입니다."
    }
  ],
  comparison_notes: "Contains the vintage yet detailed mechanical aesthetics of works like BioShock Infinite or Steamboy.",
  comparison_notes_ko: "바이오쇼크 인피니트(BioShock Infinite)나 스팀보이(Steamboy)와 같은 작품의 빈티지하면서도 정교한 기계적 미학을 담고 있습니다.",
  variations: [
    {
      label: "Close-up",
      label_ko: "클로즈업",
      prompt_delta: "Macro shot of the mechanical arm and gadgets, showing gears and rivets",
      use_case: "Prop detail ref",
      use_case_ko: "소품 디테일 참조",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Mechanical devices appearing too modern -> add 'brass gears, rivets, steam vents' keywords."],
  common_failure_modes_ko: ["기계 장치가 너무 현대적으로 보임 -> 'brass gears, rivets, steam vents' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "steampunk explorer concept art",
    secondary_keywords: ["victorian industrial design ai", "clockwork character prompt"],
    lsi_keywords: ["brass goggles", "mechanical arm"],
    meta_title: "Steampunk Explorer Concept Art Prompt | Midjourney v6 Verified",
    meta_title_ko: "스팀펑크 탐험가 컨셉 아트 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design vintage steampunk explorers with brass and leather gear. Verified Midjourney v6 prompt for adventure game characters.",
    meta_description_ko: "황동과 가죽 장비를 갖춘 빈티지 스팀펑크 탐험가를 디자인하세요. 어드벤처 게임 캐릭터를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-char-steampunk-013-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Vintage steampunk explorer character concept",
    alt_text_ko: "빈티지 스팀펑크 탐험가 캐릭터 컨셉",
    width: 1000,
    height: 1500,
    format: "webp",
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
  title_ko: "보물 상자 아이템 디자인",
  result_first_title: "Intricate treasure chest design variations with gold filigree and magical glow",
  result_first_title_ko: "금색 선 세공과 마법의 광채가 포함된 정교한 보물 상자 디자인 변형",
  short_description: "A collection of high-detail treasure chests for RPGs, including common wood, ornate gold, and mimic variations.",
  short_description_ko: "일반 나무, 화려한 금, 미믹 변형을 포함한 RPG용 고해상도 보물 상자 컬렉션.",
  emotional_hook: "This prompt rewards the most thrilling moment of treasure encountered at the end of an adventure with visual brilliance.",
  emotional_hook_ko: "이 프롬프트는 모험의 끝에서 마주하는 가장 짜릿한 보물의 순간을 시각적 화려함으로 보상합니다.",
  category: "game_asset",
  vertical: "item_design",
  use_cases: ["loot_system", "rpg_item", "game_prop", "concept_art"],
  use_cases_ko: ["루트 시스템", "RPG 아이템", "게임 소품", "컨셉 아트"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "treasure chest item design, [chest_rarity], centered composition, [material_type], ornate gold filigree, soft magical glow from within, plain dark background, high-fidelity 3D render style, hyper-detailed --ar 1:1 --v 6 --s 200",
  negative_prompt: "low quality, blurry, human figure, complex background, messy, flat shading, modern technology, cartoonish",
  aspect_ratio_tags: ["1:1", "item_design", "fantasy_prop"],
  variables: [
    {
      name: "chest_rarity",
      name_ko: "상자 희귀도",
      placeholder: "[chest_rarity]",
      default_value: "legendary ancient artifact chest",
      recommended_values: ["common weathered wooden crate", "rare silver knight chest", "epic glowing arcane box", "cursed dark mimic chest with teeth"],
      variable_behavior_note: "Changing the rarity modifies the chest size, decoration density, and the intensity of the light emitted to match the grade.",
      variable_behavior_note_ko: "희귀도를 변경하면 등급에 맞춰 상자 크기, 장식 밀도 및 방출되는 빛의 강도가 수정됩니다."
    },
    {
      name: "material_type",
      name_ko: "재질 유형",
      placeholder: "[material_type]",
      default_value: "weathered oak and reinforced iron",
      recommended_values: ["polished white marble and gold", "dark obsidian with glowing runes", "organic bone and leather", "crystalline glass with liquid core"],
      variable_behavior_note: "Changing the material type visually suggests the civilization or background story the chest belongs to.",
      variable_behavior_note_ko: "재질 유형을 변경하면 상자가 속한 문명이나 배경 이야기를 시각적으로 암시합니다."
    }
  ],
  why_this_works: [
    "Centered composition is the most suitable layout for immediate use in game item preview windows or inventory UIs.",
    "The 'magical glow from within' visually amplifies the expectation that something great is inside the chest."
  ],
  why_this_works_ko: [
    "중앙 구도는 게임 아이템 미리보기 창이나 인벤토리 UI에서 즉시 사용하기에 가장 적합한 레이아웃입니다.",
    "안쪽에서 뿜어져 나오는 '마법의 광채'는 상자 안에 대단한 것이 들어있을 것이라는 기대감을 시각적으로 증폭시킵니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Highly realistic texture contrast between metal sheen and wood grain.",
      note_ko: "금속 광택과 나무 결 사이의 매우 사실적인 질감 대비를 보여줍니다."
    }
  ],
  comparison_notes: "Replicates the legendary loot chest feel of World of Warcraft or the Diablo series.",
  comparison_notes_ko: "월드 오브 워크래프트(World of Warcraft)나 디아블로(Diablo) 시리즈의 전설적인 전리품 상자 느낌을 재현합니다.",
  variations: [
    {
      label: "Mimic",
      label_ko: "미믹",
      prompt_delta: "Add sharp teeth, a long purple tongue, and multiple eyes peeking from the lid",
      use_case: "Enemy/Trap design",
      use_case_ko: "적/함정 디자인",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Chest being cropped -> add 'full object in frame' keywords."],
  common_failure_modes_ko: ["상자가 잘림 -> 'full object in frame' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "treasure chest item design prompt",
    secondary_keywords: ["rpg loot design ai", "game prop prompt"],
    lsi_keywords: ["gold filigree", "magical glow"],
    meta_title: "Treasure Chest Item Design Prompt | Midjourney v6 Verified",
    meta_title_ko: "보물 상자 아이템 디자인 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design intricate treasure chests for RPGs. Verified Midjourney v6 prompt for loot systems and game props.",
    meta_description_ko: "RPG용 정교한 보물 상자를 디자인하세요. 루트 시스템 및 게임 소품을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-prop-chest-014-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Intricate treasure chest item design",
    alt_text_ko: "정교한 보물 상자 아이템 디자인",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "마법 물약 및 병",
  result_first_title: "Ornate magic potion vials with glowing liquids and cork stoppers",
  result_first_title_ko: "빛나는 액체와 코르크 마개가 포함된 화려한 마법 물약 병",
  short_description: "A set of stylized alchemical potions, featuring unique glass shapes, bubbling liquids, and decorative labels.",
  short_description_ko: "독특한 유리 형태, 보글보글 끓는 액체, 장식용 라벨을 특징으로 하는 스타일리시한 연금술 물약 세트.",
  emotional_hook: "This prompt captures the energy inside transparent glass, the mysterious potion vials sitting on an alchemist's shelf.",
  emotional_hook_ko: "이 프롬프트는 투명한 유리 안의 에너지, 연금술사의 선반 위에 놓인 신비로운 물약 병들을 포착합니다.",
  category: "game_asset",
  vertical: "item_design",
  use_cases: ["rpg_inventory", "alchemy_system", "ui_icons", "game_assets"],
  use_cases_ko: ["RPG 인벤토리", "연금술 시스템", "UI 아이콘", "게임 에셋"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "magic potion vial design, [potion_type], centered, [vial_shape] glass bottle, glowing [liquid_color] liquid with bubbles, ornate silver cap, plain light gray background, 3D render style, hyper-detailed --ar 1:1 --v 6 --s 150",
  negative_prompt: "complex background, human figure, messy, low quality, blurry, modern plastic, dirty liquid, text, labels",
  aspect_ratio_tags: ["1:1", "item_design", "alchemy"],
  variables: [
    {
      name: "potion_type",
      name_ko: "물약 유형",
      placeholder: "[potion_type]",
      default_value: "elixir of ultimate restoration",
      recommended_values: ["volatile fire blast oil", "shimmering mana essence", "corrosive venom extract", "divine holy water flask"],
      variable_behavior_note: "Changing the potion type modifies liquid concentration and internal particles (light dust, smoke, etc.) to match the effects.",
      variable_behavior_note_ko: "물약 유형을 변경하면 효과에 맞춰 액체 농도와 내부 파티클(빛 가루, 연기 등)이 수정됩니다."
    },
    {
      name: "vial_shape",
      name_ko: "병 형태",
      placeholder: "[vial_shape]",
      default_value: "elegant heart-shaped",
      recommended_values: ["sturdy round spherical", "tall crystalline hexagonal", "jagged lightning-bolt style", "mysterious crescent moon"],
      variable_behavior_note: "Changing the vial shape clearly emphasizes the potion's rarity and visual personality.",
      variable_behavior_note_ko: "병 형태를 변경하면 물약의 희귀도와 시각적 개성이 명확하게 강조됩니다."
    }
  ],
  why_this_works: [
    "Glowing liquid with bubbles grants vitality to static images and strengthens the identity as a magic item.",
    "Plain light gray background helps clearly observe glass refraction and reflected light."
  ],
  why_this_works_ko: [
    "보글보글 끓는 빛나는 액체는 정적인 이미지에 생명력을 부여하고 마법 아이템으로서의 정체성을 강화합니다.",
    "평범한 밝은 회색 배경은 유리의 굴절과 반사광을 명확하게 관찰하는 데 도움이 됩니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Exceptional representation of glass refraction and light sources within fluids.",
      note_ko: "유리 굴절과 유체 내의 광원 표현이 탁월합니다."
    }
  ],
  comparison_notes: "Perfect for use as inventory icons or alchemy content references for mobile RPGs.",
  comparison_notes_ko: "모바일 RPG의 인벤토리 아이콘이나 연금술 콘텐츠 참조용으로 사용하기에 완벽합니다.",
  variations: [
    {
      label: "Ingredient Pack",
      label_ko: "재료 팩",
      prompt_delta: "Change vial to raw alchemy ingredients like glowing herbs and crushed dragon scales in jars",
      use_case: "Crafting system",
      use_case_ko: "제작 시스템",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Liquid appearing murky -> add 'crystal clear liquid, intense inner glow' keywords."],
  common_failure_modes_ko: ["액체가 탁해 보임 -> 'crystal clear liquid, intense inner glow' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "magic potion vial design prompt",
    secondary_keywords: ["alchemy item ai design", "rpg inventory potion prompt"],
    lsi_keywords: ["glowing liquid", "glass bottle design"],
    meta_title: "Magic Potions & Vials Design Prompt | Midjourney v6 Verified",
    meta_title_ko: "마법 물약 및 병 디자인 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design ornate magic potions for RPGs. Verified Midjourney v6 prompt for alchemical item concepts.",
    meta_description_ko: "RPG용 화려한 마법 물약을 디자인하세요. 연금술 아이템 컨셉을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-item-potion-015-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Ornate magic potion vial design",
    alt_text_ko: "화려한 마법 물약 병 디자인",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "고대 유물 및 아티팩트",
  result_first_title: "Powerful ancient artifact with mystical inscriptions and floating components",
  result_first_title_ko: "신비로운 명문과 공중 부양 부품이 포함된 강력한 고대 유물",
  short_description: "Unique quest items and legendary relics for fantasy games, featuring floating parts and elemental energy.",
  short_description_ko: "공중 부양 부품과 원소 에너지를 특징으로 하는 판타지 게임용 독특한 퀘스트 아이템 및 전설적인 유물.",
  emotional_hook: "This prompt designs the overwhelming power and secrets dormant within relics that have endured thousands of years.",
  emotional_hook_ko: "이 프롬프트는 수천 년을 견뎌온 유물 속에 잠들어 있는 압도적인 힘과 비밀을 디자인합니다.",
  category: "game_asset",
  vertical: "item_design",
  use_cases: ["quest_item", "legendary_gear", "world_lore", "game_assets"],
  use_cases_ko: ["퀘스트 아이템", "전설적인 장비", "세계관 설정", "게임 에셋"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "ancient fantasy artifact, [artifact_type], centered, [primary_material] with glowing runes, floating parts, mystical energy arcs, cinematic lighting, plain dark background, hyper-detailed 3D concept --ar 1:1 --v 6 --s 300",
  negative_prompt: "modern, low tech, messy, low quality, blurry, human figure, complex background, cartoonish, wooden (unless specified)",
  aspect_ratio_tags: ["1:1", "item_design", "relic"],
  variables: [
    {
      name: "artifact_type",
      name_ko: "유물 유형",
      placeholder: "[artifact_type]",
      default_value: "floating sun-dial of eternity",
      recommended_values: ["skull of a fallen god with jewels", "mechanical heart of a titan", "floating crystalline crown", "sealed box of cosmic whispers"],
      variable_behavior_note: "Changing the artifact type completely shifts the overall silhouette and the narrative weight provided by the relic.",
      variable_behavior_note_ko: "유물 유형을 변경하면 전체적인 실루엣과 유물이 부여하는 서사적 무게감이 완전히 바뀝니다."
    },
    {
      name: "primary_material",
      name_ko: "주요 재질",
      placeholder: "[primary_material]",
      default_value: "etched ivory and obsidian",
      recommended_values: ["cracked celestial bronze", "glowing ethereal ether-stone", "ancient rusted dragon-scale iron", "polished white divine marble"],
      variable_behavior_note: "Changing the primary material visualizes the technical level of the era or civilization that crafted the relic.",
      variable_behavior_note_ko: "주요 재질을 변경하면 유물을 제작한 시대나 문명의 기술 수준을 시각화합니다."
    }
  ],
  why_this_works: [
    "Floating parts and energy arcs instantly demonstrate that the relic possesses 'supernatural power' beyond ordinary items.",
    "Glowing runes add narrative depth, suggesting ancient knowledge or curses reside within the relic."
  ],
  why_this_works_ko: [
    "공중 부양 부품과 에너지 아크는 유물이 일반 아이템을 넘어서는 '초자연적인 힘'을 가지고 있음을 즉각적으로 보여줍니다.",
    "빛나는 룬 문자는 서사적 깊이를 더하며, 유물 안에 고대 지식이나 저주가 깃들어 있음을 암시합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Superb spatial sense between floating parts and light source processing.",
      note_ko: "공중 부양 부품들 사이의 공간감과 광원 처리가 탁월합니다."
    }
  ],
  comparison_notes: "Guarantees visual weight equivalent to key items in God of War or Elden Ring.",
  comparison_notes_ko: "갓 오브 워(God of War)나 엘든 링(Elden Ring)의 핵심 아이템에 버금가는 시각적 무게감을 보장합니다.",
  variations: [
    {
      label: "Corrupted",
      label_ko: "타락한",
      prompt_delta: "Add black shadow smoke, cracked surface, and red bleeding energy",
      use_case: "Evil/Cursed relics",
      use_case_ko: "사악한/저주받은 유물",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Relic appearing too simple -> add 'intricate clockwork, layered engravings' keywords."],
  common_failure_modes_ko: ["유물이 너무 단순해 보임 -> 'intricate clockwork, layered engravings' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "ancient relic artifact design prompt",
    secondary_keywords: ["fantasy quest item ai", "legendary artifact prompt"],
    lsi_keywords: ["floating parts", "glowing runes"],
    meta_title: "Ancient Relics & Artifacts Design Prompt | Midjourney v6 Verified",
    meta_title_ko: "고대 유물 및 아티팩트 디자인 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design powerful ancient artifacts for RPGs. Verified Midjourney v6 prompt for quest items and legendary relics.",
    meta_description_ko: "RPG용 강력한 고대 유물을 디자인하세요. 퀘스트 아이템 및 전설적인 유물을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-item-artifact-016-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Powerful ancient relic artifact design",
    alt_text_ko: "강력한 고대 유물 아티팩트 디자인",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "중세 무기 및 방어구",
  result_first_title: "Exquisite medieval weapon design with ornate engravings and battle-worn texture",
  result_first_title_ko: "정교한 인그레이빙과 전투 흔적이 있는 고전적인 중세 무기 디자인",
  short_description: "A professional character-centric weapon design for RPGs, including swords, axes, and shields.",
  short_description_ko: "검, 도끼, 방패를 포함한 RPG용 전문 캐릭터 중심 무기 디자인.",
  emotional_hook: "This prompt designs the formal beauty of the sharpest and strongest steel, imbued with a knight's honor and a warrior's fighting spirit.",
  emotional_hook_ko: "이 프롬프트는 기사의 명예와 전사의 투혼이 깃든, 가장 날카롭고 강한 강철의 조형미를 디자인합니다.",
  category: "game_asset",
  vertical: "item_design",
  use_cases: ["weapon_concept", "rpg_gear", "character_asset", "3d_modeling_ref"],
  use_cases_ko: ["무기 컨셉", "RPG 장비", "캐릭터 에셋", "3D 모델링 참조"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "medieval weapon design, [weapon_type], centered full shot, [material_finish] with [engraving_style] patterns, leather wrapped hilt, cinematic studio lighting, plain dark background, hyper-detailed metal texture --ar 2:3 --v 6 --s 250",
  negative_prompt: "low quality, blurry, human figure holding it, complex background, modern, sci-fi, cartoonish, plastic looking metal",
  aspect_ratio_tags: ["2:3", "weapon_design", "medieval"],
  variables: [
    {
      name: "weapon_type",
      name_ko: "무기 유형",
      placeholder: "[weapon_type]",
      default_value: "broadsword with a heavy crossguard",
      recommended_values: ["double-headed battle axe", "long reaching steel halberd", "ornate kite shield with royal crest", "recurve longbow with silver tips"],
      variable_behavior_note: "Changing the weapon type adjusts its length and weight, visually expressing the warrior's combat style.",
      variable_behavior_note_ko: "무기 유형을 변경하면 길이와 무게가 조정되어 전사의 전투 스타일을 시각적으로 표현합니다."
    },
    {
      name: "material_finish",
      name_ko: "재질 마감",
      placeholder: "[material_finish]",
      default_value: "polished cold steel",
      recommended_values: ["battle-worn rusted iron", "glowing dragon-forged gold", "dark obsidian glass", "etched damascus steel"],
      variable_behavior_note: "Changing the material finish visualizes the weapon's state (new vs worn) and its legendary status.",
      variable_behavior_note_ko: "재질 마감을 변경하면 무기의 상태(새것 vs 낡은 것)와 전설적인 등급을 시각화합니다."
    }
  ],
  why_this_works: [
    "The 'hyper-detailed metal texture' keyword enhances realism by representing blade sharpness and fine surface scratches.",
    "The 'plain dark background' highlights the metal sheen and silhouette, beneficial for 3D modeling references."
  ],
  why_this_works_ko: [
    "'hyper-detailed metal texture' 키워드는 칼날의 날카로움과 미세한 표면 스크래치를 표현하여 리얼리티를 높입니다.",
    "'plain dark background'는 금속의 광택과 실루엣을 강조하여 3D 모델링 참조에 유리합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Higher precision in metal reflections and decorative patterns compared to other models.",
      note_ko: "다른 모델에 비해 금속 반사와 장식 패턴의 정밀도가 높습니다."
    }
  ],
  comparison_notes: "Responsive to both historically accurate and ornate fantasy weapon designs, like Assassin's Creed or For Honor.",
  comparison_notes_ko: "어쌔신 크리드(Assassin's Creed)나 포 아너(For Honor)와 같이 역사적으로 정확한 디자인과 화려한 판타지 무기 디자인 모두에 잘 대응합니다.",
  variations: [
    {
      label: "Elemental",
      label_ko: "원소 효과",
      prompt_delta: "Add fire/lightning effects flowing through the blade/axe head",
      use_case: "Magic weapons",
      use_case_ko: "마법 무기",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Awkward weapon proportions -> add 'historically accurate proportions' keywords."],
  common_failure_modes_ko: ["무기 비율이 어색함 -> 'historically accurate proportions' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "medieval weapon design prompt",
    secondary_keywords: ["rpg sword concept art ai", "battle axe design prompt"],
    lsi_keywords: ["metal texture", "leather wrapped hilt"],
    meta_title: "Medieval Weapons Design Prompt | Midjourney v6 Verified",
    meta_title_ko: "중세 무기 디자인 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design exquisite medieval weapons and armor. Verified Midjourney v6 prompt for RPG gear and character assets.",
    meta_description_ko: "정교한 중세 무기와 방어구를 디자인하세요. RPG 장비 및 캐릭터 에셋을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-item-weapon-017-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Exquisite medieval broadsword weapon design",
    alt_text_ko: "정교한 중세 브로드소드 무기 디자인",
    width: 1000,
    height: 1500,
    format: "webp",
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
  title_ko: "SF 소모품",
  result_first_title: "Futuristic sci-fi consumable items with glowing canisters and digital displays",
  result_first_title_ko: "빛나는 캐니스터와 디지털 디스플레이가 포함된 미래형 SF 소모품 아이템",
  short_description: "High-tech utility items for sci-fi games, including batteries, data chips, and medical stims.",
  short_description_ko: "배터리, 데이터 칩, 의료용 스팀을 포함한 SF 게임용 첨단 유틸리티 아이템.",
  emotional_hook: "This prompt captures the functional aesthetics where the cold metal and hot data of a future city coexist.",
  emotional_hook_ko: "이 프롬프트는 미래 도시의 차가운 금속과 뜨거운 데이터가 공존하는 기능적 미학을 포착합니다.",
  category: "game_asset",
  vertical: "item_design",
  use_cases: ["sci_fi_rpg", "survival_game", "ui_icons", "game_assets"],
  use_cases_ko: ["SF RPG", "서바이벌 게임", "UI 아이콘", "게임 에셋"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "sci-fi consumable item, [consumable_type], centered, [packaging_style], glowing emissive lights, digital hologram interface, futuristic materials (carbon fiber, matte plastic), plain dark background, hyper-detailed 3D render --ar 1:1 --v 6 --s 200",
  negative_prompt: "fantasy, organic, wooden, messy, low quality, blurry, human figure, complex background, old technology, retro",
  aspect_ratio_tags: ["1:1", "item_design", "sci_fi"],
  variables: [
    {
      name: "consumable_type",
      name_ko: "소모품 유형",
      placeholder: "[consumable_type]",
      default_value: "high-capacity energy cell",
      recommended_values: ["encrypted data crystal", "neuro-stimulant injector", "holographic map drive", "portable fusion battery"],
      variable_behavior_note: "Changing the consumable type modifies the technical devices and lighting effects suitable for the item's purpose.",
      variable_behavior_note_ko: "소모품 유형을 변경하면 아이템의 목적에 적합한 기술 장치와 조명 효과가 수정됩니다."
    },
    {
      name: "packaging_style",
      name_ko: "패키징 스타일",
      placeholder: "[packaging_style]",
      default_value: "sleek carbon fiber casing",
      recommended_values: ["rugged industrial metal canister", "transparent glass stim injector", "minimalist white ceramic shell", "weathered cyberpunk junk-tech"],
      variable_behavior_note: "Changing the packaging style visualizes the civilization or manufacturer character that produced the item.",
      variable_behavior_note_ko: "패키징 스타일을 변경하면 아이템을 생산한 문명이나 제조사의 성격을 시각화합니다."
    }
  ],
  why_this_works: [
    "Glowing emissive lights instantly convey the impression of a futuristic item and increase visibility in low-light environments.",
    "The 'digital hologram interface' grants an interactive sense that the item is operating or contains data."
  ],
  why_this_works_ko: [
    "빛나는 발광(Emissive) 조명은 미래형 아이템의 인상을 즉각적으로 전달하고 저조도 환경에서의 가시성을 높입니다.",
    "'digital hologram interface'는 아이템이 작동 중이거나 데이터를 포함하고 있다는 상호작용적인 느낌을 줍니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Highly realistic textures for futuristic materials like plastic and carbon fiber.",
      note_ko: "플라스틱, 탄소 섬유와 같은 미래형 재질에 대해 매우 사실적인 질감을 보여줍니다."
    }
  ],
  comparison_notes: "Provides high-quality visuals seen in item lists of Death Stranding or Cyberpunk 2077.",
  comparison_notes_ko: "데스 스트랜딩(Death Stranding)이나 사이버펑크 2077(Cyberpunk 2077)의 아이템 리스트에서 볼 수 있는 고품질 비주얼을 제공합니다.",
  variations: [
    {
      label: "Damaged/Junk",
      label_ko: "손상된/고철",
      prompt_delta: "Add exposed wires, cracked screens, and dirty metal texture",
      use_case: "Post-apocalyptic settings",
      use_case_ko: "포스트 아포칼립스 설정",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Item appearing too small -> add 'close-up shot, focus on device' keywords."],
  common_failure_modes_ko: ["아이템이 너무 작게 보임 -> 'close-up shot, focus on device' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "sci-fi consumable item prompt",
    secondary_keywords: ["futuristic game item ai", "high-tech stim design"],
    lsi_keywords: ["emissive lights", "hologram interface"],
    meta_title: "Sci-Fi Consumables Design Prompt | Midjourney v6 Verified",
    meta_title_ko: "SF 소모품 디자인 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design high-tech consumables for sci-fi games. Verified Midjourney v6 prompt for energy cells and medical stims.",
    meta_description_ko: "SF 게임용 첨단 소모품을 디자인하세요. 에너지 셀 및 의료용 스팀을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-item-scifi-018-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Futuristic sci-fi energy cell item design",
    alt_text_ko: "미래형 SF 에너지 셀 아이템 디자인",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "판타지 식물 및 꽃",
  result_first_title: "Bioluminescent fantasy plant with unique glowing petals and mystical aura",
  result_first_title_ko: "독특한 빛나는 꽃잎과 신비로운 오오라를 가진 생체 발광 판타지 식물",
  short_description: "Extraterrestrial and magical plants for world-building, featuring bioluminescence and organic shapes.",
  short_description_ko: "생체 발광과 유기적 형태를 특징으로 하는 세계관 설정을 위한 외계 및 마법 식물.",
  emotional_hook: "This prompt designs the strange and beautiful life force found only in alien forests or wizard gardens.",
  emotional_hook_ko: "이 프롬프트는 외계 숲이나 마법사의 정원에서만 발견되는 기이하고 아름다운 생명력을 디자인합니다.",
  category: "game_asset",
  vertical: "environment_asset",
  use_cases: ["world_building", "alchemy_ingredients", "environment_concept", "game_assets"],
  use_cases_ko: ["세계관 설정", "연금술 재료", "환경 컨셉", "게임 에셋"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "fantasy flora plant design, [plant_type], [bioluminescent_color] glow, bioluminescent particles, organic alien shapes, plain dark background, cinematic lighting, hyper-detailed 3D concept --ar 1:1 --v 6 --s 200",
  negative_prompt: "real-world plants, boring, low quality, blurry, human figure, complex background, simple colors, dead plants",
  aspect_ratio_tags: ["1:1", "item_design", "nature"],
  variables: [
    {
      name: "plant_type",
      name_ko: "식물 유형",
      placeholder: "[plant_type]",
      default_value: "floating crystal lily with pulsating core",
      recommended_values: ["spiky purple bioluminescent mushroom", "twisting vine with glowing berries", "giant transparent pitcher plant", "ancient tree root with embedded gems"],
      variable_behavior_note: "Changing the plant type visually shifts the overall silhouette and ecological characteristics (floating, glowing, parasitic, etc.).",
      variable_behavior_note_ko: "식물 유형을 변경하면 전체적인 실루엣과 생태적 특성(부양, 발광, 기생 등)이 시각적으로 바뀝니다."
    },
    {
      name: "bioluminescent_color",
      name_ko: "발광 색상",
      placeholder: "[bioluminescent_color]",
      default_value: "electric cyan and violet",
      recommended_values: ["eerie neon green", "pulsating crimson red", "soft warm golden", "ghostly pale blue"],
      variable_behavior_note: "Changing the bioluminescent color suggests the environmental mood and plant properties (Healing vs Poison).",
      variable_behavior_note_ko: "발광 색상을 변경하면 환경의 분위기와 식물의 속성(치유 vs 독)을 암시합니다."
    }
  ],
  why_this_works: [
    "Bioluminescent particles and glow are optimal for target objects in dark game environments to catch player attention.",
    "Organic alien shapes provide a sense of foreignness, increasing the plausibility of fantasy universes."
  ],
  why_this_works_ko: [
    "생체 발광 파티클과 광채는 어두운 게임 환경에서 플레이어의 주의를 끌기에 최적인 대상입니다.",
    "유기적인 외계 형태는 이질감을 제공하여 판타지 세계관의 개연성을 높여줍니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Fantastic representation of plant tissue transparency and bioluminescent particles.",
      note_ko: "식물 조직의 투명도와 생체 발광 파티클 표현이 환상적입니다."
    }
  ],
  comparison_notes: "Excellent for designing alien vegetation concepts in the style of Avatar or No Man's Sky.",
  comparison_notes_ko: "아바타(Avatar)나 노 맨즈 스카이(No Man's Sky) 스타일의 외계 식물 컨셉을 디자인하는 데 탁월합니다.",
  variations: [
    {
      label: "Indoor Pot",
      label_ko: "실내 화분",
      prompt_delta: "Add an ornate ceramic pot and place the plant in a high-end interior setting",
      use_case: "Base decoration",
      use_case_ko: "기지 장식",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Appearing as common Earth plants -> reinforce with 'alien structures, glowing veins' keywords."],
  common_failure_modes_ko: ["흔한 지구 식물처럼 보임 -> 'alien structures, glowing veins' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "fantasy flora plant design prompt",
    secondary_keywords: ["alien plant ai concept", "bioluminescent flora prompt"],
    lsi_keywords: ["bioluminescent glow", "organic shapes"],
    meta_title: "Fantasy Flora & Plants Design Prompt | Midjourney v6 Verified",
    meta_title_ko: "판타지 식물 디자인 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design mystical bioluminescent plants for fantasy games. Verified Midjourney v6 prompt for extraterrestrial flora.",
    meta_description_ko: "판타지 게임용 신비로운 생체 발광 식물을 디자인하세요. 외계 식물을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-asset-flora-019-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Bioluminescent fantasy plant design",
    alt_text_ko: "생체 발광 판타지 식물 디자인",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "던전 환경 소품",
  result_first_title: "Modular dungeon environment props with weathered textures and cinematic lighting",
  result_first_title_ko: "풍화된 텍스처와 시네마틱 조명이 포함된 모듈형 던전 환경 소품",
  short_description: "Essential building blocks for dungeon levels, including torches, barrels, skeletons, and stone altars.",
  short_description_ko: "횃불, 통, 해골, 석조 제단을 포함한 던전 레벨을 위한 필수 구성 요소.",
  emotional_hook: "This prompt designs the cool, heavy textures of space emerging through the moisture and darkness of a cold underground maze.",
  emotional_hook_ko: "이 프롬프트는 차가운 지하 미로의 습기와 어둠 속에서 드러나는 공간의 무겁고 서늘한 질감을 디자인합니다.",
  category: "game_asset",
  vertical: "environment_asset",
  use_cases: ["level_design", "dungeon_crawler", "game_assets", "concept_art"],
  use_cases_ko: ["레벨 디자인", "던전 크롤러", "게임 에셋", "컨셉 아트"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "dungeon environment prop, [prop_type], centered, [material_condition], cinematic moody lighting, deep shadows, plain dark background, hyper-detailed 3D asset concept --ar 1:1 --v 6 --s 150",
  negative_prompt: "modern, clean, bright sunlight, low quality, blurry, human figure, complex background, cartoonish, sci-fi",
  aspect_ratio_tags: ["1:1", "item_design", "dungeon"],
  variables: [
    {
      name: "prop_type",
      name_ko: "소품 유형",
      placeholder: "[prop_type]",
      default_value: "iron wall torch with flickering flame",
      recommended_values: ["rotting wooden barrels and crates", "ancient stone sacrificial altar", "piles of bleached human bones", "heavy rusted dungeon door with iron bars"],
      variable_behavior_note: "Changing the prop type visualizes the dungeon's atmosphere and the threat level to the player.",
      variable_behavior_note_ko: "소품 유형을 변경하면 던전의 분위기와 플레이어에게 가해지는 위협 수준을 시각화합니다."
    },
    {
      name: "material_condition",
      name_ko: "재질 상태",
      placeholder: "[material_condition]",
      default_value: "covered in damp moss and cobwebs",
      recommended_values: ["stained with dried blood", "ancient and crumbling stone", "charred and burnt wood", "frozen with thick icicles"],
      variable_behavior_note: "Changing the material condition visualizes past events or the extreme nature of the environment in that dungeon.",
      variable_behavior_note_ko: "재질 상태를 변경하면 해당 던전의 과거 사건이나 환경의 극한성을 시각화합니다."
    }
  ],
  why_this_works: [
    "Cinematic moody lighting dramatically highlights object textures through contrast with 'darkness', a dungeon essential.",
    "Centered composition is the best layout for level designers or 3D artists to grasp individual asset forms."
  ],
  why_this_works_ko: [
    "시네마틱한 무드 조명은 던전의 필수 요소인 '어둠'과의 대비를 통해 오브젝트의 질감을 극적으로 강조합니다.",
    "중앙 구도는 레벨 디자이너나 3D 아티스트가 개별 에셋의 형태를 파악하기에 가장 좋은 레이아웃입니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Highly realistic textures for moss and stone, and light source effects for flames.",
      note_ko: "이끼와 돌의 질감이 매우 사실적이며, 불꽃의 광원 효과가 탁월합니다."
    }
  ],
  comparison_notes: "Creates heavy, serious atmospheres like props filling the backgrounds of Elden Ring or Dark Souls.",
  comparison_notes_ko: "엘든 링(Elden Ring)이나 다크 소울(Dark Souls)의 배경을 채우는 소품들처럼 무겁고 진지한 분위기를 조성합니다.",
  variations: [
    {
      label: "Glowing",
      label_ko: "발광형",
      prompt_delta: "Add glowing magical runes or radioactive slime to the prop",
      use_case: "High-fantasy/Mutated dungeons",
      use_case_ko: "하이 판타지/변이된 던전",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Prop appearing too clean -> add 'weathered, grime, heavy aging' keywords."],
  common_failure_modes_ko: ["소품이 너무 깨끗해 보임 -> 'weathered, grime, heavy aging' 키워드를 추가하세요."],
  seo: {
    primary_keyword: "dungeon environment prop prompt",
    secondary_keywords: ["game level asset ai", "rpg dungeon prop design"],
    lsi_keywords: ["weathered textures", "cinematic lighting"],
    meta_title: "Dungeon Environment Props Design Prompt | Midjourney v6 Verified",
    meta_title_ko: "던전 환경 소품 디자인 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Design modular dungeon props with weathered textures. Verified Midjourney v6 prompt for level design and RPGs.",
    meta_description_ko: "풍화된 텍스처를 가진 모듈형 던전 소품을 디자인하세요. 레벨 디자인 및 RPG를 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-asset-dungeon-020-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Detailed dungeon wall torch prop design",
    alt_text_ko: "상세한 던전 벽 횃불 소품 디자인",
    width: 1024,
    height: 1024,
    format: "webp",
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
  title_ko: "몬스터 및 적 컨셉 아트",
  result_first_title: "Terrifying high-fantasy creature concept art with detailed anatomy and biological traits",
  result_first_title_ko: "상세한 해부학적 구조와 생물학적 특징을 가진 공포스러운 하이 판타지 크리처 컨셉 아트",
  short_description: "Professional concept art for game enemies and bosses, focusing on anatomical plausibility and character personality.",
  short_description_ko: "해부학적 개연성과 캐릭터성에 초점을 맞춘 게임 적 및 보스용 전문 컨셉 아트.",
  emotional_hook: "This prompt visualizes the entity of fear living within the ecosystem of that universe, not just a simple monster.",
  emotional_hook_ko: "이 프롬프트는 단순한 괴물이 아니라, 그 세계관의 생태계 속에서 살아 숨 쉬는 공포의 실체를 시각화합니다.",
  category: "game_asset",
  vertical: "character_design",
  use_cases: ["enemy_design", "boss_fight_concept", "bestiary_illustration", "character_modeling_ref"],
  use_cases_ko: ["적 디자인", "보스전 컨셉", "크리처 도감 일러스트", "캐릭터 모델링 참조"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "monster concept art, [monster_type], detailed biological anatomy, distinct texture of skin and scales, menacing pose, front and side view profile, cinematic lighting, concept art sheet style, white background, high detail --ar 16:9 --v 6 --s 350",
  negative_prompt: "cluttered background, human figure (unless hybrid), low detail, blurry features, cute, friendly, cartoonish style",
  aspect_ratio_tags: ["16:9", "concept_art", "character_design"],
  variables: [
    {
      name: "monster_type",
      name_ko: "몬스터 유형",
      placeholder: "[monster_type]",
      default_value: "abyssal deep-sea leviathan with bioluminescent lures",
      recommended_values: ["corrupted forest guardian with wooden armor", "undead necromancer king with spectral wings", "mechanical spider drone with laser sensors", "elemental lava golem with cooling crust"],
      variable_behavior_note: "Changing the monster type implements skeletal structures, skin textures, and unique abilities while maintaining the professional concept art sheet style.",
      variable_behavior_note_ko: "몬스터 유형을 변경하면 전문적인 컨셉 아트 시트 스타일을 유지하면서 골격 구조, 피부 질감 및 고유 능력을 구현합니다."
    }
  ],
  why_this_works: [
    "The 'concept art sheet style' clearly shows anatomical structures of front and side views for easy modeling.",
    "The 'biological anatomy' keyword grants 'plausibility' that the imaginary being could actually exist."
  ],
  why_this_works_ko: [
    "'concept art sheet style'은 정면과 측면의 해부학적 구조를 명확하게 보여주어 모델링 작업을 용이하게 합니다.",
    "'biological anatomy' 키워드는 가상의 존재가 실제로 존재할 수 있을 것 같은 '개연성'을 부여합니다."
  ],
  model_notes: [
    {
      model: "midjourney",
      version: "v6",
      note: "Strong representation of biological details like skin texture and muscle definition.",
      note_ko: "피부 질감과 근육 묘사와 같은 생물학적 디테일 표현이 매우 강력합니다."
    }
  ],
  comparison_notes: "Provides deep creature design inspiration on par with Monster Hunter or Bloodborne.",
  comparison_notes_ko: "몬스터 헌터(Monster Hunter)나 블러드본(Bloodborne) 수준의 깊이 있는 크리처 디자인 영감을 제공합니다.",
  variations: [
    {
      label: "Action Pose",
      label_ko: "액션 포즈",
      prompt_delta: "Replace profile view with dynamic attacking pose and environment background",
      use_case: "Promotional art",
      use_case_ko: "프로모션 아트",
      pre_generated_asset_id: null
    }
  ],
  common_failure_modes: ["Monster appearing too abstract -> reinforce with 'skeletal structure, muscle definition' keywords."],
  common_failure_modes_ko: ["몬스터가 너무 추상적으로 보임 -> 'skeletal structure, muscle definition' 키워드로 보강하세요."],
  seo: {
    primary_keyword: "monster concept art prompt",
    secondary_keywords: ["enemy design ai", "creature concept art prompt"],
    lsi_keywords: ["anatomical detail", "concept art sheet"],
    meta_title: "Monster & Enemy Concept Art Prompt | Midjourney v6 Verified",
    meta_title_ko: "몬스터 및 적 컨셉 아트 프롬프트 | 미드저니 v6 검증됨",
    meta_description: "Create professional monster and enemy concepts for games. Verified Midjourney v6 prompt for creature design.",
    meta_description_ko: "게임용 전문 몬스터 및 적 컨셉을 만드세요. 크리처 디자인을 위한 검증된 미드저니 v6 프롬프트입니다."
  },
  asset_metadata: {
    hero_image: "/images/prompts/game-asset-monster-020-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Detailed monster concept art with anatomical study",
    alt_text_ko: "해부학적 연구가 포함된 상세한 몬스터 컨셉 아트",
    width: 1600,
    height: 900,
    format: "webp",
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
