import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Truck, Palette, Headphones, ArrowRight, Award, Shirt } from "lucide-react";
import { HOMEPAGE_CATEGORIES, TSHIRT_PRODUCT_SLUGS } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { buildQuoteMessage, whatsappUrl } from "@/data/site";
import { ProductCard } from "@/components/product-card";
import { CategoryCard } from "@/components/category-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SuriyanPrints — Custom T-Shirts, Printing & Merchandise" },
      {
        name: "description",
        content:
          "Premium custom T-shirt printing from ₹299 with bulk order support, plus branded bottles, caps, badges, corporate gifts, pens, and stamps. Fast delivery across India.",
      },
      { property: "og:title", content: "SuriyanPrints — Custom T-Shirts & Printing" },
      {
        property: "og:description",
        content:
          "Premium custom T-shirt printing for teams, events, schools, and businesses with high-quality branded merchandise solutions.",
      },
    ],
  }),
  component: HomePage,
});

function PremiumHeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="premium-hero-heading"
      style={{ backgroundImage: "linear-gradient(135deg, hsl(359 75% 38%), hsl(215 80% 16%))" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.24),transparent_55%)]" />
      <div className="container-page relative py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
          <FadeIn>
            <div className="text-white">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/35 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-5">
                <Shirt className="h-3.5 w-3.5" aria-hidden="true" />
                T-Shirt Printing Specialists
              </p>
              <h1 id="premium-hero-heading" className="text-white text-3xl sm:text-4xl md:text-5xl mb-4">
                Premium Custom T-Shirt Printing
              </h1>
              <p className="text-white/90 text-base md:text-lg max-w-xl mb-8">
                High-quality custom printing for businesses, events, teams, schools, and brands.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 max-w-xl mb-8">
                <div className="rounded-xl border border-white/30 bg-white/10 backdrop-blur px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wider text-white/75 font-medium mb-1">Round Neck</p>
                  <p className="text-xl font-bold">Starting from ₹299</p>
                </div>
                <div className="rounded-xl border border-white/30 bg-white/10 backdrop-blur px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wider text-white/75 font-medium mb-1">Polo T-Shirts</p>
                  <p className="text-xl font-bold">Starting from ₹349</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/clothing-bags" search={{ sub: "T-Shirts" }} className="btn-primary !bg-white !text-primary">
                  Order Now
                </Link>
                <a href="/#get-quote" className="btn-secondary !border-white !text-white hover:!bg-white/10">
                  Get Quote
                </a>
                <a
                  href={whatsappUrl("Hi Suriyan Prints! I want premium custom T-shirt printing details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mx-auto w-full max-w-md">
              <div className="rounded-3xl overflow-hidden border border-white/25 shadow-2xl bg-white/5 backdrop-blur">
                <img
                  src="/images/custom-tshirts.png"
                  alt="Premium custom T-shirt printing samples"
                  className="w-full aspect-[4/5] object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section >
  );
}

function FeaturedTShirtsSection() {
  const tshirts = TSHIRT_PRODUCT_SLUGS.map((slug) => PRODUCTS.find((p) => p.slug === slug)!).filter(Boolean);

  return (
    <section className="bg-surface border-b border-border" aria-labelledby="featured-tshirts-heading">
      <div className="container-page py-14 md:py-18">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-sm">
                  <Award className="h-3.5 w-3.5" aria-hidden="true" />
                  Best Seller
                </span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">#1 Category</span>
              </div>
              <h2 id="featured-tshirts-heading" className="text-2xl md:text-3xl font-bold tracking-tight">
                Custom T-Shirts
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Our most in-demand category for teams, businesses, schools, and events with premium quality print finish and fast turnaround.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0 self-start sm:self-auto">
              <Link
                to="/clothing-bags"
                search={{ sub: "T-Shirts" }}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Shop T-Shirts <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="/#get-quote" className="btn-secondary inline-flex items-center justify-center">
                Quick Quote
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
          {tshirts.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.06}>
              <ProductCard product={product} size="large" />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl border border-border bg-card p-3">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Round Neck</p>
              <p className="font-bold text-primary text-lg">From ₹299</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Polo</p>
              <p className="font-bold text-primary text-lg">From ₹349</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 sm:col-span-2">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Bulk Orders</p>
              <p className="font-semibold">Discounted rates from 10+ units with dedicated support.</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              Bulk discounts from 10+ units
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              Sizes XS – 4XL
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              DTF &amp; screen print options
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const TRUST = [
  { Icon: CheckCircle2, label: "Premium Quality Printing" },
  { Icon: Truck, label: "Fast Delivery" },
  { Icon: Award, label: "Bulk Order Discounts" },
  { Icon: Palette, label: "Custom Design Support" },
  { Icon: CheckCircle2, label: "Affordable Pricing" },
  { Icon: Headphones, label: "Reliable Customer Service" },
];

function HomePage() {
  const [quoteData, setQuoteData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "Custom T-Shirts",
    details: "",
  });

  const submitQuote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const quoteMessage = buildQuoteMessage(quoteData);
    window.open(whatsappUrl(quoteMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PremiumHeroSection />
      <FeaturedTShirtsSection />

      <section className="container-page py-14 md:py-16" aria-label="Shop by category">
        <FadeIn>
          <SectionHeading eyebrow="Explore other products">More custom products</SectionHeading>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {HOMEPAGE_CATEGORIES.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.04}>
              <CategoryCard
                name={c.name}
                to={c.route}
                image={c.image}
                blurb={c.blurb}
                search={c.search}
                size="compact"
              />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-page py-10 grid grid-cols-2 md:grid-cols-3 gap-6">
          {TRUST.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="get-quote" className="container-page py-16 scroll-mt-28">
        <div
          className="relative overflow-hidden rounded-2xl p-8 md:p-10 border border-border bg-card"
          style={{ backgroundImage: "linear-gradient(120deg, hsl(359 75% 35%), hsl(35 90% 50%))" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-start">
            <div className="text-white">
              <h2 className="text-white mb-3">Get a quick custom quote</h2>
              <p className="opacity-90 text-base md:text-lg mb-6">
                Share your requirement and our team will respond with pricing, print options, and delivery timelines.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/clothing-bags" search={{ sub: "Polo T-Shirts" }} className="btn-primary !bg-white !text-primary">
                  Order Polo T-Shirts
                </Link>
                <a
                  href={whatsappUrl("Hi Suriyan Prints! I need a quote for a bulk custom order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <form onSubmit={submitQuote} className="bg-white rounded-xl p-4 md:p-5 shadow-lg space-y-3">
              <label className="block text-sm">
                <span className="font-medium text-foreground">Name</span>
                <input
                  required
                  value={quoteData.name}
                  onChange={(e) => setQuoteData((v) => ({ ...v, name: e.target.value }))}
                  className="mt-1 w-full rounded-md border border-input px-3 py-2"
                />
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block text-sm">
                  <span className="font-medium text-foreground">Company</span>
                  <input
                    required
                    value={quoteData.company}
                    onChange={(e) => setQuoteData((v) => ({ ...v, company: e.target.value }))}
                    className="mt-1 w-full rounded-md border border-input px-3 py-2"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-foreground">Phone</span>
                  <input
                    required
                    value={quoteData.phone}
                    onChange={(e) => setQuoteData((v) => ({ ...v, phone: e.target.value }))}
                    className="mt-1 w-full rounded-md border border-input px-3 py-2"
                  />
                </label>
              </div>
              <label className="block text-sm">
                <span className="font-medium text-foreground">Email</span>
                <input
                  type="email"
                  required
                  value={quoteData.email}
                  onChange={(e) => setQuoteData((v) => ({ ...v, email: e.target.value }))}
                  className="mt-1 w-full rounded-md border border-input px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-foreground">Product</span>
                <select
                  value={quoteData.product}
                  onChange={(e) => setQuoteData((v) => ({ ...v, product: e.target.value }))}
                  className="mt-1 w-full rounded-md border border-input px-3 py-2 bg-white"
                >
                  <option>Custom T-Shirts</option>
                  <option>Custom Bottles</option>
                  <option>Caps</option>
                  <option>Badges</option>
                  <option>Corporate Gifts</option>
                  <option>Custom Pens</option>
                  <option>Stamps</option>
                </select>
              </label>
              <label className="block text-sm">
                <span className="font-medium text-foreground">Order details</span>
                <textarea
                  required
                  rows={3}
                  value={quoteData.details}
                  onChange={(e) => setQuoteData((v) => ({ ...v, details: e.target.value }))}
                  placeholder="Quantity, print type, delivery location, and timeline"
                  className="mt-1 w-full rounded-md border border-input px-3 py-2"
                />
              </label>
              <button type="submit" className="btn-primary w-full">
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
