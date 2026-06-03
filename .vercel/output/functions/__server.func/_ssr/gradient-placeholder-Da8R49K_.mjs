import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { k as cn } from "./router-CcdHQkSr.mjs";
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) | 0;
  return Math.abs(h);
}
function gradientFor(name) {
  const h = hash(name);
  const h1 = h % 360;
  const h2 = (h1 + 35 + h % 40) % 360;
  const s1 = 55 + h % 20;
  const s2 = 60 + (h >> 3) % 20;
  const l1 = 55 + (h >> 5) % 12;
  const l2 = 38 + (h >> 7) % 18;
  return `linear-gradient(135deg, hsl(${h1} ${s1}% ${l1}%), hsl(${h2} ${s2}% ${l2}%))`;
}
const ratioClass = {
  square: "aspect-square",
  "4-5": "aspect-[4/5]",
  "16-9": "aspect-[16/9]",
  card: "aspect-[5/3]"
};
function GradientPlaceholder({ name, className, ratio = "4-5", label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "w-full overflow-hidden rounded-xl relative",
        ratioClass[ratio],
        className
      ),
      style: { backgroundImage: gradientFor(name) },
      "aria-label": name,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90 text-sm font-medium drop-shadow line-clamp-2", children: label ?? name }) })
      ]
    }
  );
}
export {
  GradientPlaceholder as G
};
