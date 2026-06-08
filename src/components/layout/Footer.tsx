"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";

const marketingFooterLinks = [
  { label: "E-Commerce Marketing", href: "/services/ecommerce-marketing" },
  { label: "PPC / Paid Ads", href: "/services/ppc" },
  { label: "Social Media Marketing", href: "/services/smm" },
  { label: "SMO", href: "/services/smo" },
  { label: "SEO", href: "/services/seo" },
];

const techFooterLinks = [
  { label: "Shopify Development", href: "/services/tech" },
  { label: "Website Development", href: "/services/tech" },
  { label: "App Development", href: "/services/tech" },
  { label: "Tech Maintenance", href: "/services/tech" },
  { label: "Freelance Projects", href: "/services/tech" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        style={{
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-orange)",
          marginBottom: "1rem",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        fontSize: "0.8rem",
        color: "var(--color-muted)",
        textDecoration: "none",
        padding: "0.25rem 0",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
        }}
      >
        {/* 4-col grid */}
        <div className="footer-grid">
          {/* Brand + Contact */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--color-orange)",
                  letterSpacing: "-0.03em",
                }}
              >
                bw
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                BOMBAYWALA
              </span>
            </Link>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                maxWidth: "260px",
                marginBottom: "1.25rem",
              }}
            >
              Jaipur&apos;s performance-first digital marketing & tech agency. We drive real results.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                style={{ fontSize: "0.8rem", color: "var(--color-muted)", textDecoration: "none" }}
              >
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{ fontSize: "0.8rem", color: "var(--color-muted)", textDecoration: "none" }}
              >
                {siteConfig.contact.email}
              </a>
              <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>
                {siteConfig.contact.addressShort}
              </span>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {/* Instagram */}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: "var(--color-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: "var(--color-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "var(--color-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Marketing Services */}
          <FooterCol title="Marketing">
            {marketingFooterLinks.map((l) => (
              <FooterLink key={l.href + l.label} href={l.href}>{l.label}</FooterLink>
            ))}
          </FooterCol>

          {/* Tech Services */}
          <FooterCol title="Tech">
            {techFooterLinks.map((l) => (
              <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
            ))}
          </FooterCol>

          {/* Company */}
          <FooterCol title="Company">
            {companyLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
            ))}
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { label: "Terms", href: "/terms" },
              { label: "Privacy", href: "/privacy" },
              { label: "Cookies", href: "/cookies" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: "0.75rem", color: "var(--color-muted)", textDecoration: "none" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
