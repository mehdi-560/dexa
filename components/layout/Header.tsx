// dexent/components/layout/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT, SITE } from "@/lib/constants";

const NAV = [
  { label: "Services", href: "/dispatch" },
  { label: "Pricing", href: "/pricing" },
  { label: "New MC", href: "/new-mc-program" },
  { label: "Resources", href: "/resources" },
  { label: "Reviews", href: "/reviews" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-center" aria-label={SITE.name}>
          {/* Full logo on larger screens */}
          <Image
            src="/images/logo.png"
            alt="Dexent Logistics"
            width={330}
            height={202}
            priority
            className="hidden h-9 w-auto sm:block"
          />
          {/* Truck-only mark on small screens */}
          <Image
            src="/images/logo-mark.png"
            alt="Dexent Logistics"
            width={292}
            height={102}
            priority
            className="h-8 w-auto sm:hidden"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[13px] font-medium text-steel transition-colors hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-accent-600"
          >
            <PhoneIcon /> Call now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-paper px-5 py-3 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-ink"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-white"
          >
            <PhoneIcon /> Call {CONTACT.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  );
}
