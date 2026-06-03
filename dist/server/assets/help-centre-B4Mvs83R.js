import { jsxs, jsx } from "react/jsx-runtime";
import { Search, Package, RefreshCw, Palette, CreditCard, Truck, RotateCcw, User, ShieldCheck, Boxes, Phone, MessageCircle, Mail } from "lucide-react";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-BHa7PrGW.js";
import "react";
import "@radix-ui/react-accordion";
import "./router-CcdHQkSr.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
const TOPICS = [{
  Icon: Package,
  title: "Track My Order",
  body: "Get the latest status of your shipment."
}, {
  Icon: RefreshCw,
  title: "Change or Cancel Order",
  body: "Make changes before your order goes to print."
}, {
  Icon: Palette,
  title: "Design Help",
  body: "Tips for the online designer and file uploads."
}, {
  Icon: CreditCard,
  title: "Payment & Billing",
  body: "Accepted payment methods and GST invoices."
}, {
  Icon: Truck,
  title: "Delivery Information",
  body: "Turnaround times, shipping zones and rates."
}, {
  Icon: RotateCcw,
  title: "Returns & Refunds",
  body: "Our satisfaction guarantee and refund policy."
}, {
  Icon: User,
  title: "Account & Login",
  body: "Manage your account, addresses and projects."
}, {
  Icon: ShieldCheck,
  title: "Product Quality",
  body: "Materials, finishes and quality standards."
}, {
  Icon: Boxes,
  title: "Bulk Orders",
  body: "Enquire about volume pricing and dedicated support."
}];
const FAQS = [{
  q: "How do I track my order?",
  a: "Sign in to My Account and open My Orders. Each shipment has a live tracking link from our courier partner."
}, {
  q: "What is the turnaround time?",
  a: "Most products print in 2–4 business days, then 2–5 days for delivery depending on your pincode."
}, {
  q: "Can I reorder a previous design?",
  a: "Yes — every paid order has a Reorder button in My Orders. Your artwork is stored securely on our servers."
}, {
  q: "What file formats do you accept?",
  a: "PDF, PNG, JPG and AI up to 50MB. PDFs with embedded fonts and 300dpi assets give the best results."
}, {
  q: "What is your return/refund policy?",
  a: "If you're not satisfied with print quality, contact support within 14 days for a reprint or full refund."
}, {
  q: "How do I apply a discount code?",
  a: "Enter your code at checkout in the Discount Code field. Codes apply automatically to eligible items."
}, {
  q: "Do you offer bulk discounts?",
  a: "Yes — volume pricing kicks in automatically. For orders above ₹50,000 we can offer custom quotes via the Bulk Orders form."
}, {
  q: "Can I get a physical proof before printing?",
  a: "Yes, for orders above ₹5,000 we can ship a single proof for ₹299 before the full run."
}];
function HelpCentre() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-br from-primary to-secondary text-white", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-16 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-white mb-6", children: "How can we help you?" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto flex rounded-lg overflow-hidden bg-white", children: [
        /* @__PURE__ */ jsx("input", { className: "flex-1 px-4 py-3 text-sm text-foreground focus:outline-none", placeholder: "Search for answers..." }),
        /* @__PURE__ */ jsx("button", { className: "bg-foreground text-background px-5 inline-flex items-center", "aria-label": "Search", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-14", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: TOPICS.map(({
      Icon,
      title,
      body
    }) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border p-6 hover:border-primary hover:shadow-card transition bg-card", children: [
      /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mb-1.5 text-base", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: body })
    ] }, title)) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface border-y border-border", children: /* @__PURE__ */ jsx("div", { className: "container-page py-12 grid md:grid-cols-3 gap-6", children: [{
      Icon: Phone,
      title: "Call us",
      body: "02522-669393",
      sub: "Mon–Sat 9am–6pm"
    }, {
      Icon: MessageCircle,
      title: "Live chat",
      body: "Start chat",
      sub: "Avg wait under 2 min"
    }, {
      Icon: Mail,
      title: "Email support",
      body: "help@vistaprint.in",
      sub: "Replies within 24 hours"
    }].map(({
      Icon,
      title,
      body,
      sub
    }) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-5 rounded-xl bg-card shadow-card", children: [
      /* @__PURE__ */ jsx("span", { className: "h-10 w-10 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: title }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: body }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: sub })
      ] })
    ] }, title)) }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-16 max-w-3xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-6 border-l-4 border-primary pl-4", children: "Popular questions" }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, defaultValue: "f0", children: FAQS.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `f${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left", children: f.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: f.a })
      ] }, i)) })
    ] })
  ] });
}
export {
  HelpCentre as component
};
