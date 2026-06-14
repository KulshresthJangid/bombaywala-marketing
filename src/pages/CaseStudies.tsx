import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/lib/config";
import { FadeInUp, FadeIn } from "@/components/shared/FadeInUp";
import SEO from "@/components/shared/SEO";

const EASE = [0.22, 1, 0.36, 1] as const;
const ALL_TAGS = ["All", "E-commerce", "Meta Ads", "SEO", "Lead Gen", "SMM", "Influencer", "Branding", "Event"];

export default function CaseStudies() {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? caseStudies : caseStudies.filter(cs => cs.tags.some(t => t === activeTag));

  return (
    <>
      <SEO
        title="Case Studies | Proven Results | Bombaywala Marketing Jaipur"
        description="Real campaign results from Bombaywala Marketing — 54x ROAS for Newturn Furniture, ₹10L revenue for DS Pet Care, 586 leads at ₹12 CPL for Renatus. Documented proof."
        canonical="/case-studies"
      />
      <section className="pg-hero">
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-script)", fontSize: "28vw", fontWeight: 700, color: "rgba(255,85,0,0.022)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>proof.</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Case Studies</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1.5rem", fontStyle: "italic" }}>
              Real Brands. Real Results.
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", maxWidth: "480px" }}>Documented proof from live campaigns — ROAS, revenue, leads, orders.</p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 7rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Filter pills */}
          <FadeIn style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {ALL_TAGS.map(tag => (
                <button key={tag} onClick={() => setActiveTag(tag)} style={{ padding: "0.4rem 1rem", fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", border: "1px solid", borderColor: activeTag === tag ? "hsl(var(--orange))" : "rgba(255,255,255,0.12)", background: activeTag === tag ? "hsl(var(--orange))" : "transparent", color: activeTag === tag ? "#fff" : "hsl(var(--muted-foreground))", cursor: "pointer", borderRadius: "9999px", transition: "all 0.2s" }}>
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div key={activeTag} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35, ease: EASE }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
                {filtered.map(cs => (
                  <div key={cs.id} className="metric-card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "hsl(var(--foreground))", fontStyle: "italic" }}>{cs.client}</div>
                    <span className="tag-pill">{cs.industry}</span>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, color: "hsl(var(--orange))", lineHeight: 1.1, fontStyle: "italic" }}>{cs.result}</div>
                    <p style={{ fontSize: "0.8rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>{cs.challenge}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      {cs.metrics.map(m => (
                        <div key={m.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", padding: "0.35rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                          <span style={{ color: "hsl(var(--muted-foreground))" }}>{m.label}</span>
                          <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "auto" }}>
                      {cs.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
