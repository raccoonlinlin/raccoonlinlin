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
    media: "螺旋手機掛繩 直式.png", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "handmade" 
  },
  { 
    title: "雙色v字編織手腕帶", 
    price: "130", 
    description: "經典V字編織工法，雙色漸層設計，適合送禮或與好友成雙配戴。",
    tag: "可客製化", 
    media: "", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "handmade" 
  },
  { 
    title: "婚禮小物-愛心編織掛件", 
    price: "私訊報價", 
    description: "精緻小巧的編織物，適合婚禮伴手禮或企業活動小物，可依需求調整顏色。",
    tag: "少量起訂", 
    media: "婚禮小物.PNG", 
    type: "image", 
    link: "https://www.instagram.com/raccoonlinlin", 
    category: "handmade" 
  },
  { 
    title: "原創雷切吊飾", 
    price: "40", 
    description: "使用木材雷射切割，精準重現RACCOONLIN設計的插畫，極具質感。",
    tag: "限量商品", 
    media: "雷切小吊飾.jpg", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "merch" 
  },
  { 
    title: "原創手機支架", 
    price: "80", 
    description: "可愛又實用的生活小物，可放手機.名片.明信片.偶像小卡等...。",
    tag: "限量商品", 
    media: "蛋黃女孩手機支架.JPG", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "merch" 
  },
  { 
    title: "防水貼紙(多款)", 
    price: "30", 
    description: "防水材質，適合貼在筆電、水壺等等，陪伴你的日常。",
    tag: "限量商品", 
    media: "https://images.unsplash.com/photo-1572375927501-bc945c50c004?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "merch" 
  },
  { 
    title: "浣熊春季野餐插畫", 
    price: "作品展示", 
    description: "琳琳精心繪製的節氣插畫，收錄在2025限量插畫集中心，溫暖療癒你的心。",
    tag: "原創插畫", 
    media: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://www.instagram.com/raccoonlinlin", 
    category: "illustration" 
  },
  { 
    title: "小浣熊倒垃圾動畫", 
    price: "動態創作", 
    description: "可愛爆棚的小動畫，紀錄了琳琳筆下浣熊勤奮（？）做家事的一面。",
    tag: "短片動畫", 
    media: "https://assets.mixkit.co/videos/preview/mixkit-girl-walking-with-shopping-bags-in-a-park-1200-large.mp4", 
    type: "video", 
    link: "https://www.youtube.com/@Raccoonlinlin%E6%B5%A3%E7%86%8A%E7%90%B3%E7%90%B3", 
    category: "animation" 
  },
  { 
    title: "棉線編織小花掛件", 
    price: "60", 
    description: "運用多種編織技法完成的小花作品，可作為鑰匙圈或包包掛飾，小巧精緻。",
    tag: "手作限定", 
    media: "https://images.unsplash.com/photo-1563220468-d06982848245?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://myship.7-11.com.tw/general/detail/GM2504065791468", 
    category: "handmade" 
  }
];

export const SHOPEE_DATA: Product[] = [
  { 
    title: "浣熊原創紙膠帶", 
    price: "150", 
    description: "循環長度35cm，和紙材質，點綴你的手帳與卡片，讓每一頁都充滿驚喜。",
    tag: "經典文具", 
    media: "https://images.unsplash.com/photo-1583592844799-752e269e8012?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "壓克力夾子組", 
    price: "120", 
    description: "一組四入，包含不同表情的小浣熊，整理文件或裝飾明信片都超療癒。",
    tag: "生活小物", 
    media: "https://images.unsplash.com/photo-1596755094514-f87034a26ef4?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "浣熊帆布午餐袋", 
    price: "350", 
    description: "厚磅帆布材質，手工絹印精緻圖案，可放入兩入餐盒，通勤野餐的好夥伴。",
    tag: "實用好禮", 
    media: "https://images.unsplash.com/photo-1544816153-12ad5d713312?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "原創明信片套裝", 
    price: "180", 
    description: "一組六張，收錄琳琳最受歡迎的六款作品，寫下思念寄給最重要的人。",
    tag: "療癒系列", 
    media: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "illustration" 
  },
  { 
    title: "浣熊造型抱枕", 
    price: "580", 
    description: "極細纖維親膚材質，柔軟好抱，陪你入睡或者坐在沙發上看電視。",
    tag: "溫暖家居", 
    media: "https://images.unsplash.com/photo-1584184924103-e3100570b7f2?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "浣熊環保飲料袋", 
    price: "120", 
    description: "收納後僅手掌大小，方便隨身攜帶。支持環保，從小浣熊飲料袋開始。",
    tag: "熱銷回歸", 
    media: "https://images.unsplash.com/photo-1610461888750-10bfc601b874?auto=format&fit=crop&q=80&w=800", 
    type: "image", 
    link: "https://shopee.tw/aboo2019", 
    category: "merch" 
  },
  { 
    title: "浣熊皮革證件套", 
    price: "290", 
    description: "高質感合成皮革，背面可插兩張卡片，附掛帶，讓通勤也能有質感。",
    tag: "職場美學", 
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
