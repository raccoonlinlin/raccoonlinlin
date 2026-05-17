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
        p.className = 'particle fixed pointer-events-none z-[5]';
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
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <div id="particles-overlay" className="pointer-events-none fixed inset-0 overflow-hidden" />
      <Navigation />
      
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
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
  );
};
