import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { MainNav } from '@/components/layout/main-nav';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { GTProvider } from 'gt-next';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Interview Handbook',
  description: 'Comprehensive guide to React interview preparation',
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} h-full`}>
        <GTProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex h-full flex-col">
                <MainNav />
                <div className="flex-1 items-start lg:grid lg:grid-cols-[280px_1fr] lg:gap-6">
                  <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r lg:sticky lg:block">
                    <ScrollArea className="h-full py-6">
                      <SidebarNav />
                    </ScrollArea>
                  </aside>
                  <main className="flex-1">
                    <div className="container max-w-3xl py-6 lg:py-10">
                      <Breadcrumbs />
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            </ThemeProvider>
          </NextIntlClientProvider>
        </GTProvider>
      </body>
    </html>
  );
}
