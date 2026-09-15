import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const FROM_ADDRESS = "noreply@bombaywalamarketing.com";
const TO_ADDRESS = "bombaywalamarketing@gmail.com";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = (req.body ?? {}) as ContactPayload;
  const { name, email, phone, company, service, budget, message } = body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[Contact Form] RESEND_API_KEY is not set — cannot deliver message.", { name, email });
    return res.status(500).json({ error: "Contact form isn't configured yet. Please reach us directly at " + TO_ADDRESS + "." });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Bombaywala Marketing Website <${FROM_ADDRESS}>`,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `New Contact Enquiry — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
        <p><strong>Service Needed:</strong> ${escapeHtml(service || "—")}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || "—")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("[Contact Form] Resend error:", error);
      return res.status(502).json({ error: "Email delivery failed. Please try again or call us directly." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("[Contact Form] Unexpected error:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again or call us directly." });
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
