// dexent/app/reviews/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { SITE } from "@/lib/constants";
import { REVIEWS, REVIEWS_ARE_REAL } from "@/content/reviews";

export const metadata: Metadata = {
  title: "Dexent Reviews — What Owner-Operators Say About Our Dispatch",
  description:
    "Read what carriers say about dispatching with Dexent — higher net-per-mile, straight answers, no contracts. Reviews from owner-operators running reefer, dry van, and flatbed.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Dexent Dispatch Reviews",
    description: "What owner-operators say about dispatching with Dexent.",
    url: `${SITE.domain}/reviews`,
  },
};

export default function ReviewsPage() {
  // Only emit rating schema when reviews are real (avoids Google penalty).
  const avg =
    REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length;

  return (
    <>
      {REVIEWS_ARE_REAL && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            url: SITE.domain,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: avg.toFixed(1),
              reviewCount: REVIEWS.length,
            },
          }}
        />
      )}

      <section className="mx-auto max-w-3xl px-5 pt-14 pb-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl font-[family-name:var(--font-display)]">
          What carriers say
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-steel">
          Real owner-operators, real loads. Here's what dispatching with Dexent
          looks like from the driver's seat.
        </p>
      </section>

      <Reveal>
        <section className="mx-auto max-w-6xl px-5 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="rounded-xl border border-line bg-white p-6">
                <div className="mb-3 flex gap-0.5 text-accent" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="text-[14px] leading-relaxed text-ink">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-paper-2">
                    <Image src={r.image} alt={`${r.name}, ${r.detail}`} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-ink">{r.name}</div>
                    <div className="text-[11px] text-steel">{r.detail}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {!REVIEWS_ARE_REAL && (
            <p className="mt-8 text-center text-[12px] text-steel/70">
              {/* Internal note visible until real reviews are added */}
              Sample carrier feedback shown. Verified reviews coming soon.
            </p>
          )}
        </section>
      </Reveal>

      <FinalCTA />
    </>
  );
}