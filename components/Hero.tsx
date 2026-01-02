
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { BRAND_CONTENT } from '../constants/content';
import { SeasonConfig } from '../constants/seasons';

interface HeroProps {
  season: SeasonConfig;
}

const Hero: React.FC<HeroProps> = ({ season }) => {
  const { hero } = BRAND_CONTENT;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // 1. 滾動視差控制
  const yText = useTransform(scrollY, [0, 500], [0, -150]);
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.85]);

  // 2. 滑鼠追蹤視差 (強化的空間感)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // 使用 Spring 讓移動更滑順
  const springX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // 計算偏移量 (-0.5 ~ 0.5)
    mouseX.set((clientX / innerWidth - 0.5));
    mouseY.set((clientY / innerHeight - 0.5));
  };

  // 文字動畫設定
  const titleLetters = hero.title.split("");

  // 漂浮元素組件
  const FloatingAsset = ({ icon, depth, className, rotateSpeed = 1 }: { icon: string, depth: number, className: string, rotateSpeed?: number }) => {
    const x = useTransform(springX, (v) => v * depth * 100);
    const y = useTransform(springY, (v) => v * depth * 100);
    
    return (
      <motion.div
        style={{ x, y }}
        className={`absolute pointer-events-none select-none ${className}`}
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5 * rotateSpeed, -5 * rotateSpeed, 0]
          }}
          transition={{ duration: 4 / rotateSpeed, repeat: Infinity, ease: "easeInOut" }}
          className="text-3xl md:text-5xl opacity-40 filter drop-shadow-sm"
        >
          {icon}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden cursor-none"
    >
      {/* 圖層 1: 背景紋理與光球 */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply z-0" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
      
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [-20, 20, -20]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ backgroundColor: season.colors.primary }}
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
            x: [20, -20, 20]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ backgroundColor: season.colors.secondary }}
        />
      </motion.div>

      {/* 圖層 2: 中景漂浮物 (視差深度較淺) */}
      <FloatingAsset icon="🎨" depth={0.3} className="top-1/4 left-[15%]" rotateSpeed={0.8} />
      <FloatingAsset icon="🧶" depth={0.4} className="bottom-1/3 right-[15%]" rotateSpeed={1.2} />
      <FloatingAsset icon="✨" depth={0.2} className="top-1/3 right-[20%]" />

      {/* 圖層 3: 主體內容 */}
      <motion.div 
        style={{ y: yText, opacity, scale }}
        className="relative z-20 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* 季節徽章 */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 shadow-sm border border-white/50 backdrop-blur-md"
            style={{ backgroundColor: `${season.colors.primary}22`, color: season.colors.primary }}
          >
            <span className="text-sm font-black tracking-widest uppercase">{hero.tag}</span>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: season.colors.primary }} />
          </motion.div>

          {/* 創意標題: 液態文字感 */}
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.9] tracking-tighter text-gray-900 mb-8 select-none">
            <div className="flex justify-center flex-wrap">
              {titleLetters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    delay: i * 0.04, 
                    duration: 0.8, 
                    ease: [0.215, 0.61, 0.355, 1] 
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.1,
                    color: season.colors.primary,
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block origin-bottom"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="block text-4xl md:text-6xl mt-4 font-bold italic tracking-normal"
              style={{ 
                color: season.colors.primary,
                textShadow: `0 10px 30px ${season.colors.primary}33`
              }}
            >
              {hero.highlight}
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* 磁吸感主按鈕 */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('values')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-6 bg-gray-900 rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)]"
            >
              <span className="relative z-10 text-white font-bold text-lg tracking-widest">
                {hero.ctaText}
              </span>
              {/* 按鈕內的流動漸層 */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `linear-gradient(45deg, ${season.colors.primary}, ${season.colors.secondary})` }}
              />
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>

            {/* 精緻捲動引導 */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-black tracking-[0.4em] text-gray-300 uppercase">
                {hero.scrollHint}
              </span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-gray-200 to-transparent relative overflow-hidden">
                <motion.div 
                  animate={{ y: [0, 64] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-1/2"
                  style={{ backgroundColor: season.colors.primary }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 圖層 4: 前景大裝飾物 (大幅度視差) */}
      <FloatingAsset icon="🦊" depth={0.8} className="bottom-[10%] left-[10%]" rotateSpeed={0.5} />
      <FloatingAsset icon="🌻" depth={0.7} className="top-[15%] right-[10%]" rotateSpeed={1.5} />
      
      {/* 底部融合裝飾 */}
      <motion.div 
        style={{ y: yBg }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.08, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl pointer-events-none z-10"
      >
        <img 
          src={hero.bgIllustration} 
          alt="Creative Decoration" 
          className="w-full grayscale brightness-125 mask-gradient"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
