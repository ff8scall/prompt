'use client';

import { useState, useMemo } from 'react';
import { Sliders, Sparkles, Terminal, Info, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Variable } from '../lib/types';
import CopyButton from './CopyButton';

interface Props {
  promptText: string;
  variables: Variable[];
}

export default function VariableSandbox({ promptText, variables }: Props) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    variables.forEach(v => {
      initial[v.name] = v.default_value;
    });
    return initial;
  });

  const finalPrompt = useMemo(() => {
    let result = promptText;
    variables.forEach(v => {
      const placeholder = v.placeholder || `[${v.name}]`;
      result = result.replace(placeholder, values[v.name] || v.default_value);
    });
    return result;
  }, [promptText, variables, values]);

  return (
    <div className="glass rounded-[2.5rem] p-10 space-y-12">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-blue-500 glow-blue">
          <Sliders size={22} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Variable Sandbox</h3>
          <p className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase mt-1">Real-time Engineering Module</p>
        </div>
      </div>
      
      {/* Inputs Area */}
      <div className="space-y-10">
        {variables.map((variable) => (
          <div key={variable.name} className="space-y-5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                {variable.name}
              </label>
              <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-blue-500/10 text-[9px] font-black text-blue-400 uppercase tracking-widest">
                <Sparkles size={10} />
                <span>Adjustable</span>
              </div>
            </div>
            
            <div className="relative group">
              <input
                type="text"
                value={values[variable.name]}
                onChange={(e) => setValues(prev => ({ ...prev, [variable.name]: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all outline-none"
                placeholder={variable.default_value}
              />
            </div>
            
            {variable.variable_behavior_note && (
              <div className="flex gap-3 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                <Info size={14} className="text-slate-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed font-bold">
                  {variable.variable_behavior_note}
                </p>
              </div>
            )}
            
            {/* Recommended Chips */}
            <div className="flex flex-wrap gap-2">
              {variable.recommended_values.slice(0, 5).map((value) => (
                <button
                  key={value}
                  onClick={() => setValues(prev => ({ ...prev, [variable.name]: value }))}
                  className="text-[10px] font-black bg-slate-900 text-slate-500 hover:text-white hover:bg-blue-600 hover:border-blue-500 border border-white/5 px-4 py-2 rounded-full transition-all tracking-wider"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Resulting Prompt Area */}
      <div className="pt-10 border-t border-white/5 space-y-6">
        <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
          <Terminal size={14} />
          <span>Final Compiled Framework</span>
        </div>
        
        <div className="relative group">
          <textarea
            value={finalPrompt}
            readOnly
            rows={5}
            className="w-full p-8 bg-slate-950/80 text-blue-400 font-mono text-sm rounded-[2rem] border border-white/10 resize-none leading-relaxed tracking-tight"
          />
          <div className="absolute inset-0 rounded-[2rem] bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
        
        <CopyButton text={finalPrompt} label="Copy Modified Prompt" />
      </div>
    </div>
  );
}
