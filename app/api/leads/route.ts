// dexent/app/api/lead/route.ts
// Server-side lead handler. Validates, blocks bots (honeypot), emails via Resend,
// and ALWAYS logs a backup (console + file) so a lead is never lost if email fails.

import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { sendLeadEmail, type Lead } from "@/lib/email";

// Node runtime (not edge) so we can write the backup file.
export const runtime = "nodejs";

function backupLead(lead: Lead, emailOk: boolean, emailError?: string) {
  const entry = {
    ...lead,
    emailOk,
    emailError: emailError || null,
    receivedAt: new Date().toISOString(),
  };

  // 1) Always log to server console (visible in hosting logs).
  console.log("[LEAD]", JSON.stringify(entry));

  // 2) Best-effort append to a local file (works on Node hosts; ignored if FS is read-only).
  try {
    const dir = path.join(process.cwd(), "leads");
    fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(
      path.join(dir, "leads.jsonl"),
      JSON.stringify(entry) + "\n",
      "utf8"
    );
  } catch {
    // Read-only filesystem (e.g. some serverless hosts) — console log above is the fallback.
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "company" field; real users never do.
  if (body.company) {
    // Pretend success so bots don't retry, but do nothing.
    return NextResponse.json({ ok: true });
  }

  const lead: Lead = {
    name: String(body.name || "").trim(),
    phone: String(body.phone || "").trim(),
    email: body.email ? String(body.email).trim() : undefined,
    mc: body.mc ? String(body.mc).trim() : undefined,
    equipment: body.equipment ? String(body.equipment).trim() : undefined,
    trucks: body.trucks ? String(body.trucks).trim() : undefined,
    message: body.message ? String(body.message).trim() : undefined,
  };

  // Minimal validation — name + phone are the must-haves.
  if (!lead.name || !lead.phone) {
    return NextResponse.json(
      { error: "Name and phone are required" },
      { status: 400 }
    );
  }

  const result = await sendLeadEmail(lead);

  // Backup ALWAYS runs, whether or not email succeeded.
  backupLead(lead, result.ok, result.error);

  // We return success to the user as long as we captured the lead (email OR backup).
  // The lead is safe either way; email failure is logged for you to follow up.
  return NextResponse.json({ ok: true });
}

// Optional: gently reject other methods.
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
