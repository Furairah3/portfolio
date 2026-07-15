'use client';

import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { PROJECTS } from '@/lib/projects';

export default function ProjectImageMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const items = shouldReduceMotion ? PROJECTS : [...PROJECTS, ...PROJECTS];

  return (
    <div
      className="group w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      role="marquee"
      aria-label={`Project previews: ${PROJECTS.map((p) => p.title).join(', ')}`}
    >
      <div
        className={`flex w-max gap-4 ${shouldReduceMotion ? 'flex-wrap' : 'animate-marquee group-hover:[animation-play-state:paused]'}`}
      >
        {items.map((project, i) => (
          <div
            key={`${project.name}-${i}`}
            className="glass relative aspect-[1200/630] w-72 shrink-0 overflow-hidden sm:w-96"
            aria-hidden={i >= PROJECTS.length}
          >
            <Image
              src={project.image}
              alt=""
              fill
              sizes="384px"
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-sm font-semibold text-white">{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
