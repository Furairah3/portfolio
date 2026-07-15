'use client';

import Image from 'next/image';
import { Mail, Link2, ExternalLink } from 'lucide-react';
import { PROFILE } from '@/lib/profile';
import { TABS, type TabId } from '@/lib/tabs';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import LanguageToggle from '@/components/LanguageToggle';

export default function Header({ active, onNavigate }: { active: TabId; onNavigate: (id: TabId) => void }) {
  const { locale } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full border-b border-white/10 bg-[#0a0c1e]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-5">
        <button
          onClick={() => onNavigate('home')}
          className="focus-ring flex items-center gap-3 rounded-full py-1 pr-2"
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20 sm:h-12 sm:w-12">
            <Image src="/images/avatar.jpg" alt="" fill sizes="48px" className="object-cover" />
          </span>
          <span className="hidden flex-col items-start sm:flex">
            <span className="text-base font-bold leading-tight text-white">{PROFILE.name}</span>
            <span className="text-xs font-medium text-aurora-blue">{t(locale, 'hero', 'eyebrow')}</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === tab.id ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'
              }`}
              aria-current={active === tab.id ? 'page' : undefined}
            >
              {t(locale, 'nav', tab.id)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <LanguageToggle />
          <a
            href={`mailto:${PROFILE.emailPersonal}`}
            aria-label="Email"
            className="focus-ring hidden h-9 w-9 items-center justify-center rounded-full text-white/70 transition-transform hover:scale-110 sm:flex"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-ring hidden h-9 w-9 items-center justify-center rounded-full text-white/70 transition-transform hover:scale-110 sm:flex"
          >
            <Link2 className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-transform hover:scale-110"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
