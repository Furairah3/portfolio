'use client';

import { Mail, Link2, ExternalLink } from 'lucide-react';
import { PROFILE } from '@/lib/profile';
import type { TabId } from '@/lib/tabs';

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Header({ onNavigate }: { onNavigate: (id: TabId) => void }) {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="glass-pill mx-auto flex max-w-3xl items-center justify-between px-3 py-2 sm:px-4">
        <button
          onClick={() => onNavigate('home')}
          className="focus-ring flex items-center gap-2.5 rounded-full py-1 pr-2"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white dark:bg-white dark:text-slate-900">
            {initials(PROFILE.name)}
          </span>
          <span className="hidden text-sm font-semibold text-slate-800 dark:text-white sm:inline">
            {PROFILE.name}
          </span>
        </button>

        <div className="flex items-center gap-1.5">
          <a
            href={`mailto:${PROFILE.emailPersonal}`}
            aria-label="Email"
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-transform hover:scale-110 dark:text-white/70"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-transform hover:scale-110 dark:text-white/70"
          >
            <Link2 className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-transform hover:scale-110 dark:text-white/70"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
