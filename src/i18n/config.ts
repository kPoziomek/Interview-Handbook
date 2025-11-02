export const locales = ["en", "pl"] as const;

export const pathnames = {
  "/": "/",
  "/basics": {
    en: "/basics",
    pl: "/podstawy",
  },
  "/advanced": {
    en: "/advanced",
    pl: "/zaawansowane",
  },
} as const;
