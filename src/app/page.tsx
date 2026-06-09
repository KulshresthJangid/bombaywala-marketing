"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ShoppingCart, TrendingUp, Share2, Zap, Search, Users,
  Camera, Store, Globe, Smartphone, Wrench, Code2, ArrowRight,
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
  ShoppingCart, TrendingUp, Share2, Zap, Search, Users,
  Camera, Store, Globe, Smartphone, Wrench, Code2,
};

export default function HomePage() {
  const [statIdx, setStatIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"marketing" | "tech">("marketing");

  const { scrollY } = useScroll();
  const rawBgY = useTransform(scrollY, [0, 900], [0, -220]);
  const rawWatermarkY = useTransform(scrollY, [0, 900], [0, -150]);
  const rawContentY = useTransform(scrollY, [0, 900], [0, -55]);
  const bgGlowY = useSpring(rawBgY, { stiffness: 80, damping: 20 });
  const watermarkY = useSpring(rawWatermarkY, { stiffness: 80, damping: 20 });
  const contentY = useSpring(rawContentY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStatIdx((i) => (i + 1) % rotatingStats.length);
    }, 2800);
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
          padding: "130px 1.5rem 90px",
          background: "var(--color-bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Parallax background glow — far layer */}
        <motion.div
          style={{
            y: bgGlowY,
            position: "absolute",
            top: "10%",
            left: "-15%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,85,0,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          style={{
            y: bgGlowY,
            position: "absolute",
            bottom: "5%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(197,155,60,0.04) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Parallax script watermark — mid layer */}
        <motion.div
          style={{
            y: watermarkY,
            position: "absolute",
            top: "-8%",
            right: "-5%",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "52vw",
              fontWeight: 700,
              color: "rgba(255, 85, 0, 0.026)",
              lineHeight: 1,
              display: "block",
            }}
          >
            bw
          </span>
        </motion.div>

        {/* Hero content — foreground layer */}
        <motion.div
          style={{
            y: contentY,
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="hero-grid">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}
              >
                <span className="orange-rule" />
                <span className="overline">Jaipur&apos;s Performance-First Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.75rem, 6vw, 5rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.75rem",
                  color: "var(--color-text)",
                }}
              >
                We Don&apos;t Do Marketing.{" "}
                <br />
                <em style={{ color: "var(--color-orange)", fontStyle: "italic" }}>We Drive Results.</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
                style={{
                  fontSize: "1.05rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.75,
                  maxWidth: "460px",
                  marginBottom: "2.75rem",
                }}
              >
                {siteConfig.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
                style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
              >
                <Link href="/case-studies" className="btn-orange">
                  See Our Results <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="btn-outline-orange">
                  Get a Quote
                </Link>
              </motion.div>
            </div>

            {/* Right — rotating stat card */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border-light)",
                  padding: "3rem 3.5rem",
                  textAlign: "center",
                  position: "relative",
                  minWidth: "280px",
                  boxShadow: "0 40px 120px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                    background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange), var(--color-gold))",
                  }}
                />
                <div
                  style={{
                    fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "1.25rem",
                  }}
                >
                  Real Client Results
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={statIdx}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "4.5rem",
                        fontWeight: 700,
                        color: "var(--color-orange)",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        fontStyle: "italic",
                      }}
                    >
                      {rotatingStats[statIdx].number}
                    </div>
                    <div
                      style={{
                        fontSize: "0.825rem", color: "var(--color-text-muted)",
                        marginTop: "0.875rem", lineHeight: 1.5,
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {rotatingStats[statIdx].label}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", marginTop: "1.75rem" }}>
                  {rotatingStats.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setStatIdx(i)}
                      style={{
                        width: i === statIdx ? "24px" : "6px",
                        height: "2px",
                        borderRadius: "2px",
                        background: i === statIdx ? "var(--color-orange)" : "var(--color-border-light)",
                        border: "none", cursor: "pointer",
                        transition: "width 0.35s, background 0.35s",
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Results Ticker ────────────────────────────── */}
      <ResultsTicker />

      {/* ── Services Grid ─────────────────────────────── */}
      <section style={{ padding: "7rem 1.5rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="overline">What We Do</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  marginTop: "0.875rem",
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                  fontStyle: "italic",
                }}
              >
                Services Built for Growth
              </h2>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}>
                <span className="orange-rule" />
              </div>
            </div>
          </FadeInUp>

          {/* Tabs */}
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "center", gap: "0", marginBottom: "3rem" }}>
              {(["marketing", "tech"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "0.75rem 2rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    border: "1px solid",
                    borderColor: activeTab === tab ? "var(--color-orange)" : "var(--color-border-light)",
                    background: activeTab === tab ? "var(--color-orange)" : "transparent",
                    color: activeTab === tab ? "#fff" : "var(--color-muted)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                >
                  {tab === "marketing" ? "Marketing" : "Tech & Dev"}
                </button>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: EASE }}
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
                  const href = activeTab === "marketing"
                    ? (service as typeof marketingServices[0]).slug
                    : "/services/tech";
                  return (
                    <StaggerItem key={service.id}>
                      <div
                        className="metric-card"
                        style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1.25rem" }}
                      >
                        <div
                          style={{
                            width: "48px", height: "48px",
                            background: "var(--color-orange-muted)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}
                        >
                          <Icon size={20} color="var(--color-orange)" />
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "1.1rem",
                              fontWeight: 600,
                              color: "var(--color-text)",
                              marginBottom: "0.4rem",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {service.title}
                          </div>
                          <div style={{ fontSize: "0.8rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                            {activeTab === "marketing"
                              ? (service as typeof marketingServices[0]).tagline
                              : (service as typeof techServices[0]).tagline}
                          </div>
                        </div>
                        <Link
                          href={href}
                          style={{
                            marginTop: "auto",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "var(--color-orange)",
                            textDecoration: "none",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          Learn More <ArrowRight size={12} />
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
          padding: "7rem 1.5rem",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background script */}
        <div
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-script)",
            fontSize: "40vw", fontWeight: 700,
            color: "rgba(255, 85, 0, 0.018)",
            lineHeight: 1, pointerEvents: "none", userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          results.
        </div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="overline">By The Numbers</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                marginTop: "0.875rem",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                fontStyle: "italic",
              }}
            >
              Results That Compound
            </h2>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}>
              <span className="orange-rule" />
            </div>
          </FadeInUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "3rem 2rem",
            }}
          >
            {siteConfig.stats.map((stat) => (
              <CountUpStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Case Studies ─────────────────────── */}
      <section style={{ padding: "7rem 1.5rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3.5rem" }}>
            <span className="overline">Case Studies</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                marginTop: "0.875rem",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                fontStyle: "italic",
              }}
            >
              Real Brands. Real Results.
            </h2>
            <div style={{ marginTop: "1.25rem" }}>
              <span className="orange-rule" />
            </div>
          </FadeInUp>

          <StaggerGrid
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featuredCaseStudies.map((cs) => (
              <StaggerItem key={cs.id}>
                <div
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    padding: "2.25rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    transition: "border-color 0.35s, box-shadow 0.35s, transform 0.35s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,85,0,0.5)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 80px rgba(255,85,0,0.1)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.transform = "none";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cs.client}
                  </div>
                  <span className="tag-pill">{cs.industry}</span>

                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "var(--color-orange)",
                      lineHeight: 1.1,
                      fontStyle: "italic",
                    }}
                  >
                    {cs.result}
                  </div>

                  <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                    {cs.challenge}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    {cs.metrics.slice(0, 3).map((m) => (
                      <div
                        key={m.label}
                        style={{
                          display: "flex", justifyContent: "space-between",
                          fontSize: "0.75rem", padding: "0.35rem 0",
                          borderBottom: "1px solid var(--color-border)",
                        }}
                      >
                        <span style={{ color: "var(--color-muted)" }}>{m.label}</span>
                        <span style={{ color: "var(--color-text)", fontWeight: 600 }}>{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "auto" }}>
                    {cs.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeIn style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/case-studies" className="btn-outline-orange">
              View All Case Studies <ArrowRight size={14} />
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
          <FadeInUp style={{ textAlign: "center", marginBottom: "2.75rem" }}>
            <span className="overline">Trusted By</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                fontWeight: 600,
                marginTop: "0.75rem",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                fontStyle: "italic",
              }}
            >
              Brands That Trusted Us
            </h2>
          </FadeInUp>

          <FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {clients.map((client) => (
                <span
                  key={client}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border-light)",
                    padding: "0.5rem 1.25rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.06em",
                    transition: "border-color 0.2s, color 0.2s",
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
      <section style={{ padding: "7rem 1.5rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="overline">Testimonials</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                marginTop: "0.875rem",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                fontStyle: "italic",
              }}
            >
              What Our Clients Say
            </h2>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}>
              <span className="orange-rule" />
            </div>
          </FadeInUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t, i) => (
              <FadeInUp key={t.client} delay={i * 0.1}>
                <div
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    padding: "2.25rem",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-script)",
                      fontSize: "3.5rem",
                      fontWeight: 400,
                      color: "var(--color-orange)",
                      lineHeight: 0.8,
                      marginBottom: "1.25rem",
                      opacity: 0.7,
                    }}
                  >
                    &ldquo;
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.75,
                      marginBottom: "1.5rem",
                      fontStyle: "italic",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {t.quote}
                  </p>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-text)", fontFamily: "var(--font-display)" }}>
                      {t.client}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>{t.industry}</div>
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
          padding: "8rem 1.5rem",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px", height: "500px",
            background: "radial-gradient(ellipse, rgba(255,85,0,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        {/* Decorative script */}
        <div
          style={{
            position: "absolute", bottom: "-5%", right: "-2%",
            fontFamily: "var(--font-script)", fontSize: "22vw", fontWeight: 700,
            color: "rgba(255,85,0,0.025)", lineHeight: 1,
            pointerEvents: "none", userSelect: "none",
          }}
        >
          scale.
        </div>

        <div style={{ position: "relative", maxWidth: "640px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="script-label" style={{ display: "block", marginBottom: "1rem" }}>
              Ready to Scale?
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                margin: "0 0 1.5rem",
                fontStyle: "italic",
              }}
            >
              Ready to Scale Your Brand?
            </h2>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}>
              <span className="orange-rule" />
            </div>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.75,
                marginBottom: "3rem",
              }}
            >
              Join brands like Newturn, DS Pet, and Siddhohum who scaled with us. Let&apos;s build your success story.
            </p>
            <Link href="/contact" className="btn-orange" style={{ fontSize: "0.8rem", padding: "1.1rem 2.75rem" }}>
              Get A Free Consultation <ArrowRight size={14} />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
