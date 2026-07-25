export type Category = {
  slug: string;
  name: string;
  route: string;
  subCategories: string[];
  blurb: string;
};

export type HomepageCategory = {
  name: string;
  route: string;
  image: string;
  blurb: string;
  emoji: string;
  search?: Record<string, string>;
};

export type NavTab = {
  label: string;
  to: string;
  subCategories?: string[];
  hot?: boolean;
  cta?: boolean;
  hash?: string;
};

/** Remaining homepage categories — T-Shirts featured separately. */
export const HOMEPAGE_CATEGORIES: HomepageCategory[] = [
  {
    name: "Custom Bottles",
    route: "/drinkware",
    image: "/images/water-bottles.png",
    blurb: "Branded water bottles and tumblers for teams and events.",
    emoji: "🍼",
    search: { sub: "Water Bottles" },
  },
  {
    name: "Custom Caps",
    route: "/clothing-bags",
    image: "/images/custom-caps.png",
    blurb: "Embroidered caps with your logo front and centre.",
    emoji: "🧢",
    search: { sub: "Caps" },
  },
  {
    name: "Custom Badges",
    route: "/labels-stickers",
    image: "/images/bumper-stickers.png",
    blurb: "Pin badges, lanyards, and event identification.",
    emoji: "🏅",
  },
  {
    name: "Corporate Gifts",
    route: "/photo-gifts",
    image: "/images/photo-albums.png",
    blurb: "Premium welcome kits and branded gift sets.",
    emoji: "🎁",
  },
  {
    name: "Custom Pens",
    route: "/pens",
    image: "/images/metal-pens.png",
    blurb: "Smooth-writing branded pens for corporate gifting.",
    emoji: "🖊️",
  },
  {
    name: "Custom Stamps",
    route: "/stamps",
    image: "/images/self-inking-stamps.png",
    blurb: "Professional self-inking and rubber stamps.",
    emoji: "🔖",
  },
];

export const TSHIRT_PRODUCT_SLUGS = ["custom-tshirts", "polo-tshirts"] as const;

export const CATEGORIES: Category[] = [
  {
    slug: "clothing-bags",
    name: "Custom T-Shirts",
    route: "/clothing-bags",
    subCategories: ["T-Shirts", "Polo T-Shirts", "Hoodies", "DTF Prints", "Caps", "Tote Bags"],
    blurb: "Custom apparel for teams, events, and brand promotion.",
  },
  {
    slug: "drinkware",
    name: "Custom Bottles",
    route: "/drinkware",
    subCategories: ["Water Bottles", "Travel Mugs", "Tumblers", "Ceramic Mugs"],
    blurb: "Branded drinkware your team and customers will use daily.",
  },
  {
    slug: "labels-stickers",
    name: "Badges",
    route: "/labels-stickers",
    subCategories: ["Pin Badges", "Lanyards", "Name Badges", "Button Badges", "Custom Stickers"],
    blurb: "Pin badges, lanyards, and promotional items for events.",
  },
  {
    slug: "photo-gifts",
    name: "Corporate Gifts",
    route: "/photo-gifts",
    subCategories: ["Welcome Kits", "Photo Mugs", "Gift Sets", "Calendars", "Canvas Prints"],
    blurb: "Premium branded gifts that leave a lasting impression.",
  },
  {
    slug: "pens",
    name: "Custom Pens",
    route: "/pens",
    subCategories: ["Ball Pens", "Metal Pens", "Highlighters", "Pen Sets"],
    blurb: "Smooth-writing custom pens — a corporate gift classic.",
  },
  {
    slug: "stamps",
    name: "Stamps",
    route: "/stamps",
    subCategories: ["Self Inking", "Rubber Stamps", "Date Stamps", "Address Stamps"],
    blurb: "Professional stamps for daily office use.",
  },
  {
    slug: "stationery",
    name: "Stationery",
    route: "/stationery",
    subCategories: ["Letterheads", "Envelopes", "Notebooks", "Diaries", "Notepads", "Folders"],
    blurb: "Custom business stationery that puts your brand on every page.",
  },
];

export const NAV_TABS: NavTab[] = [
  { label: "Home", to: "/" },
  {
    label: "T-Shirts",
    to: "/clothing-bags",
    subCategories: ["T-Shirts", "Polo T-Shirts", "Hoodies"],
  },
  {
    label: "Sports Jerseys",
    to: "/product/sports-jerseys",
  },
  {
    label: "Caps",
    to: "/clothing-bags",
    subCategories: ["Caps"],
  },
  {
    label: "Bottles",
    to: "/drinkware",
    subCategories: ["Water Bottles", "Travel Mugs", "Tumblers"],
  },
  {
    label: "Corporate Gifts",
    to: "/photo-gifts",
    subCategories: ["Welcome Kits", "Photo Mugs", "Gift Sets"],
  },
  {
    label: "Business Printing",
    to: "/stationery",
    subCategories: ["Letterheads", "Envelopes", "Notebooks", "Folders"],
  },
  { label: "Bulk Orders", to: "/", hash: "bulk-orders" },
  { label: "Event Orders", to: "/", hash: "event-orders" },
  { label: "About", to: "/", hash: "about" },
  { label: "Contact", to: "/", hash: "contact" },
  { label: "Get Quote", to: "/", hash: "quote", cta: true },
];
