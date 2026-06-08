"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  TrendingUp,
  Share2,
  Zap,
  Search,
  Users,
  Camera,
  Store,
  Globe,
  Smartphone,
  Wrench,
  Code2,
} from "lucide-react";
import { siteConfig, marketingServices, techServices, caseStudies, clients, testimonials } from "@/lib/config";
import ResultsTicker from "@/components/shared/ResultsTicker";
import { CountUpStat } from "@/components/shared/CountUp";
import { FadeInUp, FadeIn, FadeInLeft, FadeInRight } from "@/components/shared/FadeInUp";
import { StaggerGrid, StaggerItem } from "@/components/shared/StaggerGrid";

const EASE = [0.22, 1, 0.36, 1] as const;

const rotatingStats = [
  { number: "54x", label: "ROAS — Newturn Furniture" },
  { number: "₹10L", label: "Revenue — DS Pet Care" },
  { number: "586", label: "Leads @ ₹12 — Renatus" },
  { number: "200+", label: "Orders/Month — Siddhohum" },
];

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  TrendingUp,
  Share2,
  Zap,
  Search,
  Users,
  Camera,
  Store,
  Globe,
  Smartphone,
  Wrench,
  Code2,
};

export default function HomePage() {
  const [statIdx, setStatIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"marketing" | "tech">("marketing");

  useEffect(() => {
    const interval = setInterval(() => {
      setStatIdx((i) => (i + 1) % rotatingStats.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const featuredCaseStudies = caseStudies.filter((c) => c.featured);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 1.5rem 80px",
          background: "var(--color-bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,85,0,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ marginBottom: "1.25rem" }}
            >
              <span className="overline">Jaipur&apos;s Performance-First Agency</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                color: "var(--color-text)",
              }}
            >
              We Don&apos;t Do Marketing.{" "}
              <br />
              <span style={{ color: "var(--color-orange)" }}>We Drive Results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              style={{
                fontSize: "1.05rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "2.5rem",
              }}
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link href="/case-studies" className="btn-orange">
                See Our Results
              </Link>
              <Link href="/contact" className="btn-outline-orange">
                Get a Quote
              </Link>
            </motion.div>
          </div>

          {/* Right — rotating stat */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                padding: "3rem 3.5rem",
                textAlign: "center",
                position: "relative",
                minWidth: "280px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange), var(--color-orange-light))",
                }}
              />
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  marginBottom: "1rem",
                }}
              >
                Real Client Results
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={statIdx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "4rem",
                      fontWeight: 800,
                      color: "var(--color-orange)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {rotatingStats[statIdx].number}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                      marginTop: "0.75rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {rotatingStats[statIdx].label}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", marginTop: "1.5rem" }}>
                {rotatingStats.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setStatIdx(i)}
                    style={{
                      width: i === statIdx ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: i === statIdx ? "var(--color-orange)" : "var(--color-border-light)",
                      border: "none",
                      cursor: "pointer",
                      transition: "width 0.3s, background 0.3s",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Results Ticker ────────────────────────────── */}
      <ResultsTicker />

      {/* ── Services Grid ─────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="overline">What We Do</span>
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
                Services Built for Growth
              </h2>
            </div>
          </FadeInUp>

          {/* Tabs */}
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "2.5rem" }}>
              {(["marketing", "tech"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "0.625rem 1.5rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    border: "1.5px solid",
                    borderColor: activeTab === tab ? "var(--color-orange)" : "var(--color-border-light)",
                    background: activeTab === tab ? "var(--color-orange)" : "transparent",
                    color: activeTab === tab ? "#fff" : "var(--color-muted)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {tab === "marketing" ? "Marketing" : "Tech"}
                </button>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <StaggerGrid
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {(activeTab === "marketing" ? marketingServices : techServices).map((service) => {
                  const Icon = iconMap[service.icon] || ShoppingCart;
                  const href =
                    activeTab === "marketing"
                      ? (service as typeof marketingServices[0]).slug
                      : "/services/tech";
                  return (
                    <StaggerItem key={service.id}>
                      <div
                        className="metric-card"
                        style={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        <div
                          style={{
                            width: "44px",
                            height: "44px",
                            background: "var(--color-orange-muted)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon size={20} color="var(--color-orange)" />
                        </div>
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
                            {service.title}
                          </div>
                          <div
                            style={{
                              fontSize: "0.8rem",
                              color: "var(--color-muted)",
                              lineHeight: 1.6,
                            }}
                          >
                            {activeTab === "marketing"
                              ? (service as typeof marketingServices[0]).tagline
                              : (service as typeof techServices[0]).tagline}
                          </div>
                        </div>
                        <Link
                          href={href}
                          style={{
                            marginTop: "auto",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "var(--color-orange)",
                            textDecoration: "none",
                            letterSpacing: "0.04em",
                          }}
                        >
                          Learn More →
                        </Link>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerGrid>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── By The Numbers ────────────────────────────── */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="overline">By The Numbers</span>
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
              Results That Compound
            </h2>
          </FadeInUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "3rem 2rem",
            }}
          >
            {siteConfig.stats.map((stat) => (
              <CountUpStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Case Studies ─────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3rem" }}>
            <span className="overline">Case Studies</span>
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
              Real Brands. Real Results.
            </h2>
          </FadeInUp>

          <StaggerGrid
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featuredCaseStudies.map((cs) => (
              <StaggerItem key={cs.id}>
                <div
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    padding: "2rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-orange)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 24px rgba(255,85,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Client name + industry */}
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                      }}
                    >
                      {cs.client}
                    </div>
                    <span className="tag-pill" style={{ marginTop: "0.4rem" }}>{cs.industry}</span>
                  </div>

                  {/* Big result */}
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--color-orange)",
                      lineHeight: 1.2,
                    }}
                  >
                    {cs.result}
                  </div>

                  {/* Challenge */}
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {cs.challenge}
                  </p>

                  {/* Metrics */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    {cs.metrics.slice(0, 3).map((m) => (
                      <div
                        key={m.label}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.75rem",
                          padding: "0.3rem 0",
                          borderBottom: "1px solid var(--color-border)",
                        }}
                      >
                        <span style={{ color: "var(--color-muted)" }}>{m.label}</span>
                        <span style={{ color: "var(--color-text)", fontWeight: 600 }}>{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "auto" }}>
                    {cs.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeIn style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/case-studies" className="btn-outline-orange">
              View All Case Studies
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Clients Strip ─────────────────────────────── */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "var(--color-surface-2)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="overline">Trusted By</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 800,
                marginTop: "0.75rem",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
              }}
            >
              Brands That Trusted Us
            </h2>
          </FadeInUp>

          <FadeIn>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                justifyContent: "center",
              }}
            >
              {clients.map((client) => (
                <span
                  key={client}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border-light)",
                    padding: "0.5rem 1.1rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {client}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="overline">Testimonials</span>
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
              What Our Clients Say
            </h2>
          </FadeInUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t, i) => (
              <FadeInUp key={t.client} delay={i * 0.1}>
                <div
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    padding: "2rem",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "3rem",
                      fontWeight: 900,
                      color: "var(--color-orange)",
                      lineHeight: 0.8,
                      marginBottom: "1rem",
                      opacity: 0.8,
                    }}
                  >
                    &ldquo;
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                      fontStyle: "italic",
                    }}
                  >
                    {t.quote}
                  </p>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text)" }}>
                      {t.client}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>{t.industry}</div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(255,85,0,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Ready to Scale?</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                margin: "1rem 0 1.25rem",
              }}
            >
              Ready to Scale Your Brand?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Join brands like Newturn, DS Pet, and Siddhohum who scaled with us. Let&apos;s build your success story.
            </p>
            <Link href="/contact" className="btn-orange" style={{ fontSize: "0.85rem", padding: "1rem 2.5rem" }}>
              Get A Free Consultation
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
