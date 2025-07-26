export interface Language {
  code: 'en' | 'ru';
  name: string;
  flag: string;
}

export interface Translations {
  en: {
    [key: string]: string;
  };
  ru: {
    [key: string]: string;
  };
}

export interface WhatsAppConfig {
  en: string;
  ru: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  duration: string;
  price: string;
  rating: number;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

export interface Package {
  id: string;
  name: string;
  duration: string;
  price: string;
  originalPrice?: string;
  image: string;
  highlights: string[];
  included: string[];
  rating: number;
  reviews: number;
  badge?: string;
}