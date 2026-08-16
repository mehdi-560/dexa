// dexent/app/tools/cost-per-mile/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import CostPerMileCalculator from "@/components/tools/CostPerMileCalculator";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cost-Per-Mile Calculator for Owner-Operators — Free",
  description:
    "Free cost-per-mile calculator for truckers. Enter your fixed costs, variable costs, pay, and miles to find your true break-even rate. No signup.",
  alternates: { canonical: "/tools/cost-per-mile" },
  openGraph: {
    title: "Cost-Per-Mile Calculator | Dexent",
    description: "Find your true break-even rate per mile.",
    url: `${SITE.domain}/tools/cost-per-mile`,
  },
};

export default function CostPerMilePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Cost-Per-Mile Calculator",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: `${SITE.domain}/tools/cost-per-mile`,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />

      <section className="mx-auto max-w-3xl px-5 pt-14 pb-8">
        <Link href="/tools" className="text-[13px] font-medium text-brand hover:text-brand-600">
          ← All tools
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl font-[family-name:var(--font-display)]">
          Cost-Per-Mile Calculator
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-steel">
          Your cost per mile is the most important number you own. It's the floor
          below which a load loses you money. Enter your monthly costs and miles
          to find it.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-10">
        <CostPerMileCalculator />
      </section>

      <section className="mx-auto max-w-3xl px-5 py-10">
        <div className="dx-prose">
          <h2>How to use your cost per mile</h2>
          <p>
            Add up everything it costs to run your truck in a month — fixed costs
            like your truck note and insurance, variable costs like fuel and
            maintenance, and the pay you take for yourself. Divide by the miles
            you drive, and you have your break-even rate.
          </p>
          <p>
            Any load paying below that number costs you money to haul. Any load
            above it is profit. A good dispatcher's job is to keep you booked
            well above your cost per mile — which is exactly what we do.
          </p>
        </div>
      </section>
    </>
  );
}