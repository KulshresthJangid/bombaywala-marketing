import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, aboutContent, caseStudies } from "@/lib/config";
import { FadeInUp, FadeIn, FadeInLeft, FadeInRight } from "@/components/shared/FadeInUp";
import { StaggerGrid, StaggerItem } from "@/components/shared/StaggerGrid";

export const metadata: Metadata = {
  title: "About Bombaywala Marketing | Digital Marketing Agency Jaipur",
  description:
    "Bombaywala Marketing is Jaipur's performance-first digital marketing agency. Founded by Tushita Bombaywala — built on results, not promises. 54x ROAS, 586 leads at ₹12 CPL, ₹10L revenue.",
  alternates: { canonical: "https://bombaywalamarketing.com/about" },
  openGraph: {
    title: "About Bombaywala Marketing | Jaipur's Performance-First Agency",
    description: "Meet the team behind real results — Jaipur's most ROI-focused digital marketing agency.",
    type: "website",
  },
};

const team = [
  {
    name: "Tushita Bombaywala",
    role: "Founder & Lead Strategist",
    bio: "Performance marketer with deep expertise in e-commerce growth, Meta Ads, and full-funnel strategy. Built the agency from the ground up on one principle — every rupee should return more.",
  },
];

const milestones = [
  { year: "2022", event: "Founded in Jaipur, Rajasthan" },
  { year: "2023", event: "First ₹10L revenue campaign for DS Pet Care" },
  { year: "2023", event: "Delivered 54x ROAS for Newturn Furniture" },
  { year: "2024", event: "Tanya Dance School — 400K+ reach, IIT Roorkee collab" },
  { year: "2024", event: "Expanded into full-stack tech services" },
  { year: "2025", event: "17+ brands scaled across Rajasthan & beyond" },
];

export default function AboutPage() {
  const totalLeads = 1500;
  const totalRevenue = "₹10L+";

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
            bottom: "-50px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,85,0,0.05) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div className="hero-grid-5gap">
            <FadeInLeft>
              <span className="overline">Our Story</span>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                  marginTop: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                We Don&apos;t Run Campaigns.{" "}
                <span style={{ color: "var(--color-orange)" }}>We Build Engines.</span>
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              >
                {aboutContent.story}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.75,
                }}
              >
                What started as a performance marketing shop in Vaishali Nagar, Jaipur has grown into a
                full-service digital growth partner — handling everything from Meta Ads and SEO to Shopify
                builds, mobile apps, and custom tech.
              </p>
            </FadeInLeft>

            <FadeInRight>
              <div
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  padding: "2.5rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange), var(--color-orange-light))",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Our Mission
                </div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    borderLeft: "3px solid var(--color-orange)",
                    paddingLeft: "1.25rem",
                    marginBottom: "2rem",
                  }}
                >
                  &ldquo;{aboutContent.mission}&rdquo;
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                  }}
                >
                  {[
                    { v: "17+", l: "Brands Served" },
                    { v: "54x", l: "Peak ROAS" },
                    { v: totalRevenue, l: "Revenue Generated" },
                    { v: `${totalLeads}+`, l: "Leads Delivered" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.6rem",
                          fontWeight: 800,
                          color: "var(--color-orange)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1,
                        }}
                      >
                        {s.v}
                      </div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--color-muted)",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          marginTop: "0.25rem",
                        }}
                      >
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────── */}
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
            <span className="overline">What We Stand For</span>
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
              Our Core Values
            </h2>
          </FadeInUp>

          <StaggerGrid
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {aboutContent.values.map((value, i) => (
              <StaggerItem key={value.title}>
                <div
                  className="metric-card"
                  style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "var(--color-orange-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                      color: "var(--color-orange)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    {value.title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="overline">Journey</span>
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
              How We Got Here
            </h2>
          </FadeInUp>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "90px",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "var(--color-border)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {milestones.map((m, i) => (
                <FadeInUp key={i} delay={i * 0.08}>
                  <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "90px",
                        flexShrink: 0,
                        textAlign: "right",
                        paddingRight: "0.75rem",
                        paddingTop: "0.2rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          color: "var(--color-orange)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {m.year}
                      </span>
                    </div>

                    {/* Dot */}
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "var(--color-orange)",
                          marginTop: "0.35rem",
                        }}
                      />
                    </div>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.6,
                        paddingTop: "0.1rem",
                      }}
                    >
                      {m.event}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────── */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="overline">The Team</span>
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
              People Behind the Results
            </h2>
          </FadeInUp>

          <div style={{ maxWidth: "480px", margin: "0 auto" }}>
            {team.map((member) => (
              <FadeInUp key={member.name}>
                <div
                  className="metric-card"
                  style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}
                >
                  <div
                    className="img-placeholder"
                    style={{
                      width: "72px",
                      height: "72px",
                      flexShrink: 0,
                      fontSize: "0.55rem",
                    }}
                  >
                    Photo
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {member.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "var(--color-orange)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {member.role}
                    </div>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--color-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--color-bg)",
          textAlign: "center",
          borderTop: "1px solid var(--color-border)",
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
            width: "700px",
            height: "350px",
            background: "radial-gradient(ellipse, rgba(255,85,0,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "560px", margin: "0 auto" }}>
          <FadeInUp>
            <span className="overline">Work With Us</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                margin: "0.75rem 0 1rem",
              }}
            >
              Ready to Be Our Next Case Study?
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Whether you need Meta Ads, a Shopify store, SEO, or a full digital strategy — let&apos;s talk.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-orange">
                Get a Free Consultation
              </Link>
              <Link href="/case-studies" className="btn-outline-orange">
                View Case Studies
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
