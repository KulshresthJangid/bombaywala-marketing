import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for Bombaywala Marketing services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By engaging Tushita Bombaywala Marketing LLP ('Bombaywala Marketing', 'we', 'us') for any services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "2. Services",
    content:
      "Bombaywala Marketing provides digital marketing services including but not limited to: paid advertising (Meta, Google), social media marketing and optimization, search engine optimization (SEO), influencer marketing, product photography, and technology services (Shopify development, website development, app development, maintenance). Specific deliverables, timelines, and fees are outlined in individual service agreements or proposals.",
  },
  {
    title: "3. Payment Terms",
    content:
      "Payment terms are specified in individual service agreements. Unless otherwise agreed, monthly retainer fees are due in advance at the start of each billing period. Project-based work may require a deposit before commencement. Late payments may result in suspension of services.",
  },
  {
    title: "4. Client Responsibilities",
    content:
      "Clients are responsible for providing accurate information, timely approvals, and access to necessary accounts and assets. Delays caused by the client's failure to provide required inputs may affect delivery timelines, for which Bombaywala Marketing shall not be liable.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "Upon full payment, creative assets produced specifically for a client become the property of that client. Pre-existing tools, methodologies, templates, and processes remain the property of Bombaywala Marketing. Third-party assets (stock images, licensed fonts, etc.) are subject to their respective licences.",
  },
  {
    title: "6. Confidentiality",
    content:
      "Both parties agree to keep confidential any proprietary information shared during the engagement. This includes business strategies, financial data, and campaign performance data, unless disclosure is required by law.",
  },
  {
    title: "7. Results & Guarantees",
    content:
      "Digital marketing results depend on many factors including platform algorithms, market conditions, and client-side actions. While we commit to industry-best practices and transparent reporting, we do not guarantee specific outcomes (ROAS, revenue, follower counts, rankings) unless explicitly stated in a written agreement.",
  },
  {
    title: "8. Termination",
    content:
      "Either party may terminate a service agreement with 30 days' written notice unless otherwise specified. Fees paid for work already completed are non-refundable. Ongoing retainers require notice before the next billing cycle to avoid charges.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "Bombaywala Marketing's total liability for any claim arising from services shall not exceed the fees paid by the client in the three months preceding the claim. We are not liable for indirect, incidental, or consequential damages.",
  },
  {
    title: "10. Governing Law",
    content:
      "These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Jaipur, Rajasthan.",
  },
  {
    title: "11. Changes to Terms",
    content:
      "We may update these terms from time to time. Continued engagement with our services following any update constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <section
      style={{
        padding: "120px 1.5rem 6rem",
        background: "var(--color-bg)",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <span className="overline">Legal</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
              marginTop: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            Terms of Service
          </h1>
          <p style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>
            Effective date: January 2025 · {siteConfig.legalName}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {sections.map((s) => (
            <div key={s.title}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.75,
                  borderLeft: "2px solid var(--color-border-light)",
                  paddingLeft: "1.25rem",
                }}
              >
                {s.content}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--color-border)",
            fontSize: "0.82rem",
            color: "var(--color-muted)",
          }}
        >
          For questions about these terms, contact us at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            style={{ color: "var(--color-orange)", textDecoration: "none" }}
          >
            {siteConfig.contact.email}
          </a>
          .
        </div>
      </div>
    </section>
  );
}
