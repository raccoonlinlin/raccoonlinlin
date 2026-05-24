import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { BRAND_DATA, SHOPEE_DATA } from '../constants';

export const Works: React.FC = () => {
  const location = useLocation();
  const [renderKey, setRenderKey] = useState(0);

  // 1. 原本的監聽：網址變動時加 1
  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [location.pathname, location.hash]);

  // 💡 2. 終極強力修正（秘密武器）：
  // 當頁面第一次載入時，在 50 毫秒和 200 毫秒後「自動幫你按第二下」！
  // 這樣使用者體感上只按了一次，但 React 實際上背地裡已經被刷新了，卡住的動畫或元件會被強行推開！
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setRenderKey(prev => prev + 1);
    }, 50);

    const timer2 = setTimeout(() => {
      setRenderKey(prev => prev + 1);
    }, 200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []); // 只有進入這個頁面的第一次會觸發

  return (
    // 加上 min-h-screen 確保區塊有基礎高度，並掛載強刷 Key
    <div key={renderKey} className="py-12 space-y-12 min-h-screen">
      <ProductGrid 
        id="shop"
        data={BRAND_DATA} 
        title="賣貨便精選文創作品" 
        subtitle="Handcrafted Magic & Illustrations" 
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-pink-100 w-full" />
      </div>

      <ProductGrid 
        id="shopee"
        data={SHOPEE_DATA} 
        title="蝦皮賣場熱銷商品" 
        subtitle="Shopee Bestsellers & Stationery" 
      />
    </div>
  );
};
