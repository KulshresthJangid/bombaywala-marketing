import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { FadeInUp, FadeIn } from "@/components/shared/FadeInUp";
import SEO from "@/components/shared/SEO";

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <SEO
        title="Marketing Blog | SEO, PPC & Ecommerce Insights | Bombaywala Marketing"
        description="Expert guides on SEO, performance marketing, Meta Ads, AI search and ecommerce growth from Bombaywala Marketing — Jaipur's performance-first digital agency."
        canonical="/blog"
      />
      <section className="pg-hero">
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-script)", fontSize: "28vw", fontWeight: 700, color: "rgba(255,85,0,0.022)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>blog.</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Insights & Strategy</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1.25rem", fontStyle: "italic" }}>
              Marketing Intelligence
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", maxWidth: "480px" }}>Data-driven guides on SEO, performance marketing, AI search, and ecommerce growth.</p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Featured post */}
      <section style={{ padding: "5rem 1.5rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp>
            <Link to={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div className="liquid-glass metric-card hero-grid" style={{ cursor: "pointer" }}>
                <div>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
                    <span className="tag-pill">Featured</span>
                    <span className="tag-pill">{featured.category}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1, color: "hsl(var(--foreground))", marginBottom: "1.25rem", fontStyle: "italic" }}>{featured.title}</h2>
                  <p style={{ fontSize: "0.9rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.7, marginBottom: "2rem" }}>{featured.description}</p>
                  <div style={{ fontSize: "0.72rem", color: "hsl(var(--muted-foreground))", display: "flex", gap: "1.5rem" }}>
                    <span>{new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span>{featured.readTime} min read</span>
                  </div>
                </div>
                <div style={{ background: "rgba(255,85,0,0.03)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "240px", position: "relative", overflow: "hidden" }}>
                  <div style={{ fontFamily: "var(--font-script)", fontSize: "7rem", fontWeight: 700, color: "rgba(255,85,0,0.06)", lineHeight: 1, position: "absolute" }}>bw</div>
                  <span className="overline" style={{ position: "relative" }}>Read Article</span>
                  <ArrowRight size={20} color="hsl(var(--orange))" style={{ marginTop: "0.75rem", position: "relative" }} />
                </div>
              </div>
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* All posts */}
      <section style={{ padding: "0 1.5rem 7rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "hsl(var(--foreground))", marginBottom: "0.75rem", fontStyle: "italic" }}>All Articles</h2>
            <span className="orange-rule" />
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {rest.map(post => (
              <FadeInUp key={post.slug}>
                <Link to={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className="metric-card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem", cursor: "pointer" }}>
                    <span className="tag-pill">{post.category}</span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.3, color: "hsl(var(--foreground))", margin: 0, fontStyle: "italic" }}>{post.title}</h3>
                    <p style={{ fontSize: "0.78rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>{post.description}</p>
                    <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.07)", fontSize: "0.68rem", color: "hsl(var(--muted-foreground))" }}>
                      <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                      <span style={{ color: "hsl(var(--orange))", fontWeight: 600 }}>{post.readTime} min</span>
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
