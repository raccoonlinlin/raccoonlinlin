import { Product, Announcement, SeasonalConfig } from './types';

export const SEASONS: Record<string, SeasonalConfig> = {
  spring: { name: '春暖花開', primary: '#f472b6', bg: 'linear-gradient(135deg, #fff1f2 0%, #fae8ff 100%)', particles: ['🌸', '🍃'] },
  summer: { name: '仲夏之夢', primary: '#38bdf8', bg: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', particles: ['🫧', '☀️'] },
  autumn: { name: '秋意濃濃', primary: '#fb923c', bg: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', particles: ['🍁', '🍂'] },
  winter: { name: '冬日煦陽', primary: '#94a3b8', bg: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', particles: ['❄️', '🤍'] }
};

export const BRAND_DATA: Product[] = [
  { 
    title: "螺旋編織手腕帶", 
    price: "130", 
    description: "柔軟棉繩手工編織，多色可選，展現個人獨特品味與手作溫度。",
    tag: "可客製化", 
    media: "17.png", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "handmade" 
  },
  { 
    title: "雙色v字編織手腕帶組", 
    price: "200", 
    description: "經典V字編織工法，搭配同色系狗掌吊飾，適合送禮或與好友成雙配戴。",
    tag: "可客製化", 
    media: "13.png", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "handmade" 
  },
  { 
    title: "婚禮小物-愛心編織", 
    price: "私訊報價", 
    description: "精緻小巧的編織物，適合婚禮伴手禮或企業活動小物，可依需求調整顏色。",
    tag: "少量起訂", 
    media: "21.PNG", 
    type: "image", 
    link: "https://www.instagram.com/raccoonlinlin", 
    category: "handmade" 
  },
  { 
    title: "原創雷切吊飾", 
    price: "40", 
    description: "使用木材雷射切割，精準重現RACCOONLIN設計的插畫，極具質感。",
    tag: "限量商品", 
    media: "20.jpg", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "merch" 
  },
  { 
    title: "原創手機支架", 
    price: "80", 
    description: "可愛又實用的生活小物，可放手機.名片.明信片.偶像小卡等...。",
    tag: "限量商品", 
    media: "25.JPG", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "merch" 
  },
  { 
    title: "防水貼紙(多款)", 
    price: "30", 
    description: "防水材質，適合貼在筆電、水壺等等，陪伴你的日常。",
    tag: "限量商品", 
    media: "5.JPG", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "merch" 
  },
  { 
    title: "手作聖誕掛飾", 
    price: "50", 
    description: "一年一度的聖誕節，一定要精心布置，Raccoonlinlin陪你一起度過聖誕節。",
    tag: "季節商品", 
    media: "43.JPG", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "handmade" 
  },
  { 
    title: "似顏繪明信片", 
    price: "客製化商品", 
    description: "可愛繽紛線條感的似顏繪，可以多人畫在同一張，適合送禮紀念用。",
    tag: "專屬卡片", 
    media: "6.JPG", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "postcard" 
  },
  { 
    title: "原創雷切雙吊飾", 
    price: "40", 
    description: "使用木材雷射切割，精準重現RACCOONLIN設計的插畫，極具質感。",
    tag: "限量商品", 
    media: "9.JPG", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "merch" 
  }
];

export const SHOPEE_DATA: Product[] = [
  { 
    title: "螺旋編織手腕帶", 
    price: "", 
    description: "柔軟棉繩手工編織，多色可選，展現個人獨特品味與手作溫度。",
    tag: "可客製化", 
    media: "19.PNG", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "雙色v字編織手腕帶組", 
    price: "", 
    description: "經典V字編織工法，搭配同色系狗掌吊飾，適合送禮或與好友成雙配戴。",
    tag: "可客製化", 
    media: "13.png", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "婚禮小物-愛心編織", 
    price: "", 
    description: "精緻小巧的編織物，適合婚禮伴手禮或企業活動小物，可依需求調整顏色。",
    tag: "少量起訂", 
    media: "52.PNG", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "原創雷切吊飾", 
    price: "", 
    description: "使用木材雷射切割，精準重現RACCOONLIN設計的插畫，極具質感。",
    tag: "限量商品", 
    media: "53.JPG", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "illustration" 
  },
  { 
    title: "原創手機支架", 
    price: "", 
    description: "可愛又實用的生活小物，可放手機.名片.明信片.偶像小卡等...。",
    tag: "限量商品", 
    media: "24.JPG", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "防水貼紙(多款)", 
    price: "", 
    description: "防水材質，適合貼在筆電、水壺等等，陪伴你的日常。",
    tag: "限量商品", 
    media: "57.JPG", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "胸針夾子組", 
    price: "", 
    description: "高質感透明胸針夾子組，適合當辦公室小物",
    tag: "限量商品", 
    media: "https://images.unsplash.com/photo-1627192765332-21a4fddd43e3?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "手工編織鑰匙圈", 
    price: "90", 
    description: "多種顏色棉繩編織而成，耐用且獨特，隨身掛上一份琳琳的手作溫暖。",
    tag: "加價購首選", 
    media: "https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "handmade" 
  },
  { 
    title: "浣熊2026曆卡組", 
    price: "220", 
    description: "12個月份的精緻插畫曆卡，附木製底座，讓小浣熊陪你度過精彩的一年。",
    tag: "年度限定", 
    media: "https://images.unsplash.com/photo-1506784919141-93504993e36c?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  { date: '2025.12.23', title: 'Memopresso相框活動', type: 'photo frame', location: '台灣各地據點', status: '進行中', url: 'https://creator.memopresso.com/raccoonlinlin' },
  { date: '2026.01.01', title: '7-11賣貨便', type: 'shop', location: '賣貨便', status: '進行中', url: 'https://myship.7-11.com.tw/general/detail/GM2504065791468' },
  { date: '2026.02.01', title: '蝦皮賣場', type: 'shopee', location: '蝦皮賣場', status: '準備中', url: 'https://shopee.tw/aboo2019' }
];

export const SOCIALS = [
  { name: 'Instagram', label: '插畫小天地', link: 'https://www.instagram.com/raccoonlinlin/' },
  { name: 'Facebook', label: '臉書粉專', link: 'https://www.facebook.com/profile.php?id=100087636360207' },
  { name: 'Threads', label: '日常分享', link: 'https://www.threads.com/@raccoonlinlin' },
  { name: 'YouTube', label: '短影音', link: 'https://www.youtube.com/@Raccoonlinlin%E6%B5%A3%E7%86%8A%E7%90%B3%E7%90%B3' }
];
