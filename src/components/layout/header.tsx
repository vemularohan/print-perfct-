import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Heart, User, ShoppingCart, FolderOpen, Phone, X, Menu, ChevronDown } from "lucide-react";
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
              <button onClick={() => setPromoOpen(false)} aria-label="Dismiss promo" className="opacity-80 hover:opacity-100">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="border-b border-border bg-background shadow-sm">
        <div className="container-page flex items-center gap-4 py-4">
          <button className="lg:hidden p-2 -ml-2" onClick={() => setMobileOpen(true)} aria-label="Open menu">
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

          <div className="hidden md:flex flex-1 max-w-2xl mx-2">
            <div className="flex w-full rounded-lg overflow-hidden border border-border focus-within:border-primary transition-colors">
              <input
                type="text"
                placeholder="Search for products, designs and more..."
                className="flex-1 px-4 py-2.5 text-sm bg-background focus:outline-none"
              />
              <button className="bg-primary text-primary-foreground px-5 inline-flex items-center justify-center hover:bg-primary/90" aria-label="Search">
                <Search className="h-4 w-4" />
              </button>
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

        <div ref={wrapRef} className="relative border-t border-border hidden lg:block">
          <div className="container-page">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {NAV_TABS.map((tab) => {
                const category = CATEGORIES.find((c) => c.route === tab.to);
                const isOpen = openTab === tab.label;
                return (
                  <div key={tab.label} className="relative">
                    <Link
                      to={tab.to}
                      onMouseEnter={() => category && setOpenTab(tab.label)}
                      activeProps={{ className: "text-primary" }}
                      activeOptions={{ exact: tab.to === "/" }}
                      className="inline-flex items-center gap-1 whitespace-nowrap px-3 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {tab.label}
                      {category ? <ChevronDown className="h-3 w-3 opacity-60" /> : null}
                    </Link>
                    {category && isOpen ? (
                      <div
                        onMouseLeave={() => setOpenTab(null)}
                        className="absolute left-0 top-full mt-0 w-[640px] bg-card shadow-card-hover rounded-b-xl border border-border p-6 z-50 animate-in fade-in slide-in-from-top-2"
                      >
                        <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                          {category.subCategories.map((sub) => (
                            <Link
                              key={sub}
                              to={category.route}
                              onClick={() => setOpenTab(null)}
                              className="text-sm text-muted-foreground hover:text-primary py-1.5"
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-border">
                          <Link to={category.route} onClick={() => setOpenTab(null)} className="text-sm font-semibold text-primary hover:underline">
                            Shop all {category.name} →
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
            <button onClick={() => setMobileOpen(false)} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="p-2">
            {NAV_TABS.map((tab) => (
              <Link
                key={tab.label}
                to={tab.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm font-medium border-b border-border hover:bg-muted"
              >
                {tab.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 p-3">
              <Link to="/login" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md bg-muted text-center text-sm">Account</Link>
              <Link to="/cart" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md bg-primary text-primary-foreground text-center text-sm">Cart</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
