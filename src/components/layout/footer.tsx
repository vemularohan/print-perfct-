import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logoUrl from "../../../assets/suriyanprintslogo.png";


const COLS = [
  {
    title: "Products",
    links: [
      { label: "T-shirts & Polos", to: "/clothing-bags" },
      { label: "Custom Bottles", to: "/drinkware" },
      { label: "Custom Caps", to: "/clothing-bags" },
      { label: "Custom Badges", to: "/labels-stickers" },
      { label: "Corporate Gifts", to: "/photo-gifts" },
      { label: "Custom Pens", to: "/pens" },
      { label: "Custom Stamps", to: "/stamps" },
    ],
  },
  {
    title: "Services & Tools",
    links: [
      { label: "Logo Maker", to: "/logomaker" },
      { label: "QR Code Generator", to: "/qr-code-generator" },
      { label: "Design Services", to: "/design-services" },
      { label: "Bulk Orders", to: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/" },
      { label: "Contact Us", to: "/" },
      { label: "Privacy Policy", to: "/" },
      { label: "Terms of Use", to: "/" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground mt-16">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-block bg-white p-2 rounded-lg">
            <img src={logoUrl} alt="SuriyanPrints Logo" className="h-8 w-auto max-w-[150px] object-contain" />
          </Link>
          <p className="mt-4 text-sm opacity-80 max-w-xs">
            Helping small businesses look professional with custom printing, design and merchandise.
          </p>
          <div className="mt-4 text-xs space-y-1.5 opacity-80">
            <p className="flex items-center gap-2">
              <span>📞</span> <a href="tel:+919676662304" className="hover:underline">+91 9676662304</a>
            </p>
            <p className="flex items-center gap-2">
              <span>💬</span> <a href="https://wa.me/919676662304?text=Hi%20Suriyan%20Prints,%20I'm%20interested%20in%20custom%20printing.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp: +91 9676662304</a>
            </p>
          </div>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {COLS.map((col) => (
          <div key={col.title}>
            <h3 className="text-base font-semibold mb-4">{col.title}</h3>
            <ul className="space-y-2.5 text-sm opacity-80">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:opacity-100 hover:underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-3 py-5 text-xs opacity-80">
          <p>© 2026 SuriyanPrints. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {["VISA", "MC", "UPI", "PhonePe", "Razorpay"].map((p) => (
              <span key={p} className="px-2.5 py-1 rounded bg-white/10 font-medium tracking-wide">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
