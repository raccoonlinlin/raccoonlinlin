import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { BRAND_DATA, SHOPEE_DATA } from '../constants';

export const Works: React.FC = () => {
  return (
    <div className="py-12 space-y-12">
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
