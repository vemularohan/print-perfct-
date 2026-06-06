import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Heart, User, ShoppingCart, FolderOpen, Phone, X, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { CATEGORIES, NAV_TABS } from "@/data/categories";
import { cn } from "@/lib/utils";

export function Header() {
  const [promoOpen, setPromoOpen] = useState(true);
  const [openTab, setOpenTab] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpenTab(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenTab(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-background">
      {promoOpen && (
        <div className="bg-primary text-primary-foreground text-xs">
          <div className="container-page flex items-center justify-between py-2 gap-4">
            <p className="truncate">
              <span className="font-semibold">Buy More, Save More!</span> Flat 5% OFF on Orders ₹10,000+ &nbsp;|&nbsp; Code:{" "}
              <span className="font-mono font-semibold">SAVE5</span>
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <Link to="/help-centre" className="hidden md:inline-flex items-center gap-1.5 hover:underline">
                <Phone className="h-3.5 w-3.5" /> 02522-669393
              </Link>
              <button type="button" onClick={() => setPromoOpen(false)} aria-label="Dismiss promo" className="opacity-80 hover:opacity-100">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="border-b border-border bg-background shadow-sm">
        <div className="container-page flex items-center gap-4 py-4">
          <button type="button" className="lg:hidden p-2 -ml-2" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>

          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="relative h-8 w-8">
              <span className="absolute inset-0 rounded-md bg-primary rotate-6" />
              <span className="absolute inset-0 rounded-md bg-secondary -rotate-6 opacity-80" />
              <span className="absolute inset-1.5 rounded-sm bg-background" />
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">PrintPerfect</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-3xl mx-8 items-center">
            <div className="flex-1 max-w-2xl">
              <div className="flex w-full rounded-full overflow-hidden border border-border focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all bg-surface">
                <input
                  type="text"
                  placeholder="Search for visiting cards, t-shirts, gifts..."
                  className="flex-1 px-5 py-2.5 text-sm bg-transparent focus:outline-none"
                />
                <button className="bg-primary text-primary-foreground px-6 inline-flex items-center justify-center hover:bg-primary/90 transition-colors" aria-label="Search">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-1 ml-auto">
            <Link to="/account" className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-muted text-sm">
              <FolderOpen className="h-5 w-5" /> <span className="hidden xl:inline">Projects</span>
            </Link>
            <Link to="/account" className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-muted text-sm">
              <Heart className="h-5 w-5" /> <span className="hidden xl:inline">Favourites</span>
            </Link>
            <Link to="/login" className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-muted text-sm">
              <User className="h-5 w-5" /> <span className="hidden xl:inline">Account</span>
            </Link>
            <Link to="/cart" className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-muted text-sm relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden xl:inline">Cart</span>
              <span className="ml-1 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs h-5 min-w-5 px-1.5">0</span>
            </Link>
          </nav>
        </div>

        <div ref={wrapRef} className="relative border-t border-border hidden lg:block overflow-visible">
          <div className="container-page overflow-visible">
            <div className="flex items-center justify-between overflow-visible">
              {NAV_TABS.map((tab, idx) => {
                const category = CATEGORIES.find((c) => c.route === tab.to);
                const isOpen = openTab === tab.label;
                // Move dropdown to the right if it's near the end of the list
                const isNearEnd = idx > NAV_TABS.length - 3;
                return (
                  <div
                    key={tab.label}
                    className="relative"
                    onMouseEnter={() => category && setOpenTab(tab.label)}
                    onFocus={() => category && setOpenTab(tab.label)}
                    onMouseLeave={() => setOpenTab(null)}
                  >
                    <div className="relative inline-flex items-center">
                      <Link
                        to={tab.to}
                        activeProps={{ className: "text-primary font-semibold" }}
                        activeOptions={{ exact: tab.to === "/" }}
                        className="inline-flex items-center gap-1 whitespace-nowrap px-2 xl:px-3 text-[13px] xl:text-[14px] py-4 font-medium text-foreground hover:text-primary transition-colors focus:outline-none"
                      >
                        {tab.label}
                      </Link>
                      {tab.label === "Clothing & Bags" && (
                        <span className="absolute -top-1 right-0 bg-destructive text-white text-[7px] font-bold px-1 py-0.5 rounded-sm animate-pulse pointer-events-none shadow-sm">HOT</span>
                      )}
                      {category ? (
                        <button
                          type="button"
                          aria-expanded={openTab === tab.label}
                          aria-haspopup="menu"
                          onClick={() => setOpenTab((v) => (v === tab.label ? null : tab.label))}
                          className="p-1 -ml-1.5 rounded-md hover:bg-muted hidden lg:inline-flex opacity-40 hover:opacity-100 transition-opacity"
                        >
                          <ChevronDown className="h-3 w-3" />
                        </button>
                      ) : null}
                    </div>
                    {category && isOpen ? (
                      <div
                        onMouseEnter={() => setOpenTab(tab.label)}
                        onMouseLeave={() => setOpenTab(null)}
                        role="menu"
                        aria-label={`${category.name} menu`}
                        className={cn(
                          "absolute top-full mt-0 w-[450px] bg-white shadow-2xl rounded-b-xl border-x border-b border-border p-6 z-[100] animate-in fade-in slide-in-from-top-1 duration-200",
                          isNearEnd ? "right-0" : "left-1/2 -translate-x-1/2"
                        )}
                      >
                        <div className="flex gap-8">
                          <div className="flex-1">
                            <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Categories</h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                              {category.subCategories.map((sub) => (
                                <Link
                                  key={sub}
                                  to={category.route as any}
                                  search={{ sub } as any}
                                  onClick={() => setOpenTab(null)}
                                  className="text-sm text-foreground hover:text-primary hover:translate-x-1 transition-all py-1.5 flex items-center gap-2 group/item"
                                >
                                  <span className="h-1 w-1 rounded-full bg-border group-hover/item:bg-primary transition-colors" />
                                  {sub}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="w-40 shrink-0 border-l border-border pl-8">
                             <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Featured</h4>
                             <Link to={category.route} className="block group/feat">
                                <div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                                  <span className="text-2xl opacity-20 group-hover/feat:scale-110 transition-transform">✨</span>
                                </div>
                                <p className="text-xs font-semibold group-hover:text-primary transition-colors">Best Sellers</p>
                             </Link>
                          </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                          <Link to={category.route} onClick={() => setOpenTab(null)} className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                            Shop All {category.name} <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", mobileOpen ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          className={cn("absolute inset-0 bg-foreground/50 transition-opacity", mobileOpen ? "opacity-100" : "opacity-0")}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-background shadow-xl overflow-y-auto transition-transform",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-bold text-primary text-lg">Menu</span>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="p-2">
            {NAV_TABS.map((tab) => {
              const category = CATEGORIES.find((c) => c.route === tab.to);
              return (
                <div key={tab.label} className="border-b border-border">
                  <Link
                    to={tab.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-sm font-medium hover:bg-muted"
                  >
                    {tab.label}
                  </Link>
                  {category ? (
                    <div className="pl-4 pb-2">
                      {category.subCategories.map((s) => (
                        <Link key={s} to={category.route as any} search={{ sub: s } as any} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                          {s}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div className="grid grid-cols-2 gap-2 p-3">
            <Link to="/login" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md bg-muted text-center text-sm">Account</Link>
            <Link to="/cart" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md bg-primary text-primary-foreground text-center text-sm">Cart</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
