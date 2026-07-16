'use client';

import { motion } from 'framer-motion';
import { Copy, Phone, GraduationCap } from 'lucide-react';
import { FaEnvelope, FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { useState } from 'react';
import TiltCard from '@/components/TiltCard';
import { PROFILE } from '@/lib/profile';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { locale } = useLanguage();

  async function copyEmail() {
    await navigator.clipboard.writeText(PROFILE.emailPersonal);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="mx-auto w-full max-w-[1800px] px-6 py-16 text-center sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-aurora-blue">
            {t(locale, 'contact', 'eyebrow')}
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            {t(locale, 'contact', 'title')}
          </h2>
          <p className="mt-3 text-slate-300">{t(locale, 'contact', 'intro')}</p>
        </motion.div>

        <TiltCard className="mt-8 flex flex-col items-center gap-4 p-10">
          <a
            href={`mailto:${PROFILE.emailPersonal}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:scale-105"
          >
            <FaEnvelope className="h-4 w-4" aria-hidden="true" /> {PROFILE.emailPersonal}
          </a>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={copyEmail}
              className="glass-pill focus-ring inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white/80"
            >
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />{' '}
              {copied ? t(locale, 'contact', 'copied') : t(locale, 'contact', 'copyEmail')}
            </button>
            <a
              href={`mailto:${PROFILE.emailSchool}`}
              className="glass-pill focus-ring inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white/80"
            >
              <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" /> {PROFILE.emailSchool}
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}
              className="glass-pill focus-ring inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white/80"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {PROFILE.phone}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill focus-ring inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white/80"
            >
              <FaLinkedin className="h-3.5 w-3.5" aria-hidden="true" /> LinkedIn
            </a>
            {PROFILE.twitter && (
              <a
                href={PROFILE.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill focus-ring inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white/80"
              >
                <FaXTwitter className="h-3.5 w-3.5" aria-hidden="true" /> X (Twitter)
              </a>
            )}
            {PROFILE.instagram && (
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill focus-ring inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white/80"
              >
                <FaInstagram className="h-3.5 w-3.5" aria-hidden="true" /> Instagram
              </a>
            )}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill focus-ring inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white/80"
            >
              <FaGithub className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
            </a>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}
