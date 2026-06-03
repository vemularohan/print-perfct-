import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as GradientPlaceholder } from "./gradient-placeholder-Da8R49K_.mjs";
import { o as ShoppingBag, F as FolderOpen, d as Palette, H as Heart, u as MapPin, U as User, v as LogOut } from "../_libs/lucide-react.mjs";
import "./router-CcdHQkSr.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const NAV = [{
  key: "orders",
  label: "My Orders",
  Icon: ShoppingBag
}, {
  key: "projects",
  label: "My Projects",
  Icon: FolderOpen
}, {
  key: "designs",
  label: "My Designs",
  Icon: Palette
}, {
  key: "favourites",
  label: "Favourites",
  Icon: Heart
}, {
  key: "addresses",
  label: "Addresses",
  Icon: MapPin
}, {
  key: "profile",
  label: "Profile Settings",
  Icon: User
}, {
  key: "logout",
  label: "Logout",
  Icon: LogOut
}];
const ORDERS = [{
  id: "VP-10238",
  date: "28 May 2026",
  items: "100 × Standard Visiting Cards",
  total: 200,
  status: "Delivered"
}, {
  id: "VP-10211",
  date: "14 May 2026",
  items: "25 × Polo T-Shirts",
  total: 13725,
  status: "Shipped"
}, {
  id: "VP-10197",
  date: "02 May 2026",
  items: "1 × Self Inking Stamp",
  total: 399,
  status: "Processing"
}, {
  id: "VP-10142",
  date: "20 Apr 2026",
  items: "6 × Photo Mugs",
  total: 1494,
  status: "Delivered"
}];
const STATUS_STYLES = {
  Delivered: "bg-success/15 text-success",
  Shipped: "bg-primary/10 text-primary",
  Processing: "bg-yellow-100 text-yellow-800"
};
function AccountPage() {
  const [tab, setTab] = reactExports.useState("orders");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-10 grid lg:grid-cols-[240px_1fr] gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Signed in as" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Priya Sharma" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "p-2", children: NAV.map(({
        key,
        label,
        Icon
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(key), className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-left transition-colors ${tab === key ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
        " ",
        label
      ] }, key)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      tab === "orders" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-6", children: "My Orders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface text-xs uppercase text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Order ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Items" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-4", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ORDERS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-mono", children: o.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-muted-foreground", children: o.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: o.items }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 font-medium", children: [
              "₹",
              o.total.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[o.status]}`, children: o.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-primary text-xs font-semibold hover:underline", children: "Reorder" }) })
          ] }, o.id)) })
        ] }) })
      ] }) : null,
      tab === "projects" || tab === "designs" || tab === "favourites" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-6", children: NAV.find((n) => n.key === tab)?.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-5", children: ["Bakery cards", "Summer banner", "Team polo"].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GradientPlaceholder, { name: n, ratio: "4-5", label: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Last edited 2 days ago" })
          ] })
        ] }, n)) })
      ] }) : null,
      tab === "addresses" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-6", children: "Addresses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "42, Marine Drive, Mumbai, MH 400002, India" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-4 text-primary text-sm font-semibold hover:underline", children: "+ Add new address" })
        ] })
      ] }) : null,
      tab === "profile" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-6", children: "Profile Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "rounded-xl border border-border bg-card p-6 space-y-4 max-w-xl", children: [
          [{
            label: "Name",
            value: "Priya Sharma"
          }, {
            label: "Email",
            value: "priya@example.com"
          }, {
            label: "Phone",
            value: "+91 98765 43210"
          }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: f.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { defaultValue: f.value, className: "w-full border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary" })
          ] }, f.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "bg-primary text-primary-foreground rounded-md px-5 py-2.5 font-semibold hover:bg-primary/90", children: "Save changes" })
        ] })
      ] }) : null,
      tab === "logout" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-3", children: "Sign out" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "You will be returned to the home page." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-destructive text-destructive-foreground rounded-md px-5 py-2.5 font-semibold", children: "Sign out" })
      ] }) : null
    ] })
  ] });
}
export {
  AccountPage as component
};
