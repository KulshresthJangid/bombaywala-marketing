import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Bombaywala Marketing uses cookies on its website.",
};

const cookieTypes = [
  {
    type: "Strictly Necessary",
    purpose: "Required for the website to function. These cannot be disabled.",
    examples: "Session state, security tokens, preference memory.",
    canOptOut: false,
  },
  {
    type: "Analytics",
    purpose: "Help us understand how visitors use the site so we can improve it.",
    examples: "Google Analytics (page views, traffic sources, device type).",
    canOptOut: true,
  },
  {
    type: "Marketing",
    purpose: "Used to deliver relevant ads and track campaign performance.",
    examples: "Meta Pixel, Google Ads conversion tracking.",
    canOptOut: true,
  },
];

export default function CookiesPage() {
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
            Cookie Policy
          </h1>
          <p style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>
            Effective date: January 2025 · {siteConfig.legalName}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.75rem" }}>
              What Are Cookies?
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.75, borderLeft: "2px solid var(--color-border-light)", paddingLeft: "1.25rem" }}>
              Cookies are small text files placed on your device when you visit a website. They help websites
              remember your preferences, understand how you use them, and deliver relevant content.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "1.25rem" }}>
              Types of Cookies We Use
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {cookieTypes.map((c) => (
                <div
                  key={c.type}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    padding: "1.25rem 1.5rem",
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: "1.5rem",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.35rem" }}>
                      {c.type}
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.5rem",
                        background: c.canOptOut ? "var(--color-surface-2)" : "var(--color-orange-muted)",
                        color: c.canOptOut ? "var(--color-muted)" : "var(--color-orange)",
                        border: `1px solid ${c.canOptOut ? "var(--color-border-light)" : "rgba(255,85,0,0.3)"}`,
                      }}
                    >
                      {c.canOptOut ? "Optional" : "Required"}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "0.5rem" }}>
                      {c.purpose}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
                      <strong style={{ color: "var(--color-text-muted)" }}>Examples: </strong>
                      {c.examples}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.75rem" }}>
              How to Control Cookies
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.75, borderLeft: "2px solid var(--color-border-light)", paddingLeft: "1.25rem" }}>
              You can manage or delete cookies through your browser settings. Most browsers allow you to refuse
              new cookies, delete existing cookies, and set preferences for specific websites. Note that
              disabling certain cookies may affect website functionality. For instructions, visit your browser&apos;s
              help documentation.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.75rem" }}>
              Third-Party Cookies
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.75, borderLeft: "2px solid var(--color-border-light)", paddingLeft: "1.25rem" }}>
              Some cookies are set by third-party services we use (Google Analytics, Meta Pixel). These are
              governed by the respective third parties&apos; privacy policies, not ours.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.75rem" }}>
              Updates to This Policy
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.75, borderLeft: "2px solid var(--color-border-light)", paddingLeft: "1.25rem" }}>
              We may update this Cookie Policy as our practices evolve. The effective date above reflects the
              latest revision.
            </p>
          </div>
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
          Questions? Email us at{" "}
          <a href={`mailto:${siteConfig.contact.email}`} style={{ color: "var(--color-orange)", textDecoration: "none" }}>
            {siteConfig.contact.email}
          </a>
          .
        </div>
      </div>
    </section>
  );
}
