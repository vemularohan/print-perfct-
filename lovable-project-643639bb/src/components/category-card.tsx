import { Link } from "@tanstack/react-router";
import { GradientPlaceholder } from "@/components/ui/gradient-placeholder";

type Props = {
  name: string;
  to: string;
};

export function CategoryCard({ name, to }: Props) {
  return (
    <Link
      to={to}
      className="group block rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 bg-card"
    >
      <GradientPlaceholder name={name} ratio="4-5" label="" />
      <div className="p-3 text-center">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
      </div>
    </Link>
  );
}
