'use client';

import { useState } from 'react';
import { Copy, Check, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  text: string;
  label?: string;
  className?: string;
}

export default function CopyButton({ text, label, className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 overflow-hidden ${
        copied 
          ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
          : 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:brightness-110 active:scale-95'
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.div
            key="check"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Check size={18} strokeWidth={3} />
            <span>Copied to Clipboard</span>
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="flex items-center gap-3"
          >
            <Zap size={18} fill="currentColor" />
            <span>{label || 'Copy Verified Prompt'}</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Glow effect on hover */}
      {!copied && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      )}
    </button>
  );
}
