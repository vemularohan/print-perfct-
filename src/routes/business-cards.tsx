import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/categories";
import { CategoryPage } from "@/components/category-page";

const cat = CATEGORIES.find((c) => c.slug === "business-cards")!;

export const Route = createFileRoute("/business-cards")({
  head: () => ({
    meta: [
      { title: `${cat.name} — SuriyanPrints` },
      { name: "description", content: cat.blurb },
      { property: "og:title", content: `${cat.name} — SuriyanPrints` },
      { property: "og:description", content: cat.blurb },
    ],
  }),
  component: () => <CategoryPage category={cat} />,
});
