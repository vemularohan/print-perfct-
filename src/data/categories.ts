export type Category = {
  slug: string;
  name: string;
  route: string;
  subCategories: string[];
  blurb: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "business-cards",
    name: "Visiting Cards",
    route: "/business-cards",
    subCategories: ["Standard", "Classic", "Rounded Corner", "Square", "Spot UV", "Matte", "Glossy", "NFC", "QR Code", "Bulk", "Premium Plus"],
    blurb: "Make a memorable first impression with premium visiting cards printed on a range of finishes.",
  },
  {
    slug: "signs-posters",
    name: "Signs & Posters",
    route: "/signs-posters",
    subCategories: ["Posters", "Banners", "Flyers", "Window Decals", "Yard Signs", "Roll-up Banners"],
    blurb: "High-impact signage and posters for storefronts, events and pop-ups.",
  },
  {
    slug: "stationery",
    name: "Stationery",
    route: "/stationery",
    subCategories: ["Letterheads", "Envelopes", "Notebooks", "Diaries", "Notepads", "Folders"],
    blurb: "Custom business stationery that puts your brand on every page.",
  },
  {
    slug: "labels-stickers",
    name: "Labels & Stickers",
    route: "/labels-stickers",
    subCategories: ["Roll Labels", "Sheet Labels", "Die Cut", "Bumper Stickers", "Bottle Labels"],
    blurb: "Durable labels and stickers for products, packaging and promotion.",
  },
  {
    slug: "stamps",
    name: "Stamps",
    route: "/stamps",
    subCategories: ["Self Inking", "Rubber Stamps", "Date Stamps", "Address Stamps"],
    blurb: "Professional stamps for daily office use, signatures and approvals.",
  },
  {
    slug: "clothing-bags",
    name: "Clothing & Bags",
    route: "/clothing-bags",
    subCategories: ["Polo T-Shirts", "T-Shirts", "Dress Shirts", "Caps", "Tote Bags", "Backpacks"],
    blurb: "Branded apparel and bags for teams, events and giveaways.",
  },
  {
    slug: "photo-gifts",
    name: "Photo Gifts",
    route: "/photo-gifts",
    subCategories: ["Photo Albums", "Photo Mugs", "Canvas Prints", "Calendars", "Cushions", "Umbrellas"],
    blurb: "Personalised gifts that turn memories into keepsakes.",
  },
  {
    slug: "drinkware",
    name: "Drinkware",
    route: "/drinkware",
    subCategories: ["Ceramic Mugs", "Travel Mugs", "Water Bottles", "Tumblers"],
    blurb: "Custom drinkware that your team and customers will reach for daily.",
  },
  {
    slug: "pens",
    name: "Pens",
    route: "/pens",
    subCategories: ["Ball Pens", "Metal Pens", "Highlighters", "Pen Sets"],
    blurb: "Smooth-writing custom pens — a corporate gift classic.",
  },
];

export const NAV_TABS = [
  { label: "View All", to: "/" },
  ...CATEGORIES.map((c) => ({ label: c.name, to: c.route })),
] as const;
