"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs() {
  const pathname = usePathname();

  const generateBreadcrumbs = (): Crumb[] => {
    const asPathWithoutQuery = pathname.split("?")[0];
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    const crumbList = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      return {
        href,
        label: formatLabel(subpath),
      };
    });

    return [{ href: "/", label: "Home" }, ...crumbList];
  };

  const formatLabel = (text: string): string => {
    // Convert kebab-case to Title Case
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav
      aria-label="Breadcrumbs"
      className="flex items-center space-x-1 text-sm text-muted-foreground pb-4"
    >
      {breadcrumbs.map((crumb, idx) => {
        const isLastItem = idx === breadcrumbs.length - 1;

        return (
          <div key={crumb.href} className="flex items-center">
            {idx === 0 ? (
              // Home icon for first item
              <Link
                href={crumb.href}
                className="flex items-center hover:text-foreground transition-colors"
              >
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </Link>
            ) : (
              // Regular breadcrumb item
              <Link
                href={crumb.href}
                className={`hover:text-foreground transition-colors ${
                  isLastItem ? "text-foreground font-medium" : ""
                }`}
              >
                {crumb.label}
              </Link>
            )}

            {!isLastItem && <ChevronRight className="h-4 w-4 mx-1" />}
          </div>
        );
      })}
    </nav>
  );
}
