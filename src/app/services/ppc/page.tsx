import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { marketingServices, caseStudies } from "@/lib/config";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/shared/FadeInUp";
import { StaggerGrid, StaggerItem } from "@/components/shared/StaggerGrid";

export const metadata: Metadata = {
  title: "PPC Services in Jaipur | Google Ads & Meta Ads | Bombaywala Marketing",
  description:
    "Performance-driven PPC services in Jaipur. Google Ads, Meta Ads, remarketing and landing page optimisation. 54x ROAS delivered for Newturn Furniture. Book a free strategy call.",
  alternates: { canonical: "https://bombaywalamarketing.com/services/ppc" },
  openGraph: {
    title: "PPC Services in Jaipur | Bombaywala Marketing",
    description: "Certified Google Ads experts in Jaipur. Instant leads, transparent reporting, keyword-optimised campaigns.",
    type: "website",
  },
};

const service = marketingServices.find((s) => s.id === "ppc")!;
const relatedCS = caseStudies.filter((cs) => cs.tags.includes("Meta Ads")).slice(0, 3);

const adPlatforms = [
  { name: "Google Search Ads", desc: "Capture high-intent buyers exactly when they search." },
  { name: "Meta (Facebook & Instagram)", desc: "Reach, retarget, and convert with India's largest social network." },
  { name: "Google Shopping", desc: "Product listings that appear right at the moment of purchase intent." },
  { name: "YouTube Ads", desc: "Brand awareness and product demos that drive action." },
  { name: "Performance Max", desc: "AI-driven campaigns across all Google channels in one." },
  { name: "Remarketing", desc: "Win back cart abandoners and warm audiences at scale." },
];

export default function PPCPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          padding: "120px 1.5rem 80px",
          background: "var(--color-bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,85,0,0.05) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="hero-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <FadeInLeft>
            <span className="overline">Marketing Services</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                marginTop: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              {service.title}
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--color-orange)", fontWeight: 600, marginBottom: "1rem", lineHeight: 1.4 }}>
              {service.tagline}
            </p>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              {service.description}
            </p>

            {/* Key stat */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.5rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                padding: "1.25rem 1.75rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 900, color: "var(--color-orange)", lineHeight: 1, letterSpacing: "-0.03em" }}>54x</div>
                <div style={{ fontSize: "0.65rem", color: "var(--color-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "0.2rem" }}>Peak ROAS Delivered</div>
              </div>
              <div style={{ width: "1px", height: "40px", background: "var(--color-border)" }} />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 900, color: "var(--color-orange)", lineHeight: 1, letterSpacing: "-0.03em" }}>₹12</div>
                <div style={{ fontSize: "0.65rem", color: "var(--color-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "0.2rem" }}>Cost Per Lead (Renatus)</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-orange">Start a Campaign</Link>
              <Link href="/case-studies" className="btn-outline-orange">See Results</Link>
            </div>
          </FadeInLeft>

          <FadeInRight>
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", padding: "2rem", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange))" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "40px", height: "40px", background: "var(--color-orange-muted)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <TrendingUp size={18} color="var(--color-orange)" />
                </div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-text)" }}>
                  {service.timeline}
                </div>
              </div>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.75rem" }}>
                Campaign Types
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {service.subServices.map((sub) => (
                  <li key={sub} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.82rem", color: "var(--color-text-muted)", paddingBottom: "0.5rem", borderBottom: "1px solid var(--color-border)" }}>
                    <span style={{ color: "var(--color-orange)", fontSize: "0.75rem", flexShrink: 0 }}>✓</span>
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInRight>
        </div>
      </section>

      {/* ── Platforms ────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="overline">Platforms We Manage</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "var(--color-text)" }}>
              Every Channel, Fully Managed
            </h2>
          </FadeInUp>
          <StaggerGrid style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {adPlatforms.map((p) => (
              <StaggerItem key={p.name}>
                <div className="metric-card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--color-text)" }}>{p.name}</div>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────── */}
      {relatedCS.length > 0 && (
        <section style={{ padding: "6rem 1.5rem", background: "var(--color-bg)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <FadeInUp style={{ marginBottom: "3rem" }}>
              <span className="overline">Real Results</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "var(--color-text)" }}>
                PPC Campaigns That Delivered
              </h2>
            </FadeInUp>
            <StaggerGrid style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {relatedCS.map((cs) => (
                <StaggerItem key={cs.id}>
                  <div className="metric-card" style={{ display: "flex", flexDirection: "column", gap: "1rem", height: "100%" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.3rem" }}>{cs.client}</div>
                      <span className="tag-pill">{cs.industry}</span>
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "var(--color-orange)", lineHeight: 1.2 }}>{cs.result}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "auto" }}>
                      {cs.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", textAlign: "center" }}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Launch Your Campaign</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--color-text)", margin: "0.75rem 0 1rem" }}>
              Your Budget Works Harder Here
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Free campaign audit — we&apos;ll show you where your current ads are bleeding budget.
            </p>
            <Link href="/contact" className="btn-orange">Get Free Ad Audit</Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
