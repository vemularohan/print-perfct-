import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import * as React from "react";
import { useState } from "react";
import { ChevronRight, Star, Truck, Heart, Lock, RotateCcw, ShieldCheck } from "lucide-react";
import { k as cn, R as Route, C as CATEGORIES, m as getRelated } from "./router-CcdHQkSr.js";
import { G as GradientPlaceholder } from "./gradient-placeholder-Da8R49K_.js";
import { P as ProductCard } from "./product-card-B6s76b0x.js";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-BHa7PrGW.js";
import "@tanstack/react-query";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-accordion";
const CONST_REVIEWS = [
  { name: "Priya S.", rating: 5, date: "12 May 2026", text: "Print quality is excellent and the cards arrived a day earlier than promised. Very happy with the matte finish." },
  { name: "Rahul K.", rating: 5, date: "28 Apr 2026", text: "Used the online designer — super easy and the proof was accurate. Will reorder for sure." },
  { name: "Aisha M.", rating: 4, date: "14 Apr 2026", text: "Good value for the price. Colours were a touch darker than my screen but still acceptable." },
  { name: "Vikram J.", rating: 5, date: "02 Mar 2026", text: "Bulk order of 1000 — delivered in perfect condition. Saved a lot vs local printers." },
  { name: "Neha T.", rating: 4, date: "21 Feb 2026", text: "Cards feel premium. Customer support was helpful when I needed to swap the finish." }
];
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
function ProductDetail() {
  const {
    product
  } = Route.useLoaderData();
  const cat = CATEGORIES.find((c) => c.slug === product.categorySlug);
  const related = getRelated(product.slug);
  const [qty, setQty] = useState(product.qtyTiers[1] ?? product.qtyTiers[0]);
  const [finish, setFinish] = useState(product.finishes[0]);
  const original = Math.round(product.priceFromInr * 1.4);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "container-page pt-8", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" }),
      cat ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Link, { to: cat.route, className: "hover:text-primary", children: cat.name }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })
      ] }) : null,
      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: product.name })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container-page py-10 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(GradientPlaceholder, { name: product.name, ratio: "square", label: "" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-3 mt-3", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx(GradientPlaceholder, { name: `${product.name}-${i}`, ratio: "square", label: "" }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-3", children: product.name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm mb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "flex", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsx(Star, { className: `h-4 w-4 ${s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}` }, s)) }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: product.rating }),
          /* @__PURE__ */ jsxs("a", { href: "#reviews", className: "text-primary hover:underline", children: [
            "(",
            product.reviewCount.toLocaleString("en-IN"),
            " reviews)"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-3 mb-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-3xl font-bold text-primary", children: [
            "₹",
            product.priceFromInr.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-base text-muted-foreground line-through", children: [
            "₹",
            original.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center rounded-full bg-success/15 text-success px-2.5 py-0.5 text-xs font-semibold", children: [
            "Save ",
            Math.round((1 - product.priceFromInr / original) * 100),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-2", children: "Quantity" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: product.qtyTiers.map((q) => /* @__PURE__ */ jsx("button", { onClick: () => setQty(q), className: `px-4 py-2 rounded-md text-sm border transition-colors ${qty === q ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`, children: q }, q)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-2", children: "Finish" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: product.finishes.map((f) => /* @__PURE__ */ jsx("button", { onClick: () => setFinish(f), className: `px-4 py-2 rounded-full text-sm border transition-colors ${finish === f ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`, children: f }, f)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-6", children: [
          /* @__PURE__ */ jsx(Truck, { className: "h-4 w-4 text-primary" }),
          "Estimated delivery: ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "5–7 business days" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("button", { className: "flex-1 bg-primary text-primary-foreground rounded-md py-4 font-semibold text-base hover:bg-primary/90 transition shadow-card", children: "Customise & Buy" }),
          /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center justify-center gap-2 border-2 border-border rounded-md px-5 py-4 font-medium hover:border-primary hover:text-primary transition", children: [
            /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" }),
            " Favourite"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2 text-xs text-muted-foreground", children: [{
          Icon: Lock,
          label: "Secure Checkout"
        }, {
          Icon: RotateCcw,
          label: "Easy Reorder"
        }, {
          Icon: ShieldCheck,
          label: "Quality Guarantee"
        }].map(({
          Icon,
          label
        }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-primary" }),
          " ",
          label
        ] }, label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-10 border-t border-border", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "overview", children: [
      /* @__PURE__ */ jsxs(TabsList, { children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "overview", children: "Overview" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "specs", children: "Specifications" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "reviews", children: "Reviews" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "faqs", children: "FAQs" })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "overview", className: "pt-6 max-w-3xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: product.description }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: product.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "text-success mt-0.5", children: "✓" }),
          " ",
          f
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "specs", className: "pt-6 max-w-2xl", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsx("tbody", { children: product.specs.map((s) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
        /* @__PURE__ */ jsx("td", { className: "py-3 font-medium w-1/3", children: s.label }),
        /* @__PURE__ */ jsx("td", { className: "py-3 text-muted-foreground", children: s.value })
      ] }, s.label)) }) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "reviews", id: "reviews", className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[200px_1fr] gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold", children: product.rating }),
          /* @__PURE__ */ jsx("div", { className: "flex my-1", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsx(Star, { className: `h-4 w-4 ${s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}` }, s)) }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
            product.reviewCount.toLocaleString("en-IN"),
            " reviews"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-1.5", children: [5, 4, 3, 2, 1].map((s) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "w-3", children: s }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-primary", style: {
              width: `${s === 5 ? 70 : s === 4 ? 20 : 5}%`
            } }) })
          ] }, s)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-5", children: CONST_REVIEWS.map((r, i) => /* @__PURE__ */ jsxs("div", { className: "border-b border-border pb-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: r.name }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: r.date })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex mb-1.5", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsx(Star, { className: `h-3 w-3 ${s <= r.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}` }, s)) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: r.text })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "faqs", className: "pt-6 max-w-3xl", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: product.faqs.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `f${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { children: f.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: f.a })
      ] }, i)) }) })
    ] }) }),
    related.length > 0 ? /* @__PURE__ */ jsxs("section", { className: "container-page py-12 border-t border-border", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-6 border-l-4 border-primary pl-4", children: "You may also like" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4", children: related.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.slug)) })
    ] }) : null
  ] });
}
export {
  ProductDetail as component
};
