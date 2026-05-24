import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { CustomCursor } from './CustomCursor';
import { SEASONS } from '../constants';
import { gsap } from 'gsap';

export const Layout: React.FC = () => {
  const location = useLocation();
  const [seasonKey, setSeasonKey] = useState<'spring' | 'summer' | 'autumn' | 'winter'>('spring');

  // 計算目前純粹的路徑，做為強制刷新的 key
  const currentKey = location.hash ? location.hash : location.pathname;

  useEffect(() => {
    const month = new Date().getMonth() + 1;
    const key = (month >= 3 && month <= 5) ? 'spring' : 
                (month >= 6 && month <= 8) ? 'summer' : 
                (month >= 9 && month <= 11) ? 'autumn' : 'winter';
    setSeasonKey(key);

    const config = SEASONS[key];
    document.documentElement.style.setProperty('--primary', config.primary);
    document.documentElement.style.setProperty('--bg', config.bg);

    // Particles 特效
    const particlesContainer = document.getElementById('particles-overlay');
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle fixed pointer-events-none z-[0]';
        p.innerText = config.particles[Math.floor(Math.random() * config.particles.length)];
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = '-50px';
        p.style.fontSize = (Math.random() * 20 + 20) + 'px';
        particlesContainer.appendChild(p);
        
        gsap.to(p, { 
          y: '110vh', 
          x: '+=' + (Math.random() * 60 - 30), 
          rotation: 360, 
          duration: Math.random() * 10 + 15, 
          repeat: -1, 
          ease: "none", 
          delay: Math.random() * 15 
        });
      }
    }
    
    // 強制置頂
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col relative bg-[var(--bg)]">
      <CustomCursor />
      <div id="particles-overlay" className="pointer-events-none fixed inset-0 overflow-hidden z-0" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            {/* 關鍵修正：給 motion.div 一個絕對唯一的 key，強迫外層路由每次換頁都一定要立即載入 */}
            <motion.div
              key={currentKey} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
};
