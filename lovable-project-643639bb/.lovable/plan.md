
## Overview

Build a 10-page custom printing & merchandise storefront inspired by Vistaprint India. All data is mock/static, no backend. Clean, well-spaced, modern layout.

**Stack note:** This project uses TanStack Start (file-based routing under `src/routes/`), not React Router v6. Navigation will use `@tanstack/react-router`'s `<Link>` and file-based routes — the user-facing behavior is identical (client-side routing, deep links, scroll restoration). All other requirements (Tailwind, Lucide, Framer Motion, mock data) are unchanged.

## Design System

Add tokens to `src/styles.css` using `oklch` equivalents of the requested hex palette, exposed as semantic Tailwind tokens:
- `--primary` (deep ocean blue #006196), `--secondary` (#2BA8E0), `--accent` (#6ECFF5)
- `--background`, `--surface` (#F5F7FA), `--foreground`, `--muted-foreground`, `--success`, `--border`
- `--footer` (dark navy #0F2233)
- Radius: card 12px, button/input 8px, badge pill 999px
- Shadow tokens: `--shadow-card`, `--shadow-card-hover`
- Typography: Inter via Google Fonts link in `__root.tsx` head; H1 40/700, H2 28/600, H3 20/500, body 15/400
- Container: `max-w-7xl mx-auto px-4`
- Section padding: `py-16`

Components use semantic tokens only (no raw hex in JSX).

## Routes (file-based, under `src/routes/`)

```text
index.tsx                       -> /
business-cards.tsx              -> /business-cards
signs-posters.tsx               -> /signs-posters
stationery.tsx                  -> /stationery
clothing-bags.tsx               -> /clothing-bags
photo-gifts.tsx                 -> /photo-gifts
drinkware.tsx                   -> /drinkware
labels-stickers.tsx             -> /labels-stickers
stamps.tsx                      -> /stamps
pens.tsx                        -> /pens
product.$slug.tsx               -> /product/:slug   (shared product detail)
logomaker.tsx                   -> /logomaker
qr-code-generator.tsx           -> /qr-code-generator
design-services.tsx             -> /design-services
help-centre.tsx                 -> /help-centre
cart.tsx                        -> /cart
login.tsx                       -> /login
account.tsx                     -> /account
```

Each route sets its own `head()` with unique title + meta description + og tags.

`__root.tsx` renders `<Header />`, `<Outlet />`, `<Footer />` and keeps the existing `QueryClientProvider`, `errorComponent`, and `notFoundComponent`.

## Shared Components (`src/components/`)

- `layout/Header.tsx` — utility bar (dismissible promo + phone), sticky main header (logo, search, account icons), primary nav row with mega-menu
- `layout/MegaMenu.tsx` — outside-click + Escape to close
- `layout/MobileNav.tsx` — full-screen drawer with accordion categories
- `layout/Footer.tsx` — 4-column dark navy footer + bottom bar with payment icons
- `ui/ProductCard.tsx`, `ui/CategoryCard.tsx`, `ui/PricePill.tsx`, `ui/TrustBar.tsx`
- `ui/GradientPlaceholder.tsx` — deterministic `hsl()` background hashed from product name (stable per product)
- `ui/SectionHeading.tsx` — H2 with blue left-border accent
- `ui/FadeInOnScroll.tsx` — IntersectionObserver + framer-motion fade-up
- `ui/HeroCarousel.tsx` — 5s auto-advance, dots, arrows
- `product/FilterSidebar.tsx`, `product/SubCategoryPills.tsx`, `product/ProductTabs.tsx`, `product/ReviewHistogram.tsx`
- `cart/CartItem.tsx`, `cart/OrderSummary.tsx`
- `account/AccountSidebar.tsx`

## Mock Data (`src/data/`)

- `categories.ts` — 12 top categories + mega-menu structure
- `products.ts` — ~30 products with slug, name, category, priceFromInr, qtyTiers, finishes, rating, reviewCount, specs, faqs, related slugs
- `reviews.ts` — sample reviews per product
- `helpTopics.ts`, `faqs.ts`

## Page Details

1. **Homepage** — Hero carousel (2 slides), "Explore All Categories" (12 cards, 4-col), trust bar, "Most Popular Products" (14 cards, 5-col), "Trending" (14 cards), Design Services CTA banner.
2. **Category page template** — Reused by all category routes via a shared `<CategoryPage category={...} />` component. Banner + breadcrumb, sub-category pill row, 4-col product grid, sticky left filter sidebar (finish, shape, quantity, price slider, sort), mobile filter drawer, pagination, SEO accordion.
3. **Product page** (`/product/$slug`) — 2-col layout: image panel (large + thumbs) | info panel (breadcrumb, H1, rating, price w/ strikethrough + savings badge, qty tiles, finish pills, delivery estimate, Customise & Buy + Favourites, trust icons). Tabs: Overview / Specifications / Reviews / FAQs. "You may also like" horizontal scroll.
4. **Logo Maker** — Hero + CTA, 3-step "How it works", 3×3 template gallery, benefits strip.
5. **QR Code Generator** — Centered tool UI; QR rendered client-side via `qrcode` lib (bun add) with PNG/SVG download; feature strip linking to print categories.
6. **Design Services** — Hero, 3 service cards, 4-step timeline, 3-tier pricing table, 6-item portfolio grid.
7. **Help Centre** — Hero search, 9 topic cards (3-col), contact strip, 8-item FAQ accordion.
8. **Cart** — 70/30 split; mock items in local state; empty state illustration + Browse Products CTA.
9. **Login** — Split screen; tab toggle Sign In / Create Account; client-side validation only.
10. **Account** — Sidebar nav + content area; default Orders table with status badges + Reorder; My Projects grid; Profile Settings form. Not gated by real auth — visible as a static demo.

## Dependencies to add

- `framer-motion` — page + scroll-entry animations
- `qrcode` + `@types/qrcode` — QR generation
- `lucide-react` (already typical in shadcn template; install if missing)

## Technical Rules

- Tailwind classes only (no inline styles), semantic tokens only
- All `<Link to="...">` use TanStack Router type-safe paths
- Mega-menu closes on outside click + Escape
- Forms: inline validation messages
- Mobile-first; no horizontal overflow; sm/md/lg/xl breakpoints
- Active nav item uses `activeProps={{ className: "text-primary" }}`
- Every route exports unique `head()` meta
- Gradient placeholders only — no external image URLs
- Single H1 per page; semantic HTML throughout

## Out of Scope

- Real authentication, real cart persistence, real payment, real search results
- Backend / Lovable Cloud (everything is mock/static as requested)
- React Router v6 (replaced by TanStack Router — same UX)

## Build Order

1. Design tokens + global styles + fonts
2. Mock data files
3. Shared layout (Header, MegaMenu, MobileNav, Footer) + reusable UI primitives
4. Homepage
5. Category page template + 9 category routes
6. Product detail route
7. Tools pages (Logo Maker, QR Generator, Design Services)
8. Help Centre, Cart, Login, Account
9. Polish pass: animations, responsive QA, meta tags
