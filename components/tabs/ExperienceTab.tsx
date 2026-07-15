'use client';

import { motion } from 'framer-motion';
import { FileClock } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function ExperienceTab() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-32 pt-24">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-xs font-semibold uppercase tracking-widest text-aurora-violet dark:text-aurora-blue">
          Timeline
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          Experience
        </h2>
      </motion.div>

      <TiltCard className="mt-8 flex flex-col items-center gap-4 p-10 text-center">
        <FileClock className="h-8 w-8 text-aurora-violet dark:text-aurora-blue" aria-hidden="true" />
        <p className="max-w-md text-sm text-slate-600 dark:text-white/70">
          No entries yet — this tab will turn into a real work &amp; education timeline once your CV is in{' '}
          <code className="rounded bg-slate-900/5 px-1.5 py-0.5 font-mono text-xs dark:bg-white/10">portfolio/cv-drop/</code>.
        </p>
      </TiltCard>
    </div>
  );
}
