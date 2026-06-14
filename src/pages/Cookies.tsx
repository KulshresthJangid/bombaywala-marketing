import { FadeInUp } from "@/components/shared/FadeInUp";
import { siteConfig } from "@/lib/config";
import SEO from "@/components/shared/SEO";

const cookieTypes = [
  { name: "Essential Cookies", desc: "Required for the website to function. Cannot be disabled. These do not store any personally identifiable information." },
  { name: "Analytics Cookies", desc: "Used to understand how visitors interact with our site (e.g. Google Analytics). All data is anonymised. You can opt out via your browser settings or tools like Google Analytics Opt-out." },
  { name: "Marketing Cookies", desc: "Used to show relevant ads on platforms like Meta (Facebook/Instagram). You can opt out via your ad platform privacy settings." },
];

export default function Cookies() {
  return (
    <>
      <SEO title="Cookie Policy | Bombaywala Marketing" description="Cookie Policy for Bombaywala Marketing — how we use cookies and how to manage them." canonical="/cookies" noIndex />
      <section className="pg-hero">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Legal</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1rem", fontStyle: "italic" }}>Cookie Policy</h1>
            <p style={{ fontSize: "0.8rem", color: "hsl(var(--muted-foreground))" }}>Last updated: June 2026 &nbsp;·&nbsp; {siteConfig.legalName}</p>
          </FadeInUp>
        </div>
      </section>
      <section style={{ padding: "4rem 1.5rem 7rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <FadeInUp>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "hsl(var(--foreground))", fontStyle: "italic", marginBottom: "0.75rem" }}>What Are Cookies?</h2>
            <p style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.85 }}>Cookies are small text files placed on your device when you visit a website. They help the site remember information about your visit, making it more useful and easier to use again.</p>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "hsl(var(--foreground))", fontStyle: "italic", marginBottom: "1.25rem" }}>Types of Cookies We Use</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {cookieTypes.map((c) => (
                <div key={c.name} className="metric-card" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "hsl(var(--foreground))", fontStyle: "italic" }}>{c.name}</div>
                  <p style={{ fontSize: "0.82rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.75 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "hsl(var(--foreground))", fontStyle: "italic", marginBottom: "0.75rem" }}>Managing Cookies</h2>
            <p style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.85 }}>You can control and delete cookies via your browser settings. Disabling cookies may affect some features of this website. Most browsers also allow you to see what cookies have been set and delete them on a cookie-by-cookie basis.</p>
          </FadeInUp>
          <FadeInUp delay={0.12}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "hsl(var(--foreground))", fontStyle: "italic", marginBottom: "0.75rem" }}>Contact</h2>
            <p style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.85 }}>If you have questions about our use of cookies, contact us at {siteConfig.contact.email}.</p>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
