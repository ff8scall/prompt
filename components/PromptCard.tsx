'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUpRight, Zap } from 'lucide-react';
import { PromptCard as PromptCardType } from '../lib/types';

interface Props {
  prompt: PromptCardType;
}

export default function PromptCard({ prompt }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -8 }}
    >
      <Link href={`/prompt/${prompt.slug}`} className="group block h-full">
        <div className="glass rounded-[2rem] overflow-hidden h-full flex flex-col group-hover:border-blue-500/30 group-hover:glow-blue transition-all duration-500">
          
          {/* Image Container with forced relative positioning */}
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
            {prompt.asset_metadata.hero_image ? (
              <Image
                src={prompt.asset_metadata.hero_image}
                alt={prompt.asset_metadata.alt_text}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-slate-800">
                <Zap size={48} className="opacity-10" />
              </div>
            )}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            
            {/* Top Badges */}
            <div className="absolute top-5 left-5 flex gap-2">
              <div className="px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-blue-400">
                {prompt.target_model}
              </div>
              {prompt.verified_badge && (
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={14} />
                </div>
              )}
            </div>
          </div>
          
          {/* Content Area */}
          <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                {prompt.category.replace('_', ' ')}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-600 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all">
                <ArrowUpRight size={16} />
              </div>
            </div>
            
            <h3 className="text-xl font-black text-white mb-3 line-clamp-1 group-hover:text-blue-400 transition-colors leading-tight uppercase tracking-tight">
              {prompt.title}
            </h3>
            
            <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed font-medium mb-8">
              {prompt.short_description}
            </p>
            
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1 h-1 rounded-full bg-blue-500/30" />
                ))}
              </div>
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest group-hover:text-slate-400 transition-colors">
                {prompt.quality_tier.replace('_', ' ')} Grade
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
