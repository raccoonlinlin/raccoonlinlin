
import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONTENT } from '../constants/content';
import { SeasonConfig } from '../constants/seasons';

interface InteractiveSectionProps {
  onOpenModal: (title: string, body: string) => void;
  // Added season prop
  season: SeasonConfig;
}

const InteractiveSection: React.FC<InteractiveSectionProps> = ({ onOpenModal, season }) => {
  const { interactive } = BRAND_CONTENT;

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="relative">
            <img 
              src={interactive.mainImage} 
              alt="Creative Space" 
              className="rounded-3xl shadow-2xl"
            />
            <div 
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border hidden md:block"
              style={{ borderColor: `${season.colors.primary}1A` }}
            >
              <p className="font-bold text-lg italic" style={{ color: season.colors.primary }}>"{interactive.imageCaption}"</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-8"
        >
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            {interactive.title}<br/>
            <span style={{ color: season.colors.primary }}>{interactive.highlight}</span>
          </h2>
          <p className="text-gray-600 text-lg">
            {interactive.description}
          </p>

          <div className="space-y-4">
            {interactive.faqs.map((item, idx) => (
              <button
                key={idx}
                onClick={() => onOpenModal(item.title, item.a)}
                className="w-full text-left p-6 bg-white rounded-2xl border border-gray-100 transition-all flex justify-between items-center group"
                style={{ 
                  // Hover styles handled by Framer or standard CSS; inline for dynamic colors
                }}
              >
                <span className="font-bold text-gray-700">{item.q}</span>
                <span 
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: `${season.colors.primary}1A`, color: season.colors.primary }}
                >
                  ?
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveSection;
