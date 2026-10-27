import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gift, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { whatsappUrl } from "@/data/site";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore All Categories — SuriyanPrints" },
      { name: "description", content: "Explore premium custom merchandise, embroidered apparel, welcome kits, corporate gifts and professional printing services." },
    ],
  }),
  component: ExplorePage,
});

const EXPLORE_CATEGORIES = [
  {
    name: "Welcome Kits",
    description: "Premium curated welcome kits and employee onboarding gift boxes.",
    image: "/images/welcome-kit.png",
    to: "/photo-gifts",
    search: { sub: "Welcome Kits" },
    badge: "Most Popular",
  },
  {
    name: "Custom T-Shirts",
    description: "High-quality round neck cotton t-shirts with vibrant custom prints.",
    image: "/images/custom-tshirts.png",
    to: "/clothing-bags",
    search: { sub: "T-Shirts" },
  },
  {
    name: "Polo T-Shirts",
    description: "Refined branded polo shirts, perfect for team wear and events.",
    image: "/images/polo-tshirts.png",
    to: "/clothing-bags",
    search: { sub: "Polo T-Shirts" },
  },
  {
    name: "Hoodies & Sweatshirts",
    description: "Cozy, heavy-duty fleece hoodies with print or embroidery finishes.",
    image: "/images/classic-custom-hoodie-beige.png",
    to: "/clothing-bags",
    search: { sub: "Hoodies" },
  },
  {
    name: "Embroidery Services",
    description: "High-density Japanese stitched logos for a premium corporate uniform finish.",
    image: "/images/dress-shirts.png",
    to: "/clothing-bags",
    search: { sub: "Embroidery" },
    badge: "Premium",
  },
  {
    name: "DTF Printing",
    description: "Vibrant, stretchable direct-to-film prints for colorful designs.",
    image: "/images/banners.png",
    to: "/clothing-bags",
    search: { sub: "DTF Prints" },
  },
  {
    name: "Corporate Gifts",
    description: "Branded travel mugs, bottles, notebook gift sets, and custom items.",
    image: "/images/photo-gifts.png",
    to: "/photo-gifts",
  },
  {
    name: "Office Merchandise",
    description: "Business cards, personalized diaries, pens, folders, and stationery.",
    image: "/images/notebooks.png",
    to: "/stationery",
  },
];

function ExplorePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header Banner */}
      <section className="bg-surface py-12 md:py-16 border-b border-border">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-3">
            <Sparkles className="h-3 w-3" /> Complete Collections
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Explore All Categories
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
            Choose from our premium corporate gift sets, embroidered clothing options, or high-impact custom print services.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="container-page py-12 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {EXPLORE_CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.03}>
              <Link
                to={cat.to as any}
                search={cat.search as any}
                className="group flex flex-col h-full rounded-[1.75rem] overflow-hidden border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {cat.badge && (
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-black text-[9px] uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                      {cat.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-foreground group-hover:text-primary transition-colors duration-200">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-primary font-bold text-sm">
                    <span>Explore Products</span>
                    <span className="h-8 w-8 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors duration-300">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-[2.5rem] bg-secondary text-white p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-amber-400 text-xs font-black uppercase tracking-[0.2em] block mb-2">Tailored Solutions</span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">Need a completely custom package?</h2>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                Connect with our merchandise consultants to curate unique welcome kits or special merchandise tailored to your brand budget.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <Link to="/#quote" className="btn-primary !bg-white !text-primary hover:!bg-white/95 text-center px-6 py-3.5 rounded-xl font-bold text-sm">
                Get Custom Quote
              </Link>
              <a
                href={whatsappUrl("Hi Suriyan Prints! I want to consult with a custom merchandise expert.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 hover:bg-white/10 px-6 py-3.5 font-bold text-sm text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Consultant
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
