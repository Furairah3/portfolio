'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail, User, Briefcase, FolderGit2, MessageCircle } from 'lucide-react';
import KineticText from '@/components/KineticText';
import TiltCard from '@/components/TiltCard';
import SkillsMarquee from '@/components/SkillsMarquee';
import ProjectImageMarquee from '@/components/ProjectImageMarquee';
import type { TabId } from '@/lib/tabs';
import { PROFILE } from '@/lib/profile';
import { PROJECTS } from '@/lib/projects';

const QUICK_LOOK: { id: TabId; icon: typeof User; title: string; body: string; cta: string }[] = [
  {
    id: 'about',
    icon: User,
    title: 'About',
    body: 'MasterCard Foundation Scholar studying Computer Science at Ashesi University — with a background in nursing that still shapes what I build.',
    cta: 'Read my story',
  },
  {
    id: 'experience',
    icon: Briefcase,
    title: 'Experience',
    body: 'Currently a Risk & Compliance Intern on the QuantRisk project at MTN Ghana — plus AI research, QA, and years of hands-on healthcare work in Niger.',
    cta: 'See the timeline',
  },
  {
    id: 'projects',
    icon: FolderGit2,
    title: 'Projects',
    body: `${PROJECTS.length} real builds — from a nationwide disability-rights website to an enterprise risk platform for MTN Ghana.`,
    cta: 'Browse projects',
  },
  {
    id: 'contact',
    icon: MessageCircle,
    title: 'Contact',
    body: "Open to internships, collaborations, and mission-driven projects. I'd love to hear from you.",
    cta: 'Get in touch',
  },
];

export default function HomeTab({ onNavigate }: { onNavigate: (id: TabId) => void }) {
  return (
    <div className="pb-10 pt-24">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="glass-pill px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-aurora-violet dark:text-aurora-blue">
          Software Engineer
        </p>

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-6xl">
          <KineticText text="Foureiratou" />
          <br />
          <KineticText text="ZAKARI YAOU IDI" />
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
            href={PROFILE.github}
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

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-white/50">
          A Look At The Work
        </p>
        <div className="mt-6">
          <ProjectImageMarquee />
        </div>
      </motion.div>

      <div className="mx-auto mt-20 grid max-w-5xl gap-5 px-6 sm:grid-cols-2">
        {QUICK_LOOK.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group focus-ring text-left"
            >
              <TiltCard className="h-full p-6 transition-shadow hover:shadow-2xl">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-aurora-violet dark:text-aurora-blue" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">{item.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-aurora-violet transition-transform group-hover:translate-x-1 dark:text-aurora-blue">
                  {item.cta} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </TiltCard>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
