import { FadeInUp } from "@/components/shared/FadeInUp";
import { siteConfig } from "@/lib/config";
import SEO from "@/components/shared/SEO";

const sections = [
  { title: "Information We Collect", body: "We collect information you provide directly, such as name, email, phone number, and company name when you fill out our contact form or book a call. We may also collect data automatically through cookies and analytics tools (e.g. Google Analytics) including IP address, browser type, pages visited, and session duration." },
  { title: "How We Use Your Information", body: "We use your information to respond to enquiries, deliver our marketing services, improve our website, and send you relevant updates (only if you have consented). We do not sell, rent, or trade your personal information to third parties." },
  { title: "Cookies", body: "Our website uses cookies to improve your experience and analyse site traffic. You can control cookies through your browser settings. See our Cookie Policy for details." },
  { title: "Data Retention", body: "We retain personal data only as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form enquiries are typically retained for 12 months." },
  { title: "Third-Party Services", body: "We use trusted third-party tools including Google Analytics, Meta Pixel, and email providers. These services have their own privacy policies. We are not responsible for their data practices." },
  { title: "Your Rights", body: "You have the right to access, correct, or delete the personal data we hold about you. To exercise these rights, contact us at bombaywalamarketing@gmail.com." },
  { title: "Security", body: "We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure." },
  { title: "Changes to This Policy", body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date." },
  { title: "Contact", body: `If you have any questions about this Privacy Policy, email us at ${siteConfig.contact.email} or write to us at ${siteConfig.contact.address}.` },
];

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy | Bombaywala Marketing" description="Privacy Policy for Bombaywala Marketing — how we collect, use and protect your data." canonical="/privacy" noIndex />
      <section className="pg-hero">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Legal</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1rem", fontStyle: "italic" }}>Privacy Policy</h1>
            <p style={{ fontSize: "0.8rem", color: "hsl(var(--muted-foreground))" }}>Last updated: June 2026 &nbsp;·&nbsp; {siteConfig.legalName}</p>
          </FadeInUp>
        </div>
      </section>
      <section style={{ padding: "4rem 1.5rem 7rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {sections.map((s, i) => (
            <FadeInUp key={s.title} delay={i * 0.04}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "hsl(var(--foreground))", fontStyle: "italic", marginBottom: "0.75rem" }}>{s.title}</h2>
              <p style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.85 }}>{s.body}</p>
            </FadeInUp>
          ))}
        </div>
      </section>
    </>
  );
}
