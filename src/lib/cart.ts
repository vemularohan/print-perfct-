import { getProductPricing, type Product } from "@/data/products";

export const EMBROIDERY_PRICE_INR = 100;
const CART_KEY = "suriyanprints_cart";
const ORDERS_KEY = "suriyanprints_orders";

export type CartLine = { slug: string; qty: number; embroidery?: boolean };
export type Order = { id: string; date: string; lines: CartLine[]; subtotal: number; delivery: number; total: number; status: "Processing" };

export function supportsEmbroidery(product: Product) {
  return product.slug === "custom-tshirts" || product.slug === "polo-tshirts" || product.categorySlug === "sports-jerseys";
}

export function getLinePricing(product: Product, line: CartLine) {
  const base = getProductPricing(product, line.qty);
  const embroideryTotal = line.embroidery && supportsEmbroidery(product) ? EMBROIDERY_PRICE_INR * line.qty : 0;
  return { ...base, embroideryTotal, totalPrice: base.totalPrice + embroideryTotal };
}

export function loadCart(): CartLine[] {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]") as CartLine[]; } catch { return []; }
}

export function saveCart(lines: CartLine[]) { localStorage.setItem(CART_KEY, JSON.stringify(lines)); }

export function addCartLine(line: CartLine) {
  const lines = loadCart();
  const existing = lines.find((item) => item.slug === line.slug && Boolean(item.embroidery) === Boolean(line.embroidery));
  const next = existing ? lines.map((item) => item === existing ? { ...item, qty: item.qty + line.qty } : item) : [...lines, line];
  saveCart(next);
  return next;
}

export function saveOrder(order: Order) {
  try {
    const orders = JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]") as Order[];
    localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...orders]));
  } catch { localStorage.setItem(ORDERS_KEY, JSON.stringify([order])); }
}

export function loadOrders(): Order[] {
  try { return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]") as Order[]; } catch { return []; }
}
