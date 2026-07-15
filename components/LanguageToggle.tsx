'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="glass-pill relative flex items-center p-0.5" role="group" aria-label="Language">
      {(['en', 'fr'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`focus-ring relative rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            locale === l ? 'bg-white text-slate-900' : 'text-white/60 hover:text-white'
          }`}
          aria-pressed={locale === l}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
