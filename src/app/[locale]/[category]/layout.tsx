import { SidebarNav } from "@/components/layout/sidebar-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";

export default function JSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 items-start lg:grid lg:grid-cols-[280px_1fr] lg:gap-6">
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r lg:sticky lg:block">
          <ScrollArea className="h-full py-6">
            {/* Tu możesz podmienić na dedykowaną nawigację JS */}
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
  );
}
