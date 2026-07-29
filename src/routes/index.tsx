import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Award, BadgeCheck, Building2, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight,
  Clock3, Factory, Gift, GraduationCap, HeartHandshake, Hospital, Layers3, Mail, MapPin,
  MessageCircle, PackageCheck, Palette, PenLine, Phone, Printer, Rocket, Scissors, Send, Shirt,
  Sparkles, Star, Trophy, Truck, Upload, UtensilsCrossed, WandSparkles, Sparkle, Layers, Cpu, ShieldCheck,
  ShoppingCart
} from "lucide-react";
import { buildQuoteMessage, SITE_CONTACT, whatsappUrl } from "@/data/site";
import { FadeIn } from "@/components/ui/fade-in";
import { addCartLine } from "@/lib/cart";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "SuriyanPrints — Premium Custom Printing & Merchandise" },
    { name: "description", content: "Premium custom T-shirts, apparel, corporate gifts and printing solutions for teams, schools and businesses across India." },
    { property: "og:title", content: "SuriyanPrints — Premium Custom Printing" },
    { property: "og:description", content: "Custom apparel, merchandise and print solutions, produced with care." },
  ] }),
  component: HomePage,
});

const HERO_SLIDES = [
  { title: "Premium Round Neck T-Shirt Printing", label: "T-Shirt Printing Specialists", description: "High-quality custom round-neck T-shirts for businesses, events, teams, schools, and brands.", image: "/images/custom-tshirts.png", route: "/clothing-bags", search: { sub: "T-Shirts" }, prices: [["Round Neck", "Starting from ₹299"], ["Bulk Orders", "Special team pricing"]], gradient: "linear-gradient(135deg, hsl(359 75% 38%), hsl(215 80% 16%))" },
  { title: "Smart Custom Polo T-Shirts", label: "Polos made for your brand", description: "Refined branded polos for teams, workplaces, hospitality and client-facing events.", image: "/images/polo-tshirts.png", route: "/clothing-bags", search: { sub: "Polo T-Shirts" }, prices: [["Pique Polo", "Starting from ₹349"], ["Embroidery", "Available on request"]], gradient: "linear-gradient(135deg, hsl(220 52% 20%), hsl(359 66% 40%))" },
  { title: "Business Shirts, Made Personal", label: "Polished teamwear", description: "Premium business shirts that help your team look coordinated, confident and ready to represent your brand.", image: "/images/dress-shirts.png", route: "/clothing-bags", search: { sub: "T-Shirts" }, prices: [["Formal Shirts", "Starting from ₹499"], ["Logo Embroidery", "Available on request"]], gradient: "linear-gradient(135deg, hsl(215 56% 18%), hsl(205 48% 32%))" },
  { title: "Custom Caps That Top It Off", label: "Headwear with presence", description: "Structured, comfortable caps with bold print or a refined embroidered logo finish.", image: "/images/custom-caps.png", route: "/clothing-bags", search: { sub: "Caps" }, prices: [["Custom Caps", "Starting from ₹149"], ["Embroidery", "Premium stitched finish"]], gradient: "linear-gradient(135deg, hsl(186 56% 23%), hsl(215 70% 17%))" },
  { title: "Bottles Your Brand Travels With", label: "Everyday brand visibility", description: "Useful everyday drinkware that keeps your logo visible from desk to commute.", image: "/images/water-bottles.png", route: "/drinkware", search: { sub: "Water Bottles" }, prices: [["Steel Bottles", "Starting from ₹399"], ["Bulk Gifting", "Made for every occasion"]], gradient: "linear-gradient(135deg, hsl(203 65% 27%), hsl(185 55% 24%))" },
  { title: "Corporate Gifts Worth Keeping", label: "Give your brand more meaning", description: "Curated branded gifts that make thoughtful welcomes, thank-yous and milestones feel special.", image: "/images/photo-gifts.png", route: "/photo-gifts", search: { sub: "Gift Sets" }, prices: [["Gift Sets", "Starting from ₹599"], ["Welcome Kits", "Tailored to your team"]], gradient: "linear-gradient(135deg, hsl(34 80% 38%), hsl(359 60% 38%))" },
  { title: "Custom Pens That Keep You Top of Mind", label: "A small detail with staying power", description: "Smart, useful branded pens for client meetings, welcome kits, conferences and daily work.", image: "/images/metal-pens.png", route: "/pens", search: { sub: "Metal Pens" }, prices: [["Metal Pens", "Starting from ₹49"], ["Corporate Orders", "Bulk rates available"]], gradient: "linear-gradient(135deg, hsl(255 38% 22%), hsl(328 49% 35%))" },
] as const;

const WHY_CHOOSE = [
  [Award, "Premium Printing", "Rich colour, crisp detail and dependable finishing."],
  [Shirt, "Embroidery Available", "Premium stitched branding for apparel and caps."],
  [Truck, "Fast Delivery", "Clear timelines and reliable dispatch."],
  [BadgeCheck, "Bulk Discounts", "Better value for growing teams and events."],
  [Building2, "Corporate Orders", "Dedicated support for recurring business needs."],
  [Sparkles, "Best Quality Materials", "Products people are proud to use and wear."],
] as const;

const CATEGORIES = [
  ["Round Neck T-Shirts", "/clothing-bags", { sub: "T-Shirts" }, "/images/custom-tshirts.png", Shirt],
  ["Polo T-Shirts", "/clothing-bags", { sub: "Polo T-Shirts" }, "/images/polo-tshirts.png", Shirt],
  ["Business Shirts", "/clothing-bags", { sub: "T-Shirts" }, "/images/dress-shirts.png", Shirt],
  ["Caps", "/clothing-bags", { sub: "Caps" }, "/images/custom-caps.png", Trophy],
  ["Bottles", "/drinkware", { sub: "Water Bottles" }, "/images/water-bottles.png", Sparkles],
  ["Badges", "/labels-stickers", {}, "/images/bumper-stickers.png", BadgeCheck],
  ["Pens", "/pens", { sub: "Metal Pens" }, "/images/metal-pens.png", PenLine],
  ["Corporate Gifts", "/photo-gifts", { sub: "Gift Sets" }, "/images/photo-gifts.png", Gift],
  ["Stamps", "/stamps", { sub: "Self Inking" }, "/images/self-inking-stamps.png", Printer],
] as const;

const INDUSTRIES = [
  [GraduationCap, "Schools"], [GraduationCap, "Colleges"], [Building2, "Corporate Companies"], [UtensilsCrossed, "Restaurants"],
  [CalendarDays, "Events"], [Hospital, "Hospitals"], [Rocket, "Startups"], [Trophy, "Sports Teams"],
] as const;

const TESTIMONIALS = [
  { name: "Priya Menon", role: "HR Manager, Nashik", image: "/images/polo-tshirts.png", quote: "Our polos arrived looking sharp and consistent across every size. The proofing process was simple and delivery was right on time." },
  { name: "Arjun Kulkarni", role: "College Event Lead", image: "/images/custom-tshirts.png", quote: "Suriyan Prints handled our tees and badges on a tight timeline. Great colour, clean printing and an incredibly responsive team." },
  { name: "Meera Shah", role: "Founder, Studio M", image: "/images/photo-gifts.png", quote: "The corporate gifting quality felt genuinely premium. Our branded welcome kits made a lovely first impression." },
];

const FAQS = [
  ["What is the minimum order quantity?", "You can begin with small quantities, while 10+ units unlock better bulk pricing. Share your size mix and artwork for an accurate quote."],
  ["Can you help with artwork and logo placement?", "Yes. Send even a rough idea and our design team will help prepare artwork and send a proof before production."],
  ["How quickly can my order be delivered?", "Timelines vary by product, quantity and finish. We confirm the production and delivery plan before your order is finalised."],
  ["Do you offer embroidery?", "Yes. Embroidery is available for select apparel and caps, offering a durable, premium stitched logo finish."],
];

function SectionHeading({ eyebrow, title, text, centered = false, dark = false }: { eyebrow: string; title: string; text?: string; centered?: boolean; dark?: boolean }) {
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-3xl`}>
      <p className={`font-extrabold uppercase tracking-[0.2em] text-xs mb-3 ${dark ? "text-amber-400" : "text-primary"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl md:text-5xl font-black tracking-tight leading-tight ${dark ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base md:text-lg ${dark ? "text-white/80" : "text-muted-foreground"} leading-relaxed`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

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

  return (
    <section 
      id="home"
      className="relative overflow-hidden border-b border-border transition-all duration-1000 ease-in-out" 
      style={{ backgroundImage: slide.gradient }} 
      onMouseEnter={() => setPaused(true)} 
      onMouseLeave={() => setPaused(false)} 
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
                className="btn-primary !bg-white !text-primary hover:!bg-white/90 shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300 font-bold text-base px-8 py-4 rounded-xl"
              >
                Configure Order <ArrowRight className="inline h-5 w-5 ml-2" />
              </Link>
              <a 
                href={whatsappUrl(`Hi Suriyan Prints! I want details about ${slide.title}.`)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center rounded-xl border border-white/35 px-8 py-4 font-bold text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5 mr-2" /> WhatsApp Consultation
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

const CATALOGUE_PRODUCTS = [
  { slug: "welcome-kit", name: "Welcome Kit", price: 1299, image: "/images/welcome-kit.png" },
  { slug: "custom-tshirts", name: "Custom T-shirt", price: 299, image: "/images/custom-tshirts.png" },
  { slug: "polo-tshirts", name: "Custom Polo T-shirt", price: 349, image: "/images/polo-tshirts.png" },
  { slug: "classic-custom-hoodie-beige", name: "Classic Custom Hoodie", price: 799, image: "/images/classic-custom-hoodie-beige.png" },
];

function HomePage() {
  const navigate = useNavigate();
  const [quoteData, setQuoteData] = useState({ name: "", company: "", email: "", phone: "", product: "Custom T-Shirts", details: "" });
  const submitQuote = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault(); 
    window.open(whatsappUrl(buildQuoteMessage(quoteData)), "_blank", "noopener,noreferrer"); 
  };

  return (
    <>
      <PremiumHeroSection />

      {/* PRODUCTS CATALOGUE */}
      <section className="bg-white py-8 md:py-12 border-b border-border">
        <div className="container-page">
          <div className="flex justify-center mb-6 md:mb-8">
            <Link 
              to="/clothing-bags" 
              className="text-[11px] font-black uppercase tracking-[0.25em] border-b-[1.5px] border-foreground pb-0.5 hover:text-primary hover:border-primary transition-all flex items-center gap-1.5"
            >
              Explore All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3.5 gap-y-8 md:gap-x-6 md:gap-y-10">
            {CATALOGUE_PRODUCTS.map((prod) => (
              <Link
                key={prod.slug}
                to="/product/$slug"
                params={{ slug: prod.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] bg-muted shadow-sm">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 px-0.5">
                  <h3 className="font-extrabold text-foreground text-xs md:text-sm tracking-tight leading-tight">
                    {prod.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-black text-[#111] text-xs md:text-sm">₹{prod.price}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addCartLine({ slug: prod.slug, qty: 1 });
                        navigate({ to: "/cart" });
                      }}
                      className="h-8 w-8 md:h-9 md:w-9 rounded-xl bg-[#f5f5f5] hover:bg-[#e5e5e5] active:scale-95 transition-all flex items-center justify-center text-foreground shrink-0"
                    >
                      <ShoppingCart className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED SECTION: Embroidery Services */}
      <section className="bg-surface border-b border-border overflow-hidden">
        <div className="container-page py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="order-2 lg:order-1 relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-primary to-indigo-600 opacity-10 blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-border bg-card p-3 shadow-card">
                <img src="/images/polo-tshirts.png" alt="Embroidery Showcase" className="w-full aspect-video object-cover rounded-xl mb-4" />
                <div className="p-4 bg-surface rounded-xl border border-border flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold">Premium Japanese Stitched Finish</h5>
                    <p className="text-xs text-muted-foreground">Up to 10,000 stitches per logo for outstanding density.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Premium Stitched</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <SectionHeading 
                eyebrow="Stitched Perfection" 
                title="Premium Embroidery Services" 
                text="Transform standard uniform apparel into premium corporate statements. Our professional multi-head embroidery machines provide rich, high-density stitched branding that lasts a lifetime."
              />
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="font-extrabold text-foreground text-base block">High Thread-Count Density</span>
                    <span className="text-sm text-muted-foreground">Thick, textured stitching that stands out, perfect for polo shirts, heavy caps, jackets, and canvas bags.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="font-extrabold text-foreground text-base block">Up to 12 Colors per Design</span>
                    <span className="text-sm text-muted-foreground">We handle complex multi-color emblems and crests using colorfast premium polyester threads.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="font-extrabold text-foreground text-base block">Industrial Consistency</span>
                    <span className="text-sm text-muted-foreground">Every stitch is digitally calibrated, ensuring your logo is identical on the first shirt and the thousandth.</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="#quote" className="btn-primary inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all">
                  Inquire About Embroidery <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DEDICATED SECTION: Bulk Orders */}
      <section id="bulk-orders" className="bg-gradient-to-br from-primary via-red-800 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container-page py-20 md:py-28 relative z-10">
          <FadeIn>
            <SectionHeading 
              eyebrow="Corporate & Enterprise" 
              title="Seamless Bulk Merchandise Orders" 
              text="Unlock maximum value with custom solutions scaled for organizations. Get volume-based discounts, premium material options, and a dedicated team handling logistics from design to delivery."
              centered
              dark
            />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 border border-white/15 rounded-3xl p-6 backdrop-blur-sm">
              <span className="h-12 w-12 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center mb-4">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <h4 className="text-lg font-black mb-2">Volume-Tier Pricing</h4>
              <p className="text-sm text-white/70 leading-relaxed">Save more on larger quantities. Enjoy deep price drops starting from orders of just 25 units up to thousands.</p>
            </div>
            <div className="bg-white/5 border border-white/15 rounded-3xl p-6 backdrop-blur-sm">
              <span className="h-12 w-12 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6" />
              </span>
              <h4 className="text-lg font-black mb-2">Dedicated Account Managers</h4>
              <p className="text-sm text-white/70 leading-relaxed">Direct support, real-time status updates, and custom invoicing for corporations, schools, and brands.</p>
            </div>
            <div className="bg-white/5 border border-white/15 rounded-3xl p-6 backdrop-blur-sm">
              <span className="h-12 w-12 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center mb-4">
                <Factory className="h-6 w-6" />
              </span>
              <h4 className="text-lg font-black mb-2">Physical Mockup Proofing</h4>
              <p className="text-sm text-white/70 leading-relaxed">For large orders (100+ units), request a physical printed sample before final mass production starts.</p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-white/10 border border-white/20 p-8 backdrop-blur-md max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div>
                <p className="text-amber-300 text-xs font-black uppercase tracking-widest mb-1">Bulk Program Benefits</p>
                <h4 className="text-xl font-bold">Need customized gifting solutions or kits?</h4>
                <p className="text-sm text-white/80 mt-2">Get free logistics coordination, premium packing options, and multi-location dispatch across India.</p>
              </div>
              <a href="#quote" className="btn-primary !bg-white !text-primary hover:!bg-white/95 shrink-0 px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all">
                Request Bulk Proposal <ArrowRight className="h-4.5 w-4.5 ml-2 inline" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED SECTION: Sports Team Printing */}
      <section className="bg-gradient-to-b from-white to-surface border-b border-border overflow-hidden">
        <div className="container-page py-20 md:py-28">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <FadeIn>
              <SectionHeading 
                eyebrow="Athletic & Teamwear" 
                title="Professional Sports Team Printing" 
                text="Engineered for high performance. Get custom-printed, moisture-wicking team wear for your club, academy, school, or corporate league. Durable prints that withstand sweat, stretch, and multiple washes."
              />
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Cricket Jerseys", "Football Jerseys", "Volleyball Jerseys", "Basketball Jerseys",
                  "Kabaddi Jerseys", "Badminton Jerseys", "Cycling Jerseys", "Marathon Event T-Shirts"
                ].map((sport) => (
                  <div key={sport} className="flex items-center gap-2 p-3.5 bg-card border border-border rounded-2xl shadow-sm hover:border-primary/30 transition-all duration-300">
                    <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="font-extrabold text-sm text-foreground">{sport}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-3.5 border-t border-border pt-8">
                <h4 className="text-sm uppercase tracking-widest text-primary font-bold">Premium Team Benefits</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs font-semibold text-muted-foreground">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" /> Starting from ₹449</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" /> Player Name & Number</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" /> Team Logo Printing</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" /> High-detail DTF Printing</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" /> Optional Embroidery</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" /> Bulk Team Discounts</div>
                  <div className="flex items-center gap-2 col-span-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" /> Fast Delivery Across India</div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href={whatsappUrl("Hi Suriyan Prints! I want to design custom sports jerseys for my team.")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all text-sm"
                >
                  Design Your Jersey <ArrowRight className="h-4.5 w-4.5" />
                </a>
                <a 
                  href="#quote" 
                  className="inline-flex items-center rounded-xl border border-primary px-7 py-3.5 font-bold text-primary hover:bg-primary/5 transition-all hover:-translate-y-0.5 text-sm"
                >
                  Get Team Quote
                </a>
                <a 
                  href={`tel:${SITE_CONTACT.phoneTel}`} 
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3.5 font-bold text-muted-foreground hover:bg-surface transition-all text-sm"
                >
                  Contact Sales
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-emerald-500 to-primary opacity-15 blur-2xl" />
              <div className="relative rounded-[2rem] bg-card border border-border p-6 shadow-card">
                <img 
                  src="/images/custom-tshirts.png" 
                  alt="Sports Jersey Mockup" 
                  className="w-full aspect-[4/3] object-cover rounded-2xl mb-6 border border-border"
                />
                <div className="p-4 bg-surface rounded-xl border border-border text-center">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-black block mb-1">Squad Special</span>
                  <h5 className="font-bold text-base">Sweat-Wicking DryFit Fabric</h5>
                  <p className="text-xs text-muted-foreground mt-1">Lightweight, stretchable, breathable fabric engineered specifically for active sports.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DEDICATED SECTION: Events Specialization */}
      <section id="event-orders" className="bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="container-page py-20 md:py-28 relative z-10">
          <FadeIn>
            <SectionHeading 
              centered
              dark
              eyebrow="Events Printing Division" 
              title="Expert Printing for Every Gathering" 
              text="From massive college fests to professional corporate expos and local charity runs. We provide customized apparel, badges, banners, and merchandise on tight timelines with express delivery options."
            />
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">
            {[
              { name: "College Fests", icon: GraduationCap, bg: "bg-white/5 hover:bg-primary/20" },
              { name: "Cultural Events", icon: Palette, bg: "bg-white/5 hover:bg-amber-500/20" },
              { name: "Sports Meets", icon: Trophy, bg: "bg-white/5 hover:bg-emerald-500/20" },
              { name: "Marathons", icon: Sparkle, bg: "bg-white/5 hover:bg-indigo-500/20" },
              { name: "Corporate Events", icon: Building2, bg: "bg-white/5 hover:bg-blue-500/20" },
              { name: "School Annual Days", icon: Award, bg: "bg-white/5 hover:bg-rose-500/20" },
              { name: "Conferences & Expos", icon: Layers, bg: "bg-white/5 hover:bg-teal-500/20" },
              { name: "Political Campaigns", icon: Factory, bg: "bg-white/5 hover:bg-red-500/20" },
              { name: "Charity Runs", icon: HeartHandshake, bg: "bg-white/5 hover:bg-violet-500/20" },
              { name: "Family Reunions", icon: Gift, bg: "bg-white/5 hover:bg-orange-500/20" }
            ].map((eventItem) => {
              const IconComp = eventItem.icon;
              return (
                <FadeIn key={eventItem.name} className="h-full">
                  <div className={`h-full rounded-2xl border border-white/10 ${eventItem.bg} p-6 text-center transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-center items-center`}>
                    <span className="h-12 w-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 transition-transform duration-300">
                      <IconComp className="h-6 w-6 text-amber-300" />
                    </span>
                    <h4 className="font-extrabold text-sm leading-snug">{eventItem.name}</h4>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <a 
              href={whatsappUrl("Hi Suriyan Prints! I need custom event printing services.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center gap-2 !bg-amber-400 !text-secondary hover:!bg-amber-300 font-bold px-8 py-4 rounded-xl transition-all"
            >
              <MessageCircle className="h-5 w-5" /> Consult Event Specialist
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="container-page py-20 md:py-28">
        <FadeIn>
          <SectionHeading 
            eyebrow="Explore the collections" 
            title="Shop by Print Category" 
            text="High-quality custom products engineered for brands, workspaces, gifting, and corporate giveaways."
          />
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          {CATEGORIES.map(([name, route, search, image, Icon], i) => (
            <FadeIn key={name} delay={i * 0.03}>
              <Link 
                to={route} 
                search={search as Record<string, string>} 
                className="group block rounded-3xl overflow-hidden border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={image} 
                    alt={name} 
                    loading="lazy" 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <span className="absolute top-4 left-4 h-10 w-10 rounded-2xl bg-white/95 text-primary shadow-sm inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between gap-2 bg-card">
                  <h3 className="font-extrabold text-sm group-hover:text-primary transition-colors">{name}</h3>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE SURIYAN PRINTS */}
      <section id="about" className="bg-surface border-y border-border">
        <div className="container-page py-20 md:py-28">
          <FadeIn>
            <SectionHeading 
              centered 
              eyebrow="Why Choose Suriyan Prints" 
              title="Print with confidence. Deliver with impact." 
              text="A thoughtful blend of industrial grade quality, swift fulfillment, and personalized support."
            />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {WHY_CHOOSE.map(([Icon, title, text], i) => (
              <FadeIn key={title} delay={i * 0.04}>
                <article className="h-full rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover flex flex-col justify-between">
                  <div>
                    <span className="h-12 w-12 rounded-2xl bg-primary/10 text-primary inline-flex items-center justify-center mb-6">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-extrabold text-lg">{title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER STORIES */}
      <section className="container-page py-20 md:py-28">
        <FadeIn>
          <SectionHeading 
            centered 
            eyebrow="Customer Stories" 
            title="Trusted for the details people notice" 
            text="From college event coordinators to corporate teams, our customers count on SuriyanPrints to deliver a polished impression."
          />
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {TESTIMONIALS.map((testimonial, i) => (
            <FadeIn key={testimonial.name} delay={i * 0.05}>
              <figure className="h-full rounded-3xl bg-card border border-border p-8 shadow-card flex flex-col justify-between">
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
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <img 
                    src={testimonial.image} 
                    alt="" 
                    loading="lazy" 
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary/20" 
                  />
                  <div>
                    <p className="font-black text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground font-semibold">{testimonial.role}</p>
                  </div>
                </div>
              </figure>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-surface border-y border-border">
        <div className="container-page py-20 md:py-28">
          <FadeIn>
            <SectionHeading 
              centered 
              eyebrow="Transparent Workflow" 
              title="From Initial Idea to Your Doorstep" 
            />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16 relative">
            {[[Shirt, "Choose Product"], [Upload, "Upload Design"], [Factory, "We Print"], [CheckCircle2, "Quality Check"], [PackageCheck, "Delivered"]].map(([Icon, title], i) => (
              <FadeIn key={title as string} delay={i * 0.05}>
                <article className="relative rounded-3xl border border-border bg-card p-6 text-center shadow-card h-full flex flex-col justify-center items-center">
                  <span className="absolute top-4 right-5 text-2xl font-black text-primary/10">0{i + 1}</span>
                  <span className="h-14 w-14 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="font-extrabold text-sm">{title as string}</p>
                  {i < 4 ? (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40 z-10" />
                  ) : null}
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE CLIENTS */}
      <section className="overflow-hidden border-b border-border bg-secondary text-white">
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

      {/* INDUSTRIES */}
      <section className="container-page py-20 md:py-28">
        <FadeIn>
          <SectionHeading 
            centered 
            eyebrow="Industries We Support" 
            title="Practical Merchandise for Every Team" 
            text="Whether coordinating high-end branding for corporate offices or supplying vibrant fests, we build options to suit your scale."
          />
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
          {INDUSTRIES.map(([Icon, name], i) => (
            <FadeIn key={name} delay={i * 0.03}>
              <article className="rounded-3xl border border-border bg-card p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
                <Icon className="h-7 w-7 text-primary mx-auto" />
                <p className="font-extrabold text-sm mt-4 text-foreground">{name}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="container-page py-20 md:py-28 border-t border-border">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <FadeIn>
            <SectionHeading 
              eyebrow="Frequently Asked Questions" 
              title="Everything you need to know before you print." 
              text="Have a custom order requirement or special printing request? Contact our support desk for personalized answers."
            />
            <a 
              href={whatsappUrl("Hi Suriyan Prints! I have a question about a custom order.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-primary text-white font-bold rounded-xl px-6 py-3.5 mt-8 shadow-md hover:bg-primary/95 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="space-y-4">
              {FAQS.map(([question, answer]) => (
                <details 
                  key={question} 
                  className="group rounded-3xl border border-border bg-card px-6 py-5 shadow-card transition-all duration-300"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-base text-foreground select-none">
                    <span>{question}</span>
                    <span className="text-primary text-2xl font-light transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-7 border-t border-border/50 pt-3">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
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
                  <option>Custom T-Shirts</option>
                  <option>Custom Sports Jerseys</option>
                  <option>Custom Bottles</option>
                  <option>Custom Caps</option>
                  <option>Custom Badges</option>
                  <option>Corporate Gifts</option>
                  <option>Custom Pens</option>
                  <option>Custom Stamps</option>
                </select>
              </label>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Message / Order Details
                <textarea required rows={3} value={quoteData.details} onChange={(event) => setQuoteData((value) => ({ ...value, details: event.target.value }))} placeholder="E.g. 50x Round Neck Shirts, Front DTF print, deliver to Bangalore by August 15" className="mt-1.5 w-full rounded-xl border border-input px-4 py-3 text-sm focus:outline-primary transition-all font-semibold" />
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
    </>
  );
}

