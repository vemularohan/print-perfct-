import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { ShoppingBag, FolderOpen, Palette, Heart, MapPin, User, LogOut } from "lucide-react";
import { G as GradientPlaceholder } from "./gradient-placeholder-Da8R49K_.js";
import "./router-CcdHQkSr.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
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
  const [tab, setTab] = useState("orders");
  return /* @__PURE__ */ jsxs("div", { className: "container-page py-10 grid lg:grid-cols-[240px_1fr] gap-8", children: [
    /* @__PURE__ */ jsx("aside", { children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-5 border-b border-border", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Signed in as" }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Priya Sharma" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "p-2", children: NAV.map(({
        key,
        label,
        Icon
      }) => /* @__PURE__ */ jsxs("button", { onClick: () => setTab(key), className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-left transition-colors ${tab === key ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"}`, children: [
        /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
        " ",
        label
      ] }, key)) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      tab === "orders" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-6", children: "My Orders" }),
        /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-surface text-xs uppercase text-muted-foreground", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Order ID" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Date" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Items" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Total" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Status" }),
            /* @__PURE__ */ jsx("th", { className: "text-right p-4", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: ORDERS.map((o) => /* @__PURE__ */ jsxs("tr", { className: "border-t border-border", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 font-mono", children: o.id }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: o.date }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: o.items }),
            /* @__PURE__ */ jsxs("td", { className: "p-4 font-medium", children: [
              "₹",
              o.total.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx("span", { className: `inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[o.status]}`, children: o.status }) }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-right", children: /* @__PURE__ */ jsx("button", { className: "text-primary text-xs font-semibold hover:underline", children: "Reorder" }) })
          ] }, o.id)) })
        ] }) })
      ] }) : null,
      tab === "projects" || tab === "designs" || tab === "favourites" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-6", children: NAV.find((n) => n.key === tab)?.label }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-5", children: ["Bakery cards", "Summer banner", "Team polo"].map((n) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
          /* @__PURE__ */ jsx(GradientPlaceholder, { name: n, ratio: "4-5", label: "" }),
          /* @__PURE__ */ jsxs("div", { className: "p-3", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: n }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Last edited 2 days ago" })
          ] })
        ] }, n)) })
      ] }) : null,
      tab === "addresses" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-6", children: "Addresses" }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold mb-1", children: "Home" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "42, Marine Drive, Mumbai, MH 400002, India" }),
          /* @__PURE__ */ jsx("button", { className: "mt-4 text-primary text-sm font-semibold hover:underline", children: "+ Add new address" })
        ] })
      ] }) : null,
      tab === "profile" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-6", children: "Profile Settings" }),
        /* @__PURE__ */ jsxs("form", { className: "rounded-xl border border-border bg-card p-6 space-y-4 max-w-xl", children: [
          [{
            label: "Name",
            value: "Priya Sharma"
          }, {
            label: "Email",
            value: "priya@example.com"
          }, {
            label: "Phone",
            value: "+91 98765 43210"
          }].map((f) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-1.5 block", children: f.label }),
            /* @__PURE__ */ jsx("input", { defaultValue: f.value, className: "w-full border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary" })
          ] }, f.label)),
          /* @__PURE__ */ jsx("button", { type: "button", className: "bg-primary text-primary-foreground rounded-md px-5 py-2.5 font-semibold hover:bg-primary/90", children: "Save changes" })
        ] })
      ] }) : null,
      tab === "logout" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-3", children: "Sign out" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "You will be returned to the home page." }),
        /* @__PURE__ */ jsx("button", { className: "bg-destructive text-destructive-foreground rounded-md px-5 py-2.5 font-semibold", children: "Sign out" })
      ] }) : null
    ] })
  ] });
}
export {
  AccountPage as component
};
