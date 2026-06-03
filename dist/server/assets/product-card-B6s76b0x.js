import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { G as GradientPlaceholder } from "./gradient-placeholder-Da8R49K_.js";
function ProductCard({ product }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/product/$slug",
      params: { slug: product.slug },
      className: "group block rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(GradientPlaceholder, { name: product.name, ratio: "4-5", label: "" }),
          /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shadow", children: product.pricePill }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx("div", { className: "rounded-md bg-white/95 text-primary font-medium text-sm text-center py-2 shadow", children: "Shop Now" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-medium text-foreground line-clamp-2 mb-1", children: product.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "From ₹",
            product.priceFromInr.toLocaleString("en-IN")
          ] })
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};
