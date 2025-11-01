export type TocItem = {
  id: number;
  title: string;
  isDone: boolean;
  href: string;
};
export type NavItem = {
  titleKey: string;
  href: string;
  isDone?: boolean;
  items?: NavItem[];
};

export type NavSection = {
  path?: string;
  titleKey: string;
  items: NavItem[];
};
