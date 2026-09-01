// dexent/app/partners/page.tsx
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import PartnerForm from "@/components/forms/PartnerForm";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Partner With Dexent — Earn $100 Per Carrier You Refer",
  description:
    "Factoring companies, brokerages, CDL schools, tire shops, DOT filing and more: refer carriers to Dexent and earn $100 per active client. Two-way partnership — we send carriers back to you free.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Partner With Dexent — $100 Per Referral",
    description: "Refer carriers, earn $100 each. Two-way referral partnership.",
    url: `${SITE.domain}/partners`,
  },
};

const PARTNER_TYPES = [
  { label: "Factoring Companies", icon: "M3 10h18M7 15h4" },
  { label: "Freight Brokerages", icon: "M4 7h16v10H4z" },
  { label: "CDL / Driving Schools", icon: "M12 4l8 4-8 4-8-4 8-4z" },
  { label: "Tire Shops", icon: "M12 12m-8 0a8 8 0 1016 0a8 8 0 10-16 0" },
  { label: "DOT Filing Services", icon: "M6 4h9l5 5v11H6z" },
  { label: "Drug & Alcohol Consortiums", icon: "M9 3h6v4l4 12H5L9 7z" },
  { label: "Insurance Agencies", icon: "M12 3l8 4v6c0 5-4 8-8 8s-8-3-8-8V7z" },
  { label: "ELD Providers", icon: "M4 5h16v10H4zM9 19h6" },
];

const STEPS = [
  { n: "1", title: "Sign up as a partner", body: "Fill out the form below or call us. We'll set you up with a simple way to send carriers our way." },
  { n: "2", title: "Refer your carriers", body: "Send owner-operators and fleets who need dispatch. We take great care of them, on your recommendation." },
  { n: "3", title: "Earn $100 per active client", body: "When your referred carrier completes their first two weeks of paid dispatch, you earn a one-time $100 — per carrier." },
  { n: "4", title: "We refer back — free", body: "It's two-way. When our carriers need factoring, insurance, tires, filings, or training, we send them to you — and we don't charge you for it." },
];

export default function PartnersPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Partner With Dexent",
          description:
            "Referral partnership program: refer carriers to Dexent dispatch and earn $100 per active client. Two-way partnership.",
          url: `${SITE.domain}/partners`,
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 pt-14 pb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-50 px-3 py-1.5 text-[11px] font-medium text-accent-600">
          Referral Partnership
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl font-[family-name:var(--font-display)]">
          Refer carriers. Earn <span className="text-brand">$100</span> each.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-steel">
          If you work with owner-operators — factoring, brokerage, CDL schools,
          tire shops, DOT filing, insurance, and more — send them to Dexent and
          earn <strong className="text-ink">$100 per active client</strong>. And
          it's two-way: when our carriers need what you offer, we send them back
          to you, free.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="#join" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600">
            Become a partner
          </a>
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand">
            Call {CONTACT.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Who partners with us */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-5 py-8">
          <h2 className="mb-6 text-center text-[12px] font-semibold uppercase tracking-wider text-steel">
            Who partners with Dexent
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PARTNER_TYPES.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-2 rounded-xl border border-line bg-white p-4 text-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-brand" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                </svg>
                <span className="text-[12px] font-medium text-ink">{p.label}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* How it works */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            How the partnership works
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl border border-line bg-white p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-[15px] font-semibold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 text-[14px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-steel">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Two-way highlight */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-8">
          <div className="rounded-2xl border-2 border-brand bg-brand-50 p-6 text-center sm:p-8">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-brand">
              A true two-way partnership
            </div>
            <p className="mx-auto mt-3 max-w-xl text-[16px] leading-relaxed text-ink">
              You send us carriers and earn $100 each. We send our carriers to you
              when they need your service — at no charge. Everybody's book of
              business grows.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Terms clarity */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-8">
          <div className="rounded-2xl border border-line bg-paper-2 p-6 sm:p-8">
            <h2 className="text-[13px] font-semibold uppercase tracking-wider text-steel">
              Program terms
            </h2>
            <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-ink">
              <li className="flex gap-2.5"><Dot /> Earn a one-time $100 per referred carrier.</li>
              <li className="flex gap-2.5"><Dot /> Paid once your referred carrier completes their first two weeks of paid dispatch with us.</li>
              <li className="flex gap-2.5"><Dot /> No limit on how many carriers you can refer.</li>
              <li className="flex gap-2.5"><Dot /> Two-way: we refer our carriers to you for your services at no charge.</li>
              <li className="flex gap-2.5"><Dot /> No cost to join and no obligation.</li>
            </ul>
          </div>
        </section>
      </Reveal>

      {/* Sign-up form */}
      <Reveal>
        <section id="join" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-12">
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
              Become a partner
            </h2>
            <p className="mt-2 mb-6 text-[14px] text-steel">
              Fill this out and we'll reach out to set you up. Or call{" "}
              <a href={CONTACT.phoneHref} className="font-semibold text-brand">{CONTACT.phoneDisplay}</a>{" "}
              / email{" "}
              <a href={CONTACT.emailHref} className="font-semibold text-brand">{CONTACT.email}</a>.
            </p>
            <PartnerForm />
          </div>
        </section>
      </Reveal>
    </>
  );
}

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />;
}
