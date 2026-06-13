import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/blog";
import { FadeInUp, FadeIn } from "@/components/shared/FadeInUp";
import { StaggerGrid, StaggerItem } from "@/components/shared/StaggerGrid";

export const metadata: Metadata = {
  title: "Blog | Digital Marketing Insights & Strategy",
  description:
    "Expert insights on SEO, ecommerce marketing, PPC, social media, and AI-powered digital strategies for businesses in Jaipur from Bombaywala Marketing.",
  alternates: { canonical: "https://bombaywalamarketing.com/blog" },
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* ── Header ───────────────────────────────── */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-5%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-script)",
            fontSize: "28vw",
            fontWeight: 700,
            color: "rgba(255,85,0,0.025)",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          blog.
        </div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Insights & Strategy</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                marginTop: "1rem",
                marginBottom: "1.25rem",
                fontStyle: "italic",
              }}
            >
              Marketing Intelligence
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", maxWidth: "480px" }}>
                Data-driven guides on SEO, performance marketing, AI search, and ecommerce growth — straight from the teams running live campaigns.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── Featured Post ─────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp>
            <Link
              href={`/blog/${featured.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                className="blog-featured-card hero-grid"
                style={{ cursor: "pointer" }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                    <span className="tag-pill">Featured</span>
                    <span className="tag-pill">{featured.category}</span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      color: "var(--color-text)",
                      marginBottom: "1.25rem",
                      fontStyle: "italic",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
                    {featured.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      fontSize: "0.72rem",
                      color: "var(--color-muted)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    <span>{new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span>{featured.readTime} min read</span>
                  </div>
                </div>
                <div
                  style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border-light)",
                    padding: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "260px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-script)",
                      fontSize: "7rem",
                      fontWeight: 700,
                      color: "rgba(255,85,0,0.08)",
                      lineHeight: 1,
                      position: "absolute",
                    }}
                  >
                    bw
                  </div>
                  <span className="overline" style={{ position: "relative", zIndex: 1 }}>Read Article</span>
                  <ArrowRight size={20} color="var(--color-orange)" style={{ marginTop: "0.75rem", position: "relative", zIndex: 1 }} />
                </div>
              </div>
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ── All Posts ─────────────────────────────── */}
      <section style={{ padding: "0 1.5rem 7rem", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                marginBottom: "0.75rem",
                fontStyle: "italic",
              }}
            >
              All Articles
            </h2>
            <span className="orange-rule" />
          </FadeIn>

          <StaggerGrid
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div
                    className="metric-card"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      <span className="tag-pill">{post.category}</span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                        color: "var(--color-text)",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                      {post.description}
                    </p>
                    <div
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "1rem",
                        borderTop: "1px solid var(--color-border)",
                        fontSize: "0.68rem",
                        color: "var(--color-muted)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      <span>
                        {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span style={{ color: "var(--color-orange)", fontWeight: 600 }}>{post.readTime} min</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
}
