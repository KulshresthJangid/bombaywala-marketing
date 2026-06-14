import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ShoppingCart, TrendingUp, Share2, Zap, Search, Users, Camera, Store, Globe, Smartphone, Wrench, Code2 } from "lucide-react";
import { siteConfig, marketingServices, techServices, caseStudies, testimonials } from "@/lib/config";
import { FadeInUp, FadeIn } from "@/components/shared/FadeInUp";
import { Button } from "@/components/ui/button";
import SEO from "@/components/shared/SEO";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
const EASE = [0.22, 1, 0.36, 1] as const;

const clientsWithMeta = [
  { name: "Siddhohum",               industry: "Women's Clothing",    result: "200+ orders/mo" },
  { name: "Diya Seating",            industry: "Café Furniture",       result: "40x ROAS" },
  { name: "Newturn Furniture",       industry: "Office Furniture",     result: "54x ROAS" },
  { name: "Poshpankh",               industry: "Ethnic Wear",          result: "₹1.6L/month" },
  { name: "Tanya Dance & Music",     industry: "Education",            result: "400K reach" },
  { name: "Ramkishan Agri",          industry: "Agriculture",          result: "1500 leads" },
  { name: "DS Pet Care",             industry: "Pet Food",             result: "₹10L revenue" },
  { name: "MRC Chair",               industry: "Office Furniture",     result: "10x ROAS" },
  { name: "Tejaji Mahakumbh",        industry: "Events",               result: "5000 attendees" },
  { name: "Renatus",                 industry: "Wellness",             result: "₹12 CPL" },
  { name: "Wood Item Wala",          industry: "Home Décor",           result: "Brand shoot" },
  { name: "Blue Wing",               industry: "Lifestyle",            result: "Social growth" },
  { name: "Himashi",                 industry: "Fashion",              result: "Content & Ads" },
  { name: "Liceria Co",              industry: "D2C Brand",            result: "E-commerce" },
  { name: "Lava",                    industry: "Tech / Electronics",   result: "Lead gen" },
  { name: "Ganpat Gurukul",          industry: "Education",            result: "Admissions" },
  { name: "Rinipo",                  industry: "Retail",               result: "Performance" },
];

function ClientPill({ name, industry, result }: { name: string; industry: string; result: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="hover"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        padding: "0.9rem 1.75rem",
        border: `1px solid ${hovered ? "rgba(240,96,32,0.55)" : "hsl(var(--border))"}`,
        background: hovered ? "rgba(240,96,32,0.06)" : "rgba(255,248,235,0.02)",
        backdropFilter: "blur(4px)",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s, background 0.3s, transform 0.3s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(240,96,32,0.12)" : "none",
        cursor: "none",
      }}
    >
      {/* top accent line on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg, hsl(var(--orange-dark)), hsl(var(--orange)))",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
      }} />
      <span style={{
        fontFamily: "var(--font-display)",
        fontSize: "0.95rem",
        fontStyle: "italic",
        color: hovered ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
        transition: "color 0.3s",
        whiteSpace: "nowrap",
        lineHeight: 1.2,
      }}>{name}</span>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.2rem" }}>
        <span style={{
          fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "hsl(var(--muted-foreground))", opacity: 0.7,
          whiteSpace: "nowrap",
        }}>{industry}</span>
        <span style={{ width: "2px", height: "2px", borderRadius: "50%", background: "hsl(var(--orange))", opacity: hovered ? 1 : 0.4, flexShrink: 0, transition: "opacity 0.3s" }} />
        <span style={{
          fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "hsl(var(--orange))",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-6px)",
          transition: "opacity 0.3s, transform 0.3s",
        }}>{result}</span>
      </div>
    </div>
  );
}

function ClientMarquee() {
  const row1 = clientsWithMeta.slice(0, Math.ceil(clientsWithMeta.length / 2));
  const row2 = clientsWithMeta.slice(Math.ceil(clientsWithMeta.length / 2));
  return (
    <section style={{ padding: "6rem 0", background: "hsl(var(--background))", borderTop: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", position: "relative" }}>
      {/* watermark */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "var(--font-script)", fontSize: "22vw", fontWeight: 700, color: "rgba(240,96,32,0.018)", lineHeight: 1, pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap" }}>clients.</div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center", marginBottom: "3rem" }}>
        <span className="overline">Trusted By</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 400, marginTop: "0.75rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>
          Brands That Trusted Us
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
        <div className="marquee-track">
          {[...row1, ...row1, ...row1].map((c, i) => (
            <ClientPill key={`r1-${i}`} {...c} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div style={{ overflow: "hidden" }}>
        <div className="marquee-track marquee-track-reverse">
          {[...row2, ...row2, ...row2].map((c, i) => (
            <ClientPill key={`r2-${i}`} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart, TrendingUp, Share2, Zap, Search, Users, Camera, Store, Globe, Smartphone, Wrench, Code2,
};

const rotatingStats = [
  { number: "54x",  label: "ROAS — Newturn Furniture" },
  { number: "₹10L", label: "Revenue — DS Pet Care" },
  { number: "586",  label: "Leads @ ₹12 — Renatus" },
  { number: "200+", label: "Orders/Month — Siddhohum" },
];

export default function Home() {
  const [statIdx, setStatIdx]     = useState(0);
  const [activeTab, setActiveTab] = useState<"marketing" | "tech">("marketing");

  const { scrollY } = useScroll();
  const rawBg  = useTransform(scrollY, [0, 900], [0, -220]);
  const rawWm  = useTransform(scrollY, [0, 900], [0, -150]);
  const rawCt  = useTransform(scrollY, [0, 900], [0, -55]);
  const bgY    = useSpring(rawBg,  { stiffness: 80, damping: 20 });
  const wmY    = useSpring(rawWm,  { stiffness: 80, damping: 20 });
  const ctY    = useSpring(rawCt,  { stiffness: 80, damping: 20 });

  useEffect(() => {
    const id = setInterval(() => setStatIdx(i => (i + 1) % rotatingStats.length), 2800);
    return () => clearInterval(id);
  }, []);

  const featured = caseStudies.filter(c => c.featured);

  return (
    <>
      <SEO
        title="Bombaywala Marketing | Best Digital Marketing Agency in Jaipur"
        description="Jaipur's performance-first digital marketing agency. SEO, PPC, Meta Ads, Social Media Marketing, Shopify Development & E-Commerce growth. 54x ROAS achieved. We Drive Results."
        canonical="/"
      />
      {/* ── Video Hero ────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Video */}
        <video autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}>
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* Subtle dark overlay so text stays readable */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,7,5,0.50)", zIndex: 1 }} />

        {/* Parallax glows */}
        <motion.div style={{ y: bgY, position: "absolute", top: "10%", left: "-15%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,85,0,0.07) 0%, transparent 65%)", pointerEvents: "none", zIndex: 2 }} />
        <motion.div style={{ y: bgY, position: "absolute", bottom: "5%", right: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(197,155,60,0.04) 0%, transparent 65%)", pointerEvents: "none", zIndex: 2 }} />

        {/* Watermark bw */}
        <motion.div style={{ y: wmY, position: "absolute", top: "-8%", right: "-5%", pointerEvents: "none", userSelect: "none", zIndex: 2 }}>
          <span style={{ fontFamily: "var(--font-script)", fontSize: "52vw", fontWeight: 700, color: "rgba(255,85,0,0.025)", lineHeight: 1, display: "block" }}>bw</span>
        </motion.div>

        {/* Content */}
        <motion.div className="hero-content" style={{ y: ctY, zIndex: 3 }}>
          <div className="hero-grid">
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span className="orange-rule" />
                <span className="overline">Jaipur's Performance-First Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-2.46px", marginBottom: "1.75rem", color: "hsl(var(--foreground))" }}
              >
                We Don't Do Marketing.{" "}
                <em style={{ fontStyle: "italic", color: "hsl(var(--orange))" }}>We Drive Results.</em>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: EASE }} style={{ fontSize: "1.05rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.75, maxWidth: "460px", marginBottom: "2.75rem" }}>
                {siteConfig.description}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38, ease: EASE }} className="btn-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button asChild variant="orange" size="lg" className="rounded-full">
                  <Link to="/case-studies">See Our Results <ArrowRight size={14} /></Link>
                </Button>
                <Button asChild variant="glass" size="lg" className="rounded-full">
                  <Link to="/contact">Start a Project</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right — rotating stat card */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.div initial={{ opacity: 0, scale: 0.9, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: EASE }} className="liquid-glass" style={{ padding: "clamp(2rem,5vw,3rem) clamp(1.5rem,5vw,3.5rem)", textAlign: "center", position: "relative", width: "min(100%, 340px)", borderRadius: "2px" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, hsl(var(--orange-dark)), hsl(var(--orange)), var(--gold))" }} />
                <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", marginBottom: "1.25rem" }}>Real Client Results</div>
                <AnimatePresence mode="wait">
                  <motion.div key={statIdx} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.45, ease: EASE }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "4.5rem", fontWeight: 400, color: "hsl(var(--orange))", lineHeight: 1, letterSpacing: "-0.02em", fontStyle: "italic" }}>{rotatingStats[statIdx].number}</div>
                    <div style={{ fontSize: "0.825rem", color: "hsl(var(--muted-foreground))", marginTop: "0.875rem", lineHeight: 1.5 }}>{rotatingStats[statIdx].label}</div>
                  </motion.div>
                </AnimatePresence>
                <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", marginTop: "1.75rem" }}>
                  {rotatingStats.map((_, i) => (
                    <button key={i} onClick={() => setStatIdx(i)} style={{ width: i === statIdx ? "24px" : "6px", height: "2px", borderRadius: "2px", background: i === statIdx ? "hsl(var(--orange))" : "rgba(255,255,255,0.15)", border: "none", cursor: "pointer", transition: "width 0.35s, background 0.35s", padding: 0 }} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Stats ticker ──────────────────────────── */}
      <div style={{ padding: "1.25rem 0", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.3)", overflow: "hidden" }}>
        <div className="ticker-track">
          {[...siteConfig.stats, ...siteConfig.stats].map((s, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", whiteSpace: "nowrap" }}>
              <span style={{ color: "hsl(var(--orange))" }}>{s.value}{s.suffix}</span> {s.label}
              <span style={{ margin: "0 1rem", color: "rgba(255,255,255,0.15)" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Services ──────────────────────────────── */}
      <section className="pg-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="overline">What We Do</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, marginTop: "0.875rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>
                Services Built for Growth
              </h2>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}><span className="orange-rule" /></div>
            </div>
          </FadeInUp>

          <FadeIn>
            <div style={{ display: "flex", justifyContent: "center", gap: "0", marginBottom: "3rem" }}>
              {(["marketing", "tech"] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "0.75rem 2rem", fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", border: "1px solid", borderColor: activeTab === tab ? "hsl(var(--orange))" : "rgba(255,255,255,0.12)", background: activeTab === tab ? "hsl(var(--orange))" : "transparent", color: activeTab === tab ? "#fff" : "hsl(var(--muted-foreground))", cursor: "pointer", transition: "all 0.3s" }}>
                  {tab === "marketing" ? "Marketing" : "Tech & Dev"}
                </button>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.4, ease: EASE }}>
              <div className="cards-grid">
                {(activeTab === "marketing" ? marketingServices : techServices).map(service => {
                  const Icon = iconMap[service.icon] || ShoppingCart;
                  return (
                    <Link key={service.id} to={activeTab === "marketing" ? (service as typeof marketingServices[0]).slug : "/services/tech"} style={{ textDecoration: "none" }}>
                      <div className="metric-card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <div style={{ width: "48px", height: "48px", background: "rgba(255,85,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon size={20} color="hsl(var(--orange))" />
                        </div>
                        <div>
                          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 400, color: "hsl(var(--foreground))", marginBottom: "0.4rem" }}>{service.title}</div>
                          <div style={{ fontSize: "0.8rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>
                            {"tagline" in service ? service.tagline : ""}
                          </div>
                        </div>
                        <div style={{ marginTop: "auto", fontSize: "0.72rem", fontWeight: 700, color: "hsl(var(--orange))", display: "flex", alignItems: "center", gap: "0.4rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          Learn More <ArrowRight size={12} />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Case Studies ──────────────────────────── */}
      <section className="pg-section-alt">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ marginBottom: "3.5rem" }}>
            <span className="overline">Case Studies</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, marginTop: "0.875rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>
              Real Brands. Real Results.
            </h2>
            <div style={{ marginTop: "1.25rem" }}><span className="orange-rule" /></div>
          </FadeInUp>

          <div className="cards-grid">
            {featured.map(cs => (
              <FadeInUp key={cs.id}>
                <div className="metric-card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 400, color: "hsl(var(--foreground))" }}>{cs.client}</div>
                  <span className="tag-pill">{cs.industry}</span>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, color: "hsl(var(--orange))", lineHeight: 1.1, fontStyle: "italic" }}>{cs.result}</div>
                  <p style={{ fontSize: "0.8rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>{cs.challenge}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    {cs.metrics.slice(0, 3).map(m => (
                      <div key={m.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", padding: "0.35rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <span style={{ color: "hsl(var(--muted-foreground))" }}>{m.label}</span>
                        <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>{m.value}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "auto" }}>
                    {cs.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeIn style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Button asChild variant="glass" className="rounded-full">
              <Link to="/case-studies">View All Case Studies <ArrowRight size={14} /></Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ── Clients marquee ───────────────────────── */}
      <ClientMarquee />

      {/* ── Testimonials ──────────────────────────── */}
      <section className="pg-section-alt">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeInUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="overline">Testimonials</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, marginTop: "0.875rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", fontStyle: "italic" }}>
              What Our Clients Say
            </h2>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}><span className="orange-rule" /></div>
          </FadeInUp>
          <div className="cards-grid">
            {testimonials.map((t, i) => (
              <FadeInUp key={t.client} delay={i * 0.1}>
                <div className="liquid-glass metric-card" style={{ height: "100%" }}>
                  <div style={{ fontFamily: "var(--font-script)", fontSize: "3.5rem", fontWeight: 400, color: "hsl(var(--orange))", lineHeight: 0.8, marginBottom: "1.25rem", opacity: 0.7 }}>&ldquo;</div>
                  <p style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.75, marginBottom: "1.5rem", fontStyle: "italic", fontFamily: "var(--font-display)" }}>{t.quote}</p>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 600, color: "hsl(var(--foreground))" }}>{t.client}</div>
                  <div style={{ fontSize: "0.72rem", color: "hsl(var(--muted-foreground))", marginTop: "0.2rem" }}>{t.industry}</div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────── */}
      <section className="pg-section" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", bottom: "-5%", right: "-2%", fontFamily: "var(--font-script)", fontSize: "22vw", fontWeight: 700, color: "rgba(255,85,0,0.025)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>scale.</div>
        <div style={{ position: "relative", maxWidth: "640px", margin: "0 auto" }}>
          <FadeInUp>
            <span style={{ fontFamily: "var(--font-script)", fontSize: "1.15rem", color: "hsl(var(--orange))", display: "block", marginBottom: "1rem" }}>Ready to Scale?</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: "hsl(var(--foreground))", margin: "0 0 1.5rem", fontStyle: "italic" }}>
              Ready to Scale Your Brand?
            </h2>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}><span className="orange-rule" /></div>
            <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.75, marginBottom: "3rem" }}>
              Join brands like Newturn, DS Pet, and Siddhohum who scaled with us. Let's build your success story.
            </p>
            <Button asChild variant="orange" size="lg" className="rounded-full">
              <Link to="/contact">Get A Free Consultation <ArrowRight size={14} /></Link>
            </Button>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
