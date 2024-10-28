import Link from 'next/link';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from '../theme/theme-toggle';

export function MainNav() {
  return (
    <div className="flex h-16 items-center border-b px-4">
      <MobileNav />
      <div className="flex items-center gap-6">
        <ThemeToggle/>
        <Link href="/" className="hidden items-center space-x-2 lg:flex">
          <span className="font-bold">React Interview Handbook</span>
        </Link>
      </div>
    </div>
  );
}
