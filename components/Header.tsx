'use client';

import Image from 'next/image';
import { Mail, Link2, ExternalLink } from 'lucide-react';
import { PROFILE } from '@/lib/profile';
import type { TabId } from '@/lib/tabs';
import LanguageToggle from '@/components/LanguageToggle';

export default function Header({ onNavigate }: { onNavigate: (id: TabId) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full border-b border-white/10 bg-[#0a0c1e]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="focus-ring flex items-center gap-2.5 rounded-full py-1 pr-2"
        >
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
            <Image src="/images/avatar.jpg" alt="" fill sizes="32px" className="object-cover" />
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">{PROFILE.name}</span>
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <LanguageToggle />
          <a
            href={`mailto:${PROFILE.emailPersonal}`}
            aria-label="Email"
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-transform hover:scale-110"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-transform hover:scale-110"
          >
            <Link2 className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-transform hover:scale-110"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
