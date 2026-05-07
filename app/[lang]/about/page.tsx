'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Search, 
  MousePointerClick, 
  SlidersHorizontal, 
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Lock,
  ArrowRight,
  Target,
  Layers,
  Lightbulb
} from 'lucide-react';
import { getDictionary, Locale } from '../../../lib/dictionary';

export default function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href={`/${lang}/`} className="flex items-center gap-3 group text-slate-500 hover:text-white transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">{dict.nav.back}</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap className="text-white fill-white" size={16} />
            </div>
            <span className="text-sm font-black tracking-tighter text-white uppercase">{dict.nav.logo}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 relative overflow-hidden border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-black text-blue-500 uppercase tracking-[0.5em] mb-10 block">Strategic Principle</span>
            <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-white mb-12 leading-[0.85] uppercase">
              Visual-first <br /><span className="text-blue-600">Archive.</span>
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed font-medium max-w-2xl mx-auto">
              PromptFlow is a professional engineering digital library for high-authority AI image prompts. 
              We focus on the result first, providing the recipe to reproduce excellence.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      </section>

      {/* Core Values */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black tracking-tighter text-white uppercase mb-6">Operational Architecture</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full glow-primary" />
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: Search,
                title: 'Outcome Discovery',
                description: 'We prioritize visual output. Browse our verified seed library to find the exact style you need.'
              },
              {
                icon: ShieldCheck,
                title: 'Verified Synthesis',
                description: 'Every framework is manually tested against Midjourney v6 and DALL-E 3 for consistency.'
              },
              {
                icon: Zap,
                title: 'Prompt Recipes',
                description: 'Copy high-authority prompt structures optimized with variables for production-grade results.'
              }
            ].map((item, idx) => (
              <motion.div 
                key={item.title} 
                variants={itemVariants}
                className="glass rounded-[3rem] p-12 group hover:bg-blue-600/5 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-slate-900 border border-white/10 flex items-center justify-center mb-10 group-hover:glow-blue transition-all duration-700 text-blue-500">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight leading-tight">{item.title}</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.description}</p>
                <div className="mt-10 text-[10px] font-black text-slate-700 uppercase tracking-[0.3em]">
                  Module {idx + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="glass rounded-[4rem] p-24 border-white/5 glow-blue mb-32">
            <h2 className="text-5xl font-black tracking-tighter text-white uppercase mb-8 leading-none">Start Engineering.</h2>
            <p className="text-slate-400 font-bold mb-14 text-xl">
              Explore our curated archive of high-authority visual frameworks.
            </p>
            <Link
              href={`/${lang}/`}
              className="inline-flex items-center gap-4 bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:brightness-110 transition-all group"
            >
              Enter Archive <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-20 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Zap className="text-white fill-white" size={16} />
              </div>
              <span className="text-lg font-black tracking-tighter text-white uppercase">{dict.nav.logo}</span>
            </div>
            
            <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.5em]">
              {dict.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
