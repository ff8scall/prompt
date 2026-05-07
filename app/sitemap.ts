import { MetadataRoute } from 'next';
import { prompts } from '../lib/prompts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prompt.lego-sia.com';
  const allPrompts = prompts;
  const langs = ['en', 'ko'];

  // 1. Static Routes
  const staticPaths = [
    '',
    '/about',
    '/category/ui_ux',
    '/category/game_asset',
    '/category/marketing',
    '/category/workflow_recipe',
    '/category/trend',
  ];

  const staticRoutes = langs.flatMap((lang) => 
    staticPaths.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  );

  // 2. Dynamic Prompt Routes (90+ items)
  const promptRoutes = langs.flatMap((lang) => 
    allPrompts.map((prompt) => ({
      url: `${baseUrl}/${lang}/prompt/${prompt.slug}`,
      lastModified: new Date(prompt.last_verified_at || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...promptRoutes];
}
