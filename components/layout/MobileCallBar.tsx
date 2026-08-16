// dexent/components/layout/MobileCallBar.tsx
// Server component — pinned call/text bar on mobile (your #1 conversion action).

import { CONTACT } from "@/lib/constants";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-line bg-paper/95 px-4 py-2.5 backdrop-blur md:hidden">
      <a
        href={CONTACT.phoneHref}
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent py-3 text-sm font-semibold text-white"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
        </svg>
        Call
      </a>
      <a
        href={CONTACT.smsHref}
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand py-3 text-sm font-semibold text-white"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.4 8.4 0 01-8.5 8.5 8.5 8.5 0 01-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 013.5 11.5 8.5 8.5 0 0112 3a8.4 8.4 0 019 8.5z" />
        </svg>
        Text
      </a>
    </div>
  );
}