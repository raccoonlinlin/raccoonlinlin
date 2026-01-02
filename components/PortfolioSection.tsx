
import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONTENT } from '../constants/content';
import { SeasonConfig } from '../constants/seasons';

interface PortfolioSectionProps {
  season: SeasonConfig;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ season }) => {
  const { portfolio } = BRAND_CONTENT;

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-gray-900"
        >
          {portfolio.sectionTitle}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 max-w-xl mx-auto"
        >
          {portfolio.sectionDesc}
        </motion.p>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="h-1 w-24 mx-auto mt-6 rounded-full"
          style={{ backgroundColor: season.colors.primary }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolio.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span 
                  className="px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                  style={{ backgroundColor: season.colors.primary }}
                >
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <span className="text-sm font-black" style={{ color: season.colors.primary }}>{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>
              
              <a 
                href={item.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl text-center font-bold text-white transition-all shadow-lg hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 group/btn"
                style={{ backgroundImage: `linear-gradient(to r, ${season.colors.primary}, ${season.colors.secondary})` }}
              >
                <span>前往收藏</span>
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
