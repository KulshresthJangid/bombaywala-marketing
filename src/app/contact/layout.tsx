import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote | Bombaywala Marketing Jaipur",
  description:
    "Contact Bombaywala Marketing in Jaipur for a free digital marketing consultation. Call +91-9892907955 or email bombaywalamarketing@gmail.com. Serving Jaipur businesses across SEO, PPC, SMM, and more.",
  alternates: { canonical: "https://bombaywalamarketing.com/contact" },
  openGraph: {
    title: "Contact Bombaywala Marketing | Free Strategy Call",
    description: "Book a free 20-minute strategy call with Jaipur's performance-first digital marketing agency.",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
