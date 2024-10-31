import { getContentBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
    slug: string;
    locale: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { category, slug, locale } = await params;

  const { frontmatter } = getContentBySlug(locale, category, slug);

  const Content = await import(`@/content/${locale}/${category}/${slug}.mdx`);

  if (!Content) {
    notFound();
  }

  return (
    <article className="prose prose-gray dark:prose-invert max-w-none flex flex-col gap-4">
      {Object.keys(frontmatter).length > 0 ? (
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-xs  text-muted-foreground">
              Description: {frontmatter.description}
            </p>
          )}
          {frontmatter.category && (
            <p className="text-xs text-muted-foreground">
              Cateegory {frontmatter.category}
            </p>
          )}
        </div>
      ) : (
        <Content.default />
      )}
    </article>
  );
}
