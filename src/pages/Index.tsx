import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackgroundShapes from "@/components/ui/BackgroundShapes";
import LoadingFallback from "@/components/ui/LoadingFallback";

// Lazy load below-the-fold components for better performance
const Services = lazy(() => import("@/components/Services"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Clients = lazy(() => import("@/components/Clients"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const CTABanner = lazy(() => import("@/components/CTABanner"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative z-50">
        <ScrollProgress />
        <Navbar />
      </div>
      <BackgroundShapes />
      <main className="relative z-10">
        <Hero />
        <About />
        <Suspense fallback={<LoadingFallback />}>
          <Clients />
          <Services />
          <Gallery />
          <Testimonials />
          <CTABanner />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
