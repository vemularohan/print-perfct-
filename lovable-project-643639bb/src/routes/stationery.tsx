import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/categories";
import { CategoryPage } from "@/components/category-page";

const cat = CATEGORIES.find((c) => c.slug === "stationery")!;

export const Route = createFileRoute("/stationery")({
  head: () => ({
    meta: [
      { title: `${cat.name} — VistaPrint India` },
      { name: "description", content: cat.blurb },
      { property: "og:title", content: `${cat.name} — VistaPrint India` },
      { property: "og:description", content: cat.blurb },
    ],
  }),
  component: () => <CategoryPage category={cat} />,
});
