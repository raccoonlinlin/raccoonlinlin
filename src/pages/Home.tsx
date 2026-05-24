import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { InteractiveText } from '../components/InteractiveText';
import { SOCIALS } from '../constants';

// 💡 修正核心：直接 import 圖片，讓 Vite 打包時能精確辨識路徑！
// 請確保你的照片存放在 src/assets/ 資料夾底下，且檔名全為英文小寫
import avatarImg from '../assets/raccoon-avatar.jpg';

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [renderKey, setRenderKey] = useState(0);
  const { scrollY } = useScroll();
  const decoY = useTransform(scrollY, [0, 500], [0, -100]);

  // 核心修正：只要雜湊值（#works 等）一變，立刻強制把首頁刷新，不讓 React 卡住舊畫面！
  // 核心修正：只要雜湊值一變，立刻強制把首頁刷新，確保導覽列順暢
  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [location.hash]);

  return (
    // 通過 key={renderKey}，強制首頁內部的錨點跳轉能按第一下就立刻到達
    <div key={renderKey}>
      {/* Hero Section */}
      <header ref={heroRef} className="relative min-h-screen flex items-center justify-center -mt-20 px-8 max-w-7xl mx-auto overflow-hidden">
@@ -91,11 +94,15 @@ export const Home: React.FC = () => {
            viewport={{ once: true }}
            className="aspect-square bg-white rounded-[4rem] shadow-2xl border-8 border-white overflow-hidden flex items-center justify-center relative group"
          >
            {/* 修正這裡：把檔名換成重新命名後的英文小寫檔名 */}
            {/* 修正這裡：src 換成 import 進來的變數名稱 avatarImg */}
            <img 
              src="raccoonlinlin頭像.JPG" 
              src={raccoonlinlin頭像.JPG} 
              alt="小浣熊頭像"
              className="w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // 如果 assets 找不到，嘗試從 public 根目錄撈圖做雙重保險
                (e.target as HTMLImageElement).src = "./raccoon-avatar.jpg";
              }}
            />
            <div className="absolute inset-0 bg-pink-50 opacity-10 z-[11] pointer-events-none" />
            <motion.div 
@@ -125,7 +132,7 @@ export const Home: React.FC = () => {
                  品牌的靈魂
                </h3>
                <p>
                  那隻可愛的小浣熊，用畫筆留下美好的世界。希望能透過這些療癒的創作，在忙碌的世界裡為你留下一抹溫暖的顏色。
                </p>
              </div>
            </div>
@@ -172,14 +179,14 @@ export const Home: React.FC = () => {
                href={s.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-8 rounded-[3rem] flex flex-col items-center gap-4 border transition-all shadow-sm hover:shadow-xl ${idx === 3 ? 'bg-pink-400 border-transparent text-white' : 'bg-white border-pink-50 text-gray-900'}`}
                className="p-8 rounded-[3rem] flex flex-col items-center gap-4 border transition-all shadow-sm hover:shadow-xl bg-white border-pink-50 text-gray-900"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${idx === 3 ? 'bg-white/20' : 'bg-pink-50'}`}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-pink-50">
                  {idx === 0 ? '📸' : idx === 1 ? '🎨' : idx === 2 ? '🧵' : '✨'}
                </div>
                <div className="text-center">
                  <span className={`block text-[10px] font-black uppercase tracking-widest ${idx === 3 ? 'text-white/80' : 'text-gray-400'}`}>{s.name}</span>
                  <span className={`text-sm font-bold ${idx === 3 ? 'text-white' : 'text-gray-600'}`}>{s.label}</span>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400">{s.name}</span>
                  <span className="text-sm font-bold text-gray-600">{s.label}</span>
                </div>
              </motion.a>
            ))}
