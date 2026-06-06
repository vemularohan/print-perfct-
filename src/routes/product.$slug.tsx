import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Heart, Lock, RotateCcw, ShieldCheck, Truck, ChevronRight } from "lucide-react";
import { getProduct, getRelated, type Product } from "@/data/products";
import { CONST_REVIEWS } from "@/data/products-with-reviews";
import { GradientPlaceholder } from "@/components/ui/gradient-placeholder";
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
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    const ld = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      image: ["/assets/placeholder-product.svg"],
      description: p.description,
      sku: p.slug,
      brand: { "@type": "Organization", name: "PrintPerfect" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: p.rating,
        reviewCount: p.reviewCount,
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: p.priceFromInr.toString(),
        availability: "https://schema.org/InStock",
        url: `/product/${p.slug}`,
      },
    };

    return {
      meta: [
        { title: `${p.name} — PrintPerfect` },
        { name: "description", content: p.description },
        { property: "og:title", content: p.name },
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
  const original = Math.round(product.priceFromInr * 1.4);

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
          <GradientPlaceholder name={product.name} ratio="square" label="" />
          <div className="grid grid-cols-4 gap-3 mt-3">
            {[0, 1, 2, 3].map((i) => (
              <GradientPlaceholder key={i} name={`${product.name}-${i}`} ratio="square" label="" />
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

          <div className="flex items-end gap-3 mb-8">
            <span className="text-4xl font-bold text-primary tracking-tight">₹{product.priceFromInr.toLocaleString("en-IN")}</span>
            <div className="flex flex-col mb-1">
              <span className="text-sm text-muted-foreground line-through">₹{original.toLocaleString("en-IN")}</span>
              <span className="text-[12px] font-bold text-success uppercase tracking-wider">
                Save {Math.round((1 - product.priceFromInr / original) * 100)}%
              </span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Quantity</p>
            <div className="flex flex-wrap gap-2">
              {product.qtyTiers.map((q) => (
                <button
                  key={q}
                  onClick={() => setQty(q)}
                  className={`px-4 py-2 rounded-md text-sm border transition-colors ${
                    qty === q ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"
                  }`}
                >
                  {q}
                </button>
              ))}
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
