
import { SiteConfig } from './types';
import { INITIAL_CONFIG } from './constants';

const DB_KEY = 'dmp_site_config_v1';

export const db = {
  get: (): SiteConfig => {
    const saved = localStorage.getItem(DB_KEY);
    if (!saved) {
      localStorage.setItem(DB_KEY, JSON.stringify(INITIAL_CONFIG));
      return INITIAL_CONFIG;
    }
    try {
      return JSON.parse(saved);
    } catch (e) {
      return INITIAL_CONFIG;
    }
  },
  save: (config: SiteConfig): void => {
    localStorage.setItem(DB_KEY, JSON.stringify(config));
  },
  reset: (): void => {
    localStorage.removeItem(DB_KEY);
  },
  // Xuất dữ liệu ra tệp JSON
  exportData: () => {
    const data = db.get();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dmp-database-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },
  // Nhập dữ liệu từ tệp JSON
  importData: (jsonString: string): boolean => {
    try {
      const data = JSON.parse(jsonString);
      // Kiểm tra cấu trúc cơ bản
      if (data.siteName && data.products && data.courses) {
        db.save(data);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
};
