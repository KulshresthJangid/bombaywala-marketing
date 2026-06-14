import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { marketingServices, caseStudies } from "@/lib/config";
import { FadeInUp } from "@/components/shared/FadeInUp";
import { Button } from "@/components/ui/button";
import PageSEO from "@/components/shared/SEO";

const ecom = marketingServices.find(s => s.id === "ecommerce-marketing")!;
const relevant = caseStudies.filter(c => c.tags.some(t => t === "E-commerce" || t === "Shopify")).slice(0, 4);

export default function EcommerceMarketing() {
  return (
    <>
      <PageSEO
        title="Best E-Commerce Marketing Services in Jaipur | Bombaywala Marketing"
        description="Full-funnel e-commerce marketing in Jaipur — SEO, Meta Ads, email automation, marketplace management. Scaled Siddhohum to 200+ orders/month and Diya Seating to 40x ROAS consistently."
        canonical="/services/ecommerce-marketing"
      />
      <section className="pg-hero">
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-script)", fontSize: "28vw", fontWeight: 700, color: "rgba(255,85,0,0.022)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>ecom.</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">E-Commerce Marketing</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1rem", fontStyle: "italic" }}>
              Full-Funnel Growth<br />for Your Store.
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", maxWidth: "480px" }}>{ecom.description}</p>
            </div>
            <Button asChild variant="orange" size="lg" className="rounded-full">
              <Link to="/contact">Scale My Store <ArrowRight size={14} /></Link>
            </Button>
          </FadeInUp>
        </div>
      </section>

      {/* Proof strip */}
      <section style={{ padding: "4rem 1.5rem", background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "2rem" }}>
            {[{ v: "200+", l: "Orders in Month 2 (Siddhohum)" }, { v: "40x+", l: "Consistent ROAS (Diya Seating)" }, { v: "54x", l: "Peak ROAS (Newturn Furniture)" }, { v: "₹10L+", l: "Revenue Tracked via Ads + SEO" }].map((s, i) => (
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
            <span className="overline">What's Included</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>Everything Your Store Needs</h2>
          </FadeInUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {ecom.subServices.map((s, i) => (
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
              <span className="overline">Proven Results</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>Stores We've Scaled</h2>
            </FadeInUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {relevant.map((cs, i) => (
                <FadeInUp key={cs.id} delay={i * 0.1}>
                  <div className="liquid-glass metric-card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "hsl(var(--foreground))", fontStyle: "italic" }}>{cs.client}</div>
                    <span className="tag-pill">{cs.industry}</span>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "hsl(var(--orange))", fontStyle: "italic" }}>{cs.result}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginTop: "0.5rem" }}>
                      {cs.metrics.map(m => (
                        <div key={m.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", padding: "0.3rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                          <span style={{ color: "hsl(var(--muted-foreground))" }}>{m.label}</span>
                          <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: "6rem 1.5rem", background: "hsl(var(--background))", textAlign: "center" }}>
        <FadeInUp>
          <span className="overline" style={{ marginBottom: "1rem", display: "block" }}>Timeline: {ecom.timeline}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "hsl(var(--foreground))", marginBottom: "1.5rem", fontStyle: "italic" }}>Ready to Scale Your Store?</h2>
          <Button asChild variant="orange" size="xl" className="rounded-full">
            <Link to="/contact">Book a Free Growth Call <ArrowRight size={14} /></Link>
          </Button>
        </FadeInUp>
      </section>
    </>
  );
}
