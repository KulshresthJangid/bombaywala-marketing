import { FadeInUp } from "@/components/shared/FadeInUp";
import { siteConfig } from "@/lib/config";
import SEO from "@/components/shared/SEO";

const sections = [
  { title: "Acceptance of Terms", body: "By accessing this website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website." },
  { title: "Services", body: "Bombaywala Marketing provides digital marketing, technology, and creative services as described on our website. Specific service deliverables, timelines, and fees are agreed upon in individual client agreements or proposals." },
  { title: "Intellectual Property", body: "All content on this website — including text, logos, images, and design — is the property of Tushita Bombaywala Marketing LLP and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without express written permission." },
  { title: "Client Work", body: "Upon full payment, clients receive the agreed deliverables. We retain the right to showcase client work as part of our portfolio unless otherwise agreed in writing. Source files and third-party assets are governed by their respective licences." },
  { title: "Payments", body: "Fees for services are as quoted in proposals. We typically require a 50% advance before project commencement. Delayed payments may result in paused service delivery. Retainer agreements auto-renew unless cancelled with 15 days' written notice." },
  { title: "Limitation of Liability", body: "Bombaywala Marketing is not liable for any indirect, incidental, or consequential damages arising from use of our services. Our maximum liability is limited to the fees paid for the specific service in question." },
  { title: "Confidentiality", body: "Both parties agree to keep confidential any proprietary information shared during the engagement. This does not apply to information that is publicly available or independently developed." },
  { title: "Governing Law", body: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Jaipur, Rajasthan." },
  { title: "Changes", body: "We may update these Terms at any time. Continued use of our services following changes constitutes acceptance of the revised Terms." },
  { title: "Contact", body: `For any questions regarding these Terms, please contact us at ${siteConfig.contact.email}.` },
];

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service | Bombaywala Marketing" description="Terms of Service for Bombaywala Marketing — Tushita Bombaywala Marketing LLP, Jaipur." canonical="/terms" noIndex />
      <section className="pg-hero">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Legal</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1rem", fontStyle: "italic" }}>Terms of Service</h1>
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
