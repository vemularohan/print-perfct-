import { Link } from "@tanstack/react-router";
import { GradientPlaceholder } from "@/components/ui/gradient-placeholder";

type Props = {
  name: string;
  to: string;
};

const CATEGORY_IMAGES: Record<string, string> = {
  "business-cards": "/images/standard-visiting-cards.png",
  "signs-posters": "/images/banners.png",
  "stationery": "/images/notebooks.png",
  "labels-stickers": "/images/bumper-stickers.png",
  "stamps": "/images/self-inking-stamps.png",
  "clothing-bags": "/images/custom-tshirts.png",
  "photo-gifts": "/images/photo-albums.png",
  "drinkware": "/images/ceramic-mugs.png",
  "pens": "/images/metal-pens.png",
};

export function CategoryCard({ name, to }: Props) {
  const slug = to.replace(/^\//, "");
  const imgUrl = CATEGORY_IMAGES[slug];

  return (
    <Link
      to={to}
      className="group block rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 bg-card"
    >
      {imgUrl ? (
        <div className="relative aspect-[4/5] bg-muted overflow-hidden">
          <img
            src={imgUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      ) : (
        <GradientPlaceholder name={name} ratio="4-5" label="" />
      )}
      <div className="p-3 text-center">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
      </div>
    </Link>
  );
}
