import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Cpu, 
  Calendar, 
  Target, 
  Lightbulb, 
  Layers, 
  ChevronRight,
  Zap,
  Tag,
  Star
} from 'lucide-react';
import { getPromptBySlug, prompts } from '../../../lib/prompts';
import VariableSandbox from '../../../components/VariableSandbox';
import PromptCard from '../../../components/PromptCard';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const prompt = getPromptBySlug(params.slug);
  if (!prompt) return { title: 'Not Found' };

  return {
    title: `${prompt.title} | PROMPTFLOW`,
    description: prompt.seo.meta_description,
    keywords: prompt.seo.secondary_keywords,
    openGraph: {
      title: prompt.title,
      description: prompt.short_description,
      images: [prompt.asset_metadata.hero_image || ''],
    },
  };
}

export function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }));
}

export default function PromptDetailPage({ params }: Props) {
  const prompt = getPromptBySlug(params.slug);
  
  if (!prompt) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': prompt.title,
    'description': prompt.short_description,
    'image': prompt.asset_metadata.hero_image,
    'step': prompt.why_this_works.map((reason, idx) => ({
      '@type': 'HowToStep',
      'position': idx + 1,
      'text': reason
    })),
    'tool': {
      '@type': 'SoftwareApplication',
      'name': prompt.target_model
    }
  };

  return (
    <main className="min-h-screen pb-32">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

      <div className="max-w-7xl mx-auto px-6 pt-40">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
          <div className="space-y-10">
            <div className="flex flex-wrap gap-3">
              {prompt.verified_badge && (
                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-[0.2em]">
                  <ShieldCheck size={14} /> Verified Result
                </div>
              )}
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-black uppercase tracking-[0.2em]">
                <Cpu size={14} /> {prompt.target_model} {prompt.model_version}
              </div>
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 border border-white/5 text-slate-500 text-[9px] font-black uppercase tracking-[0.2em]">
                <Calendar size={14} /> {prompt.last_verified_at}
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-white leading-[0.95] uppercase">
              {prompt.title}
            </h1>
            
            <p className="text-2xl text-slate-400 leading-relaxed font-medium">
              {prompt.result_first_title}
            </p>

            <div className="p-8 glass rounded-[2.5rem] border-l-4 border-l-blue-600 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-xl text-white font-bold italic leading-relaxed">
                  "{prompt.emotional_hook}"
                </p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <Lightbulb size={120} className="text-blue-500" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] flex items-center gap-3">
                <Target size={16} /> Best Application Scenarios
              </h3>
              <div className="flex flex-wrap gap-3">
                {prompt.use_cases.map((useCase) => (
                  <span
                    key={useCase}
                    className="px-5 py-2.5 bg-slate-900 border border-white/5 rounded-2xl text-[10px] font-black text-slate-300 uppercase tracking-widest"
                  >
                    {useCase.replace('_', ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[700px] rounded-[3.5rem] overflow-hidden border border-white/10 glow-blue shadow-2xl">
            {prompt.asset_metadata.hero_image ? (
              <Image
                src={prompt.asset_metadata.hero_image}
                alt={prompt.asset_metadata.alt_text}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            ) : (
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center text-slate-800">
                <Zap size={64} className="opacity-10" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-24">
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-24">
            {/* Variables Sandbox */}
            {prompt.variables.length > 0 && (
              <section id="sandbox">
                <VariableSandbox
                  promptText={prompt.prompt_text}
                  variables={prompt.variables}
                />
              </section>
            )}

            {/* Strategic Analysis */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-blue-500 glow-blue">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Why This Works</h3>
              </div>
              <div className="grid gap-6">
                {prompt.why_this_works.map((reason, idx) => (
                  <div key={idx} className="glass p-8 rounded-[2rem] border-white/5 flex gap-8 group hover:bg-blue-600/5 transition-all duration-500">
                    <span className="text-4xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-slate-300 font-bold text-lg leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Prompt Variations */}
            {prompt.variations.length > 0 && (
              <section className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-blue-500 glow-blue">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Prompt Variations</h3>
                </div>
                <div className="grid gap-6">
                  {prompt.variations.map((variation) => (
                    <div
                      key={variation.label}
                      className="glass p-10 rounded-[2.5rem] border-white/5 group hover:border-blue-600/30 transition-all duration-500"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">{variation.label}</h4>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{variation.use_case}</span>
                      </div>
                      <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 font-mono text-sm text-blue-400/80 leading-relaxed">
                        <span className="text-slate-700 block mb-2 uppercase text-[9px] font-black tracking-widest">Modification Logic</span>
                        {variation.prompt_delta}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-5 space-y-16">
            <section className="glass rounded-[2.5rem] p-10 space-y-12 sticky top-32">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-blue-500">
                  <Cpu size={20} />
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-[0.4em]">Model Optimization</h3>
              </div>
              
              <div className="space-y-10">
                {prompt.model_notes.map((note) => (
                  <div key={note.model} className="space-y-4 relative pl-8 border-l border-white/10">
                    <div className="absolute top-0 left-[-2px] w-1 h-6 bg-blue-600" />
                    <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center justify-between">
                      {note.model} <span className="text-[10px] text-slate-600 font-bold">{note.version}</span>
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-bold">
                      {note.note}
                    </p>
                  </div>
                ))}
              </div>

              {prompt.comparison_notes && (
                <div className="pt-10 border-t border-white/5">
                  <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                    <Star size={14} className="text-yellow-500/50" /> Cross-Model Insights
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-bold italic">
                    "{prompt.comparison_notes}"
                  </p>
                </div>
              )}

              <div className="pt-10 border-t border-white/5">
                <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                  <Tag size={16} /> Semantic Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {prompt.seo.secondary_keywords.map(tag => (
                    <span key={tag} className="text-[10px] font-black text-slate-600 hover:text-blue-500 transition-colors cursor-default">
                      #{tag.replace(' ', '-')}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Related Prompts Section */}
        <section className="mt-40 pt-24 border-t border-white/5">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-blue-500">
                <Layers size={20} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Related Strategic Frameworks</h3>
            </div>
            <Link 
              href={`/category/${prompt.category}/`}
              className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              View Full Archive <ChevronRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {prompts
              .filter(p => p.category === prompt.category && p.slug !== prompt.slug)
              .slice(0, 3)
              .map(p => (
                <PromptCard key={p.id} prompt={p} />
              ))
            }
            {prompts.filter(p => p.category === prompt.category && p.slug !== prompt.slug).length === 0 && (
               <p className="text-slate-600 font-bold italic">More frameworks coming soon to this collection...</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
