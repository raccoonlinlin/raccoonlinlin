
import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONTENT } from '../constants/content';
import { SeasonConfig } from '../constants/seasons';

interface YouTubeSectionProps {
  season: SeasonConfig;
}

const YouTubeSection: React.FC<YouTubeSectionProps> = ({ season }) => {
  const { youtube } = BRAND_CONTENT;

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Video Player */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-2/3 w-full"
        >
          <div className="relative group">
            {/* Glowing Border effect based on season */}
            <div 
              className="absolute -inset-1 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
              style={{ backgroundColor: season.colors.primary }}
            ></div>
            
            <div className="relative aspect-video w-full rounded-[1.5rem] overflow-hidden bg-black shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtube.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Right: Info & Call to Action */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/3 w-full space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{youtube.sectionTitle}</h2>
            <p className="text-gray-500 leading-relaxed">
              {youtube.sectionDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {youtube.stats.map((stat, i) => (
              <div key={i} className="bg-white/50 p-4 rounded-2xl border border-gray-100">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{stat.label}</p>
                <p className="text-sm font-bold text-gray-700">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-4">
            <a 
              href={youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-white font-bold transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95"
              style={{ backgroundImage: `linear-gradient(to r, ${season.colors.primary}, ${season.colors.secondary})` }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              {youtube.subscribeText}
            </a>
            
            <a 
              href={youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
            >
              {youtube.watchMoreText}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default YouTubeSection;
