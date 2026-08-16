// dexent/app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { PRICING, SITE, CONTACT } from "@/lib/constants";
import { PRICING_FAQS } from "@/content/pricing-faqs";

export const metadata: Metadata = {
  title: "Truck Dispatch Pricing — Transparent 6–8% Per Load, No Contracts",
  description:
    "Dexent dispatch pricing: 8% for owner-operators (1–5 trucks), 7% for 6–10 trucks, 6% for 10+ trucks. New MC authorities pay $100/mo + 8% for 3 months. No setup fees, no contracts.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Truck Dispatch Pricing | Dexent",
    description:
      "Transparent per-load dispatch pricing for owner-operators and fleets. No contracts, no hidden fees.",
    url: `${SITE.domain}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Truck Dispatch Service Pricing",
          description: PRICING.headline,
          url: `${SITE.domain}/pricing`,
        })}
      />
      <JsonLd data={faqSchema(PRICING_FAQS.map((f) => ({ q: f.q, a: f.a })))} />

      {/* ── Hero / answer-first ── */}
      <section className="mx-auto max-w-3xl px-5 pt-14 pb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-50 px-3 py-1.5 text-[11px] font-medium text-brand">
          Transparent pricing · No contracts
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl font-[family-name:var(--font-display)]">
          How much does a dispatcher cost?
        </h1>
        {/* Answer-first paragraph — the block LLMs quote */}
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-steel">
          Most truck dispatchers charge 5–10% of each load. Dexent charges{" "}
          <strong className="text-ink">8% per load for owner-operators</strong>{" "}
          (1–5 trucks), 7% for 6–10 trucks, and 6% for fleets of 10+. New MC
          authorities pay <strong className="text-ink">$100/month + 8%</strong>{" "}
          for their first 3 months, then just 8% with no monthly fee. No setup
          fees, no contracts, no hidden costs.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600">
            Call {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.smsHref} className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand">
            Text a dispatcher
          </a>
        </div>
      </section>

      {/* ── Tier cards ── */}
      <Reveal>
        <section className="mx-auto max-w-6xl px-5 py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative rounded-xl border-2 border-accent bg-accent-50 p-6">
              <span className="absolute -top-2.5 left-4 rounded bg-accent px-2 py-0.5 text-[10px] font-semibold text-white">
                {PRICING.newMc.name.toUpperCase()}
              </span>
              <div className="mt-1.5 text-3xl font-semibold font-[family-name:var(--font-display)]">
                ${PRICING.newMc.monthly}
                <span className="text-sm font-normal text-steel">/mo + {PRICING.newMc.percent}%</span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-steel">
                {PRICING.newMc.window}. {PRICING.newMc.note}
              </p>
            </div>

            {PRICING.tiers.map((t) => (
              <div key={t.name} className="rounded-xl border border-line bg-white p-6">
                <div className="text-3xl font-semibold font-[family-name:var(--font-display)]">
                  {t.percent}%
                </div>
                <div className="mt-2 text-sm font-medium text-ink">{t.name}</div>
                <p className="mt-0.5 text-[13px] text-steel">{t.trucks}</p>
                <p className="mt-3 text-[12px] leading-relaxed text-steel">
                  Per load. No monthly fee, no contract.
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Why 8% / net revenue argument ── */}
      <Reveal>
        <section className="bg-paper-2 py-14">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-center text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
              Why our fee is worth more than a cheaper one
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-steel">
              The fee is not the cost — the loads you run are. A dispatcher who
              charges less but books cheap freight can leave you with less money
              than one who charges more and negotiates better rates.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-white p-6">
                <div className="text-[12px] font-semibold uppercase tracking-wider text-steel">
                  A cheaper dispatcher
                </div>
                <div className="mt-3 text-2xl font-semibold text-ink font-[family-name:var(--font-display)]">
                  $1.90<span className="text-sm font-normal text-steel">/mi to you</span>
                </div>
                <p className="mt-2 text-[13px] text-steel">5% fee on a $2.00/mi load</p>
              </div>
              <div className="rounded-xl border-2 border-brand bg-brand-50 p-6">
                <div className="text-[12px] font-semibold uppercase tracking-wider text-brand">
                  Dexent at 8%
                </div>
                <div className="mt-3 text-2xl font-semibold text-brand font-[family-name:var(--font-display)]">
                  $2.58<span className="text-sm font-normal text-steel">/mi to you</span>
                </div>
                <p className="mt-2 text-[13px] text-steel">8% fee on a $2.80/mi load</p>
              </div>
            </div>
            <p className="mt-4 text-center text-[12px] text-steel/80">
              Illustrative example. Actual rates depend on lane, equipment, and market conditions.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ── What the fee includes ── */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            What your dispatch fee includes
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Load sourcing and rate negotiation",
              "Booking and rate confirmations",
              "Broker setup and packet paperwork",
              "Credit and broker vetting",
              "Ongoing dispatch support",
              "No setup fees or hidden add-ons",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 rounded-lg border border-line bg-white p-3.5 text-[14px] text-ink">
                <svg className="mt-0.5 shrink-0 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* ── FAQ ── */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            Pricing questions
          </h2>
          <div className="divide-y divide-line rounded-xl border border-line bg-white">
            {PRICING_FAQS.map((f) => (
              <details key={f.q} className="group px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[14px] font-medium text-ink">
                  {f.q}
                  <svg className="shrink-0 transition-transform group-open:rotate-45" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="pb-4 text-[13px] leading-relaxed text-steel">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-6 text-center text-[13px] text-steel">
            Not sure which tier fits?{" "}
            <Link href="/new-mc-program" className="font-semibold text-brand hover:text-brand-600">
              See the New Authority program
            </Link>{" "}
            or just call and we'll walk you through it.
          </p>
        </section>
      </Reveal>

      <FinalCTA />
    </>
  );
}