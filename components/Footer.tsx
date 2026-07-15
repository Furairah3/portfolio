'use client';

import Image from 'next/image';
import { Mail, Link2, ExternalLink, Phone, MapPin } from 'lucide-react';
import { PROFILE } from '@/lib/profile';
import { TABS, type TabId } from '@/lib/tabs';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function Footer({ onNavigate }: { onNavigate: (id: TabId) => void }) {
  const { locale } = useLanguage();

  return (
    <footer className="mt-8 w-full border-t border-white/10 bg-[#0a0c1e]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 pb-32 pt-14 sm:px-8 md:pb-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <button onClick={() => onNavigate('home')} className="focus-ring flex items-center gap-3 rounded-full">
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
                <Image src="/images/avatar.jpg" alt="" fill sizes="44px" className="object-cover" />
              </span>
              <span className="text-left">
                <span className="block text-sm font-bold text-white">{PROFILE.name}</span>
                <span className="block text-xs font-medium text-aurora-blue">
                  {t(locale, 'hero', 'eyebrow')}
                </span>
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{t(locale, 'hero', 'intro')}</p>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {PROFILE.location}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              {locale === 'fr' ? 'Naviguer' : 'Navigate'}
            </p>
            <ul className="mt-4 space-y-2.5">
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => onNavigate(tab.id)}
                    className="focus-ring text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {t(locale, 'nav', tab.id)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              {locale === 'fr' ? 'Contact' : 'Connect'}
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${PROFILE.emailPersonal}`}
                  className="focus-ring flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" /> {PROFILE.emailPersonal}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}
                  className="focus-ring flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" /> {PROFILE.phone}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <Link2 className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <ExternalLink className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {new Date().getFullYear()} {PROFILE.name}. {t(locale, 'footer', 'built')}
          </p>
        </div>
      </div>
    </footer>
  );
}
