import { getContentBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
// Dynamic SEO metadata based on frontmatter
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug, locale } = await params;
  const { frontmatter } = getContentBySlug(locale, category, slug);
  return {
    title: frontmatter?.title || 'Interview Handbook',
    description: frontmatter?.description || '',
    openGraph: {
      title: frontmatter?.title || 'Interview Handbook',
      description: frontmatter?.description || '',
    },
  };
}

interface PageProps {
  params: {
    category: string;
    slug: string;
    locale: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { category, slug, locale } = await params;

  const Content = await import(`@/content/${locale}/${category}/${slug}.mdx`);

  if (!Content) {
    notFound();
  }

  return (
    <article className="prose prose-gray dark:prose-invert flex flex-col gap-4">
      <Content.default />
    </article>
  );
}
export function generateStaticParams() {
  return [{ slug: 'welcome' }, { slug: 'about' }];
}

export const dynamicParams = false;
