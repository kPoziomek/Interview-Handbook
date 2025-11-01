"use client";

import { sidebarNavigation } from "@/constants/sidebarNavigation";
import type { NavItem } from "@/types/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export function SidebarNav() {
  const t = useTranslations();
  const pathname = usePathname();
  const [, lng, category, subcategory] = pathname.split("/");
  const nav = sidebarNavigation[category];

  if (!nav) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          {t(nav.titleKey)} Interview Handbook
        </h2>
      </div>
      <div className="flex-1">
        <div>
          <h3 className="mb-1 px-2 text-sm font-medium text-muted-foreground">
            {t(nav.titleKey)} - Spis treści
          </h3>
          <div className="space-y-1 pr-2 ">
            {nav.items.map((item: NavItem) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start font-normal"
                asChild
              >
                <Link
                  className={item.isDone ? "line-through" : undefined}
                  href={item.href}
                >
                  {t(item.titleKey)}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
