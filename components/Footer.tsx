'use client';

import { Mail, Link2, ExternalLink, MapPin } from 'lucide-react';
import { PROFILE } from '@/lib/profile';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function Footer() {
  const { locale } = useLanguage();
  return (
    <footer className="mt-8 w-full border-t border-white/10 bg-[#0a0c1e]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 pb-32 pt-8 sm:px-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold text-white">{PROFILE.name}</p>
            <p className="mt-0.5 flex items-center justify-center gap-1 text-xs text-slate-400 sm:justify-start">
              <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" /> {PROFILE.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PROFILE.emailPersonal}`}
              aria-label="Email"
              className="glass-pill focus-ring flex h-9 w-9 items-center justify-center text-white/70 transition-transform hover:scale-110"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass-pill focus-ring flex h-9 w-9 items-center justify-center text-white/70 transition-transform hover:scale-110"
            >
              <Link2 className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass-pill focus-ring flex h-9 w-9 items-center justify-center text-white/70 transition-transform hover:scale-110"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500 sm:text-left">
          © {new Date().getFullYear()} {PROFILE.name}. {t(locale, 'footer', 'built')}
        </p>
      </div>
    </footer>
  );
}
