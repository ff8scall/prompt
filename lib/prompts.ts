import { PromptCard } from './types';
import { uiUxPrompts } from './data/ui-ux';
import { gameAssetPrompts } from './data/game-asset';
import { marketingPrompts } from './data/marketing';
import { workflowRecipePrompts } from './data/workflow-recipe';
import { trendPrompts } from './data/trend';

// Consolidate prompts from all categories
export const prompts: PromptCard[] = [
  ...uiUxPrompts,
  ...gameAssetPrompts,
  ...marketingPrompts,
  ...workflowRecipePrompts,
  ...trendPrompts
];

export function getPromptBySlug(slug: string): PromptCard | undefined {
  return prompts.find(p => p.slug === slug);
}

export function getPromptsByCategory(category: string): PromptCard[] {
  return prompts.filter(p => p.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(prompts.map(p => p.category))];
}
