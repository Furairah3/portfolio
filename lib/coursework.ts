// From coursework listed on Foureiratou's CV — no standalone public repo found for
// these (likely inside shared/private course repos), so they're listed as text
// rather than linked project cards.
export type CourseworkItem = {
  title: string;
  period: string;
  description: string;
  image?: string;
};

export const COURSEWORK: CourseworkItem[] = [
  {
    title: 'AI Attendance System',
    period: 'May – Jun 2025',
    description:
      'AI-powered attendance system using Python, OpenCV, and SQLite on Google Colab — facial recognition and database management automating student attendance tracking, with 90% accuracy.',
    image: '/images/projects/ai-attendance-logo.png',
  },
  {
    title: 'Afrobarometer Healthcare Study in Niger',
    period: 'Oct – Dec 2024',
    description:
      'Statistical analysis of healthcare access in Niger using Afrobarometer survey data, identifying trends and disparities in healthcare services.',
  },
  {
    title: 'CO₂ Emissions Data Analysis',
    period: 'May – Aug 2024',
    description: 'Data visualization tool built in Python analyzing CO₂ emissions trends from climate datasets.',
  },
  {
    title: 'Discrete Math E-Learning Website',
    period: 'Oct – Dec 2024',
    description: 'Responsive HTML/CSS educational website making Discrete Math concepts more accessible.',
  },
  {
    title: 'Ghanaian Recipe Platform',
    period: 'Oct – Dec 2024',
    description: 'Java (OOP) platform showcasing Ghanaian recipes with step-by-step cooking instructions.',
  },
];
