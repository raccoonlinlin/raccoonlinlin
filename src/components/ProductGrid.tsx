/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface ProductGridProps {
  data: Product[];
  title: string;
  subtitle: string;
  id?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ data, title, subtitle, id }) => {
  return (
    <section id={id} className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-gray-900">{title}</h2>
        <p className="text-gray-400 font-medium tracking-widest uppercase text-[10px]">{subtitle}</p>
        <div className="h-1.5 w-24 mx-auto rounded-full mt-8 bg-pink-400" />
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
      >
        <AnimatePresence mode='popLayout'>
          {data.length > 0 ? (
            data.map((product, idx) => (
              <ProductCard key={`${product.title}-${idx}`} product={product} index={idx} />
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center py-20"
            >
              <p className="text-gray-400 text-lg font-medium">✨ 內容正在細心籌備中，敬請期待 🦝</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  // 💡 核心優化：監聽媒體（圖片/影片）是否已經完全下載載入完畢
  const [isMediaLoaded, setIsMediaLoaded] = useState(false);

  const getBtnText = () => {
    if (product.link.includes('myship.7-11.com.tw')) return "前往賣貨便 🛒";
    if (product.link.includes('shopee.tw')) return "前往蝦皮賣場 🛍️";
    if (product.title.includes("婚禮小物")) return "私訊詢問 💌";
    if (product.category === "illustration" || product.category === "animation") return "觀看創作 ✨";
    if (product.category === "event") return "查看活動 🎪";
    return "了解更多 🐾";
  };

  const isPriceDisplay = ["illustration", "animation", "event"].includes(product.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: Math.min((index % 3) * 0.08, 0.3), // 微調交錯延遲，防止後面的卡片等太久
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 border border-pink-50 flex flex-col h-full"
    >
      {/* 媒體容器 */}
      <div className="aspect-square overflow-hidden relative bg-pink-50/30 border-b border-pink-50">
        
        {/* 💡 核心優化 1：流光骨架屏。媒體還沒載入完前，顯示會發光的粉紅方塊 */}
        {!isMediaLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-pink-100/40 to-pink-50 bg-[length:200%_100%] animate-shimmer z-10" />
        )}

        {product.type === 'video' ? (
          <>
            <video 
              src={product.media} 
              autoPlay 
              loop 
              muted 
              playsInline 
              // 💡 核心優化 2：影片開啟預載入
              preload="auto"
              onLoadedData={() => setIsMediaLoaded(true)} // 影片第一幀抓到了，就關閉骨架屏
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                isMediaLoaded ? 'opacity-100 scale-100' : 'opacity-0'
              }`}
            />
            <div className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded-md pointer-events-none uppercase tracking-widest font-black z-20">
              🎬 Animation
            </div>
          </>
        ) : (
          <img 
            src={product.media} 
            alt={product.title}
            // 💡 核心優化 3：最速圖形加載設定，強迫瀏覽器開足馬力先下載它
            loading="eager"
            fetchPriority="high"
            onLoad={() => setIsMediaLoaded(true)} // 圖片一下載完，瞬間滑順淡入
            className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
              isMediaLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
        )}
        
        <span 
          className="absolute top-8 left-8 px-5 py-1.5 rounded-full text-[10px] font-black text-white shadow-lg uppercase bg-pink-400 z-20"
        >
          {product.tag}
        </span>
      </div>

      {/* 文字與按鈕內容區 */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-2">
          <h3 className="text-2xl font-black text-gray-900 leading-tight">{product.title}</h3>
          <span className="font-bold text-sm text-pink-500 whitespace-nowrap mt-1">
            {isPriceDisplay ? product.price : `$ ${product.price}`}
          </span>
        </div>
        
        {product.description && (
          <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
            {product.description}
          </p>
        )}

        <a 
          href={product.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full py-5 rounded-2xl text-center font-black text-[15px] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-[1.03] active:scale-95 mt-auto"
          style={{ background: 'linear-gradient(45deg, #f472b6, #fbcfe8)' }}
        >
          {getBtnText()}
        </a>
      </div>
    </motion.div>
  );
};
