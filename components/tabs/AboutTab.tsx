'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Trophy, Languages } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import { EDUCATION, AWARDS, PROFILE } from '@/lib/profile';

export default function AboutTab() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-10 pt-24">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-xs font-semibold uppercase tracking-widest text-aurora-violet dark:text-aurora-blue">
          Get to know me
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          About
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-white/70">
          I&apos;m a Computer Science student at Ashesi University and a MasterCard Foundation Scholar, originally
          from Niamey, Niger, now based in Accra, Ghana. Before switching into tech, I trained and worked in
          nursing — that cross-disciplinary background is a lot of why I keep gravitating toward health and
          accessibility technology. Outside of code: K-dramas, C-dramas, and gaming with friends.
        </p>
      </motion.div>

      <div className="mt-8 flex items-center gap-3 text-sm text-slate-600 dark:text-white/70">
        <MapPin className="h-4 w-4 shrink-0 text-aurora-violet dark:text-aurora-blue" aria-hidden="true" />
        {PROFILE.location} · from {PROFILE.origin}
      </div>

      <TiltCard className="mt-8 p-8">
        <div className="mb-5 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-aurora-violet dark:text-aurora-blue" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">Education</h3>
        </div>
        <div className="space-y-4">
          {EDUCATION.map((edu) => (
            <div key={edu.school} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">{edu.school}</p>
                <p className="text-sm text-slate-600 dark:text-white/70">{edu.detail}</p>
              </div>
              <p className="text-xs font-medium text-slate-500 dark:text-white/50">{edu.period}</p>
            </div>
          ))}
        </div>
      </TiltCard>

      <TiltCard className="mt-6 p-8">
        <div className="mb-5 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-aurora-violet dark:text-aurora-blue" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">Awards</h3>
        </div>
        <div className="space-y-4">
          {AWARDS.map((award) => (
            <div key={award.title} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">{award.title}</p>
                <p className="text-sm text-slate-600 dark:text-white/70">{award.detail}</p>
              </div>
              <p className="text-xs font-medium text-slate-500 dark:text-white/50">{award.period}</p>
            </div>
          ))}
        </div>
      </TiltCard>

      <TiltCard className="mt-6 p-8">
        <div className="mb-5 flex items-center gap-2">
          <Languages className="h-5 w-5 text-aurora-violet dark:text-aurora-blue" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">Languages</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {PROFILE.languages.map((lang) => (
            <span
              key={lang.name}
              className="glass-pill px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-white/80"
            >
              {lang.name} <span className="text-slate-500 dark:text-white/50">· {lang.level}</span>
            </span>
          ))}
        </div>
      </TiltCard>
    </div>
  );
}
