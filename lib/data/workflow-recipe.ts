import { PromptCard } from '../types';

export const headshotRecipe: PromptCard = {
  id: "recipe-headshot-001",
  slug: "professional-headshot-workflow-recipe",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Professional Headshot Workflow",
  title_ko: "전문직 헤드샷 워크플로우",
  result_first_title: "Step-by-step pipeline for creating photorealistic corporate headshots",
  result_first_title_ko: "실사 수준의 기업용 헤드샷 제작을 위한 단계별 파이프라인",
  short_description: "A complete workflow from Midjourney generation to AI upscaling and final retouching for professional profiles.",
  short_description_ko: "미드저니 생성부터 AI 업스케일링, 최종 리터칭까지 전문적인 프로필 제작을 위한 통합 워크플로우 레시피입니다.",
  emotional_hook: "This recipe guides you through the secret pipeline for transforming AI-generated images into high-authority professional business profiles.",
  emotional_hook_ko: "이 레시피는 AI가 생성한 이미지를 높은 권위가 느껴지는 전문적인 비즈니스 프로필로 탈바꿈시키는 비밀 파이프라인을 안내합니다.",
  category: "workflow_recipe",
  vertical: "portrait",
  use_cases: ["linkedin_profile", "corporate_bio", "virtual_avatar", "speaker_intro"],
  use_cases_ko: ["링크드인 프로필", "기업용 약력", "가상 아바타", "강연자 소개"],
  target_model: "midjourney",
  model_version: "v6",
  model_confidence: "tested",
  prompt_text: "professional corporate headshot of [persona], [attire], neutral studio background, soft butterfly lighting, shot on 85mm lens, f/1.8, extremely detailed skin texture, photorealistic, 8k --ar 4:5 --v 6 --s 50",
  negative_prompt: "cartoon, anime, blurry, distorted face, bad anatomy, artistic filters, heavy makeup, sunglasses, messy hair",
  aspect_ratio_tags: ["4:5", "portrait", "professional"],
  variables: [
    {
      name: "persona",
      placeholder: "[persona]",
      default_value: "confident tech executive in his 40s",
      recommended_values: ["young creative director", "experienced medical doctor", "friendly customer success manager", "modern architect"],
      variable_behavior_note: "Changing the persona modifies the subject's impression and professional vibe while maintaining the trusted studio lighting and composition.",
        name_ko: "persona",
        variable_behavior_note_ko: "Changing the persona modifies the subject's impression and professional vibe while maintaining the trusted studio lighting and composition."
    }
  ],
  why_this_works: [
    "The 85mm lens setting provides the ideal compression for portrait photography, rendering the face without distortion.",
    "Low stylize (s 50) suppresses Midjourney's artistic exaggeration to achieve realism indistinguishable from actual photography."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Use of --v 6 is mandatory for skin pore level detail.",
      note_ko: "Use of --v 6 is mandatory for skin pore level detail."
}],
  comparison_notes: "Guarantees the best profile results when integrated with upscalers like Magnific AI rather than just raw generation.",
  variations: [{ label: "Outdoor/Urban", prompt_delta: "Replace studio background with blurred modern office building background", use_case: "Casual professional", pre_generated_asset_id: null,
      label_ko: "Outdoor/Urban",
      use_case_ko: "Casual professional"
}],
  common_failure_modes: ["Unnatural eyes -> add 'symmetrical eyes, realistic catchlight' keywords."],
  seo: {
    primary_keyword: "professional headshot ai workflow",
    secondary_keywords: ["linkedin profile photo ai", "midjourney portrait recipe"],
    lsi_keywords: ["butterfly lighting", "85mm lens portrait"],
    meta_title: "Professional Headshot Workflow Recipe | PromptFlow",
    meta_description: "Master the pipeline for photorealistic AI headshots. From Midjourney v6 to final retouching.",
      meta_title_ko: "Professional Headshot Workflow Recipe | PromptFlow",
      meta_description_ko: "Master the pipeline for photorealistic AI headshots. From Midjourney v6 to final retouching."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-headshot-001-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional AI generated headshot workflow",
    alt_text_ko: "전문적인 AI 생성 헤드샷 워크플로우",
    width: 1000,
    height: 1250,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "headshot-001",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for corporate use cases." }
};

export const youtubeVideoPlanPrompt: PromptCard = {
  id: "recipe-creator-yt-002",
  slug: "youtube-video-production-plan-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "YouTube Video Production Plan",
  title_ko: "유튜브 영상 제작 플랜",
  result_first_title: "Comprehensive YouTube video production strategy from hook to call-to-action",
  result_first_title_ko: "도입부 훅부터 CTA까지 포함된 종합 유튜브 영상 제작 전략",
  short_description: "A structured workflow for planning high-engagement YouTube videos, including script structure, visual cues, and SEO optimization.",
  short_description_ko: "스크립트 구조, 시각적 큐, SEO 최적화를 포함하여 시청 참여도가 높은 유튜브 영상을 기획하기 위한 구조화된 워크플로우입니다.",
  emotional_hook: "This recipe transforms your fragmented ideas into a powerful, algorithm-friendly narrative that keeps viewers watching until the very end.",
  emotional_hook_ko: "이 레시피는 파편화된 아이디어를 강력하고 알고리즘 친화적인 서사로 바꾸어 시청자들이 끝까지 채널을 고정하게 만듭니다.",
  category: "workflow_recipe",
  vertical: "content_creation",
  use_cases: ["youtube_scripting", "video_planning", "content_strategy", "audience_retention"],
  use_cases_ko: ["유튜브 스크립트", "영상 기획", "콘텐츠 전략", "시청자 유지"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a professional YouTube Producer. Create a detailed production plan for a video titled '[video_title]'. The plan must include: 1. **The Hook (First 30s)**: High-retention intro strategy. 2. **Script Outline**: 5-step narrative structure. 3. **Visual Direction**: B-roll suggestions and on-screen text. 4. **Pacing Map**: Where to add transitions or pattern interrupts. 5. **SEO & Metadata**: Title variations and description tags. Tone: [target_tone].",
  negative_prompt: "generic advice, vague suggestions, unstructured text, long-winded paragraphs without bullet points",
  aspect_ratio_tags: ["16:9", "script", "strategy"],
  variables: [
    {
      name: "video_title",
      placeholder: "[video_title]",
      default_value: "How AI is changing the creative industry",
      recommended_values: ["10 Days with a Minimalist Lifestyle", "The Secret to Viral Marketing in 2026", "Exploring the Deepest Caves in Asia", "Top 5 Mistakes Junior Developers Make"],
      variable_behavior_note: "Changing the video title automatically generates a narrative structure optimized for that specific genre (Education, Documentary, Vlog, etc.).",
        name_ko: "video_title",
        variable_behavior_note_ko: "Changing the video title automatically generates a narrative structure optimized for that specific genre (Education, Documentary, Vlog, etc.)."
    },
    {
      name: "target_tone",
      placeholder: "[target_tone]",
      default_value: "energetic and fast-paced",
      recommended_values: ["calm and educational", "dramatic and cinematic", "humorous and casual", "professional and authoritative"],
      variable_behavior_note: "Changing the tone adjusts the vocabulary choices in the script and the overall pacing strategy of the video.",
        name_ko: "target_tone",
        variable_behavior_note_ko: "Changing the tone adjusts the vocabulary choices in the script and the overall pacing strategy of the video."
    }
  ],
  why_this_works: [
    "The 'Hook strategy' prevents early dropout and maximizes the probability of algorithm exposure.",
    "Pattern interrupt suggestions keep viewers engaged even in long-form videos, increasing overall watch time."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Exceptional at structured outlining and practical production suggestions.",
      note_ko: "Exceptional at structured outlining and practical production suggestions."
}],
  comparison_notes: "Goes beyond simple script generation to provide production guidelines that consider actual video editing and directing.",
  variations: [{ label: "Shorts Mode", prompt_delta: "Optimize for 60-second vertical format, focus on rapid-fire delivery and loops", use_case: "YouTube Shorts / TikTok", pre_generated_asset_id: null,
      label_ko: "Shorts Mode",
      use_case_ko: "YouTube Shorts / TikTok"
}],
  common_failure_modes: ["Generic content -> reinforce with 'include specific industry data and case studies' keywords."],
  seo: {
    primary_keyword: "youtube video production plan prompt",
    secondary_keywords: ["youtube script structure ai", "video marketing strategy prompt"],
    lsi_keywords: ["audience retention", "script outline"],
    meta_title: "YouTube Video Production Plan Prompt | GPT-4 Verified",
    meta_description: "Plan high-engagement YouTube videos with a structured production workflow. Verified GPT-4 prompt for scripts and strategy.",
      meta_title_ko: "YouTube Video Production Plan Prompt | GPT-4 Verified",
      meta_description_ko: "Plan high-engagement YouTube videos with a structured production workflow. Verified GPT-4 prompt for scripts and strategy."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-creator-yt-002-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Structured YouTube video production plan document",
    alt_text_ko: "구조화된 유튜브 영상 제작 계획 문서",
    width: 1200,
    height: 800,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "yt-plan-002",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for content structure." }
};

export const characterBiblePrompt: PromptCard = {
  id: "recipe-creator-char-003",
  slug: "character-bible-creation-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Master Character Bible",
  title_ko: "마스터 캐릭터 바이블",
  result_first_title: "In-depth character profile with psychological traits, backstory, and visual design",
  result_first_title_ko: "심리적 특성, 배경 스토리, 시각적 디자인을 포함한 심층 캐릭터 프로필",
  short_description: "A comprehensive framework for building complex, multidimensional characters for novels, games, or screenplays.",
  short_description_ko: "소설, 게임 또는 시나리오를 위한 복잡하고 다차원적인 캐릭터를 구축하기 위한 종합적인 프레임워크입니다.",
  emotional_hook: "This recipe carves out a living, breathing character from a blank page, giving birth to a compelling persona that readers will never forget.",
  emotional_hook_ko: "이 레시피는 빈 페이지에서 살아 숨 쉬는 캐릭터를 조각하여 독자들이 결코 잊지 못할 매력적인 인물을 탄생시킵니다.",
  category: "workflow_recipe",
  vertical: "storytelling",
  use_cases: ["novel_writing", "game_design", "screenwriting", "character_development"],
  use_cases_ko: ["소설 집필", "게임 디자인", "시나리오 작성", "캐릭터 개발"],
  target_model: "claude-3-opus",
  model_version: "current",
  model_confidence: "tested",
  prompt_text: "Act as an expert Character Architect. Develop a Master Character Bible for '[character_name]'. The profile must include: 1. **Core Identity**: Name, Age, Archetype, Role. 2. **Psychological Profile**: MBTI, Fears, Desires, Fatal Flaw. 3. **The Backstory**: Pivotal trauma or triumph that shaped them. 4. **Visual Design Guide**: Specific clothing, scars, posture, and facial features. 5. **Voice & Mannerisms**: Speech patterns and signature gestures. Genre: [story_genre].",
  negative_prompt: "cliché tropes, shallow personality, generic backstory, 2D character traits, inconsistent motivations",
  aspect_ratio_tags: ["portrait", "narrative", "personality"],
  variables: [
    {
      name: "character_name",
      placeholder: "[character_name]",
      default_value: "Elias Vance",
      recommended_values: ["Aria the Renegade Mage", "Commander Kael of the Iron Guard", "Sora, the Last Urban Fox", "Professor Morbius the Time-Thief"],
      variable_behavior_note: "The character's name helps the AI infer cultural backgrounds and world-building tones to enhance detailed settings.",
        name_ko: "character_name",
        variable_behavior_note_ko: "The character's name helps the AI infer cultural backgrounds and world-building tones to enhance detailed settings."
    },
    {
      name: "story_genre",
      placeholder: "[story_genre]",
      default_value: "Cyberpunk Dystopia",
      recommended_values: ["High Fantasy", "Contemporary Thriller", "Space Opera", "Historical Romance"],
      variable_behavior_note: "Changing the genre redesigns the character's survival methods and visual elements to match genre conventions.",
        name_ko: "story_genre",
        variable_behavior_note_ko: "Changing the genre redesigns the character's survival methods and visual elements to match genre conventions."
    }
  ],
  why_this_works: [
    "The Psychological Profile grants plausibility to character actions, aiding reader immersion.",
    "Voice & Mannerisms serve as key indicators to maintain a character's unique identity during dialogue writing."
  ],
  model_notes: [{ model: "claude-3-opus", version: "current", note: "Exceptional at exploring a character's inner world and generating creative backstories.",
      note_ko: "Exceptional at exploring a character's inner world and generating creative backstories."
}],
  comparison_notes: "Functions as a 'reference guide' to maintain character consistency throughout the creative process, beyond simple profile creation.",
  variations: [{ label: "Antagonist Mode", prompt_delta: "Focus on motivations for villainy, moral ambiguity, and the 'hidden human' side", use_case: "Villain development", pre_generated_asset_id: null,
      label_ko: "Antagonist Mode",
      use_case_ko: "Villain development"
}],
  common_failure_modes: ["Too one-dimensional -> reinforce with 'add internal conflict and contradictory desires' keywords."],
  seo: {
    primary_keyword: "character bible creation prompt",
    secondary_keywords: ["storytelling character development ai", "game character profile prompt"],
    lsi_keywords: ["psychological profile", "backstory"],
    meta_title: "Master Character Bible Prompt | Claude 3 Opus Verified",
    meta_description: "Create complex, multidimensional characters with an in-depth bible. Verified Claude 3 prompt for writers and designers.",
      meta_title_ko: "Master Character Bible Prompt | Claude 3 Opus Verified",
      meta_description_ko: "Create complex, multidimensional characters with an in-depth bible. Verified Claude 3 prompt for writers and designers."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-creator-char-003-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "In-depth character bible document illustration",
    alt_text_ko: "심층적인 캐릭터 설정집 문서 일러스트",
    width: 1000,
    height: 1250,
    format: "webp",
    placeholder: null,
    source_model: "claude-3-opus",
    source_prompt_hash: "char-bible-003",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for narrative depth." }
};

export const twitchOverlayPlanPrompt: PromptCard = {
  id: "recipe-creator-twitch-004",
  slug: "twitch-stream-overlay-design-plan-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Twitch Stream Overlay Strategy",
  title_ko: "트위치 스트림 오버레이 전략",
  result_first_title: "Strategic layout for Twitch stream overlays, widgets, and brand identity",
  result_first_title_ko: "트위치 스트림 오버레이, 위젯 및 브랜드 아이덴티티를 위한 전략적 레이아웃",
  short_description: "A layout plan for streamers to optimize their broadcast visuals, focusing on engagement, clarity, and brand consistency.",
  short_description_ko: "스트리머가 방송 비주얼을 최적화하고 시청자 참여, 명확성, 브랜드 일관성에 집중할 수 있도록 돕는 레이아웃 플랜입니다.",
  emotional_hook: "This recipe transforms your stream from simple broadcasting into a captivating digital theme park where viewers want to stay.",
  emotional_hook_ko: "이 레시피는 단순한 방송을 시청자들이 머물고 싶어 하는 매혹적인 디지털 테마파크로 탈바꿈시킵니다.",
  category: "workflow_recipe",
  vertical: "streaming",
  use_cases: ["twitch_overlay", "stream_design", "brand_identity", "viewer_engagement"],
  use_cases_ko: ["트위치 오버레이", "스트림 디자인", "브랜드 아이덴티티", "시청자 참여"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Stream Design Consultant. Plan a complete Twitch overlay system for a '[stream_genre]' channel. The plan must include: 1. **Scene Layouts**: Starting Soon, BRB, Main Game, Just Chatting. 2. **Widget Strategy**: Chat box, alert popups, sub goals. 3. **Visual Theme**: [color_palette], typography, and animation style. 4. **Brand Elements**: Logo placement and social handles. 5. **Engagement Tips**: How to use visuals to drive follows/subs.",
  negative_prompt: "generic gaming layout, cluttered screen, low visibility, inconsistent branding, distracting animations",
  aspect_ratio_tags: ["16:9", "streaming", "layout"],
  variables: [
    {
      name: "stream_genre",
      placeholder: "[stream_genre]",
      default_value: "lo-fi study and coding",
      recommended_values: ["fast-paced FPS gaming", "variety talk show", "art and digital drawing", "high-stakes competitive esports"],
      variable_behavior_note: "Changing the genre suggests a layout structure optimized for that specific audience's preference (Static focus vs Dynamic energy).",
        name_ko: "stream_genre",
        variable_behavior_note_ko: "Changing the genre suggests a layout structure optimized for that specific audience's preference (Static focus vs Dynamic energy)."
    },
    {
      name: "color_palette",
      placeholder: "[color_palette]",
      default_value: "soft lavender and dark charcoal",
      recommended_values: ["vibrant neon cyan and magenta", "clean minimalist white and slate", "warm retro orange and cream", "luxury gold and black"],
      variable_behavior_note: "Changing the color palette determines the overall emotional temperature and brand identity of the broadcast.",
        name_ko: "color_palette",
        variable_behavior_note_ko: "Changing the color palette determines the overall emotional temperature and brand identity of the broadcast."
    }
  ],
  why_this_works: [
    "Widget Strategy enables the strategic use of screen real estate for communication.",
    "Scene Layouts project a professional atmosphere throughout different phases of the broadcast, mimicking major streamers."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "High understanding of streaming platform visual grammar and viewer psychology.",
      note_ko: "High understanding of streaming platform visual grammar and viewer psychology."
}],
  comparison_notes: "Essential for establishing a perfect plan or optimizing OBS settings before commissioning professional design work.",
  variations: [{ label: "Minimalist Mode", prompt_delta: "Focus on maximum game visibility, subtle semi-transparent widgets, no facecam border", use_case: "Competitive gaming", pre_generated_asset_id: null,
      label_ko: "Minimalist Mode",
      use_case_ko: "Competitive gaming"
}],
  common_failure_modes: ["Overly cluttered screen -> reinforce with 'prioritize game screen, 30% max overlay coverage' keywords."],
  seo: {
    primary_keyword: "twitch stream overlay strategy prompt",
    secondary_keywords: ["stream layout design ai", "twitch brand identity prompt"],
    lsi_keywords: ["widget strategy", "scene layouts"],
    meta_title: "Twitch Stream Overlay Strategy Prompt | GPT-4 Verified",
    meta_description: "Optimize your Twitch broadcast with a strategic overlay and widget plan. Verified GPT-4 prompt for streamers.",
      meta_title_ko: "Twitch Stream Overlay Strategy Prompt | GPT-4 Verified",
      meta_description_ko: "Optimize your Twitch broadcast with a strategic overlay and widget plan. Verified GPT-4 prompt for streamers."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-creator-twitch-004-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Strategic Twitch stream overlay layout plan",
    alt_text_ko: "전략적인 트위치 스트림 오버레이 레이아웃 플랜",
    width: 1920,
    height: 1080,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "twitch-plan-004",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for streaming UI/UX." }
};

export const nftCollectionConceptPrompt: PromptCard = {
  id: "recipe-creator-nft-005",
  slug: "nft-collection-concept-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "NFT Collection Master Concept",
  title_ko: "NFT 컬렉션 마스터 컨셉",
  result_first_title: "Unique NFT collection theme with traits, rarity system, and roadmap",
  result_first_title_ko: "특성, 희귀도 시스템 및 로드맵을 포함한 고유한 NFT 컬렉션 테마",
  short_description: "A strategic framework for planning generative NFT collections, covering artistic theme, trait categories, and utility.",
  short_description_ko: "예술적 테마, 특성 카테고리, 유틸리티를 아우르는 제너러티브 NFT 컬렉션 기획을 위한 전략적 프레임워크입니다.",
  emotional_hook: "This prompt imbues digital assets with unique value and narrative, transforming simple art into a powerful branded project.",
  emotional_hook_ko: "이 프롬프트는 디지털 자산에 고유한 가치와 서사를 불어넣어, 단순한 예술품을 강력한 브랜드 프로젝트로 변화시킵니다.",
  category: "workflow_recipe",
  vertical: "web3",
  use_cases: ["nft_planning", "generative_art", "web3_marketing", "crypto_project"],
  use_cases_ko: ["NFT 기획", "제너러티브 아트", "Web3 마케팅", "크립토 프로젝트"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Web3 Brand Strategist. Plan a 10k generative NFT collection concept for '[collection_theme]'. Include: 1. **The Lore**: Compelling backstory for the characters/objects. 2. **Art Style**: Specific visual direction (e.g., [art_style]). 3. **Trait Categories**: 5-7 categories (Head, Eyes, Body, etc.) with example traits. 4. **Rarity Tiers**: Rare vs Legend traits strategy. 5. **Utility & Roadmap**: What do holders get? (e.g., [utility_type]).",
  negative_prompt: "generic ape clones, low effort derivatives, vague roadmap, boring traits, standard web3 buzzwords without substance",
  aspect_ratio_tags: ["1:1", "generative", "web3"],
  variables: [
    {
      name: "collection_theme",
      placeholder: "[collection_theme]",
      default_value: "cyberpunk nomads of Mars",
      recommended_values: ["mythological creatures in business suits", "floating architectural islands", "abstract liquid geometric shapes", "historical figures as street artists"],
      variable_behavior_note: "Changing the collection theme shifts the world-building and the target collector audience.",
        name_ko: "collection_theme",
        variable_behavior_note_ko: "Changing the collection theme shifts the world-building and the target collector audience."
    },
    {
      name: "art_style",
      placeholder: "[art_style]",
      default_value: "hand-drawn retro anime style",
      recommended_values: ["3D hyper-realistic glass textures", "minimalist vector silhouettes", "pixel art 32x32", "painterly oil brushstrokes"],
      variable_behavior_note: "Changing the art style modifies the generation guidelines for individual trait layers.",
        name_ko: "art_style",
        variable_behavior_note_ko: "Changing the art style modifies the generation guidelines for individual trait layers."
    }
  ],
  why_this_works: [
    "The Trait Categories suggestion helps in systematically planning sources for generative art engines.",
    "Utility & Roadmap serves as a marketing tool to prove long-term value to investors."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Excellent at planning with consideration for market trends and technical feasibility.",
      note_ko: "Excellent at planning with consideration for market trends and technical feasibility."
}],
  comparison_notes: "Provides a professional project blueprint by analyzing the common elements of successful NFT projects.",
  variations: [{ label: "Art Focus", prompt_delta: "Focus heavily on the visual evolution and unique artistic techniques, less on utility", use_case: "Fine art NFT drops", pre_generated_asset_id: null,
      label_ko: "Art Focus",
      use_case_ko: "Fine art NFT drops"
}],
  common_failure_modes: ["If content is too generic -> reinforce with 'introduce a unique twist or cross-genre fusion' keywords."],
  seo: {
    primary_keyword: "nft collection concept prompt",
    secondary_keywords: ["generative art planning ai", "web3 brand strategy prompt"],
    lsi_keywords: ["trait categories", "rarity tiers"],
    meta_title: "NFT Collection Concept Prompt | GPT-4 Verified",
    meta_description: "Plan a successful generative NFT collection with unique lore and traits. Verified GPT-4 prompt for Web3 creators.",
      meta_title_ko: "NFT Collection Concept Prompt | GPT-4 Verified",
      meta_description_ko: "Plan a successful generative NFT collection with unique lore and traits. Verified GPT-4 prompt for Web3 creators."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-creator-nft-005-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Detailed NFT collection concept roadmap and traits document",
    alt_text_ko: "상세한 NFT 컬렉션 컨셉 로드맵 및 특성 문서",
    width: 1200,
    height: 1200,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "nft-plan-005",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for Web3 market logic." }
};

export const podcastOutlinePrompt: PromptCard = {
  id: "recipe-creator-pod-006",
  slug: "podcast-episode-outline-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Podcast Series Outline",
  title_ko: "팟캐스트 시리즈 아웃라인",
  result_first_title: "Structured podcast episode flow with guest questions, intro, and call-to-action",
  result_first_title_ko: "게스트 질문, 도입부, CTA를 포함한 구조화된 팟캐스트 에피소드 흐름",
  short_description: "A complete framework for planning professional podcast episodes, ensuring a smooth conversational flow and clear listener value.",
  short_description_ko: "매끄러운 대화 흐름과 명확한 청취자 가치를 보장하는 전문적인 팟캐스트 에피소드 기획을 위한 종합 프레임워크입니다.",
  emotional_hook: "This recipe designs a conversational rhythm that captivates listeners' ears, creating a lingering audio experience rather than simple chatter.",
  emotional_hook_ko: "이 레시피는 청취자의 귀를 사로잡는 대화의 리듬을 설계하여, 단순한 잡담이 아닌 여운이 남는 오디오 경험을 선사합니다.",
  category: "workflow_recipe",
  vertical: "audio_content",
  use_cases: ["podcast_planning", "interview_prep", "audio_content_strategy", "brand_storytelling"],
  use_cases_ko: ["팟캐스트 기획", "인터뷰 준비", "오디오 콘텐츠 전략", "브랜드 스토리텔링"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Podcast Showrunner. Outline a 30-minute episode for '[podcast_topic]'. Include: 1. **The Hook (Intro)**: Engaging opening statement. 2. **Segment 1 (The Why)**: Core problem or topic exploration. 3. **Segment 2 (Deep Dive)**: 3-5 key points or guest questions. 4. **The Wrap-up**: Key takeaways and summary. 5. **CTA**: Dynamic call-to-action for listeners. Guest Profile: [guest_description].",
  negative_prompt: "monotone script, generic questions, unstructured rambling, lack of listener value, boring transitions",
  aspect_ratio_tags: ["audio", "outline", "interview"],
  variables: [
    {
      name: "podcast_topic",
      placeholder: "[podcast_topic]",
      default_value: "the psychology of modern dating",
      recommended_values: ["startup failure and comeback stories", "future of sustainable architecture", "behind the scenes of indie game dev", "investing in your 20s for long-term wealth"],
      variable_behavior_note: "Changing the episode topic automatically generates target questions that listeners would be curious about, tailored to the specific genre.",
        name_ko: "podcast_topic",
        variable_behavior_note_ko: "Changing the episode topic automatically generates target questions that listeners would be curious about, tailored to the specific genre."
    },
    {
      name: "guest_description",
      placeholder: "[guest_description]",
      default_value: "a behavioral psychologist with 20 years experience",
      recommended_values: ["a serial entrepreneur with 3 failed exits", "a lead designer at a Fortune 500 company", "a solo developer of a viral mobile game", "a professional minimalist and author"],
      variable_behavior_note: "Changing the guest profile adjusts the depth of the interview and the technicality of the questions.",
        name_ko: "guest_description",
        variable_behavior_note_ko: "Changing the guest profile adjusts the depth of the interview and the technicality of the questions."
    }
  ],
  why_this_works: [
    "The segmented flow serves as a guideline ensuring listeners don't lose the core context through audio alone.",
    "Guest profile-based question generation leads to insightful conversations that go beyond generic inquiries."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Excellent at balancing natural conversational flow with effective information delivery.",
      note_ko: "Excellent at balancing natural conversational flow with effective information delivery."
}],
  comparison_notes: "Incorporates the planning expertise of professional audio producers to ensure stable, accident-free broadcasting.",
  variations: [{ label: "Solo Episode", prompt_delta: "Change guest questions to personal narrative storytelling beats and reflection points", use_case: "Solo commentary podcasts", pre_generated_asset_id: null,
      label_ko: "Solo Episode",
      use_case_ko: "Solo commentary podcasts"
}],
  common_failure_modes: ["Too textbook-like -> reinforce with 'add personal anecdotes and controversial opinion prompts' keywords."],
  seo: {
    primary_keyword: "podcast episode outline prompt",
    secondary_keywords: ["podcast script ai planner", "interview prep workflow prompt"],
    lsi_keywords: ["conversational flow", "listener value"],
    meta_title: "Podcast Series Outline Prompt | GPT-4 Verified",
    meta_description: "Plan professional podcast episodes with a structured flow and engaging questions. Verified GPT-4 prompt for audio creators.",
      meta_title_ko: "Podcast Series Outline Prompt | GPT-4 Verified",
      meta_description_ko: "Plan professional podcast episodes with a structured flow and engaging questions. Verified GPT-4 prompt for audio creators."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-creator-pod-006-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Structured podcast episode outline document",
    alt_text_ko: "구조화된 팟캐스트 에피소드 아웃라인 문서",
    width: 1000,
    height: 1500,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "pod-plan-006",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for audio pacing." }
};

export const webtoonChapterPlanPrompt: PromptCard = {
  id: "recipe-creator-webtoon-007",
  slug: "webtoon-chapter-storyboard-plan-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Webtoon Chapter Plan",
  title_ko: "웹툰 회차 기획",
  result_first_title: "Dynamic webtoon storyboard plan with panel flow, dialogue, and cliffhanger",
  result_first_title_ko: "컷 흐름, 대사, 클리프행어를 포함한 다이나믹 웹툰 스토리보드 플랜",
  short_description: "A specialized framework for webtoon/manga creators to plan a single chapter's narrative flow and visual composition.",
  short_description_ko: "웹툰/만화 작가가 단일 회차의 서사 흐름과 시각적 구도를 기획하기 위한 특화된 프레임워크입니다.",
  emotional_hook: "This recipe controls the reader's heart rate with every scroll, making it impossible to stop without seeing the next episode.",
  emotional_hook_ko: "이 레시피는 스크롤을 내릴 때마다 독자의 심박수를 조절하여, 다음 화를 보지 않고는 못 배기게 만듭니다.",
  category: "workflow_recipe",
  vertical: "comics",
  use_cases: ["webtoon_writing", "storyboarding", "manga_creation", "comic_planning"],
  use_cases_ko: ["웹툰 집필", "스토리보딩", "만화 제작", "코믹 기획"],
  target_model: "claude-3-opus",
  model_version: "current",
  model_confidence: "tested",
  prompt_text: "Act as a Webtoon Story Director. Plan Chapter [chapter_num] for a '[story_genre]' webtoon. The plan must include: 1. **Core Objective**: The main event of this chapter. 2. **Panel Flow (60-80 panels)**: Narrative beats divided into 5 main sections. 3. **Key Visual Moments**: 3 'High-impact' panels description. 4. **Dialogue & Internal Monologue**: Key lines for [main_character]. 5. **The Cliffhanger**: Strategic ending to drive next-chapter clicks.",
  negative_prompt: "generic story summary, lack of visual descriptions, flat pacing, missing tension, boring dialogue",
  aspect_ratio_tags: ["vertical", "storyboard", "comics"],
  variables: [
    {
      name: "story_genre",
      placeholder: "[story_genre]",
      default_value: "Action Fantasy with leveling system",
      recommended_values: ["Modern Office Romance", "Psychological Horror", "Slice of Life Drama", "Historical Martial Arts"],
      variable_behavior_note: "Changing the genre automatically adjusts webtoon-specific directing techniques (Fast-paced action cuts vs emotional negative space).",
        name_ko: "story_genre",
        variable_behavior_note_ko: "Changing the genre automatically adjusts webtoon-specific directing techniques (Fast-paced action cuts vs emotional negative space)."
    },
    {
      name: "main_character",
      placeholder: "[main_character]",
      default_value: "Jin, the reluctant hero",
      recommended_values: ["Sara, the ambitious CEO", "The mysterious masked observer", "Min, a high school student with a secret", "Elder Wei, the ancient master"],
      variable_behavior_note: "The character's personality adjusts the tone of dialogue and the depth of internal monologues.",
        name_ko: "main_character",
        variable_behavior_note_ko: "The character's personality adjusts the tone of dialogue and the depth of internal monologues."
    }
  ],
  why_this_works: [
    "Panel Flow provides an optimized rhythm for the webtoon's vertical scrolling format, enhancing readability.",
    "The Cliffhanger includes strategies to drive 'next-chapter payments,' directly linked to the profitability of webtoon platforms."
  ],
  model_notes: [{ model: "claude-3-opus", version: "current", note: "Exceptional at implementing visual directing and psychological tension through text.",
      note_ko: "Exceptional at implementing visual directing and psychological tension through text."
}],
  comparison_notes: "Reflects the weekly serialization process of actual webtoon artists, supporting efficient pre-storyboard planning.",
  variations: [{ label: "Romance Focus", prompt_delta: "Focus on emotional tension, subtle facial expressions in key panels, and internal monologue", use_case: "Romance/Drama webtoons", pre_generated_asset_id: null,
      label_ko: "Romance Focus",
      use_case_ko: "Romance/Drama webtoons"
}],
  common_failure_modes: ["Too much content -> reinforce with 'break down into 10 key storyboard beats' keywords."],
  seo: {
    primary_keyword: "webtoon chapter storyboard plan prompt",
    secondary_keywords: ["comic storyboarding ai guide", "manga script workflow prompt"],
    lsi_keywords: ["panel flow", "cliffhanger strategy"],
    meta_title: "Webtoon Chapter Plan Prompt | Claude 3 Opus Verified",
    meta_description: "Plan dynamic webtoon chapters with optimized panel flow and cliffhangers. Verified Claude 3 prompt for creators.",
      meta_title_ko: "Webtoon Chapter Plan Prompt | Claude 3 Opus Verified",
      meta_description_ko: "Plan dynamic webtoon chapters with optimized panel flow and cliffhangers. Verified Claude 3 prompt for creators."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-creator-webtoon-007-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Vertical webtoon storyboard planning document",
    alt_text_ko: "세로형 웹툰 스토리보드 기획 문서",
    width: 800,
    height: 2000,
    format: "webp",
    placeholder: null,
    source_model: "claude-3-opus",
    source_prompt_hash: "webtoon-plan-007",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for vertical pacing." }
};

export const artStyleGuidePrompt: PromptCard = {
  id: "recipe-creator-art-008",
  slug: "digital-art-style-guide-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Digital Art Style Guide",
  title_ko: "디지털 아트 스타일 가이드",
  result_first_title: "Consistent art style guide with color palette, brush settings, and texture rules",
  result_first_title_ko: "색상 팔레트, 브러시 설정, 질감 규칙을 포함한 일관된 아트 스타일 가이드",
  short_description: "A technical manual for digital artists and illustrators to maintain a consistent visual identity across a series or project.",
  short_description_ko: "디지털 아티스트와 일러스트레이터가 시리즈나 프로젝트 전반에 걸쳐 일관된 시각적 정체성을 유지하기 위한 기술 매뉴얼입니다.",
  emotional_hook: "This prompt defines your artistic taste as clear rules, ensuring your unique signature is felt in every work.",
  emotional_hook_ko: "이 프롬프트는 당신의 예술적 취향을 명확한 규칙으로 정의하여, 모든 작품에서 당신만의 고유한 서명이 느껴지도록 합니다.",
  category: "workflow_recipe",
  vertical: "digital_art",
  use_cases: ["art_direction", "illustration_system", "game_art_guide", "consistent_branding"],
  use_cases_ko: ["아트 디렉션", "일러스트레이션 시스템", "게임 아트 가이드", "일관된 브랜딩"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Lead Concept Artist. Create a Digital Art Style Guide for a project titled '[project_title]'. Include: 1. **Core Visual Philosophy**: (e.g., [art_aesthetic]). 2. **Color System**: Primary/Secondary/Accent palettes with HEX/RGB. 3. **Line & Shape Language**: Sharp vs Soft rules. 4. **Rendering Rules**: Lighting, shading style, and texture application. 5. **Brush Recommendations**: Types of brushes to achieve the look.",
  negative_prompt: "vague artistic advice, random color choices, lack of technical depth, inconsistent style rules",
  aspect_ratio_tags: ["palette", "art", "guide"],
  variables: [
    {
      name: "art_aesthetic",
      placeholder: "[art_aesthetic]",
      default_value: "modern painterly impressionism with high saturation",
      recommended_values: ["clean flat vector with isometric depth", "gritty noir comic style with heavy ink", "cyberpunk neon glow with chromatic aberration", "soft watercolor storybook aesthetic"],
      variable_behavior_note: "Changing the aesthetic style completely redesigns the color harmony and recommended brush textures.",
        name_ko: "art_aesthetic",
        variable_behavior_note_ko: "Changing the aesthetic style completely redesigns the color harmony and recommended brush textures."
    }
  ],
  why_this_works: [
    "Line & Shape Language serves as a core specification ensuring all artists in a team project work with a unified style.",
    "Rendering Rules guarantee the visual completeness of the project by standardizing lighting and texture processing."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Provides highly practical guidelines due to deep understanding of art theory and visual composition principles.",
      note_ko: "Provides highly practical guidelines due to deep understanding of art theory and visual composition principles."
}],
  comparison_notes: "Provides a streamlined version of the 'Art Bible' structure used by global game studios and animation production companies.",
  variations: [{ label: "Character Focus", prompt_delta: "Add specific rules for skin tones, eye rendering, and hair highlights", use_case: "Character design systems", pre_generated_asset_id: null,
      label_ko: "Character Focus",
      use_case_ko: "Character design systems"
}],
  common_failure_modes: ["Abstract descriptions -> reinforce with 'provide specific Photoshop/Procreate setting examples' keywords."],
  seo: {
    primary_keyword: "digital art style guide prompt",
    secondary_keywords: ["art direction ai manual", "consistent illustration system prompt"],
    lsi_keywords: ["color system", "rendering rules"],
    meta_title: "Digital Art Style Guide Prompt | GPT-4 Verified",
    meta_description: "Maintain a consistent visual identity in your digital art projects. Verified GPT-4 prompt for artists and directors.",
      meta_title_ko: "Digital Art Style Guide Prompt | GPT-4 Verified",
      meta_description_ko: "Maintain a consistent visual identity in your digital art projects. Verified GPT-4 prompt for artists and directors."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-creator-art-008-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional digital art style guide with color swatches",
    alt_text_ko: "색상 스와치가 포함된 전문적인 디지털 아트 스타일 가이드",
    width: 1200,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "art-guide-008",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for artistic consistency." }
};

export const portfolioCuratorPrompt: PromptCard = {
  id: "recipe-creator-port-009",
  slug: "portfolio-curation-strategy-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Portfolio Curator Plan",
  title_ko: "포트폴리오 큐레이터 플랜",
  result_first_title: "Strategic portfolio selection and storytelling framework for career growth",
  result_first_title_ko: "커리어 성장을 위한 전략적 포트폴리오 선정 및 스토리텔링 프레임워크",
  short_description: "A workflow for artists and designers to select, arrange, and narrate their best work to land high-end clients or jobs.",
  short_description_ko: "아티스트와 디자이너가 최고의 결과물을 선정하고 배치하며 서사를 부여하여, 하이엔드 클라이언트나 기업의 선택을 받기 위한 워크플로우입니다.",
  emotional_hook: "Beyond a simple list of works, this prompt provides a strategic curation that turns your career into a legend.",
  emotional_hook_ko: "단순한 작품 리스트를 넘어, 이 프롬프트는 당신의 커리어를 하나의 전설로 만드는 전략적 큐레이션을 제공합니다.",
  category: "workflow_recipe",
  vertical: "career",
  use_cases: ["portfolio_building", "job_application", "freelance_pitching", "personal_branding"],
  use_cases_ko: ["포트폴리오 구축", "입사 지원", "프리랜서 피칭", "퍼스널 브랜딩"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Creative Director & Career Coach. Plan a portfolio curation strategy for a '[creative_field]'. Include: 1. **The Hero Shot**: Identifying the 'Top 3' projects that define you. 2. **Storytelling Structure**: How to write case studies (Problem-Solution-Result). 3. **Visual Flow**: Arrangement of works for maximum impact. 4. **Self-Branding**: Consistent bio and visual identity. 5. **Platform Strategy**: Customizing for [target_platform].",
  negative_prompt: "generic resume advice, random list of projects, boring bio, lack of professional focus, messy layout suggestions",
  aspect_ratio_tags: ["curation", "career", "branding"],
  variables: [
    {
      name: "creative_field",
      placeholder: "[creative_field]",
      default_value: "UI/UX Designer for Fintech",
      recommended_values: ["3D Environment Artist for AAA Games", "Commercial Fashion Photographer", "Motion Graphics Designer", "Brand Identity Specialist"],
      variable_behavior_note: "Changing the creative field suggests core competencies and portfolio grammar most valued by industry recruiters.",
        name_ko: "creative_field",
        variable_behavior_note_ko: "Changing the creative field suggests core competencies and portfolio grammar most valued by industry recruiters."
    },
    {
      name: "target_platform",
      placeholder: "[target_platform]",
      default_value: "Behance and LinkedIn",
      recommended_values: ["ArtStation", "Dribbble", "Personal Website", "PDF Pitch Deck for Agencies"],
      variable_behavior_note: "Changing the target platform adjusts the upload strategy to fit each platform's visual specs and community traits.",
        name_ko: "target_platform",
        variable_behavior_note_ko: "Changing the target platform adjusts the upload strategy to fit each platform's visual specs and community traits."
    }
  ],
  why_this_works: [
    "The Storytelling Structure proves your 'problem-solving ability' rather than just results, increasing hiring probability.",
    "Visual Flow designs powerful visual cues that convince recruiters of your skills in just 3 seconds."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Deep insights into global hiring market trends and portfolio aesthetics.",
      note_ko: "Deep insights into global hiring market trends and portfolio aesthetics."
}],
  comparison_notes: "Provides a premium curation strategy to position you as a 'unique expert' among numerous applicants.",
  variations: [{ label: "Freelance Pitch", prompt_delta: "Focus on ROI, testimonials, and specific service packages for direct clients", use_case: "Freelance business growth", pre_generated_asset_id: null,
      label_ko: "Freelance Pitch",
      use_case_ko: "Freelance business growth"
}],
  common_failure_modes: ["Low number of works -> reinforce with 'how to use personal projects and process shots' keywords."],
  seo: {
    primary_keyword: "portfolio curation strategy prompt",
    secondary_keywords: ["creative career coaching ai", "artstation portfolio guide prompt"],
    lsi_keywords: ["storytelling structure", "visual flow"],
    meta_title: "Portfolio Curator Plan Prompt | GPT-4 Verified",
    meta_description: "Build a high-impact creative portfolio with a strategic curation plan. Verified GPT-4 prompt for designers and artists.",
      meta_title_ko: "Portfolio Curator Plan Prompt | GPT-4 Verified",
      meta_description_ko: "Build a high-impact creative portfolio with a strategic curation plan. Verified GPT-4 prompt for designers and artists."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-creator-port-009-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Strategic portfolio layout and storytelling map",
    alt_text_ko: "전략적인 포트폴리오 레이아웃 및 스토리텔링 맵",
    width: 1200,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "port-plan-009",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for career strategy." }
};

export const marketResearchPlanPrompt: PromptCard = {
  id: "recipe-biz-research-010",
  slug: "market-research-execution-plan-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Market Research Plan",
  title_ko: "시장 조사 플랜",
  result_first_title: "Structured market research strategy covering competitors, audience, and trends",
  result_first_title_ko: "경쟁사, 타겟, 트렌드를 아우르는 구조화된 시장 조사 전략",
  short_description: "A comprehensive workflow for conducting deep market analysis to validate business ideas and identify growth opportunities.",
  short_description_ko: "비즈니스 아이디어를 검증하고 성장 기회를 식별하기 위해 심층적인 시장 분석을 수행하는 종합 워크플로우입니다.",
  emotional_hook: "This recipe lights the lantern of data in a foggy market, clearly illuminating the path with the highest probability of winning.",
  emotional_hook_ko: "이 레시피는 안개 낀 시장에서 데이터의 등불을 밝혀, 승리 확률이 가장 높은 길을 명확하게 비춥니다.",
  category: "workflow_recipe",
  vertical: "business_strategy",
  use_cases: ["market_validation", "competitor_analysis", "new_product_planning", "business_strategy"],
  use_cases_ko: ["시장 검증", "경쟁사 분석", "신제품 기획", "비즈니스 전략"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Senior Market Research Analyst. Create a detailed research plan for '[business_sector]'. Include: 1. **Competitor Landscaping**: Top 3 competitors and their SWOT. 2. **Target Audience Profile**: Demographics, Psychographics, and buying behavior. 3. **Market Trends (2026)**: Key shifts and emerging technologies. 4. **Data Collection Methods**: Survey design, interview questions, and secondary research sources. 5. **Actionable Insights**: Expected outcome and decision-making framework. Geography: [target_region].",
  negative_prompt: "generic market advice, shallow overview, lack of data-driven methods, vague competitor list, non-actionable results",
  aspect_ratio_tags: ["strategy", "research", "business"],
  variables: [
    {
      name: "business_sector",
      placeholder: "[business_sector]",
      default_value: "sustainable vertical farming in urban areas",
      recommended_values: ["decentralized identity (DID) for fintech", "luxury pet wellness and longevity", "on-demand mental health for Gen Z", "AI-driven supply chain optimization"],
      variable_behavior_note: "Changing the sector redesigns the competitive landscape and key customer personas to match industry traits.",
        name_ko: "business_sector",
        variable_behavior_note_ko: "Changing the sector redesigns the competitive landscape and key customer personas to match industry traits."
    },
    {
      name: "target_region",
      placeholder: "[target_region]",
      default_value: "North America and Europe",
      recommended_values: ["Southeast Asia (emerging markets)", "Global (SaaS focus)", "South Korea (high-tech focus)", "Middle East (infrastructure focus)"],
      variable_behavior_note: "Changing the target region suggests research methods reflecting cultural backgrounds, regulatory environments, and market maturity.",
        name_ko: "target_region",
        variable_behavior_note_ko: "Changing the target region suggests research methods reflecting cultural backgrounds, regulatory environments, and market maturity."
    }
  ],
  why_this_works: [
    "Competitor Landscaping helps identify your market position through objective metrics rather than vague guesses.",
    "The Target Audience Profile serves as foundational data to deliver messages to core targets without wasting marketing costs."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Powerful logic in structuring vast industrial data and deriving key strategies.",
      note_ko: "Powerful logic in structuring vast industrial data and deriving key strategies."
}],
  comparison_notes: "Reproduces the initial research framework of global strategy consulting firms like McKinsey or Bain & Company.",
  variations: [{ label: "Competitor Focus", prompt_delta: "Deep dive into competitor product pricing and feature comparison matrix", use_case: "Competitive pricing strategy", pre_generated_asset_id: null,
      label_ko: "Competitor Focus",
      use_case_ko: "Competitive pricing strategy"
}],
  common_failure_modes: ["Comprehensive info -> reinforce with 'focus on niche market segments and specific entry barriers' keywords."],
  seo: {
    primary_keyword: "market research plan prompt",
    secondary_keywords: ["business validation ai workflow", "competitor analysis strategy prompt"],
    lsi_keywords: ["competitor landscaping", "target audience profile"],
    meta_title: "Market Research Plan Prompt | GPT-4 Verified",
    meta_description: "Conduct deep market research with a structured analyst-grade plan. Verified GPT-4 prompt for business validation.",
      meta_title_ko: "Market Research Plan Prompt | GPT-4 Verified",
      meta_description_ko: "Conduct deep market research with a structured analyst-grade plan. Verified GPT-4 prompt for business validation."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-research-010-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Detailed market research strategy and data map",
    alt_text_ko: "상세한 시장 조사 전략 및 데이터 맵",
    width: 1200,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "research-010",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for strategic depth." }
};

export const productRoadmapPrompt: PromptCard = {
  id: "recipe-biz-roadmap-011",
  slug: "product-roadmap-planning-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Strategic Product Roadmap",
  title_ko: "전략적 제품 로드맵",
  result_first_title: "Clear and executable product roadmap with phases, features, and milestones",
  result_first_title_ko: "단계, 기능 및 마일스톤이 포함된 명확하고 실행 가능한 제품 로드맵",
  short_description: "A framework for product managers to plan long-term product evolution, prioritizing features based on user value and technical effort.",
  short_description_ko: "사용자 가치와 기술적 노력을 바탕으로 기능의 우선순위를 정하고, 제품의 장기적인 진화를 기획하기 위한 프로덕트 매니저용 프레임워크입니다.",
  emotional_hook: "This recipe finds the North Star of your brand among complex development requirements and designs the shortest path to reach it.",
  emotional_hook_ko: "이 레시피는 복잡한 개발 요구사항 속에서 브랜드의 북극성(North Star)을 찾아내고, 그곳에 도달하기 위한 최단 경로를 설계합니다.",
  category: "workflow_recipe",
  vertical: "product_management",
  use_cases: ["product_planning", "stakeholder_alignment", "agile_development", "feature_prioritization"],
  use_cases_ko: ["제품 기획", "이해관계자 조율", "애자일 개발", "기능 우선순위 설정"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Senior Product Manager. Create a 12-month Strategic Roadmap for '[product_name]'. The roadmap must include: 1. **North Star Metric**: The primary goal. 2. **Phase 1 (MVP/Foundation)**: Core features and stability. 3. **Phase 2 (Growth)**: User acquisition features and integrations. 4. **Phase 3 (Optimization)**: Advanced AI features and scale. 5. **Resource Map**: Estimated dev/design effort. Product Focus: [product_type].",
  negative_prompt: "simple list of features, lack of strategic phases, unrealistic timeline, missing goal metrics, vague prioritization",
  aspect_ratio_tags: ["roadmap", "timeline", "product"],
  variables: [
    {
      name: "product_name",
      placeholder: "[product_name]",
      default_value: "Aura: AI Meditation & Sleep Assistant",
      recommended_values: ["Nexus: Decentralized B2B Marketplace", "Orbit: Personal Wealth Management Bot", "Flow: Team Productivity Dashboard", "EcoTrack: Carbon Footprint Monitor"],
      variable_behavior_note: "Changing the product name defines the long-term vision and core feature sets in accordance with industry standards.",
        name_ko: "product_name",
        variable_behavior_note_ko: "Changing the product name defines the long-term vision and core feature sets in accordance with industry standards."
    },
    {
      name: "product_type",
      placeholder: "[product_type]",
      default_value: "Mobile-first SaaS for Wellness",
      recommended_values: ["Enterprise Web Platform", "Blockchain dApp", "AI-powered Desktop App", "IoT Consumer Device"],
      variable_behavior_note: "Changing the product type reconstructs milestones based on development difficulty and market entry strategies.",
        name_ko: "product_type",
        variable_behavior_note_ko: "Changing the product type reconstructs milestones based on development difficulty and market entry strategies."
    }
  ],
  why_this_works: [
    "The North Star Metric keeps the entire team focused on a single core value without dispersion.",
    "The Phase-based structure cautions against hasty expansion and presents a logical sequence for solid growth."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Superb at designing roadmaps that harmonize business logic with technical feasibility.",
      note_ko: "Superb at designing roadmaps that harmonize business logic with technical feasibility."
}],
  comparison_notes: "Provides the roadmap framework used by Silicon Valley unicorns to align product vision with execution.",
  variations: [{ label: "Feature Focus", prompt_delta: "Deep dive into feature prioritization matrix using RICE framework", use_case: "Granular planning", pre_generated_asset_id: null,
      label_ko: "Feature Focus",
      use_case_ko: "Granular planning"
}],
  common_failure_modes: ["Tight schedule -> reinforce with 'build in 20% buffer for technical debt and R&D' keywords."],
  seo: {
    primary_keyword: "product roadmap planning prompt",
    secondary_keywords: ["pm product strategy ai", "agile roadmap workflow prompt"],
    lsi_keywords: ["north star metric", "strategic phases"],
    meta_title: "Strategic Product Roadmap Prompt | GPT-4 Verified",
    meta_description: "Plan your product's future with a structured strategic roadmap. Verified GPT-4 prompt for product managers and founders.",
      meta_title_ko: "Strategic Product Roadmap Prompt | GPT-4 Verified",
      meta_description_ko: "Plan your product's future with a structured strategic roadmap. Verified GPT-4 prompt for product managers and founders."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-roadmap-011-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Strategic product roadmap with phases and milestones",
    alt_text_ko: "단계 및 마일스톤이 포함된 전략적 제품 로드맵",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "roadmap-011",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for product strategy." }
};

export const seoStrategyPrompt: PromptCard = {
  id: "recipe-biz-seo-012",
  slug: "advanced-seo-content-strategy-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Advanced SEO Strategy",
  title_ko: "어드밴스드 SEO 전략",
  result_first_title: "In-depth SEO plan with keyword clusters, content pillars, and technical audit",
  result_first_title_ko: "키워드 클러스터, 콘텐츠 필러 및 기술적 오딧을 포함한 심층 SEO 플랜",
  short_description: "A professional SEO workflow to dominate search rankings, focusing on semantic search, topical authority, and technical health.",
  short_description_ko: "시맨틱 검색, 주제별 권위(Topical Authority), 기술적 건전성에 집중하여 검색 순위를 장악하기 위한 전문 SEO 워크플로우입니다.",
  emotional_hook: "Beyond just increasing traffic, this recipe ensures your brand becomes the most trusted 'answer' in its field.",
  emotional_hook_ko: "단순한 트래픽 증가를 넘어, 이 레시피는 당신의 브랜드가 해당 분야에서 가장 신뢰받는 '정답'이 되도록 보장합니다.",
  category: "workflow_recipe",
  vertical: "digital_marketing",
  use_cases: ["organic_growth", "content_marketing", "website_audit", "search_optimization"],
  use_cases_ko: ["유기적 성장", "콘텐츠 마케팅", "웹사이트 오딧", "검색 최적화"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Senior SEO Strategist. Develop an Advanced SEO Plan for '[website_topic]'. Include: 1. **Keyword Cluster Analysis**: 5 main topics and 20+ LSI keywords. 2. **Content Pillar Strategy**: Structure for 3 high-authority pillar pages. 3. **Topical Authority Map**: How to link content to show expertise. 4. **Technical SEO Checklist**: Speed, Schema, and Core Web Vitals. 5. **Backlink Outreach Plan**: Strategy for [outreach_target].",
  negative_prompt: "basic keyword list, old-school keyword stuffing advice, lack of semantic context, vague technical steps, non-specific outreach",
  aspect_ratio_tags: ["seo", "marketing", "growth"],
  variables: [
    {
      name: "website_topic",
      placeholder: "[website_topic]",
      default_value: "remote work tools and productivity hacks",
      recommended_values: ["luxury eco-friendly skincare reviews", "cryptocurrency investing for beginners", "modern home interior design trends", "advanced python programming for data science"],
      variable_behavior_note: "Changing the topic automatically generates a keyword map and content structure that aligns with Google's search intent.",
        name_ko: "website_topic",
        variable_behavior_note_ko: "Changing the topic automatically generates a keyword map and content structure that aligns with Google's search intent."
    },
    {
      name: "outreach_target",
      placeholder: "[outreach_target]",
      default_value: "tech blogs and productivity influencers",
      recommended_values: ["high-end design magazines", "financial news websites", "educational platforms and forums", "lifestyle and wellness publications"],
      variable_behavior_note: "Changing the outreach target adjusts the strategic approach and the tone of collaboration proposals for securing backlinks.",
        name_ko: "outreach_target",
        variable_behavior_note_ko: "Changing the outreach target adjusts the strategic approach and the tone of collaboration proposals for securing backlinks."
    }
  ],
  why_this_works: [
    "Keyword Cluster Analysis enables building 'Topical Authority' that dominates the entire subject rather than fragmented keywords.",
    "The Technical SEO Checklist prevents high-quality content from being buried in search results due to technical flaws."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Exceptional at deriving strategies that reflect the latest Google search algorithm trends (E-E-A-T).",
      note_ko: "Exceptional at deriving strategies that reflect the latest Google search algorithm trends (E-E-A-T)."
}],
  comparison_notes: "Designed based on the strategic consulting report structures of professional SEO agencies worth tens of millions of won.",
  variations: [{ label: "Local SEO", prompt_delta: "Focus on Google Maps optimization, local citation building, and regional keyword focus", use_case: "Local businesses", pre_generated_asset_id: null,
      label_ko: "Local SEO",
      use_case_ko: "Local businesses"
}],
  common_failure_modes: ["Keyword listing only -> reinforce with 'prioritize search intent and user pain points over search volume' keywords."],
  seo: {
    primary_keyword: "advanced seo strategy prompt",
    secondary_keywords: ["content marketing ai workflow", "search engine optimization guide prompt"],
    lsi_keywords: ["topical authority", "keyword clusters"],
    meta_title: "Advanced SEO Strategy Prompt | GPT-4 Verified",
    meta_description: "Dominate search rankings with a structured advanced SEO plan. Verified GPT-4 prompt for content and technical SEO.",
      meta_title_ko: "Advanced SEO Strategy Prompt | GPT-4 Verified",
      meta_description_ko: "Dominate search rankings with a structured advanced SEO plan. Verified GPT-4 prompt for content and technical SEO."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-seo-012-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Comprehensive SEO strategy and keyword clustering map",
    alt_text_ko: "포괄적인 SEO 전략 및 키워드 클러스터링 맵",
    width: 1200,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "seo-012",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for SEO best practices." }
};

export const customerJourneyMapPrompt: PromptCard = {
  id: "recipe-biz-journey-013",
  slug: "customer-journey-map-planning-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Customer Journey Map",
  title_ko: "고객 여정 맵",
  result_first_title: "Detailed customer journey map with touchpoints, pain points, and delight opportunities",
  result_first_title_ko: "터치포인트, 페인포인트, 감동 기회를 포함한 상세 고객 여정 맵",
  short_description: "A framework to visualize the entire user experience from awareness to advocacy, identifying critical moments that drive conversion.",
  short_description_ko: "인지부터 옹호까지 전체 사용자 경험을 시각화하고, 전환을 유도하는 결정적인 순간을 식별하기 위한 프레임워크입니다.",
  emotional_hook: "This recipe reads the emotions and concerns behind every customer's footstep, transforming a chance visit into an inevitable fandom.",
  emotional_hook_ko: "이 레시피는 고객의 발걸음 뒤에 숨겨진 감정과 고민을 읽어내어, 우연한 방문을 필연적인 팬덤으로 바꿉니다.",
  category: "workflow_recipe",
  vertical: "ux_strategy",
  use_cases: ["user_experience_design", "marketing_funnel", "product_discovery", "customer_retention"],
  use_cases_ko: ["사용자 경험 디자인", "마케팅 퍼널", "제품 탐색", "고객 유지"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a UX Strategy Consultant. Create a Customer Journey Map for '[service_type]'. The map must cover 5 stages: Awareness, Consideration, Purchase, Service, and Loyalty. For each stage, define: 1. **User Actions**: What they do. 2. **Touchpoints**: Where they interact (e.g., [key_channels]). 3. **Pain Points**: Frustrations they face. 4. **Emotional State**: Highs and lows. 5. **Opportunities**: How to delight them. Persona: [target_persona].",
  negative_prompt: "vague user flow, lack of emotional context, missing pain points, generic touchpoints, non-specific opportunities",
  aspect_ratio_tags: ["journey_map", "ux", "marketing"],
  variables: [
    {
      name: "service_type",
      placeholder: "[service_type]",
      default_value: "high-end boutique hotel booking",
      recommended_values: ["B2B project management software", "organic meal kit delivery service", "personal fitness coaching app", "luxury car subscription"],
      variable_behavior_note: "Changing the service type restructures the user's decision-making cycle and key pain points according to industry traits.",
        name_ko: "service_type",
        variable_behavior_note_ko: "Changing the service type restructures the user's decision-making cycle and key pain points according to industry traits."
    },
    {
      name: "target_persona",
      placeholder: "[target_persona]",
      default_value: "busy executive looking for a seamless escape",
      recommended_values: ["tech-savvy solo traveler", "health-conscious young parent", "small business owner optimizing costs", "high-net-worth car enthusiast"],
      variable_behavior_note: "Changing the persona adjusts the emotions felt and rewards expected at each stage based on individual values.",
        name_ko: "target_persona",
        variable_behavior_note_ko: "Changing the persona adjusts the emotions felt and rewards expected at each stage based on individual values."
    }
  ],
  why_this_works: [
    "Emotional State analysis enables identifying the psychological barriers hidden behind functional inconveniences.",
    "Opportunities suggestions help design 'Wow Points' that differentiate from competitors beyond simple problem-solving."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Provides a multi-dimensional analysis of the relationship between user psychology and marketing funnels.",
      note_ko: "Provides a multi-dimensional analysis of the relationship between user psychology and marketing funnels."
}],
  comparison_notes: "Contains the standard specifications of CX (Customer Experience) strategy maps used by global agencies.",
  variations: [{ label: "B2B Focus", prompt_delta: "Change stages to Awareness, Lead Gen, Sales Meeting, Onboarding, Expansion", use_case: "B2B Sales strategy", pre_generated_asset_id: null,
      label_ko: "B2B Focus",
      use_case_ko: "B2B Sales strategy"
}],
  common_failure_modes: ["Generic touchpoints -> reinforce with 'consider obscure or high-friction touchpoints like customer support or social proof' keywords."],
  seo: {
    primary_keyword: "customer journey map planning prompt",
    secondary_keywords: ["ux strategy ai workflow", "marketing funnel analysis prompt"],
    lsi_keywords: ["touchpoints", "pain points"],
    meta_title: "Customer Journey Map Prompt | GPT-4 Verified",
    meta_description: "Visualize the entire user experience with a detailed customer journey map. Verified GPT-4 prompt for UX and marketing.",
      meta_title_ko: "Customer Journey Map Prompt | GPT-4 Verified",
      meta_description_ko: "Visualize the entire user experience with a detailed customer journey map. Verified GPT-4 prompt for UX and marketing."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-journey-013-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Visual customer journey map with emotional curve",
    alt_text_ko: "정서적 곡선이 포함된 시각적 고객 여정 맵",
    width: 1600,
    height: 1200,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "journey-013",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for CX strategy." }
};

export const investorPitchDeckPrompt: PromptCard = {
  id: "recipe-biz-pitch-014",
  slug: "investor-pitch-deck-outline-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Investor Pitch Deck Outline",
  title_ko: "투자자 피치 덱 아웃라인",
  result_first_title: "Professional pitch deck outline with problem/solution, market, and financials",
  result_first_title_ko: "문제/해결책, 시장 및 재무 계획을 포함한 전문 피치 덱 아웃라인",
  short_description: "A strategic storyboard for founders to build a compelling 10-12 slide deck that wins investor interest and funding.",
  short_description_ko: "창업자가 투자자의 관심을 끌고 펀딩을 성공시키기 위해 10-12개의 슬라이드로 구성된 매력적인 덱을 구축하기 위한 전략적 스토리보드입니다.",
  emotional_hook: "This recipe translates your vision into the language of investors, planting the conviction in their minds that 'this is a massive opportunity.'",
  emotional_hook_ko: "이 레시피는 당신의 비전을 투자자의 언어로 번역하여, '이것이 거대한 기회'라는 확신을 그들의 마음속에 심어줍니다.",
  category: "workflow_recipe",
  vertical: "startup",
  use_cases: ["fundraising", "startup_pitch", "business_presentation", "vc_meeting"],
  use_cases_ko: ["자금 조달", "스타트업 피칭", "비즈니스 프레젠테이션", "VC 미팅"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Startup Consultant & VC Mentor. Create a detailed Pitch Deck Outline for '[startup_name]'. Provide a 12-slide structure: 1. **The Problem**: Pain point intensity. 2. **The Solution**: Your unique value prop. 3. **Market Size (TAM/SAM/SOM)**: The growth potential. 4. **The Product**: Key features and demo. 5. **Business Model**: How you make money. 6. **The Team**: Why you? 7. **The Ask**: Funding amount and use of funds. Industry: [startup_industry].",
  negative_prompt: "generic business plan, lack of focus on ROI, too many slides, text-heavy descriptions, missing market validation data",
  aspect_ratio_tags: ["pitch_deck", "startup", "investor"],
  variables: [
    {
      name: "startup_name",
      placeholder: "[startup_name]",
      default_value: "Lumina: AI-powered grid management for renewable energy",
      recommended_values: ["HealthCore: AI early detection for clinics", "SwiftPay: Cross-border settlements for SMEs", "Modu: Modular housing for rapid urban expansion", "ZenSpace: Remote work sanctuary builder"],
      variable_behavior_note: "The startup name helps the core vision and technical differentiation permeate throughout the slides.",
        name_ko: "startup_name",
        variable_behavior_note_ko: "The startup name helps the core vision and technical differentiation permeate throughout the slides."
    },
    {
      name: "startup_industry",
      placeholder: "[startup_industry]",
      default_value: "ClimateTech and Energy Infrastructure",
      recommended_values: ["Fintech / Payments", "HealthTech / SaaS", "PropTech / Construction", "Consumer AI / Productivity"],
      variable_behavior_note: "Changing the industry adjusts the KPIs and market sizing methods to fit the domain's specific grammar.",
        name_ko: "startup_industry",
        variable_behavior_note_ko: "Changing the industry adjusts the KPIs and market sizing methods to fit the domain's specific grammar."
    }
  ],
  why_this_works: [
    "The Slide-by-slide structure delivers complex business content logically and concisely to prevent audience dropout.",
    "The Ask section presents a specific fund utilization plan to prove readiness for execution to investors."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Possesses extremely powerful logic for persuasion and marketability analysis for fundraising.",
      note_ko: "Possesses extremely powerful logic for persuasion and marketability analysis for fundraising."
}],
  comparison_notes: "Based on the authentic 'Problem-First' pitch deck structures preferred by Sequoia or Y Combinator.",
  variations: [{ label: "Seed Stage", prompt_delta: "Focus more on the vision and team strength, less on historical financials", use_case: "Pre-revenue startups", pre_generated_asset_id: null,
      label_ko: "Seed Stage",
      use_case_ko: "Pre-revenue startups"
}],
  common_failure_modes: ["Too long-winded -> reinforce with 'limit each slide description to 3 bullet points' keywords."],
  seo: {
    primary_keyword: "investor pitch deck outline prompt",
    secondary_keywords: ["startup fundraising ai guide", "vc pitch presentation prompt"],
    lsi_keywords: ["tam sam som", "value proposition"],
    meta_title: "Investor Pitch Deck Outline Prompt | GPT-4 Verified",
    meta_description: "Build a winning investor pitch deck with a strategic slide-by-slide outline. Verified GPT-4 prompt for founders.",
      meta_title_ko: "Investor Pitch Deck Outline Prompt | GPT-4 Verified",
      meta_description_ko: "Build a winning investor pitch deck with a strategic slide-by-slide outline. Verified GPT-4 prompt for founders."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-pitch-014-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Professional 12-slide pitch deck structure for startups",
    alt_text_ko: "스타트업을 위한 전문적인 12슬라이드 피치 덱 구조",
    width: 1920,
    height: 1080,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "pitch-014",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for fundraising logic." }
};

export const marketingCampaignPlanPrompt: PromptCard = {
  id: "recipe-biz-marketing-015",
  slug: "integrated-marketing-campaign-plan-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Integrated Marketing Campaign",
  title_ko: "통합 마케팅 캠페인",
  result_first_title: "Complete marketing campaign plan with channels, budget, and creative strategy",
  result_first_title_ko: "채널, 예산 및 크리에이티브 전략을 포함한 전체 마케팅 캠페인 플랜",
  short_description: "A framework for marketing managers to launch high-performance campaigns, integrating paid, earned, and owned media.",
  short_description_ko: "페이드(Paid), 언드(Earned), 온드(Owned) 미디어를 통합하여 마케팅 매니저가 고성능 캠페인을 런칭하기 위한 프레임워크입니다.",
  emotional_hook: "This recipe pulls your product out from the noise of the world and carves an unforgettable first impression in the minds of your target audience.",
  emotional_hook_ko: "이 레시피는 세상의 소음 속에서 당신의 제품을 끌어올려 타겟 고객의 머릿속에 잊지 못할 첫인상을 각인시킵니다.",
  category: "workflow_recipe",
  vertical: "marketing",
  use_cases: ["campaign_launch", "brand_awareness", "product_promotion", "performance_marketing"],
  use_cases_ko: ["캠페인 런칭", "브랜드 인지도", "제품 홍보", "퍼포먼스 마케팅"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Head of Growth. Create an Integrated Marketing Campaign for '[campaign_goal]'. Include: 1. **Core Message**: The big idea. 2. **Channel Strategy**: Paid Social, Search, and Influencers focus. 3. **Content Pillars**: 3 main themes for creative. 4. **Budget Allocation**: Where to spend [budget_amount]. 5. **Success Metrics (KPIs)**: What does winning look like? Product: [product_description].",
  negative_prompt: "generic marketing buzzwords, lack of channel specifics, missing budget logic, vague creative direction, unrealistic KPIs",
  aspect_ratio_tags: ["marketing", "campaign", "growth"],
  variables: [
    {
      name: "campaign_goal",
      placeholder: "[campaign_goal]",
      default_value: "launching a new premium coffee subscription service",
      recommended_values: ["scaling a B2B SaaS for small law firms", "holiday season sale for sustainable fashion", "promoting a nationwide charity run event", "rebranding a traditional local bakery"],
      variable_behavior_note: "Changing the campaign goal automatically adjusts the key conversion points and the weight of the marketing funnel.",
        name_ko: "campaign_goal",
        variable_behavior_note_ko: "Changing the campaign goal automatically adjusts the key conversion points and the weight of the marketing funnel."
    },
    {
      name: "budget_amount",
      placeholder: "[budget_amount]",
      default_value: "$50,000 for the first month",
      recommended_values: ["$5,000 bootstrap budget", "$200,000 aggressive scale budget", "$1,000 micro-testing budget", "$1,000,000 nationwide campaign"],
      variable_behavior_note: "Changing the budget amount shifts the realistic channel mix and the intensity of the ad execution strategy.",
        name_ko: "budget_amount",
        variable_behavior_note_ko: "Changing the budget amount shifts the realistic channel mix and the intensity of the ad execution strategy."
    }
  ],
  why_this_works: [
    "The Integrated approach enables building brand awareness quickly through unified messaging rather than fragmented ads.",
    "Budget Allocation guides resource focus on channels with the highest ROI (Return on Investment)."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Exceptional at deriving a harmonious strategy between performance marketing and brand marketing.",
      note_ko: "Exceptional at deriving a harmonious strategy between performance marketing and brand marketing."
}],
  comparison_notes: "Designed based on the annual media mix proposal structures of global advertising agencies for immediate execution.",
  variations: [{ label: "Retargeting Focus", prompt_delta: "Focus heavily on bottom-of-funnel retargeting and email automation to drive immediate conversions", use_case: "E-commerce sales", pre_generated_asset_id: null,
      label_ko: "Retargeting Focus",
      use_case_ko: "E-commerce sales"
}],
  common_failure_modes: ["Too many channels -> reinforce with 'focus on 2 primary channels and 1 experimental channel' keywords."],
  seo: {
    primary_keyword: "integrated marketing campaign plan prompt",
    secondary_keywords: ["growth marketing ai strategy", "product launch campaign prompt"],
    lsi_keywords: ["channel strategy", "budget allocation"],
    meta_title: "Integrated Marketing Campaign Plan Prompt | GPT-4 Verified",
    meta_description: "Launch successful marketing campaigns with a structured channel and budget plan. Verified GPT-4 prompt for growth managers.",
      meta_title_ko: "Integrated Marketing Campaign Plan Prompt | GPT-4 Verified",
      meta_description_ko: "Launch successful marketing campaigns with a structured channel and budget plan. Verified GPT-4 prompt for growth managers."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-marketing-015-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Integrated marketing campaign roadmap and media mix",
    alt_text_ko: "통합 마케팅 캠페인 로드맵 및 미디어 믹스",
    width: 1200,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "campaign-015",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for growth strategy." }
};

export const hiringPlanPrompt: PromptCard = {
  id: "recipe-biz-hiring-016",
  slug: "strategic-hiring-recruitment-plan-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Strategic Hiring Plan",
  title_ko: "전략적 채용 플랜",
  result_first_title: "Complete recruitment plan with job definition, sourcing strategy, and interview process",
  result_first_title_ko: "직무 정의, 소싱 전략 및 인터뷰 프로세스를 포함한 전체 채용 플랜",
  short_description: "A framework for founders and HR managers to find and hire top-tier talent, ensuring culture fit and technical excellence.",
  short_description_ko: "창업자와 HR 매니저가 문화적 적합성과 기술적 우수성을 갖춘 최정상급 인재를 찾아 채용하기 위한 프레임워크입니다.",
  emotional_hook: "This recipe is not just about finding helping hands, but designing a journey to discover the best colleagues who will change the brand's fate together.",
  emotional_hook_ko: "이 레시피는 단순히 일손을 찾는 것이 아니라, 브랜드의 운명을 함께 바꿀 최고의 동료를 발견하기 위한 여정을 설계합니다.",
  category: "workflow_recipe",
  vertical: "human_resources",
  use_cases: ["team_expansion", "recruitment_strategy", "culture_building", "startup_growth"],
  use_cases_ko: ["팀 확장", "채용 전략", "조직 문화 구축", "스타트업 성장"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Head of Talent. Create a Strategic Hiring Plan for a '[job_title]' at '[company_type]'. Include: 1. **Ideal Candidate Profile**: Skills, values, and experience. 2. **Sourcing Strategy**: Where to find them (e.g., [sourcing_channels]). 3. **Interview Process**: 4-stage pipeline with specific questions. 4. **Evaluation Rubric**: How to score candidates. 5. **Onboarding Milestones**: First 30/60/90 days plan.",
  negative_prompt: "generic job description, lack of culture fit criteria, missing interview questions, vague sourcing advice, no onboarding plan",
  aspect_ratio_tags: ["hiring", "team", "hr"],
  variables: [
    {
      name: "job_title",
      placeholder: "[job_title]",
      default_value: "Lead AI Engineer with product vision",
      recommended_values: ["Creative Marketing Director", "Senior Customer Success Lead", "Full-stack Developer (Rust/Next.js)", "Head of Operations"],
      variable_behavior_note: "Changing the job title redefines the core competencies and the technical/emotional metrics to be verified for the role.",
        name_ko: "job_title",
        variable_behavior_note_ko: "Changing the job title redefines the core competencies and the technical/emotional metrics to be verified for the role."
    },
    {
      name: "company_type",
      placeholder: "[company_type]",
      default_value: "early-stage seed-funded AI startup",
      recommended_values: ["rapidly scaling B2B SaaS company", "established luxury boutique agency", "non-profit social enterprise", "high-volume e-commerce brand"],
      variable_behavior_note: "Changing the company type adjusts the value propositions (Equity vs Stability vs Mission) and the ideal talent profile to be offered to candidates.",
        name_ko: "company_type",
        variable_behavior_note_ko: "Changing the company type adjusts the value propositions (Equity vs Stability vs Mission) and the ideal talent profile to be offered to candidates."
    }
  ],
  why_this_works: [
    "The Evaluation Rubric excludes interviewer subjectivity and helps select the best talent based on the team's consistent standards.",
    "Onboarding Milestones serve as a map for new hires to settle quickly and perform effectively after recruitment."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Provides practical hiring guides based on deep insights into HR strategies and organizational culture.",
      note_ko: "Provides practical hiring guides based on deep insights into HR strategies and organizational culture."
}],
  comparison_notes: "Standardized the recruiting processes of global tech companies for immediate application in startups.",
  variations: [{ label: "Executive Search", prompt_delta: "Focus on leadership alignment, strategic vision, and long-term retention packages", use_case: "C-level hiring", pre_generated_asset_id: null,
      label_ko: "Executive Search",
      use_case_ko: "C-level hiring"
}],
  common_failure_modes: ["Generic interview questions -> reinforce with 'add behavioral and situational interview questions with ideal answer guides' keywords."],
  seo: {
    primary_keyword: "strategic hiring recruitment plan prompt",
    secondary_keywords: ["startup team building ai", "hr recruitment process prompt"],
    lsi_keywords: ["interview pipeline", "onboarding milestones"],
    meta_title: "Strategic Hiring Plan Prompt | GPT-4 Verified",
    meta_description: "Hire top talent with a structured strategic recruitment plan. Verified GPT-4 prompt for founders and HR managers.",
      meta_title_ko: "Strategic Hiring Plan Prompt | GPT-4 Verified",
      meta_description_ko: "Hire top talent with a structured strategic recruitment plan. Verified GPT-4 prompt for founders and HR managers."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-hiring-016-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Strategic hiring pipeline and candidate evaluation rubric",
    alt_text_ko: "전략적 채용 파이프라인 및 후보자 평가 루브릭",
    width: 1200,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "hiring-016",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for HR best practices." }
};

export const saasPricingStrategyPrompt: PromptCard = {
  id: "recipe-biz-pricing-017",
  slug: "saas-pricing-strategy-framework-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "SaaS Pricing Strategy",
  title_ko: "SaaS 가격 책정 전략",
  result_first_title: "Optimized SaaS pricing tiers with value-based features and retention logic",
  result_first_title_ko: "가치 기반 기능 및 유지 로직을 포함한 최적화된 SaaS 가격 단계",
  short_description: "A strategic framework for software-as-a-service companies to design pricing plans that maximize revenue and user lifetime value.",
  short_description_ko: "수익과 사용자 생애 가치(LTV)를 극대화하는 가격 플랜을 설계하기 위한 SaaS 기업용 전략적 프레임워크입니다.",
  emotional_hook: "Beyond numbers, this recipe provides a psychological design that makes users recognize your value and 'willingly' pay the cost.",
  emotional_hook_ko: "단순한 숫자를 넘어, 이 레시피는 사용자가 당신의 가치를 인정하고 '기꺼이' 비용을 지불하게 만드는 심리적 설계를 제공합니다.",
  category: "workflow_recipe",
  vertical: "business_strategy",
  use_cases: ["saas_monetization", "revenue_optimization", "product_tier_design", "market_positioning"],
  use_cases_ko: ["SaaS 수익화", "수익 최적화", "제품 티어 디자인", "시장 포지셔닝"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a SaaS Pricing Expert. Design a Pricing Strategy for '[product_concept]'. The plan must include: 1. **Tier Structure**: Free/Starter, Growth, and Enterprise plans. 2. **Value Metrics**: What are they paying for? (e.g., [unit_metric]). 3. **Feature Differentiation**: Key features in each tier. 4. **Psychological Triggers**: Anchoring, decoy effect, and trial strategy. 5. **Expansion Strategy**: How to increase LTV over time.",
  negative_prompt: "generic pricing list, lack of value-based logic, missing enterprise tier specifics, no psychology-based tactics, boring plan names",
  aspect_ratio_tags: ["pricing", "saas", "revenue"],
  variables: [
    {
      name: "product_concept",
      placeholder: "[product_concept]",
      default_value: "AI-powered creative asset management for agencies",
      recommended_values: ["no-code automation platform for HR", "cloud-native cybersecurity for fintech", "real-time collaboration tool for 3D artists", "customer data platform for luxury retail"],
      variable_behavior_note: "Changing the product concept automatically analyzes target customers' willingness to pay and industry standard pricing plans.",
        name_ko: "product_concept",
        variable_behavior_note_ko: "Changing the product concept automatically analyzes target customers' willingness to pay and industry standard pricing plans."
    },
    {
      name: "unit_metric",
      placeholder: "[unit_metric]",
      default_value: "per seats or storage usage",
      recommended_values: ["per active customer tracked", "per automation workflow executed", "per GB of encrypted data", "per API call processed"],
      variable_behavior_note: "Changing the billing unit reconstructs the scalability of the revenue model and the revenue growth curve as users grow.",
        name_ko: "unit_metric",
        variable_behavior_note_ko: "Changing the billing unit reconstructs the scalability of the revenue model and the revenue growth curve as users grow."
    }
  ],
  why_this_works: [
    "Value Metrics design aligns user utility with pricing, lowering churn rates.",
    "Psychological Triggers lower barriers to purchase decisions and encourage selection of higher-tier plans."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Capable of deriving sophisticated monetization strategies combining business modeling with behavioral economics.",
      note_ko: "Capable of deriving sophisticated monetization strategies combining business modeling with behavioral economics."
}],
  comparison_notes: "Optimized the pricing frameworks of SaaS leaders like ProfitWell or OpenView for the digital environment.",
  variations: [{ label: "PLG Focus", prompt_delta: "Focus heavily on self-serve onboarding, viral loops, and freemium-to-paid conversion triggers", use_case: "Product-Led Growth startups", pre_generated_asset_id: null,
      label_ko: "PLG Focus",
      use_case_ko: "Product-Led Growth startups"
}],
  common_failure_modes: ["Overly complex plans -> reinforce with 'prioritize simplicity and transparency to reduce cognitive load' keywords."],
  seo: {
    primary_keyword: "saas pricing strategy framework prompt",
    secondary_keywords: ["revenue optimization ai strategy", "saas monetization guide prompt"],
    lsi_keywords: ["value metrics", "tier structure"],
    meta_title: "SaaS Pricing Strategy Prompt | GPT-4 Verified",
    meta_description: "Maximize revenue with an optimized SaaS pricing strategy. Verified GPT-4 prompt for value-based pricing design.",
      meta_title_ko: "SaaS Pricing Strategy Prompt | GPT-4 Verified",
      meta_description_ko: "Maximize revenue with an optimized SaaS pricing strategy. Verified GPT-4 prompt for value-based pricing design."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-pricing-017-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Optimized SaaS pricing tiers and value-based strategy",
    alt_text_ko: "최적화된 SaaS 가격 책정 단계 및 가치 기반 전략",
    width: 1600,
    height: 1200,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "pricing-017",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for SaaS monetization." }
};

export const riskManagementPlanPrompt: PromptCard = {
  id: "recipe-biz-risk-018",
  slug: "business-risk-management-plan-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Risk Management Plan",
  title_ko: "리스크 관리 플랜",
  result_first_title: "Proactive risk management strategy with identification, mitigation, and recovery",
  result_first_title_ko: "식별, 완화 및 복구를 포함한 선제적 리스크 관리 전략",
  short_description: "A critical framework for business leaders to identify potential threats and create a resilient system for long-term survival.",
  short_description_ko: "잠재적 위협을 식별하고 장기적 생존을 위한 회복력 있는 시스템을 구축하기 위해 비즈니스 리더에게 필수적인 프레임워크입니다.",
  emotional_hook: "This recipe designs a 'digital bomb shelter' where your brand can stand firmer even in the face of unexpected crises.",
  emotional_hook_ko: "이 레시피는 예상치 못한 위기 앞에서도 당신의 브랜드가 더 단단하게 서 있을 수 있는 '디지털 방공호'를 설계합니다.",
  category: "workflow_recipe",
  vertical: "business_strategy",
  use_cases: ["crisis_management", "business_continuity", "strategic_planning", "operational_resilience"],
  use_cases_ko: ["위기 관리", "비즈니스 연속성", "전략적 기획", "운영 회복력"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Business Resilience Specialist. Create a Risk Management Plan for '[business_type]'. The plan must include: 1. **Risk Identification Matrix**: Strategic, Financial, and Operational risks. 2. **Likelihood & Impact Analysis**: Prioritizing key threats. 3. **Mitigation Strategy**: Specific actions for top 3 risks. 4. **Contingency Plan**: 'Plan B' for total failure scenarios. 5. **Recovery Roadmap**: How to bounce back after a crisis. Market Context: [market_threat].",
  negative_prompt: "generic safety tips, vague risk descriptions, lack of mitigation specifics, boring corporate jargon without action, missing recovery steps",
  aspect_ratio_tags: ["risk", "strategy", "resilience"],
  variables: [
    {
      name: "business_type",
      placeholder: "[business_type]",
      default_value: "global e-commerce platform with regional supply chain",
      recommended_values: ["early-stage biotech laboratory", "decentralized crypto exchange", "luxury hospitality group", "high-volume manufacturing plant"],
      variable_behavior_note: "Changing the business type derives industry-specific key risk factors (security, supply chain, regulations, funding, etc.).",
        name_ko: "business_type",
        variable_behavior_note_ko: "Changing the business type derives industry-specific key risk factors (security, supply chain, regulations, funding, etc.)."
    },
    {
      name: "market_threat",
      placeholder: "[market_threat]",
      default_value: "impending economic recession and high inflation",
      recommended_values: ["rapidly changing privacy regulations", "hostile competitive takeover", "cybersecurity data breach", "global supply chain disruption"],
      variable_behavior_note: "Changing the market threat strengthens specific defense mechanisms and response manuals for that threat.",
        name_ko: "market_threat",
        variable_behavior_note_ko: "Changing the market threat strengthens specific defense mechanisms and response manuals for that threat."
    }
  ],
  why_this_works: [
    "The Risk Identification Matrix transforms vague anxiety into specific manageable data.",
    "The Contingency Plan provides safeguards ensuring business continuity even in worst-case scenarios."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Analyzes complex crisis situations by scenario and derives actionable countermeasures.",
      note_ko: "Analyzes complex crisis situations by scenario and derives actionable countermeasures."
}],
  comparison_notes: "Contains the core logic of crisis management systems established by global enterprise CSOs (Chief Strategy Officers).",
  variations: [{ label: "Cyber Focus", prompt_delta: "Deep dive into data breach response, incident reporting, and digital infrastructure recovery", use_case: "IT/Tech companies", pre_generated_asset_id: null,
      label_ko: "Cyber Focus",
      use_case_ko: "IT/Tech companies"
}],
  common_failure_modes: ["Too pessimistic -> reinforce with 'focus on proactive prevention and resilience building over pure reaction' keywords."],
  seo: {
    primary_keyword: "business risk management plan prompt",
    secondary_keywords: ["crisis management ai strategy", "business continuity guide prompt"],
    lsi_keywords: ["mitigation strategy", "risk identification matrix"],
    meta_title: "Business Risk Management Plan Prompt | GPT-4 Verified",
    meta_description: "Build a resilient business with a structured risk management and recovery plan. Verified GPT-4 prompt for leaders.",
      meta_title_ko: "Business Risk Management Plan Prompt | GPT-4 Verified",
      meta_description_ko: "Build a resilient business with a structured risk management and recovery plan. Verified GPT-4 prompt for leaders."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-risk-018-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Proactive risk management matrix and recovery roadmap",
    alt_text_ko: "선제적 리스크 관리 매트릭스 및 복구 로드맵",
    width: 1200,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "risk-018",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for business resilience." }
};

export const socialMediaAuditPrompt: PromptCard = {
  id: "recipe-biz-social-audit-019",
  slug: "social-media-performance-audit-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Social Media Performance Audit",
  title_ko: "소셜 미디어 성과 오딧",
  result_first_title: "Complete social media audit with channel performance, content gaps, and growth actions",
  result_first_title_ko: "채널 성과, 콘텐츠 격차 및 성장 액션을 포함한 종합 소셜 미디어 오딧",
  short_description: "A diagnostic framework to evaluate your brand's social media presence across all channels and find opportunities for improvement.",
  short_description_ko: "모든 채널에 걸친 브랜드의 소셜 미디어 존재감을 평가하고 개선 기회를 찾기 위한 진단 프레임워크입니다.",
  emotional_hook: "This recipe finds the brand's true voice among noise-filled data and pinpoint exactly what the audience is raving about.",
  emotional_hook_ko: "이 레시피는 노이즈 가득한 데이터 속에서 브랜드의 진정한 목소리를 찾아내고, 청중이 무엇에 열광하는지 정확히 짚어냅니다.",
  category: "workflow_recipe",
  vertical: "digital_marketing",
  use_cases: ["social_media_strategy", "brand_health_check", "content_optimization", "competitor_benchmarking"],
  use_cases_ko: ["소셜 미디어 전략", "브랜드 건전성 체크", "콘텐츠 최적화", "경쟁사 벤치마킹"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Senior Social Media Strategist. Perform a complete Social Media Audit for '[brand_name]'. Evaluate: 1. **Channel Assessment**: Instagram, TikTok, LinkedIn, and X performance. 2. **Content Performance**: What's working vs what's failing. 3. **Audience Engagement**: Sentiment analysis and interaction quality. 4. **Gap Analysis**: Missing opportunities compared to [competitor_benchmark]. 5. **Optimization Plan**: 3 immediate actions for growth.",
  negative_prompt: "generic social media tips, lack of channel-specific data, boring advice, no gap analysis, vague action plan",
  aspect_ratio_tags: ["social_media", "audit", "marketing"],
  variables: [
    {
      name: "brand_name",
      placeholder: "[brand_name]",
      default_value: "Aura: Sustainable Fashion Marketplace",
      recommended_values: ["TechNova: Enterprise Cloud Solutions", "GlowUp: Organic Skincare", "Modu: Prefabricated Housing", "ZenSpace: Productivity App"],
      variable_behavior_note: "Changing the brand name automatically applies the trends and successful social media metrics of that category.",
        name_ko: "brand_name",
        variable_behavior_note_ko: "Changing the brand name automatically applies the trends and successful social media metrics of that category."
    },
    {
      name: "competitor_benchmark",
      placeholder: "[competitor_benchmark]",
      default_value: "top 3 direct competitors in the eco-fashion niche",
      recommended_values: ["market leaders like Patagonia", "fast-growing startups in the industry", "best-in-class social media examples", "global enterprise competitors"],
      variable_behavior_note: "Changing the benchmark adjusts the criteria for Gap Analysis, deriving sharper improvement strategies.",
        name_ko: "competitor_benchmark",
        variable_behavior_note_ko: "Changing the benchmark adjusts the criteria for Gap Analysis, deriving sharper improvement strategies."
    }
  ],
  why_this_works: [
    "Gap Analysis prevents being trapped in own channels and allows objective viewing of competitiveness in the whole market.",
    "The Optimization Plan prioritizes immediate actions to improve performance right now."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Exceptional at deriving strategies that combine social media trends with data analysis.",
      note_ko: "Exceptional at deriving strategies that combine social media trends with data analysis."
}],
  comparison_notes: "Contains core components of monthly performance reports and strategy proposals from professional social agencies.",
  variations: [{ label: "Ad Audit", prompt_delta: "Focus heavily on paid social performance, ROAS analysis, and creative fatigue audit", use_case: "Performance marketing audit", pre_generated_asset_id: null,
      label_ko: "Ad Audit",
      use_case_ko: "Performance marketing audit"
}],
  common_failure_modes: ["Generic content -> reinforce with 'focus on specific engagement metrics like share rate and save count' keywords."],
  seo: {
    primary_keyword: "social media performance audit prompt",
    secondary_keywords: ["brand health check ai strategy", "social media growth guide prompt"],
    lsi_keywords: ["gap analysis", "channel assessment"],
    meta_title: "Social Media Performance Audit Prompt | GPT-4 Verified",
    meta_description: "Audit your brand's social presence and identify growth gaps. Verified GPT-4 prompt for social media managers.",
      meta_title_ko: "Social Media Performance Audit Prompt | GPT-4 Verified",
      meta_description_ko: "Audit your brand's social presence and identify growth gaps. Verified GPT-4 prompt for social media managers."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-social-audit-019-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Social media channel performance audit and gap analysis",
    alt_text_ko: "소셜 미디어 채널 성과 오딧 및 격차 분석",
    width: 1200,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "social-audit-019",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for social media strategy." }
};

export const brandVoiceGuidePrompt: PromptCard = {
  id: "recipe-biz-brand-voice-020",
  slug: "brand-voice-and-tone-guide-prompt",
  status: "approved",
  quality_tier: "tier_1",
  verified_badge: true,
  last_verified_at: "2026-05-07",
  title: "Brand Voice & Tone Guide",
  title_ko: "브랜드 보이스 및 톤 가이드",
  result_first_title: "Consistent brand voice guide with personality, vocabulary, and writing samples",
  result_first_title_ko: "페르소나, 어휘 및 작성 샘플을 포함한 일관된 브랜드 보이스 가이드",
  short_description: "A framework to define how your brand speaks, ensuring a consistent and recognizable personality across all touchpoints.",
  short_description_ko: "브랜드가 말하는 방식을 정의하여, 모든 접점에서 일관되고 인식 가능한 성격을 보장하기 위한 프레임워크입니다.",
  emotional_hook: "This recipe breathes a soul into your brand, making customers feel exactly who is speaking the moment they read your text.",
  emotional_hook_ko: "이 레시피는 브랜드에 영혼을 불어넣어, 고객이 당신의 글을 읽는 순간 누가 말하고 있는지 정확히 느끼게 합니다.",
  category: "workflow_recipe",
  vertical: "branding",
  use_cases: ["content_creation", "brand_identity", "copywriting_guide", "internal_alignment"],
  use_cases_ko: ["콘텐츠 제작", "브랜드 아이덴티티", "카피라이팅 가이드", "내부 정렬"],
  target_model: "gpt-4",
  model_version: "turbo",
  model_confidence: "tested",
  prompt_text: "Act as a Brand Voice Strategist. Create a Voice & Tone Guide for '[brand_personality]'. Include: 1. **The Persona**: If the brand were a person, who would they be? 2. **Core Values & Tone**: 4 keywords with 'Do vs Don't' examples. 3. **Vocabulary & Phrasing**: Words to use and words to avoid. 4. **Platform Specific Rules**: How the voice adapts to LinkedIn vs TikTok. 5. **Writing Samples**: Professional, casual, and urgent examples. Target Audience: [target_audience].",
  negative_prompt: "generic writing tips, lack of personality depth, no writing samples, vague do/don't lists, inconsistent tone rules",
  aspect_ratio_tags: ["branding", "copywriting", "identity"],
  variables: [
    {
      name: "brand_personality",
      placeholder: "[brand_personality]",
      default_value: "a wise and encouraging mentor for small business owners",
      recommended_values: ["a witty and energetic rebel in tech", "a luxurious and exclusive quiet-luxury expert", "a friendly and reliable local community builder", "a sharp and innovative futurist"],
      variable_behavior_note: "Changing the brand personality completely redesigns the temperature of words, sentence length, and humor usage.",
        name_ko: "brand_personality",
        variable_behavior_note_ko: "Changing the brand personality completely redesigns the temperature of words, sentence length, and humor usage."
    },
    {
      name: "target_audience",
      placeholder: "[target_audience]",
      default_value: "solo entrepreneurs and freelancers aged 25-45",
      recommended_values: ["high-net-worth luxury travelers", "tech-savvy Gen Z developers", "health-conscious young parents", "corporate executives in traditional industries"],
      variable_behavior_note: "Changing the target audience optimizes the guide to the language style (Technical vs Simple) they trust and relate to.",
        name_ko: "target_audience",
        variable_behavior_note_ko: "Changing the target audience optimizes the guide to the language style (Technical vs Simple) they trust and relate to."
    }
  ],
  why_this_works: [
    "Do vs Don't examples clearly pinpoint where marketers or writers might fail, ensuring brand consistency.",
    "Writing Samples go beyond theoretical guides to provide specific standards for how actual text should feel."
  ],
  model_notes: [{ model: "gpt-4", version: "turbo", note: "Builds a unique brand persona by analyzing language nuances and emotional weight.",
      note_ko: "Builds a unique brand persona by analyzing language nuances and emotional weight."
}],
  comparison_notes: "Designed based on the verbal identity manual structures of global corporations.",
  variations: [{ label: "UX Writing Focus", prompt_delta: "Focus heavily on button labels, error messages, and microcopy to ensure the voice lives inside the product", use_case: "Product/UI copywriting", pre_generated_asset_id: null,
      label_ko: "UX Writing Focus",
      use_case_ko: "Product/UI copywriting"
}],
  common_failure_modes: ["Long-winded descriptions -> reinforce with 'focus on 4 main pillars with clear visual examples of text layout' keywords."],
  seo: {
    primary_keyword: "brand voice and tone guide prompt",
    secondary_keywords: ["copywriting guide ai strategy", "brand identity verbal guide prompt"],
    lsi_keywords: ["persona", "vocabulary"],
    meta_title: "Brand Voice & Tone Guide Prompt | GPT-4 Verified",
    meta_description: "Define your brand's personality with a structured voice and tone guide. Verified GPT-4 prompt for copywriters and founders.",
      meta_title_ko: "Brand Voice & Tone Guide Prompt | GPT-4 Verified",
      meta_description_ko: "Define your brand's personality with a structured voice and tone guide. Verified GPT-4 prompt for copywriters and founders."
},
  asset_metadata: {
    hero_image: "/images/prompts/recipe-biz-brand-voice-020-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Brand voice guide with persona and writing samples",
    alt_text_ko: "페르소나 및 작성 샘플이 포함된 브랜드 보이스 가이드",
    width: 1200,
    height: 1600,
    format: "webp",
    placeholder: null,
    source_model: "gpt-4",
    source_prompt_hash: "voice-020",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache"
  },
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for brand consistency." }
};

export const workflowRecipePrompts: PromptCard[] = [
  headshotRecipe,
  youtubeVideoPlanPrompt,
  characterBiblePrompt,
  twitchOverlayPlanPrompt,
  nftCollectionConceptPrompt,
  podcastOutlinePrompt,
  webtoonChapterPlanPrompt,
  artStyleGuidePrompt,
  portfolioCuratorPrompt,
  marketResearchPlanPrompt,
  productRoadmapPrompt,
  seoStrategyPrompt,
  customerJourneyMapPrompt,
  investorPitchDeckPrompt,
  marketingCampaignPlanPrompt,
  hiringPlanPrompt,
  saasPricingStrategyPrompt,
  riskManagementPlanPrompt,
  socialMediaAuditPrompt,
  brandVoiceGuidePrompt
];
