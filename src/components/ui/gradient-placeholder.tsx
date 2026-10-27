import { cn } from "@/lib/utils";

type Props = {
  name: string;
  className?: string;
  ratio?: "square" | "4-5" | "16-9" | "card";
  label?: string;
};

const ratioClass = {
  square: "aspect-square",
  "4-5": "aspect-[4/5]",
  "16-9": "aspect-[16/9]",
  card: "aspect-[5/3]",
} as const;

const REAL_IMAGES: Record<string, string> = {
  // Account
  "Bakery cards": "/images/standard-visiting-cards.png",
  "Summer banner": "/images/banners.png",
  "Team polo": "/images/polo-tshirts.png",
  
  // Design Services
  "Portfolio 1": "/images/standard-visiting-cards.png",
  "Portfolio 2": "/images/banners.png",
  "Portfolio 3": "/images/polo-tshirts.png",
  "Portfolio 4": "/images/water-bottles.png",
  "Portfolio 5": "/images/notebooks.png",
  "Portfolio 6": "/images/welcome-kit.png",

  // Logo Maker
  "logo-Modern Mark": "/images/standard-visiting-cards.png",
  "logo-Wordmark": "/images/banners.png",
  "logo-Monogram": "/images/polo-tshirts.png",
  "logo-Emblem": "/images/water-bottles.png",
  "logo-Mascot": "/images/notebooks.png",
  "logo-Abstract": "/images/welcome-kit.png",
  "logo-Lettermark": "/images/metal-pens.png",
  "logo-Combination": "/images/self-inking-stamps.png",
  "logo-Geometric": "/images/tote-bags.png",
};

const DEFAULT_IMAGES = [
  "/images/custom-tshirts.png",
  "/images/polo-tshirts.png",
  "/images/banners.png",
  "/images/water-bottles.png",
  "/images/metal-pens.png",
  "/images/self-inking-stamps.png",
  "/images/standard-visiting-cards.png",
  "/images/welcome-kit.png",
  "/images/notebooks.png",
  "/images/tote-bags.png",
  "/images/backpacks.png",
  "/images/ceramic-mugs.png",
];

const getDeterministicImage = (name: string) => {
  const cleanName = name.trim();
  if (REAL_IMAGES[cleanName]) return REAL_IMAGES[cleanName];
  let hash = 0;
  for (let i = 0; i < cleanName.length; i++) {
    hash = cleanName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % DEFAULT_IMAGES.length;
  return DEFAULT_IMAGES[index];
};

export function GradientPlaceholder({ name, className, ratio = "4-5", label }: Props) {
  const imgUrl = getDeterministicImage(name);
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-xl relative",
        ratioClass[ratio],
        className,
      )}
      aria-label={name}
    >
      <img
        src={imgUrl}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex items-end p-4">
        <span className="text-white text-sm font-extrabold tracking-tight drop-shadow-md line-clamp-2">
          {label || name}
        </span>
      </div>
    </div>
  );
}
