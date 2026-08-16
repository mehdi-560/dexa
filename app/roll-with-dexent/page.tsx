// dexent/app/roll-with-dexent/page.tsx
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { faqSchema } from "@/lib/schema";
import { SITE, CONTACT } from "@/lib/constants";
import { STICKER_FAQS } from "@/content/sticker-faqs";

export const metadata: Metadata = {
  title: "Roll With Dexent — Free Dispatch for a Sticker on Your Truck",
  description:
    "Put a Dexent sticker on both sides of your truck and earn one free week of dispatch every 2 months. Free sticker kit shipped after your first paid month. No contracts.",
  alternates: { canonical: "/roll-with-dexent" },
  openGraph: {
    title: "Roll With Dexent — Sticker Rewards",
    description:
      "A sticker on your truck earns a free week of dispatch every 2 months.",
    url: `${SITE.domain}/roll-with-dexent`,
  },
};

const STEPS = [
  { n: "1", title: "Run your first paid month", body: "Dispatch with Dexent for one paid month. That's all it takes to qualify for the program." },
  { n: "2", title: "Get your free kit", body: "We ship you a professional sticker kit — free. Two premium vinyl stickers plus simple placement instructions." },
  { n: "3", title: "Sticker both sides", body: "Apply one sticker to each side of your truck so it's visible from either direction." },
  { n: "4", title: "Send a photo & earn", body: "Send us a photo showing both stickers placed. Once verified, you earn a free week of dispatch every 2 months." },
];

export default function RollWithDexentPage() {
  return (
    <>
      <JsonLd data={faqSchema(STICKER_FAQS.map((f) => ({ q: f.q, a: f.a })))} />

      {/* ── Hero ── */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-50 px-3 py-1.5 text-[11px] font-medium text-accent-600">
              Promotion · Roll With Dexent
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl font-[family-name:var(--font-display)]">
              Your truck becomes your discount.
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-steel">
              Put a Dexent sticker on both sides of your truck and earn{" "}
              <strong className="text-ink">one free week of dispatch every 2 months</strong>
              , for as long as they stay on. We ship your{" "}
              <strong className="text-ink">free sticker kit after your first paid month</strong>.
              No cost, no catch.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600">
                Call {CONTACT.phoneDisplay}
              </a>
              <a href={CONTACT.smsHref} className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand">
                Text to join
              </a>
            </div>
          </div>

          {/* Inline SVG sticker preview — weightless, always crisp */}
          <div className="flex items-center justify-center rounded-2xl border border-line bg-paper-2 p-8">
            <svg width="100%" viewBox="0 0 680 300" role="img" style={{ maxWidth: 420 }}>
              <title>Dexent truck sticker</title>
              <rect x="50" y="30" width="580" height="240" rx="20" fill="#FFFFFF" />
              <rect x="50" y="30" width="580" height="240" rx="20" fill="none" stroke="#E0821E" strokeWidth="6" />
              <g transform="translate(84,74)">
                <circle cx="20" cy="18" r="22" fill="#0E5F40" />
                <circle cx="12" cy="26" r="3.5" fill="#FFFFFF" />
                <circle cx="28" cy="10" r="3.5" fill="#FFFFFF" />
                <path d="M12 24c0-9 16-5 16-14" stroke="#FFFFFF" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              </g>
              <text x="138" y="90" fill="#0E5F40" fontFamily="sans-serif" fontSize="54" fontWeight="800" letterSpacing="1">DEXENT</text>
              <text x="140" y="116" fill="#C2690F" fontFamily="sans-serif" fontSize="17" fontWeight="700" letterSpacing="5.5">DISPATCH SERVICE</text>
              <line x1="84" y1="138" x2="596" y2="138" stroke="#E0821E" strokeWidth="2.5" />
              <text x="84" y="168" fill="#161A20" fontFamily="sans-serif" fontSize="21" fontWeight="800" letterSpacing="0.3">SMARTER MILES — MAXIMUM REVENUE</text>
              <text x="84" y="200" fill="#161A20" fontFamily="sans-serif" fontSize="22" fontWeight="800">{CONTACT.phoneDisplay}</text>
              <text x="596" y="200" textAnchor="end" fill="#0E5F40" fontFamily="sans-serif" fontSize="15" fontWeight="700">dexentlogistics.com</text>
              <text x="84" y="230" fill="#3f4750" fontFamily="sans-serif" fontSize="14" fontWeight="600">dexentlogistics@gmail.com</text>
              <text x="596" y="250" textAnchor="end" fill="#8a7355" fontFamily="sans-serif" fontSize="11.5" fontWeight="600" letterSpacing="1.2">POWER ONLY · DRY VAN · REEFER · FLATBED</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── Reward highlight ── */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-brand bg-brand-50 p-6 text-center">
              <div className="text-3xl font-semibold text-brand font-[family-name:var(--font-display)]">1 week</div>
              <div className="mt-1 text-[12px] text-steel">free dispatch</div>
            </div>
            <div className="rounded-xl border border-line bg-white p-6 text-center">
              <div className="text-3xl font-semibold text-ink font-[family-name:var(--font-display)]">every 2 mo</div>
              <div className="mt-1 text-[12px] text-steel">ongoing reward</div>
            </div>
            <div className="rounded-xl border border-line bg-white p-6 text-center">
              <div className="text-3xl font-semibold text-ink font-[family-name:var(--font-display)]">$0</div>
              <div className="mt-1 text-[12px] text-steel">sticker cost</div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── How it works ── */}
      <Reveal>
        <section className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            How Roll With Dexent works
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

      {/* ── Rules (transparent) ── */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-8">
          <div className="rounded-2xl border border-line bg-paper-2 p-6 sm:p-8">
            <h2 className="text-[13px] font-semibold uppercase tracking-wider text-steel">
              Program terms
            </h2>
            <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-ink">
              <li className="flex gap-2.5"><Dot /> Free sticker kit ships after your first paid month of dispatch.</li>
              <li className="flex gap-2.5"><Dot /> Display one sticker on each side of your truck (two total).</li>
              <li className="flex gap-2.5"><Dot /> Send a photo showing both stickers placed to activate your reward.</li>
              <li className="flex gap-2.5"><Dot /> Earn one free week of dispatch every 2 months while displayed.</li>
              <li className="flex gap-2.5"><Dot /> We may request an occasional fresh photo to confirm placement.</li>
              <li className="flex gap-2.5"><Dot /> A sticker on the trailer rear is welcome for extra visibility, but not required.</li>
            </ul>
          </div>
        </section>
      </Reveal>

      {/* ── FAQ ── */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-5 py-12">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
            Sticker program questions
          </h2>
          <div className="divide-y divide-line rounded-xl border border-line bg-white">
            {STICKER_FAQS.map((f) => (
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

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />;
}