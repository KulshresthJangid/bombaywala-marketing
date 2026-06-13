import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { marketingServices, caseStudies } from "@/lib/config";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/shared/FadeInUp";
import { StaggerGrid, StaggerItem } from "@/components/shared/StaggerGrid";

export const metadata: Metadata = {
  title: "Best E-Commerce Marketing Services in Jaipur | Bombaywala Marketing",
  description:
    "Full-funnel ecommerce marketing in Jaipur — Meta Ads, Google Shopping, SEO, email automation, marketplace management on Amazon, Flipkart & Meesho. 200+ orders/month delivered.",
  alternates: { canonical: "https://bombaywalamarketing.com/services/ecommerce-marketing" },
  openGraph: {
    title: "Best E-Commerce Marketing Services in Jaipur | Bombaywala Marketing",
    description: "Scale your online store with ROI-focused ecommerce marketing. Shopify, WooCommerce, Amazon, Flipkart experts in Jaipur.",
    type: "website",
  },
};

const service = marketingServices.find((s) => s.id === "ecommerce-marketing")!;

const relatedCaseStudies = caseStudies.filter((cs) =>
  cs.tags.some((t) => ["E-commerce", "Meta Ads", "SEO"].includes(t))
);

const process = [
  { title: "Store Audit", desc: "We analyse your current store, funnel, traffic, and conversion rate." },
  { title: "Strategy Blueprint", desc: "Full-funnel plan: channels, audiences, budget allocation, content calendar." },
  { title: "Campaign Launch", desc: "Ads live, SEO on, email flows triggered — all within week one." },
  { title: "Optimise & Scale", desc: "Weekly data review, A/B testing, budget reallocation for max ROAS." },
  { title: "Monthly Report", desc: "Transparent report: what we spent, what it returned, what's next." },
];

export default function EcommerceMarketingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          padding: "120px 1.5rem 80px",
          background: "var(--color-bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,85,0,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="hero-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <FadeInLeft>
            <span className="overline">Marketing Services</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                marginTop: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              {service.title}
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-orange)",
                fontWeight: 600,
                marginBottom: "1rem",
                lineHeight: 1.4,
              }}
            >
              {service.tagline}
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              {service.description}
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-orange">
                Get a Free Audit
              </Link>
              <Link href="/case-studies" className="btn-outline-orange">
                See Case Studies
              </Link>
            </div>
          </FadeInLeft>

          <FadeInRight>
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                padding: "2rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange))",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "var(--color-orange-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ShoppingCart size={18} color="var(--color-orange)" />
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    lineHeight: 1.3,
                  }}
                >
                  First results in {service.timeline?.replace("First results in ", "") || "15–45 days"}
                </div>
              </div>

              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  marginBottom: "0.75rem",
                }}
              >
                What&apos;s Included
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {service.subServices.map((sub) => (
                  <li
                    key={sub}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      fontSize: "0.82rem",
                      color: "var(--color-text-muted)",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    <span style={{ color: "var(--color-orange)", fontSize: "0.75rem", flexShrink: 0 }}>✓</span>
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInRight>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────── */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="overline">Our Process</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 800,
                marginTop: "0.75rem",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
              }}
            >
              How We Drive E-Commerce Growth
            </h2>
          </FadeInUp>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {process.map((step, i) => (
              <FadeInUp key={step.title} delay={i * 0.07}>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    padding: "1.75rem 0",
                    borderBottom: "1px solid var(--color-border)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 900,
                      color: "var(--color-orange)",
                      opacity: 0.5,
                      lineHeight: 1,
                      flexShrink: 0,
                      width: "40px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {step.title}
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Case Studies ─────────────────────── */}
      {relatedCaseStudies.length > 0 && (
        <section style={{ padding: "6rem 1.5rem", background: "var(--color-bg)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <FadeInUp style={{ marginBottom: "3rem" }}>
              <span className="overline">Proof It Works</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  marginTop: "0.75rem",
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                }}
              >
                E-Commerce Results
              </h2>
            </FadeInUp>

            <StaggerGrid
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {relatedCaseStudies.slice(0, 3).map((cs) => (
                <StaggerItem key={cs.id}>
                  <div className="metric-card" style={{ display: "flex", flexDirection: "column", gap: "1rem", height: "100%" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.3rem" }}>
                        {cs.client}
                      </div>
                      <span className="tag-pill">{cs.industry}</span>
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "var(--color-orange)", lineHeight: 1.2 }}>
                      {cs.result}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "auto" }}>
                      {cs.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <FadeInUp style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/case-studies" className="btn-outline-orange">
                View All Case Studies
              </Link>
            </FadeInUp>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Your Store Next</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                margin: "0.75rem 0 1rem",
              }}
            >
              Ready to Scale Your Store?
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Free consultation. No commitments. Just a candid look at what&apos;s possible for your brand.
            </p>
            <Link href="/contact" className="btn-orange">
              Get Free Consultation
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
