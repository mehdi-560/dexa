// dexent/components/forms/LeadForm.tsx
"use client";

import { useState } from "react";
import { CONTACT, EQUIPMENT } from "@/lib/constants";

type Status = "idle" | "sending" | "ok" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — bots fill this hidden field; humans never see it.
    if (data.company) return;

    if (!data.name || !data.phone) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
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
          Thanks — a dispatcher will call you shortly.
        </div>
        <p className="mt-1 text-[13px] text-steel">
          Need us now? Call{" "}
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
      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field name="name" label="Name" required />
        <Field name="phone" label="Phone" type="tel" required />
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field name="email" label="Email" type="email" />
        <Field name="mc" label="MC Number" />
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-ink">Equipment</span>
          <select
            name="equipment"
            className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink focus:border-brand focus:outline-none"
          >
            <option value="">Select…</option>
            {EQUIPMENT.map((e) => (
              <option key={e.slug} value={e.name}>{e.name}</option>
            ))}
          </select>
        </label>
        <Field name="trucks" label="Number of trucks" type="number" />
      </div>

      <label className="block">
        <span className="mb-1.5 block text-[13px] font-medium text-ink">Message (optional)</span>
        <textarea
          name="message"
          rows={3}
          className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink focus:border-brand focus:outline-none"
        />
      </label>

      {status === "error" && (
        <p className="text-[13px] text-accent-600">
          Please add your name and phone. Or just call{" "}
          <a href={CONTACT.phoneHref} className="font-semibold underline">
            {CONTACT.phoneDisplay}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a callback"}
      </button>

      <p className="text-center text-[12px] text-steel">
        Prefer to talk now?{" "}
        <a href={CONTACT.phoneHref} className="font-semibold text-brand">
          Call {CONTACT.phoneDisplay}
        </a>
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
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