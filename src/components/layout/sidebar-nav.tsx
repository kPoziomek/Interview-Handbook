import Link from 'next/link';
import { Button } from '@/components/ui/button';

type NavItem = {
  title: string;
  href: string;
  items?: NavItem[];
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navigation: NavSection[] = [
  {
    title: 'Basics',
    items: [
      { title: 'Introduction to React', href: '/basics/introduction' },
      { title: 'Components & Props', href: '/basics/components' },
      {
        title: 'State & Lifecycle',
        href: '/basics/state',
        items: [
          { title: 'State', href: '/basics/state' },
          { title: 'Lifecycle', href: '/basics/lifecycle' },
        ],
      },
    ],
  },
  {
    title: 'Advanced',
    items: [
      { title: 'Design Patterns', href: '/advanced/patterns' },
      { title: 'Performance', href: '/advanced/performance' },
      { title: 'State Management', href: '/advanced/state-management' },
    ],
  },
];

export function SidebarNav() {
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
