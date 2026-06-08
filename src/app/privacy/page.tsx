import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bombaywala Marketing collects, uses, and protects your data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "When you use our website or contact us, we may collect: name, email address, phone number, business name, and any information you voluntarily provide in forms or communications. We may also collect standard web analytics data (page views, referral sources, device type) through tools like Google Analytics.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use your information to: respond to enquiries and provide requested services; send updates relevant to your service engagement; improve our website and service offerings; comply with legal obligations. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Data Sharing",
    content:
      "We may share your data with trusted third-party service providers who assist in our operations (email delivery, analytics, payment processing), subject to confidentiality agreements. We do not share your data with unrelated third parties for marketing purposes without your consent.",
  },
  {
    title: "4. Cookies",
    content:
      "Our website uses cookies to improve user experience and analyse traffic. You may disable cookies in your browser settings, though this may affect functionality. See our Cookie Policy for more details.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, disclosure, or loss. However, no internet transmission is completely secure — we cannot guarantee absolute security.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting obligations. Client data is typically retained for 3 years after the end of an engagement unless otherwise required.",
  },
  {
    title: "7. Your Rights",
    content:
      "You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at the email below. We will respond within 30 days.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "We may update this Privacy Policy periodically. The effective date at the top of this page will reflect the most recent revision. Continued use of our services constitutes acceptance of any changes.",
  },
  {
    title: "10. Contact",
    content: `For privacy-related queries, write to: ${siteConfig.legalName}, ${siteConfig.contact.address}. Email: ${siteConfig.contact.email}`,
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>
            Effective date: January 2025 · {siteConfig.legalName}
          </p>
        </div>

        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.75,
            marginBottom: "3rem",
            padding: "1.25rem 1.5rem",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderLeft: "3px solid var(--color-orange)",
          }}
        >
          Tushita Bombaywala Marketing LLP is committed to protecting your privacy. This policy explains how
          we collect, use, and safeguard your personal information.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
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
          Questions? Contact us at{" "}
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
