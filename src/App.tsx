/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
// 保持使用 HashRouter 確保 GitHub Pages 重新整理不噴 404
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// 💡 關鍵強力修正：確保這裡全部都是最傳統的「直接 import」
// 千萬不要用 React.lazy(() => import(...)) 這種懶加載，才不會點第一次時卡住下載！
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 將所有路由元件直接攤開。
            現在不論使用者在首頁還是哪裡，所有分頁的程式碼在網頁一打開時就通通準備好了，
            按一下「作品系列」絕對是零延遲、秒切換！
          */}
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
