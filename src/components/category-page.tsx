import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import type { Category } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export function CategoryPage({ category }: { category: Category }) {
  const products = getProductsByCategory(category.slug);
  const location = useLocation();
  const [active, setActive] = useState<string>("View All");
  const [showFilters, setShowFilters] = useState(false);

  // React to search parameter changes
  useEffect(() => {
    try {
      const sp = new URLSearchParams(location.search);
      const sub = sp.get("sub");
      if (sub && category.subCategories.includes(sub)) {
        setActive(sub);
      } else {
        setActive("View All");
      }
    } catch {}
  }, [location.search, category.subCategories]);

  const filtered = active === "View All" ? products : products.filter((p) => p.subCategory === active);

  return (
    <div>
      <section className="bg-surface border-b border-border">
        <div className="container-page py-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{category.name}</span>
          </nav>
          <h1 className="mb-3">{category.name}</h1>
          <p className="text-muted-foreground max-w-3xl">{category.blurb}</p>
        </div>
      </section>

      <div className="container-page py-4 border-b border-border">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {["View All", ...category.subCategories].map((sub) => (
            <button
              key={sub}
              onClick={() => setActive(sub)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                active === sub
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      <div className="container-page py-10 grid lg:grid-cols-[240px_1fr] gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-6">
            <FilterGroup title="Finish" options={["Matte", "Glossy", "Spot UV", "Velvet", "Pearl"]} />
            <FilterGroup title="Shape" options={["Standard", "Rounded", "Square", "Circle", "Oval"]} />
            <FilterGroup title="Quantity" options={["50", "100", "250", "500", "1000+"]} />
            <div>
              <h3 className="text-sm font-semibold mb-3">Price Range</h3>
              <input type="range" min={100} max={5000} className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>₹100</span><span>₹5,000</span>
              </div>
            </div>
            <FilterGroup title="Sort by" options={["Most Popular", "Price: Low to High", "Price: High to Low"]} isSelect />
          </div>
        </aside>

        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/50">
            <h2 className="text-xl font-bold tracking-tight">{active} <span className="text-muted-foreground font-normal ml-2">({filtered.length})</span></h2>
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden btn-secondary !px-4 !py-2 inline-flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.03}>
                <ProductCard product={p} />
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">No products in this filter.</div>
          ) : (
            <div className="mt-10 flex items-center justify-center gap-1">
              {["Previous", "1", "2", "3", "Next"].map((p, i) => (
                <button
                  key={p}
                  className={`px-3 py-1.5 text-sm rounded-md border ${i === 1 ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="bg-surface border-t border-border">
        <div className="container-page py-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="about">
              <AccordionTrigger className="text-base font-semibold">About {category.name}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {category.blurb} Choose from a wide range of styles, finishes and quantities to match your brand and budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="why">
              <AccordionTrigger className="text-base font-semibold">Why choose SuriyanPrints?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We combine premium materials, sharp colour reproduction and dependable turnaround — backed by a satisfaction guarantee.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq">
              <AccordionTrigger className="text-base font-semibold">Frequently asked questions</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Find answers about turnaround time, file formats, bulk pricing and shipping in our Help Centre.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {showFilters ? (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setShowFilters(false)}>
          <div className="absolute inset-0 bg-foreground/50" />
          <div
            className="absolute inset-x-0 bottom-0 bg-background rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="space-y-6">
              <FilterGroup title="Finish" options={["Matte", "Glossy", "Spot UV"]} />
              <FilterGroup title="Quantity" options={["50", "100", "250", "500", "1000+"]} />
            </div>
            <button
              onClick={() => setShowFilters(false)}
              className="mt-6 w-full bg-primary text-primary-foreground rounded-md py-3 font-semibold"
            >
              Apply
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function FilterGroup({ title, options, isSelect }: { title: string; options: string[]; isSelect?: boolean }) {
  if (isSelect) {
    return (
      <div>
        <h3 className="text-sm font-bold text-foreground mb-3">{title}</h3>
        <select className="w-full text-sm rounded-lg border border-border px-3 py-2.5 bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-sm font-bold text-foreground mb-3">{title}</h3>
      <div className="space-y-2.5">
        {options.map((o) => (
          <label key={o} className="flex items-center gap-3 text-sm cursor-pointer group">
            <input type="checkbox" className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">{o}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
