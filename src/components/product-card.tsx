import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { GradientPlaceholder } from "@/components/ui/gradient-placeholder";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group block rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
    >
      <div className="relative">
        <GradientPlaceholder name={product.name} ratio="4-5" label="" />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shadow">
          {product.pricePill}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="rounded-md bg-white/95 text-primary font-medium text-sm text-center py-2 shadow-sm ring-1 ring-black/5">
            Quick View
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-foreground line-clamp-1 mb-1">
          {product.name}
        </h3>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-current" : "opacity-30"}`} />
              ))}
            </div>
            <span className="text-[11px] font-medium text-muted-foreground">({product.reviewCount})</span>
          </div>
          <p className="text-sm font-bold text-primary">From ₹{product.priceFromInr.toLocaleString("en-IN")}</p>
        </div>
      </div>
    </Link>
  );
}
