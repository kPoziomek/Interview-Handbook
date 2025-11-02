import createMiddleware from "next-intl/middleware";
import { pathnames, locales } from "./i18n/config";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix: "always",
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set up the middleware to handle all locales
    "/(pl|en)/:path*",

    // Process all files in the public folder
    "/((?!api|_next|.*\\..*).*)",
  ],
};
