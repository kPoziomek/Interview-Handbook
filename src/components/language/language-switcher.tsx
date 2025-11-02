"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/i18n/config";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split("/")[1];
  const switchLanguage = (locale: string) => {
    const newPathname = pathname.split("/").slice(2).join("/");
    router.push(`/${locale}/${newPathname}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuCheckboxItem
            checked={locale === currentLocale}
            key={locale}
            onClick={() => switchLanguage(locale)}
          >
            {locale.toUpperCase()}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
