'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ArrowLeft,
  Zap,
  Filter,
  SortAsc,
  Target,
  Layout,
  Gamepad2,
  Megaphone,
  Library,
  Sparkles
} from 'lucide-react';
import PromptCard from './PromptCard';
import { PromptCard as PromptCardType } from '../lib/types';

interface Props {
  slug: string;
  prompts: PromptCardType[];
}

const categoryInfo: Record<string, { title: string; description: string; icon: any }> = {
  'ui_ux': {
    title: 'UI/UX Design Archive',
    description: 'High-authority visual frameworks for modern digital interfaces and SaaS platforms. Verified Midjourney v6 and DALL-E 3 frameworks.',
    icon: Layout
  },
  'game_asset': {
    title: 'Game Asset Library',
    description: 'Modular game-ready assets engineered for consistent isometric and RPG environments. Pixel art and high-fidelity rendering modules.',
    icon: Gamepad2
  },
  'marketing': {
    title: 'Marketing & Ecommerce',
    description: 'Conversion-optimized photography and social creative prompts for premium brands. Product hero and campaign visual frameworks.',
    icon: Megaphone
  },
  'workflow_recipe': {
    title: 'Workflow Recipes',
    description: 'End-to-end procedural frameworks for professional creators and strategists. Integrated business and creative production recipes.',
    icon: Library
  },
  'trend': {
    title: 'Visual Trends & Styles',
    description: 'Cutting-edge aesthetic modules and experimental style frameworks. From retro-futurism to hyper-realism trends.',
    icon: Sparkles
  }
};

export default function CategoryClient({ slug, prompts }: Props) {
  const info = categoryInfo[slug];
  if (!info) return null;

  const Icon = info.icon;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group text-slate-500 hover:text-white transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Archive</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap className="text-white fill-white" size={16} />
            </div>
            <span className="text-sm font-black tracking-tighter text-white uppercase">PROMPTFLOW</span>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-[1.5rem] bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 glow-blue">
                <Icon size={32} />
              </div>
              <div className="h-px w-16 bg-white/10" />
              <span className="text-[11px] font-black text-blue-500 uppercase tracking-[0.5em]">Vertical Archive</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl font-black tracking-tighter text-white mb-10 leading-none uppercase">
              {info.title}
            </h1>
            <p className="text-2xl text-slate-400 max-w-3xl leading-relaxed font-medium mb-16">
              {info.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['Verified Assets', 'High Confidence', 'Production Ready', 'Master Tier'].map((filter) => (
                <button
                  key={filter}
                  className="px-8 py-3 bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-600/10 text-slate-500 hover:text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Glow Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      </section>

      {/* Grid Section */}
      <section className="py-32 border-t border-white/5 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-20">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 glow-primary" />
              <h2 className="text-sm font-black text-white uppercase tracking-[0.2em]">
                {prompts.length} Verified Master Frameworks
              </h2>
            </div>
            
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                <SortAsc size={16} /> Authority Rank
              </button>
              <button className="hidden sm:flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                <Filter size={16} /> Filter
              </button>
            </div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {prompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </motion.div>

          {prompts.length === 0 && (
            <div className="py-40 text-center glass rounded-[3.5rem] border-dashed">
              <p className="text-slate-700 font-black uppercase tracking-[0.5em] text-sm">Awaiting New Framework Verifications</p>
            </div>
          )}
        </div>
      </section>

      {/* Cross-Link Verticals */}
      <section className="py-40 border-t border-white/5 bg-[#01040f]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-[0.5em] mb-16 flex items-center gap-5">
            <Target size={18} /> Cross-Vertical Exploration
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {Object.entries(categoryInfo)
              .filter(([key]) => key !== slug)
              .map(([key, cInfo]) => (
                <Link
                  key={key}
                  href={`/category/${key}/`}
                  className="group relative p-12 bg-white/[0.01] border border-white/5 rounded-[3rem] hover:bg-white/[0.03] hover:border-blue-600/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <div className="w-20 h-20 rounded-[2rem] bg-slate-900 border border-white/10 flex items-center justify-center text-slate-700 group-hover:text-blue-500 group-hover:glow-blue transition-all duration-700">
                        <cInfo.icon size={32} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-blue-400 transition-colors">{cInfo.title}</h4>
                        <p className="text-sm text-slate-500 font-bold max-w-sm leading-relaxed">{cInfo.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="text-slate-800 group-hover:text-blue-600 group-hover:translate-x-3 transition-all duration-700" size={28} />
                  </div>
                  <div className="absolute bottom-[-30px] right-[-10px] text-[120px] font-black text-white/[0.01] select-none uppercase leading-none">
                    PROMPT
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-2xl">
              <Zap className="text-white fill-white" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">PROMPTFLOW</span>
          </div>
          <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.5em]">
            © 2026 PromptFlow Protocol. Engineering verified results.
          </p>
        </div>
      </footer>
    </div>
  );
}
