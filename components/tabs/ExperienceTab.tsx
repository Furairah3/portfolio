'use client';

import { motion } from 'framer-motion';
import { Code2, HeartPulse } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import { TECH_EXPERIENCE, HEALTHCARE_EXPERIENCE, type ExperienceItem } from '@/lib/experience';

function Track({
  title,
  icon: Icon,
  items,
  delay,
}: {
  title: string;
  icon: typeof Code2;
  items: ExperienceItem[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-5 flex items-center gap-2">
        <Icon className="h-5 w-5 text-aurora-violet dark:text-aurora-blue" aria-hidden="true" />
        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <TiltCard key={`${item.role}-${item.org}`} className="p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.role}</h4>
              <span className="text-xs font-medium text-slate-500 dark:text-white/50">{item.period}</span>
            </div>
            <p className="text-xs font-semibold text-aurora-violet dark:text-aurora-blue">{item.org}</p>
            <ul className="mt-3 space-y-1.5">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm text-slate-600 dark:text-white/70">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-white/40" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </TiltCard>
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperienceTab() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-10 pt-24">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-xs font-semibold uppercase tracking-widest text-aurora-violet dark:text-aurora-blue">
          Timeline
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          Experience
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-white/70">
          Two tracks that shaped how I build: hands-on healthcare in Niger, and software/AI work since moving
          into Computer Science.
        </p>
      </motion.div>

      <div className="mt-10">
        <Track title="Technology & Leadership" icon={Code2} items={TECH_EXPERIENCE} delay={0.1} />
      </div>
      <div className="mt-12">
        <Track title="Healthcare (Niger)" icon={HeartPulse} items={HEALTHCARE_EXPERIENCE} delay={0.2} />
      </div>
    </div>
  );
}
