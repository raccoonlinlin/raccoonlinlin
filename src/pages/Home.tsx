import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { SOCIALS } from '../constants';

// 💡 嘗試從 assets 引入
import brandImg from '../assets/37.JPG';

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [location.hash]);

  return (
    <div key={renderKey}>
      {/* Hero Section */}
      <header ref={heroRef} className="relative min-h-screen flex items-center justify-center -mt-20 px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 py-12 order-1">
            <div className="inline-block">
              <span className="px-4 py-1 bg-pink-100 rounded-full text-[10px] font-black text-black tracking-widest border border-pink-200">✨ 最新活動公告</span>
            </div>

            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter leading-[100px]"
              >
                彩繪夢想的<br />
                <span className="text-pink-400 italic">小浣熊</span> 🎨
              </motion.h1>
              <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-md">
                這是琳琳最受歡迎的原創動畫角色。在繽紛的世界裡，小浣熊拿起了畫筆，將生活中的點滴化作絢麗的色彩，為你的每一天增添溫暖與想像。
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="px-8 py-3 bg-white rounded-2xl shadow-sm border border-pink-100 text-pink-500 font-bold">
                #療癒系插畫
              </div>
              <div className="px-8 py-3 bg-white rounded-2xl shadow-sm border border-pink-100 text-pink-500 font-bold">
                #原創角色
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex items-center justify-center order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-square bg-white rounded-[4rem] shadow-2xl overflow-hidden border-8 border-white p-4"
            >
              <div className="w-full h-full bg-[#fae8ff] rounded-[3rem] flex flex-col items-center justify-center relative">
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="text-[120px] mb-4"
                >
                  🦝
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0], scale: [1, 1.1, 1], rotate: [0, -10, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="text-[60px]"
                >
                  🎨
                </motion.div>
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <p className="text-[10px] font-black tracking-widest text-pink-300 uppercase">Animation: Painting Dreams</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Brand Story Section */}
      <section id="story" className="max-w-6xl mx-auto px-6 py-24 border-b border-pink-50 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-white rounded-[4rem] shadow-2xl border-8 border-white overflow-hidden flex items-center justify-center relative group"
          >
            {/* 💡 修正：src 必須使用 brandImg 變數！並搭配多重防呆 onerror 尋找 public 目錄 */}
            <img 
              src={brandImg} 
              alt="小浣熊頭像"
              className="w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                // 如果 assets 沒撈到，按順序嘗試：public/37.JPG -> public/37.jpg -> public/37.png
                if (img.src.includes('brandImg') || img.src.includes('assets')) {
                  img.src = "./37.JPG"; 
                } else if (img.src.includes('37.JPG')) {
                  img.src = "./37.jpg"; 
                } else if (img.src.includes('37.jpg')) {
                  img.src = "./37.png"; 
                }
              }}
            />
            <div className="absolute inset-0 bg-pink-50 opacity-10 z-[11] pointer-events-none" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-40 h-40 border-4 border-dashed border-pink-200 rounded-full z-0"
            />
          </motion.div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900">品牌介紹</h2>
              <p className="text-pink-400 font-black tracking-widest uppercase text-xs">Our Story & Vision</p>
              <div className="h-1.5 w-24 rounded-full bg-pink-400" />
            </div>
            
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
              <p>
                RACCOONLINLIN是一個喜歡紀錄生活的插畫品牌。我相信，生活中的每一個小瞬間都值得被溫柔紀錄，每一種情緒都能透過色彩找到出口。
              </p>
              <p>
                從第一支畫筆到現在豐富的文創周邊，浣熊始終堅持有溫度插畫連結每顆心。不論是編織手腕帶還是原創插畫周邊，每一件作品都是獨一無二的。
              </p>
              <div className="pt-4">
                <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-sm">✨</span>
                  品牌的靈魂
                </h3>
                <p>
                  那隻可愛的小浣熊，用畫筆留下美好的世界。希望能透過這些療癒的創作，在忙碌的世界裡為你留下一抹溫暖的顏色。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Hub */}
      <section className="py-32 bg-white/50 border-y border-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
            <div className="w-full lg:w-3/5">
              <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-black shadow-2xl border-8 border-white">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/6fg1aBVnlyI" 
                  title="YouTube video" 
                  frameBorder="0" 
                  allowFullScreen 
                />
              </div>
            </div>
            <div className="w-full lg:w-2/5 space-y-10 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-pink-100 rounded-full text-[10px] font-black text-pink-500 uppercase tracking-widest">Video Content</div>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.85]">YT短片</h2>
              <p className="text-gray-500 font-medium leading-relaxed text-lg">在 YouTube 我紀錄了插畫短片、手作商品，以及我家萌寵的日常。</p>
              <motion.a 
                whileHover={{ y: -5, scale: 1.02 }}
                href="https://www.youtube.com/@Raccoonlinlin%E6%B5%A3%E7%86%8A%E7%90%B3%E7%90%B3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 px-12 py-6 rounded-[2rem] text-white font-black text-lg transition-all shadow-xl hover:shadow-2xl" 
                style={{ background: 'linear-gradient(45deg, #f472b6, #fb923c)' }}
              >
                訂閱我的頻道 🎬
              </motion.a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SOCIALS.map((s, idx) => (
              <motion.a 
                key={idx}
                whileHover={{ y: -10, scale: 1.02 }}
                href={s.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-8 rounded-[3rem] flex flex-col items-center gap-4 border transition-all shadow-sm hover:shadow-xl bg-white border-pink-50 text-gray-900"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-pink-50">
                  {idx === 0 ? '📸' : idx === 1 ? '🎨' : idx === 2 ? '🧵' : '✨'}
                </div>
                <div className="text-center">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400">{s.name}</span>
                  <span className="text-sm font-bold text-gray-600">{s.label}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
