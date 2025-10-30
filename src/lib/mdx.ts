import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Frontmatter = {
  title: string;
  description?: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  order: number;
};

const contentDirectory = path.join(process.cwd(), "src/content/en/");

export function getAllContentSlugs(category: string) {
  const files = fs.readdirSync(path.join(contentDirectory, category));

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getContentBySlug(
  locale: string,
  category: string,
  slug: string
) {
  const contentDirectory = path.join(process.cwd(), `src/content/${locale}/`);

  const fullPath = path.join(contentDirectory, category, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as Frontmatter,
    content,
    slug,
  };
}

export function getAllContent(locale: string, category: string) {
  const slugs = getAllContentSlugs(category);
  const content = slugs
    .map((slug) => getContentBySlug(locale, category, slug))
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);

  return content;
}
