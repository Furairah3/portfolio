'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 28, rotateX: -60 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function KineticText({ text, className = '' }: { text: string; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline-block [perspective:600px] ${className}`}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <motion.span key={i} variants={letter} className="inline-block" aria-hidden="true">
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
