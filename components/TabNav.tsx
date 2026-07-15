'use client';

import { motion } from 'framer-motion';
import { TABS, type TabId } from '@/lib/tabs';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function TabNav({ active, onChange }: { active: TabId; onChange: (id: TabId) => void }) {
  const { locale } = useLanguage();

  return (
    <nav
      className="glass-pill fixed inset-x-0 bottom-6 z-50 mx-auto flex w-fit max-w-[94vw] gap-1 p-1.5 shadow-[0_8px_32px_rgba(31,38,135,0.16)]"
      aria-label="Portfolio sections"
    >
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.id === active;
        const label = t(locale, 'nav', tab.id);
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="focus-ring relative flex items-center gap-2 rounded-full px-3.5 py-2.5 text-sm font-medium text-white/70 transition-colors sm:px-5"
            aria-current={isActive ? 'page' : undefined}
          >
            {isActive && (
              <motion.span
                layoutId="tab-highlight"
                className="absolute inset-0 rounded-full bg-white/15 shadow-sm"
                transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
              />
            )}
            <Icon className={`relative h-4 w-4 shrink-0 ${isActive ? 'text-white' : ''}`} aria-hidden="true" />
            <span className={`relative hidden sm:inline ${isActive ? 'text-white' : ''}`}>{label}</span>
            <span className="sr-only sm:hidden">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
