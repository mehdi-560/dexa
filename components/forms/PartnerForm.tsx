// dexent/components/forms/PartnerForm.tsx
"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/constants";

type Status = "idle" | "sending" | "ok" | "error";

const PARTNER_TYPES = [
  "Factoring Company",
  "Freight Brokerage",
  "CDL / Driving School",
  "Tire Shop",
  "DOT Filing Service",
  "Drug & Alcohol Consortium",
  "Insurance Agency",
  "ELD Provider",
  "Other",
];

export default function PartnerForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.company_website) return; // honeypot
    if (!data.name || !data.phone || !data.business) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "partner" }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-xl border border-brand/30 bg-brand-50 p-6 text-center">
        <div className="text-[15px] font-semibold text-ink">
          Thanks — we'll reach out to set up your partnership.
        </div>
        <p className="mt-1 text-[13px] text-steel">
          Prefer to talk now? Call{" "}
          <a href={CONTACT.phoneHref} className="font-semibold text-brand">
            {CONTACT.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3.5">
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field name="name" label="Your name" required />
        <Field name="business" label="Business name" required />
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field name="phone" label="Phone" type="tel" required />
        <Field name="email" label="Email" type="email" />
      </div>

      <label className="block">
        <span className="mb-1.5 block text-[13px] font-medium text-ink">Business type</span>
        <select
          name="partnerType"
          className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink focus:border-brand focus:outline-none"
        >
          <option value="">Select…</option>
          {PARTNER_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-[13px] font-medium text-ink">
          Roughly how many carriers could you refer? (optional)
        </span>
        <input
          type="text"
          name="volume"
          className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink focus:border-brand focus:outline-none"
        />
      </label>

      {status === "error" && (
        <p className="text-[13px] text-accent-600">
          Please add your name, business, and phone — or just call{" "}
          <a href={CONTACT.phoneHref} className="font-semibold underline">{CONTACT.phoneDisplay}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Become a partner"}
      </button>

      <p className="text-center text-[12px] text-steel">
        Prefer to talk?{" "}
        <a href={CONTACT.phoneHref} className="font-semibold text-brand">Call {CONTACT.phoneDisplay}</a>
      </p>
    </form>
  );
}

function Field({
  name, label, type = "text", required = false,
}: {
  name: string; label: string; type?: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-ink">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink focus:border-brand focus:outline-none"
      />
    </label>
  );
}
