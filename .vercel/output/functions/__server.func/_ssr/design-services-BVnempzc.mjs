import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GradientPlaceholder } from "./gradient-placeholder-Da8R49K_.mjs";
import { F as FadeIn } from "./fade-in-C96IVZ4O.mjs";
import { A as ArrowRight, g as CreditCard, m as FileText, n as Image, e as Check } from "../_libs/lucide-react.mjs";
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
import "./router-CcdHQkSr.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const SERVICES = [{
  Icon: CreditCard,
  title: "Logo Design",
  body: "Distinct, scalable marks that work everywhere your brand shows up.",
  from: 2499
}, {
  Icon: FileText,
  title: "Business Card Design",
  body: "Print-ready card designs in matte, glossy or spot UV finishes.",
  from: 999
}, {
  Icon: Image,
  title: "Banner Design",
  body: "Eye-catching banners for events, storefronts and online ads.",
  from: 1499
}];
const STEPS = ["Submit Brief", "Designer Assigned", "2 Rounds of Revisions", "Final Delivery"];
const TIERS = [{
  name: "Basic",
  price: 2499,
  features: ["1 concept", "2 revisions", "PNG + JPG delivery", "5-day turnaround"]
}, {
  name: "Standard",
  price: 4999,
  popular: true,
  features: ["3 concepts", "Unlimited revisions", "PNG + JPG + SVG + AI", "3-day turnaround", "Brand colours guide"]
}, {
  name: "Premium",
  price: 9999,
  features: ["5 concepts", "Unlimited revisions", "All file formats", "2-day turnaround", "Full brand guidelines", "Business card + letterhead"]
}];
function DesignServices() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden text-white", style: {
      backgroundImage: "linear-gradient(120deg, hsl(220 50% 18%), hsl(205 60% 32%))"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "uppercase tracking-widest text-xs font-semibold opacity-80 mb-3", children: "Design Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white mb-4", children: "Professional Design — Let our experts do it" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg opacity-90 mb-8", children: "Brief us today, get original work from an in-house designer within 48 hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 bg-white text-primary font-semibold rounded-md px-7 py-3.5 hover:bg-white/90 transition", children: [
        "Start a Design Brief ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-10 border-l-4 border-primary pl-4", children: "What we design" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: s.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-semibold", children: [
          "From ₹",
          s.from.toLocaleString("en-IN")
        ] })
      ] }) }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center mb-12", children: "Our process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center font-bold mb-3", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: s })
      ] }) }, s)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center mb-10", children: "Pricing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: TIERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-7 bg-card relative ${t.popular ? "border-primary shadow-card-hover" : "border-border"}`, children: [
        t.popular ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold rounded-full px-3 py-1", children: "Most Popular" }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-primary mb-5", children: [
          "₹",
          t.price.toLocaleString("en-IN")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 mb-6", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-success mt-0.5 shrink-0" }),
          " ",
          f
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `w-full rounded-md py-3 font-semibold text-sm transition ${t.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-2 border-primary text-primary hover:bg-primary/5"}`, children: "Get Started" })
      ] }, t.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-8 border-l-4 border-primary pl-4", children: "Recent work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-5", children: ["Portfolio 1", "Portfolio 2", "Portfolio 3", "Portfolio 4", "Portfolio 5", "Portfolio 6"].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(GradientPlaceholder, { name: n, ratio: "square", label: n.replace("Portfolio ", "Project #") }, n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/help-centre", className: "text-primary font-medium hover:underline", children: "Have a question? Talk to our team →" }) })
  ] });
}
export {
  DesignServices as component
};
