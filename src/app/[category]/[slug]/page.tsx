import { getContentBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { category, slug } = await params;

  const { frontmatter } = getContentBySlug(category, slug);

  const Content = await import(`@/content/${category}/${slug}.mdx`);

  console.log(frontmatter);

  if (!Content) {
    notFound();
  }

  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
        {frontmatter.description && (
          <p className="text-xl text-muted-foreground">
            {frontmatter.description}
          </p>
        )}
      </div>
      <Content.default />
    </article>
  );
}
