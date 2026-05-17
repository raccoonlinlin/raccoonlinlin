import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClickable, setIsClickable] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();

    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        
        const target = e.target as HTMLElement;
        if (!target) return;
        
        const clickable = target.closest('a') || 
                          target.closest('button') || 
                          target.closest('input') || 
                          target.closest('textarea') || 
                          target.closest('select') || 
                          target.closest('[role="button"]') ||
                          window.getComputedStyle(target).cursor === 'pointer';
        setIsClickable(!!clickable);
      };

      const handleMouseDown = () => setIsMouseDown(true);
      const handleMouseUp = () => setIsMouseDown(false);

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      id="custom-cursor"
      className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] flex items-center justify-center text-3xl select-none"
      animate={{
        x: position.x - 24,
        y: position.y - 24,
        scale: isMouseDown ? 0.9 : (isClickable ? 1.2 : 1),
        rotate: isClickable ? [0, -10, 10, 0] : 0
      }}
      transition={{ 
        type: 'spring', 
        damping: 30, 
        stiffness: 400, 
        mass: 0.5,
        rotate: { duration: 0.5, repeat: isClickable ? Infinity : 0 }
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Shadow for better visibility */}
        <div className="absolute inset-0 blur-sm opacity-20 translate-y-1">
          {isClickable ? '🐾' : '🦝'}
        </div>
        <div className="relative">
          {isClickable ? '🐾' : '🦝'}
        </div>
      </div>
    </motion.div>
  );
};
