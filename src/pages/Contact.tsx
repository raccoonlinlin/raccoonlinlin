import React from 'react';
import { motion } from 'motion/react';
import { InteractiveText } from '../components/InteractiveText';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
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

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="您的姓名" className="px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none font-medium" />
            <input type="email" placeholder="電子郵件" className="px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none font-medium" />
            <textarea placeholder="留言內容..." rows={4} className="px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none font-medium resize-none"></textarea>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-2xl bg-gray-900 text-white font-black shadow-xl hover:shadow-2xl transition-all"
            >
              送出訊息 🐾
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
