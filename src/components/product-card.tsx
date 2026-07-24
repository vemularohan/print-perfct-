import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type Props = {
  product: Product;
  size?: "default" | "large";
};

export function ProductCard({ product, size = "default" }: Props) {
  const isLarge = size === "large";

  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className={cn(
        "group block rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-border/60",
        isLarge ? "hover:-translate-y-1.5" : "hover:-translate-y-0.5 rounded-xl",
      )}
    >
      <div className={cn("relative bg-muted overflow-hidden", isLarge ? "aspect-[4/5] md:aspect-[3/4]" : "aspect-[4/5]")}>
        <img
          src={`/images/${product.slug}.png`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span
          className={cn(
            "absolute top-3 left-3 inline-flex items-center rounded-full bg-primary text-primary-foreground font-semibold shadow",
            isLarge ? "px-4 py-1.5 text-sm" : "px-3 py-1 text-xs",
          )}
        >
          {product.pricePill}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="rounded-lg bg-white/95 text-primary font-medium text-sm text-center py-2.5 shadow-sm ring-1 ring-black/5">
            Quick View
          </div>
        </div>
      </div>
      <div className={cn(isLarge ? "p-5" : "p-4")}>
        <h3 className={cn("font-semibold text-foreground line-clamp-1 mb-1", isLarge ? "text-lg" : "text-base")}>
          {product.name}
        </h3>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(isLarge ? "h-4 w-4" : "h-3 w-3", i < Math.floor(product.rating) ? "fill-current" : "opacity-30")}
                />
              ))}
            </div>
            <span className={cn("font-medium text-muted-foreground", isLarge ? "text-xs" : "text-[11px]")}>
              ({product.reviewCount.toLocaleString("en-IN")})
            </span>
          </div>
          <p className={cn("font-bold text-primary", isLarge ? "text-base" : "text-sm")}>
            From ₹{product.priceFromInr.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </Link>
  );
}
