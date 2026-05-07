'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Search, 
  MousePointerClick, 
  SlidersHorizontal, 
  Layout,
  Gamepad2,
  Megaphone,
  Info,
  ShieldCheck,
  Star,
  ArrowRight,
  Library
} from 'lucide-react';
import { useState, useMemo } from 'react';
import PromptCard from './PromptCard';
import { PromptCard as PromptType } from '../lib/types';

interface HomeClientProps {
  lang: 'en' | 'ko';
  dict: any;
  prompts: PromptType[];
}

export default function HomeClient({ lang, dict, prompts }: HomeClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrompts = useMemo(() => {
    return prompts.filter(prompt => {
      const searchStr = searchQuery.toLowerCase();
      const inEnglish = (
        prompt.title.toLowerCase().includes(searchStr) ||
        prompt.category.toLowerCase().includes(searchStr) ||
        prompt.target_model.toLowerCase().includes(searchStr) ||
        prompt.seo.secondary_keywords.some(tag => tag.toLowerCase().includes(searchStr))
      );
      
      if (lang === 'ko') {
        const inKorean = (
          (prompt.title_ko?.toLowerCase().includes(searchStr)) ||
          (prompt.short_description_ko?.toLowerCase().includes(searchStr)) ||
          (prompt.use_cases_ko?.some(uc => uc.toLowerCase().includes(searchStr)))
        );
        return inEnglish || inKorean;
      }
      
      return inEnglish;
    });
  }, [searchQuery, lang, prompts]);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href={`/${lang}/`} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center glow-primary group-hover:scale-110 transition-transform">
              <Zap className="text-white fill-white" size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase">{dict.nav.logo}</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            {[
              { href: `/${lang}/category/ui_ux/`, icon: Layout, label: lang === 'ko' ? "UI/UX 디자인" : "UI/UX" },
              { href: `/${lang}/category/game_asset/`, icon: Gamepad2, label: lang === 'ko' ? "게임 에셋" : "GAME" },
              { href: `/${lang}/category/marketing/`, icon: Megaphone, label: lang === 'ko' ? "마케팅" : "MARKETING" },
              { href: `/${lang}/category/workflow_recipe/`, icon: Library, label: lang === 'ko' ? "레시피" : "RECIPE" },
            ].map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className="text-[10px] font-black text-slate-500 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-[0.2em]"
              >
                <item.icon size={14} /> {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 border-r border-white/10 pr-6 mr-2">
              <Link href="/en/" className={`text-[10px] font-black uppercase tracking-widest ${lang === 'en' ? 'text-blue-500' : 'text-slate-500'}`}>EN</Link>
              <span className="text-slate-800 text-[10px]">/</span>
              <Link href="/ko/" className={`text-[10px] font-black uppercase tracking-widest ${lang === 'ko' ? 'text-blue-500' : 'text-slate-500'}`}>KO</Link>
            </div>
            <Link href={`/${lang}/about/`} className="text-slate-500 hover:text-white transition-colors">
              <Info size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
                <Star size={12} className="fill-blue-400" /> {dict.hero.tag}
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.85] uppercase">
                {lang === 'en' ? (
                  <>Find the <span className="text-blue-600">Visual.</span><br />Copy the <span className="text-white/30">Recipe.</span></>
                ) : (
                  <>비주얼을 <span className="text-blue-600">찾고,</span><br />레시피를 <span className="text-white/30">복사하세요.</span></>
                )}
              </h1>
              <p className="text-xl text-slate-400 mb-14 leading-relaxed max-w-xl font-medium">
                {dict.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  href="#prompts" 
                  className="px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-3 group"
                >
                  {dict.hero.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative aspect-square lg:h-[700px] rounded-[3.5rem] overflow-hidden border border-white/5 glow-blue shadow-2xl"
            >
              <Image 
                src="/images/hero-premium.png"
                alt="Premium AI Visualization"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-10 left-10 right-10 p-10 bg-slate-900/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 max-w-sm">
                <div className="flex items-center gap-3 mb-5">
                  <ShieldCheck size={18} className="text-blue-400" />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">{dict.hero.verified_framework}</span>
                </div>
                <p className="text-base font-bold text-slate-300 mb-6 leading-relaxed italic">
                  {lang === 'en' ? '"Future-proof UI/UX dashboard system with dynamic glassmorphism modules..."' : '"동적 글래스모피즘 모듈을 포함한 미래형 UI/UX 대시보드 시스템..."'}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em]">{lang === 'ko' ? "모델: MJ v6 고해상도" : "Model: MJ v6 High-Res"}</span>
                  <div className="flex gap-1.5">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-blue-500/50" />)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Grid Section */}
      <section id="prompts" className="py-40 bg-slate-950/50 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-6 block">{dict.home.curated}</span>
              <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-white mb-8 uppercase">{dict.home.master_title}</h2>
              <p className="text-slate-400 font-bold text-xl leading-relaxed">
                {lang === 'en' ? 'Meticulously engineered prompts verified for high-end production results. Select a visual vertical to begin.' : '고급 프로덕션 결과를 위해 검증되고 세심하게 설계된 프롬프트입니다. 시작할 비주얼 버티컬을 선택하세요.'}
              </p>
            </div>
            <div className="relative group min-w-[320px]">
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-slate-400 transition-all focus-within:border-blue-500/50">
                <Search size={18} className="group-focus-within:text-blue-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={dict.home.search_placeholder}
                  className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest w-full placeholder:text-slate-700"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} lang={lang} />
            ))}
          </div>

          {filteredPrompts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-40 text-center glass rounded-[3.5rem] border-dashed"
            >
              <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-white/5 flex items-center justify-center mb-8 mx-auto">
                <Search size={32} className="text-slate-700" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 uppercase">{dict.home.no_results}</h3>
              <p className="text-slate-500 font-bold max-w-xs mx-auto">
                {dict.home.no_results_sub}
              </p>
            </motion.div>
          )}

          {/* Workflow Steps Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-56 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { icon: Search, title: lang === 'en' ? 'Discovery' : '발견', desc: lang === 'en' ? 'Find your target visual reference' : '타겟 비주얼 레퍼런스를 찾으세요' },
              { icon: MousePointerClick, title: lang === 'en' ? 'Analysis' : '분석', desc: lang === 'en' ? 'Identify core engineering patterns' : '핵심 엔지니어링 패턴을 식별하세요' },
              { icon: SlidersHorizontal, title: lang === 'en' ? 'Refinement' : '정제', desc: lang === 'en' ? 'Adjust variables for your context' : '맥락에 맞게 변수를 조정하세요' },
              { icon: Zap, title: lang === 'en' ? 'Deployment' : '배포', desc: lang === 'en' ? 'Paste into your AI production engine' : 'AI 프로덕션 엔진에 붙여넣으세요' },
            ].map((step, idx) => (
              <motion.div 
                key={step.title} 
                variants={itemVariants}
                className="relative group p-12 bg-white/[0.01] hover:bg-white/[0.03] rounded-[3rem] border border-white/5 transition-all text-center overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center mb-10 mx-auto shadow-2xl group-hover:glow-blue transition-all duration-500">
                    <step.icon className="text-blue-500" size={32} />
                  </div>
                  <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-sm text-slate-500 font-bold leading-relaxed">{step.desc}</p>
                </div>
                <div className="absolute top-0 right-0 p-6 text-[50px] font-black text-white/[0.01] select-none uppercase leading-none">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-32 bg-[#01040f]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
              <Zap className="text-white fill-white" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">{dict.nav.logo}</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-16">
            <Link href={`/${lang}/category/ui_ux/`} className="hover:text-white transition-colors">UI/UX Archive</Link>
            <Link href={`/${lang}/category/game_asset/`} className="hover:text-white transition-colors">Game Modules</Link>
            <Link href={`/${lang}/category/marketing/`} className="hover:text-white transition-colors">Marketing Assets</Link>
            <Link href={`/${lang}/category/workflow_recipe/`} className="hover:text-white transition-colors">Workflow Recipes</Link>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
            <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.2em]">
              {dict.footer.rights}
            </p>
            <div className="flex gap-12 text-[10px] font-black text-slate-700 uppercase tracking-[0.2em]">
              <span>{dict.footer.encrypted}</span>
              <span>{dict.footer.indexing}</span>
              <span>{dict.footer.curated}</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
