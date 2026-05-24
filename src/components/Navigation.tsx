import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { InteractiveText } from './InteractiveText';
import { SEASONS } from '../constants';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const month = new Date().getMonth() + 1;
  const key = (month >= 3 && month <= 5) ? 'spring' : 
              (month >= 6 && month <= 8) ? 'summer' : 
              (month >= 9 && month <= 11) ? 'autumn' : 'winter';
  const config = SEASONS[key];

  const navLinks = [
    { path: '/', label: '首頁' },
    { path: '/works', label: '作品系列' },
    { path: '/events', label: '最新活動' },
    { path: '/contact', label: '聯絡琳琳' },
  ];

  // 修正這裡：建立一個小工具，讓不論是標準路由還是 HashRouter 都能精確對齊目前的網址
  const currentPath = location.hash ? location.hash.replace('#', '') : location.pathname;

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-[100] bg-white/40 backdrop-blur-md px-4 md:px-10 flex justify-between items-center border-b border-pink-100">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="text-3xl transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300">🦝</div>
        <motion.div 
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl font-black tracking-tighter text-gray-800"
        >
          {"RACCOONLINLIN浣熊琳琳".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ delay: index * 0.04, duration: 0.4, ease: "easeOut" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </Link>
      
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        {navLinks.map((link) => {
          // 標準化比對路徑
          const isActive = currentPath === link.path || (currentPath === '' && link.path === '/');
          
          return (
            <Link 
              key={link.path}
              to={link.path} 
              className={`font-bold transition-colors ${
                isActive ? 'text-pink-500' : 'text-gray-500 hover:text-pink-400'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 py-2 bg-pink-400 text-white rounded-full font-black text-sm shadow-md hover:bg-pink-500 transition-colors cursor-pointer"
          onClick={() => window.open('https://myship.7-11.com.tw/general/detail/GM2504065791468', '_blank')}
        >
          SHOP NOW
        </motion.div>
      </div>

      {/* Mobile Menu Icon (Placeholder for now) */}
      <div className="md:hidden text-2xl">☰</div>
    </nav>
  );
};
