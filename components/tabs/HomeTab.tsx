'use client';

import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import KineticText from '@/components/KineticText';
import TiltCard from '@/components/TiltCard';
import SkillsMarquee from '@/components/SkillsMarquee';
import type { TabId } from '@/lib/tabs';

export default function HomeTab({ onNavigate }: { onNavigate: (id: TabId) => void }) {
  return (
    <div className="mx-auto flex min-h-[85vh] max-w-3xl flex-col items-center justify-center px-6 pb-32 pt-24 text-center">
      <p className="glass-pill px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-aurora-violet dark:text-aurora-blue">
        Software Engineer
      </p>

      <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-6xl">
        <KineticText text="Foureiratou" />
        <br />
        <KineticText text="Zakari Yaou Idi" />
      </h1>

      <p className="mt-6 max-w-xl text-balance text-lg text-slate-600 dark:text-white/70">
        I build health, education, and disability-inclusion technology for underserved communities across
        West and East Africa — from a nationwide disability-rights website to offline-first health alert
        systems.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('projects')}
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 dark:bg-white dark:text-slate-900"
        >
          View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="glass-pill focus-ring inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 transition-transform hover:scale-105 dark:text-white"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> Get in Touch
        </button>
        <a
          href="https://github.com/Furairah3"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-pill focus-ring inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 transition-transform hover:scale-105 dark:text-white"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" /> GitHub
        </a>
      </div>

      <TiltCard className="mt-14 w-full p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-white/50">
          Tools &amp; Technologies
        </p>
        <SkillsMarquee />
      </TiltCard>
    </div>
  );
}
