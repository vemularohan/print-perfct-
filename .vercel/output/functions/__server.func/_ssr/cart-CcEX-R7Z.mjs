import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PRODUCTS } from "./router-CcdHQkSr.mjs";
import { G as GradientPlaceholder } from "./gradient-placeholder-Da8R49K_.mjs";
import { o as ShoppingBag, p as Minus, q as Plus, r as Trash2 } from "../_libs/lucide-react.mjs";
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
function CartPage() {
  const [lines, setLines] = reactExports.useState([{
    slug: "standard-visiting-cards",
    qty: 1
  }, {
    slug: "photo-mugs",
    qty: 2
  }]);
  const [code, setCode] = reactExports.useState("");
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-16 w-16 mx-auto text-muted-foreground mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-2", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Browse our most popular products to get started." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-6 py-3 font-semibold hover:bg-primary/90", children: "Browse Products" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-8", children: "Your cart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_360px] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: items.map(({
        line,
        product
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-4 rounded-xl border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GradientPlaceholder, { name: product.name, ratio: "square", label: "" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$slug", params: {
            slug: product.slug
          }, className: "font-medium hover:text-primary", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: product.subCategory }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center border border-border rounded-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => update(product.slug, -1), className: "p-2 hover:bg-muted", "aria-label": "Decrease", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 text-sm w-10 text-center", children: line.qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => update(product.slug, 1), className: "p-2 hover:bg-muted", "aria-label": "Increase", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                "₹",
                (product.priceFromInr * line.qty).toLocaleString("en-IN")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(product.slug), className: "text-muted-foreground hover:text-destructive", "aria-label": "Remove", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] })
          ] })
        ] })
      ] }, product.slug)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-32 h-fit rounded-xl border border-border p-6 bg-card shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-4", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-sm border-b border-border pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
              "₹",
              subtotal.toLocaleString("en-IN")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Delivery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: delivery === 0 ? "Free" : `₹${delivery}` })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-2 block", children: "Discount code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: code, onChange: (e) => setCode(e.target.value), className: "flex-1 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary", placeholder: "SAVE5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-4 py-2 rounded-md bg-muted text-sm font-medium hover:bg-muted/70", children: "Apply" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-lg font-bold pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "₹",
            total.toLocaleString("en-IN")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-5 w-full bg-primary text-primary-foreground rounded-md py-3.5 font-semibold hover:bg-primary/90 transition", children: "Proceed to Checkout" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center mt-3", children: "Free shipping on orders above ₹500" })
      ] })
    ] })
  ] });
}
export {
  CartPage as component
};
