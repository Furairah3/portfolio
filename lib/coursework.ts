// From coursework listed on Foureiratou's CV — no standalone public repo found for
// these (likely inside shared/private course repos), so they're listed as text
// rather than linked project cards.
export type CourseworkItem = {
  titleEn: string;
  titleFr: string;
  periodEn: string;
  periodFr: string;
  descriptionEn: string;
  descriptionFr: string;
  image?: string;
};

export const COURSEWORK: CourseworkItem[] = [
  {
    titleEn: 'AI Attendance System',
    titleFr: 'Système de Présence par IA',
    periodEn: 'May – Jun 2025',
    periodFr: 'Mai – Juin 2025',
    descriptionEn:
      'AI-powered attendance system using Python, OpenCV, and SQLite on Google Colab — facial recognition and database management automating student attendance tracking, with 90% accuracy.',
    descriptionFr:
      "Système de présence propulsé par l'IA utilisant Python, OpenCV et SQLite sur Google Colab — reconnaissance faciale et gestion de base de données automatisant le suivi de présence des étudiants, avec 90 % de précision.",
    image: '/images/projects/ai-attendance-logo.png',
  },
  {
    titleEn: 'Afrobarometer Healthcare Study in Niger',
    titleFr: 'Étude Afrobaromètre sur la Santé au Niger',
    periodEn: 'Oct – Dec 2024',
    periodFr: 'Oct – Déc 2024',
    descriptionEn:
      'Statistical analysis of healthcare access in Niger using Afrobarometer survey data, identifying trends and disparities in healthcare services.',
    descriptionFr:
      "Analyse statistique de l'accès aux soins de santé au Niger à partir des données d'enquête Afrobaromètre, identifiant tendances et disparités dans les services de santé.",
  },
  {
    titleEn: 'CO₂ Emissions Data Analysis',
    titleFr: "Analyse de Données sur les Émissions de CO₂",
    periodEn: 'May – Aug 2024',
    periodFr: 'Mai – Août 2024',
    descriptionEn: 'Data visualization tool built in Python analyzing CO₂ emissions trends from climate datasets.',
    descriptionFr:
      "Outil de visualisation de données développé en Python analysant les tendances des émissions de CO₂ à partir de jeux de données climatiques.",
  },
  {
    titleEn: 'Discrete Math E-Learning Website',
    titleFr: "Site E-Learning de Mathématiques Discrètes",
    periodEn: 'Oct – Dec 2024',
    periodFr: 'Oct – Déc 2024',
    descriptionEn: 'Responsive HTML/CSS educational website making Discrete Math concepts more accessible.',
    descriptionFr:
      "Site web pédagogique responsive (HTML/CSS) rendant les concepts de mathématiques discrètes plus accessibles.",
  },
  {
    titleEn: 'Ghanaian Recipe Platform',
    titleFr: 'Plateforme de Recettes Ghanéennes',
    periodEn: 'Oct – Dec 2024',
    periodFr: 'Oct – Déc 2024',
    descriptionEn: 'Java (OOP) platform showcasing Ghanaian recipes with step-by-step cooking instructions.',
    descriptionFr:
      "Plateforme Java (POO) présentant des recettes ghanéennes avec instructions de cuisson étape par étape.",
  },
];
