import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import SEO from "@/components/shared/SEO";

function renderContent(content: string) {
  return content.split("\n\n").filter(Boolean).map((para, i) => {
    const t = para.trim();
    if (!t) return null;
    const isHeading = t.length < 100 && !t.endsWith(".") && !t.endsWith(",") && t.split(" ").length < 15 && i > 0;
    const isBullet  = t.length < 120 && !t.includes(". ") && i > 1;

    if (isHeading && t.split(" ").length > 2) return (
      <h2 key={i} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "hsl(var(--foreground))", marginTop: "2.5rem", marginBottom: "1rem", lineHeight: 1.2, fontStyle: "italic" }}>{t}</h2>
    );
    if (isBullet) return (
      <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.5rem" }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--orange))", flexShrink: 0, marginTop: "0.55rem" }} />
        <p style={{ fontSize: "0.95rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.85, margin: 0 }}>{t}</p>
      </div>
    );
    return <p key={i} style={{ fontSize: "0.95rem", color: i === 1 ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))", lineHeight: 1.85, marginBottom: "1.25rem", fontWeight: i === 1 ? 500 : 400 }}>{t}</p>;
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug ?? "");
  if (!post) return <Navigate to="/blog" replace />;

  const idx     = blogPosts.findIndex(p => p.slug === slug);
  const related = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);
  const prev    = idx > 0 ? blogPosts[idx - 1] : null;
  const next    = idx < blogPosts.length - 1 ? blogPosts[idx + 1] : null;

  return (
    <>
      <SEO
        title={`${post.title} | Bombaywala Marketing Blog`}
        description={post.description}
        canonical={`/blog/${post.slug}`}
      />
      <section className="pg-hero">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.72rem", fontWeight: 600, color: "hsl(var(--orange))", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2rem" }}>
            <ArrowLeft size={12} /> Back to Blog
          </Link>
          <div style={{ display: "flex", gap: "0.6rem", marginBottom: "1.5rem" }}><span className="tag-pill">{post.category}</span></div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginBottom: "1.5rem", fontStyle: "italic" }}>{post.title}</h1>
          <p style={{ fontSize: "1.05rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.7, marginBottom: "2rem" }}>{post.description}</p>
          <div style={{ display: "flex", gap: "2rem", fontSize: "0.72rem", color: "hsl(var(--muted-foreground))" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}><Clock size={12} /> {post.readTime} min read</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}><Tag size={12} /> {post.category}</span>
            <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, hsl(var(--orange)), var(--gold), transparent)", marginBottom: "3rem" }} />
          {renderContent(post.content)}
        </div>
      </section>

      {/* CTA */}
      <section style={{ margin: "0 1.5rem 3rem", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
        <div className="liquid-glass metric-card" style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, hsl(var(--orange-dark)), hsl(var(--orange)), var(--gold))" }} />
          <div style={{ position: "absolute", bottom: "-10%", right: "-2%", fontFamily: "var(--font-script)", fontSize: "10rem", fontWeight: 700, color: "rgba(255,85,0,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>bw</div>
          <p className="overline" style={{ marginBottom: "0.75rem" }}>Ready to Apply This?</p>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, color: "hsl(var(--foreground))", marginBottom: "1rem", letterSpacing: "-0.01em", fontStyle: "italic" }}>Let Bombaywala Marketing Handle It for You</h3>
          <p style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.7, marginBottom: "1.75rem" }}>Our team runs live campaigns for brands across Jaipur every day. Get a free 20-minute strategy call.</p>
          <Button asChild variant="orange" className="rounded-full">
            <Link to="/contact">Book a Free Consultation <ArrowRight size={14} /></Link>
          </Button>
        </div>
      </section>

      {/* Prev/Next */}
      {(prev || next) && (
        <section style={{ padding: "0 1.5rem 3rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: prev && next ? "1fr 1fr" : "1fr", gap: "1rem" }}>
            {prev && <Link to={`/blog/${prev.slug}`} style={{ textDecoration: "none" }}><div className="metric-card" style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><span style={{ fontSize: "0.62rem", color: "hsl(var(--muted-foreground))", letterSpacing: "0.1em", textTransform: "uppercase" }}>← Previous</span><span style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "hsl(var(--foreground))", lineHeight: 1.3, fontStyle: "italic" }}>{prev.title}</span></div></Link>}
            {next && <Link to={`/blog/${next.slug}`} style={{ textDecoration: "none" }}><div className="metric-card" style={{ display: "flex", flexDirection: "column", gap: "0.4rem", textAlign: "right" }}><span style={{ fontSize: "0.62rem", color: "hsl(var(--muted-foreground))", letterSpacing: "0.1em", textTransform: "uppercase" }}>Next →</span><span style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "hsl(var(--foreground))", lineHeight: 1.3, fontStyle: "italic" }}>{next.title}</span></div></Link>}
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section style={{ padding: "3rem 1.5rem 6rem", background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, letterSpacing: "-0.02em", color: "hsl(var(--foreground))", marginBottom: "2rem", fontStyle: "italic" }}>More on {post.category}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {related.map(rp => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`} style={{ textDecoration: "none" }}>
                  <div className="metric-card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <span className="tag-pill">{rp.category}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "hsl(var(--foreground))", lineHeight: 1.3, fontStyle: "italic" }}>{rp.title}</span>
                    <span style={{ fontSize: "0.72rem", color: "hsl(var(--orange))", fontWeight: 600 }}>{rp.readTime} min read →</span>
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
