'use client';

import { useLocaleSelector } from 'gt-next/client';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const switchLanguage = (locale: string) => {
    setLocale(locale);
  };
  const { locale, locales, setLocale, getLocaleProperties } =
    useLocaleSelector();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((loc) => {
          const props = getLocaleProperties(loc);
          return (
            <DropdownMenuCheckboxItem
              checked={locale === props.code}
              key={loc}
              onClick={() => switchLanguage(loc)}
            >
              {loc.toUpperCase()}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
