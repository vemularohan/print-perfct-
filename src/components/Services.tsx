import {
  Shirt, Printer, Palette, Gift, Package, Award, CreditCard, Flag,
  Coffee, PenTool, KeyRound, BookOpen, Umbrella, ShoppingBag, Frame,
  TreePine, ChefHat, Sparkles, Gem, StickerIcon, BadgeCheck, Layers
} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const services = [
  // Apparel & Printing
  {
    icon: Shirt,
    title: "Apparel Printing",
    description: "Custom T-shirts, hoodies, sweatshirts, and jerseys with your designs, logos, and artwork for events and businesses.",
    category: "Apparel",
  },
  {
    icon: Shirt,
    title: "Jerseys",
    description: "Custom sports jerseys for teams, tournaments, and corporate sports events with premium sublimation printing.",
    category: "Apparel",
  },
  {
    icon: ChefHat,
    title: "Chef Coats & Caps",
    description: "Professional custom-printed and embroidered chef coats, caps, and aprons for restaurants and hospitality.",
    category: "Apparel",
  },
  {
    icon: Shirt,
    title: "Aprons",
    description: "Branded aprons for cafés, restaurants, bakeries, and promotional events with durable printing.",
    category: "Apparel",
  },
  // Printing Services
  {
    icon: Printer,
    title: "Screen Printing",
    description: "High-volume screen printing for bulk orders with vibrant, long-lasting colors and sharp detail.",
    category: "Printing",
  },
  {
    icon: Palette,
    title: "Digital Printing",
    description: "Full-color digital printing for complex designs and small-to-medium batch orders with photographic quality.",
    category: "Printing",
  },
  {
    icon: Award,
    title: "Embroidery Services",
    description: "Premium embroidery on apparel and merchandise for a professional, high-quality finish that lasts.",
    category: "Printing",
  },
  // Corporate Gifts & Combos
  {
    icon: Gift,
    title: "Corporate Gifts & Combos",
    description: "Curated gift boxes, hampers, and combo packs perfect for corporate gifting, employee onboarding, and events.",
    category: "Gifts",
  },
  {
    icon: BadgeCheck,
    title: "Badges",
    description: "Custom printed and embossed badges for events, organizations, schools, and corporate use.",
    category: "Gifts",
  },
  {
    icon: StickerIcon,
    title: "Stickers",
    description: "Die-cut stickers, vinyl stickers, and label printing for branding, packaging, and promotional use.",
    category: "Gifts",
  },
  {
    icon: Coffee,
    title: "Cups & Mugs",
    description: "Personalized coffee mugs, magic mugs, and ceramic cups with photo or logo printing.",
    category: "Drinkware",
  },
  {
    icon: Coffee,
    title: "Bottles — All Types",
    description: "Stainless steel, sipper, copper, and plastic bottles with custom branding and logo printing.",
    category: "Drinkware",
  },
  {
    icon: PenTool,
    title: "Pens",
    description: "Custom printed and engraved pens — ball pens, gel pens, and premium metal pens for corporate gifting.",
    category: "Gifts",
  },
  {
    icon: KeyRound,
    title: "Keychains",
    description: "Acrylic, metal, and wooden keychains with custom shapes, logos, and photo printing.",
    category: "Gifts",
  },
  {
    icon: BookOpen,
    title: "Diaries & Notebooks",
    description: "Custom branded diaries, notebooks, and planners — ideal for corporate gifting and events.",
    category: "Gifts",
  },
  {
    icon: CreditCard,
    title: "ID Cards",
    description: "Professional PVC ID cards, lanyards, and holders with high-quality printing for organizations.",
    category: "Printing",
  },
  {
    icon: Umbrella,
    title: "Umbrellas",
    description: "Branded umbrellas with logo printing — promotional, folding, and golf umbrellas for events.",
    category: "Gifts",
  },
  {
    icon: ShoppingBag,
    title: "Bags & Tote Bags",
    description: "Canvas tote bags, jute bags, laptop bags, and branded backpacks for corporate and retail use.",
    category: "Bags",
  },
  {
    icon: Flag,
    title: "Paper Bags",
    description: "Eco-friendly custom printed paper bags for retail stores, events, and brand packaging.",
    category: "Bags",
  },
  {
    icon: Frame,
    title: "Photo Frames",
    description: "Personalized wooden, acrylic, and magnetic photo frames — perfect gifts for any occasion.",
    category: "Gifts",
  },
  {
    icon: TreePine,
    title: "Wood Carving & Engraving",
    description: "Custom wood carving, laser engraving on wood plaques, awards, and decorative pieces.",
    category: "Gifts",
  },
  {
    icon: Flag,
    title: "Banners & Signage",
    description: "Large format printing for banners, posters, flex boards, and signage for events and businesses.",
    category: "Printing",
  },
  {
    icon: Sparkles,
    title: "Any Customised Gifts",
    description: "Got a special requirement? We can customize almost anything — just tell us your idea and we'll make it happen!",
    category: "Special",
  },
  {
    icon: Package,
    title: "Bulk & Special Orders",
    description: "Special pricing for bulk orders and unique requirements. Custom solutions for events, teams, and corporations.",
    category: "Special",
  },
];

const categoryColors: Record<string, string> = {
  Apparel: "from-blue-500 to-cyan-500",
  Printing: "from-orange-500 to-amber-500",
  Gifts: "from-violet-500 to-purple-500",
  Drinkware: "from-teal-500 to-emerald-500",
  Bags: "from-rose-500 to-pink-500",
  Special: "from-amber-400 to-orange-500",
};

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mt-2">
            What We Offer
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From custom apparel to corporate gifting, wood carving to branded drinkware — we print and customize everything you need. Explore our full range below!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + (index % 8) * 0.06, duration: 0.5 }}
              className={cn(
                "group relative bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-elevated cursor-default overflow-hidden"
              )}
            >
              {/* Gradient overlay on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 h-full w-full bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${categoryColors[service.category] || "from-primary to-primary/70"} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
