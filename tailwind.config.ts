import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        aurora: {
          blue: '#3b82f6',
          violet: '#8b5cf6',
          pink: '#ec4899',
          teal: '#14b8a6',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        blob1: 'blob1 22s ease-in-out infinite',
        blob2: 'blob2 26s ease-in-out infinite',
        blob3: 'blob3 30s ease-in-out infinite',
        shimmer: 'shimmer 3.5s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 36s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%': { transform: 'translate(12%, -14%) scale(1.15)' },
          '66%': { transform: 'translate(-10%, 10%) scale(0.9)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%': { transform: 'translate(-16%, 8%) scale(0.92)' },
          '66%': { transform: 'translate(10%, -12%) scale(1.1)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(8%, 12%) scale(1.2)' },
        },
        shimmer: {
          '0%, 100%': { transform: 'translateX(-120%) skewX(-12deg)', opacity: '0' },
          '50%': { opacity: '0.6' },
          '100%': { transform: 'translateX(120%) skewX(-12deg)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
