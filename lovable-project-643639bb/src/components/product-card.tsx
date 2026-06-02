import { Link } from "@tanstack/react-router";
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
          <div className="rounded-md bg-white/95 text-primary font-medium text-sm text-center py-2 shadow">
            Shop Now
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium text-foreground line-clamp-2 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          From ₹{product.priceFromInr.toLocaleString("en-IN")}
        </p>
      </div>
    </Link>
  );
}
