// dexent/components/home/PricingTiers.tsx
// Server component. Pricing from constants (never drifts). New-MC card highlighted.

import Link from "next/link";
import { PRICING } from "@/lib/constants";

export default function PricingTiers() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="mb-1 text-[12px] font-semibold uppercase tracking-wider text-steel">
        Transparent pricing
      </h2>
      <p className="mb-6 text-[13px] text-steel/80">
        One number, quotable anywhere. No hidden fees, no contracts.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* New MC highlight */}
        <div className="relative rounded-xl border-2 border-accent bg-accent-50 p-5">
          <span className="absolute -top-2.5 left-4 rounded bg-accent px-2 py-0.5 text-[10px] font-semibold text-white">
            {PRICING.newMc.name.toUpperCase()}
          </span>
          <div className="mt-1.5 text-2xl font-semibold font-[family-name:var(--font-display)]">
            ${PRICING.newMc.monthly}
            <span className="text-[13px] font-normal text-steel">
              /mo + {PRICING.newMc.percent}%
            </span>
          </div>
          <p className="mt-2 text-[12px] leading-relaxed text-steel">
            {PRICING.newMc.window}. {PRICING.newMc.note}
          </p>
        </div>

        {/* Standard tiers */}
        {PRICING.tiers.map((t) => (
          <div key={t.name} className="rounded-xl border border-line bg-white p-5">
            <div className="text-2xl font-semibold font-[family-name:var(--font-display)]">
              {t.percent}%
            </div>
            <div className="mt-2 text-[13px] font-medium text-ink">{t.name}</div>
            <p className="mt-0.5 text-[12px] text-steel">{t.trucks}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-600">
          See full pricing details
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </section>
  );
}