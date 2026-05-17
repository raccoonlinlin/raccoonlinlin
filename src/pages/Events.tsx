import React from 'react';
import { motion } from 'motion/react';
import { ANNOUNCEMENTS } from '../constants';
import { InteractiveText } from '../components/InteractiveText';

export const Events: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-black text-black">最新活動公告</h1>
        <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">News & Upcoming Events</p>
        <div className="h-1.5 w-24 mx-auto rounded-full bg-pink-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ANNOUNCEMENTS.map((ev, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col gap-6 border border-pink-50"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-black text-gray-400">{ev.date}</span>
              <span className="px-3 py-1 bg-pink-400 rounded-lg text-[9px] font-bold text-white uppercase">{ev.type}</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900">{ev.title}</h3>
            <div className="text-gray-500 text-sm font-medium">📍 {ev.location}</div>
            <div className="mt-auto pt-6 border-t border-pink-50 flex justify-between items-center">
              <span className="text-[10px] font-black text-gray-400 uppercase">{ev.status}</span>
              <a href={ev.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-pink-500 hover:text-pink-600 transition-colors">了解詳情 →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
