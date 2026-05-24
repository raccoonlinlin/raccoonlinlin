/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 💡 建立一個表單的指針，用來直接抓取輸入框裡的值
  const formRef = useRef<HTMLFormElement>(null);

  // 🛠️ 填入你在 Formspree 申請到的專屬完整網址
  const FORMSPREE_URL = "https://formspree.io/f/mzdwappq"; 

  // 核心發送邏輯
  const sendData = async () => {
    if (!formRef.current) return;

    // 1. 檢查表單有沒有漏填（例如信箱格式對不對、有沒有空著）
    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    setIsSubmitting(true);

    // 2. 為了防止發送失敗，我們將資料打包成最標準的 JSON 格式送過去
    const nameInput = formRef.current.querySelector('input[name="name"]') as HTMLInputElement;
    const emailInput = formRef.current.querySelector('input[name="email"]') as HTMLInputElement;
    const messageInput = formRef.current.querySelector('textarea[name="message"]') as HTMLTextAreaElement;

    const data = {
      name: nameInput?.value || '',
      email: emailInput?.value || '',
      message: messageInput?.value || ''
    };

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        }
      });

      // 3. 讀取後台回傳的真實訊息
      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert(`發送失敗！後台回報原因：${result.error || '不明錯誤'}。\n\n💡 提示：請確認你是否已經去 Gmail 信箱點擊驗證信開通表單，或者後台將此表單停用了！🐾`);
      }
    } catch (error) {
      alert('網路連線似乎有點問題，或是被瀏覽器的安全性套件擋住了，請稍後再試！');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // 💡 調整外層手機版的間距 (py-12 md:py-24)
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-24 space-y-12 md:space-y-16 relative z-10">
      <div className="text-center space-y-3 md:space-y-4">
        <h1 className="text-4xl md:text-7xl font-black text-black">聯絡琳琳</h1>
        <p className="text-gray-400 font-medium tracking-widest uppercase text-[10px] md:text-xs">Get in Touch</p>
        <div className="h-1.5 w-24 mx-auto rounded-full bg-pink-400" />
      </div>

      {/* 💡 核心修正 1：改用 rounded-[2.5rem] md:rounded-[4rem] 以及 p-6 md:p-12 讓手機版更好看 */}
      <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-2xl p-6 md:p-12 border border-pink-50 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        
        {/* 左側/上方的文字介紹區 */}
        <div className="space-y-6 md:space-y-8">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900">想聊聊嗎？</h3>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
            無論是合作邀約、客製化商品詢問，或是單純想對琳琳說聲嗨，我們都非常歡迎！
          </p>
          
          {/* 💡 核心修正 2：加強聯絡資訊的文字防超出版面處理 */}
          <div className="space-y-4 md:space-y-6">
            {/* 信箱區塊 */}
            <div className="flex items-center gap-4 bg-pink-50/30 p-4 rounded-2xl md:bg-transparent md:p-0">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-xl text-pink-500 font-bold shrink-0">📧</div>
              <div className="min-w-0 flex-grow"> {/* 確保子區塊能縮放 */}
                <p className="text-[9px] md:text-[10px] font-black uppercase text-gray-400 tracking-wider">Electronic Mail</p>
                {/* 💡 break-all 強制換行斷字，text-sm 縮小手機字體，防止長信箱超出去 */}
                <p className="font-bold text-sm md:text-base text-gray-800 break-all select-all">
                  raccoonlinlin20010119@gmail.com
                </p>
              </div>
            </div>

            {/* IG 區塊 */}
            <div className="flex items-center gap-4 bg-pink-50/30 p-4 rounded-2xl md:bg-transparent md:p-0">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-xl text-pink-500 font-bold shrink-0">💬</div>
              <div className="min-w-0 flex-grow">
                <p className="text-[9px] md:text-[10px] font-black uppercase text-gray-400 tracking-wider">Social Messenger</p>
                <p className="font-bold text-sm md:text-base text-gray-800 break-all">
                  Instagram @raccoonlinlin
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 右側/下方的表單區 */}
        <div className="space-y-6 relative z-50">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center p-6 md:p-8 bg-pink-50 rounded-3xl border border-pink-100 space-y-4"
            >
              <div className="text-5xl">🎉</div>
              <h4 className="text-2xl font-black text-gray-900">訊息已成功送出！</h4>
              <p className="text-gray-600 font-medium text-sm md:text-base">謝謝你的留言，琳琳收到後會盡快回信給你唷！🐾</p>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4">
              <input 
                type="text" 
                name="name" 
                required
                placeholder="您的姓名" 
                className="px-5 py-3.5 md:px-6 md:py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none font-medium text-sm md:text-base" 
              />
              <input 
                type="email" 
                name="email" 
                required
                placeholder="電子郵件" 
                className="px-5 py-3.5 md:px-6 md:py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none font-medium text-sm md:text-base" 
              />
              <textarea 
                name="message" 
                required
                placeholder="留言內容..." 
                rows={4} 
                className="px-5 py-3.5 md:px-6 md:py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none font-medium text-sm md:text-base resize-none"
              ></textarea>
              
              <motion.button 
                type="button" 
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  sendData();
                }}
                className={`w-full py-4 md:py-5 rounded-2xl font-black shadow-xl hover:shadow-2xl transition-all text-white pointer-events-auto cursor-pointer relative z-[999] text-sm md:text-base ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900'
                }`}
              >
                {isSubmitting ? '傳送中... 🐾' : '送出訊息 🐾'}
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
