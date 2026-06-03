import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { P as PRODUCTS } from "./router-CcdHQkSr.js";
import { G as GradientPlaceholder } from "./gradient-placeholder-Da8R49K_.js";
import "@tanstack/react-query";
import "clsx";
import "tailwind-merge";
function CartPage() {
  const [lines, setLines] = useState([{
    slug: "standard-visiting-cards",
    qty: 1
  }, {
    slug: "photo-mugs",
    qty: 2
  }]);
  const [code, setCode] = useState("");
  const items = lines.map((l) => ({
    line: l,
    product: PRODUCTS.find((p) => p.slug === l.slug)
  })).filter((x) => x.product);
  const subtotal = items.reduce((s, x) => s + x.product.priceFromInr * x.line.qty, 0);
  const delivery = subtotal >= 500 ? 0 : 79;
  const total = subtotal + delivery;
  const update = (slug, delta) => setLines((ls) => ls.map((l) => l.slug === slug ? {
    ...l,
    qty: Math.max(1, l.qty + delta)
  } : l));
  const remove = (slug) => setLines((ls) => ls.filter((l) => l.slug !== slug));
  if (items.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "container-page py-24 text-center", children: [
      /* @__PURE__ */ jsx(ShoppingBag, { className: "h-16 w-16 mx-auto text-muted-foreground mb-4" }),
      /* @__PURE__ */ jsx("h1", { className: "mb-2", children: "Your cart is empty" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Browse our most popular products to get started." }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-6 py-3 font-semibold hover:bg-primary/90", children: "Browse Products" })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "container-page py-10", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-8", children: "Your cart" }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_360px] gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: items.map(({
        line,
        product
      }) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-4 rounded-xl border border-border bg-card", children: [
        /* @__PURE__ */ jsx("div", { className: "w-24 shrink-0", children: /* @__PURE__ */ jsx(GradientPlaceholder, { name: product.name, ratio: "square", label: "" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx(Link, { to: "/product/$slug", params: {
            slug: product.slug
          }, className: "font-medium hover:text-primary", children: product.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: product.subCategory }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center border border-border rounded-md", children: [
              /* @__PURE__ */ jsx("button", { onClick: () => update(product.slug, -1), className: "p-2 hover:bg-muted", "aria-label": "Decrease", children: /* @__PURE__ */ jsx(Minus, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsx("span", { className: "px-3 text-sm w-10 text-center", children: line.qty }),
              /* @__PURE__ */ jsx("button", { onClick: () => update(product.slug, 1), className: "p-2 hover:bg-muted", "aria-label": "Increase", children: /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                "₹",
                (product.priceFromInr * line.qty).toLocaleString("en-IN")
              ] }),
              /* @__PURE__ */ jsx("button", { onClick: () => remove(product.slug), className: "text-muted-foreground hover:text-destructive", "aria-label": "Remove", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
            ] })
          ] })
        ] })
      ] }, product.slug)) }),
      /* @__PURE__ */ jsxs("aside", { className: "lg:sticky lg:top-32 h-fit rounded-xl border border-border p-6 bg-card shadow-card", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl mb-4", children: "Order Summary" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2.5 text-sm border-b border-border pb-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
              "₹",
              subtotal.toLocaleString("en-IN")
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Delivery" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: delivery === 0 ? "Free" : `₹${delivery}` })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "py-4", children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Discount code" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("input", { value: code, onChange: (e) => setCode(e.target.value), className: "flex-1 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary", placeholder: "SAVE5" }),
            /* @__PURE__ */ jsx("button", { className: "px-4 py-2 rounded-md bg-muted text-sm font-medium hover:bg-muted/70", children: "Apply" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-lg font-bold pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "₹",
            total.toLocaleString("en-IN")
          ] })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "mt-5 w-full bg-primary text-primary-foreground rounded-md py-3.5 font-semibold hover:bg-primary/90 transition", children: "Proceed to Checkout" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center mt-3", children: "Free shipping on orders above ₹500" })
      ] })
    ] })
  ] });
}
export {
  CartPage as component
};
