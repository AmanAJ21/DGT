'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

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

// FadeIn Animation
export const FadeIn = ({ children, duration = 1, delay = 0, className = '', immediate = false }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={immediate ? { opacity: 1 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1 }}
      viewport={immediate ? undefined : { once: true }}
      transition={{ duration: duration / 1000, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// SlideIn Animation
export const SlideIn = ({ children, direction = 'up', duration = 0.8, delay = 0, className = '', immediate = false }: SlideInProps) => {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={immediate ? { opacity: 1, x: 0, y: 0 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={immediate ? undefined : { once: true }}
      transition={{ duration: duration / 1000, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ScaleIn Animation
export const ScaleIn = ({ children, duration = 0.8, delay = 0, className = '', immediate = false }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={immediate ? { opacity: 1, scale: 1 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, scale: 1 }}
      viewport={immediate ? undefined : { once: true }}
      transition={{ duration: duration / 1000, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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
