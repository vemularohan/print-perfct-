import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Heart, Lock, RotateCcw, ShieldCheck, Truck, ChevronRight, Minus, Plus } from "lucide-react";
import { getProduct, getRelated, type Product } from "@/data/products";
import { CONST_REVIEWS } from "@/data/products-with-reviews";
import { ProductCard } from "@/components/product-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { CATEGORIES } from "@/data/categories";
import { EMBROIDERY_PRICE_INR, getLinePricing, supportsEmbroidery, addCartLine } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ data }) => {
    const p = (data as { product: Product }).product;
    const ld = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      image: `/images/${p.slug}.png`,
      description: p.description,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: p.priceFromInr,
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
      },
    };
    return {
      meta: [
        { title: `${p.name} — SuriyanPrints` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — SuriyanPrints` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: "/assets/og-image.svg" },
        { "script:ld+json": ld },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1>Product not found</h1>
      <Link to="/" className="text-primary mt-4 inline-block">Back home</Link>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const cat = CATEGORIES.find((c) => c.slug === product.categorySlug);
  const related = getRelated(product.slug);
  const [qty, setQty] = useState(product.qtyTiers[1] ?? product.qtyTiers[0]);
  const [finish, setFinish] = useState(product.finishes[0]);
  const [embroidery, setEmbroidery] = useState(false);
  const navigate = useNavigate();

  // Sports Jerseys specific configuration states
  const isJersey = product.categorySlug === "sports-jerseys";
  const [jerseyType, setJerseyType] = useState("Cricket");
  const [fit, setFit] = useState("Regular");
  const [fabric, setFabric] = useState("Dry-Fit");
  const [sleeve, setSleeve] = useState("Half Sleeve");
  const [neck, setNeck] = useState("Round Neck");
  const [size, setSize] = useState("M");
  const [playerName, setPlayerName] = useState("");
  const [playerNumber, setPlayerNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [hasTeamLogo, setHasTeamLogo] = useState(false);
  const [hasSponsorLogo, setHasSponsorLogo] = useState(false);
  
  const pricing = getLinePricing(product, { slug: product.slug, qty, embroidery });
  const original = pricing.originalPrice + pricing.embroideryTotal;

  const images = [
    { src: `/images/${product.slug}.png`, label: "Main View", className: "object-cover" },
    { src: `/images/${product.slug}.png`, label: "Close Up", className: "object-cover scale-150 origin-center" },
    { src: `/images/${product.slug}.png`, label: "Fit View", className: "object-contain bg-neutral-50 p-6" },
    { src: `/images/${product.slug}.png`, label: "Angle View", className: "object-cover scale-125 origin-top-left" },
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <div className="container-page pt-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          {cat ? (
            <>
              <Link to={cat.route} className="hover:text-primary">{cat.name}</Link>
              <ChevronRight className="h-3.5 w-3.5" />
            </>
          ) : null}
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="container-page py-10 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="relative aspect-square bg-muted rounded-xl overflow-hidden border border-border shadow-sm">
            <img
              src={selectedImage.src}
              alt={product.name}
              className={`w-full h-full transition-all duration-500 ${selectedImage.className}`}
            />
          </div>
          <div className="grid grid-cols-4 gap-3 mt-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`relative aspect-square rounded-lg overflow-hidden border bg-muted transition-all ${
                  selectedImage.label === img.label ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={img.src}
                  alt={`${product.name} - ${img.label}`}
                  className={`w-full h-full ${img.className}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="mb-3">{product.name}</h1>
          <div className="flex items-center gap-2 text-sm mb-5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className={`h-4 w-4 ${s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
              ))}
            </div>
            <span className="font-medium">{product.rating}</span>
            <a href="#reviews" className="text-primary hover:underline">({product.reviewCount.toLocaleString("en-IN")} reviews)</a>
          </div>

          <div className="flex flex-col mb-8">
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold text-primary tracking-tight">₹{pricing.totalPrice.toLocaleString("en-IN")}</span>
              <div className="flex flex-col mb-1">
                <span className="text-sm text-muted-foreground line-through">₹{original.toLocaleString("en-IN")}</span>
                <span className="text-[12px] font-bold text-success uppercase tracking-wider">{pricing.totalPrice < original ? `Save ${Math.round((1 - pricing.totalPrice / original) * 100)}%` : "Custom price"}</span>
              </div>
            </div>
            {pricing.discountPercent > 0 && (
              <div className="text-sm text-success font-medium mt-1">
                Includes {pricing.discountPercent}% bulk discount (₹{Math.round(pricing.unitPrice)} / unit){embroidery ? " + ₹100 embroidery / unit" : ""}
              </div>
            )}
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Quantity</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center border border-border rounded-md bg-background shadow-sm">
                  <button 
                    onClick={() => setQty(Math.max(product.qtyTiers[0] || 1, qty - (product.qtyTiers[0] >= 25 ? product.qtyTiers[0] : 1)))} 
                    className="p-2.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" 
                    aria-label="Decrease"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    value={qty}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val)) setQty(Math.max(product.qtyTiers[0] || 1, val));
                    }}
                    className="w-16 text-center text-sm font-semibold focus:outline-none bg-transparent"
                  />
                  <button 
                    onClick={() => setQty(qty + (product.qtyTiers[0] >= 25 ? product.qtyTiers[0] : 1))} 
                    className="p-2.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" 
                    aria-label="Increase"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <span className="text-xs text-muted-foreground">
                  (Min quantity: {product.qtyTiers[0]})
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {product.qtyTiers.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setQty(q)}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-medium border transition-all ${
                      qty === q 
                        ? "bg-primary text-primary-foreground border-primary shadow-sm" 
                        : "border-border hover:border-primary/60 hover:bg-muted/50"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {isJersey ? (
            <div className="space-y-6 mb-8 border-t border-b border-border py-6">
              <div>
                <p className="text-sm font-bold text-foreground mb-2">Jersey Type</p>
                <div className="flex flex-wrap gap-2">
                  {["Cricket", "Football", "Basketball", "Volleyball", "Kabaddi", "Badminton", "Marathon", "Cycling"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setJerseyType(t)}
                      className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors ${
                        jerseyType === t ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/50 bg-card"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-bold text-foreground mb-2">Fit Option</p>
                  <div className="flex gap-2">
                    {["Regular", "Athletic"].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFit(f)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${
                          fit === f ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/50 bg-card"
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-foreground mb-2">Neck Style</p>
                  <div className="flex gap-2">
                    {["Round Neck", "V-Neck", "Polo Collar"].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setNeck(n)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${
                          neck === n ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/50 bg-card"
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-bold text-foreground mb-2">Fabric Option</p>
                  <select
                    value={fabric}
                    onChange={(e) => setFabric(e.target.value)}
                    className="w-full rounded-xl border border-input bg-card px-3 py-2 text-xs font-bold focus:outline-primary"
                  >
                    {["Micro Polyester", "Dry-Fit", "Premium Dry-Fit"].map((fb) => (
                      <option key={fb} value={fb}>{fb}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="text-sm font-bold text-foreground mb-2">Sleeve Option</p>
                  <select
                    value={sleeve}
                    onChange={(e) => setSleeve(e.target.value)}
                    className="w-full rounded-xl border border-input bg-card px-3 py-2 text-xs font-bold focus:outline-primary"
                  >
                    {["Half Sleeve", "Full Sleeve", "Sleeveless"].map((sl) => (
                      <option key={sl} value={sl}>{sl}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-foreground mb-2">Size Selection</p>
                <div className="flex flex-wrap gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSize(sz)}
                      className={`h-10 w-10 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center ${
                        size === sz ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/50 bg-card"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3.5 border-t border-border pt-6">
                <p className="text-sm font-bold text-foreground">Customizations</p>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Player Name
                    <input
                      type="text"
                      placeholder="E.g. ARJUN"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-input px-3 py-2 text-xs font-semibold focus:outline-primary text-foreground"
                    />
                  </label>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Jersey Number
                    <input
                      type="text"
                      placeholder="E.g. 07"
                      value={playerNumber}
                      onChange={(e) => setPlayerNumber(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-input px-3 py-2 text-xs font-semibold focus:outline-primary text-foreground"
                    />
                  </label>
                </div>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Team Name
                    <input
                      type="text"
                      placeholder="E.g. SPARTANS"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-input px-3 py-2 text-xs font-semibold focus:outline-primary text-foreground"
                    />
                  </label>
                  <div className="flex flex-col gap-2 pt-2 justify-center">
                    <label className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase cursor-pointer select-none">
                      <input type="checkbox" checked={hasTeamLogo} onChange={(e) => setHasTeamLogo(e.target.checked)} className="h-4 w-4 accent-[var(--primary)]" />
                      Add Team Logo
                    </label>
                    <label className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase cursor-pointer select-none">
                      <input type="checkbox" checked={hasSponsorLogo} onChange={(e) => setHasSponsorLogo(e.target.checked)} className="h-4 w-4 accent-[var(--primary)]" />
                      Add Sponsor Logo
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Finish</p>
              <div className="flex flex-wrap gap-2">
                {product.finishes.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFinish(f)}
                    className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                      finish === f ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          )}

          {supportsEmbroidery(product) ? (
            <label className="mb-6 flex cursor-pointer items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/50">
              <span className="flex items-center gap-3">
                <input type="checkbox" checked={embroidery} onChange={(e) => setEmbroidery(e.target.checked)} className="h-4 w-4 accent-[var(--primary)]" />
                <span>
                  <span className="block text-sm font-semibold">Embroidery (+₹{EMBROIDERY_PRICE_INR})</span>
                  <span className="block text-xs text-muted-foreground">Premium stitched logo finish per T-shirt / Jersey</span>
                </span>
              </span>
              {embroidery ? <span className="text-sm font-semibold text-primary">+₹{pricing.embroideryTotal.toLocaleString("en-IN")}</span> : null}
            </label>
          ) : null}

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-semibold">
            <Truck className="h-4 w-4 text-primary" />
            Estimated delivery: <span className="text-foreground font-semibold">5–7 business days</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={() => { 
                addCartLine({ 
                  slug: product.slug, 
                  qty, 
                  embroidery: supportsEmbroidery(product) && embroidery 
                }); 
                navigate({ to: "/cart" }); 
              }} 
              className="btn-primary flex-1 h-14 text-lg font-bold rounded-xl"
            >
              Customise & Buy
            </button>
            <button className="btn-secondary flex-1 h-14 text-lg inline-flex items-center justify-center gap-2 rounded-xl font-bold">
              <Heart className="h-5 w-5" /> Save to Cart
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
            {[
              { Icon: Lock, label: "Secure Checkout" },
              { Icon: RotateCcw, label: "Easy Reorder" },
              { Icon: ShieldCheck, label: "Quality Guarantee" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" /> {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="container-page py-10 border-t border-border">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-6 max-w-3xl">
            <p className="text-muted-foreground mb-4">{product.description}</p>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="text-success mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specs" className="pt-6 max-w-2xl">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label} className="border-b border-border">
                    <td className="py-3 font-medium w-1/3">{s.label}</td>
                    <td className="py-3 text-muted-foreground">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>
          <TabsContent value="reviews" id="reviews" className="pt-6">
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <div className="text-4xl font-bold">{product.rating}</div>
                <div className="flex my-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`h-4 w-4 ${s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{product.reviewCount.toLocaleString("en-IN")} reviews</p>
                <div className="mt-4 space-y-1.5">
                  {[5, 4, 3, 2, 1].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-xs">
                      <span className="w-3">{s}</span>
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${s === 5 ? 70 : s === 4 ? 20 : 5}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                {CONST_REVIEWS.map((r, i) => (
                  <div key={i} className="border-b border-border pb-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{r.name}</span>
                      <span className="text-xs text-muted-foreground">{r.date}</span>
                    </div>
                    <div className="flex mb-1.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className={`h-3 w-3 ${s <= r.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faqs" className="pt-6 max-w-3xl">
            <Accordion type="single" collapsible>
              {product.faqs.map((f, i) => (
                <AccordionItem key={i} value={`f${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </section>

      {related.length > 0 ? (
        <section className="container-page py-12 border-t border-border">
          <h2 className="mb-6 border-l-4 border-primary pl-4">You may also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
