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
  emotional_hook: "This prompt breathes the warmth and humor of squishy clay into the cold digital screen.",
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
      variable_behavior_note: "Changing the character concept updates the subject while maintaining the soft texture and simple geometric charm.",
        name_ko: "character_concept",
        variable_behavior_note_ko: "Changing the character concept updates the subject while maintaining the soft texture and simple geometric charm."
    }
  ],
  why_this_works: [
    "The soft matte clay texture creates a friendly and inviting impression, lowering the barrier to entry for users.",
    "Plump rounded shapes align perfectly with the 'Joyful design' trend in modern mobile app aesthetics."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Excellent at rendering matte textures and soft Global Illumination (GI).",
      note_ko: "Excellent at rendering matte textures and soft Global Illumination (GI)."
}],
  comparison_notes: "The fastest way to generate professional clay characters without needing Blender expertise.",
  variations: [{ label: "Glossy/Plastic", prompt_delta: "Change matte clay to glossy plastic with high reflections", use_case: "Toy-like aesthetic", pre_generated_asset_id: null,
      label_ko: "Glossy/Plastic",
      use_case_ko: "Toy-like aesthetic"
}],
  common_failure_modes: ["If texture appears too grainy -> add 'smooth surfaces, fine clay' keywords."],
  seo: {
    primary_keyword: "claymorphism 3d prompt",
    secondary_keywords: ["3d character design ai", "clay style illustration"],
    lsi_keywords: ["matte texture", "octane render aesthetic"],
    meta_title: "Claymorphism 3D Character Prompt | Midjourney v6 Trend",
    meta_description: "Create trendy clay-style characters for web and apps. Verified Midjourney v6 prompt for modern 3D illustrations.",
      meta_title_ko: "Claymorphism 3D Character Prompt | Midjourney v6 Trend",
      meta_description_ko: "Create trendy clay-style characters for web and apps. Verified Midjourney v6 prompt for modern 3D illustrations."
},
  asset_metadata: {
    hero_image: "/images/prompts/trend-claymorphism-001-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Playful claymorphism 3D robot character",
    width: 1024,
    height: 1024,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "clay-001",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Playful claymorphism 3D robot character"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for trendy web illustration." },
    title_ko: "Claymorphism 3D Character Design",
    result_first_title_ko: "Cute and playful claymorphism 3D characters with soft matte textures and plump shapes",
    short_description_ko: "Trending clay-style 3D illustrations for modern web design, mobile apps, and brand mascots.",
    emotional_hook_ko: "This prompt breathes the warmth and humor of squishy clay into the cold digital screen.",
    comparison_notes_ko: "The fastest way to generate professional clay characters without needing Blender expertise.",
    use_cases_ko: ["web_illustration", "app_onboarding", "brand_mascot", "social_media_content"],
    why_this_works_ko: ["The soft matte clay texture creates a friendly and inviting impression, lowering the barrier to entry for users.", "Plump rounded shapes align perfectly with the 'Joyful design' trend in modern mobile app aesthetics."],
    common_failure_modes_ko: ["If texture appears too grainy -> add 'smooth surfaces, fine clay' keywords."]
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
  emotional_hook: "This prompt captures the moment where language deconstructs into a visual melody of light and texture.",
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
      variable_behavior_note: "Changing the letter concept modifies the core form while maintaining the avant-garde liquid metal and glass aesthetic.",
        name_ko: "letter_concept",
        variable_behavior_note_ko: "Changing the letter concept modifies the core form while maintaining the avant-garde liquid metal and glass aesthetic."
    }
  ],
  why_this_works: [
    "Liquid chrome and frosted glass are core materials of the trending 'Y2K Futurism,' providing a sophisticated visual impact.",
    "The 3:4 aspect ratio creates a composition ideal for poster design, allowing for immediate commercial application."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Superb at rendering amorphous forms and complex texture layering.",
      note_ko: "Superb at rendering amorphous forms and complex texture layering."
}],
  comparison_notes: "Provides the ultimate source for graphic designers seeking artistic symbolism over legibility.",
  variations: [{ label: "Iridescent Burn", prompt_delta: "Add iridescent heat-map colors and oil-slick reflections", use_case: "Music album art", pre_generated_asset_id: null,
      label_ko: "Iridescent Burn",
      use_case_ko: "Music album art"
}],
  common_failure_modes: ["If form appears too simple -> add 'intricate geometric complexity' keywords."],
  seo: {
    primary_keyword: "futuristic typography prompt",
    secondary_keywords: ["experimental art ai", "liquid metal typography"],
    lsi_keywords: ["frosted glass texture", "volumetric lighting"],
    meta_title: "Futuristic Typographic Art Prompt | Midjourney v6 Verified",
    meta_description: "Generate cutting-edge typographic art with liquid metal and glass. Verified Midjourney v6 prompt for designers.",
      meta_title_ko: "Futuristic Typographic Art Prompt | Midjourney v6 Verified",
      meta_description_ko: "Generate cutting-edge typographic art with liquid metal and glass. Verified Midjourney v6 prompt for designers."
},
  asset_metadata: {
    hero_image: "/images/prompts/trend-typography-002-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Experimental futuristic liquid metal typography",
    width: 900,
    height: 1200,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "typo-002",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Experimental futuristic liquid metal typography"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for complex texture overlay." },
    title_ko: "Futuristic Typographic Art",
    result_first_title_ko: "Experimental typography with liquid metal and glowing glass textures",
    short_description_ko: "Cutting-edge typographic compositions for posters, branding, and motion graphics backgrounds.",
    emotional_hook_ko: "This prompt captures the moment where language deconstructs into a visual melody of light and texture.",
    comparison_notes_ko: "Provides the ultimate source for graphic designers seeking artistic symbolism over legibility.",
    use_cases_ko: ["poster_design", "brand_identity", "experimental_art", "motion_graphics"],
    why_this_works_ko: ["Liquid chrome and frosted glass are core materials of the trending 'Y2K Futurism,' providing a sophisticated visual impact.", "The 3:4 aspect ratio creates a composition ideal for poster design, allowing for immediate commercial application."],
    common_failure_modes_ko: ["If form appears too simple -> add 'intricate geometric complexity' keywords."]
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
  emotional_hook: "This prompt offers an experience where gravity ceases, and the deepest fragments of the subconscious awaken in vivid texture.",
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
      variable_behavior_note: "Changing the surreal concept completely shifts the narrative while maintaining the uncanny sense of space and extreme detail.",
        name_ko: "surreal_concept",
        variable_behavior_note_ko: "Changing the surreal concept completely shifts the narrative while maintaining the uncanny sense of space and extreme detail."
    }
  ],
  why_this_works: [
    "Illogical spatial composition induces the AI to ignore physics and focus purely on visual wonder.",
    "High stylize (s 500) maximizes Midjourney's creativity to generate visuals beyond human imagination."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Overwhelming ability to visualize metaphorical and abstract concepts.",
      note_ko: "Overwhelming ability to visualize metaphorical and abstract concepts."
}],
  comparison_notes: "A framework that best demonstrates the essence of AI art: the expansion of imagination.",
  variations: [{ label: "Dark Macabre", prompt_delta: "Change lighting to dark and moody, add gothic surrealist elements", use_case: "Horror concept art", pre_generated_asset_id: null,
      label_ko: "Dark Macabre",
      use_case_ko: "Horror concept art"
}],
  common_failure_modes: ["If composition appears too mundane -> add 'paradoxical geometry' keywords."],
  seo: {
    primary_keyword: "hyper-surrealism digital art prompt",
    secondary_keywords: ["surrealist ai art", "creative concept art prompt"],
    lsi_keywords: ["dreamlike logic", "illogical composition"],
    meta_title: "Hyper-Surrealism Digital Art Prompt | Midjourney v6 Verified",
    meta_description: "Generate mind-bending surrealist art with extreme detail. Verified Midjourney v6 prompt for high-concept illustrations.",
      meta_title_ko: "Hyper-Surrealism Digital Art Prompt | Midjourney v6 Verified",
      meta_description_ko: "Generate mind-bending surrealist art with extreme detail. Verified Midjourney v6 prompt for high-concept illustrations."
},
  asset_metadata: {
    hero_image: "/images/prompts/trend-surrealism-003-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Hyper-surrealist digital art of a wave piano",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "surreal-003",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Hyper-surrealist digital art of a wave piano"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for high artistic creativity." },
    title_ko: "Hyper-Surrealism Digital Art",
    result_first_title_ko: "Mind-bending hyper-surrealist digital art with extreme detail and dreamlike logic",
    short_description_ko: "High-concept surrealist illustrations that push the boundaries of AI imagination and visual storytelling.",
    emotional_hook_ko: "This prompt offers an experience where gravity ceases, and the deepest fragments of the subconscious awaken in vivid texture.",
    comparison_notes_ko: "A framework that best demonstrates the essence of AI art: the expansion of imagination.",
    use_cases_ko: ["concept_art", "editorial_illustration", "art_exhibition", "creative_inspiration"],
    why_this_works_ko: ["Illogical spatial composition induces the AI to ignore physics and focus purely on visual wonder.", "High stylize (s 500) maximizes Midjourney's creativity to generate visuals beyond human imagination."],
    common_failure_modes_ko: ["If composition appears too mundane -> add 'paradoxical geometry' keywords."]
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
  emotional_hook: "This prompt visualizes the optimistic future dreamt by the past—pure curiosity and yearning for the vast cosmos.",
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
      variable_behavior_note: "Changing the concept updates the theme while maintaining the signature optimistic 60s color palette and flat graphic style.",
        name_ko: "space_age_concept",
        variable_behavior_note_ko: "Changing the concept updates the theme while maintaining the signature optimistic 60s color palette and flat graphic style."
    }
  ],
  why_this_works: [
    "Halftone dot patterns and vibrant flat colors recreate the texture of vintage prints for a unique aesthetic charm.",
    "Sleek chrome rockets are iconic elements of retro-futurism, delivering timeless sophistication."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Exceptional at flat graphic design and vintage color reproduction.",
      note_ko: "Exceptional at flat graphic design and vintage color reproduction."
}],
  comparison_notes: "Provides the perfect visual tools for merchandise design or nostalgic marketing campaigns.",
  variations: [{ label: "Bauhaus Mix", prompt_delta: "Add Bauhaus geometric shapes and primary colors red blue yellow", use_case: "Minimalist posters", pre_generated_asset_id: null,
      label_ko: "Bauhaus Mix",
      use_case_ko: "Minimalist posters"
}],
  common_failure_modes: ["If result appears too photographic -> reinforce with 'graphic flat illustration' keywords."],
  seo: {
    primary_keyword: "retro-futurism poster prompt",
    secondary_keywords: ["vintage sci-fi art ai", "space age aesthetic prompt"],
    lsi_keywords: ["halftone patterns", "flat color illustration"],
    meta_title: "Retro-Futurism Graphic Poster Prompt | Midjourney v6 Verified",
    meta_description: "Create nostalgic space age posters with verified Midjourney v6 prompt. Includes vintage colors and halftone textures.",
      meta_title_ko: "Retro-Futurism Graphic Poster Prompt | Midjourney v6 Verified",
      meta_description_ko: "Create nostalgic space age posters with verified Midjourney v6 prompt. Includes vintage colors and halftone textures."
},
  asset_metadata: {
    hero_image: "/images/prompts/trend-retrofuturism-004-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Vintage retro-futurism space poster",
    width: 1000,
    height: 1500,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "retro-004",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Vintage retro-futurism space poster"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for vintage graphic style." },
    title_ko: "Retro-Futurism Graphic Poster",
    result_first_title_ko: "Vintage 1960s space age aesthetic combined with modern digital graphics",
    short_description_ko: "Nostalgic yet futuristic poster designs inspired by mid-century sci-fi and space exploration.",
    emotional_hook_ko: "This prompt visualizes the optimistic future dreamt by the past—pure curiosity and yearning for the vast cosmos.",
    comparison_notes_ko: "Provides the perfect visual tools for merchandise design or nostalgic marketing campaigns.",
    use_cases_ko: ["poster_art", "merchandise_design", "editorial_graphic", "brand_campaign"],
    why_this_works_ko: ["Halftone dot patterns and vibrant flat colors recreate the texture of vintage prints for a unique aesthetic charm.", "Sleek chrome rockets are iconic elements of retro-futurism, delivering timeless sophistication."],
    common_failure_modes_ko: ["If result appears too photographic -> reinforce with 'graphic flat illustration' keywords."]
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
  emotional_hook: "This prompt goes beyond the limits of rigid concrete, showing new horizons of futuristic architecture that flows like a living organism.",
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
      variable_behavior_note: "Changing the building context modifies the structural complexity while maintaining the signature parametric organic aesthetic.",
        name_ko: "building_context",
        variable_behavior_note_ko: "Changing the building context modifies the structural complexity while maintaining the signature parametric organic aesthetic."
    },
    {
      name: "material_details",
      placeholder: "[material_details]",
      default_value: "self-cleaning white polymer and solar-responsive glass",
      recommended_values: ["iridescent carbon fiber and polished wood", "translucent bio-plastics and vertical moss walls", "weathered copper and smart glass panels", "3D printed concrete with organic textures"],
      variable_behavior_note: "Changing materials shifts the texture and sustainability mood. White polymer emphasizes purity, while carbon fiber stresses technical precision.",
        name_ko: "material_details",
        variable_behavior_note_ko: "Changing materials shifts the texture and sustainability mood. White polymer emphasizes purity, while carbon fiber stresses technical precision."
    }
  ],
  why_this_works: [
    "The Zaha Hadid style maximizes the aesthetic of curves, instantly evoking the most avant-garde aspects of modern architecture.",
    "Integrated greenery presents an eco-friendly and futuristic urban vision with high visual persuasiveness."
  ],
  model_notes: [{ model: "midjourney", version: "v6", note: "Geometric structures and light scattering are rendered with extreme realism.",
      note_ko: "Geometric structures and light scattering are rendered with extreme realism."
}],
  comparison_notes: "Provides artistic inspiration and visual impact that goes beyond traditional 3D rendering tools like V-Ray or Lumion.",
  variations: [{ label: "Interior View", prompt_delta: "Change focus to interior space, flowing atrium, natural light filtering from above", use_case: "Interior design concepts", pre_generated_asset_id: null,
      label_ko: "Interior View",
      use_case_ko: "Interior design concepts"
}],
  common_failure_modes: ["If building appears disconnected from the ground -> reinforce with 'grounded composition, heavy foundations' keywords."],
  seo: {
    primary_keyword: "parametric architecture prompt",
    secondary_keywords: ["modern building design ai", "archviz prompt midjourney"],
    lsi_keywords: ["Zaha Hadid style", "organic curves"],
    meta_title: "Parametric Architecture Viz Prompt | Midjourney v6 Verified",
    meta_description: "Generate breathtaking futuristic building designs. Verified Midjourney v6 prompt for architects and designers.",
      meta_title_ko: "Parametric Architecture Viz Prompt | Midjourney v6 Verified",
      meta_description_ko: "Generate breathtaking futuristic building designs. Verified Midjourney v6 prompt for architects and designers."
},
  asset_metadata: {
    hero_image: "/images/prompts/trend-archviz-005-hero.webp",
    thumbnail: null,
    variations: [],
    alt_text: "Futuristic parametric white building design",
    width: 1600,
    height: 900,
    format: "webp",
    placeholder: null,
    source_model: "midjourney",
    source_prompt_hash: "arch-005",
    exif_extracted: true,
    cdn_cache_tier: "public_long_cache",
      alt_text_ko: "Futuristic parametric white building design"
},
  review: { human_review_required: true, review_status: "approved", reviewer_note: "Verified for architectural accuracy and lighting." },
    title_ko: "Parametric Architecture Visualization",
    result_first_title_ko: "Breathtaking parametric building design with flowing organic forms and futuristic materials",
    short_description_ko: "High-end architectural visualization for vanguard building designs and urban planning concepts.",
    emotional_hook_ko: "This prompt goes beyond the limits of rigid concrete, showing new horizons of futuristic architecture that flows like a living organism.",
    comparison_notes_ko: "Provides artistic inspiration and visual impact that goes beyond traditional 3D rendering tools like V-Ray or Lumion.",
    use_cases_ko: ["architectural_concept", "urban_planning", "interior_design", "real_estate_marketing"],
    why_this_works_ko: ["The Zaha Hadid style maximizes the aesthetic of curves, instantly evoking the most avant-garde aspects of modern architecture.", "Integrated greenery presents an eco-friendly and futuristic urban vision with high visual persuasiveness."],
    common_failure_modes_ko: ["If building appears disconnected from the ground -> reinforce with 'grounded composition, heavy foundations' keywords."]
};

export const trendPrompts: PromptCard[] = [
  claymorphismPrompt,
  futuristicTypographyPrompt,
  hyperSurrealismPrompt,
  retroFuturismPrompt,
  archVizPrompt
];
