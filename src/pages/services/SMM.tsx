import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { marketingServices, caseStudies } from "@/lib/config";
import { FadeInUp } from "@/components/shared/FadeInUp";
import { Button } from "@/components/ui/button";
import PageSEO from "@/components/shared/SEO";

const smm = marketingServices.find(s => s.id === "smm")!;
const relevant = caseStudies.filter(c => c.tags.some(t => t === "SMM" || t === "Influencer" || t === "Branding")).slice(0, 3);

export default function SMM() {
  return (
    <>
      <PageSEO
        title="Best Social Media Marketing Services in Jaipur | Bombaywala Marketing"
        description="Social media marketing agency in Jaipur — Reels, carousels, influencer campaigns & paid social. Grew Tanya Dance to 18K Facebook followers and 400K+ reach. Real enquiries, not just likes."
        canonical="/services/smm"
      />
      <section className="pg-hero">
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-script)", fontSize: "28vw", fontWeight: 700, color: "rgba(255,85,0,0.022)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>social.</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Social Media Marketing</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1rem", fontStyle: "italic" }}>
              Real Enquiries,<br />Not Just Likes.
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", maxWidth: "480px" }}>{smm.description}</p>
            </div>
            <Button asChild variant="orange" size="lg" className="rounded-full">
              <Link to="/contact">Get a Social Media Audit <ArrowRight size={14} /></Link>
            </Button>
          </FadeInUp>
        </div>
      </section>

      {/* Proof stat */}
      <section style={{ padding: "4rem 1.5rem", background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "2rem" }}>
            {[{ v: "18K", l: "Facebook Followers (Tanya Dance)" }, { v: "400K+", l: "Social Reach" }, { v: "100K+", l: "Views Per Reel" }, { v: "1K→5.5K", l: "Instagram Follower Growth" }].map((s, i) => (
              <FadeInUp key={s.l} delay={i * 0.1} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "hsl(var(--orange))", fontStyle: "italic" }}>{s.v}</div>
                <div style={{ fontSize: "0.68rem", color: "hsl(var(--muted-foreground))", marginTop: "0.35rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.l}</div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "6rem 1.5rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3rem" }}>
            <span className="overline">What We Handle</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>End-to-End Social Media</h2>
          </FadeInUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {smm.subServices.map((s, i) => (
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

      {/* Case Studies */}
      {relevant.length > 0 && (
        <section style={{ padding: "6rem 1.5rem", background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <FadeInUp style={{ marginBottom: "3rem" }}>
              <span className="overline">Proof</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>Social Media Wins</h2>
            </FadeInUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {relevant.map((cs, i) => (
                <FadeInUp key={cs.id} delay={i * 0.1}>
                  <div className="liquid-glass metric-card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "hsl(var(--foreground))", fontStyle: "italic" }}>{cs.client}</div>
                    <span className="tag-pill">{cs.industry}</span>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "hsl(var(--orange))", fontStyle: "italic" }}>{cs.result}</div>
                    <p style={{ fontSize: "0.78rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>{cs.challenge}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: "6rem 1.5rem", background: "hsl(var(--background))", textAlign: "center" }}>
        <FadeInUp>
          <span className="overline" style={{ marginBottom: "1rem", display: "block" }}>Timeline: {smm.timeline}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "hsl(var(--foreground))", marginBottom: "1.5rem", fontStyle: "italic" }}>Grow Your Social Presence</h2>
          <Button asChild variant="orange" size="xl" className="rounded-full">
            <Link to="/contact">Start Growing Today <ArrowRight size={14} /></Link>
          </Button>
        </FadeInUp>
      </section>
    </>
  );
}
