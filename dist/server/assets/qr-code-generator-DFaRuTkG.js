import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import { Download } from "lucide-react";
import { C as CATEGORIES } from "./router-CcdHQkSr.js";
import "@tanstack/react-query";
import "clsx";
import "tailwind-merge";
const PRINT_LINKS = [{
  label: "Visiting Cards",
  to: "/business-cards"
}, {
  label: "Posters",
  to: "/signs-posters"
}, {
  label: "Stickers",
  to: "/labels-stickers"
}, {
  label: "Flyers",
  to: "/signs-posters"
}];
function QrPage() {
  const [text, setText] = useState("https://vistaprint.in");
  const [pngUrl, setPngUrl] = useState("");
  const [svg, setSvg] = useState("");
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!text) return;
    const value = text.trim() || " ";
    QRCode.toDataURL(value, {
      width: 360,
      margin: 2,
      color: {
        dark: "#006196",
        light: "#ffffff"
      }
    }).then(setPngUrl);
    QRCode.toString(value, {
      type: "svg",
      margin: 2,
      color: {
        dark: "#006196",
        light: "#ffffff"
      }
    }).then(setSvg);
  }, [text]);
  const downloadSvg = () => {
    const blob = new Blob([svg], {
      type: "image/svg+xml"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr-code.svg";
    a.click();
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-surface border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-14 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-3", children: "Free QR Code Generator" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Generate a QR code for any URL or text. Print it on cards, posters and stickers." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-12 grid md:grid-cols-2 gap-10 max-w-5xl", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Enter URL or text" }),
        /* @__PURE__ */ jsx("textarea", { value: text, onChange: (e) => setText(e.target.value), rows: 5, className: "w-full rounded-md border border-border focus:border-primary px-4 py-3 text-sm focus:outline-none", placeholder: "https://yourwebsite.com" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-3", children: [
          pngUrl ? /* @__PURE__ */ jsxs("a", { href: pngUrl, download: "qr-code.png", className: "inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-5 py-2.5 text-sm font-semibold hover:bg-primary/90", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
            " PNG"
          ] }) : null,
          svg ? /* @__PURE__ */ jsxs("button", { onClick: downloadSvg, className: "inline-flex items-center gap-2 border-2 border-primary text-primary rounded-md px-5 py-2.5 text-sm font-semibold hover:bg-primary/5", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
            " SVG"
          ] }) : null
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-card shadow-card p-6", children: pngUrl ? /* @__PURE__ */ jsx("img", { src: pngUrl, alt: "Generated QR code", className: "w-72 h-72" }) : /* @__PURE__ */ jsx("div", { className: "w-72 h-72 bg-muted rounded" }) }) }),
      /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "hidden" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-14", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center mb-8", children: "Put your QR code in print" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: PRINT_LINKS.map((p) => /* @__PURE__ */ jsxs(Link, { to: p.to, className: "rounded-xl border border-border p-6 text-center hover:border-primary hover:shadow-card transition", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold mb-1", children: p.label }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-primary", children: "Print with QR →" })
      ] }, p.label)) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center mt-8 text-sm text-muted-foreground", children: [
        "Or ",
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-primary hover:underline", children: "browse all categories" }),
        " — ",
        CATEGORIES.length,
        " ways to brand your business."
      ] })
    ] }) })
  ] });
}
export {
  QrPage as component
};
