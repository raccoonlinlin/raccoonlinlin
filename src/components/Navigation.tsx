import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: '首頁', isHash: false },
    { path: '/works', label: '作品系列', isHash: true }, // 💡 標記作品系列走強跳轉
    { path: '/events', label: '最新活動', isHash: false },
    { path: '/contact', label: '聯絡琳琳', isHash: false },
  ];

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
          const isActive = currentPath === link.path || (currentPath === '' && link.path === '/');
          
          // 💡 核心強力修正：如果是作品系列，直接用原生 <a> 標籤外掛重整網址，打破 React 卡頓
          if (link.isHash) {
            return (
              <a 
                key={link.path}
                href={`#${link.path}`} // 強制帶入完整雜湊路徑，例如 #/works
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  // 雙重保險：如果網址已經變了但畫面沒動，強制在 50 毫秒後驅動一次微更新
                  setTimeout(() => {
                    if(window.location.hash === '#/works' && !document.querySelector('.works-page-loaded')) {
                       window.dispatchEvent(new HashChangeEvent('hashchange'));
                    }
                  }, 50);
                }}
                className={`font-bold transition-colors ${
                  isActive ? 'text-pink-500' : 'text-gray-500 hover:text-pink-400'
                }`}
              >
                {link.label}
              </a>
            );
          }

          // 其他原本就正常的按鈕維持 Link
          return (
            <Link 
              key={link.path}
              to={link.path} 
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
