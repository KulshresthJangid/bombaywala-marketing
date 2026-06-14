import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { marketingServices } from "@/lib/config";
import { FadeInUp } from "@/components/shared/FadeInUp";
import { Button } from "@/components/ui/button";
import PageSEO from "@/components/shared/SEO";

const smo = marketingServices.find(s => s.id === "smo")!;

const howItHelps = [
  { title: "Zero Ad Spend Required", body: "Organic growth through content, hashtags, and community — no recurring ad budget needed." },
  { title: "Compounds Over Time", body: "Unlike paid ads that stop the moment you pause, SMO builds momentum that accelerates month over month." },
  { title: "Boosts Paid Ad Performance", body: "A well-optimised profile increases trust signals, reducing your cost-per-click when you do run ads." },
  { title: "Improves Search Visibility", body: "Social signals feed into Google's algorithm. Strong SMO supports your SEO in parallel." },
];

export default function SMO() {
  return (
    <>
      <PageSEO
        title="Social Media Optimization (SMO) in Jaipur | Bombaywala Marketing"
        description="Organic social media growth through profile optimisation, hashtag strategy, community building & SEO-integrated content. Grow your reach without burning ad budget."
        canonical="/services/smo"
      />
      <section className="pg-hero">
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-script)", fontSize: "28vw", fontWeight: 700, color: "rgba(255,85,0,0.022)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>grow.</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Social Media Optimization</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1rem", fontStyle: "italic" }}>
              Organic Growth<br />That Compounds.
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", maxWidth: "480px" }}>{smo.description}</p>
            </div>
            <Button asChild variant="orange" size="lg" className="rounded-full">
              <Link to="/contact">Get Your Profile Audited <ArrowRight size={14} /></Link>
            </Button>
          </FadeInUp>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: "6rem 1.5rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3rem" }}>
            <span className="overline">Deliverables</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>What We Optimise</h2>
          </FadeInUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {smo.subServices.map((s, i) => (
              <FadeInUp key={s} delay={i * 0.08}>
                <div className="metric-card" style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <Check size={14} color="hsl(var(--orange))" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9rem", color: "hsl(var(--foreground))", fontWeight: 500 }}>{s}</span>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why SMO */}
      <section style={{ padding: "6rem 1.5rem", background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3rem" }}>
            <span className="overline">Why It Matters</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>The SMO Advantage</h2>
          </FadeInUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {howItHelps.map((h, i) => (
              <FadeInUp key={h.title} delay={i * 0.1}>
                <div className="metric-card">
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "hsl(var(--foreground))", fontStyle: "italic", marginBottom: "0.625rem" }}>{h.title}</div>
                  <p style={{ fontSize: "0.8rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.7 }}>{h.body}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem", background: "hsl(var(--background))", textAlign: "center" }}>
        <FadeInUp>
          <span className="overline" style={{ marginBottom: "1rem", display: "block" }}>Timeline: {smo.timeline}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "hsl(var(--foreground))", marginBottom: "1.5rem", fontStyle: "italic" }}>Build Reach Without Burning Budget</h2>
          <Button asChild variant="orange" size="xl" className="rounded-full">
            <Link to="/contact">Start Optimising <ArrowRight size={14} /></Link>
          </Button>
        </FadeInUp>
      </section>
    </>
  );
}
