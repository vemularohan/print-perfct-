import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Prefetch map for route-based pages
const routePrefetchMap: Record<string, () => Promise<unknown>> = {
  "/services": () => import("@/pages/ServicesPage"),
  "/gallery": () => import("@/pages/GalleryPage"),
  "/clients": () => import("@/pages/ClientsPage"),
  "/mockup-generator": () => import("@/pages/MockupGenerator"),
  "/privacy": () => import("@/pages/PrivacyPolicyPage"),
  "/terms": () => import("@/pages/TermsPage"),
};

const navLinks = [
  { label: "Home", href: "/", hash: "", isRoute: true },
  { label: "About", href: "/", hash: "about", isRoute: false },
  { label: "Clients", href: "/clients", hash: "", isRoute: true },
  { label: "Services", href: "/services", hash: "", isRoute: true },
  { label: "Gallery", href: "/gallery", hash: "", isRoute: true },
  { label: "Design Tool", href: "/mockup-generator", hash: "", isRoute: true },
  { label: "Testimonials", href: "/", hash: "testimonials", isRoute: false },
  { label: "Contact", href: "/", hash: "contact", isRoute: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  // Prefetch page on hover for instant navigation
  const handlePrefetch = useCallback((href: string) => {
    const prefetch = routePrefetchMap[href];
    if (prefetch) prefetch();
  }, []);

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);

    if (link.isRoute) {
      // Simple route navigation (Home, Clients, Services, etc.)
      navigate(link.href);
      if (link.href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Hash-based navigation (About, Testimonials, Contact)
      if (location.pathname === "/") {
        // Already on homepage — just scroll to section
        const el = document.getElementById(link.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to homepage first, then scroll
        navigate("/#" + link.hash);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ willChange: 'transform, background-color' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-card/95 backdrop-blur-lg shadow-elevated border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src="/suryalogotransparent.png" alt="Surya Enterprises" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                onMouseEnter={() => link.isRoute && handlePrefetch(link.href)}
                className={`text-sm font-medium transition-all-smooth hover:text-primary relative group ${scrolled ? "text-muted-foreground" : "text-secondary-foreground/80"
                  } bg-transparent border-none cursor-pointer`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all-smooth" />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919676662304">
              <Button size="sm" className={`gap-2 ${!scrolled ? "bg-white text-secondary hover:bg-white/90" : "bg-muted text-foreground hover:bg-muted/80"}`}>
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <button onClick={() => handleNavClick({ label: "Contact", href: "/", hash: "contact", isRoute: false })}>
              <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
                Get a Quote
              </Button>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-all-smooth hover:scale-110 ${scrolled ? "text-foreground" : "text-secondary-foreground"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 rotate-90 transition-transform" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col space-y-3 px-4 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-left text-base font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 hover:bg-accent/10 rounded-md bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-3 pt-3 border-t border-border">
                <a href="tel:+919676662304" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full gap-2 hover:scale-105 transition-all-smooth group">
                    <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Call Now
                  </Button>
                </a>
                <button className="flex-1" onClick={() => handleNavClick({ label: "Contact", href: "/", hash: "contact", isRoute: false })}>
                  <Button size="sm" className="w-full gradient-primary animate-gradient text-primary-foreground border-0 hover:scale-105 transition-all-smooth">
                    Get a Quote
                  </Button>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
