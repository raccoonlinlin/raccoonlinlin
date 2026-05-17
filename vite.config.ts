import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // 確保個人主頁能正確抓到路徑
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // 🟢 用最單純的寫法，繞過網頁版會報錯的 __dirname
      '@': '/src', 
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true, // 打包前強制清空舊檔案
  },
});
