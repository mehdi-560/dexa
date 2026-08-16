// dexent/components/home/FinalCTA.tsx
// Server component. Call-first closing CTA.

import { CONTACT } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl font-[family-name:var(--font-display)]">
          Ready to run better-paying loads?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-white/80">
          Talk to a real dispatcher today. No contracts, no setup fees — just
          higher net-per-mile.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" /></svg>
            Call {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.smsHref} className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20">
            Text us
          </a>
        </div>
      </div>
    </section>
  );
}