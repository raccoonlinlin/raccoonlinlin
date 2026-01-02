
import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONTENT } from '../constants/content';
import { SeasonConfig } from '../constants/seasons';

interface CoreValuesProps {
  onOpenModal: (title: string, body: string) => void;
  // Added season prop
  season: SeasonConfig;
}

const CoreValues: React.FC<CoreValuesProps> = ({ onOpenModal, season }) => {
  const { values } = BRAND_CONTENT;

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{values.sectionTitle}</h2>
        {/* Use season primary color */}
        <div className="h-1 w-20 mx-auto rounded-full" style={{ backgroundColor: season.colors.primary }}></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.items.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all cursor-pointer"
            style={{ 
               borderColor: 'transparent'
            }}
            whileHover={{ borderColor: `${season.colors.primary}33`, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}
            onClick={() => onOpenModal(v.title, v.details)}
          >
            <div className="text-4xl mb-6 transform group-hover:scale-125 transition-transform duration-300">
              {v.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{v.title}</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              {v.desc}
            </p>
            <span 
              className="text-sm font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform"
              style={{ color: season.colors.primary }}
            >
              {v.tip} <span>→</span>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
