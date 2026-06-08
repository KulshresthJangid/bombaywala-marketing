"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/shared/FadeInUp";

const SERVICES = [
  "E-Commerce Marketing",
  "PPC / Paid Ads",
  "Social Media Marketing",
  "Social Media Optimization",
  "SEO",
  "Influencer Marketing",
  "Product Photography",
  "Shopify Development",
  "Website Development",
  "App Development",
  "Tech Maintenance",
  "Freelance / Custom Project",
  "Other",
];

const BUDGETS = [
  "Under ₹10,000/month",
  "₹10,000–₹25,000/month",
  "₹25,000–₹50,000/month",
  "₹50,000–₹1L/month",
  "₹1L+/month",
  "One-time project",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setState("success");
      setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    } catch (err: unknown) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          padding: "120px 1.5rem 60px",
          background: "var(--color-bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,85,0,0.05) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Get in Touch</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                marginTop: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              Let&apos;s Scale Your Brand
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                maxWidth: "500px",
              }}
            >
              Tell us about your brand and goals. We&apos;ll get back within 24 hours with a plan.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ── Contact Grid ─────────────────────────────── */}
      <section style={{ padding: "2rem 1.5rem 6rem", background: "var(--color-bg)" }}>
        <div
          className="contact-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* ── Info Panel ── */}
          <FadeInLeft>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Contact details */}
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-orange)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Contact Info
                </div>

                {[
                  {
                    label: "Phone / WhatsApp",
                    value: siteConfig.contact.phone,
                    href: `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`,
                  },
                  {
                    label: "Email",
                    value: siteConfig.contact.email,
                    href: `mailto:${siteConfig.contact.email}`,
                  },
                  {
                    label: "Address",
                    value: siteConfig.contact.address,
                    href: siteConfig.contact.googleMapsUrl,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      marginBottom: "1.25rem",
                      paddingBottom: "1.25rem",
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-muted)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      target={item.label === "Address" ? "_blank" : undefined}
                      rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--color-text-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        lineHeight: 1.5,
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-orange)")}
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)")
                      }
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-orange)",
                    marginBottom: "1rem",
                  }}
                >
                  Follow Us
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {[
                    { name: "Instagram", href: siteConfig.social.instagram },
                    { name: "Facebook", href: siteConfig.social.facebook },
                    { name: "LinkedIn", href: siteConfig.social.linkedin },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-text-muted)",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-orange)")}
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)")
                      }
                    >
                      <span style={{ color: "var(--color-orange)", fontSize: "0.9rem" }}>→</span>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick note */}
              <div
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  padding: "1.25rem 1.5rem",
                  borderLeft: "3px solid var(--color-orange)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  We respond to all enquiries within{" "}
                  <strong style={{ color: "var(--color-text)" }}>24 hours</strong>. For urgent queries,
                  call or WhatsApp us directly at{" "}
                  <strong style={{ color: "var(--color-text)" }}>{siteConfig.contact.phone}</strong>.
                </p>
              </div>
            </div>
          </FadeInLeft>

          {/* ── Form ── */}
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
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange), var(--color-orange-light))",
                }}
              />

              {state === "success" ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "var(--color-orange-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
                    We&apos;ve received your enquiry and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setState("idle")}
                    className="btn-outline-orange"
                    style={{ marginTop: "1.5rem" }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Send Us a Message
                  </div>

                  <div className="form-row">
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-muted)",
                          marginBottom: "0.4rem",
                        }}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-muted)",
                          marginBottom: "0.4rem",
                        }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-muted)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                    />
                  </div>

                  <div className="form-row">
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-muted)",
                          marginBottom: "0.4rem",
                        }}
                      >
                        Service Needed
                      </label>
                      <select name="service" value={form.service} onChange={handleChange} className="form-input">
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-muted)",
                          marginBottom: "0.4rem",
                        }}
                      >
                        Monthly Budget
                      </label>
                      <select name="budget" value={form.budget} onChange={handleChange} className="form-input">
                        <option value="">Select budget</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-muted)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Tell Us About Your Brand *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What's your current situation and what do you want to achieve?"
                      className="form-input"
                      style={{ resize: "vertical", minHeight: "120px" }}
                    />
                  </div>

                  {state === "error" && (
                    <div
                      style={{
                        background: "rgba(255,85,0,0.08)",
                        border: "1px solid rgba(255,85,0,0.3)",
                        padding: "0.875rem 1rem",
                        fontSize: "0.82rem",
                        color: "var(--color-orange-light)",
                      }}
                    >
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="btn-orange"
                    style={{
                      opacity: state === "loading" ? 0.7 : 1,
                      cursor: state === "loading" ? "not-allowed" : "pointer",
                      justifyContent: "center",
                    }}
                  >
                    {state === "loading" ? (
                      <>
                        <span className="spinner" style={{ width: "16px", height: "16px", borderWidth: "2px" }} />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeInRight>
        </div>
      </section>
    </>
  );
}
