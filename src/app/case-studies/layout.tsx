import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Real Results for Real Brands | Bombaywala Marketing",
  description:
    "See how Bombaywala Marketing delivered 54x ROAS for Newturn Furniture, ₹10L revenue for DS Pet Care, 586 leads at ₹12 CPL for Renatus, and 200+ orders/month for Siddhohum Gir Cow.",
  alternates: { canonical: "https://bombaywalamarketing.com/case-studies" },
  openGraph: {
    title: "Case Studies | Bombaywala Marketing Jaipur",
    description: "Real brands. Real results. Documented proof of 54x ROAS, ₹10L+ revenue, and 586 qualified leads.",
    type: "website",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
