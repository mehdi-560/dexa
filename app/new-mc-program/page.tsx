// dexent/app/new-mc-program/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { PRICING, SITE, CONTACT } from "@/lib/constants";
import { NEW_MC_FAQS } from "@/content/new-mc-faqs";

export const metadata: Metadata = {
  title: "Dispatch for New MC Authorities — $100/mo + 8% for Your First 3 Months",
  description:
    "New to trucking? Dexent's New Authority Start program dispatches brand-new MC authorities: $100/month + 8% per load for your first 3 months, then just 8% — the monthly fee drops off. No contracts.",
  alternates: { canonical: "/new-mc-program" },
  openGraph: {
    title: "New MC Authority Dispatch | Dexent",
    description:
      "Dispatch built for new owner-operators. $100/mo + 8% for 3 months, then the fee drops off.",
    url: `${SITE.domain}/new-mc-program`,
  },
};

const STEPS = [
  {
    n: "1",
    title: "Get set up",
    body: "Send us your authority and insurance details. We build your carrier packet and broker setups so you're ready to book.",
  },
  {
    n: "2",
    title: "Start booking at $100/mo + 8%",
    body: "For your first 3 months you pay a flat $100/month plus 8% per load while you find your feet and build volume.",
  },
  {
    n: "3",
    title: "Graduate — the fee drops off",
    body: "After 3 months the $100/month disappears automatically. You continue at the standard 8% with no monthly fee.",
  },
];

export default function NewMcProgramPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "New MC Authority Dispatch — New Authority Start",
          description:
            "Dispatch program for MC authorities aged 0–3 months: $100/month + 8% per load, then 8% with no monthly fee.",
          url: `${SITE.domain}/new-mc-program`,
        })}
      />
      <JsonLd data={faqSchema(NEW_MC_FAQS.map((f) => ({ q: f.q, a: f.a })))} />

      {/* ── Hero ── */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-50 px-3 py-1.5 text-[11px] font-medium text-accent-600">
              {PRICING.newMc.name} · MC 0–3 months
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl font-[family-name:var(--font-display)]">
              Just got your authority? We'll get you loaded.
            </h1>
            {/* Answer-first */}
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-steel">
              Many dispatchers won't touch a brand-new MC. Dexent will. For your
              first 3 months you pay{" "}
              <strong className="text-ink">$100/month + 8% per load</strong> while
              you get established — then the{" "}
              <strong className="text-ink">$100 drops off automatically</strong>{" "}
              and you continue at just 8%. No contracts, no setup fees.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600">
                Call {CONTACT.phoneDisplay}
              </a>
              <a href={CONTACT.smsHref} className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand">
                Text a dispatcher
              </a>
            </div>
          </div>

          {/* Image slot — degrades gracefully if not present */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-paper-2">
            <Image
              src="/images/team/new-authority.jpg"
              alt="New owner-operator standing beside their first semi-truck"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── The graduation highlight ── */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-10">
          <div className="rounded-2xl border-2 border-brand bg-brand-50 p-6 text-center sm:p-8">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-brand">
              The best part
            </div>
            <p className="mx-auto mt-3 max-w-xl text-[17px] leading-relaxed text-ink">
              At month 3, your price goes{" "}
              <strong>down</strong>, not up. The $100/month simply disappears —
              your reward for getting established with us.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ── How it works ── */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            How the New Authority Start works
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl border border-line bg-white p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-[15px] font-semibold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-steel">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── FAQ ── */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-12">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            New authority questions
          </h2>
          <div className="divide-y divide-line rounded-xl border border-line bg-white">
            {NEW_MC_FAQS.map((f) => (
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
        </section>
      </Reveal>

      <FinalCTA />
    </>
  );
}
