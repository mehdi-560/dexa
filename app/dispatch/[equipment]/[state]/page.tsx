// dexent/app/dispatch/[equipment]/[state]/page.tsx
// The equipment × state matrix page. UNIQUENESS is enforced by pulling real
// per-state freight data — each page reads differently, avoiding duplicate
// penalties. Self-canonical. Only LIVE states are generated (staged rollout).

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { serviceSchema } from "@/lib/schema";
import { canonical } from "@/lib/seo";
import { EQUIPMENT, PRICING, CONTACT } from "@/lib/constants";
import { EQUIPMENT_DETAIL } from "@/content/equipment-detail";
import { STATES, LIVE_STATE_SLUGS } from "@/content/states";

// Only generate pages for equipment × LIVE states (staged rollout).
export function generateStaticParams() {
  const params: { equipment: string; state: string }[] = [];
  for (const e of EQUIPMENT) {
    for (const s of LIVE_STATE_SLUGS) {
      params.push({ equipment: e.slug, state: s });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ equipment: string; state: string }>;
}): Promise<Metadata> {
  const { equipment, state } = await params;
  const d = EQUIPMENT_DETAIL[equipment];
  const st = STATES[state];
  if (!d || !st) return {};
  return {
    title: `${d.name} Dispatch Service in ${st.name} — Owner-Operators`,
    description: `${d.name} dispatch for owner-operators and fleets in ${st.name}. Real ${st.name} freight lanes, transparent pricing, no contracts. Call a Dexent dispatcher.`,
    alternates: { canonical: `/dispatch/${equipment}/${state}` },
    openGraph: {
      title: `${d.name} Dispatch in ${st.name} | Dexent`,
      description: `${d.name} dispatch across ${st.name}'s freight lanes.`,
      url: canonical(`/dispatch/${equipment}/${state}`),
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ equipment: string; state: string }>;
}) {
  const { equipment, state } = await params;
  const d = EQUIPMENT_DETAIL[equipment];
  const st = STATES[state];
  if (!d || !st) notFound();

  const angle = st.equipmentAngles[equipment];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${d.name} Dispatch Service in ${st.name}`,
          description: `${d.name} dispatch for carriers running ${st.name} freight lanes including ${st.hubs.slice(0, 3).join(", ")}.`,
          url: canonical(`/dispatch/${equipment}/${state}`),
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Dispatch", item: canonical("/dispatch") },
            { "@type": "ListItem", position: 2, name: `${d.name} Dispatch`, item: canonical(`/dispatch/${equipment}`) },
            { "@type": "ListItem", position: 3, name: st.name, item: canonical(`/dispatch/${equipment}/${state}`) },
          ],
        }}
      />

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-4xl px-5 pt-8 text-[12px] text-steel" aria-label="Breadcrumb">
        <Link href="/dispatch" className="hover:text-brand">Dispatch</Link>
        <span className="mx-1.5">/</span>
        <Link href={`/dispatch/${equipment}`} className="hover:text-brand">{d.name}</Link>
        <span className="mx-1.5">/</span>
        <span className="text-ink">{st.name}</span>
      </nav>

      {/* Hero — answer-first, state-specific */}
      <section className="mx-auto max-w-4xl px-5 pt-4 pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl font-[family-name:var(--font-display)]">
          {d.name} Dispatch Service in {st.name}
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-steel">
          Dexent dispatches {d.name.toLowerCase()} owner-operators and small
          fleets across {st.name}, from {st.hubs.slice(0, 3).join(", ")} and
          beyond. We know {st.name}'s freight and negotiate hard on every load —
          at {PRICING.tiers[0].percent}% for 1–5 trucks, with new authorities
          starting at ${PRICING.newMc.monthly}/mo + {PRICING.newMc.percent}% for
          3 months. No contracts.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600">
            Call {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.smsHref} className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand">
            Text a dispatcher
          </a>
        </div>
      </section>

      {/* State-specific equipment angle */}
      {angle && (
        <Reveal>
          <section className="mx-auto max-w-4xl px-5 py-8">
            <h2 className="text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
              {d.name} freight in {st.name}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-steel">{angle}</p>
          </section>
        </Reveal>
      )}

      {/* State freight overview */}
      <Reveal>
        <section className="mx-auto max-w-4xl px-5 py-8">
          <h2 className="text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            {st.name} freight overview
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-steel">{st.freightNotes}</p>

          <div className="mt-6">
            <h3 className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-steel">
              Major {st.name} freight hubs
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {st.hubs.map((h) => (
                <span key={h} className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Nearby states (sibling internal linking) */}
      {st.neighbors.filter((n) => LIVE_STATE_SLUGS.includes(n)).length > 0 && (
        <Reveal>
          <section className="mx-auto max-w-4xl px-5 py-8">
            <h3 className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-steel">
              We also dispatch {d.name.toLowerCase()} nearby
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {st.neighbors
                .filter((n) => LIVE_STATE_SLUGS.includes(n))
                .map((n) => (
                  <Link key={n} href={`/dispatch/${equipment}/${n}`} className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink transition hover:border-brand hover:text-brand">
                    {d.name} dispatch in {STATES[n].name}
                  </Link>
                ))}
            </div>
          </section>
        </Reveal>
      )}

      {/* Other equipment in this state (internal linking) */}
      <Reveal>
        <section className="mx-auto max-w-4xl px-5 py-8">
          <h3 className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-steel">
            Other equipment we dispatch in {st.name}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {EQUIPMENT.filter((e) => e.slug !== equipment).map((e) => (
              <Link key={e.slug} href={`/dispatch/${e.slug}/${state}`} className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink transition hover:border-brand hover:text-brand">
                {e.name} dispatch in {st.name}
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <FinalCTA />
    </>
  );
}
