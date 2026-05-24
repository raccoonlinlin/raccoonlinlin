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

  useEffect(() => {
    const month = new Date().getMonth() + 1;
    const key = (month >= 3 && month <= 5) ? 'spring' : 
                (month >= 6 && month <= 8) ? 'summer' : 
                (month >= 9 && month <= 11) ? 'autumn' : 'winter';
    setSeasonKey(key);

    const config = SEASONS[key];
    document.documentElement.style.setProperty('--primary', config.primary);
    document.documentElement.style.setProperty('--bg', config.bg);

    // Initial particles
    const particlesContainer = document.getElementById('particles-overlay');
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        // 修正這裡：把原本的 z-[5] 改成了 z-[0]，讓圖示退到最底層背景
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
    
    // Smooth scroll to top on route change if no hash
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    // 修正這裡：外層加上 z-[1] 相關設定，並在 main 與導覽列確保內容在前方
    <div className="min-h-screen flex flex-col relative bg-[var(--bg)]">
      <CustomCursor />
      {/* 修正這裡：把容器層級調到最底部的 z-0 */}
      <div id="particles-overlay" className="pointer-events-none fixed inset-0 overflow-hidden z-0" />
      
      {/* 導覽列與主內容區塊全部加上 z-10，確保絕對壓在飄浮圖示上方 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.key} // 這裡也幫你保留先前修正好的點一下秒開功能
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
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
