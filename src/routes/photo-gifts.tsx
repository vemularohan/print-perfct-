import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/categories";
import { CategoryPage } from "@/components/category-page";

const cat = CATEGORIES.find((c) => c.slug === "photo-gifts")!;

export const Route = createFileRoute("/photo-gifts")({
  head: () => ({
    meta: [
      { title: `${cat.name} — PrintPerfect` },
      { name: "description", content: cat.blurb },
      { property: "og:title", content: `${cat.name} — PrintPerfect` },
      { property: "og:description", content: cat.blurb },
    ],
  }),
  component: () => <CategoryPage category={cat} />,
});
