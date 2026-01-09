
import { SiteConfig } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  siteName: "DMP AI Dev",
  heroTitle: "Lập trình bằng Trực giác & AI",
  heroSubtitle: "Khám phá kỷ nguyên Vibe Coding. Xây dựng tương lai với hệ sinh thái AI hàng đầu.",
  adminPassword: "admin", // Default password
  aboutContent: "Chúng tôi là đội ngũ tiên phong trong việc kết hợp trí tuệ nhân tạo và sự sáng tạo con người. Với triết lý Vibe Coding, chúng tôi giúp mọi người tiếp cận công nghệ một cách tự nhiên và hiệu quả nhất.",
  aboutImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  contact: {
    phone: "0766771509",
    email: "dmpaidev@gmail.com",
    address: "06 Nguyễn Bính, Tp Huế, VN",
    facebook: "https://www.facebook.com/profile.php?id=61585771779201",
    youtube: "https://www.youtube.com/@ai.studio-dongminhphu",
    zalo: "https://zalo.me/0766771509",
    tiktok: ""
  },
  products: [
    {
      id: "1",
      name: "AI Content Generator Pro",
      description: "Tự động tạo nội dung đa nền tảng tối ưu SEO.",
      price: 1500000,
      salePrice: 990000,
      image: "https://picsum.photos/seed/ai-content/800/600",
      images: ["https://picsum.photos/seed/ai-content/800/600", "https://picsum.photos/seed/ai-1/800/600", "https://picsum.photos/seed/ai-2/800/600"],
      category: "SaaS",
      downloadLink: "#",
      features: ["Đa ngôn ngữ", "Hỗ trợ GPT-4", "Xuất bản trực tiếp"]
    },
    {
      id: "2",
      name: "Smart Code Assistant",
      description: "Plugin hỗ trợ viết mã chuyên nghiệp cho VS Code.",
      price: 500000,
      image: "https://picsum.photos/seed/code-ass/800/600",
      images: ["https://picsum.photos/seed/code-ass/800/600"],
      category: "Tools",
      downloadLink: "#",
      features: ["Refactor tự động", "Giải thích code", "Unit test generator"]
    }
  ],
  courses: [
    {
      id: "c1",
      title: "Vibe Coding cho người mới bắt đầu",
      description: "Lập trình không cần quá nhiều cú pháp, tập trung vào tư duy logic và Prompt Engineering.",
      price: 2000000,
      instructor: "Minh Phú",
      duration: "4 tuần",
      lessons: 12,
      image: "https://picsum.photos/seed/course1/800/600"
    }
  ],
  blogPosts: [
    {
      id: "b1",
      title: "Vibe Coding là gì?",
      excerpt: "Xu hướng lập trình mới dựa trên sự hỗ trợ của AI đang thay đổi thế giới.",
      content: "Nội dung chi tiết về Vibe Coding...",
      author: "Admin",
      date: "2024-03-20",
      image: "https://picsum.photos/seed/blog1/800/600",
      tags: ["AI", "Coding", "Trends"]
    }
  ]
};

export const COLORS = {
  primary: "#38bdf8", // Neon Blue
  secondary: "#a855f7", // Cyber Purple
  accent: "#10b981", // Emerald Green
  background: "#020617",
  surface: "#0f172a",
};
