'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function AboutTab() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-32 pt-24">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-xs font-semibold uppercase tracking-widest text-aurora-violet dark:text-aurora-blue">
          Get to know me
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          About
        </h2>
      </motion.div>

      <TiltCard className="mt-8 p-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-aurora-violet dark:text-aurora-blue" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-white/50">Studying</p>
              <p className="text-sm font-medium text-slate-800 dark:text-white">Computer Science, Ashesi University</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-aurora-violet dark:text-aurora-blue" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-white/50">Roots</p>
              <p className="text-sm font-medium text-slate-800 dark:text-white">Niger, building for West &amp; East Africa</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-aurora-violet dark:text-aurora-blue" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-white/50">Also</p>
              <p className="text-sm font-medium text-slate-800 dark:text-white">ALX Software Engineering alum</p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 p-5 text-sm text-slate-500 dark:border-white/15 dark:bg-white/5 dark:text-white/50">
          This section is waiting on your CV — drop it in <code className="rounded bg-slate-900/5 px-1.5 py-0.5 font-mono text-xs dark:bg-white/10">portfolio/cv-drop/</code> and
          I&apos;ll turn it into a real bio, education history, and story here.
        </div>
      </TiltCard>
    </div>
  );
}
