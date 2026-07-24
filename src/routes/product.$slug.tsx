import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Heart, Lock, RotateCcw, ShieldCheck, Truck, ChevronRight, Minus, Plus } from "lucide-react";
import { getProduct, getRelated, type Product, getProductPricing } from "@/data/products";
import { CONST_REVIEWS } from "@/data/products-with-reviews";
import { ProductCard } from "@/components/product-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { CATEGORIES } from "@/data/categories";

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
  
  const pricing = getProductPricing(product, qty);
  const original = pricing.originalPrice;

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
                <span className="text-[12px] font-bold text-success uppercase tracking-wider">
                  Save {Math.round((1 - pricing.totalPrice / original) * 100)}%
                </span>
              </div>
            </div>
            {pricing.discountPercent > 0 && (
              <div className="text-sm text-success font-medium mt-1">
                Includes {pricing.discountPercent}% bulk discount (₹{Math.round(pricing.unitPrice)} / unit)
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

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Truck className="h-4 w-4 text-primary" />
            Estimated delivery: <span className="text-foreground font-medium">5–7 business days</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="btn-primary flex-1 h-14 text-lg">
              Customise & Buy
            </button>
            <button className="btn-secondary flex-1 h-14 text-lg inline-flex items-center justify-center gap-2">
              <Heart className="h-5 w-5" /> Favourite
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
