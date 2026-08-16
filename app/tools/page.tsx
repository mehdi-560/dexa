// dexent/app/tools/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Trucking Tools & Calculators for Owner-Operators",
  description:
    "Free calculators for owner-operators — cost-per-mile, freight rate, and more. Quick, no signup. Built by Dexent Dispatch.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Trucking Calculators | Dexent",
    description: "Cost-per-mile and rate tools for owner-operators.",
    url: `${SITE.domain}/tools`,
  },
};

const TOOLS = [
  {
    slug: "cost-per-mile",
    name: "Cost-Per-Mile Calculator",
    blurb: "Know your true operating cost per mile so you never take a load that loses money.",
    ready: true,
  },
  {
    slug: "freight-rate",
    name: "Freight Rate Calculator",
    blurb: "Estimate what a lane should pay based on miles and target rate.",
    ready: false,
  },
  {
    slug: "fuel-cost",
    name: "Fuel Cost Calculator",
    blurb: "Project fuel spend for a trip from distance, MPG, and diesel price.",
    ready: false,
  },
];

export default function ToolsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Free Trucking Tools",
          url: `${SITE.domain}/tools`,
        }}
      />

      <section className="mx-auto max-w-3xl px-5 pt-14 pb-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl font-[family-name:var(--font-display)]">
          Free trucking tools
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-steel">
          Quick calculators for owner-operators. No signup, no catch — just the
          numbers you need to run profitable.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) =>
            t.ready ? (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="group rounded-xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand"
              >
                <h2 className="text-[15px] font-semibold text-ink">{t.name}</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-steel">{t.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-brand">
                  Open tool
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ) : (
              <div key={t.slug} className="rounded-xl border border-dashed border-line bg-paper-2 p-6 opacity-70">
                <h2 className="text-[15px] font-semibold text-ink">{t.name}</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-steel">{t.blurb}</p>
                <span className="mt-4 inline-block text-[12px] font-medium text-steel">Coming soon</span>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}