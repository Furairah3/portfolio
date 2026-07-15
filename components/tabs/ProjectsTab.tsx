'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import { PROJECTS } from '@/lib/projects';

export default function ProjectsTab() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-32 pt-24">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-xs font-semibold uppercase tracking-widest text-aurora-violet dark:text-aurora-blue">
          Selected Work
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-white/70">
          Real repositories, pulled straight from GitHub — mission-driven builds for health access, education
          access, and disability inclusion.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="group focus-ring block rounded-[28px]"
          >
            <TiltCard className={`h-full p-6 transition-shadow hover:shadow-2xl ${project.featured ? 'ring-1 ring-aurora-violet/30' : ''}`}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-white/40"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="glass-pill px-3 py-1 text-xs font-semibold text-aurora-violet dark:text-aurora-blue">
                  {project.language}
                </span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
