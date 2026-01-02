'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface AnimationProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  immediate?: boolean; // New prop to skip viewport detection
}

interface SlideInProps extends AnimationProps {
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Performance optimization: Check for reduced motion preference
const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// FadeIn Animation - Memoized for performance
export const FadeIn = memo(({ children, duration = 1, delay = 0, className = '', immediate = false }: AnimationProps) => {
  const reducedMotion = shouldReduceMotion();
  const actualDuration = reducedMotion ? 0.01 : duration / 1000;
  const actualDelay = reducedMotion ? 0 : delay / 1000;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={immediate ? { opacity: 1 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1 }}
      viewport={immediate ? undefined : { once: true, margin: '-10%' }}
      transition={{ duration: actualDuration, delay: actualDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

FadeIn.displayName = 'FadeIn';

// SlideIn Animation - Memoized for performance
export const SlideIn = memo(({ children, direction = 'up', duration = 0.8, delay = 0, className = '', immediate = false }: SlideInProps) => {
  const reducedMotion = shouldReduceMotion();
  const actualDuration = reducedMotion ? 0.01 : duration / 1000;
  const actualDelay = reducedMotion ? 0 : delay / 1000;
  
  const directions = {
    up: { y: reducedMotion ? 0 : 50 },
    down: { y: reducedMotion ? 0 : -50 },
    left: { x: reducedMotion ? 0 : 50 },
    right: { x: reducedMotion ? 0 : -50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={immediate ? { opacity: 1, x: 0, y: 0 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={immediate ? undefined : { once: true, margin: '-10%' }}
      transition={{ duration: actualDuration, delay: actualDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

SlideIn.displayName = 'SlideIn';

// ScaleIn Animation - Memoized for performance
export const ScaleIn = memo(({ children, duration = 0.8, delay = 0, className = '', immediate = false }: AnimationProps) => {
  const reducedMotion = shouldReduceMotion();
  const actualDuration = reducedMotion ? 0.01 : duration / 1000;
  const actualDelay = reducedMotion ? 0 : delay / 1000;
  const initialScale = reducedMotion ? 1 : 0.8;

  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      animate={immediate ? { opacity: 1, scale: 1 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, scale: 1 }}
      viewport={immediate ? undefined : { once: true, margin: '-10%' }}
      transition={{ duration: actualDuration, delay: actualDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

ScaleIn.displayName = 'ScaleIn';

// ZoomIn Animation
export const ZoomIn = ({ children, duration = 0.8, delay = 0, className = '' }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: duration / 1000, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// RotateIn Animation
export const RotateIn = ({ children, duration = 0.8, delay = 0, className = '' }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -180 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: duration / 1000, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// BounceIn Animation
export const BounceIn = ({ children, duration = 1, delay = 0, className = '' }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// FlipIn Animation
export const FlipIn = ({ children, duration = 0.8, delay = 0, className = '' }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: duration / 1000, delay: delay / 1000 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
