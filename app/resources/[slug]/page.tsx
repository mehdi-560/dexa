// dexent/app/resources/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import JsonLd from "@/components/seo/JsonLd";
import FinalCTA from "@/components/home/FinalCTA";
import { SITE } from "@/lib/constants";
import { getAllPostSlugs, getPostContent } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: `/resources/${slug}` },
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description,
      url: `${SITE.domain}/resources/${slug}`,
      images: post.meta.image ? [post.meta.image] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) notFound();

  const { meta, body } = post;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: meta.title,
          description: meta.description,
          datePublished: meta.date,
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name },
          mainEntityOfPage: `${SITE.domain}/resources/${slug}`,
          image: meta.image ? `${SITE.domain}${meta.image}` : undefined,
        }}
      />

      <article className="mx-auto max-w-3xl px-5 pt-14 pb-10">
        <Link href="/resources" className="text-[13px] font-medium text-brand hover:text-brand-600">
          ← All resources
        </Link>

        {meta.category && (
          <div className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-brand">
            {meta.category}
          </div>
        )}
        <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl font-[family-name:var(--font-display)]">
          {meta.title}
        </h1>
        {meta.date && (
          <div className="mt-3 text-[13px] text-steel">
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        )}

        {meta.image && (
          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-paper-2">
            <Image src={meta.image} alt={meta.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>
        )}

        {/* MDX body — prose styles applied via the wrapper */}
        <div className="dx-prose mt-8">
          <MDXRemote source={body} />
        </div>
      </article>

      <FinalCTA />
    </>
  );
}