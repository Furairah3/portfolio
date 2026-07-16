'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, FlaskConical } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import { PROJECTS } from '@/lib/projects';
import { COURSEWORK } from '@/lib/coursework';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function ProjectsSection() {
  const { locale } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-[1800px] px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-aurora-blue">
          {t(locale, 'projects', 'eyebrow')}
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
          {t(locale, 'projects', 'title')}
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">{t(locale, 'projects', 'intro')}</p>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="group focus-ring block rounded-[28px]"
          >
            <TiltCard
              className={`h-full overflow-hidden !p-0 transition-shadow hover:shadow-2xl ${project.featured ? 'ring-1 ring-aurora-violet/40' : ''}`}
            >
              <div
                className={`relative aspect-[1200/630] w-full overflow-hidden ${
                  project.imageFit === 'contain' ? 'bg-white' : 'bg-white/10'
                }`}
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className={project.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'}
                  unoptimized={project.imageFit === 'cover'}
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-white">
                    {locale === 'fr' ? project.titleFr : project.titleEn}
                  </h3>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
                {project.org && <p className="mt-1 text-xs font-medium text-slate-400">{project.org}</p>}
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {locale === 'fr' ? project.descriptionFr : project.descriptionEn}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="glass-pill px-3 py-1 text-xs font-semibold text-aurora-blue">
                    {project.language}
                  </span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mt-16"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-aurora-blue">
          {t(locale, 'projects', 'also')}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold text-white">{t(locale, 'projects', 'coursework')}</h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">{t(locale, 'projects', 'courseworkNote')}</p>

        <TiltCard className="mt-6 divide-y divide-white/10 p-2">
          {COURSEWORK.map((item) => (
            <div key={item.titleEn} className="flex items-start gap-3 p-4">
              {item.image ? (
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white">
                  <Image src={item.image} alt="" fill sizes="40px" className="object-contain p-1" />
                </div>
              ) : (
                <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" />
              )}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h4 className="text-sm font-semibold text-white">
                    {locale === 'fr' ? item.titleFr : item.titleEn}
                  </h4>
                  <span className="text-xs text-slate-400">{locale === 'fr' ? item.periodFr : item.periodEn}</span>
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  {locale === 'fr' ? item.descriptionFr : item.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </TiltCard>
      </motion.div>
    </div>
  );
}
