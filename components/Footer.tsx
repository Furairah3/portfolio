'use client';

import Image from 'next/image';
import { Phone, MapPin, GraduationCap } from 'lucide-react';
import { FaEnvelope, FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { PROFILE } from '@/lib/profile';
import { TABS, type TabId } from '@/lib/tabs';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function Footer({ onNavigate }: { onNavigate: (id: TabId) => void }) {
  const { locale } = useLanguage();

  return (
    <footer className="mt-8 w-full border-t border-white/10 bg-[#0a0c1e]/90 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1800px] px-6 pb-32 pt-14 sm:px-10 md:pb-14 lg:px-16 xl:px-24">
        <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-[1.5fr,1fr,1fr]">
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
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">{t(locale, 'hero', 'intro')}</p>
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
                  <FaEnvelope className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" /> {PROFILE.emailPersonal}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROFILE.emailSchool}`}
                  className="focus-ring flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <GraduationCap className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" /> {PROFILE.emailSchool}
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
                  <FaLinkedin className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" /> LinkedIn
                </a>
              </li>
              {PROFILE.twitter && (
                <li>
                  <a
                    href={PROFILE.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <FaXTwitter className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" /> X (Twitter)
                  </a>
                </li>
              )}
              {PROFILE.instagram && (
                <li>
                  <a
                    href={PROFILE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <FaInstagram className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" /> Instagram
                  </a>
                </li>
              )}
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <FaGithub className="h-4 w-4 shrink-0 text-aurora-blue" aria-hidden="true" /> GitHub
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
