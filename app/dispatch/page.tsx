// dexent/app/dispatch/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { serviceSchema } from "@/lib/schema";
import { canonical } from "@/lib/seo";
import { EQUIPMENT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Truck Dispatch Services — Power Only, Dry Van, Reefer, Flatbed",
  description:
    "Dexent dispatches owner-operators and small fleets nationwide across Power Only, Dry Van, Reefer, and Flatbed. Higher net-per-mile, transparent pricing, no contracts.",
  alternates: { canonical: "/dispatch" },
  openGraph: {
    title: "Truck Dispatch Services | Dexent",
    description: "Power Only, Dry Van, Reefer & Flatbed dispatch nationwide.",
    url: canonical("/dispatch"),
  },
};

export default function DispatchHubPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Truck Dispatch Services",
          description: SITE.description,
          url: canonical("/dispatch"),
        })}
      />

      <section className="mx-auto max-w-3xl px-5 pt-14 pb-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl font-[family-name:var(--font-display)]">
          Truck dispatch services
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-steel">
          We dispatch owner-operators and small fleets across four equipment
          types, nationwide. Pick your equipment to see how we keep it moving —
          and what it pays.
        </p>
      </section>

      <Reveal>
        <section className="mx-auto max-w-6xl px-5 py-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {EQUIPMENT.map((e) => (
              <Link
                key={e.slug}
                href={`/dispatch/${e.slug}`}
                className="group flex gap-4 overflow-hidden rounded-xl border border-line bg-white p-4 transition hover:-translate-y-1 hover:border-brand"
              >
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg bg-paper-2">
                  <Image
                    src={e.image}
                    alt={`${e.name} dispatch`}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="128px"
                  />
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold text-ink">{e.name} Dispatch</h2>
                  <p className="mt-1 text-[13px] leading-relaxed text-steel">{e.blurb}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-brand">
                    Learn more
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <FinalCTA />
    </>
  );
}
