import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Send via Resend if configured — gracefully skipped if key is missing
    if (process.env.RESEND_API_KEY) {
      const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";
      const founderEmail = process.env.FOUNDER_EMAIL ?? "hello@vowplanning.com";

      await Promise.allSettled([
        // Notify founder
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from,
            to: founderEmail,
            subject: `New Vow waitlist signup: ${email}`,
            html: `<p style="font-family:Georgia,serif">New waitlist signup: <strong>${email}</strong><br/>${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}</p>`,
          }),
        }),
        // Confirm to subscriber
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from,
            to: email,
            subject: "You're on the Vow list.",
            html: `<div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;padding:48px 32px;background:#F5F0E8;color:#251E16"><h1 style="font-size:2.5rem;font-weight:300;margin:0 0 8px;letter-spacing:-0.01em">You're on the list.</h1><p style="color:#7A6E62;line-height:1.8;margin:16px 0 8px;font-size:1rem">We'll be in touch within 48 hours with your onboarding details and next steps.</p><p style="color:#7A6E62;line-height:1.8;margin:0 0 32px;font-size:1rem">In the meantime, book your free 30-minute discovery call to get started sooner:</p><a href="https://calendly.com/vowplanning" style="display:inline-block;padding:14px 32px;background:#C9A96E;color:#251E16;text-decoration:none;font-family:system-ui,sans-serif;font-size:11px;letter-spacing:.18em;text-transform:uppercase">Book your discovery call →</a><hr style="margin:48px 0;border:none;border-top:1px solid #EDE6D9"/><p style="color:#B5A898;font-size:11px;font-family:system-ui,sans-serif;letter-spacing:.1em;text-transform:uppercase;margin:0">Vow · AI Wedding Planning</p></div>`,
          }),
        }),
      ]);
    }

    return NextResponse.json({ success: true });
  } catch {
    // Always return success so the UI never breaks
    return NextResponse.json({ success: true });
  }
}
