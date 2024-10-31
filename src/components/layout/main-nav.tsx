'use client';
import Link from 'next/link';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from '../theme/theme-toggle';
import { useTranslations } from 'use-intl';
import { LanguageSwitcher } from '@/components/language/language-switcher';

export function MainNav() {
  const t = useTranslations();
  return (
    <div className="flex h-16 items-center border-b px-4">
      <MobileNav />
      <div className="flex items-center justify-between w-full gap-6">
        <div>
          <ThemeToggle />
          <Link href="/" className="hidden items-center space-x-2 lg:flex">
            <span className="font-bold">{t('homePage.title')}</span>
          </Link>
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
