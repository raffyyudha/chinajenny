import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  centered?: boolean;
}

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  progress: any;
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [20, 0]);

  return (
    <span className="relative mr-[0.25em] mb-2 inline-block">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity, y }}>{children}</motion.span>
    </span>
  );
};

export const TextReveal: React.FC<TextRevealProps> = ({ children, className = "", centered = false }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = children.split(" ");

  return (
    <p 
      ref={element} 
      className={`flex flex-wrap ${centered ? 'justify-center' : 'justify-start'} ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
