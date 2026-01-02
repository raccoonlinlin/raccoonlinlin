
/**
 * 💡 這是你的網站「後台」內容管理檔案
 */

export const BRAND_CONTENT = {
  navbar: {
    title: "RACCOONLINLIN",
    subtitle: "浣熊琳琳 ｜ 插畫 · 手作 · 溫度"
  },

  hero: {
    tag: "EST. 2024",
    title: "RACCOONLINLIN",
    highlight: "浣熊琳琳",
    description: "你是否也曾想過，如果世界是本巨大的畫冊，我們該如何塗抹？我是琳琳，在這裡，我們用繽紛色彩捕捉快樂，用帶有指尖溫度的手作，為你的日常添上一抹暖陽。",
    ctaText: "進入色彩世界",
    scrollHint: "SCROLL TO EXPLORE",
    bgIllustration: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000"
  },

  // 🌐 社群聯名 Hub 設定 - 調整為 3 欄式 Bento Grid
  socialHub: {
    sectionTitle: "探索琳琳的數位日常",
    sectionDesc: "除了網頁，我也在這些地方分享生活。點擊卡片，來跟我打聲招呼吧！",
    platforms: [
      {
        id: "instagram",
        name: "Instagram",
        handle: "@raccoonlinlin",
        desc: "最新插畫動態與限時動態幕後",
        link: "https://instagram.com",
        color: "#E1306C",
        icon: "📸",
        gridClass: "md:col-span-2 md:row-span-2" // 2x2 大卡片
      },
      {
        id: "threads",
        name: "Threads",
        handle: "@raccoonlinlin",
        desc: "關於創作的碎碎念與心情",
        link: "https://threads.net",
        color: "#000000",
        icon: "🧵",
        gridClass: "md:col-span-1 md:row-span-2" // 1x2 長卡片 (與 IG 等高)
      },
      {
        id: "facebook",
        name: "Facebook",
        handle: "浣熊琳琳手繪生活",
        desc: "詳細活動公告",
        link: "https://facebook.com",
        color: "#1877F2",
        icon: "👥",
        gridClass: "md:col-span-1 md:row-span-1" // 1x1 標準
      },
      {
        id: "youtube",
        name: "YouTube",
        handle: "RACCOONLINLIN Ch.",
        desc: "沉浸式手作與繪圖教學影片",
        link: "https://youtube.com",
        color: "#FF0000",
        icon: "🎬",
        gridClass: "md:col-span-2 md:row-span-1" // 2x1 寬卡片 (補齊下方空位)
      }
    ]
  },

  youtube: {
    sectionTitle: "影音創作 · 幕後紀實",
    sectionDesc: "透過影像，帶你走進插畫與手作的誕生過程。歡迎訂閱我的頻道，不錯過任何繽紛時刻！",
    videoId: "dQw4w9WgXcQ",
    channelUrl: "https://www.youtube.com",
    subscribeText: "訂閱 RACCOONLINLIN",
    watchMoreText: "在 YouTube 上查看更多作品",
    stats: [
      { label: "更新頻率", value: "每週更新" },
      { label: "影片內容", value: "手作教學 / 繪畫過程" }
    ]
  },

  portfolio: {
    sectionTitle: "精選作品展示",
    sectionDesc: "將插畫轉化為實體，讓這份療癒感陪伴你的每一天。",
    items: [
      {
        title: "森林系手繪明信片",
        desc: "使用 300g 厚磅象牙卡，保留手繪筆觸的細膩與溫潤感。",
        tag: "插畫",
        price: "NT$ 150",
        imageUrl: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=1000",
        shopUrl: "https://www.pinkoi.com"
      },
      {
        title: "暖心毛線編織袋",
        desc: "純手工一針一線編織而成，大容量設計適合裝下日常的驚喜。",
        tag: "手作",
        price: "NT$ 880",
        imageUrl: "https://images.unsplash.com/photo-1608501821300-4f99e58baf77?auto=format&fit=crop&q=80&w=1000",
        shopUrl: "https://www.pinkoi.com"
      },
      {
        title: "原創角色壓克力吊飾",
        desc: "雙面印刷設計，無論從哪個角度看都一樣可愛滿分。",
        tag: "文創",
        price: "NT$ 190",
        imageUrl: "https://images.unsplash.com/photo-1590859427610-6927958992c9?auto=format&fit=crop&q=80&w=1000",
        shopUrl: "https://www.pinkoi.com"
      },
      {
        title: "夢幻水彩紙膠帶",
        desc: "多種循環圖案，是手帳愛好者不容錯過的色彩收藏。",
        tag: "插畫",
        price: "NT$ 220",
        imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=1000",
        shopUrl: "https://www.pinkoi.com"
      }
    ]
  },

  values: {
    sectionTitle: "為什麼選擇 RACCOONLINLIN？",
    items: [
      {
        title: "色彩的轉譯",
        desc: "不僅是顏料的堆疊，更是心情的翻譯官。每一種繽紛，都代表著生活中被遺忘的微小喜悅。",
        icon: "🎨",
        tip: "點擊了解插畫理念",
        details: "在我的插畫世界裡，沒有正確的顏色，只有正確的情緒。我希望透過明亮的色調，打破日常的沉悶。"
      },
      {
        title: "手作的刻痕",
        desc: "在這個量產的時代，每一件帶有指尖溫度的作品，都是對生活最誠摯的告白。",
        icon: "🧶",
        tip: "點擊感受手作溫度",
        details: "手作最迷人之處，在於那一點點的不完美。每一針、每一線，都記錄了製作時的呼吸與心跳。"
      },
      {
        title: "文創的靈魂",
        desc: "推廣不僅是分享商品，更是分享一種對生活的態度：讓實用與美感共存。",
        icon: "✨",
        tip: "點擊探索品牌使命",
        details: "文創不應該只是擺飾，它應該是你書桌上、包包裡那抹讓你嘴角上揚的力量。"
      }
    ]
  },

  interactive: {
    title: "關於我們的創作邏輯：",
    highlight: "從想像到指尖",
    description: "許多新手常問：插畫與手作要如何結合？其實邏輯很簡單，就是將「平面視覺」與「觸覺體驗」融為一體。",
    mainImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "每一步細節，都值得被看見",
    faqs: [
      { q: "我們的插畫色彩學", a: "我們使用 60% 的柔和底色搭配 40% 的高飽和度色彩，確保作品能帶來振奮精神的力量。", title: "關於色彩比例" },
      { q: "手作材料的選擇", a: "堅持選用天然纖維與環保材質，讓你在使用時，皮膚能感受到最純粹的溫柔。", title: "關於材質堅持" },
      { q: "跨界文創的可能性", a: "從一張貼紙到一個手工編織袋，只要能承載「溫暖」這個核心，任何載體都是好作品。", title: "關於跨界融合" }
    ]
  },

  cta: {
    title: "準備好開啟繽紛的生活篇章了嗎？",
    description: "無論是一張明信片的鼓勵，還是一個手作包的陪伴，我們都希望成為你生活裡最溫柔的後盾。",
    buttonText: "點擊領取核心結論",
    finalTip: {
      icon: "🦊",
      title: "琳琳的真心話",
      message: "「可愛不只是外表，而是一種即使面對灰色日常，依然選擇擁抱色彩的勇氣。」",
      closeText: "收到了，我會記得：）"
    }
  },

  footer: {
    shareText: "分享這份溫度",
    copyright: "RACCOONLINLIN. All Rights Reserved.",
    motto: "在繽紛的色彩裡，我們相遇。"
  }
};
