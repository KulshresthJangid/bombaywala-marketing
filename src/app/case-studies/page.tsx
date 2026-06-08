"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/config";
import { FadeInUp, FadeIn } from "@/components/shared/FadeInUp";
import { StaggerGrid, StaggerItem } from "@/components/shared/StaggerGrid";

const EASE = [0.22, 1, 0.36, 1] as const;

const ALL_TAGS = ["All", "E-commerce", "Meta Ads", "SEO", "Lead Gen", "SMM", "Influencer", "Branding", "Event"];

export default function CaseStudiesPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.tags.some((t) => t === activeTag));

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
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,85,0,0.05) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Proven Track Record</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                marginTop: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              Real Brands.{" "}
              <span style={{ color: "var(--color-orange)" }}>Real Results.</span>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Every number below is from an actual client campaign — no projections, no inflated estimates.
              These are the results we delivered.
            </p>
          </FadeInUp>

          {/* Stats strip */}
          <FadeIn style={{ marginTop: "3rem" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem 3rem",
                borderTop: "1px solid var(--color-border)",
                paddingTop: "2rem",
              }}
            >
              {[
                { num: "54x", lbl: "Highest ROAS" },
                { num: "₹10L+", lbl: "Revenue Generated" },
                { num: "1,500+", lbl: "Qualified Leads" },
                { num: "400K+", lbl: "Social Reach" },
                { num: "11", lbl: "Case Studies" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--color-orange)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.num}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 600, marginTop: "0.2rem" }}>
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────── */}
      <section style={{ padding: "3rem 1.5rem 6rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Filter tabs */}
          <FadeIn style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  style={{
                    padding: "0.45rem 1rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    border: "1.5px solid",
                    borderColor: activeTag === tag ? "var(--color-orange)" : "var(--color-border-light)",
                    background: activeTag === tag ? "var(--color-orange)" : "transparent",
                    color: activeTag === tag ? "#fff" : "var(--color-muted)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <StaggerGrid
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {filtered.map((cs) => (
                  <StaggerItem key={cs.id}>
                    <div
                      className="metric-card"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.25rem",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Top accent */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background: cs.accentColor === "#00B4FF"
                            ? "var(--color-blue)"
                            : "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange))",
                        }}
                      />

                      {/* Header */}
                      <div style={{ paddingTop: "0.5rem" }}>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "var(--color-text)",
                            marginBottom: "0.35rem",
                          }}
                        >
                          {cs.client}
                        </div>
                        <span className="tag-pill">{cs.industry}</span>
                      </div>

                      {/* Big result number */}
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                          fontWeight: 800,
                          color: cs.accentColor === "#00B4FF" ? "var(--color-blue)" : "var(--color-orange)",
                          lineHeight: 1.2,
                        }}
                      >
                        {cs.result}
                      </div>

                      {/* Challenge */}
                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--color-text-muted)",
                          lineHeight: 1.65,
                        }}
                      >
                        <span style={{ fontWeight: 700, color: "var(--color-muted)" }}>Challenge: </span>
                        {cs.challenge}
                      </p>

                      {/* Metrics table */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        {cs.metrics.map((m, i) => (
                          <div
                            key={m.label}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "0.5rem 0.875rem",
                              background: i % 2 === 0 ? "transparent" : "var(--color-surface-2)",
                              gap: "1rem",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "0.72rem",
                                color: "var(--color-muted)",
                                fontWeight: 500,
                              }}
                            >
                              {m.label}
                            </span>
                            <span
                              style={{
                                fontSize: "0.8rem",
                                color: "var(--color-text)",
                                fontWeight: 700,
                                textAlign: "right",
                                flexShrink: 0,
                              }}
                            >
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Services + Tags */}
                      <div style={{ marginTop: "auto" }}>
                        <div
                          style={{
                            fontSize: "0.7rem",
                            color: "var(--color-muted)",
                            marginBottom: "0.5rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          Services Used
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                          {cs.services.map((s) => (
                            <span key={s} className="tag-pill">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(255,85,0,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "550px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Your Brand Next?</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                margin: "0.75rem 0 1rem",
              }}
            >
              Let&apos;s Build Your Success Story
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Every case study here started with a conversation. Let&apos;s have yours.
            </p>
            <a href="/contact" className="btn-orange">
              Get a Free Consultation
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
