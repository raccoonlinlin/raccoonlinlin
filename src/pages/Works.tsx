import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // 引入 location
import { ProductGrid } from '../components/ProductGrid';
import { BRAND_DATA, SHOPEE_DATA } from '../constants';

export const Works: React.FC = () => {
  const location = useLocation();
  const [renderKey, setRenderKey] = useState(0);

  // 核心修正：只要網址一變（不管點幾下），立刻強制把這個頁面更新，不讓 React 快取舊畫面！
  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [location.pathname, location.hash]);

  return (
    // 透過 key={renderKey}，強制點第一下時，整個頁面的資料就必須原地重寫跳出來
    <div key={renderKey} className="py-12 space-y-12">
      <ProductGrid 
        id="shop"
        data={BRAND_DATA} 
        title="精選文創作品 (7-11 賣貨便)" 
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
