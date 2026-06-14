import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/layout/PageLoader";
import Cursor from "@/components/shared/Cursor";

import Home from "@/pages/Home";
import About from "@/pages/About";
import CaseStudies from "@/pages/CaseStudies";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";

import Marketing from "@/pages/services/Marketing";
import Tech from "@/pages/services/Tech";
import SEO from "@/pages/services/SEO";
import PPC from "@/pages/services/PPC";
import SMM from "@/pages/services/SMM";
import SMO from "@/pages/services/SMO";
import EcommerceMarketing from "@/pages/services/EcommerceMarketing";

import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/tech" element={<Tech />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/ppc" element={<PPC />} />
          <Route path="/services/smm" element={<SMM />} />
          <Route path="/services/smo" element={<SMO />} />
          <Route path="/services/ecommerce-marketing" element={<EcommerceMarketing />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />

          {/* Catch-all → home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Cursor />
        <PageLoader />
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  );
}
