
export type SeasonType = 'spring' | 'summer' | 'autumn' | 'winter';

export interface SeasonConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    bg: string;
  };
  particles: string[]; // 掉落物的 Emoji
  id: SeasonType;
}

export const SEASONS: Record<SeasonType, SeasonConfig> = {
  spring: {
    id: 'spring',
    name: '春暖花開',
    colors: {
      primary: '#f472b6', // pink-400
      secondary: '#fbcfe8',
      bg: 'linear-gradient(135deg, #fff1f2 0%, #fae8ff 100%)'
    },
    particles: ['🌸', '🍃', '✨']
  },
  summer: {
    id: 'summer',
    name: '仲夏之夢',
    colors: {
      primary: '#38bdf8', // sky-400
      secondary: '#bae6fd',
      bg: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
    },
    particles: ['🫧', '☀️', '💧']
  },
  autumn: {
    id: 'autumn',
    name: '秋意濃濃',
    colors: {
      primary: '#fb923c', // orange-400
      secondary: '#ffedd5',
      bg: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)'
    },
    particles: ['🍁', '🍂', '🌾']
  },
  winter: {
    id: 'winter',
    name: '冬日煦陽',
    colors: {
      primary: '#94a3b8', // slate-400
      secondary: '#f1f5f9',
      bg: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
    },
    particles: ['❄️', '☁️', '🤍']
  }
};

export const getCurrentSeason = (): SeasonConfig => {
  const month = new Date().getMonth() + 1; // 1-12
  if (month >= 3 && month <= 5) return SEASONS.spring;
  if (month >= 6 && month <= 8) return SEASONS.summer;
  if (month >= 9 && month <= 11) return SEASONS.autumn;
  return SEASONS.winter;
};
