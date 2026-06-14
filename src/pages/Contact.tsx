import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/config";
import { FadeInUp } from "@/components/shared/FadeInUp";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";

const SERVICES = ["E-Commerce Marketing","PPC / Paid Ads","Social Media Marketing","Social Media Optimization","SEO","Influencer Marketing","Product Photography","Shopify Development","Website Development","App Development","Tech Maintenance","Freelance / Custom Project"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await new Promise(r => setTimeout(r, 600));
    setSent(true);
  };

  return (
    <>
      <SEO
        title="Contact Us | Free Strategy Call | Bombaywala Marketing Jaipur"
        description="Get a free 20-minute digital marketing strategy call with Bombaywala Marketing. Based in Vaishali Nagar, Jaipur. Call +91 9892907955 or fill our contact form."
        canonical="/contact"
      />
      <section className="pg-hero">
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-script)", fontSize: "28vw", fontWeight: 700, color: "rgba(255,85,0,0.022)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>hello.</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <FadeInUp>
            <span className="overline">Get In Touch</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1.25rem", fontStyle: "italic" }}>
              Let's Build Something <br />That Scales.
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span className="orange-rule" />
              <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", maxWidth: "420px" }}>Book a free 20-minute strategy call and walk away with a clear growth plan.</p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem 7rem", background: "hsl(var(--background))" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="contact-grid">
            {/* Info column */}
            <div>
              <FadeInUp>
                <div style={{ marginBottom: "2.5rem" }}>
                  {[{ label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` }, { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` }, { label: "Location", value: siteConfig.contact.addressShort, href: undefined }].map(item => (
                    <div key={item.label} style={{ marginBottom: "1.5rem" }}>
                      <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--orange))", marginBottom: "0.35rem" }}>{item.label}</div>
                      {item.href ? <a href={item.href} style={{ fontSize: "1rem", color: "hsl(var(--foreground))", textDecoration: "none" }}>{item.value}</a> : <span style={{ fontSize: "1rem", color: "hsl(var(--foreground))" }}>{item.value}</span>}
                    </div>
                  ))}
                </div>
                <div className="liquid-glass metric-card">
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, hsl(var(--orange-dark)), hsl(var(--orange)), var(--gold))" }} />
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "hsl(var(--orange))", marginBottom: "0.5rem", fontStyle: "italic" }}>Free Strategy Call</div>
                  <p style={{ fontSize: "0.82rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.7 }}>20 minutes. No pitch, no pressure. Walk away with a clear action plan for your business.</p>
                </div>
              </FadeInUp>
            </div>

            {/* Form */}
            <FadeInUp delay={0.1}>
              {sent ? (
                <div className="liquid-glass metric-card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
                  <div style={{ fontFamily: "var(--font-script)", fontSize: "4rem", color: "hsl(var(--orange))", marginBottom: "1rem" }}>✓</div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", color: "hsl(var(--foreground))", fontStyle: "italic", marginBottom: "0.75rem" }}>Message Sent!</h2>
                  <p style={{ color: "hsl(var(--muted-foreground))", fontSize: "0.9rem" }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div className="form-row">
                    <div><label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", display: "block", marginBottom: "0.4rem" }}>Full Name *</label><input required className="form-input" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /></div>
                    <div><label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", display: "block", marginBottom: "0.4rem" }}>Email *</label><input required type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
                  </div>
                  <div className="form-row">
                    <div><label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", display: "block", marginBottom: "0.4rem" }}>Phone</label><input className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} /></div>
                    <div><label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", display: "block", marginBottom: "0.4rem" }}>Company</label><input className="form-input" placeholder="Brand name" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} /></div>
                  </div>
                  <div><label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", display: "block", marginBottom: "0.4rem" }}>Service Needed</label>
                    <select className="form-input" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                      <option value="">Select a service</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", display: "block", marginBottom: "0.4rem" }}>Message *</label><textarea required className="form-input" rows={5} placeholder="Tell us about your goals..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ resize: "vertical" }} /></div>
                  <Button type="submit" variant="orange" size="xl" className="rounded-full w-full mt-2">Send Message</Button>
                </form>
              )}
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
