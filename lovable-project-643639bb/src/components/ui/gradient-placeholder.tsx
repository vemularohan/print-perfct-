import { gradientFor } from "@/lib/gradient";
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

export function GradientPlaceholder({ name, className, ratio = "4-5", label }: Props) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-xl relative",
        ratioClass[ratio],
        className,
      )}
      style={{ backgroundImage: gradientFor(name) }}
      aria-label={name}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
      <div className="absolute inset-0 flex items-end p-4">
        <span className="text-white/90 text-sm font-medium drop-shadow line-clamp-2">
          {label ?? name}
        </span>
      </div>
    </div>
  );
}
