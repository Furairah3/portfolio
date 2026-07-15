'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Trophy, Languages } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import { EDUCATION, AWARDS, PROFILE } from '@/lib/profile';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function AboutSection() {
  const { locale } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-aurora-blue">
          {t(locale, 'about', 'eyebrow')}
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
          {t(locale, 'about', 'title')}
        </h2>
      </motion.div>

      <div className="mt-8 grid gap-8 sm:grid-cols-[auto,1fr] sm:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto shrink-0 sm:mx-0"
        >
          <div className="glass animate-float relative h-36 w-36 overflow-hidden !rounded-full p-1 sm:h-44 sm:w-44">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/images/portrait.jpg" alt="Portrait of Foureiratou" fill sizes="176px" className="object-cover" />
            </div>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-slate-300 sm:text-left"
          >
            {t(locale, 'about', 'bio')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400 sm:justify-start"
          >
            <MapPin className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" />
            {PROFILE.location} · {t(locale, 'about', 'from')} {PROFILE.origin}
          </motion.div>
        </div>
      </div>

      <TiltCard className="mt-10 p-8">
        <div className="mb-5 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-aurora-blue" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-white">{t(locale, 'about', 'education')}</h3>
        </div>
        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-4"
        >
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.school}
              variants={listItem}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
            >
              <div>
                <p className="text-sm font-semibold text-white">{edu.school}</p>
                <p className="text-sm text-slate-300">{locale === 'fr' ? edu.detailFr : edu.detailEn}</p>
              </div>
              <p className="text-xs font-medium text-slate-400">{locale === 'fr' ? edu.periodFr : edu.periodEn}</p>
            </motion.div>
          ))}
        </motion.div>
      </TiltCard>

      <TiltCard className="mt-6 p-8">
        <div className="mb-5 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-aurora-blue" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-white">{t(locale, 'about', 'awards')}</h3>
        </div>
        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-4"
        >
          {AWARDS.map((award) => (
            <motion.div
              key={award.titleEn}
              variants={listItem}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
            >
              <div>
                <p className="text-sm font-semibold text-white">{locale === 'fr' ? award.titleFr : award.titleEn}</p>
                <p className="text-sm text-slate-300">{locale === 'fr' ? award.detailFr : award.detailEn}</p>
              </div>
              <p className="text-xs font-medium text-slate-400">{locale === 'fr' ? award.periodFr : award.periodEn}</p>
            </motion.div>
          ))}
        </motion.div>
      </TiltCard>

      <TiltCard className="mt-6 p-8">
        <div className="mb-5 flex items-center gap-2">
          <Languages className="h-5 w-5 text-aurora-blue" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-white">{t(locale, 'about', 'languages')}</h3>
        </div>
        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-wrap gap-2"
        >
          {PROFILE.languages.map((lang) => (
            <motion.span
              key={lang.nameEn}
              variants={listItem}
              className="glass-pill px-4 py-1.5 text-sm font-medium text-white/80"
            >
              {locale === 'fr' ? lang.nameFr : lang.nameEn}{' '}
              <span className="text-slate-400">· {locale === 'fr' ? lang.levelFr : lang.levelEn}</span>
            </motion.span>
          ))}
        </motion.div>
      </TiltCard>
    </div>
  );
}
