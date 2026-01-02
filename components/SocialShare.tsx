
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_CONTENT } from '../constants/content';

const SocialShare: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;
  const { footer } = BRAND_CONTENT;

  const platforms = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(BRAND_CONTENT.hero.title)}`,
      color: 'hover:text-gray-900'
    },
    {
      name: 'LINE',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.365 9.863c.034.434.034.874.034 1.314 0 4.562-3.42 9.823-9.823 9.823-1.947 0-3.763-.57-5.292-1.547.27.03.544.047.82.047 1.617 0 3.103-.55 4.283-1.474-1.51-.03-2.78-1.025-3.22-2.39.21.04.427.06.65.06.313 0 .618-.04.908-.118-1.58-.317-2.77-1.713-2.77-3.393v-.043c.465.258.997.414 1.562.432-.927-.618-1.537-1.675-1.537-2.87 0-.632.17-1.223.468-1.73 1.702 2.088 4.246 3.462 7.116 3.606-.06-.252-.09-.516-.09-.785 0-1.903 1.542-3.446 3.446-3.446.99 0 1.884.416 2.512 1.083.785-.153 1.52-.442 2.186-.835-.258.805-.805 1.48-1.517 1.903.696-.083 1.362-.27 1.977-.544-.463.692-1.05 1.3-1.722 1.792z"/>
        </svg>
      ),
      url: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-green-500'
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-8 border-t border-gray-50">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{footer.shareText}</span>
      <div className="flex items-center gap-6">
        {platforms.map((p) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className={`text-gray-400 transition-colors duration-300 ${p.color}`}
            title={`分享到 ${p.name}`}
          >
            {p.icon}
          </motion.a>
        ))}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            title="複製連結"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </motion.button>
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-orange-500 whitespace-nowrap bg-orange-50 px-2 py-1 rounded"
              >
                已複製！
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
