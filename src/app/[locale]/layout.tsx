import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { MainNav } from '@/components/layout/main-nav';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex h-full flex-col">
              <MainNav />
              <main className="flex-1 mx-auto w-full pl-4">
                <div>{children}</div>
              </main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
