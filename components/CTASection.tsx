
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_CONTENT } from '../constants/content';
import { SeasonConfig } from '../constants/seasons';

interface CTASectionProps {
  season: SeasonConfig;
}

const CTASection: React.FC<CTASectionProps> = ({ season }) => {
  const [showFinalTip, setShowFinalTip] = useState(false);
  const { cta } = BRAND_CONTENT;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {cta.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {cta.description}
          </p>
        </motion.div>

        <div className="relative inline-block group">
          <button
            onClick={() => setShowFinalTip(true)}
            className="px-12 py-5 text-white rounded-full text-xl font-bold shadow-2xl transition-all transform hover:-translate-y-2"
            style={{ backgroundImage: `linear-gradient(to r, ${season.colors.primary}, ${season.colors.secondary})` }}
          >
            {cta.buttonText}
          </button>
          
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        </div>
      </div>

      <AnimatePresence>
        {showFinalTip && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-white p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-2 text-center"
            style={{ borderColor: season.colors.primary }}
          >
            <div className="text-4xl mb-4">{cta.finalTip.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{cta.finalTip.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {cta.finalTip.message}
            </p>
            <button
              onClick={() => setShowFinalTip(false)}
              className="px-6 py-2 bg-gray-100 text-gray-500 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              {cta.finalTip.closeText}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;
