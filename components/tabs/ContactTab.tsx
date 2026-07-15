'use client';

import { motion } from 'framer-motion';
import { Mail, ExternalLink, Copy } from 'lucide-react';
import { useState } from 'react';
import TiltCard from '@/components/TiltCard';

const EMAIL = 'foureiratouzak@gmail.com';

export default function ContactTab() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="mx-auto max-w-2xl px-6 pb-32 pt-24 text-center">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-xs font-semibold uppercase tracking-widest text-aurora-violet dark:text-aurora-blue">
          Let&apos;s talk
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          Contact
        </h2>
        <p className="mt-3 text-slate-600 dark:text-white/70">
          Open to internships, collaborations, and mission-driven projects.
        </p>
      </motion.div>

      <TiltCard className="mt-8 flex flex-col items-center gap-4 p-10">
        <a
          href={`mailto:${EMAIL}`}
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 dark:bg-white dark:text-slate-900"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> {EMAIL}
        </a>
        <div className="flex gap-3">
          <button
            onClick={copyEmail}
            className="glass-pill focus-ring inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-white/80"
          >
            <Copy className="h-3.5 w-3.5" aria-hidden="true" /> {copied ? 'Copied!' : 'Copy email'}
          </button>
          <a
            href="https://github.com/Furairah3"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill focus-ring inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-white/80"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
          </a>
        </div>
      </TiltCard>
    </div>
  );
}
