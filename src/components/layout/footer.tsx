import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const COLS = [
  {
    title: "Products",
    links: [
      { label: "Visiting Cards", to: "/business-cards" },
      { label: "T-shirts & Polos", to: "/clothing-bags" },
      { label: "Stationery", to: "/stationery" },
      { label: "Stamps", to: "/stamps" },
      { label: "Signs & Banners", to: "/signs-posters" },
      { label: "Labels & Stickers", to: "/labels-stickers" },
      { label: "Mugs & Gifts", to: "/photo-gifts" },
    ],
  },
  {
    title: "Services & Tools",
    links: [
      { label: "Logo Maker", to: "/logomaker" },
      { label: "QR Code Generator", to: "/qr-code-generator" },
      { label: "Design Services", to: "/design-services" },
      { label: "Bulk Orders", to: "/help-centre" },
    ],
  },
  {
    title: "Help & Company",
    links: [
      { label: "Help Centre", to: "/help-centre" },
      { label: "Track Order", to: "/account" },
      { label: "Returns Policy", to: "/help-centre" },
      { label: "About Us", to: "/help-centre" },
      { label: "Privacy Policy", to: "/help-centre" },
      { label: "Terms of Use", to: "/help-centre" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground mt-16">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <span className="absolute inset-0 rounded-md bg-secondary rotate-6" />
              <span className="absolute inset-0 rounded-md bg-accent -rotate-6 opacity-80" />
            </div>
            <span className="text-xl font-bold tracking-tight">PrintPerfect</span>
          </Link>
          <p className="mt-4 text-sm opacity-80 max-w-xs">
            Helping small businesses look professional with custom printing, design and merchandise.
          </p>
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
          <p>© 2026 PrintPerfect. All rights reserved.</p>
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
