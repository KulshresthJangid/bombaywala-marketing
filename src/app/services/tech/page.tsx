import type { Metadata } from "next";
import Link from "next/link";
import { Store, Globe, Smartphone, Wrench, Code2 } from "lucide-react";
import { techServices } from "@/lib/config";
import { FadeInUp, FadeIn } from "@/components/shared/FadeInUp";
import { StaggerGrid, StaggerItem } from "@/components/shared/StaggerGrid";

export const metadata: Metadata = {
  title: "Website Design & Development Services in Jaipur | Shopify | Bombaywala Marketing",
  description:
    "Best website design services in Jaipur — Shopify development, WooCommerce, custom web & app development, landing pages and website redesign. Fast, mobile-friendly, SEO-optimised websites.",
  alternates: { canonical: "https://bombaywalamarketing.com/services/tech" },
  openGraph: {
    title: "Website Design & Development in Jaipur | Bombaywala Marketing",
    description: "Custom websites, Shopify stores and apps built for conversion. Expert web development team in Jaipur.",
    type: "website",
  },
};

const iconMap: Record<string, React.ElementType> = { Store, Globe, Smartphone, Wrench, Code2 };

const techHighlights = [
  { num: "200+", label: "Orders via Shopify store" },
  { num: "7–15", label: "Days delivery SLA" },
  { num: "5", label: "Tech service categories" },
  { num: "₹0", label: "Hidden setup fees" },
];

export default function TechServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          padding: "120px 1.5rem 60px",
          background: "var(--color-bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,180,255,0.04) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Tech Services</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                marginTop: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              Build. Launch.{" "}
              <span style={{ color: "var(--color-orange)" }}>Scale.</span>
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                maxWidth: "540px",
                marginBottom: "3rem",
              }}
            >
              From Shopify stores that hit 200+ orders to custom apps and maintenance retainers — we handle
              your complete tech stack so you can focus on growth.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem 3rem", borderTop: "1px solid var(--color-border)", paddingTop: "2rem" }}>
              {techHighlights.map((h) => (
                <div key={h.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--color-orange)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {h.num}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--color-muted)", fontWeight: 600, marginTop: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────── */}
      <section style={{ padding: "3rem 1.5rem 6rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <StaggerGrid
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {techServices.map((service) => {
              const Icon = iconMap[service.icon] || Store;
              return (
                <StaggerItem key={service.id}>
                  <div
                    className="metric-card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--color-orange-muted)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={22} color="var(--color-orange)" />
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "var(--color-text)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {service.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--color-orange)",
                          fontWeight: 600,
                          marginBottom: "0.75rem",
                        }}
                      >
                        {service.tagline}
                      </div>
                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--color-text-muted)",
                          lineHeight: 1.65,
                        }}
                      >
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-muted)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        What&apos;s Included
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        {service.features.map((f) => (
                          <li
                            key={f}
                            style={{
                              fontSize: "0.78rem",
                              color: "var(--color-text-muted)",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                            }}
                          >
                            <span style={{ color: "var(--color-orange)", fontSize: "0.7rem", flexShrink: 0 }}>✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="btn-outline-orange"
                      style={{ marginTop: "auto", fontSize: "0.72rem", padding: "0.6rem 1.25rem", textAlign: "center", justifyContent: "center" }}
                    >
                      Get a Quote
                    </Link>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
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
            <span className="overline">How It Works</span>
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
              From Brief to Live
            </h2>
          </FadeInUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "2rem",
              position: "relative",
            }}
          >
            {[
              { step: "01", title: "Discovery Call", desc: "We understand your requirements, goals, and timeline." },
              { step: "02", title: "Proposal & Scope", desc: "Clear deliverables, milestones, and fixed pricing — no surprises." },
              { step: "03", title: "Design & Build", desc: "We execute fast with regular progress updates." },
              { step: "04", title: "Test & Launch", desc: "Thorough QA before go-live. Handover with full documentation." },
              { step: "05", title: "Support", desc: "Post-launch support and optional maintenance retainer." },
            ].map((s, i) => (
              <FadeInUp key={s.step} delay={i * 0.08}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: "var(--color-border)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.step}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    {s.title}
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "var(--color-bg)",
          textAlign: "center",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Start Building</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                margin: "0.75rem 0 1rem",
              }}
            >
              Tell Us What You Need
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Fixed pricing, transparent scope, fast delivery. No agency fluff.
            </p>
            <Link href="/contact" className="btn-orange">
              Get a Free Quote
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
