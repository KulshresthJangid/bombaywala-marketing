import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";
import { marketingServices } from "@/lib/config";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/shared/FadeInUp";
import { StaggerGrid, StaggerItem } from "@/components/shared/StaggerGrid";

export const metadata: Metadata = {
  title: "Social Media Optimization",
  description:
    "Profile optimization, hashtag strategy, SEO-integrated content, and community building to grow your organic reach without burning ad budget.",
};

const service = marketingServices.find((s) => s.id === "smo")!;

const smoComponents = [
  { title: "Profile Audit & Optimization", desc: "Bio, highlights, links, and brand voice — everything aligned to convert profile visitors." },
  { title: "Content Strategy", desc: "Monthly content calendar with topics, formats, and posting frequency based on data." },
  { title: "Hashtag Research", desc: "Niche-specific hashtag clusters that expand reach beyond your current followers." },
  { title: "SEO Signal Integration", desc: "Instagram and LinkedIn posts optimized with search keywords for cross-platform discoverability." },
  { title: "Community Management", desc: "Replies, DMs, and comment strategy to build a loyal, engaged community." },
  { title: "Monthly Reporting", desc: "Reach, growth, engagement rate, and follower quality — every metric that matters." },
];

export default function SMOPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section style={{ padding: "120px 1.5rem 80px", background: "var(--color-bg)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,85,0,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="hero-grid" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInLeft>
            <span className="overline">Marketing Services</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--color-text)", marginTop: "0.75rem", marginBottom: "1.25rem" }}>
              {service.title}
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--color-orange)", fontWeight: 600, marginBottom: "1rem" }}>{service.tagline}</p>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "2.5rem" }}>{service.description}</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-orange">Get a Proposal</Link>
              <Link href="/case-studies" className="btn-outline-orange">See Results</Link>
            </div>
          </FadeInLeft>

          <FadeInRight>
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", padding: "2rem", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange))" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "40px", height: "40px", background: "var(--color-orange-muted)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Zap size={18} color="var(--color-orange)" />
                </div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-text)" }}>{service.timeline}</div>
              </div>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.75rem" }}>What&apos;s Included</div>
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

      {/* ── Components ───────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="overline">The SMO Framework</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "var(--color-text)" }}>
              Organic Growth That Compounds
            </h2>
          </FadeInUp>
          <StaggerGrid style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {smoComponents.map((c, i) => (
              <StaggerItem key={c.title}>
                <div className="metric-card" style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  <div style={{ width: "32px", height: "32px", background: "var(--color-orange-muted)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.8rem", color: "var(--color-orange)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--color-text)" }}>{c.title}</div>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--color-bg)", textAlign: "center", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Start Growing Organically</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--color-text)", margin: "0.75rem 0 1rem" }}>
              Grow Without the Ad Spend
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Free profile audit — we&apos;ll identify exactly what&apos;s holding your organic growth back.
            </p>
            <Link href="/contact" className="btn-orange">Get Free Profile Audit</Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
