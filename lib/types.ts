export interface Variable {
  name: string;
  placeholder: string;
  default_value: string;
  recommended_values: string[];
  variable_behavior_note: string;
}

export interface ModelNote {
  model: string;
  version: string;
  note: string;
}

export interface Variation {
  label: string;
  prompt_delta: string;
  pre_generated_asset_id: string | null;
  use_case: string;
}

export interface SEO {
  primary_keyword: string;
  secondary_keywords: string[];
  lsi_keywords: string[];
  meta_title: string;
  meta_description: string;
}

export interface AssetMetadata {
  hero_image: string | null;
  thumbnail: string | null;
  variations: string[];
  alt_text: string;
  width: number;
  height: number;
  format: string;
  placeholder: string | null;
  source_model: string;
  source_prompt_hash: string;
  exif_extracted: boolean;
  cdn_cache_tier: string;
}

export interface Review {
  human_review_required: boolean;
  review_status: string;
  reviewer_note: string | null;
}

export interface PromptCard {
  id: string;
  slug: string;
  status: string;
  quality_tier: string;
  verified_badge: boolean;
  last_verified_at: string | null;
  title: string;
  result_first_title: string;
  short_description: string;
  emotional_hook: string;
  category: string;
  vertical: string;
  use_cases: string[];
  target_model: string;
  model_version: string;
  model_confidence: string;
  prompt_text: string;
  negative_prompt: string;
  aspect_ratio_tags: string[];
  variables: Variable[];
  why_this_works: string[];
  model_notes: ModelNote[];
  comparison_notes: string;
  variations: Variation[];
  common_failure_modes: string[];
  seo: SEO;
  asset_metadata: AssetMetadata;
  review: Review;
}
