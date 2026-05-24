/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { BRAND_DATA } from '../constants';

export const Works: React.FC = () => {
  return (
    // 💡 保持純淨高效，移除強刷機制，並預留 pt-28 頂部空間防導覽列遮擋
    <div className="pt-28 pb-12 md:py-24 space-y-4 min-h-screen">
      
      {/* 🛒 僅保留：賣貨便商品區塊 */}
      <ProductGrid 
        id="shop"
        data={BRAND_DATA} 
        title="賣貨便精選文創作品" 
        subtitle="Handcrafted Magic & Illustrations" 
      />
      
    </div>
  );
};
