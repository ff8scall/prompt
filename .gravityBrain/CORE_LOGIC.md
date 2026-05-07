# Core Logic (2026-05-07)

## Design Philosophy
PromptFlow is not just a list of prompts; it provides an experience of **"reverse-engineering and varying prompts from verified visual results."** Users see an image and learn the principles (Variables, Why this works) that created it.

## Data Schema & Architecture
### 1. PromptCard Interface (`lib/types.ts`)
- All prompts strictly adhere to the `PromptCard` interface.
- **Variables**: Designed to make specific parts of the prompt text replaceable (e.g., `[subject]`, `[product_description]`).
- **SEO & pSEO**: Each data point generates dynamic metadata and JSON-LD (HowTo) via its own `seo` object.

### 2. Modular Data System (`lib/data/`)
- Modules are separated by category for data scalability and maintainability.
  - `ui-ux.ts`, `game-asset.ts`, `marketing.ts`, `workflow-recipe.ts`.
- **Centralized Hub (`lib/prompts.ts`)**: All modules are integrated (spread) in this file to form the `prompts` array, the Single Source of Truth for the entire platform.

### 3. Routing & Rendering Strategy
- **Category Routing**: `app/category/[slug]/page.tsx` statically generates predefined category pages via `generateStaticParams`.
- **Prompt Detail**: `app/prompt/[slug]/page.tsx` uses dynamic routing and handles invalid slug access with `notFound()`.

## Core Business Logic
### 1. Variable Processing & Sandbox (Variable Sandbox)
- When a user modifies a variable in the `VariableSandbox` component, it provides a real-time simulation of replacing `[variable_name]` within the `prompt_text`.
- Through `variable_behavior_note`, it provides visual predictive knowledge of "what stays and what changes" in the result when the user updates a value.

### 2. Model Optimization (Multi-Model Support)
- Provides `model_notes` tailored to the characteristics of each model (Midjourney v6, DALL-E 3, Stable Diffusion, etc.) to reduce trial and error during model transitions.

## Knowledge Transfer (For Future Agents)
- **Data Addition Procedure**: 
  1. Add a `PromptCard` object to the appropriate category file in `lib/data/`.
  2. Register the object in that file's export array (e.g., `uiUxPrompts`).
  3. Confirm automatic inclusion in the `prompts` array in `lib/prompts.ts`.
- **Routing Addition**: When creating a new category, ensure to update `generateStaticParams` and the valid slugs list in `app/category/[slug]/page.tsx`.
- **Image Naming Convention**: Place actual files according to the path specified in `asset_metadata.hero_image` (e.g., `/images/prompts/category-id-xxx.webp`).
