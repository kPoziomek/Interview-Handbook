export type Locale = "en" | "pl";

export interface LocalizedContent {
  title: string;
  description: string;
  locale: Locale;
  slug: string;
  category: string;
}
