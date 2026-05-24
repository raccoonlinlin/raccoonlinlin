import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 💡 建立一個表單的指針，用來直接抓取輸入框裡的值
  const formRef = useRef<HTMLFormElement>(null);

  // 🛠️ 填入你在 Formspree 申請到的專屬網址
  const FORMSPREE_URL = "https://formspree.io/f/你的Formspree英文代碼"; 

  // 核心發送邏輯
  const sendData = async () => {
    if (!formRef.current) return;

    // 檢查表單有沒有漏填
    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('糟糕，傳送失敗，請稍後再試，或直接透過 Instagram 聯絡琳琳！🐾');
      }
    } catch (error) {
      alert('網路連線似乎有點問題，請稍後再試！');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-16 relative z-10">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-black text-black">聯絡琳琳</h1>
        <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Get in Touch</p>
        <div className="h-1.5 w-24 mx-auto rounded-full bg-pink-400" />
      </div>

      <div className="bg-white rounded-[4rem] shadow-2xl p-12 border border-pink-50 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-3xl font-black text-gray-900">想聊聊嗎？</h3>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            無論是合作邀約、客製化商品詢問，或是單純想對琳琳說聲嗨，我們都非常歡迎！
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-xl text-pink-500 font-bold">📧</div>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400">Electronic Mail</p>
                <p className="font-bold text-gray-800">raccoonlinlin20010119@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-xl text-pink-500 font-bold">💬</div>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400">Social Messenger</p>
                <p className="font-bold text-gray-800">Instagram @raccoonlinlin</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 relative z-50">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center p-8 bg-pink-50 rounded-3xl border border-pink-100 space-y-4"
            >
              <div className="text-5xl">🎉</div>
              <h4 className="text-2xl font-black text-gray-900">訊息已成功送出！</h4>
              <p className="text-gray-600 font-medium">謝謝你的留言，琳琳收到後會盡快回信給你唷！🐾</p>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4">
              <input 
                type="text" 
                name="name" 
                required
                placeholder="您的姓名" 
                className="px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none font-medium" 
              />
              <input 
                type="email" 
                name="email" 
                required
                placeholder="電子郵件" 
                className="px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none font-medium" 
              />
              <textarea 
                name="message" 
                required
                placeholder="留言內容..." 
                rows={4} 
                className="px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none font-medium resize-none"
              ></textarea>
              
              <motion.button 
                type="button" // 💡 改變策略：改成一般 button，改用 onClick 觸發
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                onClick={(e) => {
                  e.stopPropagation(); // 💡 核心修正：阻止事件向上冒泡，不讓外層隱形區塊干擾
                  sendData();
                }}
                className={`w-full py-5 rounded-2xl font-black shadow-xl hover:shadow-2xl transition-all text-white pointer-events-auto cursor-pointer relative z-[999] ${
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
