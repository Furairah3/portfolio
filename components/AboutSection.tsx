'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Trophy, Languages } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import { EDUCATION, AWARDS, PROFILE } from '@/lib/profile';

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function AboutSection() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-aurora-blue">Get to know me</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">About</h2>
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
            I&apos;m a Computer Science student at Ashesi University and a MasterCard Foundation Scholar,
            originally from Niamey, Niger, now based in Accra, Ghana. Before switching into tech, I trained
            and worked in nursing — that cross-disciplinary background is a lot of why I keep gravitating
            toward health and accessibility technology. Outside of code: K-dramas, C-dramas, and gaming with
            friends.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400 sm:justify-start"
          >
            <MapPin className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" />
            {PROFILE.location} · from {PROFILE.origin}
          </motion.div>
        </div>
      </div>

      <TiltCard className="mt-10 p-8">
        <div className="mb-5 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-aurora-blue" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-white">Education</h3>
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
                <p className="text-sm text-slate-300">{edu.detail}</p>
              </div>
              <p className="text-xs font-medium text-slate-400">{edu.period}</p>
            </motion.div>
          ))}
        </motion.div>
      </TiltCard>

      <TiltCard className="mt-6 p-8">
        <div className="mb-5 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-aurora-blue" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-white">Awards</h3>
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
              key={award.title}
              variants={listItem}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
            >
              <div>
                <p className="text-sm font-semibold text-white">{award.title}</p>
                <p className="text-sm text-slate-300">{award.detail}</p>
              </div>
              <p className="text-xs font-medium text-slate-400">{award.period}</p>
            </motion.div>
          ))}
        </motion.div>
      </TiltCard>

      <TiltCard className="mt-6 p-8">
        <div className="mb-5 flex items-center gap-2">
          <Languages className="h-5 w-5 text-aurora-blue" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-white">Languages</h3>
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
              key={lang.name}
              variants={listItem}
              className="glass-pill px-4 py-1.5 text-sm font-medium text-white/80"
            >
              {lang.name} <span className="text-slate-400">· {lang.level}</span>
            </motion.span>
          ))}
        </motion.div>
      </TiltCard>
    </div>
  );
}
