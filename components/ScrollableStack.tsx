"use client";

import React, { ReactNode, useEffect, useRef } from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`card-swap-item ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  offset?: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  offset = 50
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.card-swap-item') as NodeListOf<HTMLElement>;
    if (cards.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardTop = rect.top + scrollY;
        const cardHeight = rect.height;

        // Calculate when card should stick
        const stickyStart = cardTop - windowHeight + cardHeight;
        const stickyEnd = cardTop + cardHeight * cards.length;

        if (scrollY >= stickyStart && scrollY <= stickyEnd) {
          // Card is in sticky range
          const progress = (scrollY - stickyStart) / (cardHeight * (cards.length - index));
          const clampedProgress = Math.min(Math.max(progress, 0), 1);

          // Calculate scale (shrinks as you scroll)
          const scale = 1 - clampedProgress * 0.1;

          // Calculate translateY (moves up and sticks)
          const stackOffset = index * offset;
          const translateY = Math.max(0, scrollY - cardTop + windowHeight - cardHeight - stackOffset);

          // Calculate opacity for cards that are being covered
          const nextCardProgress = index < cards.length - 1 ? 
            Math.max(0, (scrollY - (cardTop + cardHeight)) / cardHeight) : 0;
          const opacity = Math.max(0.3, 1 - nextCardProgress * 0.7);

          card.style.transform = `translateY(${translateY}px) scale(${scale})`;
          card.style.opacity = opacity.toString();
          card.style.zIndex = (cards.length - index).toString();
        } else if (scrollY < stickyStart) {
          // Card hasn't reached sticky point yet
          card.style.transform = 'translateY(0) scale(1)';
          card.style.opacity = '1';
          card.style.zIndex = (cards.length - index).toString();
        } else {
          // Card has passed sticky range
          const stackOffset = index * offset;
          const finalY = stickyEnd - cardTop + windowHeight - cardHeight - stackOffset;
          card.style.transform = `translateY(${finalY}px) scale(0.9)`;
          card.style.opacity = '0.3';
          card.style.zIndex = (cards.length - index).toString();
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <div className={`card-swap-container ${className}`.trim()} ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollStack;
