import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles, Palette, Download, Check } from "lucide-react";
import { G as GradientPlaceholder } from "./gradient-placeholder-Da8R49K_.js";
import { F as FadeIn } from "./fade-in-C96IVZ4O.js";
import "./router-CcdHQkSr.js";
import "@tanstack/react-query";
import "react";
import "clsx";
import "tailwind-merge";
import "framer-motion";
const STEPS = [{
  Icon: Sparkles,
  title: "Choose a Template",
  body: "Browse hundreds of professionally designed templates by industry."
}, {
  Icon: Palette,
  title: "Customise It",
  body: "Edit colours, fonts and layout to match your brand identity."
}, {
  Icon: Download,
  title: "Download & Use",
  body: "Export in PNG or SVG and use anywhere — cards, web, signage."
}];
const BENEFITS = ["Free to use", "Hundreds of templates", "Fully customisable", "Download in PNG / SVG"];
function LogoMaker() {
  const styles = ["Modern Mark", "Wordmark", "Monogram", "Emblem", "Mascot", "Abstract", "Lettermark", "Combination", "Geometric"];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-br from-primary to-secondary text-white", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20 text-center", children: [
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx("p", { className: "uppercase tracking-widest text-xs font-semibold opacity-80 mb-3", children: "Free Tool" }),
        /* @__PURE__ */ jsx("h1", { className: "text-white max-w-3xl mx-auto mb-4", children: "Create Your Free Business Logo" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg opacity-90 max-w-xl mx-auto mb-8", children: "Choose a template, customise colours & text, download instantly." }),
        /* @__PURE__ */ jsx("button", { className: "inline-flex items-center gap-2 bg-white text-primary font-semibold rounded-md px-7 py-3.5 hover:bg-white/90 transition shadow-card", children: "Start Designing for Free" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-3 gap-5 max-w-3xl mx-auto", children: ["Aura Studio", "Northwind Co", "Saffron + Co"].map((n) => /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold tracking-tight", children: n }),
        /* @__PURE__ */ jsx("div", { className: "text-xs opacity-80 mt-1", children: "Sample mark" })
      ] }, n)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center mb-12", children: "How it works" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: STEPS.map((s, i) => /* @__PURE__ */ jsx(FadeIn, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(s.Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mb-2", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: s.body })
      ] }) }, s.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-8 border-l-4 border-primary pl-4", children: "Template Gallery" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-5", children: styles.map((s, i) => /* @__PURE__ */ jsx(FadeIn, { delay: i * 0.04, children: /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
        /* @__PURE__ */ jsx(GradientPlaceholder, { name: `logo-${s}`, ratio: "square", label: s }),
        /* @__PURE__ */ jsx("button", { className: "absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 bg-white text-primary font-medium rounded-md py-2 text-sm transition-opacity", children: "Use This Template" })
      ] }) }, s)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-12 grid grid-cols-2 md:grid-cols-4 gap-6", children: BENEFITS.map((b) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-success" }),
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium", children: b })
    ] }, b)) }),
    /* @__PURE__ */ jsx("section", { className: "container-page pb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-primary text-primary-foreground p-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-primary-foreground mb-3", children: "Print your new logo today" }),
      /* @__PURE__ */ jsx("p", { className: "opacity-90 mb-6", children: "Put your finished mark on cards, t-shirts, stamps and more." }),
      /* @__PURE__ */ jsx(Link, { to: "/business-cards", className: "inline-flex items-center gap-2 bg-white text-primary font-semibold rounded-md px-6 py-3 hover:bg-white/90 transition", children: "Browse Products" })
    ] }) })
  ] });
}
export {
  LogoMaker as component
};
