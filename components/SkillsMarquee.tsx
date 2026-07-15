'use client';

import { useReducedMotion } from 'framer-motion';

const SKILLS = [
  'TypeScript',
  'React',
  'Next.js',
  'PHP',
  'Java',
  'Python',
  'C++',
  'PostgreSQL',
  'MySQL',
  'Tailwind CSS',
  'Node.js',
  'Prisma',
];

export default function SkillsMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const items = [...SKILLS, ...SKILLS];

  if (shouldReduceMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill) => (
          <span key={skill} className="glass-pill px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-white/80">
            {skill}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className="group w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      role="marquee"
      aria-label={`Technologies: ${SKILLS.join(', ')}`}
    >
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="glass-pill whitespace-nowrap px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-white/80"
            aria-hidden={i >= SKILLS.length}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
