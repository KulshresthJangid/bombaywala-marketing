import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  TrendingUp,
  Share2,
  Zap,
  Search,
  Users,
  Camera,
} from "lucide-react";
import { marketingServices } from "@/lib/config";
import { FadeInUp, FadeIn } from "@/components/shared/FadeInUp";
import { StaggerGrid, StaggerItem } from "@/components/shared/StaggerGrid";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Jaipur | Bombaywala Marketing",
  description:
    "Complete digital marketing services in Jaipur — ecommerce growth, PPC, SEO, social media marketing, influencer marketing and product photography. Performance-first, ROI-focused strategies.",
  alternates: { canonical: "https://bombaywalamarketing.com/services/marketing" },
  openGraph: {
    title: "Digital Marketing Services in Jaipur | Bombaywala Marketing",
    description: "Jaipur's performance-first digital marketing agency. PPC, SEO, SMM, ecommerce and more — all under one roof.",
    type: "website",
  },
};

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  TrendingUp,
  Share2,
  Zap,
  Search,
  Users,
  Camera,
};

const highlights = [
  { num: "54x", label: "Peak ROAS (Meta Ads)" },
  { num: "₹10L+", label: "Revenue via SEO" },
  { num: "400K+", label: "Social Reach Built" },
  { num: "1,500+", label: "Leads Generated" },
];

export default function MarketingServicesPage() {
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
            top: "-100px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,85,0,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Marketing Services</span>
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
              Marketing That{" "}
              <span style={{ color: "var(--color-orange)" }}>Compounds</span>
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
              Seven services, one goal — measurable growth for your brand. Every strategy is built on data,
              every decision backed by the results we&apos;ve already delivered.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem 3rem", borderTop: "1px solid var(--color-border)", paddingTop: "2rem" }}>
              {highlights.map((h) => (
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

      {/* ── Services Grid ─────────────────────────────── */}
      <section style={{ padding: "3rem 1.5rem 6rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <StaggerGrid style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {marketingServices.map((service, i) => {
              const Icon = iconMap[service.icon] || ShoppingCart;
              return (
                <StaggerItem key={service.id}>
                  <div className="metric-card service-row">
                    {/* Icon + number */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", paddingTop: "0.25rem" }}>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          background: "var(--color-orange-muted)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={22} color="var(--color-orange)" />
                      </div>
                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 800,
                          color: "var(--color-muted-2)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "var(--color-text)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {service.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--color-orange)",
                          fontWeight: 600,
                          marginBottom: "0.75rem",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {service.tagline}
                      </div>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--color-text-muted)",
                          lineHeight: 1.65,
                          marginBottom: "1rem",
                          maxWidth: "520px",
                        }}
                      >
                        {service.description}
                      </p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {service.subServices.map((sub) => (
                          <span key={sub} className="tag-pill">{sub}</span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "flex-end", flexShrink: 0 }}>
                      <Link href={service.slug} className="btn-orange" style={{ fontSize: "0.72rem", padding: "0.625rem 1.25rem", whiteSpace: "nowrap" }}>
                        Learn More
                      </Link>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          color: "var(--color-muted)",
                          textAlign: "right",
                          lineHeight: 1.4,
                        }}
                      >
                        {service.timeline}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Ready to Start?</span>
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
              Get a Free Marketing Audit
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              We&apos;ll review your current setup and tell you exactly where you&apos;re leaving money on the table.
            </p>
            <Link href="/contact" className="btn-orange">
              Get Free Audit
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
