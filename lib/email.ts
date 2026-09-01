// dexent/lib/email.ts
// Lead + partner notification via Resend. Delivers to your Gmail inbox.
// Requires: npm i resend  +  RESEND_API_KEY and LEAD_TO_EMAIL in .env.local

import { Resend } from "resend";

export type Lead = {
  type?: string; // "partner" for partner signups; otherwise a carrier lead
  name: string;
  phone: string;
  email?: string;
  mc?: string;
  equipment?: string;
  trucks?: string;
  message?: string;
  // partner-specific fields
  business?: string;
  partnerType?: string;
  volume?: string;
};

export async function sendLeadEmail(lead: Lead): Promise<{ ok: boolean; error?: string }> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "leads@dexentlogistics.com";

  if (!key || !to) {
    return { ok: false, error: "Email not configured (missing RESEND_API_KEY or LEAD_TO_EMAIL)" };
  }

  const resend = new Resend(key);
  const isPartner = lead.type === "partner";

  const text = isPartner
    ? [
        "New PARTNER signup from dexentlogistics.com",
        "",
        `Contact:     ${lead.name}`,
        `Business:    ${lead.business || "—"}`,
        `Type:        ${lead.partnerType || "—"}`,
        `Phone:       ${lead.phone}`,
        `Email:       ${lead.email || "—"}`,
        `Est. volume: ${lead.volume || "—"}`,
        "",
        `Received:    ${new Date().toISOString()}`,
      ].join("\n")
    : [
        "New carrier lead from dexentlogistics.com",
        "",
        `Name:      ${lead.name}`,
        `Phone:     ${lead.phone}`,
        `Email:     ${lead.email || "—"}`,
        `MC Number: ${lead.mc || "—"}`,
        `Equipment: ${lead.equipment || "—"}`,
        `Trucks:    ${lead.trucks || "—"}`,
        `Message:   ${lead.message || "—"}`,
        "",
        `Received:  ${new Date().toISOString()}`,
      ].join("\n");

  const subject = isPartner
    ? `New Partner: ${lead.business || lead.name} — ${lead.partnerType || "Referral"}`
    : `New Lead: ${lead.name} — ${lead.equipment || "Dispatch"}`;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: lead.email || undefined,
      subject,
      text,
    });
    if (error) return { ok: false, error: String(error) };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "send failed" };
  }
}
