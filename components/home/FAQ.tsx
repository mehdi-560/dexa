// dexent/components/home/FAQ.tsx
// Server component. Uses native <details> (no JS). Pairs with faqSchema on the page.

import { HOME_FAQS } from "@/content/faqs";

export default function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
        Frequently asked questions
      </h2>

      <div className="divide-y divide-line rounded-xl border border-line bg-white">
        {HOME_FAQS.map((f) => (
          <details key={f.q} className="group px-5">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[14px] font-medium text-ink">
              {f.q}
              <svg
                className="shrink-0 transition-transform group-open:rotate-45"
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="pb-4 text-[13px] leading-relaxed text-steel">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}