"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const marketingLinks = [
  { label: "E-Commerce Marketing", href: "/services/ecommerce-marketing" },
  { label: "PPC / Paid Ads", href: "/services/ppc" },
  { label: "Social Media Marketing", href: "/services/smm" },
  { label: "Social Media Optimization", href: "/services/smo" },
  { label: "SEO", href: "/services/seo" },
];

const techLinks = [
  { label: "Shopify Development", href: "/services/tech" },
  { label: "Web Development", href: "/services/tech" },
  { label: "App Development", href: "/services/tech" },
  { label: "Tech Maintenance", href: "/services/tech" },
  { label: "Freelance Projects", href: "/services/tech" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(12,12,12,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "2.1rem",
              fontWeight: 700,
              color: "var(--color-orange)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
            }}
          >
            bw
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.58rem",
              fontWeight: 700,
              color: "var(--color-text-muted)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            BOMBAYWALA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: "2rem" }}>
          {/* Services Dropdown */}
          <div ref={servicesRef} style={{ position: "relative" }}>
            <button
              onClick={() => setServicesOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: servicesOpen ? "var(--color-orange)" : "var(--color-text-muted)",
                letterSpacing: "0.04em",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                transition: "color 0.2s",
                padding: 0,
              }}
            >
              Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                style={{
                  transform: servicesOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>

            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  padding: "1.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0 2rem",
                  minWidth: "480px",
                  animation: "slideDown 0.2s ease",
                  zIndex: 100,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--color-orange)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Marketing
                  </div>
                  {marketingLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setServicesOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.4rem 0",
                        fontSize: "0.8rem",
                        color: "var(--color-text-muted)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-orange)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--color-orange)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Tech
                  </div>
                  {techLinks.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      onClick={() => setServicesOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.4rem 0",
                        fontSize: "0.8rem",
                        color: "var(--color-text-muted)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-orange)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {[
            { label: "Case Studies", href: "/case-studies" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--color-text-muted)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-orange)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/contact" className="btn-orange" style={{ padding: "0.625rem 1.25rem", fontSize: "0.72rem" }}>
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text)",
            padding: "0.5rem",
          }}
          aria-label="Toggle menu"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            {mobileOpen ? (
              <>
                <path d="M2 2L20 14M20 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <rect x="0" y="0" width="22" height="2" rx="1" fill="currentColor" />
                <rect x="0" y="7" width="16" height="2" rx="1" fill="currentColor" />
                <rect x="0" y="14" width="22" height="2" rx="1" fill="currentColor" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            background: "var(--color-surface)",
            borderTop: "1px solid var(--color-border)",
            padding: "1.5rem",
            animation: "slideDown 0.2s ease",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <div
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "var(--color-orange)",
                marginBottom: "0.5rem",
                textTransform: "uppercase",
              }}
            >
              Marketing Services
            </div>
            {marketingLinks.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "0.5rem 0",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <div
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "var(--color-orange)",
                marginBottom: "0.5rem",
                textTransform: "uppercase",
              }}
            >
              Tech Services
            </div>
            {techLinks.map((l) => (
              <Link
                key={l.label + "mob"}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "0.5rem 0",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          {[
            { label: "Case Studies", href: "/case-studies" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--color-text)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "1.25rem" }}>
            <Link href="/contact" className="btn-orange" onClick={() => setMobileOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
