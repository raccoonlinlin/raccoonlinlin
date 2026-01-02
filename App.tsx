
import React, { useState, useMemo } from 'react';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import InteractiveSection from './components/InteractiveSection';
import PortfolioSection from './components/PortfolioSection';
import YouTubeSection from './components/YouTubeSection';
import SocialHub from './components/SocialHub';
import CTASection from './components/CTASection';
import Modal from './components/Modal';
import SocialShare from './components/SocialShare';
import CustomCursor from './components/CustomCursor';
import SeasonOverlay from './components/SeasonOverlay';
import { BRAND_CONTENT } from './constants/content';
import { getCurrentSeason } from './constants/seasons';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);
  
  // 獲取當前季節
  const season = useMemo(() => getCurrentSeason(), []);

  const openModal = (title: string, body: string) => {
    setModalContent({ title, body });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div 
      className="min-h-screen transition-all duration-1000"
      style={{ background: season.colors.bg }}
    >
      <CustomCursor color={season.colors.primary} />
      <SeasonOverlay config={season} />
      
      {/* Header / Brand */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/40 backdrop-blur-xl border-b border-gray-100 px-6 py-4 flex justify-between items-center glass-effect">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-wider font-['Quicksand']"
          style={{ color: season.colors.primary }}
        >
          {BRAND_CONTENT.navbar.title}
        </motion.div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold tracking-tighter px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: season.colors.primary }}>
            {season.name}
          </span>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-gray-500 font-medium hidden sm:block"
          >
            {BRAND_CONTENT.navbar.subtitle}
          </motion.div>
        </div>
      </nav>

      <main>
        <Hero season={season} />
        
        <section id="values" className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <CoreValues onOpenModal={openModal} season={season} />
        </section>

        <section id="portfolio" className="py-24 relative z-10 bg-white/40 backdrop-blur-sm">
          <PortfolioSection season={season} />
        </section>

        <section id="youtube" className="py-24 relative z-10">
          <YouTubeSection season={season} />
        </section>

        <section id="social" className="py-24 relative z-10 bg-white/20 backdrop-blur-sm">
          <SocialHub season={season} />
        </section>

        <section id="interactive" className="py-24 relative z-10" style={{ backgroundColor: `${season.colors.primary}08` }}>
          <InteractiveSection onOpenModal={openModal} season={season} />
        </section>

        <CTASection season={season} />
      </main>

      <footer className="pt-8 pb-12 text-center text-gray-400 text-sm border-t border-gray-100 bg-white/30 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <SocialShare />
          <div className="mt-8 space-y-2">
            <p>&copy; {new Date().getFullYear()} {BRAND_CONTENT.footer.copyright}</p>
            <p className="italic">{BRAND_CONTENT.footer.motto}</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {modalContent && (
          <Modal 
            title={modalContent.title} 
            body={modalContent.body} 
            onClose={closeModal} 
            color={season.colors.primary}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
