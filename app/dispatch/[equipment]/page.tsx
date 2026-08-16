// dexent/app/dispatch/[equipment]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { canonical } from "@/lib/seo";
import { EQUIPMENT, PRICING, CONTACT } from "@/lib/constants";
import { EQUIPMENT_DETAIL } from "@/content/equipment-detail";
import { STATES, LIVE_STATE_SLUGS } from "@/content/states";

export function generateStaticParams() {
  return EQUIPMENT.map((e) => ({ equipment: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ equipment: string }>;
}): Promise<Metadata> {
  const { equipment } = await params;
  const d = EQUIPMENT_DETAIL[equipment];
  if (!d) return {};
  return {
    title: `${d.name} Dispatch Service — Owner-Operators & Fleets`,
    description: d.intro.slice(0, 155),
    alternates: { canonical: `/dispatch/${equipment}` },
    openGraph: {
      title: `${d.name} Dispatch | Dexent`,
      description: d.intro.slice(0, 155),
      url: canonical(`/dispatch/${equipment}`),
    },
  };
}

export default async function EquipmentHubPage({
  params,
}: {
  params: Promise<{ equipment: string }>;
}) {
  const { equipment } = await params;
  const d = EQUIPMENT_DETAIL[equipment];
  const base = EQUIPMENT.find((e) => e.slug === equipment);
  if (!d || !base) notFound();

  const liveStates = LIVE_STATE_SLUGS.map((s) => STATES[s]);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${d.name} Dispatch Service`,
          description: d.intro,
          url: canonical(`/dispatch/${equipment}`),
        })}
      />
      <JsonLd data={faqSchema(d.faqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Dispatch", item: canonical("/dispatch") },
            { "@type": "ListItem", position: 2, name: `${d.name} Dispatch`, item: canonical(`/dispatch/${equipment}`) },
          ],
        }}
      />

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-4xl px-5 pt-8 text-[12px] text-steel" aria-label="Breadcrumb">
        <Link href="/dispatch" className="hover:text-brand">Dispatch</Link>
        <span className="mx-1.5">/</span>
        <span className="text-ink">{d.name}</span>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-5 pt-4 pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl font-[family-name:var(--font-display)]">
          {d.h1}
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-steel">{d.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600">
            Call {CONTACT.phoneDisplay}
          </a>
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand">
            See pricing
          </Link>
        </div>
      </section>

      {/* Image */}
      <Reveal>
        <section className="mx-auto max-w-4xl px-5 pb-10">
          <div className="relative aspect-[3/1] overflow-hidden rounded-2xl border border-line bg-paper-2">
            <Image src={base.image} alt={`${d.name} freight dispatched by Dexent`} fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
          </div>
        </section>
      </Reveal>

      {/* What we haul */}
      <Reveal>
        <section className="mx-auto max-w-4xl px-5 py-8">
          <h2 className="text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            What we haul on {d.name.toLowerCase()}
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {d.whatWeHaul.map((item) => (
              <li key={item} className="flex items-start gap-2.5 rounded-lg border border-line bg-white p-3.5 text-[14px] text-ink">
                <svg className="mt-0.5 shrink-0 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Why Dexent + rate context */}
      <Reveal>
        <section className="mx-auto max-w-4xl px-5 py-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-6">
              <h2 className="text-[16px] font-semibold text-ink">Why dispatch {d.name.toLowerCase()} with Dexent</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-steel">{d.whyDexent}</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
              <h2 className="text-[16px] font-semibold text-ink">What {d.name.toLowerCase()} pays</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-steel">{d.rateContext}</p>
              <p className="mt-3 text-[13px] text-steel">
                Pricing: {PRICING.tiers[0].percent}% for 1–5 trucks. New MC? ${PRICING.newMc.monthly}/mo + {PRICING.newMc.percent}% for 3 months.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* State links (internal linking to the matrix) */}
      {liveStates.length > 0 && (
        <Reveal>
          <section className="mx-auto max-w-4xl px-5 py-8">
            <h2 className="text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
              {d.name} dispatch by state
            </h2>
            <p className="mt-2 text-[14px] text-steel">
              We dispatch {d.name.toLowerCase()} nationwide. Explore key freight states:
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {liveStates.map((s) => (
                <Link
                  key={s.slug}
                  href={`/dispatch/${equipment}/${s.slug}`}
                  className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink transition hover:border-brand hover:text-brand"
                >
                  {d.name} dispatch in {s.name}
                </Link>
              ))}
            </div>
          </section>
        </Reveal>
      )}

      {/* FAQ */}
      <Reveal>
        <section className="mx-auto max-w-4xl px-5 py-8">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            {d.name} dispatch questions
          </h2>
          <div className="divide-y divide-line rounded-xl border border-line bg-white">
            {d.faqs.map((f) => (
              <details key={f.q} className="group px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[14px] font-medium text-ink">
                  {f.q}
                  <svg className="shrink-0 transition-transform group-open:rotate-45" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" d="M12 5v14M5 12h14" /></svg>
                </summary>
                <p className="pb-4 text-[13px] leading-relaxed text-steel">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Other equipment (sibling internal links) */}
          <div className="mt-8">
            <h3 className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-steel">Other equipment we dispatch</h3>
            <div className="flex flex-wrap gap-2.5">
              {EQUIPMENT.filter((e) => e.slug !== equipment).map((e) => (
                <Link key={e.slug} href={`/dispatch/${e.slug}`} className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink transition hover:border-brand hover:text-brand">
                  {e.name} Dispatch
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <FinalCTA />
    </>
  );
}
