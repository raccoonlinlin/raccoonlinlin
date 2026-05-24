/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const Navigation: React.FC = () => {
  const location = useLocation();
  
  // 💡 關鍵修正 1：新增一個控制手機選單開關的狀態（true 代表打開，false 代表關閉）
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: '首頁' },
    { path: '/works', label: '作品系列' },
    { path: '/events', label: '最新活動' },
    { path: '/contact', label: '聯絡琳琳' },
  ];

  // 精準捕捉 HashRouter 的當前路徑
  const currentPath = location.hash ? location.hash.replace('#', '') : location.pathname;

  // 💡 關鍵修正 2：建立一個點擊連結的處理函式
  // 讓使用者在手機點了任何一頁後，選單會自己乖乖收起來，並且畫面滑到最上面
  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 💻 上方固定的導覽列主體 */}
      <nav className="fixed top-0 left-0 w-full h-20 z-[100] bg-white/40 backdrop-blur-md px-4 md:px-10 flex justify-between items-center border-b border-pink-100">
        
        {/* LOGO 區塊 */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 group">
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
        
        {/* 電腦版導覽按鈕 (md:flex 代表電腦版顯示，手機版自動隱藏) */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (currentPath === '' && link.path === '/');
            
            return (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={handleLinkClick} 
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

        {/* 📱 關鍵修正 3：把原本純文字的 ☰ 改成真正的功能按鈕！ */}
        {/* 在手機版顯示 (md:hidden)，點擊時會切換開關狀態，並在 ☰ 與 ✕ 之間流暢變換 */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl p-2 text-gray-700 hover:text-pink-500 transition-colors focus:outline-none cursor-pointer select-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* 📱 關鍵修正 4：新增手機版專屬的滿版彈出選單抽屜 */}
      {/* 運用 AnimatePresence 確保打開與關閉時都有滑順的淡入淡出、由上往下掉落的動畫 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] bg-white pt-24 px-6 pb-12 flex flex-col justify-between md:hidden"
          >
            {/* 手機版分頁連結清單 */}
            <div className="flex flex-col gap-6 mt-6">
              {navLinks.map((link, idx) => {
                const isActive = currentPath === link.path || (currentPath === '' && link.path === '/');
                
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }} // 讓選項像樓梯一樣一條一條滑出來
                  >
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className={`text-3xl font-black block py-2 transition-all ${
                        isActive ? 'text-pink-500 border-l-4 border-pink-400 pl-4' : 'text-gray-500 pl-4 hover:text-pink-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* 手機版底部的 SHOP NOW 滿版按鈕 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <div 
                className="w-full py-4 bg-pink-400 text-white text-center rounded-2xl font-black text-lg shadow-lg active:bg-pink-500 transition-colors cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  window.open('https://myship.7-11.com.tw/general/detail/GM2504065791468', '_blank');
                }}
              >
                SHOP NOW 🛒
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
