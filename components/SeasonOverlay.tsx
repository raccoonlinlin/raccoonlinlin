
import React from 'react';
import { motion } from 'framer-motion';
import { SeasonConfig } from '../constants/seasons';

interface SeasonOverlayProps {
  config: SeasonConfig;
}

const SeasonOverlay: React.FC<SeasonOverlayProps> = ({ config }) => {
  // 生成 15 個隨機粒子
  const particles = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "vw", 
            y: -20, 
            opacity: 0,
            rotate: 0 
          }}
          animate={{ 
            y: "110vh",
            opacity: [0, 1, 1, 0],
            rotate: 360,
            x: (Math.random() * 100 - 10) + "vw"
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 20
          }}
          className="absolute text-2xl select-none"
        >
          {config.particles[Math.floor(Math.random() * config.particles.length)]}
        </motion.div>
      ))}
    </div>
  );
};

export default SeasonOverlay;
