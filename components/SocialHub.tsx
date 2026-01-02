
import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONTENT } from '../constants/content';
import { SeasonConfig } from '../constants/seasons';

interface SocialHubProps {
  season: SeasonConfig;
}

const SocialHub: React.FC<SocialHubProps> = ({ season }) => {
  const { socialHub } = BRAND_CONTENT;

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-gray-900"
        >
          {socialHub.sectionTitle}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 max-w-xl mx-auto"
        >
          {socialHub.sectionDesc}
        </motion.p>
      </div>

      {/* 移除 md:grid-rows-2 改由內容 gridClass 決定 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        {socialHub.platforms.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, rotateX: 2, rotateY: 2 }}
            className={`${p.gridClass} relative group p-8 rounded-[2rem] overflow-hidden flex flex-col justify-between glass-effect border border-white/50 shadow-sm transition-all duration-300 min-h-[220px]`}
            style={{ 
              perspective: '1000px'
            }}
          >
            {/* Background Glow */}
            <div 
              className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10 group-hover:opacity-30 transition-opacity blur-3xl"
              style={{ backgroundColor: p.color }}
            ></div>

            <div className="relative z-10">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-12"
                style={{ backgroundColor: `${p.color}1A`, color: p.color }}
              >
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{p.name}</h3>
              <p className="text-sm font-medium text-gray-400 mb-4">{p.handle}</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                {p.desc}
              </p>
            </div>

            <div className="relative z-10 mt-6 flex justify-between items-center">
              <span 
                className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full text-white shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                style={{ backgroundColor: p.color }}
              >
                跟隨我 →
              </span>
              <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>

            {/* Season themed underline on hover */}
            <div 
              className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500"
              style={{ backgroundColor: season.colors.primary }}
            ></div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialHub;
