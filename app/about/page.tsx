// dexent/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { localBusinessSchema } from "@/lib/schema";
import { SITE, CONTACT, EQUIPMENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Dexent — Truck Dispatch Built Around Your Net Revenue",
  description:
    "Dexent is a truck dispatch service for owner-operators and small fleets. We negotiate harder so your net-per-mile is higher. Transparent pricing, no contracts, dispatching nationwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Dexent Dispatch",
    description:
      "Truck dispatch built around your net revenue — transparent, nationwide, no contracts.",
    url: `${SITE.domain}/about`,
  },
};

const VALUES = [
  {
    title: "Net revenue over fee",
    body: "We compete on what lands in your pocket after our fee, not on being the cheapest percentage. Better negotiation beats a lower rate on cheap freight.",
  },
  {
    title: "Radical transparency",
    body: "One pricing page, one quotable number, no hidden add-ons. What we charge is on the site — the same everywhere you look.",
  },
  {
    title: "New carriers welcome",
    body: "We take on brand-new MC authorities most dispatchers won't, and grow with you as you scale.",
  },
  {
    title: "No contracts, ever",
    body: "We keep your business by earning it every week — not by locking you into paperwork.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 pt-14 pb-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl font-[family-name:var(--font-display)]">
          Dispatch built around your net revenue.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-steel">
          Dexent is a truck dispatch service for owner-operators and small
          fleets running Power Only, Dry Van, Reefer, and Flatbed. Based in{" "}
          {CONTACT.city}, {CONTACT.region}, dispatching carriers nationwide.
        </p>
      </section>

      {/* Dispatch desk image */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-5 pb-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-paper-2">
            <Image
              src="/images/team/dispatch-desk.png"
              alt="A Dexent dispatcher working at a desk with load boards and maps on screen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </section>
      </Reveal>

      {/* Story */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-8">
          <h2 className="text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            Why we do this
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-steel">
            <p>
              Too many dispatchers compete on one thing: a lower percentage. But
              a low fee on cheap freight leaves a carrier with less money than a
              fair fee on well-negotiated loads. We built Dexent around the
              number that actually matters — your net-per-mile after the fee.
            </p>
            <p>
              That means negotiating harder on every load, keeping your truck
              moving, and being honest about what we charge and why. No
              contracts to trap you, no surprise add-ons, and a real dispatcher
              on the other end of the phone.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Values */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-5 py-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-line bg-white p-6">
                <h3 className="text-[15px] font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-steel">{v.body}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Equipment quick links (internal linking) */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-5 py-10">
          <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-steel">
            What we dispatch
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {EQUIPMENT.map((e) => (
              <a
                key={e.slug}
                href={`/dispatch/${e.slug}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink transition hover:border-brand hover:text-brand"
              >
                {e.name} Dispatch
              </a>
            ))}
          </div>
        </section>
      </Reveal>

      <FinalCTA />
    </>
  );
}
