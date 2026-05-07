import { getDictionary, Locale } from '../../lib/dictionary';
import { Metadata } from 'next';
import HomeClient from '../../components/HomeClient';
import { prompts } from '../../lib/prompts';

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang);
  return {
    title: `${dict.nav.logo} | ${dict.hero.tag}`,
    description: dict.hero.subtitle,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'ko': '/ko',
      },
    },
  };
}

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);
  
  return (
    <HomeClient lang={lang} dict={dict} prompts={prompts} />
  );
}
