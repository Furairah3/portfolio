import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import AuroraBackground from '@/components/AuroraBackground';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const display = Manrope({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-display' });

export const metadata: Metadata = {
  title: {
    default: 'Foureiratou ZAKARI YAOU IDI — Software Engineer',
    template: '%s · Foureiratou ZAKARI YAOU IDI',
  },
  description:
    'Software engineer building health, education, and disability-inclusion technology for underserved communities across West and East Africa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${sans.variable} ${display.variable}`}>
      <body>
        <AuroraBackground />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
