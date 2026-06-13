import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://bombaywalamarketing.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderContent(content: string) {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return paragraphs.map((para, i) => {
    const trimmed = para.trim();
    if (!trimmed) return null;

    // Detect section headers (short lines that end without punctuation and are title-case-ish)
    const isHeading =
      trimmed.length < 100 &&
      !trimmed.endsWith(".") &&
      !trimmed.endsWith(",") &&
      !trimmed.endsWith(":") &&
      trimmed.split(" ").length < 15 &&
      i > 0;

    // Detect list items (single sentence, bullet-like)
    const isBullet = trimmed.length < 120 && !trimmed.includes(". ") && i > 0;

    if (isHeading && trimmed.split(" ").length > 2) {
      return (
        <h2
          key={i}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--color-text)",
            marginTop: "2.5rem",
            marginBottom: "1rem",
            lineHeight: 1.2,
            fontStyle: "italic",
          }}
        >
          {trimmed}
        </h2>
      );
    }

    if (isBullet && i > 1) {
      return (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
            marginBottom: "0.5rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--color-orange)",
              flexShrink: 0,
              marginTop: "0.55rem",
            }}
          />
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.75, margin: 0 }}>
            {trimmed}
          </p>
        </div>
      );
    }

    return (
      <p
        key={i}
        style={{
          fontSize: "0.95rem",
          color: i === 1 ? "var(--color-text)" : "var(--color-text-muted)",
          lineHeight: 1.85,
          marginBottom: "1.25rem",
          fontWeight: i === 1 ? 500 : 400,
        }}
      >
        {trimmed}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);
  const prev = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const next = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section
        style={{
          paddingTop: "130px",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "var(--color-orange)",
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            <ArrowLeft size={12} /> Back to Blog
          </Link>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <span className="tag-pill">{post.category}</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--color-text)",
              marginBottom: "1.5rem",
              fontStyle: "italic",
            }}
          >
            {post.title}
          </h1>

          <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
            {post.description}
          </p>

          <div style={{ display: "flex", gap: "2rem", fontSize: "0.72rem", color: "var(--color-muted)", letterSpacing: "0.04em" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <Clock size={12} />
              {post.readTime} min read
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <Tag size={12} />
              {post.category}
            </span>
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </section>

      {/* ── Content ──────────────────────────────── */}
      <section
        style={{
          padding: "4rem 1.5rem",
          background: "var(--color-bg)",
          minHeight: "60vh",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "linear-gradient(90deg, var(--color-orange), var(--color-gold), transparent)",
              marginBottom: "3rem",
            }}
          />
          {renderContent(post.content)}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section
        style={{
          margin: "0 1.5rem 3rem",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          padding: "2.5rem",
          position: "relative",
          overflow: "hidden",
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
            position: "absolute", bottom: "-10%", right: "-2%",
            fontFamily: "var(--font-script)", fontSize: "10rem",
            fontWeight: 700, color: "rgba(255,85,0,0.03)", lineHeight: 1,
            pointerEvents: "none", userSelect: "none",
          }}
        >
          bw
        </div>
        <p className="overline" style={{ marginBottom: "0.75rem" }}>Ready to Apply This?</p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            fontStyle: "italic",
          }}
        >
          Let Bombaywala Marketing Handle It for You
        </h3>
        <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
          Our team runs live campaigns for brands across Jaipur every day. Get a free 20-minute strategy call to see what&apos;s possible for your business.
        </p>
        <Link href="/contact" className="btn-orange">
          Book a Free Consultation <ArrowRight size={14} />
        </Link>
      </section>

      {/* ── Prev / Next ──────────────────────────── */}
      {(prev || next) && (
        <section style={{ padding: "0 1.5rem 3rem" }}>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: prev && next ? "1fr 1fr" : "1fr",
              gap: "1rem",
            }}
          >
            {prev && (
              <Link href={`/blog/${prev.slug}`} style={{ textDecoration: "none" }}>
                <div
                  className="metric-card"
                  style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
                >
                  <span style={{ fontSize: "0.62rem", color: "var(--color-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    ← Previous
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      lineHeight: 1.3,
                    }}
                  >
                    {prev.title}
                  </span>
                </div>
              </Link>
            )}
            {next && (
              <Link href={`/blog/${next.slug}`} style={{ textDecoration: "none" }}>
                <div
                  className="metric-card"
                  style={{ display: "flex", flexDirection: "column", gap: "0.4rem", textAlign: next && !prev ? "left" : "right" }}
                >
                  <span style={{ fontSize: "0.62rem", color: "var(--color-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Next →
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      lineHeight: 1.3,
                    }}
                  >
                    {next.title}
                  </span>
                </div>
              </Link>
            )}
          </div>
        </section>
      )}

      {/* ── Related Posts ────────────────────────── */}
      {related.length > 0 && (
        <section style={{ padding: "3rem 1.5rem 6rem", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                marginBottom: "2rem",
                fontStyle: "italic",
              }}
            >
              More on {post.category}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    className="metric-card"
                    style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                  >
                    <span className="tag-pill">{rp.category}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {rp.title}
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "var(--color-orange)", fontWeight: 600, letterSpacing: "0.05em" }}>
                      {rp.readTime} min read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
