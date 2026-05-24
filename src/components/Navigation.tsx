import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { SOCIALS } from '../constants'; // 確保引用路徑正確

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: '首頁' },
    { path: '/works', label: '作品系列' },
    { path: '/events', label: '最新活動' },
    { path: '/contact', label: '聯絡琳琳' },
  ];

  // 精簡路徑判斷：直接拿 location.pathname 來比對，最精準不會出錯
  const currentPath = location.pathname;

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
          const isActive = currentPath === link.path;
          
          return (
            <Link 
              key={link.path}
              to={link.path} 
              // 💡 移除原本會卡住的 handleNavClick，讓跳轉回歸原生順暢！
              // 💡 附加優化：點擊任何分頁時，自動將網頁捲動回最上方
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
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

      <div className="md:hidden text-2xl">☰</div>
    </nav>
  );
};
