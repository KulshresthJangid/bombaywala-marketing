import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { techServices } from "@/lib/config";
import { FadeInUp } from "@/components/shared/FadeInUp";
import { Button } from "@/components/ui/button";
import PageSEO from "@/components/shared/SEO";

export default function Tech() {
  return (
    <>
      <PageSEO
        title="Website & Shopify Development in Jaipur | Bombaywala Marketing"
        description="Website design, Shopify development, app development & tech maintenance in Jaipur. Built Siddhohum's Shopify store that hit 200+ orders in month two. Fast delivery, SEO-ready."
        canonical="/services/tech"
      />
      <section className="pg-hero">
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-script)", fontSize: "28vw", fontWeight: 700, color: "rgba(255,85,0,0.022)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>build.</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Technology Services</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1rem", fontStyle: "italic" }}>
              Websites. Stores.<br />Apps. Built to Perform.
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", maxWidth: "480px" }}>
                Full-stack development from Shopify stores that convert to React apps that scale. We build the infrastructure behind growth.
              </p>
            </div>
            <Button asChild variant="orange" size="lg" className="rounded-full">
              <Link to="/contact">Start a Project <ArrowRight size={14} /></Link>
            </Button>
          </FadeInUp>
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem 7rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3.5rem" }}>
            <span className="overline">Tech Stack</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>What We Build</h2>
          </FadeInUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {techServices.map((svc, i) => (
              <FadeInUp key={svc.id} delay={i * 0.09}>
                <div className="liquid-glass metric-card" style={{ display: "flex", flexDirection: "column", gap: "1rem", height: "100%" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "hsl(var(--foreground))", fontStyle: "italic" }}>{svc.title}</div>
                    <div style={{ fontSize: "0.72rem", color: "hsl(var(--orange))", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.3rem" }}>{svc.tagline}</div>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>{svc.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", marginTop: "auto" }}>
                    {svc.features.map(f => (
                      <div key={f} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                        <Check size={12} color="hsl(var(--orange))" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: "0.78rem", color: "hsl(var(--muted-foreground))" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp style={{ marginTop: "4rem" }}>
            <div className="liquid-glass metric-card" style={{ position: "relative", overflow: "hidden", textAlign: "center" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, hsl(var(--orange-dark)), hsl(var(--orange)), var(--gold))" }} />
              <div style={{ position: "absolute", bottom: "-10%", right: "-2%", fontFamily: "var(--font-script)", fontSize: "12rem", fontWeight: 700, color: "rgba(255,85,0,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>bw</div>
              <span className="overline" style={{ marginBottom: "0.75rem", display: "block" }}>Proof</span>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontStyle: "italic", color: "hsl(var(--foreground))", marginBottom: "0.5rem" }}>Siddhohum Shopify Store</p>
              <p style={{ fontSize: "0.85rem", color: "hsl(var(--muted-foreground))", maxWidth: "420px", margin: "0 auto 1.75rem" }}>Built from scratch — custom theme, product catalogue, payment gateway, and performance optimization. Hit 200+ orders in month two.</p>
              <Button asChild variant="orange" className="rounded-full">
                <Link to="/contact">Build My Store <ArrowRight size={14} /></Link>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
