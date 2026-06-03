import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as POPULAR_SLUGS, P as PRODUCTS, T as TRENDING_SLUGS, C as CATEGORIES, k as cn } from "./router-CcdHQkSr.mjs";
import { P as ProductCard } from "./product-card-B6s76b0x.mjs";
import { G as GradientPlaceholder } from "./gradient-placeholder-Da8R49K_.mjs";
import { F as FadeIn } from "./fade-in-C96IVZ4O.mjs";
import { w as CircleCheck, h as Truck, d as Palette, x as Headphones, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CategoryCard({ name, to }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to,
      className: "group block rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 bg-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GradientPlaceholder, { name, ratio: "4-5", label: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground group-hover:text-primary transition-colors", children: name }) })
      ]
    }
  );
}
function SectionHeading({ children, className, eyebrow }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("mb-8", className), children: [
    eyebrow ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-wider text-primary mb-2", children: eyebrow }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "border-l-4 border-primary pl-4", children })
  ] });
}
const SLIDES = [{
  bg: "linear-gradient(135deg, hsl(205 80% 35%), hsl(200 75% 50%))",
  eyebrow: "Top deal",
  title: "100 Visiting Cards at ₹200",
  sub: "Fast delivery. Professional quality. Designed in minutes.",
  cta: {
    label: "Shop Now",
    to: "/business-cards"
  }
}, {
  bg: "linear-gradient(135deg, hsl(220 50% 18%), hsl(205 60% 30%))",
  eyebrow: "New for monsoon",
  title: "Look Professional with Custom Rainwear",
  sub: "Branded umbrellas and raincoats starting at ₹655.",
  ctaA: {
    label: "Umbrellas",
    to: "/photo-gifts"
  },
  ctaB: {
    label: "Raincoats",
    to: "/clothing-bags"
  }
}];
function HeroCarousel() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[500px] md:h-[560px] lg:h-[600px]", children: [
    SLIDES.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 transition-opacity duration-700", style: {
      opacity: i === idx ? 1 : 0,
      backgroundImage: s.bg
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page h-full flex items-center relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "uppercase tracking-widest text-xs font-semibold opacity-80 mb-3", children: s.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white mb-4", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg opacity-90 mb-7", children: s.sub }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          "cta" in s && s.cta ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.cta.to, className: "inline-flex items-center gap-2 bg-white text-primary font-semibold rounded-md px-6 py-3 hover:bg-white/90 transition", children: [
            s.cta.label,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) : null,
          "ctaA" in s && s.ctaA ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: s.ctaA.to, className: "inline-flex items-center gap-2 border-2 border-white text-white font-semibold rounded-md px-6 py-3 hover:bg-white/10 transition", children: s.ctaA.label }) : null,
          "ctaB" in s && s.ctaB ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: s.ctaB.to, className: "inline-flex items-center gap-2 border-2 border-white text-white font-semibold rounded-md px-6 py-3 hover:bg-white/10 transition", children: s.ctaB.label }) : null
        ] })
      ] }) })
    ] }, idx)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10", children: SLIDES.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": `Slide ${idx + 1}`, onClick: () => setI(idx), className: `h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-2.5 bg-white/50"}` }, idx)) })
  ] }) });
}
const TRUST = [{
  Icon: CircleCheck,
  label: "Satisfaction Guaranteed"
}, {
  Icon: Truck,
  label: "Fast Delivery Across India"
}, {
  Icon: Palette,
  label: "Easy Design Tool"
}, {
  Icon: Headphones,
  label: "Expert Support"
}];
function HomePage() {
  const popular = POPULAR_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);
  const trending = TRENDING_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCarousel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Explore All Categories" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: CATEGORIES.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryCard, { name: c.name, to: c.route }) }, c.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-10 grid grid-cols-2 md:grid-cols-4 gap-6", children: TRUST.map(({
      Icon,
      label
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: label })
    ] }, label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Our Most Popular Products" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5", children: popular.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.03, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }) }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Trending" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5", children: trending.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.03, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }) }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl p-10 md:p-16 text-white", style: {
      backgroundImage: "linear-gradient(120deg, hsl(205 80% 30%), hsl(200 80% 50%))"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.25),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white mb-3", children: "Need a custom design?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-90 text-lg mb-6", children: "Our in-house experts can design logos, business cards, banners and more — usually within 48 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/design-services", className: "inline-flex items-center gap-2 bg-white text-primary font-semibold rounded-md px-6 py-3 hover:bg-white/90 transition", children: [
          "Start Design Brief ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
