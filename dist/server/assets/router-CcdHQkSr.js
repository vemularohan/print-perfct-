import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Phone, X, Menu, Search, FolderOpen, Heart, User, ShoppingCart, ChevronDown, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const appCss = "/assets/styles-D25bVVqn.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const CATEGORIES = [
  {
    slug: "business-cards",
    name: "Visiting Cards",
    route: "/business-cards",
    subCategories: ["Standard", "Classic", "Rounded Corner", "Square", "Spot UV", "Matte", "Glossy", "NFC", "QR Code", "Bulk", "Premium Plus"],
    blurb: "Make a memorable first impression with premium visiting cards printed on a range of finishes."
  },
  {
    slug: "signs-posters",
    name: "Signs & Posters",
    route: "/signs-posters",
    subCategories: ["Posters", "Banners", "Flyers", "Window Decals", "Yard Signs", "Roll-up Banners"],
    blurb: "High-impact signage and posters for storefronts, events and pop-ups."
  },
  {
    slug: "stationery",
    name: "Stationery",
    route: "/stationery",
    subCategories: ["Letterheads", "Envelopes", "Notebooks", "Diaries", "Notepads", "Folders"],
    blurb: "Custom business stationery that puts your brand on every page."
  },
  {
    slug: "labels-stickers",
    name: "Labels & Stickers",
    route: "/labels-stickers",
    subCategories: ["Roll Labels", "Sheet Labels", "Die Cut", "Bumper Stickers", "Bottle Labels"],
    blurb: "Durable labels and stickers for products, packaging and promotion."
  },
  {
    slug: "stamps",
    name: "Stamps",
    route: "/stamps",
    subCategories: ["Self Inking", "Rubber Stamps", "Date Stamps", "Address Stamps"],
    blurb: "Professional stamps for daily office use, signatures and approvals."
  },
  {
    slug: "clothing-bags",
    name: "Clothing & Bags",
    route: "/clothing-bags",
    subCategories: ["Polo T-Shirts", "T-Shirts", "Dress Shirts", "Caps", "Tote Bags", "Backpacks"],
    blurb: "Branded apparel and bags for teams, events and giveaways."
  },
  {
    slug: "photo-gifts",
    name: "Photo Gifts",
    route: "/photo-gifts",
    subCategories: ["Photo Albums", "Photo Mugs", "Canvas Prints", "Calendars", "Cushions"],
    blurb: "Personalised gifts that turn memories into keepsakes."
  },
  {
    slug: "drinkware",
    name: "Drinkware",
    route: "/drinkware",
    subCategories: ["Ceramic Mugs", "Travel Mugs", "Water Bottles", "Tumblers"],
    blurb: "Custom drinkware that your team and customers will reach for daily."
  },
  {
    slug: "pens",
    name: "Pens",
    route: "/pens",
    subCategories: ["Ball Pens", "Metal Pens", "Highlighters", "Pen Sets"],
    blurb: "Smooth-writing custom pens — a corporate gift classic."
  }
];
const NAV_TABS = [
  { label: "View All", to: "/" },
  ...CATEGORIES.map((c) => ({ label: c.name, to: c.route })),
  { label: "Design Services", to: "/design-services" },
  { label: "Logo Maker", to: "/logomaker" },
  { label: "QR Code Generator", to: "/qr-code-generator" }
];
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Header() {
  const [promoOpen, setPromoOpen] = useState(true);
  const [openTab, setOpenTab] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpenTab(null);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenTab(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40 bg-background", children: [
    promoOpen && /* @__PURE__ */ jsx("div", { className: "bg-primary text-primary-foreground text-xs", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex items-center justify-between py-2 gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "truncate", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Buy More, Save More!" }),
        " Flat 5% OFF on Orders ₹10,000+  |  Code:",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-mono font-semibold", children: "SAVE5" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 shrink-0", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/help-centre", className: "hidden md:inline-flex items-center gap-1.5 hover:underline", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
          " 02522-669393"
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setPromoOpen(false), "aria-label": "Dismiss promo", className: "opacity-80 hover:opacity-100", children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "border-b border-border bg-background shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "container-page flex items-center gap-4 py-4", children: [
        /* @__PURE__ */ jsx("button", { className: "lg:hidden p-2 -ml-2", onClick: () => setMobileOpen(true), "aria-label": "Open menu", children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 shrink-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-8 w-8", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-md bg-primary rotate-6" }),
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-md bg-secondary -rotate-6 opacity-80" }),
            /* @__PURE__ */ jsx("span", { className: "absolute inset-1.5 rounded-sm bg-background" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-primary tracking-tight", children: "VistaPrint" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex flex-1 max-w-2xl mx-2", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full rounded-lg overflow-hidden border border-border focus-within:border-primary transition-colors", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search for products, designs and more...",
              className: "flex-1 px-4 py-2.5 text-sm bg-background focus:outline-none"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "bg-primary text-primary-foreground px-5 inline-flex items-center justify-center hover:bg-primary/90", "aria-label": "Search", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }) })
        ] }) }),
        /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-1 ml-auto", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/account", className: "hidden md:flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-muted text-sm", children: [
            /* @__PURE__ */ jsx(FolderOpen, { className: "h-5 w-5" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "hidden xl:inline", children: "Projects" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/account", className: "hidden md:flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-muted text-sm", children: [
            /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "hidden xl:inline", children: "Favourites" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/login", className: "hidden md:flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-muted text-sm", children: [
            /* @__PURE__ */ jsx(User, { className: "h-5 w-5" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "hidden xl:inline", children: "Account" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/cart", className: "flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-muted text-sm relative", children: [
            /* @__PURE__ */ jsx(ShoppingCart, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsx("span", { className: "hidden xl:inline", children: "Cart" }),
            /* @__PURE__ */ jsx("span", { className: "ml-1 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs h-5 min-w-5 px-1.5", children: "0" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { ref: wrapRef, className: "relative border-t border-border hidden lg:block", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 overflow-x-auto no-scrollbar", children: NAV_TABS.map((tab) => {
        const category = CATEGORIES.find((c) => c.route === tab.to);
        const isOpen = openTab === tab.label;
        return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: tab.to,
              onMouseEnter: () => category && setOpenTab(tab.label),
              activeProps: { className: "text-primary" },
              activeOptions: { exact: tab.to === "/" },
              className: "inline-flex items-center gap-1 whitespace-nowrap px-3 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors",
              children: [
                tab.label,
                category ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3 opacity-60" }) : null
              ]
            }
          ),
          category && isOpen ? /* @__PURE__ */ jsxs(
            "div",
            {
              onMouseLeave: () => setOpenTab(null),
              className: "absolute left-0 top-full mt-0 w-[640px] bg-card shadow-card-hover rounded-b-xl border border-border p-6 z-50 animate-in fade-in slide-in-from-top-2",
              children: [
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-x-6 gap-y-2", children: category.subCategories.map((sub) => /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: category.route,
                    onClick: () => setOpenTab(null),
                    className: "text-sm text-muted-foreground hover:text-primary py-1.5",
                    children: sub
                  },
                  sub
                )) }),
                /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-border", children: /* @__PURE__ */ jsxs(Link, { to: category.route, onClick: () => setOpenTab(null), className: "text-sm font-semibold text-primary hover:underline", children: [
                  "Shop all ",
                  category.name,
                  " →"
                ] }) })
              ]
            }
          ) : null
        ] }, tab.label);
      }) }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: cn("fixed inset-0 z-50 lg:hidden", mobileOpen ? "pointer-events-auto" : "pointer-events-none"), children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("absolute inset-0 bg-foreground/50 transition-opacity", mobileOpen ? "opacity-100" : "opacity-0"),
          onClick: () => setMobileOpen(false)
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-background shadow-xl overflow-y-auto transition-transform",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          ),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-primary text-lg", children: "Menu" }),
              /* @__PURE__ */ jsx("button", { onClick: () => setMobileOpen(false), "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) })
            ] }),
            /* @__PURE__ */ jsxs("nav", { className: "p-2", children: [
              NAV_TABS.map((tab) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: tab.to,
                  onClick: () => setMobileOpen(false),
                  className: "block px-3 py-3 text-sm font-medium border-b border-border hover:bg-muted",
                  children: tab.label
                },
                tab.label
              )),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 p-3", children: [
                /* @__PURE__ */ jsx(Link, { to: "/login", onClick: () => setMobileOpen(false), className: "px-3 py-2 rounded-md bg-muted text-center text-sm", children: "Account" }),
                /* @__PURE__ */ jsx(Link, { to: "/cart", onClick: () => setMobileOpen(false), className: "px-3 py-2 rounded-md bg-primary text-primary-foreground text-center text-sm", children: "Cart" })
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
const COLS = [
  {
    title: "Products",
    links: [
      { label: "Visiting Cards", to: "/business-cards" },
      { label: "T-shirts & Polos", to: "/clothing-bags" },
      { label: "Stationery", to: "/stationery" },
      { label: "Stamps", to: "/stamps" },
      { label: "Signs & Banners", to: "/signs-posters" },
      { label: "Labels & Stickers", to: "/labels-stickers" },
      { label: "Mugs & Gifts", to: "/photo-gifts" }
    ]
  },
  {
    title: "Services & Tools",
    links: [
      { label: "Logo Maker", to: "/logomaker" },
      { label: "QR Code Generator", to: "/qr-code-generator" },
      { label: "Design Services", to: "/design-services" },
      { label: "Bulk Orders", to: "/help-centre" }
    ]
  },
  {
    title: "Help & Company",
    links: [
      { label: "Help Centre", to: "/help-centre" },
      { label: "Track Order", to: "/account" },
      { label: "Returns Policy", to: "/help-centre" },
      { label: "About Us", to: "/help-centre" },
      { label: "Privacy Policy", to: "/help-centre" },
      { label: "Terms of Use", to: "/help-centre" }
    ]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-footer text-footer-foreground mt-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-8 w-8", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-md bg-secondary rotate-6" }),
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-md bg-accent -rotate-6 opacity-80" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold tracking-tight", children: "VistaPrint" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm opacity-80 max-w-xs", children: "Helping small businesses look professional with custom printing, design and merchandise." }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex items-center gap-3", children: [Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Social", className: "h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }, i)) })
      ] }),
      COLS.map((col) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold mb-4", children: col.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-sm opacity-80", children: col.links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, className: "hover:opacity-100 hover:underline", children: l.label }) }, l.label)) })
      ] }, col.title))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex flex-col md:flex-row items-center justify-between gap-3 py-5 text-xs opacity-80", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2026 VistaPrint India. All rights reserved." }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: ["VISA", "MC", "UPI", "PhonePe", "Razorpay"].map((p) => /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 rounded bg-white/10 font-medium tracking-wide", children: p }, p)) })
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$i = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VistaPrint India — Custom Printing, Merchandise & Design" },
      { name: "description", content: "Custom visiting cards, t-shirts, signs, stationery and more. Fast delivery across India with quality you can trust." },
      { name: "author", content: "VistaPrint" },
      { property: "og:title", content: "VistaPrint India — Custom Printing & Merchandise" },
      { property: "og:description", content: "Custom printing, merchandise and design services for small businesses across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$i.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
const cat$8 = CATEGORIES.find((c) => c.slug === "stationery");
const $$splitComponentImporter$h = () => import("./stationery-BZN4Dsid.js");
const Route$h = createFileRoute("/stationery")({
  head: () => ({
    meta: [{
      title: `${cat$8.name} — VistaPrint India`
    }, {
      name: "description",
      content: cat$8.blurb
    }, {
      property: "og:title",
      content: `${cat$8.name} — VistaPrint India`
    }, {
      property: "og:description",
      content: cat$8.blurb
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const cat$7 = CATEGORIES.find((c) => c.slug === "stamps");
const $$splitComponentImporter$g = () => import("./stamps-nNirvocM.js");
const Route$g = createFileRoute("/stamps")({
  head: () => ({
    meta: [{
      title: `${cat$7.name} — VistaPrint India`
    }, {
      name: "description",
      content: cat$7.blurb
    }, {
      property: "og:title",
      content: `${cat$7.name} — VistaPrint India`
    }, {
      property: "og:description",
      content: cat$7.blurb
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const cat$6 = CATEGORIES.find((c) => c.slug === "signs-posters");
const $$splitComponentImporter$f = () => import("./signs-posters-BlB_TWk9.js");
const Route$f = createFileRoute("/signs-posters")({
  head: () => ({
    meta: [{
      title: `${cat$6.name} — VistaPrint India`
    }, {
      name: "description",
      content: cat$6.blurb
    }, {
      property: "og:title",
      content: `${cat$6.name} — VistaPrint India`
    }, {
      property: "og:description",
      content: cat$6.blurb
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./qr-code-generator-DFaRuTkG.js");
const Route$e = createFileRoute("/qr-code-generator")({
  head: () => ({
    meta: [{
      title: "Free QR Code Generator — VistaPrint India"
    }, {
      name: "description",
      content: "Generate free QR codes for URLs, text, contacts and Wi-Fi. Download as PNG or SVG and print on cards, posters and stickers."
    }, {
      property: "og:title",
      content: "Free QR Code Generator — VistaPrint India"
    }, {
      property: "og:description",
      content: "Create and download QR codes for free."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const cat$5 = CATEGORIES.find((c) => c.slug === "photo-gifts");
const $$splitComponentImporter$d = () => import("./photo-gifts-BGKg9-wR.js");
const Route$d = createFileRoute("/photo-gifts")({
  head: () => ({
    meta: [{
      title: `${cat$5.name} — VistaPrint India`
    }, {
      name: "description",
      content: cat$5.blurb
    }, {
      property: "og:title",
      content: `${cat$5.name} — VistaPrint India`
    }, {
      property: "og:description",
      content: cat$5.blurb
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const cat$4 = CATEGORIES.find((c) => c.slug === "pens");
const $$splitComponentImporter$c = () => import("./pens-oyOctm9z.js");
const Route$c = createFileRoute("/pens")({
  head: () => ({
    meta: [{
      title: `${cat$4.name} — VistaPrint India`
    }, {
      name: "description",
      content: cat$4.blurb
    }, {
      property: "og:title",
      content: `${cat$4.name} — VistaPrint India`
    }, {
      property: "og:description",
      content: cat$4.blurb
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./logomaker-BXOFdQcS.js");
const Route$b = createFileRoute("/logomaker")({
  head: () => ({
    meta: [{
      title: "Free Logo Maker — VistaPrint India"
    }, {
      name: "description",
      content: "Create a professional business logo for free. Choose a template, customise colours and text, download instantly."
    }, {
      property: "og:title",
      content: "Free Logo Maker — VistaPrint India"
    }, {
      property: "og:description",
      content: "Hundreds of templates. Fully customisable. Download in PNG or SVG."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./login-D9uH08n5.js");
const Route$a = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Sign In — VistaPrint India"
    }, {
      name: "description",
      content: "Sign in or create an account to track orders, save designs and reorder fast."
    }, {
      property: "og:title",
      content: "Sign In — VistaPrint India"
    }, {
      property: "og:description",
      content: "Access your VistaPrint account."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const cat$3 = CATEGORIES.find((c) => c.slug === "labels-stickers");
const $$splitComponentImporter$9 = () => import("./labels-stickers-DlMihzkP.js");
const Route$9 = createFileRoute("/labels-stickers")({
  head: () => ({
    meta: [{
      title: `${cat$3.name} — VistaPrint India`
    }, {
      name: "description",
      content: cat$3.blurb
    }, {
      property: "og:title",
      content: `${cat$3.name} — VistaPrint India`
    }, {
      property: "og:description",
      content: cat$3.blurb
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./help-centre-B4Mvs83R.js");
const Route$8 = createFileRoute("/help-centre")({
  head: () => ({
    meta: [{
      title: "Help Centre — VistaPrint India"
    }, {
      name: "description",
      content: "Find answers about orders, design, payment, delivery and returns. Or contact our support team."
    }, {
      property: "og:title",
      content: "Help Centre — VistaPrint India"
    }, {
      property: "og:description",
      content: "Answers and support for VistaPrint customers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const cat$2 = CATEGORIES.find((c) => c.slug === "drinkware");
const $$splitComponentImporter$7 = () => import("./drinkware-CH01evA4.js");
const Route$7 = createFileRoute("/drinkware")({
  head: () => ({
    meta: [{
      title: `${cat$2.name} — VistaPrint India`
    }, {
      name: "description",
      content: cat$2.blurb
    }, {
      property: "og:title",
      content: `${cat$2.name} — VistaPrint India`
    }, {
      property: "og:description",
      content: cat$2.blurb
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./design-services-BVnempzc.js");
const Route$6 = createFileRoute("/design-services")({
  head: () => ({
    meta: [{
      title: "Professional Design Services — VistaPrint India"
    }, {
      name: "description",
      content: "Hire expert designers for logos, business cards, banners and more. Briefs delivered in 48 hours."
    }, {
      property: "og:title",
      content: "Professional Design Services — VistaPrint India"
    }, {
      property: "og:description",
      content: "Let our experts handle your brand design."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const cat$1 = CATEGORIES.find((c) => c.slug === "clothing-bags");
const $$splitComponentImporter$5 = () => import("./clothing-bags-BfddadKI.js");
const Route$5 = createFileRoute("/clothing-bags")({
  head: () => ({
    meta: [{
      title: `${cat$1.name} — VistaPrint India`
    }, {
      name: "description",
      content: cat$1.blurb
    }, {
      property: "og:title",
      content: `${cat$1.name} — VistaPrint India`
    }, {
      property: "og:description",
      content: cat$1.blurb
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./cart-CcEX-R7Z.js");
const Route$4 = createFileRoute("/cart")({
  head: () => ({
    meta: [{
      title: "Your Cart — VistaPrint India"
    }, {
      name: "description",
      content: "Review and check out your custom printing order."
    }, {
      property: "og:title",
      content: "Your Cart — VistaPrint India"
    }, {
      property: "og:description",
      content: "Review your cart and complete your order."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const cat = CATEGORIES.find((c) => c.slug === "business-cards");
const $$splitComponentImporter$3 = () => import("./business-cards-BqoTUbBj.js");
const Route$3 = createFileRoute("/business-cards")({
  head: () => ({
    meta: [{
      title: `${cat.name} — VistaPrint India`
    }, {
      name: "description",
      content: cat.blurb
    }, {
      property: "og:title",
      content: `${cat.name} — VistaPrint India`
    }, {
      property: "og:description",
      content: cat.blurb
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./account-BNU2WBF7.js");
const Route$2 = createFileRoute("/account")({
  head: () => ({
    meta: [{
      title: "My Account — VistaPrint India"
    }, {
      name: "description",
      content: "View orders, saved projects, addresses and account settings."
    }, {
      property: "og:title",
      content: "My Account — VistaPrint India"
    }, {
      property: "og:description",
      content: "Your VistaPrint dashboard."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-ruMBuO1f.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "VistaPrint India — Custom Printing, Merchandise & Design"
    }, {
      name: "description",
      content: "Shop visiting cards, t-shirts, signs, stationery, stamps and more. Fast delivery across India."
    }, {
      property: "og:title",
      content: "VistaPrint India — Custom Printing & Merchandise"
    }, {
      property: "og:description",
      content: "Quality custom printing and merchandise for small businesses."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const make = (p) => p;
const PRODUCTS = [
  make({
    slug: "standard-visiting-cards",
    name: "Standard Visiting Cards",
    categorySlug: "business-cards",
    subCategory: "Standard",
    priceFromInr: 200,
    qtyTiers: [50, 100, 250, 500, 1e3],
    finishes: ["Matte", "Glossy"],
    shapes: ["Standard", "Rounded"],
    rating: 4.5,
    reviewCount: 2340,
    pricePill: "BUY 100 @ ₹200",
    description: "Crisp, professional visiting cards on premium 300gsm stock — the workhorse of every entrepreneur's wallet.",
    features: ["300gsm premium card stock", "Matte or glossy finish", "Full-colour printing both sides", "Standard 89×54mm size"],
    specs: [
      { label: "Size", value: "89 × 54 mm" },
      { label: "Paper", value: "300gsm" },
      { label: "Finish", value: "Matte / Glossy" },
      { label: "Turnaround", value: "5–7 business days" }
    ],
    faqs: [
      { q: "Can I print both sides?", a: "Yes — both sides print in full colour at no extra cost." },
      { q: "What file formats do you accept?", a: "PDF, PNG, JPG and AI files up to 50MB." }
    ]
  }),
  make({
    slug: "rounded-corner-visiting-cards",
    name: "Rounded Corner Visiting Cards",
    categorySlug: "business-cards",
    subCategory: "Rounded Corner",
    priceFromInr: 280,
    qtyTiers: [50, 100, 250, 500, 1e3],
    finishes: ["Matte", "Glossy", "Spot UV"],
    rating: 4.6,
    reviewCount: 1180,
    pricePill: "BUY 100 @ ₹280",
    description: "Soft rounded corners give your card a modern, premium feel.",
    features: ["Smooth rounded corners", "350gsm card stock", "Optional spot UV accents"],
    specs: [
      { label: "Size", value: "89 × 54 mm" },
      { label: "Corner radius", value: "3 mm" },
      { label: "Paper", value: "350gsm" }
    ],
    faqs: [{ q: "Are corners machine-cut?", a: "Yes, precision die-cut for a perfectly uniform finish." }]
  }),
  make({
    slug: "spot-uv-visiting-cards",
    name: "Spot UV Visiting Cards",
    categorySlug: "business-cards",
    subCategory: "Spot UV",
    priceFromInr: 450,
    qtyTiers: [100, 250, 500, 1e3],
    finishes: ["Matte + Spot UV"],
    rating: 4.8,
    reviewCount: 612,
    pricePill: "BUY 100 @ ₹450",
    description: "Matte base with a high-gloss spot UV finish on selected areas — a tactile premium upgrade.",
    features: ["Matte laminated base", "Raised gloss spot UV", "400gsm heavyweight stock"],
    specs: [
      { label: "Finish", value: "Matte + Spot UV" },
      { label: "Paper", value: "400gsm" }
    ],
    faqs: [{ q: "What can spot UV highlight?", a: "Logos, names or any vector area you specify in the artwork." }]
  }),
  make({
    slug: "classic-visiting-cards",
    name: "Classic Visiting Cards",
    categorySlug: "business-cards",
    subCategory: "Classic",
    priceFromInr: 180,
    qtyTiers: [100, 250, 500, 1e3],
    finishes: ["Matte", "Glossy"],
    rating: 4.4,
    reviewCount: 980,
    pricePill: "BUY 100 @ ₹180",
    description: "Affordable everyday visiting cards with reliable colour and clean print.",
    features: ["250gsm card stock", "Matte or glossy", "Single or double sided"],
    specs: [{ label: "Paper", value: "250gsm" }],
    faqs: [{ q: "Is this good for daily use?", a: "Yes — our most popular value pick for everyday handouts." }]
  }),
  make({
    slug: "letterheads",
    name: "Letterheads",
    categorySlug: "stationery",
    subCategory: "Letterheads",
    priceFromInr: 350,
    qtyTiers: [100, 250, 500],
    finishes: ["Uncoated A4"],
    rating: 4.5,
    reviewCount: 410,
    pricePill: "BUY 100 @ ₹350",
    description: "Professional A4 letterheads for invoices, contracts and official correspondence.",
    features: ["80gsm uncoated", "Printer-safe", "Full-colour printing"],
    specs: [{ label: "Size", value: "A4 (210 × 297 mm)" }],
    faqs: [{ q: "Can I run these through my office printer?", a: "Yes, stock is fully laser and inkjet compatible." }]
  }),
  make({
    slug: "envelopes",
    name: "Envelopes",
    categorySlug: "stationery",
    subCategory: "Envelopes",
    priceFromInr: 420,
    qtyTiers: [100, 250, 500],
    finishes: ["White", "Brown"],
    rating: 4.3,
    reviewCount: 220,
    pricePill: "BUY 100 @ ₹420",
    description: "Branded envelopes for letters, invoices and statements.",
    features: ["DL and A5 sizes", "100gsm stock", "Custom seal print"],
    specs: [{ label: "Sizes", value: "DL, A5" }],
    faqs: [{ q: "Do you offer window envelopes?", a: "Yes — DL with a left-aligned window is available." }]
  }),
  make({
    slug: "notebooks",
    name: "Personalised Notebooks",
    categorySlug: "stationery",
    subCategory: "Notebooks",
    priceFromInr: 299,
    qtyTiers: [25, 50, 100],
    finishes: ["Softcover", "Hardcover"],
    rating: 4.7,
    reviewCount: 890,
    pricePill: "FROM ₹299",
    description: "A5 notebooks with your logo embossed or printed on the cover.",
    features: ["A5 size", "100 lined pages", "Soft or hardcover"],
    specs: [{ label: "Pages", value: "100 lined" }],
    faqs: [{ q: "Can I emboss my logo?", a: "Yes — hardcover supports blind or foil embossing." }]
  }),
  make({
    slug: "polo-tshirts",
    name: "Custom Polo T-Shirts",
    categorySlug: "clothing-bags",
    subCategory: "Polo T-Shirts",
    priceFromInr: 549,
    qtyTiers: [10, 25, 50, 100],
    finishes: ["Embroidery", "Screen Print"],
    rating: 4.6,
    reviewCount: 1540,
    pricePill: "FROM ₹549",
    description: "Premium pique polos with embroidered or printed branding.",
    features: ["220gsm pique cotton", "Sizes XS–4XL", "Embroidery or print"],
    specs: [
      { label: "Fabric", value: "220gsm pique cotton" },
      { label: "Sizes", value: "XS – 4XL" }
    ],
    faqs: [{ q: "How long does embroidery take?", a: "Typically 7–10 business days after artwork approval." }]
  }),
  make({
    slug: "custom-tshirts",
    name: "Custom T-Shirts",
    categorySlug: "clothing-bags",
    subCategory: "T-Shirts",
    priceFromInr: 349,
    qtyTiers: [10, 25, 50, 100],
    finishes: ["DTG Print", "Screen Print"],
    rating: 4.5,
    reviewCount: 2120,
    pricePill: "FROM ₹349",
    description: "Soft cotton round-neck tees with full-colour DTG or screen printing.",
    features: ["180gsm cotton", "Pre-shrunk", "Sizes XS–4XL"],
    specs: [{ label: "Fabric", value: "180gsm combed cotton" }],
    faqs: [{ q: "Will the print fade?", a: "Wash inside-out in cold water for best print longevity." }]
  }),
  make({
    slug: "custom-caps",
    name: "Custom Caps",
    categorySlug: "clothing-bags",
    subCategory: "Caps",
    priceFromInr: 299,
    qtyTiers: [12, 25, 50, 100],
    finishes: ["Embroidery"],
    rating: 4.4,
    reviewCount: 670,
    pricePill: "FROM ₹299",
    description: "6-panel structured caps with embroidered front logo.",
    features: ["Adjustable strap", "Embroidered logo", "Multiple colours"],
    specs: [{ label: "Style", value: "6-panel structured" }],
    faqs: [{ q: "Adjustable size?", a: "Yes, all caps come with a metal buckle strap." }]
  }),
  make({
    slug: "tote-bags",
    name: "Custom Tote Bags",
    categorySlug: "clothing-bags",
    subCategory: "Tote Bags",
    priceFromInr: 199,
    qtyTiers: [25, 50, 100, 250],
    finishes: ["Screen Print"],
    rating: 4.6,
    reviewCount: 1330,
    pricePill: "FROM ₹199",
    description: "Heavy-duty cotton totes — great for giveaways and shop branding.",
    features: ["12oz cotton canvas", "Reinforced handles", "Single or two-colour print"],
    specs: [{ label: "Material", value: "12oz cotton canvas" }],
    faqs: [{ q: "Max print area?", a: "30 × 30 cm on front; back print available at extra cost." }]
  }),
  make({
    slug: "self-inking-stamps",
    name: "Self Inking Stamps",
    categorySlug: "stamps",
    subCategory: "Self Inking",
    priceFromInr: 399,
    qtyTiers: [1, 3, 5, 10],
    finishes: ["Black", "Blue", "Red"],
    rating: 4.7,
    reviewCount: 920,
    pricePill: "FROM ₹399",
    description: "Trodat-style self-inking stamps with thousands of clean impressions per refill.",
    features: ["Up to 10,000 impressions", "Replaceable ink pad", "Multiple ink colours"],
    specs: [{ label: "Sizes", value: "Small / Medium / Large" }],
    faqs: [{ q: "How do I refill the ink?", a: "Press 3–5 drops of matching Trodat ink onto the pad." }]
  }),
  make({
    slug: "rubber-stamps",
    name: "Basic Rubber Stamps",
    categorySlug: "stamps",
    subCategory: "Rubber Stamps",
    priceFromInr: 199,
    qtyTiers: [1, 3, 5],
    finishes: ["Wooden Handle"],
    rating: 4.3,
    reviewCount: 340,
    pricePill: "FROM ₹199",
    description: "Traditional wooden-handle rubber stamps for offices and shops.",
    features: ["Wooden handle", "Laser-cut rubber", "Use with any stamp pad"],
    specs: [{ label: "Handle", value: "Wood" }],
    faqs: [{ q: "Is a stamp pad included?", a: "No — purchase any standard stamp pad separately." }]
  }),
  make({
    slug: "photo-mugs",
    name: "Personalised Photo Mugs",
    categorySlug: "photo-gifts",
    subCategory: "Photo Mugs",
    priceFromInr: 249,
    qtyTiers: [1, 3, 6, 12],
    finishes: ["Ceramic White", "Magic Mug"],
    rating: 4.7,
    reviewCount: 1820,
    pricePill: "FROM ₹249",
    description: "11oz ceramic mugs printed with your photos or designs — dishwasher safe.",
    features: ["11oz ceramic", "Dishwasher safe", "Magic colour-change option"],
    specs: [{ label: "Capacity", value: "325 ml" }],
    faqs: [{ q: "Is the print dishwasher safe?", a: "Yes — sublimation print is permanent and dishwasher safe." }]
  }),
  make({
    slug: "photo-albums",
    name: "Photo Albums",
    categorySlug: "photo-gifts",
    subCategory: "Photo Albums",
    priceFromInr: 899,
    qtyTiers: [1, 2, 5],
    finishes: ["Hardcover"],
    rating: 4.8,
    reviewCount: 540,
    pricePill: "FROM ₹899",
    description: "Premium layflat photo albums to preserve weddings, trips and milestones.",
    features: ["Layflat binding", "Lustre photo paper", "20–60 pages"],
    specs: [{ label: "Sizes", value: "8×8, 10×10, 12×12 in" }],
    faqs: [{ q: "Can I add captions?", a: "Yes, in the online designer before checkout." }]
  }),
  make({
    slug: "umbrellas",
    name: "Single Fold Umbrellas",
    categorySlug: "photo-gifts",
    subCategory: "Calendars",
    priceFromInr: 655,
    qtyTiers: [10, 25, 50],
    finishes: ["Polyester"],
    rating: 4.4,
    reviewCount: 410,
    pricePill: "FROM ₹655",
    description: "Sturdy single-fold umbrellas with full-colour panel printing.",
    features: ["8-panel design", "Auto open", "Full-colour print"],
    specs: [{ label: "Diameter", value: "104 cm" }],
    faqs: [{ q: "Wind-proof?", a: "Reinforced ribs withstand moderate wind gusts." }]
  }),
  make({
    slug: "posters",
    name: "Custom Posters",
    categorySlug: "signs-posters",
    subCategory: "Posters",
    priceFromInr: 120,
    qtyTiers: [1, 5, 10, 25],
    finishes: ["Matte", "Glossy"],
    rating: 4.5,
    reviewCount: 680,
    pricePill: "FROM ₹120",
    description: "Vibrant posters in A3, A2 and A1 for shopfronts, classrooms and events.",
    features: ["170gsm poster paper", "A3 to A1 sizes", "Indoor use"],
    specs: [{ label: "Sizes", value: "A3, A2, A1" }],
    faqs: [{ q: "Are these waterproof?", a: "No — these are indoor posters; choose vinyl banners for outdoor use." }]
  }),
  make({
    slug: "banners",
    name: "Vinyl Banners",
    categorySlug: "signs-posters",
    subCategory: "Banners",
    priceFromInr: 499,
    qtyTiers: [1, 2, 5],
    finishes: ["Outdoor Vinyl"],
    rating: 4.6,
    reviewCount: 290,
    pricePill: "FROM ₹499",
    description: "Heavy-duty outdoor vinyl banners with hemmed edges and eyelets.",
    features: ["440gsm vinyl", "Brass eyelets", "Weather resistant"],
    specs: [{ label: "Sizes", value: "Up to 3 × 6 m" }],
    faqs: [{ q: "How are these hung?", a: "Brass eyelets at every corner; rope-tie or zip-tie compatible." }]
  }),
  make({
    slug: "flyers",
    name: "Flyers",
    categorySlug: "signs-posters",
    subCategory: "Flyers",
    priceFromInr: 250,
    qtyTiers: [100, 250, 500, 1e3],
    finishes: ["Matte", "Glossy"],
    rating: 4.4,
    reviewCount: 540,
    pricePill: "BUY 250 @ ₹250",
    description: "A5 and A4 flyers for promotions, menus and event handouts.",
    features: ["150gsm gloss/matte", "Full colour both sides"],
    specs: [{ label: "Sizes", value: "A5, A4" }],
    faqs: [{ q: "Lead time?", a: "3–5 business days from artwork approval." }]
  }),
  make({
    slug: "roll-labels",
    name: "Product Roll Labels",
    categorySlug: "labels-stickers",
    subCategory: "Roll Labels",
    priceFromInr: 599,
    qtyTiers: [250, 500, 1e3, 2500],
    finishes: ["Matte", "Glossy", "Clear"],
    rating: 4.7,
    reviewCount: 470,
    pricePill: "FROM ₹599",
    description: "Custom-shape product labels on continuous rolls for bottles, jars and packaging.",
    features: ["Waterproof", "Custom die-cut shapes", "Roll-fed for label applicators"],
    specs: [{ label: "Material", value: "Vinyl / Paper / Clear" }],
    faqs: [{ q: "Are these waterproof?", a: "Vinyl and clear options are fully waterproof and oil-resistant." }]
  }),
  make({
    slug: "bumper-stickers",
    name: "Die Cut Stickers",
    categorySlug: "labels-stickers",
    subCategory: "Die Cut",
    priceFromInr: 199,
    qtyTiers: [25, 50, 100, 250],
    finishes: ["Vinyl Glossy", "Vinyl Matte"],
    rating: 4.8,
    reviewCount: 1290,
    pricePill: "FROM ₹199",
    description: "Cut-to-shape vinyl stickers in any custom shape you upload.",
    features: ["Custom die-cut", "Outdoor durable vinyl", "Indoor & outdoor"],
    specs: [{ label: "Size range", value: "2 × 2 to 15 × 15 cm" }],
    faqs: [{ q: "How long do they last outdoors?", a: "Up to 3 years for vinyl in standard conditions." }]
  }),
  make({
    slug: "ball-pens",
    name: "Custom Ball Pens",
    categorySlug: "pens",
    subCategory: "Ball Pens",
    priceFromInr: 19,
    qtyTiers: [50, 100, 250, 500, 1e3],
    finishes: ["Plastic", "Metal"],
    rating: 4.4,
    reviewCount: 760,
    pricePill: "FROM ₹19",
    description: "Smooth-writing ball pens with single-colour barrel print.",
    features: ["Blue ink refill", "Single-colour print", "Multiple barrel colours"],
    specs: [{ label: "Refill", value: "Standard parker-style" }],
    faqs: [{ q: "Refillable?", a: "Yes — uses standard parker-style refills." }]
  }),
  make({
    slug: "metal-pens",
    name: "Metal Pens",
    categorySlug: "pens",
    subCategory: "Metal Pens",
    priceFromInr: 149,
    qtyTiers: [25, 50, 100, 250],
    finishes: ["Engraved", "Printed"],
    rating: 4.6,
    reviewCount: 380,
    pricePill: "FROM ₹149",
    description: "Premium metal pens with laser engraving or UV print.",
    features: ["Heavy metal barrel", "Laser engraving", "Gift-ready packaging"],
    specs: [{ label: "Weight", value: "32g" }],
    faqs: [{ q: "Gift box?", a: "Yes — premium gift box included for orders above 25 units." }]
  }),
  make({
    slug: "ceramic-mugs",
    name: "Ceramic Coffee Mugs",
    categorySlug: "drinkware",
    subCategory: "Ceramic Mugs",
    priceFromInr: 199,
    qtyTiers: [6, 12, 25, 50],
    finishes: ["White", "Black", "Coloured Rim"],
    rating: 4.6,
    reviewCount: 980,
    pricePill: "FROM ₹199",
    description: "Sublimation-printed ceramic mugs — perfect for offices, cafés and gifts.",
    features: ["11oz capacity", "Dishwasher safe", "Sublimation print"],
    specs: [{ label: "Capacity", value: "325 ml" }],
    faqs: [{ q: "Microwave safe?", a: "Yes — fully microwave and dishwasher safe." }]
  }),
  make({
    slug: "water-bottles",
    name: "Custom Water Bottles",
    categorySlug: "drinkware",
    subCategory: "Water Bottles",
    priceFromInr: 349,
    qtyTiers: [10, 25, 50, 100],
    finishes: ["Stainless Steel", "Plastic"],
    rating: 4.5,
    reviewCount: 470,
    pricePill: "FROM ₹349",
    description: "Branded reusable water bottles — vacuum stainless or BPA-free plastic.",
    features: ["750 ml capacity", "Leak proof", "Laser engraving available"],
    specs: [{ label: "Capacity", value: "750 ml" }],
    faqs: [{ q: "Keeps drinks cold?", a: "Stainless steel keeps cold up to 24h, hot up to 12h." }]
  })
];
const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
const getProductsByCategory = (categorySlug) => PRODUCTS.filter((p) => p.categorySlug === categorySlug);
const getRelated = (slug, limit = 6) => {
  const p = getProduct(slug);
  if (!p) return [];
  return PRODUCTS.filter((x) => x.categorySlug === p.categorySlug && x.slug !== slug).slice(0, limit);
};
const POPULAR_SLUGS = [
  "standard-visiting-cards",
  "letterheads",
  "photo-albums",
  "bumper-stickers",
  "polo-tshirts",
  "custom-tshirts",
  "photo-mugs",
  "umbrellas",
  "self-inking-stamps",
  "tote-bags",
  "metal-pens",
  "ceramic-mugs"
];
const TRENDING_SLUGS = [
  "classic-visiting-cards",
  "spot-uv-visiting-cards",
  "rounded-corner-visiting-cards",
  "custom-caps",
  "rubber-stamps",
  "envelopes",
  "notebooks",
  "flyers",
  "banners",
  "posters",
  "roll-labels",
  "water-bottles"
];
const $$splitNotFoundComponentImporter = () => import("./product._slug-V9Y2zjZg.js");
const $$splitComponentImporter = () => import("./product._slug-QDP2M2i0.js");
const Route = createFileRoute("/product/$slug")({
  loader: ({
    params
  }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return {
      product: p
    };
  },
  head: ({
    loaderData
  }) => {
    const p = loaderData?.product;
    if (!p) return {};
    return {
      meta: [{
        title: `${p.name} — VistaPrint India`
      }, {
        name: "description",
        content: p.description
      }, {
        property: "og:title",
        content: p.name
      }, {
        property: "og:description",
        content: p.description
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const StationeryRoute = Route$h.update({
  id: "/stationery",
  path: "/stationery",
  getParentRoute: () => Route$i
});
const StampsRoute = Route$g.update({
  id: "/stamps",
  path: "/stamps",
  getParentRoute: () => Route$i
});
const SignsPostersRoute = Route$f.update({
  id: "/signs-posters",
  path: "/signs-posters",
  getParentRoute: () => Route$i
});
const QrCodeGeneratorRoute = Route$e.update({
  id: "/qr-code-generator",
  path: "/qr-code-generator",
  getParentRoute: () => Route$i
});
const PhotoGiftsRoute = Route$d.update({
  id: "/photo-gifts",
  path: "/photo-gifts",
  getParentRoute: () => Route$i
});
const PensRoute = Route$c.update({
  id: "/pens",
  path: "/pens",
  getParentRoute: () => Route$i
});
const LogomakerRoute = Route$b.update({
  id: "/logomaker",
  path: "/logomaker",
  getParentRoute: () => Route$i
});
const LoginRoute = Route$a.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$i
});
const LabelsStickersRoute = Route$9.update({
  id: "/labels-stickers",
  path: "/labels-stickers",
  getParentRoute: () => Route$i
});
const HelpCentreRoute = Route$8.update({
  id: "/help-centre",
  path: "/help-centre",
  getParentRoute: () => Route$i
});
const DrinkwareRoute = Route$7.update({
  id: "/drinkware",
  path: "/drinkware",
  getParentRoute: () => Route$i
});
const DesignServicesRoute = Route$6.update({
  id: "/design-services",
  path: "/design-services",
  getParentRoute: () => Route$i
});
const ClothingBagsRoute = Route$5.update({
  id: "/clothing-bags",
  path: "/clothing-bags",
  getParentRoute: () => Route$i
});
const CartRoute = Route$4.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$i
});
const BusinessCardsRoute = Route$3.update({
  id: "/business-cards",
  path: "/business-cards",
  getParentRoute: () => Route$i
});
const AccountRoute = Route$2.update({
  id: "/account",
  path: "/account",
  getParentRoute: () => Route$i
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$i
});
const ProductSlugRoute = Route.update({
  id: "/product/$slug",
  path: "/product/$slug",
  getParentRoute: () => Route$i
});
const rootRouteChildren = {
  IndexRoute,
  AccountRoute,
  BusinessCardsRoute,
  CartRoute,
  ClothingBagsRoute,
  DesignServicesRoute,
  DrinkwareRoute,
  HelpCentreRoute,
  LabelsStickersRoute,
  LoginRoute,
  LogomakerRoute,
  PensRoute,
  PhotoGiftsRoute,
  QrCodeGeneratorRoute,
  SignsPostersRoute,
  StampsRoute,
  StationeryRoute,
  ProductSlugRoute
};
const routeTree = Route$i._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CATEGORIES as C,
  PRODUCTS as P,
  Route as R,
  TRENDING_SLUGS as T,
  cat$7 as a,
  cat$6 as b,
  cat$8 as c,
  cat$5 as d,
  cat$4 as e,
  cat$3 as f,
  cat$2 as g,
  cat$1 as h,
  cat as i,
  getProductsByCategory as j,
  cn as k,
  POPULAR_SLUGS as l,
  getRelated as m,
  router as r
};
