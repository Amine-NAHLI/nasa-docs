export interface DocNavItem {
  title: string;
  href: string;
  description?: string;
  isImplemented: boolean;
  badge?: string;
}

export interface DocNavGroup {
  id: string;
  orderNumber: string; // e.g. "01", "02"
  title: string;
  items: DocNavItem[];
}

export interface SearchResultItem {
  id: string;
  title: string;
  section: string;
  href: string;
  snippet: string;
  keywords: string[];
}
