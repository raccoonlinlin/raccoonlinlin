
import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  title: string;
  body: string;
  onClose: () => void;
  // Added color prop
  color: string;
}

const Modal: React.FC<ModalProps> = ({ title, body, onClose, color }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl overflow-hidden"
      >
        {/* Decor */}
        <div 
          className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 blur-xl" 
          style={{ backgroundColor: `${color}1A` }}
        />
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-1 h-8 rounded-full" style={{ backgroundColor: color }}></span>
          {title}
        </h2>
        
        <div className="text-gray-600 leading-loose text-lg mb-8">
          {body}
        </div>
        
        <button
          onClick={onClose}
          className="w-full py-4 rounded-2xl font-bold transition-colors"
          style={{ backgroundColor: `${color}1A`, color: color }}
        >
          關閉視窗
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
