import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/', 
    // 🟢 這裡移除了可能導致雲端靜默崩潰的舊版 tailwindcss 引入方式
    plugins: [react()], 
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      // 🛡️ 強制要求 Vite 必須完整產出 HTML，否則在雲端直接報錯中斷
      reportCompressedSize: false,
      sourcemap: false,
    },
  };
});
