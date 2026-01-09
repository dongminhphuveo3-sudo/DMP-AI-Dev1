
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  image: string;
  images: string[]; // Mảng chứa tối đa 10 ảnh demo
  category: string;
  downloadLink: string;
  features: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
  duration: string;
  lessons: number;
  image: string;
  syllabus?: string[];
  benefits?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface SiteConfig {
  siteName: string;
  heroTitle: string;
  heroSubtitle: string;
  adminPassword?: string; // Mật khẩu quản trị
  aboutContent: string;
  aboutImage: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    facebook: string;
    youtube: string;
    zalo: string;
    tiktok: string;
  };
  products: Product[];
  courses: Course[];
  blogPosts: BlogPost[];
}

export enum UserRole {
  GUEST = 'guest',
  ADMIN = 'admin'
}
