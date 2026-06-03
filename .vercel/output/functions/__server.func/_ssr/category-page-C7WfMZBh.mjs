import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as getProductsByCategory } from "./router-CcdHQkSr.mjs";
import { P as ProductCard } from "./product-card-B6s76b0x.mjs";
import { F as FadeIn } from "./fade-in-C96IVZ4O.mjs";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-BHa7PrGW.mjs";
import { s as ChevronRight, t as SlidersHorizontal } from "../_libs/lucide-react.mjs";
function CategoryPage({ category }) {
  const products = getProductsByCategory(category.slug);
  const [active, setActive] = reactExports.useState("View All");
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const filtered = active === "View All" ? products : products.filter((p) => p.subCategory === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: category.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-3", children: category.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-3xl", children: category.blurb })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto no-scrollbar", children: ["View All", ...category.subCategories].map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActive(sub),
        className: `whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${active === sub ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-border hover:border-primary hover:text-primary"}`,
        children: sub
      },
      sub
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-10 grid lg:grid-cols-[240px_1fr] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-32 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { title: "Finish", options: ["Matte", "Glossy", "Spot UV", "Velvet", "Pearl"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { title: "Shape", options: ["Standard", "Rounded", "Square", "Circle", "Oval"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { title: "Quantity", options: ["50", "100", "250", "500", "1000+"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold mb-3", children: "Price Range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 100, max: 5e3, className: "w-full accent-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹5,000" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold mb-3", children: "Sort by" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full text-sm rounded-md border border-border px-3 py-2 bg-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Most Popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Price: Low to High" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Price: High to Low" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            filtered.length,
            " products"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setShowFilters(true),
              className: "lg:hidden inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-md border border-border",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4" }),
                " Filters"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-5", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.03, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }) }, p.slug)) }),
        filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16 text-muted-foreground", children: "No products in this filter." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex items-center justify-center gap-1", children: ["Previous", "1", "2", "3", "Next"].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `px-3 py-1.5 text-sm rounded-md border ${i === 1 ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`,
            children: p
          },
          p
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-12 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { type: "single", collapsible: true, className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "about", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionTrigger, { className: "text-base font-semibold", children: [
          "About ",
          category.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionContent, { className: "text-muted-foreground", children: [
          category.blurb,
          " Choose from a wide range of styles, finishes and quantities to match your brand and budget."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "why", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-base font-semibold", children: "Why choose VistaPrint?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground", children: "We combine premium materials, sharp colour reproduction and dependable turnaround — backed by a satisfaction guarantee." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "faq", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-base font-semibold", children: "Frequently asked questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground", children: "Find answers about turnaround time, file formats, bulk pricing and shipping in our Help Centre." })
      ] })
    ] }) }) }),
    showFilters ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 lg:hidden", onClick: () => setShowFilters(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute inset-x-0 bottom-0 bg-background rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Filters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { title: "Finish", options: ["Matte", "Glossy", "Spot UV"] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { title: "Quantity", options: ["50", "100", "250", "500", "1000+"] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setShowFilters(false),
                className: "mt-6 w-full bg-primary text-primary-foreground rounded-md py-3 font-semibold",
                children: "Apply"
              }
            )
          ]
        }
      )
    ] }) : null
  ] });
}
function FilterGroup({ title, options }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold mb-3", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded border-border text-primary focus:ring-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: o })
    ] }, o)) })
  ] });
}
export {
  CategoryPage as C
};
