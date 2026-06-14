import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { marketingServices } from "@/lib/config";
import { FadeInUp } from "@/components/shared/FadeInUp";
import { Button } from "@/components/ui/button";
import PageSEO from "@/components/shared/SEO";

const allServices = marketingServices;

export default function Marketing() {
  return (
    <>
      <PageSEO
        title="Digital Marketing Services in Jaipur | Bombaywala Marketing"
        description="Complete digital marketing services in Jaipur — SEO, PPC, social media marketing, influencer campaigns, product photography and more. One agency for all your marketing needs."
        canonical="/services/marketing"
      />
      <section className="pg-hero">
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-script)", fontSize: "28vw", fontWeight: 700, color: "rgba(255,85,0,0.022)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>market.</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Digital Marketing Services</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1rem", fontStyle: "italic" }}>
              Every Channel.<br />One Team.
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", maxWidth: "480px" }}>
                From performance ads to influencer partnerships and product photography — we are the only marketing team your brand will ever need.
              </p>
            </div>
            <Button asChild variant="orange" size="lg" className="rounded-full">
              <Link to="/contact">Talk to a Strategist <ArrowRight size={14} /></Link>
            </Button>
          </FadeInUp>
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem 7rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3.5rem" }}>
            <span className="overline">Our Marketing Services</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>The Full Stack of Growth</h2>
          </FadeInUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {allServices.map((svc, i) => (
              <FadeInUp key={svc.id} delay={i * 0.07}>
                <div className="liquid-glass metric-card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "hsl(var(--foreground))", fontStyle: "italic" }}>{svc.title}</div>
                    <div style={{ fontSize: "0.72rem", color: "hsl(var(--orange))", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.3rem" }}>{svc.tagline}</div>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>{svc.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {svc.subServices.slice(0, 3).map(sub => (
                      <div key={sub} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                        <Check size={12} color="hsl(var(--orange))" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: "0.78rem", color: "hsl(var(--muted-foreground))" }}>{sub}</span>
                      </div>
                    ))}
                    {svc.subServices.length > 3 && <span style={{ fontSize: "0.72rem", color: "hsl(var(--orange))", fontWeight: 600 }}>+{svc.subServices.length - 3} more</span>}
                  </div>
                  {"timeline" in svc && <div style={{ marginTop: "auto", fontSize: "0.68rem", color: "hsl(var(--muted-foreground))", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "0.75rem" }}>{svc.timeline}</div>}
                </div>
              </FadeInUp>
            ))}
          </div>
          <FadeInUp style={{ marginTop: "4rem", textAlign: "center" }}>
            <Button asChild variant="orange" size="xl" className="rounded-full">
              <Link to="/contact">Get a Custom Quote <ArrowRight size={14} /></Link>
            </Button>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
