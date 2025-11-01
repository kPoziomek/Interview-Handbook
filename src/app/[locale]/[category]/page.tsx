import { notFound } from "next/navigation";
interface PageProps {
  params: {
    category: string;
    slug: string;
    locale: string;
  };
}
export default async function Page({ params }: PageProps) {
  const { category, locale } = await params;

  const Content = await import(`@/content/${locale}/${category}.mdx`);

  if (!Content) {
    notFound();
  }

  return (
    <>
      <article className="prose prose-gray dark:prose-invert flex flex-col gap-4">
        <Content.default />
      </article>
    </>
  );
}
