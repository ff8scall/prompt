export interface Variable {
  name: string;
  name_ko?: string;
  placeholder: string;
  default_value: string;
  recommended_values: string[];
  variable_behavior_note: string;
  variable_behavior_note_ko?: string;
}

export interface ModelNote {
  model: string;
  version: string;
  note: string;
  note_ko?: string;
}

export interface Variation {
  label: string;
  label_ko?: string;
  prompt_delta: string;
  pre_generated_asset_id: string | null;
  use_case: string;
  use_case_ko?: string;
}

export interface SEO {
  primary_keyword: string;
  secondary_keywords: string[];
  lsi_keywords: string[];
  meta_title: string;
  meta_title_ko?: string;
  meta_description: string;
  meta_description_ko?: string;
}

export interface AssetMetadata {
  hero_image: string | null;
  thumbnail: string | null;
  variations: string[];
  alt_text: string;
  alt_text_ko?: string;
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
  title_ko?: string;
  result_first_title: string;
  result_first_title_ko?: string;
  short_description: string;
  short_description_ko?: string;
  emotional_hook: string;
  emotional_hook_ko?: string;
  category: string;
  vertical: string;
  use_cases: string[];
  use_cases_ko?: string[];
  target_model: string;
  model_version: string;
  model_confidence: string;
  prompt_text: string;
  negative_prompt: string;
  aspect_ratio_tags: string[];
  variables: Variable[];
  why_this_works: string[];
  why_this_works_ko?: string[];
  model_notes: ModelNote[];
  comparison_notes: string;
  comparison_notes_ko?: string;
  variations: Variation[];
  common_failure_modes: string[];
  common_failure_modes_ko?: string[];
  seo: SEO;
  asset_metadata: AssetMetadata;
  review: Review;
}
