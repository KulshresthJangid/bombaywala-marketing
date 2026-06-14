import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { marketingServices, caseStudies } from "@/lib/config";
import { FadeInUp } from "@/components/shared/FadeInUp";
import { Button } from "@/components/ui/button";
import PageSEO from "@/components/shared/SEO";

const seo = marketingServices.find(s => s.id === "seo")!;
const relevant = caseStudies.filter(c => c.tags.some(t => t === "SEO")).slice(0, 3);

const process = [
  { step: "01", title: "Audit & Analyse", body: "Deep technical and content audit of your website, competitor gap analysis, and keyword opportunity mapping." },
  { step: "02", title: "On-Page & Technical Fix", body: "Fix crawl errors, improve Core Web Vitals, optimize titles/meta/schema, and structure internal linking." },
  { step: "03", title: "Authority Building", body: "Earn high-DA backlinks through outreach, digital PR, and content partnerships. No PBNs, ever." },
  { step: "04", title: "Content That Ranks", body: "SEO-focused blog posts, service pages, and landing pages written to capture high-intent search traffic." },
  { step: "05", title: "Track & Compound", body: "Monthly rank tracking reports. Adjust and double-down on what's working to compound gains over time." },
];

export default function SEO() {
  return (
    <>
      <PageSEO
        title="Best SEO Services in Jaipur | Rank on Page 1 | Bombaywala Marketing"
        description="White-hat SEO services in Jaipur — on-page, technical, local SEO & link building. We ranked DS Pet Care for 25+ keywords driving ₹9L in organic revenue. Get a free SEO audit."
        canonical="/services/seo"
      />
      <section className="pg-hero">
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-script)", fontSize: "28vw", fontWeight: 700, color: "rgba(255,85,0,0.022)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>seo.</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Search Engine Optimisation</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1rem", fontStyle: "italic" }}>
              Rank Higher.<br />Get Found. Grow.
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", maxWidth: "480px" }}>{seo.description}</p>
            </div>
            <Button asChild variant="orange" size="lg" className="rounded-full">
              <Link to="/contact">Get a Free SEO Audit <ArrowRight size={14} /></Link>
            </Button>
          </FadeInUp>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: "6rem 1.5rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3rem" }}>
            <span className="overline">What's Included</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>Full-Spectrum SEO</h2>
          </FadeInUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {seo.subServices.map((s, i) => (
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

      {/* Process */}
      <section style={{ padding: "6rem 1.5rem", background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3rem" }}>
            <span className="overline">Our Process</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>How We Rank You</h2>
          </FadeInUp>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {process.map((p, i) => (
              <FadeInUp key={p.step} delay={i * 0.07}>
                <div className="metric-card" style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "1.5rem", alignItems: "start" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "rgba(255,85,0,0.25)", fontStyle: "italic", lineHeight: 1 }}>{p.step}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "hsl(var(--foreground))", fontStyle: "italic", marginBottom: "0.4rem" }}>{p.title}</div>
                    <p style={{ fontSize: "0.82rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.7 }}>{p.body}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {relevant.length > 0 && (
        <section style={{ padding: "6rem 1.5rem", background: "hsl(var(--background))" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <FadeInUp style={{ marginBottom: "3rem" }}>
              <span className="overline">Proof</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>SEO Results We've Delivered</h2>
            </FadeInUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {relevant.map((cs, i) => (
                <FadeInUp key={cs.id} delay={i * 0.1}>
                  <div className="liquid-glass metric-card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "hsl(var(--foreground))", fontStyle: "italic" }}>{cs.client}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", color: "hsl(var(--orange))", fontStyle: "italic" }}>{cs.result}</div>
                    <p style={{ fontSize: "0.78rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>{cs.challenge}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: "6rem 1.5rem", background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
        <FadeInUp>
          <span className="overline" style={{ marginBottom: "1rem", display: "block" }}>Timeline: {seo.timeline}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "hsl(var(--foreground))", marginBottom: "1.5rem", fontStyle: "italic" }}>Ready to Rank on Page 1?</h2>
          <Button asChild variant="orange" size="xl" className="rounded-full">
            <Link to="/contact">Start Your SEO Journey <ArrowRight size={14} /></Link>
          </Button>
        </FadeInUp>
      </section>
    </>
  );
}
