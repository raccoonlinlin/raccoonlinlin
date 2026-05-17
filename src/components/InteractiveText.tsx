import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InteractiveTextProps {
  text: string;
  className?: string;
  bounceY?: number;
}

export const InteractiveText: React.FC<InteractiveTextProps> = ({ text, className, bounceY = -20 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll('.letter');
    gsap.from(letters, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.out",
    });
  }, [text]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>, i: number) => {
    gsap.to(e.currentTarget, {
      y: bounceY,
      scale: 1.25,
      rotate: i % 2 === 0 ? 10 : -10,
      color: 'var(--primary)',
      duration: 0.4,
      ease: "elastic.out(1.2, 0.5)"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      rotate: 0,
      color: 'inherit',
      duration: 0.6,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <div ref={containerRef} className={cn("flex flex-wrap items-center cursor-none", className)}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="letter inline-block relative whitespace-pre will-change-transform transform-origin-bottom"
          onMouseEnter={(e) => handleMouseEnter(e, i)}
          onMouseLeave={handleMouseLeave}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};
