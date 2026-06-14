import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { siteConfig, aboutContent } from "@/lib/config";
import { FadeInUp } from "@/components/shared/FadeInUp";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";

const team = [
  { name: "Tushita Bombaywala", role: "Founder & Lead Strategist", bio: "Performance marketing specialist with deep expertise in e-commerce scaling, paid media, and Jaipur's local market dynamics." },
  { name: "Creative Team",      role: "Content & Design",          bio: "Designers, videographers and content creators crafting brand stories that convert browsers into buyers." },
  { name: "Tech Team",          role: "Development & Automation",  bio: "Shopify experts, web developers and automation specialists building the digital infrastructure behind your growth." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Bombaywala Marketing | Digital Marketing Agency Jaipur"
        description="Meet the team behind Jaipur's fastest-growing performance marketing agency. Built on real results — 54x ROAS, ₹10L+ revenue, 1,500+ leads delivered."
        canonical="/about"
      />
      <section className="pg-hero">
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-script)", fontSize: "28vw", fontWeight: 700, color: "rgba(255,85,0,0.022)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>about.</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Our Story</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1.25rem", fontStyle: "italic" }}>
              Built on Results,<br />Not Promises.
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1.05rem", color: "hsl(var(--muted-foreground))", maxWidth: "520px", lineHeight: 1.75 }}>{aboutContent.story}</p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "5rem 1.5rem", background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="stats-grid">
            {siteConfig.stats.map(s => (
              <FadeInUp key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 400, color: "hsl(var(--orange))", fontStyle: "italic" }}>{s.value}{s.suffix}</div>
                <div style={{ fontSize: "0.72rem", color: "hsl(var(--muted-foreground))", marginTop: "0.4rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pg-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3.5rem" }}>
            <span className="overline">Our Values</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, marginTop: "0.875rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>What We Stand For</h2>
            <div style={{ marginTop: "1.25rem" }}><span className="orange-rule" /></div>
          </FadeInUp>
          <div className="cards-grid">
            {aboutContent.values.map((v, i) => (
              <FadeInUp key={v.title} delay={i * 0.1}>
                <div className="metric-card" style={{ height: "100%" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "hsl(var(--foreground))", marginBottom: "0.625rem" }}>{v.title}</div>
                  <p style={{ fontSize: "0.8rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.7 }}>{v.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pg-section-alt">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3.5rem" }}>
            <span className="overline">The Team</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, marginTop: "0.875rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>People Behind the Results</h2>
          </FadeInUp>
          <div className="cards-grid">
            {team.map((m, i) => (
              <FadeInUp key={m.name} delay={i * 0.1}>
                <div className="liquid-glass metric-card">
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "hsl(var(--foreground))", fontStyle: "italic" }}>{m.name}</div>
                  <div style={{ fontSize: "0.72rem", color: "hsl(var(--orange))", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0.4rem 0 0.75rem" }}>{m.role}</div>
                  <p style={{ fontSize: "0.8rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.7 }}>{m.bio}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pg-section" style={{ textAlign: "center" }}>
        <FadeInUp>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "hsl(var(--foreground))", marginBottom: "1.5rem", fontStyle: "italic" }}>Work With Us</h2>
          <Button asChild variant="orange" size="xl" className="rounded-full">
            <Link to="/contact">Start a Project <ArrowRight size={14} /></Link>
          </Button>
        </FadeInUp>
      </section>
    </>
  );
}
