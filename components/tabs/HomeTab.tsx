'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail, Briefcase, FolderGit2, MessageCircle } from 'lucide-react';
import KineticText from '@/components/KineticText';
import TiltCard from '@/components/TiltCard';
import SkillsMarquee from '@/components/SkillsMarquee';
import ProjectImageMarquee from '@/components/ProjectImageMarquee';
import AboutSection from '@/components/AboutSection';
import type { TabId } from '@/lib/tabs';
import { PROFILE } from '@/lib/profile';
import { PROJECTS } from '@/lib/projects';

const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const QUICK_LOOK: { id: TabId; icon: typeof Briefcase; title: string; body: string; cta: string }[] = [
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
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, shouldReduceMotion ? 1 : 0.25]);

  return (
    <div className="pb-10 pt-24">
      <div ref={heroRef} className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          style={shouldReduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
          className="flex w-full flex-col items-center"
        >
          <motion.p
            variants={heroItem}
            className="glass-pill px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-aurora-blue"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl"
          >
            <KineticText text="Foureiratou" />
            <br />
            <KineticText text="ZAKARI YAOU IDI" />
          </motion.h1>

          <motion.p variants={heroItem} className="mt-6 max-w-xl text-balance text-lg text-slate-300">
            I build health, education, and disability-inclusion technology for underserved communities across
            West and East Africa — from a nationwide disability-rights website to offline-first health alert
            systems.
          </motion.p>

          <motion.div variants={heroItem} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('projects')}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:scale-105"
            >
              View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="glass-pill focus-ring inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Get in Touch
            </button>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill focus-ring inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" /> GitHub
            </a>
          </motion.div>

          <motion.div variants={heroItem} className="w-full">
            <TiltCard className="mt-14 w-full p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Tools &amp; Technologies
              </p>
              <SkillsMarquee />
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-20">
        <AboutSection />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          A Look At The Work
        </p>
        <div className="mt-6">
          <ProjectImageMarquee />
        </div>
      </motion.div>

      <div className="mx-auto mt-20 grid max-w-5xl gap-5 px-6 sm:grid-cols-3">
        {QUICK_LOOK.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group focus-ring text-left"
            >
              <TiltCard className="h-full p-6 transition-shadow hover:shadow-2xl">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-aurora-blue" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-aurora-blue transition-transform group-hover:translate-x-1">
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
