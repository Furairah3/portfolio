'use client';

import { useEffect, useState } from 'react';

/** Tracks which section id is currently most visible near the top of the viewport. */
export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));

    // Edge case: the last section can't always scroll far enough to satisfy the
    // rootMargin above (nothing to scroll past below it), so it never registers as
    // "intersecting" near the very bottom of the page. Force it active once the
    // page is scrolled to (or near) its max.
    function handleScroll() {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) setActive(ids[ids.length - 1]);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids]);

  return active;
}
