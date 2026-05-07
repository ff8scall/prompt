# System Map (2026-05-07)

## Project Overview
- **Name**: PromptFlow (`prompt.lego-sia.com`)
- **Core Value**: Visual-first prompt library and exploration platform.
- **Tech Stack**: Next.js (App Router), TypeScript, Vanilla CSS (Premium Aesthetics).

## Directory Structure
- `app/`: Next.js App Router-based page configuration.
  - `prompt/[slug]/`: Individual prompt detail pages (Dynamic Routing).
  - `category/[slug]/`: Category-specific exploration pages (Static Params applied).
  - `about/`: Service strategy and introduction.
- `components/`: Reusable premium UI components.
  - `PromptCard.tsx`: Display of prompt visual info and summary.
  - `CategoryClient.tsx`: Category-specific data rendering and filtering.
  - `VariableSandbox.tsx`: Prompt variable modification and virtual result guide.
- `lib/`: Core business logic and modular data.
  - `data/`: Prompt datasets by category.
    - `ui-ux.ts`: 25 UI/UX frameworks.
    - `game-asset.ts`: 20 game asset frameworks.
    - `marketing.ts`: 20 marketing/ecommerce frameworks.
    - `workflow-recipe.ts`: 20 business/creator workflows.
  - `prompts.ts`: Data integration hub and search utilities.
  - `types.ts`: Type definitions including the PromptCard interface.
- `public/`: Static assets (High-resolution WebP image repository).
- `.gravityBrain/`: Project long-term memory, persona, and grand strategy.

## Architecture Diagram
```mermaid
graph TD
    User([User]) --> App[Next.js App Router]
    App --> Route[Dynamic / Static Routing]
    Route --> Category[Category Pages]
    Route --> Detail[Prompt Detail Pages]
    Category --> Client[CategoryClient]
    Detail --> Sandbox[VariableSandbox]
    Client --> Hub[lib/prompts.ts Hub]
    Sandbox --> Hub
    Hub --> Modules[lib/data Modules]
    Modules --> UI[ui-ux.ts]
    Modules --> Game[game-asset.ts]
    Modules --> Mkt[marketing.ts]
    Modules --> Recipe[workflow-recipe.ts]
```

## External Dependencies
- Midjourney v6, DALL-E 3, SDXL (Prompt Reference)
- Next.js 14, Framer Motion, Lucide React
