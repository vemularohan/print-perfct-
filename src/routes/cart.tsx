import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — PrintPerfect" },
      { name: "description", content: "Review and check out your custom printing order." },
      { property: "og:title", content: "Your Cart — PrintPerfect" },
      { property: "og:description", content: "Review your cart and complete your order." },
    ],
  }),
  component: CartPage,
});

type CartLine = { slug: string; qty: number };

function CartPage() {
  const [lines, setLines] = useState<CartLine[]>([
    { slug: "standard-visiting-cards", qty: 1 },
    { slug: "photo-mugs", qty: 2 },
  ]);
  const [code, setCode] = useState("");

  const items = lines
    .map((l) => ({ line: l, product: PRODUCTS.find((p) => p.slug === l.slug)! }))
    .filter((x) => x.product);

  const subtotal = items.reduce((s, x) => s + x.product.priceFromInr * x.line.qty, 0);
  const delivery = subtotal >= 500 ? 0 : 79;
  const total = subtotal + delivery;

  const update = (slug: string, delta: number) =>
    setLines((ls) => ls.map((l) => (l.slug === slug ? { ...l, qty: Math.max(1, l.qty + delta) } : l)));
  const remove = (slug: string) => setLines((ls) => ls.filter((l) => l.slug !== slug));

  if (items.length === 0) {
    return (
      <div className="container-page py-24 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h1 className="mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Browse our most popular products to get started.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-6 py-3 font-semibold hover:bg-primary/90">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <h1 className="mb-8">Your cart</h1>
      <div className="grid lg:grid-cols-[1fr_360px] gap-8">
        <div className="space-y-4">
          {items.map(({ line, product }) => (
            <div key={product.slug} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
              <div className="w-24 shrink-0 aspect-square rounded-lg overflow-hidden bg-muted border border-border">
                <img
                  src={`/images/${product.slug}.png`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link to="/product/$slug" params={{ slug: product.slug }} className="font-medium hover:text-primary">
                  {product.name}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">{product.subCategory}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="inline-flex items-center border border-border rounded-md">
                    <button onClick={() => update(product.slug, -1)} className="p-2 hover:bg-muted" aria-label="Decrease">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="px-3 text-sm w-10 text-center">{line.qty}</span>
                    <button onClick={() => update(product.slug, 1)} className="p-2 hover:bg-muted" aria-label="Increase">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">₹{(product.priceFromInr * line.qty).toLocaleString("en-IN")}</span>
                    <button onClick={() => remove(product.slug)} className="text-muted-foreground hover:text-destructive" aria-label="Remove">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:sticky lg:top-32 h-fit rounded-xl border border-border p-6 bg-card shadow-card">
          <h2 className="text-xl mb-4">Order Summary</h2>
          <div className="space-y-2.5 text-sm border-b border-border pb-4">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-medium">₹{subtotal.toLocaleString("en-IN")}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span className="font-medium">{delivery === 0 ? "Free" : `₹${delivery}`}</span></div>
          </div>
          <div className="py-4">
            <label className="text-sm font-medium mb-2 block">Discount code</label>
            <div className="flex gap-2">
              <input value={code} onChange={(e) => setCode(e.target.value)} className="flex-1 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="SAVE5" />
              <button className="px-4 py-2 rounded-md bg-muted text-sm font-medium hover:bg-muted/70">Apply</button>
            </div>
          </div>
          <div className="flex justify-between text-lg font-bold pt-4 border-t border-border">
            <span>Total</span><span>₹{total.toLocaleString("en-IN")}</span>
          </div>
          <button className="mt-5 w-full bg-primary text-primary-foreground rounded-md py-3.5 font-semibold hover:bg-primary/90 transition">
            Proceed to Checkout
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3">Free shipping on orders above ₹500</p>
        </aside>
      </div>
    </div>
  );
}
