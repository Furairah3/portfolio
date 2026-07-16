'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import KineticText from '@/components/KineticText';
import TiltCard from '@/components/TiltCard';
import SkillsMarquee from '@/components/SkillsMarquee';
import ProjectImageMarquee from '@/components/ProjectImageMarquee';
import { PROFILE } from '@/lib/profile';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ onNavigate }: { onNavigate: (id: 'projects' | 'contact') => void }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, shouldReduceMotion ? 1 : 0.25]);
  const { locale } = useLanguage();

  return (
    <div className="pb-10 pt-28">
      <div
        ref={heroRef}
        className="mx-auto flex min-h-[70vh] w-full max-w-[1800px] flex-col items-center justify-center px-6 text-center sm:px-10 lg:px-16 xl:px-24"
      >
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
            {t(locale, 'hero', 'eyebrow')}
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
            {t(locale, 'hero', 'intro')}
          </motion.p>

          <motion.div variants={heroItem} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('projects')}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:scale-105"
            >
              {t(locale, 'hero', 'viewProjects')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="glass-pill focus-ring inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> {t(locale, 'hero', 'getInTouch')}
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
                {t(locale, 'hero', 'tools')}
              </p>
              <SkillsMarquee />
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          {t(locale, 'work', 'eyebrow')}
        </p>
        <div className="mt-6">
          <ProjectImageMarquee />
        </div>
      </motion.div>
    </div>
  );
}
