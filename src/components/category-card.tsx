import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GradientPlaceholder } from "@/components/ui/gradient-placeholder";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  to: string;
  image?: string;
  blurb?: string;
  badge?: string;
  search?: Record<string, string>;
  size?: "default" | "compact";
};

const CATEGORY_IMAGES: Record<string, string> = {
  "business-cards": "/images/standard-visiting-cards.png",
  "signs-posters": "/images/banners.png",
  stationery: "/images/notebooks.png",
  "labels-stickers": "/images/bumper-stickers.png",
  stamps: "/images/self-inking-stamps.png",
  "clothing-bags": "/images/custom-tshirts.png",
  "photo-gifts": "/images/photo-albums.png",
  drinkware: "/images/ceramic-mugs.png",
  pens: "/images/metal-pens.png",
};

export function CategoryCard({ name, to, image, blurb, badge, search, size = "default" }: Props) {
  const slug = to.replace(/^\//, "");
  const imgUrl = image ?? CATEGORY_IMAGES[slug];
  const isCompact = size === "compact";

  return (
    <Link
      to={to}
      search={search as any}
      className={cn(
        "group flex flex-col rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card border border-border/60",
        isCompact ? "rounded-xl hover:-translate-y-0.5" : "",
      )}
    >
      {imgUrl ? (
        <div className={cn("relative bg-muted overflow-hidden", isCompact ? "aspect-[4/5]" : "aspect-[5/4]")}>
          <img
            src={imgUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {badge ? (
            <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide shadow-md">
              {badge}
            </span>
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <GradientPlaceholder name={name} ratio={isCompact ? "4-5" : "5-4"} label="" />
      )}
      <div className={cn("flex flex-1 flex-col", isCompact ? "p-3 text-center" : "p-4")}>
        <span
          className={cn(
            "font-semibold text-foreground group-hover:text-primary transition-colors",
            isCompact ? "text-sm" : "text-base",
          )}
        >
          {name}
        </span>
        {blurb && !isCompact ? (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{blurb}</p>
        ) : null}
        {!isCompact ? (
          <span className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Shop now <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        ) : null}
      </div>
    </Link>
  );
}
