import { Mail, Link2, ExternalLink, MapPin } from 'lucide-react';
import { PROFILE } from '@/lib/profile';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pb-32 pt-8">
      <div className="glass flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-slate-800 dark:text-white">{PROFILE.name}</p>
          <p className="mt-0.5 flex items-center justify-center gap-1 text-xs text-slate-500 dark:text-white/50 sm:justify-start">
            <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" /> {PROFILE.location}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${PROFILE.emailPersonal}`}
            aria-label="Email"
            className="glass-pill focus-ring flex h-9 w-9 items-center justify-center text-slate-600 transition-transform hover:scale-110 dark:text-white/70"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass-pill focus-ring flex h-9 w-9 items-center justify-center text-slate-600 transition-transform hover:scale-110 dark:text-white/70"
          >
            <Link2 className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass-pill focus-ring flex h-9 w-9 items-center justify-center text-slate-600 transition-transform hover:scale-110 dark:text-white/70"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-slate-400 dark:text-white/30">
        © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.
      </p>
    </footer>
  );
}
