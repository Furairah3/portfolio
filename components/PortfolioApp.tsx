'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import TabNav from '@/components/TabNav';
import Footer from '@/components/Footer';
import HomeTab from '@/components/tabs/HomeTab';
import ProjectsTab from '@/components/tabs/ProjectsTab';
import AboutTab from '@/components/tabs/AboutTab';
import ExperienceTab from '@/components/tabs/ExperienceTab';
import ContactTab from '@/components/tabs/ContactTab';
import type { TabId } from '@/lib/tabs';

export default function PortfolioApp() {
  const [active, setActive] = useState<TabId>('home');
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12, filter: 'blur(6px)' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {active === 'home' && <HomeTab onNavigate={setActive} />}
          {active === 'projects' && <ProjectsTab />}
          {active === 'about' && <AboutTab />}
          {active === 'experience' && <ExperienceTab />}
          {active === 'contact' && <ContactTab />}
          <Footer />
        </motion.div>
      </AnimatePresence>
      <TabNav active={active} onChange={setActive} />
    </>
  );
}
