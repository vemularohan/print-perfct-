import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", { className: "container-page py-24 text-center", children: [
  /* @__PURE__ */ jsx("h1", { children: "Product not found" }),
  /* @__PURE__ */ jsx(Link, { to: "/", className: "text-primary mt-4 inline-block", children: "Back home" })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
