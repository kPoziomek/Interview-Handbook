'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'use-intl';

type NavItem = {
  title: string;
  href: string;
  items?: NavItem[];
};

type NavSection = {
  title: string;
  items: NavItem[];
};

export function SidebarNav() {
  const t = useTranslations();

  const navigation: NavSection[] = [
    {
      title: t('navigation.basics'),
      items: [
        {
          title: t('content.basics.what-is-react.title'),
          href: '/core-react/what-is-react',
        },
        {
          title: t('content.basics.history-of-react.title'),
          href: '/core-react/history-of-react',
        },
        {
          title: t('content.basics.react-major-features.title'),
          href: '/core-react/react-major-features',
        },
        {
          title: t('content.basics.what-is-jsx.title'),
          href: '/core-react/what-is-jsx',
        },
      ],
    },
    {
      title: t('navigation.advanced'),
      items: [],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="px-4 py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          React Interview Handbook
        </h2>
      </div>
      <div className="flex-1">
        {navigation.map((section, index) => (
          <div key={section.title} className={index !== 0 ? 'mt-4' : undefined}>
            <h3 className="mb-1 px-6 text-sm font-medium text-muted-foreground">
              {section.title}
            </h3>
            <div className="space-y-1 px-2">
              {section?.items.map((item, index) => {
                if (item.items) {
                  return (
                    <div key={index}>
                      <Button
                        key={item.href}
                        variant="ghost"
                        className="w-full justify-start font-normal"
                        asChild
                      >
                        <Link href={item.href}>{item.title}</Link>
                      </Button>
                      {item.items.length > 0 && (
                        <div className="pl-5">
                          {item.items?.map((item) => (
                            <Button
                              key={item.href}
                              variant="ghost"
                              className="w-full justify-start font-normal"
                              asChild
                            >
                              <Link href={item.href}>{item.title}</Link>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="w-full justify-start font-normal"
                    asChild
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
