// dexent/lib/blog.ts
// File-based MDX blog reader. Posts live in content/blog/*.mdx with frontmatter.
// No CMS, no DB — fast static pages. Requires: gray-matter (npm i gray-matter).

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  image?: string; // /images/blog/<slug>.png
  category?: string;
};

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostMeta(slug: string): PostMeta | null {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "Dexent",
    image: data.image ?? undefined,
    category: data.category ?? "Guide",
  };
}

export function getPostContent(slug: string): { meta: PostMeta; body: string } | null {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      author: data.author ?? "Dexent",
      image: data.image ?? undefined,
      category: data.category ?? "Guide",
    },
    body: content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((s) => getPostMeta(s))
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
