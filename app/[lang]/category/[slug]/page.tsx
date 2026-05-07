import { notFound } from 'next/navigation';
import CategoryClient from '../../../../components/CategoryClient';
import { getPromptsByCategory } from '../../../../lib/prompts';
import { getDictionary, Locale, locales } from '../../../../lib/dictionary';
import { Metadata } from 'next';

interface Props {
  params: { lang: Locale; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  const categoryName = (dict as any).categories[params.slug] || params.slug;

  return {
    title: `${categoryName} | PROMPTFLOW`,
    description: `${categoryName} ${dict.category.verified}`,
    alternates: {
      canonical: `/${params.lang}/category/${params.slug}`,
      languages: {
        'en': `/en/category/${params.slug}`,
        'ko': `/ko/category/${params.slug}`,
      },
    },
  };
}

export function generateStaticParams() {
  const slugs = ['ui_ux', 'game_asset', 'marketing', 'workflow_recipe', 'trend'];
  const params: any[] = [];
  
  locales.forEach(lang => {
    slugs.forEach(slug => {
      params.push({ lang, slug });
    });
  });
  
  return params;
}

export default function CategoryPage({ params }: Props) {
  const categoryPrompts = getPromptsByCategory(params.slug);
  
  const validSlugs = ['ui_ux', 'game_asset', 'marketing', 'workflow_recipe', 'trend'];
  if (!validSlugs.includes(params.slug)) {
    notFound();
  }

  return (
    <CategoryClient lang={params.lang} slug={params.slug} prompts={categoryPrompts} />
  );
}
