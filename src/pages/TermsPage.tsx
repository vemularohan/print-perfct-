import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Truck,
  CreditCard,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  ChevronRight,
  Scale,
  Clock,
  Printer,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";

const TermsPage = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Suriyan Prints - Custom Printing Services";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 md:pt-36 pb-12 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white relative overflow-hidden">
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
              <span className="text-white/90 font-medium">Terms & Conditions</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white shadow-sm">
                <Scale className="w-3.5 h-3.5" />
                Legal Terms of Service
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10">
                <Clock className="w-3.5 h-3.5 text-primary" />
                Effective Date: October 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-3xl leading-relaxed">
              Standard commercial terms governing custom apparel printing, corporate gifting, sample orders, artwork approvals, and digital communications with Suriyan Prints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 text-sm leading-relaxed text-muted-foreground">
        
        {/* Section 1 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-foreground font-heading font-bold text-lg">
            <FileText className="w-5 h-5 text-primary" />
            <h2>1. Acceptance of Terms</h2>
          </div>
          <p>
            By accessing the website at <a href="https://suriyanprints.vercel.app/" className="text-primary hover:underline font-mono">https://suriyanprints.vercel.app/</a>, requesting printing quotations, or ordering custom merchandise from <strong>Suriyan Prints</strong> (operating under <strong>Surya Enterprises</strong>, Hyderabad), you agree to be bound by these commercial Terms and Conditions, our Privacy Policy, and all applicable statutory laws of India.
          </p>
        </section>

        {/* Section 2 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-foreground font-heading font-bold text-lg">
            <Printer className="w-5 h-5 text-primary" />
            <h2>2. Custom Printing & Artwork Approvals</h2>
          </div>
          <p>
            For all custom printing orders (including T-shirts, hoodies, caps, drinkware, and promotional gifts):
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Digital Proof Approval:</strong> Prior to production runs, a digital artwork mockup/proof will be submitted to the client via email or WhatsApp. Production commences strictly upon written customer confirmation.
            </li>
            <li>
              <strong>Intellectual Property & Licensing:</strong> Clients warrant that all logos, trademarks, artwork, and text submitted for reproduction are owned by the client or used with valid legal authorization. Suriyan Prints assumes zero liability for trademark or copyright infringement arising from client-provided assets.
            </li>
            <li>
              <strong>Color & Material Variations:</strong> Minor variations between RGB computer displays and actual physical textile prints (e.g. Pantone / CMYK screen printing, DTF, heat transfer) may occur due to fabric absorption and pigment behavior.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-foreground font-heading font-bold text-lg">
            <CreditCard className="w-5 h-5 text-primary" />
            <h2>3. Quotations, Pricing & Payments</h2>
          </div>
          <p>
            Written quotations provided by Suriyan Prints are typically valid for 15 calendar days from issuance, subject to fabric availability and raw material market fluctuations.
          </p>
          <p>
            Custom bulk orders generally require an advance deposit prior to raw garment procurement and printing, with the remaining balance settled upon dispatch or delivery confirmation. Payments may be made via verified UPI, direct bank transfer, or designated commercial channels.
          </p>
        </section>

        {/* Section 4 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-foreground font-heading font-bold text-lg">
            <Truck className="w-5 h-5 text-primary" />
            <h2>4. Shipping, Delivery & Inspection</h2>
          </div>
          <p>
            We deliver orders across Hyderabad and throughout India via reputable courier and cargo logistics partners. While we strive to meet estimated turnaround dates, delivery timelines are subject to courier handling, regional transit conditions, and unforeseen force majeure events.
          </p>
          <p>
            Clients must inspect delivered packages upon receipt. Any transit damages or quantity discrepancies must be reported to our team within 48 hours of delivery accompanied by photographic evidence.
          </p>
        </section>

        {/* Section 5 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-foreground font-heading font-bold text-lg">
            <AlertCircle className="w-5 h-5 text-primary" />
            <h2>5. Cancellations, Returns & Refunds</h2>
          </div>
          <p>
            Because custom apparel and engraved merchandise are individually customized and rendered unsellable to others, <strong>customized orders cannot be cancelled or refunded once printing or embroidery production has started</strong>.
          </p>
          <p>
            If a defect is demonstrably caused by manufacturing or printing errors that deviate materially from the approved proof, Suriyan Prints will promptly reprint or rectify the affected pieces at no additional cost.
          </p>
        </section>

        {/* Section 6 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-foreground font-heading font-bold text-lg">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h2>6. Limitation of Liability & Dispute Jurisdiction</h2>
          </div>
          <p>
            To the maximum extent permitted by applicable law, Suriyan Prints / Surya Enterprises shall not be liable for indirect, incidental, or consequential damages resulting from delays or reliance on website content.
          </p>
          <p>
            These Terms and any disputes arising in connection with orders shall be governed by the laws of India, with exclusive judicial jurisdiction vested in the competent courts of <strong>Hyderabad, Telangana, India</strong>.
          </p>
        </section>

        {/* Section 7 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-foreground font-heading font-bold text-lg">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h2>7. Contact Information</h2>
          </div>
          <p>
            For questions regarding these Terms or our printing services, please contact:
          </p>
          <div className="p-4 rounded-xl bg-muted/50 border border-border space-y-2 text-xs">
            <div><strong>Suriyan Prints (Surya Enterprises)</strong></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Ayodhya Nagar, Quthbullapur, Hyderabad, Telangana 500055, India
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <a href="mailto:suryaenterprises244@gmail.com" className="text-primary hover:underline">
                suryaenterprises244@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <a href="tel:+919676662304" className="text-primary hover:underline">
                +91 96766 62304
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TermsPage;
