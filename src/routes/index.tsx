import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Award, BadgeCheck, Building2, CheckCircle2, ChevronLeft, ChevronRight,
  Clock3, Factory, Gift, GraduationCap, HeartHandshake, Mail, MapPin,
  MessageCircle, PackageCheck, Phone, Printer, Send, Shirt,
  Sparkles, Star, Trophy, Truck, Upload
} from "lucide-react";
import { buildQuoteMessage, SITE_CONTACT, whatsappUrl } from "@/data/site";
import { FadeIn } from "@/components/ui/fade-in";
import { addCartLine } from "@/lib/cart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SuriyanPrints — Premium Custom Printing & Merchandise" },
      { name: "description", content: "Premium custom T-shirts, apparel, welcome kits, corporate gifts and printing solutions for teams, schools and businesses across India." },
      { property: "og:title", content: "SuriyanPrints — Premium Custom Printing" },
      { property: "og:description", content: "Custom apparel, merchandise and print solutions, produced with care." },
    ],
  }),
  component: HomePage,
});

const HERO_SLIDES = [
  { title: "Premium Corporate Welcome Kits", label: "Onboarding Specialists", description: "Curated onboarding boxes with logo-printed diaries, bottles, keychains, and premium packaging.", image: "/images/welcome-kit.png", route: "/photo-gifts", search: { sub: "Welcome Kits" }, prices: [["Welcome Kit", "Starting from ₹1299"], ["Custom Packaging", "Premium boxes included"]], gradient: "linear-gradient(135deg, hsl(34 80% 38%), hsl(359 60% 38%))" },
  { title: "High-Quality Custom T-Shirts", label: "T-Shirt Printing Specialists", description: "Soft cotton round-neck t-shirts customized with vibrant, durable prints for teams and fests.", image: "/images/custom-tshirts.png", route: "/clothing-bags", search: { sub: "T-Shirts" }, prices: [["Round Neck", "Starting from ₹299"], ["Bulk Pricing", "Available on request"]], gradient: "linear-gradient(135deg, hsl(359 75% 38%), hsl(215 80% 16%))" },
  { title: "Smart Custom Polo T-Shirts", label: "Polo Shirt Specialists", description: "Refined branded polo shirts, perfect for team uniforms, client meetings, and brand presence.", image: "/images/polo-tshirts.png", route: "/clothing-bags", search: { sub: "Polo T-Shirts" }, prices: [["Pique Polo", "Starting from ₹349"], ["Embroidery", "Available on request"]], gradient: "linear-gradient(135deg, hsl(220 52% 20%), hsl(359 66% 40%))" },
  { title: "Premium Custom Hoodies", label: "Fleece Hoodie Specialists", description: "Comfortable heavyweight fleece hoodies and sweatshirts with print or embroidery finishes.", image: "/images/classic-custom-hoodie-beige.png", route: "/clothing-bags", search: { sub: "Hoodies" }, prices: [["Fleece Hoodie", "Starting from ₹799"], ["Cozy Fit", "Unisex sizes XS-4XL"]], gradient: "linear-gradient(135deg, hsl(215 56% 18%), hsl(205 48% 32%))" },
  { title: "Premium Custom Embroidery", label: "Embroidery Specialists", description: "High-density Japanese stitched logos on shirts, jackets, uniforms, and structured caps.", image: "/images/dress-shirts.png", route: "/clothing-bags", search: { sub: "Embroidery" }, prices: [["Logo Stitching", "Starting from ₹149"], ["Quality Thread", "Up to 12 colors"]], gradient: "linear-gradient(135deg, hsl(186 56% 23%), hsl(215 70% 17%))" },
  { title: "High-Quality DTF Printing", label: "Direct-to-Film Specialists", description: "Vibrant, stretchable, and wash-resistant transfers for activewear, sports jerseys, and event tees.", image: "/images/banners.png", route: "/clothing-bags", search: { sub: "DTF Prints" }, prices: [["DTF Transfers", "Starting from ₹249"], ["Stretch Proof", "Vibrant colors"]], gradient: "linear-gradient(135deg, hsl(255 38% 22%), hsl(328 49% 35%))" },
  { title: "Branded Corporate Gifts", label: "Corporate Gifting Division", description: "High-utility premium gifts like custom bottles, ceramic mugs, notebook sets, and laptop bags.", image: "/images/photo-gifts.png", route: "/photo-gifts", search: {}, prices: [["Gift Items", "Starting from ₹199"], ["Custom Sets", "Made for every occasion"]], gradient: "linear-gradient(135deg, hsl(203 65% 27%), hsl(185 55% 24%))" },
] as const;

function PremiumHeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const slide = HERO_SLIDES[active];
  const show = (index: number) => setActive((index + HERO_SLIDES.length) % HERO_SLIDES.length);

  const handleUserInteraction = (index: number) => {
    show(index);
    setInteracted(true);
  };

  useEffect(() => {
    if (paused) return;

    let timer: number;

    if (interacted) {
      const interactionTimeout = window.setTimeout(() => {
        setInteracted(false);
      }, 10000);

      return () => window.clearTimeout(interactionTimeout);
    } else {
      timer = window.setInterval(() => {
        show(active + 1);
      }, 5000);

      return () => window.clearInterval(timer);
    }
  }, [active, paused, interacted]);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleUserInteraction(active + 1);
    }
    if (isRightSwipe) {
      handleUserInteraction(active - 1);
    }
  };

  return (
    <section 
      id="home"
      className="relative overflow-hidden border-b border-border transition-all duration-1000 ease-in-out" 
      style={{ backgroundImage: slide.gradient }} 
      onMouseEnter={() => setPaused(true)} 
      onMouseLeave={() => setPaused(false)} 
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-label="Featured product carousel"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div key={slide.title} className="container-page relative py-20 md:py-28 lg:py-32 animate-in fade-in slide-in-from-right-8 duration-700">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="text-white z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" /> {slide.label}
            </p>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 drop-shadow-md">
              {slide.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-light">
              {slide.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mb-10">
              {slide.prices.map(([label, price]) => (
                <div key={label} className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-4 transition-all hover:bg-white/10">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/70 font-bold mb-1">{label}</p>
                  <p className="text-xl md:text-2xl font-black tracking-tight">{price}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                to={slide.route === "/product/sports-jerseys" ? "/product/$slug" : (slide.route as any)}
                params={slide.route === "/product/sports-jerseys" ? { slug: "sports-jerseys" } : undefined}
                search={slide.search as Record<string, string>} 
                className="btn-primary !bg-white !text-primary hover:!bg-white/90 shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300 font-bold text-base px-6 py-3.5 rounded-xl"
              >
                Explore Products <ArrowRight className="inline h-4 w-4 ml-2" />
              </Link>
              <a 
                href="#quote"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 hover:bg-white/10 px-6 py-3.5 font-bold text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                Get Quote
              </a>
              <a 
                href={whatsappUrl(`Hi Suriyan Prints! I want details about ${slide.title}.`)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba56] text-white px-6 py-3.5 font-bold transition-all hover:-translate-y-0.5 shadow-md"
              >
                <MessageCircle className="h-4.5 w-4.5" /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md relative z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-transparent blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/30 shadow-2xl bg-white/5 backdrop-blur p-2">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full aspect-[4/5] object-cover rounded-[1.7rem] transition-transform duration-700 hover:scale-105" 
                fetchPriority={active === 0 ? "high" : "auto"} 
              />
            </div>
          </div>
        </div>
      </div>
      <button 
        type="button" 
        onClick={() => handleUserInteraction(active - 1)} 
        aria-label="Previous hero slide" 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-xl border border-white/20 bg-black/20 text-white hover:bg-white/20 hover:scale-105 inline-flex items-center justify-center transition-all backdrop-blur-sm z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        type="button" 
        onClick={() => handleUserInteraction(active + 1)} 
        aria-label="Next hero slide" 
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-xl border border-white/20 bg-black/20 text-white hover:bg-white/20 hover:scale-105 inline-flex items-center justify-center transition-all backdrop-blur-sm z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {HERO_SLIDES.map((item, index) => (
          <button 
            key={item.title} 
            type="button" 
            onClick={() => handleUserInteraction(index)} 
            aria-label={`Show ${item.title}`} 
            className={`h-2 rounded-full transition-all duration-300 ${index === active ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"}`} 
          />
        ))}
      </div>
    </section>
  );
}

const CATEGORIES = [
  {
    name: "Welcome Kits",
    desc: "Complete corporate onboarding kits & custom boxes.",
    img: "/images/welcome-kit.png",
    to: "/photo-gifts",
    search: { sub: "Welcome Kits" }
  },
  {
    name: "Custom T-Shirts",
    desc: "Premium round neck cotton t-shirts with durable prints.",
    img: "/images/custom-tshirts.png",
    to: "/clothing-bags",
    search: { sub: "T-Shirts" }
  },
  {
    name: "Polo T-Shirts",
    desc: "Professional collared polo t-shirts with custom logos.",
    img: "/images/polo-tshirts.png",
    to: "/clothing-bags",
    search: { sub: "Polo T-Shirts" }
  },
  {
    name: "Hoodies & Jackets",
    desc: "Heavyweight fleece hoodies with prints or premium stitching.",
    img: "/images/classic-custom-hoodie-beige.png",
    to: "/clothing-bags",
    search: { sub: "Hoodies" }
  },
  {
    name: "Embroidery Services",
    desc: "High-density Japanese stitched logos for corporate apparel.",
    img: "/images/dress-shirts.png",
    to: "/clothing-bags",
    search: { sub: "Embroidery" }
  },
  {
    name: "DTF Printing",
    desc: "Vibrant, stretchable direct-to-film prints for activewear.",
    img: "/images/banners.png",
    to: "/clothing-bags",
    search: { sub: "DTF Prints" }
  },
  {
    name: "Corporate Gifts",
    desc: "High-end customer gifts, drinkware, and accessories.",
    img: "/images/photo-gifts.png",
    to: "/photo-gifts"
  }
];

const GIFT_PRODUCTS = [
  { name: "Custom Mugs", img: "/images/ceramic-mugs.png", to: "/drinkware", search: { sub: "Ceramic Mugs" } },
  { name: "Steel Bottles", img: "/images/water-bottles.png", to: "/drinkware", search: { sub: "Water Bottles" } },
  { name: "Premium Diaries", img: "/images/diaries.png", to: "/stationery", search: { sub: "Diaries" } },
  { name: "Metallic Pens", img: "/images/metal-pens.png", to: "/pens", search: { sub: "Metal Pens" } },
  { name: "Laptop Bags", img: "/images/backpacks.png", to: "/clothing-bags" },
  { name: "Gift Boxes", img: "/images/welcome-kit.png", to: "/photo-gifts" },
  { name: "Office Folders", img: "/images/folders.png", to: "/stationery", search: { sub: "Folders" } }
];

const TESTIMONIALS = [
  { name: "Priya Menon", role: "HR Manager, Nashik", image: "/images/polo-tshirts.png", quote: "Our onboarding welcome kits arrived looking exceptionally premium. The custom printing on the diaries and bottles was flawless." },
  { name: "Arjun Kulkarni", role: "College Event Lead", image: "/images/custom-tshirts.png", quote: "Ordered 250 custom t-shirts for our annual fest. The DTF print quality is incredibly sharp and wash-resistant." },
  { name: "Meera Shah", role: "Founder, Studio M", image: "/images/photo-gifts.png", quote: "The logo embroidery on our corporate polo shirts is dense and clean. Exceptional customer support!" }
];

function HomePage() {
  const navigate = useNavigate();
  const [quoteData, setQuoteData] = useState({ name: "", company: "", email: "", phone: "", product: "Welcome Kits", details: "" });
  const submitQuote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappUrl(buildQuoteMessage(quoteData)), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-background min-h-screen">
      
      <PremiumHeroSection />

      {/* 2. PRODUCT CATEGORIES */}
      <section className="container-page py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-primary block mb-2">Our Offerings</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Shop by Merchandise Category</h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground">Select a category below to customize. Designed for durability and brand consistency.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.02}>
              <Link
                to={cat.to as any}
                search={cat.search as any}
                className="group flex flex-col h-full rounded-3xl overflow-hidden border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-primary font-bold text-xs">
                    <span>Explore Products</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. PREMIUM EMBROIDERY SECTION */}
      <section className="bg-surface border-y border-border overflow-hidden">
        <div className="container-page py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Gallery */}
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-md aspect-square bg-muted">
                  <img src="/images/polo-tshirts.png" alt="Embroidered Polo Shirt" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-md aspect-[3/4] bg-muted">
                  <img src="/images/custom-caps.png" alt="Embroidered Caps" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-md aspect-[3/4] bg-muted">
                  <img src="/images/dress-shirts.png" alt="Embroidered Jackets & Shirts" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-md aspect-square bg-muted flex items-center justify-center bg-secondary text-white p-6 text-center">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-black text-amber-400 block mb-2">Quality Standards</span>
                    <p className="text-xs text-white/80 leading-relaxed">Multi-head machinery with colorfast premium threads up to 10k stitches.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-primary block">Stitched Perfection</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Premium Custom Embroidery</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                High-quality logo embroidery for corporate apparel. Create a cohesive look across polo shirts, jackets, caps, and uniforms with durable, premium stitching.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-bold text-foreground">Polos, Jackets & Caps</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-bold text-foreground">Colorfast Polyester Threads</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-bold text-foreground">High Thread-Count Density</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-bold text-foreground">Digitally Calibrated Finish</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <a href="#quote" className="btn-primary inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all text-sm">
                  Inquire About Embroidery <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DTF PRINTING SECTION */}
      <section className="container-page py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-primary block">Vibrant & Flexible</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">High Quality DTF Printing</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Vibrant direct-to-film prints perfect for colorful designs, sports team jerseys, activewear, and event round-neck t-shirts. Engineered to withstand heavy stretching and repeated washes without cracking or fading.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#quote" className="btn-primary inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all text-sm">
                Get DTF Print Quote
              </a>
              <a
                href={whatsappUrl("Hi Suriyan Prints! I want to print with DTF.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-6 py-3.5 font-bold text-sm text-primary hover:bg-primary/5 transition-all hover:-translate-y-0.5"
              >
                WhatsApp Specs
              </a>
            </div>
          </div>

          {/* Process Visuals */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-muted shadow-sm col-span-2">
              <img src="/images/custom-tshirts.png" alt="DTF Process T-Shirts" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden aspect-square bg-muted shadow-sm">
                <img src="/images/sports-jerseys.png" alt="Sports Jerseys" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-muted shadow-sm">
                <img src="/images/banners.png" alt="Printed Banners" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. WELCOME KITS */}
      <section className="bg-surface border-y border-border">
        <div className="container-page py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-primary block mb-2">Onboarding & Milestones</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Premium Welcome Kits</h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">The ultimate employee onboarding package. Fully customized presentation boxes filled with premium branded products.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Box & Layout */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-4">
                <img src="/images/welcome-kit.png" alt="Onboarding Box Mockup" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-extrabold text-lg text-foreground">Welcome Gift Boxes</h4>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Elegant, heavyweight cardboard box structures with screen-printed company branding.</p>
            </div>

            {/* Apparel & Accessories */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-4">
                <img src="/images/polo-tshirts.png" alt="Apparel & Accessories" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-extrabold text-lg text-foreground">T-Shirts & Bottles</h4>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Include high-quality bio-washed t-shirts and laser-engraved double-walled steel bottles.</p>
            </div>

            {/* Stationery */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-4">
                <img src="/images/diaries.png" alt="Notebooks & Diaries" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-extrabold text-lg text-foreground">Diaries & ID Cards</h4>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Complete your pack with hardbound logo-embossed diaries, metallic pens, and premium lanyards.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="#quote" className="btn-primary inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all text-sm">
              Configure Welcome Kit <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. CORPORATE GIFTS */}
      <section className="container-page py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-primary block mb-2">Corporate Gifting</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Branded Corporate Gifts</h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground">Premium, high-utility gifts curated for clients, employee appreciation, and business events.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {GIFT_PRODUCTS.map((prod) => (
            <Link
              key={prod.name}
              to={prod.to as any}
              search={prod.search as any}
              className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={prod.img}
                  alt={prod.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-extrabold text-xs text-foreground group-hover:text-primary transition-colors">
                  {prod.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. DEDICATED BULK ORDERS SECTION */}
      <section id="bulk-orders" className="bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="container-page py-16 md:py-24 relative z-10 text-center max-w-4xl mx-auto">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 block mb-3">Enterprise Programs</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Need Bulk Pricing?</h2>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Contact us directly for the best corporate pricing. We supply high-end welcome kits and customized apparel to organizations nationwide.
          </p>
          <p className="text-amber-400 text-xs font-extrabold uppercase tracking-widest mt-4">
            Bulk Discounts Available on Request
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#quote" className="btn-primary !bg-white !text-primary hover:!bg-white/95 px-8 py-4 rounded-xl font-bold text-sm shadow-md transition-all">
              Request Quote
            </a>
            <a
              href={whatsappUrl("Hi Suriyan Prints! I want to inquire about bulk ordering custom merchandise.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 font-bold text-sm text-white transition-all"
            >
              <MessageCircle className="h-4.5 w-4.5" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE CLIENTS */}
      <section className="overflow-hidden border-b border-border bg-footer text-white">
        <div className="container-page py-12">
          <p className="text-center text-xs uppercase tracking-[0.25em] font-extrabold text-white/50 mb-8">
            Trusted by businesses, colleges, and sports clubs nationwide
          </p>
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-6">
            {["NOVA", "ASTER", "NORTHSTAR", "FLOREA", "CLOVER", "KINETIC", "ORBIT", "VANTAGE", "NOVA", "ASTER", "NORTHSTAR", "FLOREA", "CLOVER", "KINETIC", "ORBIT", "VANTAGE"].map((client, i) => (
              <span 
                key={`${client}-${i}`} 
                className="w-44 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center font-black tracking-[0.15em] text-white/80 text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER STORIES */}
      <section className="container-page py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-primary block mb-2">Success Stories</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">What Corporate Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name} className="h-full rounded-3xl bg-card border border-border p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex text-amber-500 mb-6">
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star key={star} className="h-4.5 w-4.5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm leading-7 text-muted-foreground italic mb-6">
                  “{testimonial.quote}”
                </blockquote>
              </div>
              <div className="flex items-center gap-3 border-t border-border/50 pt-5">
                <img 
                  src={testimonial.image} 
                  alt="" 
                  className="h-12 w-12 rounded-full object-cover border-2 border-primary/20" 
                />
                <div>
                  <p className="font-black text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* GET QUOTE & CONTACT PORTAL */}
      <section id="contact" className="container-page pb-12 md:pb-20 scroll-mt-28">
        <div id="quote" className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-16 text-white" style={{ backgroundImage: "linear-gradient(135deg, hsl(359 75% 35%), hsl(35 90% 50%))" }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_65%)]" />
          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <p className="font-extrabold uppercase tracking-[0.2em] text-xs text-white/80 mb-3">Get in Touch</p>
              <h2 className="text-white text-3xl md:text-5xl font-black leading-tight">Let's make your next order stand out.</h2>
              <p className="text-white/90 text-base md:text-lg mt-6 mb-10 leading-relaxed font-light">
                Share your printing specifications and quantities. Our team will get back to you with tailored quotes and production details.
              </p>
              
              <div className="space-y-6 text-sm font-semibold mb-10">
                <div className="flex items-center gap-4">
                  <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase text-white/60 tracking-wider">Phone</p>
                    <a href="tel:+919676662304" className="hover:underline text-base text-white">+91 9676662304</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase text-white/60 tracking-wider">WhatsApp</p>
                    <a href="https://wa.me/919676662304?text=Hi%20Suriyan%20Prints,%20I'm%20interested%20in%20custom%20printing.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="hover:underline text-base text-white">+91 9676662304</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase text-white/60 tracking-wider">Email</p>
                    <a href="mailto:info@suriyanprints.in" className="hover:underline text-base text-white">info@suriyanprints.in</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                    <Clock3 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase text-white/60 tracking-wider">Business Hours</p>
                    <p className="text-white">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase text-white/60 tracking-wider">Store Address</p>
                    <p className="text-white font-light">Suriyan Prints, 45, Main Road, Bhiwandi, Thane, Maharashtra - 421302</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+919676662304"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-primary hover:bg-white/95 transition-all shadow-md"
                >
                  <Phone className="h-4.5 w-4.5" /> Call Now
                </a>
                <a
                  href="https://wa.me/919676662304?text=Hi%20Suriyan%20Prints,%20I'm%20interested%20in%20custom%20printing.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all"
                >
                  <MessageCircle className="h-4.5 w-4.5" /> WhatsApp Us
                </a>
              </div>
            </div>
            
            <form onSubmit={submitQuote} className="rounded-3xl bg-white p-6 md:p-8 shadow-2xl space-y-4 text-foreground relative z-10 w-full">
              <p className="text-xs uppercase tracking-widest font-black text-primary mb-2">Request a Quote</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Name
                  <input required value={quoteData.name} onChange={(event) => setQuoteData((value) => ({ ...value, name: event.target.value }))} className="mt-1.5 w-full rounded-xl border border-input px-4 py-3 text-sm focus:outline-primary transition-all font-semibold" />
                </label>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Phone Number
                  <input required value={quoteData.phone} onChange={(event) => setQuoteData((value) => ({ ...value, phone: event.target.value }))} className="mt-1.5 w-full rounded-xl border border-input px-4 py-3 text-sm focus:outline-primary transition-all font-semibold" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Company / Organization
                  <input required value={quoteData.company} onChange={(event) => setQuoteData((value) => ({ ...value, company: event.target.value }))} className="mt-1.5 w-full rounded-xl border border-input px-4 py-3 text-sm focus:outline-primary transition-all font-semibold" />
                </label>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Email
                  <input type="email" required value={quoteData.email} onChange={(event) => setQuoteData((value) => ({ ...value, email: event.target.value }))} className="mt-1.5 w-full rounded-xl border border-input px-4 py-3 text-sm focus:outline-primary transition-all font-semibold" />
                </label>
              </div>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Product Interested In
                <select value={quoteData.product} onChange={(event) => setQuoteData((value) => ({ ...value, product: event.target.value }))} className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-primary transition-all font-semibold">
                  <option>Welcome Kits</option>
                  <option>Custom T-Shirts</option>
                  <option>Polo T-Shirts</option>
                  <option>Hoodies & Jackets</option>
                  <option>Custom Embroidery</option>
                  <option>DTF Printing</option>
                  <option>Corporate Gifts</option>
                </select>
              </label>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Message / Order Details
                <textarea required rows={3} value={quoteData.details} onChange={(event) => setQuoteData((value) => ({ ...value, details: event.target.value }))} placeholder="E.g. 50x Polo Shirts, Left chest Embroidery, deliver to Mumbai by September 1" className="mt-1.5 w-full rounded-xl border border-input px-4 py-3 text-sm focus:outline-primary transition-all font-semibold" />
              </label>
              <div className="pt-2 space-y-3">
                <button type="submit" className="btn-primary w-full inline-flex justify-center items-center gap-2 py-4 rounded-xl shadow-lg hover:shadow-primary/20 transition-all font-bold text-base">
                  Submit Quote Request <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
