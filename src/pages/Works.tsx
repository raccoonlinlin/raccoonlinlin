import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // 引入 location
import { ProductGrid } from '../components/ProductGrid';
import { BRAND_DATA, SHOPEE_DATA } from '../constants';

export const Works: React.FC = () => {
  const location = useLocation();
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [location.pathname, location.hash]);

  return (
    <div key={renderKey} className="py-12 space-y-12">
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
