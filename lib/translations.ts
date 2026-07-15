export const UI = {
  nav: { home: { en: 'Home', fr: 'Accueil' }, projects: { en: 'Projects', fr: 'Projets' }, experience: { en: 'Experience', fr: 'Expérience' }, contact: { en: 'Contact', fr: 'Contact' } },
  hero: {
    eyebrow: { en: 'Software Engineer', fr: 'Ingénieure Logicielle' },
    intro: {
      en: 'I build health, education, and disability-inclusion technology for underserved communities across West and East Africa — from a nationwide disability-rights website to offline-first health alert systems.',
      fr: "Je développe des technologies de santé, d'éducation et d'inclusion du handicap pour les communautés mal desservies d'Afrique de l'Ouest et de l'Est — d'un site national pour les droits des personnes handicapées à des systèmes d'alerte santé fonctionnant hors ligne.",
    },
    viewProjects: { en: 'View Projects', fr: 'Voir les projets' },
    getInTouch: { en: 'Get in Touch', fr: 'Me contacter' },
    tools: { en: 'Tools & Technologies', fr: 'Outils & Technologies' },
  },
  about: {
    eyebrow: { en: 'Get to know me', fr: 'Apprenez à me connaître' },
    title: { en: 'About', fr: 'À propos' },
    bio: {
      en: "I'm a Computer Science student at Ashesi University and a MasterCard Foundation Scholar, originally from Niamey, Niger, now based in Accra, Ghana. Before switching into tech, I trained and worked in nursing — that cross-disciplinary background is a lot of why I keep gravitating toward health and accessibility technology. Outside of code: K-dramas, C-dramas, and gaming with friends.",
      fr: "Je suis étudiante en informatique à l'Université Ashesi et boursière de la Fondation MasterCard, originaire de Niamey, au Niger, et basée aujourd'hui à Accra, au Ghana. Avant de me tourner vers la tech, j'ai été formée et j'ai travaillé en soins infirmiers — ce parcours pluridisciplinaire explique en grande partie pourquoi je continue à me passionner pour les technologies de santé et d'accessibilité. En dehors du code : dramas coréens et chinois, et jeux vidéo entre amis.",
    },
    from: { en: 'from', fr: 'originaire de' },
    education: { en: 'Education', fr: 'Formation' },
    awards: { en: 'Awards', fr: 'Distinctions' },
    languages: { en: 'Languages', fr: 'Langues' },
  },
  work: {
    eyebrow: { en: 'A Look At The Work', fr: 'Un aperçu du travail' },
  },
  quickLook: {
    experienceTitle: { en: 'Experience', fr: 'Expérience' },
    experienceBody: {
      en: 'Currently a Risk & Compliance Intern on the QuantRisk project at MTN Ghana — plus AI research, QA, and years of hands-on healthcare work in Niger.',
      fr: "Actuellement stagiaire Risque & Conformité sur le projet QuantRisk chez MTN Ghana — en plus de recherche en IA, d'assurance qualité, et de plusieurs années d'expérience pratique en santé au Niger.",
    },
    experienceCta: { en: 'See the timeline', fr: 'Voir le parcours' },
    projectsTitle: { en: 'Projects', fr: 'Projets' },
    projectsCta: { en: 'Browse projects', fr: 'Explorer les projets' },
    contactTitle: { en: 'Contact', fr: 'Contact' },
    contactBody: {
      en: "Open to internships, collaborations, and mission-driven projects. I'd love to hear from you.",
      fr: "Ouverte aux stages, collaborations et projets à impact social. J'aimerais beaucoup avoir de vos nouvelles.",
    },
    contactCta: { en: 'Get in touch', fr: 'Me contacter' },
  },
  projects: {
    eyebrow: { en: 'Selected Work', fr: 'Travaux sélectionnés' },
    title: { en: 'Projects', fr: 'Projets' },
    intro: {
      en: 'Real repositories, pulled straight from GitHub — mission-driven builds for health access, education access, and disability inclusion.',
      fr: "Des dépôts réels, tirés directement de GitHub — des projets à impact pour l'accès à la santé, l'accès à l'éducation et l'inclusion du handicap.",
    },
    also: { en: 'Also', fr: 'Également' },
    coursework: { en: 'Coursework & Research', fr: 'Projets académiques & Recherche' },
    courseworkNote: {
      en: 'Smaller academic projects without a standalone public repo.',
      fr: 'Projets académiques plus modestes sans dépôt public dédié.',
    },
  },
  experience: {
    eyebrow: { en: 'Timeline', fr: 'Parcours' },
    title: { en: 'Experience', fr: 'Expérience' },
    intro: {
      en: 'Two tracks that shaped how I build: hands-on healthcare in Niger, and software/AI work since moving into Computer Science.',
      fr: "Deux parcours qui ont façonné ma façon de construire : la pratique de la santé au Niger, et le développement logiciel/IA depuis mon passage à l'informatique.",
    },
    techTrack: { en: 'Technology & Leadership', fr: 'Technologie & Leadership' },
    healthTrack: { en: 'Healthcare (Niger)', fr: 'Santé (Niger)' },
  },
  contact: {
    eyebrow: { en: "Let's talk", fr: 'Discutons' },
    title: { en: 'Contact', fr: 'Contact' },
    intro: {
      en: 'Open to internships, collaborations, and mission-driven projects.',
      fr: 'Ouverte aux stages, collaborations et projets à impact social.',
    },
    copyEmail: { en: 'Copy email', fr: "Copier l'e-mail" },
    copied: { en: 'Copied!', fr: 'Copié !' },
  },
  footer: {
    built: { en: 'Built with Next.js.', fr: 'Construit avec Next.js.' },
  },
} as const;

export function t<K extends keyof typeof UI, F extends keyof (typeof UI)[K]>(
  locale: 'en' | 'fr',
  section: K,
  field: F,
): string {
  const entry = UI[section][field] as { en: string; fr: string };
  return entry[locale];
}
