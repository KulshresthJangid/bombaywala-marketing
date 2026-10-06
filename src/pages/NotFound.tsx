import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Bombaywala Marketing"
        description="The page you're looking for doesn't exist. Explore Bombaywala Marketing's services, case studies and blog."
        noIndex
      />
      <section className="pg-hero">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span className="overline">404</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", color: "hsl(var(--foreground))", marginTop: "1rem", marginBottom: "1.25rem", fontStyle: "italic" }}>
            Page not found.
          </h1>
          <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))", marginBottom: "2.5rem" }}>
            The page you're looking for has moved or doesn't exist. Head back home or explore our services.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Button asChild variant="orange" size="lg" className="rounded-full">
              <Link to="/">Back to Home <ArrowRight size={14} /></Link>
            </Button>
            <Button asChild variant="glass" size="lg" className="rounded-full">
              <Link to="/services/marketing">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
