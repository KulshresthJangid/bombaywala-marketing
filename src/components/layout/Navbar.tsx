import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const marketingLinks = [
  { label: "E-Commerce Marketing", to: "/services/ecommerce-marketing" },
  { label: "PPC / Paid Ads",       to: "/services/ppc" },
  { label: "Social Media Marketing",to: "/services/smm" },
  { label: "Social Media Optimization", to: "/services/smo" },
  { label: "SEO",                   to: "/services/seo" },
];
const techLinks = [
  { label: "Shopify Development",  to: "/services/tech" },
  { label: "Web Development",      to: "/services/tech" },
  { label: "App Development",      to: "/services/tech" },
  { label: "Tech Maintenance",     to: "/services/tech" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen]     = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropOpen(false); }, [location]);

  const navLinks = [
    { label: "Case Studies", to: "/case-studies" },
    { label: "Blog",         to: "/blog" },
    { label: "About",        to: "/about" },
    { label: "Contact",      to: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(15,14,11,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        boxShadow: scrolled ? "inset 0 1px 1px rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <nav className="nav-inner">
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <img src="/bombaywala-logo.png" alt="Bombaywala Marketing" style={{ height: "40px", width: "40px", objectFit: "contain", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.58rem", fontWeight: 700, color: "hsl(var(--muted-foreground))", letterSpacing: "0.28em", textTransform: "uppercase" }}>
            BOMBAYWALA
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {/* Services dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setDropOpen(o => !o)}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 600, color: dropOpen ? "hsl(var(--orange))" : "hsl(var(--muted-foreground))", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: "0.25rem", transition: "color 0.2s", padding: 0 }}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" style={{ transform: dropOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            {dropOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)", background: "rgba(15,14,11,0.97)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 2rem", minWidth: "440px", animation: "slideDown 0.2s ease", zIndex: 100 }}>
                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--orange))", marginBottom: "0.75rem" }}>Marketing</div>
                  {marketingLinks.map(l => (
                    <Link key={l.label} to={l.to} onClick={() => setDropOpen(false)} style={{ display: "block", padding: "0.4rem 0", fontSize: "0.8rem", color: "hsl(var(--muted-foreground))", textDecoration: "none", transition: "color 0.15s" }} onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--orange))")} onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}>
                      {l.label}
                    </Link>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--orange))", marginBottom: "0.75rem" }}>Tech</div>
                  {techLinks.map(l => (
                    <Link key={l.label} to={l.to} onClick={() => setDropOpen(false)} style={{ display: "block", padding: "0.4rem 0", fontSize: "0.8rem", color: "hsl(var(--muted-foreground))", textDecoration: "none", transition: "color 0.15s" }} onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--orange))")} onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map(l => (
            <Link key={l.to} to={l.to} style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 600, color: location.pathname === l.to ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--foreground))")} onMouseLeave={e => (e.currentTarget.style.color = location.pathname === l.to ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))")}>
              {l.label}
            </Link>
          ))}

          <Button asChild variant="glass" size="default" className="rounded-full">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Hamburger */}
        <button className="flex md:hidden" onClick={() => setMobileOpen(o => !o)} style={{ background: "none", border: "none", cursor: "pointer", color: "hsl(var(--foreground))", padding: "0.5rem" }}>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            {mobileOpen ? <path d="M2 2L20 14M20 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> : <>
              <rect x="0" y="0" width="22" height="2" rx="1" fill="currentColor" />
              <rect x="0" y="7" width="16" height="2" rx="1" fill="currentColor" />
              <rect x="0" y="14" width="22" height="2" rx="1" fill="currentColor" />
            </>}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ background: "rgba(15,14,11,0.98)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem", animation: "slideDown 0.2s ease" }}>
          {[...marketingLinks, ...techLinks, ...navLinks].map(l => (
            <Link key={l.label} to={l.to} style={{ display: "block", padding: "0.65rem 0", fontSize: "0.875rem", fontWeight: 600, color: "hsl(var(--muted-foreground))", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: "1.25rem" }}>
            <Button asChild variant="glass" className="rounded-full w-full">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
