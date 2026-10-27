import { Phone, Mail, MapPin, Shield, FileText, Cookie } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const openCookieModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("suriyan_open_cookie_modal"));
  };

  const getHashLink = (hash: string) => {
    if (location.pathname === "/") {
      return `#${hash}`;
    }
    return `/#${hash}`;
  };

  return (
    <footer className="gradient-dark text-secondary-foreground pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold font-heading text-gradient">Suriyan Prints</span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/80">Surya Enterprises</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4 max-w-sm">
              Hyderabad's trusted partner for custom T-shirt printing, corporate gifting, uniforms, and promotional merchandise. Fast turnaround & precision quality.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary-foreground/60">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available Everyday: 8:00 AM – 12:00 PM (IST)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-heading mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <a href={getHashLink("about")} className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-primary transition-colors">Clients</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/mockup-generator" className="hover:text-primary transition-colors">Design Tool</Link>
              </li>
              <li>
                <a href={getHashLink("contact")} className="hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="font-semibold font-heading mb-4 text-foreground">Legal & Policies</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-primary" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <button
                  onClick={openCookieModal}
                  className="hover:text-primary transition-colors text-left bg-transparent border-none p-0 cursor-pointer inline-flex items-center gap-1.5 text-secondary-foreground/70"
                >
                  <Cookie className="w-3.5 h-3.5 text-primary" />
                  Cookie Preferences
                </button>
              </li>
              <li>
                <Link
                  to="/privacy#cookies"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  Cookie Policy Disclosures
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy#google-ads-advertising"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  Google Ads Disclosures
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold font-heading mb-4 text-foreground">Contact Info</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Ayodhya Nagar, Quthbullapur, Hyderabad, Telangana 500055, India</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+919676662304" className="hover:text-primary transition-colors">+91 96766 62304</a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:suryaenterprises244@gmail.com" className="hover:text-primary transition-colors break-all">suryaenterprises244@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/60">
          <div>
            © {new Date().getFullYear()} Suriyan Prints (Surya Enterprises). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-secondary-foreground/20">•</span>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <span className="text-secondary-foreground/20">•</span>
            <button onClick={openCookieModal} className="hover:text-primary transition-colors bg-transparent border-0 p-0 cursor-pointer">
              Cookie Preferences
            </button>
            <span className="text-secondary-foreground/20">•</span>
            <a href={getHashLink("contact")} className="hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
