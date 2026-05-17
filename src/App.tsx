/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
// 修正 1：把 BrowserRouter 改成 HashRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    // 這裡的 <Router> 現在會自動切換成 HashRouter 模式運作
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
