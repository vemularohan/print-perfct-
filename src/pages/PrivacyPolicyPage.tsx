import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Database,
  Cog,
  Cookie,
  Megaphone,
  BarChart3,
  Target,
  Server,
  Share2,
  Lock,
  Clock,
  UserCheck,
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Mail,
  ArrowLeft,
  ChevronRight,
  Search,
  Printer,
  Copy,
  Check,
  ArrowUp,
  Sliders,
  Phone,
  MapPin,
  FileText,
  Eye,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";

interface PolicySection {
  id: string;
  number: number;
  title: string;
  icon: typeof Shield;
  summary: string;
}

const policySections: PolicySection[] = [
  { id: "introduction", number: 1, title: "Introduction & Scope", icon: Shield, summary: "Overview of Suriyan Prints, website URL, and our data protection commitment." },
  { id: "information-we-collect", number: 2, title: "Information We Collect", icon: Database, summary: "Directly submitted and automatically collected technical information." },
  { id: "how-we-use-information", number: 3, title: "How We Use Information", icon: Cog, summary: "Legitimate business uses, quote processing, and order fulfillment." },
  { id: "cookies-technologies", number: 4, title: "Cookies & Similar Technologies", icon: Cookie, summary: "Cookie types, session identifiers, and user consent mechanisms." },
  { id: "google-ads-advertising", number: 5, title: "Google Ads and Advertising", icon: Megaphone, summary: "Google Ads compliance, device identifiers, and strict no-PII policy." },
  { id: "google-analytics", number: 6, title: "Google Analytics", icon: BarChart3, summary: "Traffic measurement, aggregate usage data, and performance optimization." },
  { id: "remarketing-personalized-ads", number: 7, title: "Remarketing & Personalized Advertising", icon: Target, summary: "Advertising cookies, interest-based promotions, and Google opt-out controls." },
  { id: "third-party-services", number: 8, title: "Third-Party Services", icon: Server, summary: "Trusted hosting, communication, mapping, and payment partners." },
  { id: "how-we-share-information", number: 9, title: "How We Share Information", icon: Share2, summary: "No selling of personal data; strict operational sharing criteria." },
  { id: "data-security", number: 10, title: "Data Security", icon: Lock, summary: "HTTPS encryption, administrative controls, and security limitations." },
  { id: "data-retention", number: 11, title: "Data Retention", icon: Clock, summary: "Retention schedules for inquiries, commercial orders, and tax compliance." },
  { id: "user-rights-choices", number: 12, title: "User Rights and Choices", icon: UserCheck, summary: "Access, correction, erasure, consent withdrawal, and cookie management." },
  { id: "childrens-privacy", number: 13, title: "Children's Privacy", icon: AlertTriangle, summary: "Not directed at minors; strict protection of children's data." },
  { id: "external-links", number: 14, title: "External Links", icon: ExternalLink, summary: "Disclaimers regarding outbound links to third-party domains." },
  { id: "changes-to-policy", number: 15, title: "Changes to This Privacy Policy", icon: RefreshCw, summary: "Policy revision procedures, archive versioning, and notification methods." },
  { id: "contact-us", number: 16, title: "Contact Us", icon: Mail, summary: "Verified legal and privacy contact channels at Suriyan Prints." },
];

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // SEO title and meta tag updates
  useEffect(() => {
    document.title = "Privacy Policy | Suriyan Prints - Google Ads & Data Protection Disclosures";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Official Privacy Policy for Suriyan Prints (Surya Enterprises). Learn how we collect, store, and protect information, including Google Ads, Google Analytics, and cookie choices."
      );
    }
  }, []);

  // Handle hash scrolling on page load (e.g. /privacy#cookies or /privacy#google-ads-advertising)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const aliasMap: Record<string, string> = {
        cookies: "cookies-technologies",
        cookie: "cookies-technologies",
        advertising: "google-ads-advertising",
        ads: "google-ads-advertising",
        analytics: "google-analytics",
        remarketing: "remarketing-personalized-ads",
        contact: "contact-us",
        security: "data-security",
        retention: "data-retention",
        rights: "user-rights-choices",
      };
      const targetId = aliasMap[hash] || hash;
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          setActiveSection(targetId);
        }, 150);
      }
    }
  }, []);

  // Scroll spy to highlight current active section
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sectionElements = policySections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return policySections;
    const q = searchQuery.toLowerCase();
    return policySections.filter(
      (s) => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const openCookieModal = () => {
    window.dispatchEvent(new CustomEvent("suriyan_open_cookie_modal"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Banner with Modern Legal Badge & Metadata */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-4">
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-white/40" />
              <span className="text-white/90 font-medium">Privacy Policy</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white shadow-sm">
                <Shield className="w-3.5 h-3.5" />
                Official Privacy Policy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10">
                <Clock className="w-3.5 h-3.5 text-primary" />
                Last Updated: October 27, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10">
                <FileText className="w-3.5 h-3.5 text-accent" />
                Version 1.2
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10">
                <Eye className="w-3.5 h-3.5 text-green-400" />
                Estimated Read: 8 min
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mb-4">
              Suriyan Prints Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-3xl leading-relaxed">
              We value your trust. This Privacy Policy details how Suriyan Prints collects, handles, safeguards, and protects your information across{" "}
              <a
                href="https://suriyanprints.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium underline-offset-4"
              >
                https://suriyanprints.vercel.app/
              </a>
              , including specific disclosures regarding Google Ads, Google Analytics, cookies, and your data rights.
            </p>

            {/* Quick Action Bar in Hero */}
            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-white/15">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrint}
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white gap-1.5 text-xs sm:text-sm h-9"
              >
                <Printer className="w-3.5 h-3.5" />
                Print Policy
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white gap-1.5 text-xs sm:text-sm h-9"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedLink ? "Link Copied!" : "Share Link"}
              </Button>
              <Button
                size="sm"
                onClick={openCookieModal}
                className="gradient-primary text-white hover:opacity-90 gap-1.5 text-xs sm:text-sm h-9 shadow-sm"
              >
                <Sliders className="w-3.5 h-3.5" />
                Cookie Preferences
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* "At a Glance" Executive Summary Callouts */}
      <section className="bg-muted/40 border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
              Summary Overview
            </span>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-1">
                  No Data Selling
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Suriyan Prints never sells, rents, or monetizes personal customer details to third parties for monetary gain.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-1">
                  Google Advertising Disclosures
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use Google Ads and Analytics where enabled. No personal names or emails are sent via remarketing or advertising tags.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <Cookie className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-1">
                  Granular Cookie Control
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Only essential cookies run by default. You can customize analytics and marketing cookies at any time.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-1">
                  Data Security & Rights
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Protected by HTTPS 256-bit encryption. You maintain full rights to access, rectify, or request deletion of your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Sticky TOC Sidebar + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Mobile TOC Collapsible Dropdown */}
          <div className="lg:hidden col-span-12">
            <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between text-left font-medium text-sm text-foreground"
                aria-expanded={mobileMenuOpen}
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>Table of Contents ({policySections.length} Sections)</span>
                </span>
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileMenuOpen ? "rotate-90" : ""}`} />
              </button>

              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pt-3 mt-3 border-t border-border"
                  >
                    <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
                      {policySections.map((sec) => (
                        <button
                          key={sec.id}
                          onClick={() => scrollToSection(sec.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2 transition-colors ${
                            activeSection === sec.id
                              ? "bg-primary text-white font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          <span className="w-4 text-[11px] opacity-75">{sec.number}.</span>
                          <span className="truncate">{sec.title}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Sticky Sidebar (Left Column) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-4">
            <div className="sticky top-28 space-y-4 max-h-[calc(100vh-8rem)] flex flex-col">
              
              {/* Search Within Policy */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search policy sections..."
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground placeholder:text-muted-foreground/70"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Navigation List Container */}
              <div className="bg-card border border-border rounded-2xl p-4 shadow-sm overflow-y-auto flex-1 space-y-1">
                <div className="flex items-center justify-between mb-3 px-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Sections ({filteredSections.length})
                  </span>
                  <span className="text-[11px] text-primary font-medium">Quick Jump</span>
                </div>

                <div className="space-y-1">
                  {filteredSections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    const IconComponent = sec.icon;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 group relative ${
                          isActive
                            ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        }`}
                      >
                        <IconComponent className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="text-[11px] opacity-70">{sec.number}.</span>
                            <span className="truncate">{sec.title}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Help & Cookie Preferences Trigger Card */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-card to-muted/50 border border-border shadow-sm text-xs space-y-2.5">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Sliders className="w-4 h-4 text-primary" />
                  <span>Privacy Controls</span>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Need to change your advertising or cookie consent? Update your preferences in one click.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={openCookieModal}
                  className="w-full text-xs h-8 border-border hover:bg-primary hover:text-white transition-colors"
                >
                  Manage Cookie Settings
                </Button>
              </div>
            </div>
          </aside>

          {/* Policy Detail Content (Right Column) */}
          <main className="col-span-12 lg:col-span-8 xl:col-span-8 space-y-12">
            
            {/* SECTION 1: Introduction */}
            <article id="introduction" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    1. Introduction & Scope
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Welcome to <strong>Suriyan Prints</strong> (operating as and legally represented by <strong>Surya Enterprises</strong>, hereinafter referred to as <span className="text-foreground font-medium">"Suriyan Prints", "we", "us", or "our"</span>). We specialize in custom apparel printing, corporate gifting, personalized merchandise, and promotional products in Hyderabad, Telangana, India.
                </p>
                <p>
                  This Privacy Policy details how Suriyan Prints collects, handles, stores, processes, and protects your information when you access or interact with our official website located at:
                </p>
                <div className="p-3.5 bg-muted/60 rounded-xl border border-border text-foreground font-mono text-xs flex items-center justify-between">
                  <span>https://suriyanprints.vercel.app/</span>
                  <a
                    href="https://suriyanprints.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1 font-sans text-xs"
                  >
                    Visit Site <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p>
                  We are deeply committed to safeguarding visitor privacy and ensuring transparent information practices. This document describes our practices regarding both direct inquiries (e.g., custom apparel quotes, corporate orders, sample requests) and technical website usage data, including optional integrations such as Google Ads, Google Analytics, Google Tag Manager, cookies, and remarketing services where enabled.
                </p>
                <p>
                  By accessing or using our website, requesting a quotation, or communicating with us, you acknowledge that you have reviewed the provisions outlined in this Privacy Policy.
                </p>
              </div>
            </article>

            {/* SECTION 2: Information We Collect */}
            <article id="information-we-collect" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    2. Information We Collect
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  In accordance with the principle of data minimization, Suriyan Prints collects <strong className="text-foreground">only information strictly necessary for legitimate business purposes</strong>, such as fulfilling quote requests, printing custom merchandise, ensuring site security, and managing customer inquiries.
                </p>

                <h3 className="font-heading font-semibold text-foreground text-base mt-4">
                  A. Information You Voluntarily Provide to Us
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">Contact & Identification Details:</strong> Full name, organization/business name, email address, telephone number, and WhatsApp contact handle.
                  </li>
                  <li>
                    <strong className="text-foreground">Inquiries & Quote Specifications:</strong> Design files, artwork dimensions, fabric selections, print methods (e.g., DTF, screen printing, embroidery, vinyl sublimation), order quantities, deadline dates, and custom notes submitted via contact forms, quote requests, or direct messaging.
                  </li>
                  <li>
                    <strong className="text-foreground">Delivery & Commercial Data (where applicable):</strong> Shipping address, delivery pin code, recipient name, and GSTIN / billing details if commercial tax invoices are generated.
                  </li>
                  <li>
                    <strong className="text-foreground">Customer Support Communications:</strong> Messages, feedback, sample evaluations, and records of email or WhatsApp conversations exchanged with our team.
                  </li>
                </ul>

                <h3 className="font-heading font-semibold text-foreground text-base mt-4">
                  B. Information Collected Automatically Through Technical Means
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">Device & Technical Identifiers:</strong> Internet Protocol (IP) address (truncated/anonymized where supported), browser type and version, language preference, operating system, screen dimensions, and device model.
                  </li>
                  <li>
                    <strong className="text-foreground">Approximate Location Information:</strong> General country, state, or city-level location derived from IP addresses for routing and regional service feasibility (we do NOT track precise GPS coordinates).
                  </li>
                  <li>
                    <strong className="text-foreground">Website Usage & Interaction Data:</strong> Pages viewed, referring URLs, access timestamps, duration of visit, mockups generated in our interactive design tool, navigation sequences, and diagnostic error logs.
                  </li>
                  <li>
                    <strong className="text-foreground">Cookies and Local Storage:</strong> Small text tokens or browser session items used to remember session states, UI choices, and consent preferences.
                  </li>
                </ul>
              </div>
            </article>

            {/* SECTION 3: How We Use Information */}
            <article id="how-we-use-information" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Cog className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    3. How We Use Information
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  We process information strictly for legitimate commercial, operational, and customer fulfillment purposes, including:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <h4 className="font-semibold text-foreground text-xs mb-1">Quote Generation & Orders</h4>
                    <p className="text-xs">Preparing bespoke printing quotes, verifying artwork proofs, processing print orders, and dispatching physical samples or merchandise.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <h4 className="font-semibold text-foreground text-xs mb-1">Customer Support & Updates</h4>
                    <p className="text-xs">Communicating order statuses, answering printing queries, sending production proofs, and providing after-sales support via phone, email, or WhatsApp.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <h4 className="font-semibold text-foreground text-xs mb-1">Platform Performance & QA</h4>
                    <p className="text-xs">Diagnosing technical glitches, optimizing page load times across mobile and desktop devices, and ensuring responsive frontend rendering.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <h4 className="font-semibold text-foreground text-xs mb-1">Advertising Measurement</h4>
                    <p className="text-xs">Evaluating the reach and performance of our promotional campaigns (such as Google Ads) and analyzing aggregate conversion metrics where enabled.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <h4 className="font-semibold text-foreground text-xs mb-1">Security & Fraud Prevention</h4>
                    <p className="text-xs">Detecting malicious scraping, automated spam, denial-of-service attempts, fraudulent inquiries, and safeguarding our web infrastructure.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <h4 className="font-semibold text-foreground text-xs mb-1">Statutory & Tax Compliance</h4>
                    <p className="text-xs">Maintaining standard accounting ledgers, complying with Goods and Services Tax (GST) mandates, and satisfying lawful statutory requirements.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* SECTION 4: Cookies and Similar Technologies */}
            <article id="cookies-technologies" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    4. Cookies and Similar Technologies
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Cookies are small data files placed on your computer, tablet, or mobile phone by your web browser when visiting a website. Similar technologies include web beacons, tracking pixels, scripts, and HTML5 local storage.
                </p>
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-foreground">
                  <strong>Important Notice on Cookie Implementation:</strong> Suriyan Prints does not falsely assert that every cookie type is perpetually active. Non-essential cookies (such as analytics, marketing, and remarketing trackers) are deployed <em>only where applicable and when enabled or consented to</em> by the user.
                </div>

                <div className="overflow-x-auto my-4">
                  <table className="w-full text-left text-xs border border-border rounded-xl overflow-hidden">
                    <thead className="bg-muted text-foreground font-semibold">
                      <tr>
                        <th className="p-3 border-b border-border">Cookie Category</th>
                        <th className="p-3 border-b border-border">Purpose & Scope</th>
                        <th className="p-3 border-b border-border">Typical Duration</th>
                        <th className="p-3 border-b border-border">Consent Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/30">
                        <td className="p-3 font-medium text-foreground">Strictly Necessary</td>
                        <td className="p-3">Core security, route navigation, load balancing, preserving cookie preferences.</td>
                        <td className="p-3">Session to 1 Year</td>
                        <td className="p-3 text-muted-foreground">Always Active (Exempt)</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="p-3 font-medium text-foreground">Functional / Preference</td>
                        <td className="p-3">Saving UI themes, mockup generator configurations, and custom preferences.</td>
                        <td className="p-3">30 Days to 1 Year</td>
                        <td className="p-3 text-primary font-medium">User Configurable</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="p-3 font-medium text-foreground">Performance & Analytics</td>
                        <td className="p-3">Measuring visitor traffic, bounce rates, and popular printing categories (e.g. Google Analytics).</td>
                        <td className="p-3">Up to 2 Years</td>
                        <td className="p-3 text-primary font-medium">Consent Required</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="p-3 font-medium text-foreground">Advertising & Conversion</td>
                        <td className="p-3">Attributing advertising conversions from Google Ads and evaluating promotional efficacy.</td>
                        <td className="p-3">90 Days to 1 Year</td>
                        <td className="p-3 text-primary font-medium">Consent Required</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  You can inspect or adjust your cookie preferences at any time by clicking the button below or utilizing the persistent cookie control trigger located on the bottom-left of every page.
                </p>

                <div className="pt-2">
                  <Button
                    size="sm"
                    onClick={openCookieModal}
                    className="gradient-primary text-white hover:opacity-90 gap-2 text-xs sm:text-sm"
                  >
                    <Sliders className="w-4 h-4" />
                    Open Cookie Consent Settings
                  </Button>
                </div>
              </div>
            </article>

            {/* SECTION 5: Google Ads and Advertising */}
            <article id="google-ads-advertising" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border-2 border-primary/30 shadow-elevated">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 5 • Prominent Disclosure
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    5. Google Ads and Advertising
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Suriyan Prints may utilize <strong>Google Ads</strong> and related Google advertising platforms to promote our custom apparel, corporate gifting, and merchandise printing services to individuals and businesses searching for printing solutions.
                </p>

                <div className="p-4 rounded-xl bg-background border border-border space-y-3">
                  <h4 className="font-heading font-semibold text-foreground text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Mandatory Google Advertising Policy Disclosures
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs">
                    <li>
                      <strong className="text-foreground">Third-Party Cookies & Device Identifiers:</strong> Third-party vendors, including Google, may place and read cookies, web beacons, device identifiers, or similar technologies on your browser when advertising services are active to measure advertising performance and understand customer interactions with our advertisements.
                    </li>
                    <li>
                      <strong className="text-foreground">Advertising Performance & Conversion Tracking:</strong> When enabled, Google Ads conversion tracking cookies help us ascertain which search queries or advertisements led a visitor to request a quotation or contact us.
                    </li>
                    <li>
                      <strong className="text-foreground">Prohibition of Personally Identifiable Information (PII):</strong> Suriyan Prints adheres strictly to Google's Advertising Policies. <strong>We do not intentionally transmit personally identifiable information</strong> (such as your full name, email address, direct phone number, or physical address) to Google through advertising tags, conversion snippets, or remarketing codes.
                    </li>
                    <li>
                      <strong className="text-foreground">URL & Query String Hygiene:</strong> Our website does not expose customer names, email addresses, phone numbers, or private quotation information in web URLs, query parameters, or analytics tracking payloads.
                    </li>
                  </ul>
                </div>

                <p>
                  Google's use of advertising cookies enables it and its partners to serve ads based on your visit to Suriyan Prints and/or other sites on the Internet. You can manage or disable personalized advertising at any time through{" "}
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Google Ads Settings <ExternalLink className="w-3 h-3" />
                  </a>.
                </p>
              </div>
            </article>

            {/* SECTION 6: Google Analytics */}
            <article id="google-analytics" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 6
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    6. Google Analytics
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Where Google Analytics (such as Google Analytics 4) is implemented on our website, it collects pseudonymous statistical information about how visitors navigate and interact with our web pages.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">Metrics Captured:</strong> Pages viewed, time spent per page, button clicks (e.g. clicking "Chat on WhatsApp" or "Get a Quote"), browser user-agent, operating system, and approximate geographical region (country and city level derived from IP).
                  </li>
                  <li>
                    <strong className="text-foreground">Purpose of Processing:</strong> We utilize analytics data exclusively to understand site performance, evaluate product interest, identify broken navigation flows, and enhance the overall user experience.
                  </li>
                  <li>
                    <strong className="text-foreground">Implementation Scope:</strong> This section is structured to govern analytics data collection whenever the service is actively loaded. If analytics is deactivated, no analytics cookies are written to your browser.
                  </li>
                  <li>
                    <strong className="text-foreground">Google Analytics Opt-Out:</strong> Visitors can prevent their data from being collected by Google Analytics across all websites by installing the official{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium inline-flex items-center gap-0.5"
                    >
                      Google Analytics Opt-out Browser Add-on
                      <ExternalLink className="w-3 h-3" />
                    </a>.
                  </li>
                </ul>
              </div>
            </article>

            {/* SECTION 7: Remarketing and Personalized Advertising */}
            <article id="remarketing-personalized-ads" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 7
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    7. Remarketing and Personalized Advertising
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Where remarketing or personalized advertising features are activated, third-party advertising vendors (including Google) may use cookies, device identifiers, or similar tracking mechanisms to recognize that your browser previously visited Suriyan Prints.
                </p>
                <p>
                  This technology allows advertising networks to display relevant advertisements for Suriyan Prints products (such as custom corporate T-shirts or promotional items) when you subsequently visit other third-party websites across the Google Display Network or search on Google.
                </p>

                <div className="p-4 rounded-xl bg-muted/60 border border-border space-y-3">
                  <h4 className="font-heading font-semibold text-foreground text-sm">
                    How You Can Opt Out of Personalized Advertising
                  </h4>
                  <p className="text-xs">
                    In compliance with Google's requirements and international ad industry self-regulatory standards, you have the right and technical ability to opt out of interest-based ad targeting:
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 pt-1">
                    <a
                      href="https://adssettings.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border text-xs font-semibold text-primary hover:border-primary transition-colors"
                    >
                      Google Ads Settings <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://optout.networkadvertising.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border text-xs font-medium text-foreground hover:border-primary transition-colors"
                    >
                      NAI Consumer Opt-Out <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://optout.aboutads.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border text-xs font-medium text-foreground hover:border-primary transition-colors"
                    >
                      DAA WebChoices Tool <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://www.youronlinechoices.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border text-xs font-medium text-foreground hover:border-primary transition-colors"
                    >
                      Your Online Choices (EU/UK) <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  <em>Note:</em> Opting out of personalized advertising does not mean you will cease seeing online advertisements; rather, advertisements presented to you will no longer be customized based on your previous browsing history on our site.
                </p>
              </div>
            </article>

            {/* SECTION 8: Third-Party Services */}
            <article id="third-party-services" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 8
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    8. Third-Party Services
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  To deliver a robust web experience, host infrastructure, communicate in real-time, and process customer requests, Suriyan Prints integrates with selected third-party service providers. Each provider operates under its respective terms and privacy practices:
                </p>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-foreground text-xs">Vercel Inc. (Cloud Hosting & CDN)</span>
                      <span className="text-[11px] text-muted-foreground">Essential Infrastructure</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Provides reliable edge server hosting, automated SSL encryption certificates, and edge caching for high-speed content delivery.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-foreground text-xs">Google LLC (Advertising, Analytics & Maps)</span>
                      <span className="text-[11px] text-primary">Marketing & Analytics (Optional)</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Provides Google Ads, Google Analytics, Google Tag Manager (when enabled), and embedded Google Maps for locating our manufacturing facility and showroom in Quthbullapur, Hyderabad.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-foreground text-xs">WhatsApp / Meta Platforms Inc.</span>
                      <span className="text-[11px] text-muted-foreground">Direct Communication</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Facilitates rapid customer inquiries, artwork proofs, and quotation updates via WhatsApp Click-to-Chat. Clicking WhatsApp links redirects to Meta's communication service under Meta's Privacy Policy.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-foreground text-xs">Banking & Payment Networks (where applicable)</span>
                      <span className="text-[11px] text-muted-foreground">Financial Settlement</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Direct UPI, NEFT/RTGS bank transfers, or authorized payment processors used when settling commercial printing invoices. Suriyan Prints does not store sensitive credit or debit card CVVs on our web servers.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* SECTION 9: How We Share Information */}
            <article id="how-we-share-information" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 9
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    9. How We Share Information
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Suriyan Prints does not sell, rent, lease, or monetize your personal information to third parties for money.</strong>
                </p>
                <p>
                  Information may be shared with vetted external entities only under the following legitimate, strictly controlled conditions:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">Logistics & Courier Delivery Partners:</strong> When you place an order or request fabric swatches, your recipient name, physical shipping address, and phone number are shared with trusted logistics carriers (e.g., DTDC, Delhivery, Blue Dart, India Post) solely to deliver physical goods.
                  </li>
                  <li>
                    <strong className="text-foreground">Operational IT Service Providers:</strong> Technical service providers (such as hosting, server uptime monitoring, and email delivery) who are contractually bound to maintain strict confidentiality and data protection.
                  </li>
                  <li>
                    <strong className="text-foreground">Legal & Statutory Obligations:</strong> When disclosure is strictly mandated by applicable laws, judicial orders, court subpoenas, or to protect the vital legal rights, safety, and property of Suriyan Prints, our customers, or the public.
                  </li>
                  <li>
                    <strong className="text-foreground">Business Reorganization:</strong> In the hypothetical event of a business merger, consolidation, restructuring, or transfer of enterprise assets, customer records would be transferred subject to equivalent confidentiality and privacy commitments.
                  </li>
                </ul>
              </div>
            </article>

            {/* SECTION 10: Data Security */}
            <article id="data-security" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 10
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    10. Data Security
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  We have implemented reasonable and appropriate administrative, technical, and physical safeguards designed to protect your personal information against unauthorized access, alteration, destruction, disclosure, or loss:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">Encryption in Transit:</strong> Our website enforces 256-bit Transport Layer Security (TLS/HTTPS) across all pages, ensuring that communications between your web browser and our edge servers remain encrypted.
                  </li>
                  <li>
                    <strong className="text-foreground">Access Controls:</strong> Administrative access to order inquiries, emails, and customer specifications is restricted strictly to authorized production and customer service personnel.
                  </li>
                  <li>
                    <strong className="text-foreground">Infrastructure Hardening:</strong> Hosted on modern, ISO/IEC 27001-certified edge cloud architecture with automated distributed denial-of-service (DDoS) mitigation.
                  </li>
                </ul>
                <div className="p-3.5 bg-muted/60 rounded-xl border border-border text-xs text-muted-foreground">
                  <strong className="text-foreground">Legal Disclaimer on Security:</strong> While we employ industry-standard safeguards to protect your personal data, no method of transmission over the Internet or electronic storage mechanism can be guaranteed to be completely 100% impenetrable. Consequently, we cannot warrant absolute, fail-safe security.
                </div>
              </div>
            </article>

            {/* SECTION 11: Data Retention */}
            <article id="data-retention" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 11
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    11. Data Retention
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  We retain personal information only for as long as reasonably necessary to fulfill the specific purposes for which it was originally collected, including:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">Inquiries & Quote Requests:</strong> Maintained for up to 12 months to facilitate subsequent order discussions, repeat pricing, or fabric re-orders.
                  </li>
                  <li>
                    <strong className="text-foreground">Completed Orders & Invoices:</strong> Commercial transaction documents, tax invoices, and artwork approval receipts are retained for up to 7 years in accordance with Indian commercial accounting and Goods and Services Tax (GST) statutory requirements.
                  </li>
                  <li>
                    <strong className="text-foreground">Technical Server Logs:</strong> Rotated and automatically purged periodically (typically within 30 to 90 days), unless required for ongoing cyber security incident investigations.
                  </li>
                </ul>
                <p>
                  When personal information is no longer needed for commercial fulfillment, legal dispute resolution, or statutory compliance, it is securely destroyed, deleted from active databases, or anonymized for statistical reporting.
                </p>
              </div>
            </article>

            {/* SECTION 12: User Rights and Choices */}
            <article id="user-rights-choices" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 12
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    12. User Rights and Choices
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Depending on your jurisdiction and applicable data protection legislation (such as India's Digital Personal Data Protection Act, or international principles where applicable), you may have certain rights concerning your personal information:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                  <div className="p-3 rounded-xl bg-background border border-border">
                    <strong className="text-foreground text-xs block mb-1">Right to Access</strong>
                    <span className="text-xs">Request confirmation of whether we hold your information and obtain an electronic summary.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-background border border-border">
                    <strong className="text-foreground text-xs block mb-1">Right to Rectification</strong>
                    <span className="text-xs">Request correction or updates to inaccurate, outdated, or incomplete contact details.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-background border border-border">
                    <strong className="text-foreground text-xs block mb-1">Right to Erasure</strong>
                    <span className="text-xs">Request deletion of your information, subject to mandatory statutory tax retention obligations.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-background border border-border">
                    <strong className="text-foreground text-xs block mb-1">Right to Withdraw Consent</strong>
                    <span className="text-xs">Revoke consent previously granted for marketing communications or optional cookies.</span>
                  </div>
                </div>

                <p>
                  To exercise any of these rights, please contact our privacy representative at{" "}
                  <a href="mailto:suryaenterprises244@gmail.com" className="text-primary hover:underline font-semibold">
                    suryaenterprises244@gmail.com
                  </a>
                  . We will evaluate your request and respond within a reasonable timeframe in compliance with applicable law.
                </p>
              </div>
            </article>

            {/* SECTION 13: Children's Privacy */}
            <article id="childrens-privacy" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 13
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    13. Children's Privacy
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Suriyan Prints is a commercial custom apparel printing and corporate gifting service. Our website and services are not directed toward children under 18 years of age (or the applicable age of minority in your jurisdiction).
                </p>
                <p>
                  We do not knowingly solicit or collect personal information from children. If we become aware that an individual under the applicable age of majority has provided us with personal information without verified parental or legal guardian consent, we will promptly take steps to delete such data from our operational systems. If you believe a minor has supplied us with information, please notify us immediately at{" "}
                  <a href="mailto:suryaenterprises244@gmail.com" className="text-primary hover:underline font-semibold">
                    suryaenterprises244@gmail.com
                  </a>.
                </p>
              </div>
            </article>

            {/* SECTION 14: External Links */}
            <article id="external-links" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 14
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    14. External Links
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Our website may contain links to external third-party websites or services (for example, Google Maps for driving directions, WhatsApp for instant chat, supplier portals, or social media pages).
                </p>
                <p>
                  Please note that Suriyan Prints has no control over and assumes no legal responsibility for the content, privacy policies, terms, or practices of any third-party websites. We encourage you to review the privacy policy of every external site you visit.
                </p>
              </div>
            </article>

            {/* SECTION 15: Changes to This Privacy Policy */}
            <article id="changes-to-policy" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 15
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    15. Changes to This Privacy Policy
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  We may update, revise, or modify this Privacy Policy periodically to reflect changes in our operational procedures, technological upgrades, advertising implementations, or applicable regulatory mandates.
                </p>
                <p>
                  Whenever changes are made, the revised version will be published on this page with an updated <strong className="text-foreground">"Last Updated"</strong> date at the top of the document. We recommend that you review this Privacy Policy from time to time to remain informed about our data protection practices.
                </p>
              </div>
            </article>

            {/* SECTION 16: Contact Us */}
            <article id="contact-us" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider font-heading">
                    Section 16 • Official Contact
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    16. Contact Us
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  If you have questions, inquiries, concerns, or requests regarding this Privacy Policy or how your personal data is handled by Suriyan Prints, please contact us through any of the following verified official channels:
                </p>

                <div className="p-5 rounded-2xl bg-background border border-border space-y-4">
                  <div className="font-heading font-bold text-base text-foreground">
                    Suriyan Prints (Surya Enterprises)
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground block mb-0.5">Physical Facility & Address:</strong>
                        Ayodhya Nagar, Quthbullapur, Hyderabad, Telangana 500055, India
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground block mb-0.5">Official Privacy Email:</strong>
                        <a href="mailto:suryaenterprises244@gmail.com" className="text-primary hover:underline font-mono">
                          suryaenterprises244@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground block mb-0.5">Direct Phone / WhatsApp:</strong>
                        <a href="tel:+919676662304" className="text-primary hover:underline font-mono">
                          +91 96766 62304
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground block mb-0.5">Customer Support Hours:</strong>
                        Everyday: 8:00 AM – 12:00 PM (IST)
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border flex flex-wrap gap-3">
                    <a href="mailto:suryaenterprises244@gmail.com">
                      <Button size="sm" className="gradient-primary text-white hover:opacity-90 gap-1.5 text-xs">
                        <Mail className="w-3.5 h-3.5" />
                        Send Privacy Inquiry
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/919676662304?text=Hi%20Suriyan%20Prints,%20I%20have%20a%20question%20regarding%20privacy%20and%20data."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="gap-1.5 text-xs border-border hover:bg-muted">
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </article>

          </main>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-20 left-6 z-40 w-11 h-11 rounded-full bg-secondary text-white shadow-elevated hover:bg-primary hover:scale-105 transition-all flex items-center justify-center"
            aria-label="Back to top of privacy policy"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PrivacyPolicyPage;
