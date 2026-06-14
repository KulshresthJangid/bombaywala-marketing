import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/config";

const footerLinks = {
  Services: [
    { label: "E-Commerce Marketing", to: "/services/ecommerce-marketing" },
    { label: "PPC / Paid Ads",       to: "/services/ppc" },
    { label: "Social Media Marketing",to: "/services/smm" },
    { label: "SEO",                   to: "/services/seo" },
    { label: "Website Development",   to: "/services/tech" },
  ],
  Company: [
    { label: "About",        to: "/about" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "Blog",         to: "/blog" },
    { label: "Contact",      to: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Use",   to: "/terms" },
    { label: "Cookies",        to: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "4rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="footer-grid" style={{ marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <img src="/bombaywala-logo.png" alt="Bombaywala Marketing" style={{ height: "48px", width: "48px", objectFit: "contain", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.58rem", fontWeight: 700, color: "hsl(var(--muted-foreground))", letterSpacing: "0.28em", textTransform: "uppercase" }}>BOMBAYWALA</span>
            </Link>
            <p style={{ fontSize: "0.82rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.7, maxWidth: "240px", marginBottom: "1.25rem" }}>
              {siteConfig.tagline}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.78rem", color: "hsl(var(--muted-foreground))" }}>
              <a href={`tel:${siteConfig.contact.phone}`} style={{ color: "inherit", textDecoration: "none" }}>{siteConfig.contact.phone}</a>
              <a href={`mailto:${siteConfig.contact.email}`} style={{ color: "inherit", textDecoration: "none" }}>{siteConfig.contact.email}</a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--orange))", marginBottom: "1rem" }}>{title}</div>
              {links.map(l => (
                <Link key={l.label} to={l.to} style={{ display: "block", padding: "0.3rem 0", fontSize: "0.8rem", color: "hsl(var(--muted-foreground))", textDecoration: "none", transition: "color 0.15s" }} onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--foreground))")} onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", fontSize: "0.72rem", color: "hsl(var(--muted-foreground))" }}>
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span>{siteConfig.contact.addressShort}</span>
        </div>
      </div>
    </footer>
  );
}
