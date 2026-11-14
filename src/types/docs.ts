export interface DocNavItem {
  title: string;
  href: string;
  description?: string;
  isImplemented: boolean;
  badge?: "Phase 1" | "Coming Soon" | "Experimental";
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
