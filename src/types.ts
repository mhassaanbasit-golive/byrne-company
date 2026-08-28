export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: string;
  image: string;
  description: string;
  sqFt: string;
  tenantCount: number;
  anchorTenant: string;
  yearBuilt: number;
  gallery: string[];
}

export interface SoldProperty {
  id: string;
  title: string;
  location: string;
  image: string;
}

export interface JournalArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}
