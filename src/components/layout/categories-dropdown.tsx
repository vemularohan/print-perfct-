import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/categories";

export function CategoriesDropdown({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-card shadow-card-hover rounded-b-xl border border-border p-6 z-50 ${className}`}>
      <div className="grid grid-cols-3 gap-6">
        {CATEGORIES.map((c) => (
          <div key={c.slug}>
            <Link to={c.route} className="text-sm font-semibold text-foreground hover:text-primary">
              {c.name}
            </Link>
            <p className="text-xs text-muted-foreground mt-1 mb-3">{c.blurb}</p>
            <ul className="space-y-1 text-sm">
              {c.subCategories.map((s) => (
                <li key={s}>
                  <Link to={c.route as any} search={{ sub: s } as any} className="text-muted-foreground hover:text-primary">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
