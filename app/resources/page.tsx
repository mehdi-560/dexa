// dexent/app/resources/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Dispatch Resources & Guides for Owner-Operators",
  description:
    "Guides, rate insights, and how-tos for owner-operators and new MC authorities — dispatch pricing, broker vetting, rates by equipment, and more from Dexent.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Dexent Resources & Guides",
    description: "Guides and how-tos for owner-operators and new carriers.",
    url: `${SITE.domain}/resources`,
  },
};

export default function ResourcesPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Dexent Resources & Guides",
          url: `${SITE.domain}/resources`,
        }}
      />

      <section className="mx-auto max-w-3xl px-5 pt-14 pb-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl font-[family-name:var(--font-display)]">
          Resources &amp; guides
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-steel">
          Straight answers for owner-operators and new authorities — pricing,
          rates, broker vetting, and how dispatch actually works.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        {posts.length === 0 ? (
          <p className="rounded-xl border border-line bg-white p-8 text-center text-[14px] text-steel">
            Guides are on the way. Add <code>.mdx</code> files to{" "}
            <code>content/blog/</code> and they'll appear here automatically.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/resources/${p.slug}`}
                className="group overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-1 hover:border-brand"
              >
                {p.image && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-paper-2">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-5">
                  {p.category && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                      {p.category}
                    </span>
                  )}
                  <h2 className="mt-1.5 text-[16px] font-semibold leading-snug text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-steel">
                    {p.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}