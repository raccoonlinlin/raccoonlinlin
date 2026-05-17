export interface Product {
  title: string;
  price: string;
  description?: string;
  tag: string;
  media: string;
  type: 'image' | 'video';
  link: string;
  category: 'all' | 'illustration' | 'animation' | 'merch' | 'handmade' | 'event';
}

export interface Announcement {
  date: string;
  title: string;
  type: string;
  location: string;
  status: string;
  url: string;
}

export interface SeasonalConfig {
  name: string;
  primary: string;
  bg: string;
  particles: string[];
}
