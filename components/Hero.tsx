'use client';

import { useRef } from 'react';
import Image from 'next/image';
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
        className="mx-auto grid w-full max-w-[1800px] items-center gap-12 px-6 py-8 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:px-24"
      >
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          style={shouldReduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.p
            variants={heroItem}
            className="glass-pill px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-aurora-blue"
          >
            {t(locale, 'hero', 'eyebrow')}
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-6xl"
          >
            <KineticText
              text="Foureiratou"
              className="animate-gradient-shift bg-[length:200%_auto] bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-blue bg-clip-text text-transparent"
            />
            <br />
            <KineticText
              text="ZAKARI YAOU IDI"
              className="animate-gradient-shift bg-[length:200%_auto] bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-blue bg-clip-text text-transparent"
            />
          </motion.h1>

          <motion.p variants={heroItem} className="mt-6 max-w-xl text-balance text-lg text-slate-300">
            {t(locale, 'hero', 'intro')}
          </motion.p>

          <motion.div variants={heroItem} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glass animate-float relative aspect-[4/5] w-full overflow-hidden rounded-[32px] p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/portrait.jpg"
                alt={PROFILE.name}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c1e]/50 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div variants={heroItem} initial="hidden" animate="show">
          <TiltCard className="mt-14 w-full p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {t(locale, 'hero', 'tools')}
            </p>
            <SkillsMarquee />
          </TiltCard>
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
