
import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

interface CustomCursorProps {
  color: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('.cursor-pointer') !== null
      );
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        borderColor: color
      }}
      animate={{
        scale: isHovered ? 2 : 1,
        backgroundColor: isHovered ? `${color}1A` : "rgba(0,0,0,0)",
      }}
    >
      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
    </motion.div>
  );
};

export default CustomCursor;
