import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { marketingServices, caseStudies } from "@/lib/config";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/shared/FadeInUp";
import { StaggerGrid, StaggerItem } from "@/components/shared/StaggerGrid";

export const metadata: Metadata = {
  title: "SEO Services",
  description:
    "White-hat SEO that ranks you on page 1. We ranked DS Pet for 25+ keywords and drove ₹9L in organic revenue.",
};

const service = marketingServices.find((s) => s.id === "seo")!;
const relatedCS = caseStudies.filter((cs) => cs.tags.includes("SEO")).slice(0, 3);

const seoComponents = [
  { title: "Technical SEO Audit", desc: "Site speed, indexation, crawlability, schema markup, Core Web Vitals — the foundation of rankings." },
  { title: "On-Page Optimization", desc: "Title tags, meta descriptions, heading structure, internal linking — every page optimised to rank." },
  { title: "Keyword Research", desc: "Commercial-intent keywords for your niche — mapped to pages, not just stuffed into content." },
  { title: "Content Strategy", desc: "SEO content that ranks and converts — blog posts, category pages, and product descriptions." },
  { title: "Local SEO", desc: "Google Business Profile optimization, local citations, and map pack domination for Jaipur and beyond." },
  { title: "Link Building", desc: "White-hat outreach and editorial links that build domain authority sustainably." },
];

export default function SEOPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section style={{ padding: "120px 1.5rem 80px", background: "var(--color-bg)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,85,0,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <FadeInLeft>
            <span className="overline">Marketing Services</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--color-text)", marginTop: "0.75rem", marginBottom: "1.25rem" }}>
              {service.title}
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--color-orange)", fontWeight: 600, marginBottom: "1rem" }}>{service.tagline}</p>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "2.5rem" }}>{service.description}</p>

            {/* Key stats */}
            <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              {[{ v: "₹9L", l: "Organic Revenue (DS Pet)" }, { v: "25+", l: "Keywords Ranked" }, { v: "10x", l: "ROAS via SEO" }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "var(--color-orange)", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: "0.68rem", color: "var(--color-muted)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "0.2rem" }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-orange">Get a Free SEO Audit</Link>
              <Link href="/case-studies" className="btn-outline-orange">See Results</Link>
            </div>
          </FadeInLeft>

          <FadeInRight>
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", padding: "2rem", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange))" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "40px", height: "40px", background: "var(--color-orange-muted)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Search size={18} color="var(--color-orange)" />
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

      {/* ── SEO Components ───────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="overline">The SEO Framework</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "var(--color-text)" }}>
              Page 1, Every Time
            </h2>
          </FadeInUp>
          <StaggerGrid style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {seoComponents.map((c, i) => (
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

      {/* ── Case Studies ─────────────────────────────── */}
      {relatedCS.length > 0 && (
        <section style={{ padding: "6rem 1.5rem", background: "var(--color-bg)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <FadeInUp style={{ marginBottom: "3rem" }}>
              <span className="overline">SEO Results</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "var(--color-text)" }}>
                Rankings That Drive Revenue
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
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                      {cs.metrics.slice(0, 3).map((m, i) => (
                        <div key={m.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", padding: "0.3rem 0", borderBottom: "1px solid var(--color-border)" }}>
                          <span style={{ color: "var(--color-muted)" }}>{m.label}</span>
                          <span style={{ color: "var(--color-text)", fontWeight: 600 }}>{m.value}</span>
                        </div>
                      ))}
                    </div>
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
            <span className="overline">Rank Higher</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--color-text)", margin: "0.75rem 0 1rem" }}>
              Stop Paying for Every Click
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Free SEO audit — we&apos;ll show you which keywords you should be ranking for and why you aren&apos;t.
            </p>
            <Link href="/contact" className="btn-orange">Get Free SEO Audit</Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
