import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Trash2, Minus, Plus, ShoppingBag, CheckCircle2, MessageCircle } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { getLinePricing, loadCart, saveCart, saveOrder, type CartLine } from "@/lib/cart";
import { whatsappUrl } from "@/data/site";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [code, setCode] = useState("");
  const [placedOrderId, setPlacedOrderId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => setLines(loadCart()), []);

  const persist = (next: CartLine[]) => { setLines(next); saveCart(next); };

  const items = lines.map((line) => ({ line, product: PRODUCTS.find((p) => p.slug === line.slug) })).filter((x): x is { line: CartLine; product: NonNullable<typeof x.product> } => Boolean(x.product));

  const subtotal = items.reduce((sum, item) => sum + getLinePricing(item.product, item.line).totalPrice, 0);
  const delivery = subtotal >= 500 ? 0 : 79;
  const total = subtotal + delivery;

  const update = (line: CartLine, delta: number) => { 
    const product = PRODUCTS.find((p) => p.slug === line.slug); 
    if (!product) return; 
    const base = product.qtyTiers[0] || 1; 
    const step = base >= 25 ? base : 1; 
    persist(lines.map((item) => item === line ? { ...item, qty: Math.max(base, item.qty + delta * step) } : item)); 
  };

  const remove = (line: CartLine) => persist(lines.filter((item) => item !== line));

  const checkout = () => { 
    const orderId = `SP-${Date.now().toString().slice(-6)}`; 
    const order = { id: orderId, date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }), lines, subtotal, delivery, total, status: "Processing" as const }; 
    saveOrder(order); 
    persist([]); 
    setPlacedOrderId(orderId);
  };

  if (placedOrderId) {
    return (
      <div className="container-page py-20 text-center max-w-xl mx-auto animate-in fade-in zoom-in duration-300">
        <div className="h-20 w-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 animate-pulse" />
        </div>
        <h1 className="text-3xl font-black mb-3">Order Placed Successfully!</h1>
        <p className="text-muted-foreground text-sm mb-6">
          Thank you for your order. Your Order ID is <span className="font-mono font-bold text-foreground bg-muted px-2 py-1 rounded">{placedOrderId}</span>.
        </p>
        <div className="bg-surface rounded-2xl border border-border p-6 mb-8 text-left space-y-3 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Next Steps</p>
          <p className="text-sm text-foreground">
            Since this is a custom printing platform, our production specialists will review your order requirements and prepare digital proofs.
          </p>
          <p className="text-sm text-foreground font-semibold">
            To speed up mockup approvals and delivery scheduling, please share this Order ID with our support desk on WhatsApp.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={whatsappUrl(`Hi Suriyan Prints! I just placed an order. Order ID: ${placedOrderId}. Let's coordinate on artwork and design proofs.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center gap-2 bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/20 transition-all text-base"
          >
            <MessageCircle className="h-5 w-5" /> Share Order on WhatsApp
          </a>
          <Link to="/" className="w-full inline-flex justify-center items-center gap-2 rounded-xl border border-border py-4 font-bold text-muted-foreground hover:bg-surface transition-all">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  if (!items.length) {
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
          {items.map(({ line, product }) => { 
            const pricing = getLinePricing(product, line); 
            return (
              <div key={`${product.slug}-${line.embroidery}`} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="w-24 shrink-0 aspect-square rounded-lg overflow-hidden bg-muted border border-border">
                  <img src={`/images/${product.slug}.png`} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link to="/product/$slug" params={{ slug: product.slug }} className="font-medium hover:text-primary">
                    {product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    {product.subCategory}{line.embroidery ? " · Embroidery" : ""}
                  </p>
                  {line.embroidery ? <p className="text-xs text-primary font-medium mt-1">Embroidery +₹100 × {line.qty}</p> : null}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="inline-flex items-center border border-border rounded-md">
                      <button onClick={() => update(line, -1)} className="p-2 hover:bg-muted" aria-label="Decrease"><Minus className="h-3.5 w-3.5" /></button>
                      <span className="px-3 text-sm w-10 text-center">{line.qty}</span>
                      <button onClick={() => update(line, 1)} className="p-2 hover:bg-muted" aria-label="Increase"><Plus className="h-3.5 w-3.5" /></button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="font-semibold block">₹{pricing.totalPrice.toLocaleString("en-IN")}</span>
                        {pricing.discountPercent > 0 ? (
                          <span className="text-[10px] text-success font-medium block">
                            {pricing.discountPercent}% off (₹{Math.round(pricing.unitPrice)}/u)
                          </span>
                        ) : null}
                      </div>
                      <button onClick={() => remove(line)} className="text-muted-foreground hover:text-destructive" aria-label="Remove">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ); 
          })}
        </div>
        <aside className="lg:sticky lg:top-32 h-fit rounded-xl border border-border p-6 bg-card shadow-card">
          <h2 className="text-xl mb-4">Order Summary</h2>
          <div className="space-y-2.5 text-sm border-b border-border pb-4 font-semibold">
            {items.filter(({ line }) => line.embroidery).map(({ line, product }) => (
              <div key={`${product.slug}-embroidery`} className="flex justify-between text-primary">
                <span>Embroidery ({product.name} × {line.qty})</span>
                <span>₹{(line.qty * 100).toLocaleString("en-IN")}</span>
              </div>
            ))}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium text-foreground">₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span className="font-medium text-foreground">{delivery === 0 ? "Free" : `₹${delivery}`}</span>
            </div>
          </div>
          <div className="py-4">
            <label className="text-sm font-medium mb-2 block">Discount code</label>
            <div className="flex gap-2">
              <input value={code} onChange={(e) => setCode(e.target.value)} className="flex-1 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="SAVE5" />
              <button className="px-4 py-2 rounded-md bg-muted text-sm font-medium hover:bg-muted/70">Apply</button>
            </div>
          </div>
          <div className="flex justify-between text-lg font-bold pt-4 border-t border-border">
            <span>Total</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>
          <button onClick={checkout} className="mt-5 w-full bg-primary text-primary-foreground rounded-md py-3.5 font-semibold hover:bg-primary/90 transition shadow-md">
            Proceed to Checkout
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3 font-semibold">Free shipping on orders above ₹500</p>
        </aside>
      </div>
    </div>
  );
}
