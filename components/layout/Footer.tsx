// dexent/components/layout/Footer.tsx
// Server component (no JS). Includes internal links (SEO silo) + social links.

import Link from "next/link";
import Image from "next/image";
import { SITE, CONTACT, EQUIPMENT } from "@/lib/constants";

// ── Social links ──────────────────────────────────────────────
// Facebook: paste your page URL between the quotes to enable it.
const SOCIAL = {
  instagram: "https://www.instagram.com/dexent_logistics/",
  linkedin: "https://www.linkedin.com/company/dexent-logistics-dispatch-services",
  facebook: "", // e.g. "https://www.facebook.com/dexentlogistics" — leave "" to hide
};

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="mb-3">
            <Image
              src="/images/logo.png"
              alt="Dexent Logistics"
              width={330}
              height={202}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-[13px] leading-relaxed text-steel">
            Truck dispatch for owner-operators and small fleets. Higher
            net-per-mile, transparent pricing, no contracts.
          </p>

          {/* Social links */}
          <div className="mt-4 flex items-center gap-3">
            {SOCIAL.instagram && (
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dexent on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white text-steel transition hover:border-brand hover:text-brand"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            )}
            {SOCIAL.linkedin && (
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dexent on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white text-steel transition hover:border-brand hover:text-brand"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
                </svg>
              </a>
            )}
            {SOCIAL.facebook && (
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dexent on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white text-steel transition hover:border-brand hover:text-brand"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-steel">
            Dispatch
          </h3>
          <ul className="space-y-2">
            {EQUIPMENT.map((e) => (
              <li key={e.slug}>
                <Link
                  href={`/dispatch/${e.slug}`}
                  className="text-[13px] text-ink transition-colors hover:text-brand"
                >
                  {e.name} Dispatch
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-steel">
            Company
          </h3>
          <ul className="space-y-2 text-[13px]">
            <li><Link href="/pricing" className="text-ink hover:text-brand">Pricing</Link></li>
            <li><Link href="/new-mc-program" className="text-ink hover:text-brand">New MC Program</Link></li>
            <li><Link href="/roll-with-dexent" className="text-ink hover:text-brand">Roll With Dexent</Link></li>
            <li><Link href="/partners" className="text-ink hover:text-brand">Partners</Link></li>
            <li><Link href="/resources" className="text-ink hover:text-brand">Resources</Link></li>
            <li><Link href="/about" className="text-ink hover:text-brand">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-steel">
            Contact
          </h3>
          <ul className="space-y-2 text-[13px]">
            <li>
              <a href={CONTACT.phoneHref} className="font-semibold text-brand">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li><a href={CONTACT.emailHref} className="text-ink hover:text-brand">{CONTACT.email}</a></li>
            <li><Link href="/contact" className="text-ink hover:text-brand">Contact us</Link></li>
            <li className="text-steel">{CONTACT.city}, {CONTACT.region} · Dispatching nationwide</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-[12px] text-steel sm:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>FMCSA-compliant dispatch · No contracts</span>
        </div>
      </div>
    </footer>
  );
}
