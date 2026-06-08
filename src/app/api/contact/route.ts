import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "Bombaywala Contact <noreply@bombaywalamarketing.com>",
        to: ["bombaywalamarketing@gmail.com"],
        subject: `New Enquiry from ${name}${service ? ` — ${service}` : ""}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #FF5500; border-bottom: 2px solid #FF5500; padding-bottom: 8px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
              ${service ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Service</td><td style="padding: 8px 0;">${service}</td></tr>` : ""}
              ${budget ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Budget</td><td style="padding: 8px 0;">${budget}</td></tr>` : ""}
            </table>
            <div style="margin-top: 16px;">
              <div style="font-weight: bold; color: #555; margin-bottom: 8px;">Message</div>
              <div style="background: #f5f5f5; padding: 12px; border-left: 3px solid #FF5500; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #999;">
              Submitted via bombaywalamarketing.com
            </p>
          </div>
        `,
      });
    } else {
      console.log("[Contact Form Submission]", { name, email, phone, service, budget, message });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
