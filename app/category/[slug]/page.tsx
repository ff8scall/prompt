import { notFound } from 'next/navigation';
import CategoryClient from '../../../components/CategoryClient';
import { getPromptsByCategory } from '../../../lib/prompts';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return [
    { slug: 'ui_ux' },
    { slug: 'game_asset' },
    { slug: 'marketing' },
    { slug: 'workflow_recipe' }
  ];
}

export default function CategoryPage({ params }: Props) {
  const categoryPrompts = getPromptsByCategory(params.slug);
  
  const validSlugs = ['ui_ux', 'game_asset', 'marketing', 'workflow_recipe'];
  if (!validSlugs.includes(params.slug)) {
    notFound();
  }

  return (
    <CategoryClient slug={params.slug} prompts={categoryPrompts} />
  );
}
