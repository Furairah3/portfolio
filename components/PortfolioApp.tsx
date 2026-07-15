'use client';

import TabNav from '@/components/TabNav';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import { TABS, type TabId } from '@/lib/tabs';
import { useScrollSpy } from '@/lib/useScrollSpy';

const SECTION_IDS = TABS.map((tab) => tab.id);

function scrollToSection(id: TabId) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function PortfolioApp() {
  const active = useScrollSpy(SECTION_IDS) as TabId;

  return (
    <>
      <Header active={active} onNavigate={scrollToSection} />

      <div id="home" className="scroll-mt-24">
        <Hero onNavigate={scrollToSection} />
      </div>

      <div className="scroll-mt-24">
        <AboutSection />
      </div>

      <div id="projects" className="scroll-mt-24">
        <ProjectsSection />
      </div>

      <div id="experience" className="scroll-mt-24">
        <ExperienceSection />
      </div>

      <div id="contact" className="scroll-mt-24">
        <ContactSection />
      </div>

      <Footer onNavigate={scrollToSection} />

      <div className="md:hidden">
        <TabNav active={active} onChange={scrollToSection} />
      </div>
    </>
  );
}
