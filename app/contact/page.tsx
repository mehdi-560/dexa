// dexent/app/contact/page.tsx
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import LeadForm from "@/components/forms/LeadForm";
import { localBusinessSchema } from "@/lib/schema";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Dexent Dispatch — Call, Text, or Request a Callback",
  description:
    "Talk to a Dexent dispatcher today. Call or text for owner-operator and fleet dispatch on Power Only, Dry Van, Reefer, and Flatbed. No contracts, nationwide coverage.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Dexent Dispatch",
    description: "Call, text, or request a callback from a real dispatcher.",
    url: `${SITE.domain}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <section className="mx-auto max-w-6xl px-5 pt-14 pb-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl font-[family-name:var(--font-display)]">
              Talk to a dispatcher.
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-steel">
              The fastest way to get moving is a call. Reach a real dispatcher —
              no phone trees, no contracts.
            </p>

            <div className="mt-8 space-y-3">
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 transition hover:border-brand">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" /></svg>
                </span>
                <div>
                  <div className="text-[12px] text-steel">Call</div>
                  <div className="text-[15px] font-semibold text-ink">{CONTACT.phoneDisplay}</div>
                </div>
              </a>

              <a href={CONTACT.smsHref} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 transition hover:border-brand">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.4 8.4 0 01-8.5 8.5 8.5 8.5 0 01-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 013.5 11.5 8.5 8.5 0 0112 3a8.4 8.4 0 019 8.5z" /></svg>
                </span>
                <div>
                  <div className="text-[12px] text-steel">Text</div>
                  <div className="text-[15px] font-semibold text-ink">{CONTACT.phoneDisplay}</div>
                </div>
              </a>

              <a href={CONTACT.emailHref} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 transition hover:border-brand">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" /></svg>
                </span>
                <div>
                  <div className="text-[12px] text-steel">Email</div>
                  <div className="text-[15px] font-semibold text-ink">{CONTACT.email}</div>
                </div>
              </a>
            </div>

            <p className="mt-6 text-[13px] text-steel">
              {CONTACT.city}, {CONTACT.region} · Dispatching carriers nationwide
            </p>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-line bg-paper-2 p-6 sm:p-7">
            <h2 className="mb-4 text-[15px] font-semibold text-ink">
              Request a callback
            </h2>
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}