import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Truck, Palette, Headphones, ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS, POPULAR_SLUGS, TRENDING_SLUGS } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { CategoryCard } from "@/components/category-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SuriyanPrints — Custom Printing, Merchandise & Design" },
      { name: "description", content: "Shop visiting cards, t-shirts, signs, stationery, stamps and more. Fast delivery across India." },
      { property: "og:title", content: "SuriyanPrints — Custom Printing & Merchandise" },
      { property: "og:description", content: "Quality custom printing and merchandise for small businesses." },
    ],
  }),
  component: HomePage,
});

const SLIDES = [
  {
    bg: "linear-gradient(135deg, hsl(205 80% 35%), hsl(200 75% 50%))",
    eyebrow: "Top deal",
    title: "100 Visiting Cards at ₹200",
    sub: "Fast delivery. Professional quality. Designed in minutes.",
    image: "/images/standard-visiting-cards.png",
    cta: { label: "Shop Now", to: "/business-cards" as const },
  },
  {
    bg: "linear-gradient(135deg, hsl(220 50% 18%), hsl(205 60% 30%))",
    eyebrow: "New for monsoon",
    title: "Look Professional with Custom Rainwear",
    sub: "Branded umbrellas starting at ₹655.",
    image: "/images/umbrellas.png",
    ctaA: { label: "Umbrellas", to: "/photo-gifts" as const },
    ctaB: { label: "Raincoats", to: "/clothing-bags" as const },
  },
];

function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[500px] md:h-[560px] lg:h-[600px]">
        {SLIDES.map((s, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === idx ? 1 : 0, backgroundImage: s.bg }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
            <div className="container-page h-full flex items-center relative">
              <div className="grid md:grid-cols-2 gap-8 items-center w-full text-white">
                <div>
                  <p className="uppercase tracking-widest text-xs font-semibold opacity-80 mb-3">{s.eyebrow}</p>
                  <h1 className="text-white mb-4 text-3xl md:text-5xl font-bold leading-tight">{s.title}</h1>
                  <p className="text-lg opacity-90 mb-7">{s.sub}</p>
                  <div className="flex flex-wrap gap-3">
                    {"cta" in s && s.cta ? (
                      <Link to={s.cta.to} className="btn-primary flex items-center gap-2 !bg-white !text-primary">
                        {s.cta.label} <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {"ctaA" in s && s.ctaA ? (
                      <Link to={s.ctaA.to} className="btn-primary flex items-center gap-2 !bg-white !text-primary">
                        {s.ctaA.label} <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {"ctaB" in s && s.ctaB ? (
                      <Link to={s.ctaB.to} className="btn-secondary !border-white !text-white hover:!bg-white/10">
                        {s.ctaB.label}
                      </Link>
                    ) : null}
                  </div>
                </div>
                <div className="hidden md:flex justify-center items-center h-full max-h-[380px]">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="max-h-[360px] w-auto object-contain rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-2.5 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const TRUST = [
  { Icon: CheckCircle2, label: "Satisfaction Guaranteed" },
  { Icon: Truck, label: "Fast Delivery Across India" },
  { Icon: Palette, label: "Easy Design Tool" },
  { Icon: Headphones, label: "Expert Support" },
];

function HomePage() {
  const popular = POPULAR_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);
  const trending = TRENDING_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <>
      <HeroCarousel />

      <section className="container-page py-16">
        <FadeIn>
          <SectionHeading>Explore All Categories</SectionHeading>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((c, i) => (
            <FadeIn key={c.slug} delay={i * 0.04}>
              <CategoryCard name={c.name} to={c.route} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <FadeIn>
          <SectionHeading>Our Most Popular Products</SectionHeading>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {popular.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.03}>
              <ProductCard product={p} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container-page py-16 border-t border-border">
        <FadeIn>
          <SectionHeading>Trending</SectionHeading>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {trending.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.03}>
              <ProductCard product={p} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div
          className="relative overflow-hidden rounded-2xl p-10 md:p-16 text-white"
          style={{ backgroundImage: "linear-gradient(120deg, hsl(205 80% 30%), hsl(200 80% 50%))" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
          <div className="relative max-w-2xl">
            <h2 className="text-white mb-3">Need a custom design?</h2>
            <p className="opacity-90 text-lg mb-6">Our in-house experts can design logos, business cards, banners and more — usually within 48 hours.</p>
            <Link to="/design-services" className="btn-primary !bg-white !text-primary inline-flex items-center gap-2">
              Start Design Brief <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
