import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";

// Lazy load all non-home pages for faster navigation
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ShaderDemo = lazy(() => import("./pages/ShaderDemo"));
const ModernHero = lazy(() => import("./pages/ModernHero"));
const MockupGenerator = lazy(() => import("./pages/MockupGenerator"));
const ClientsPage = lazy(() => import("./pages/ClientsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));

const queryClient = new QueryClient();

// Helper to scroll to top on route change unless hash is present
const ScrollToTopOnRoute = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRoute />
        <CookieConsent />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/shader-demo" element={<ShaderDemo />} />
            <Route path="/modern-hero" element={<ModernHero />} />
            <Route path="/mockup-generator" element={<MockupGenerator />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
