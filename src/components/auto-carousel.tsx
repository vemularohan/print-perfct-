import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: ReactNode;
  label: string;
  interval?: number;
  className?: string;
};

export function AutoCarousel({ children, label, interval = 3500, className = "" }: Props) {
  const railRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const move = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const distance = Math.max(rail.clientWidth * 0.76, 260);
    if (direction < 0 && rail.scrollLeft < 8) rail.scrollTo({ left: Math.max(0, rail.scrollWidth / 2 - distance), behavior: "smooth" });
    else rail.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      const rail = railRef.current;
      if (!rail) return;
      if (rail.scrollLeft + rail.clientWidth >= rail.scrollWidth / 2 - 8) rail.scrollTo({ left: 0, behavior: "auto" });
      else move(1);
    }, interval);
    return () => window.clearInterval(timer);
  }, [interval, paused]);

  return <div className={`group/rail relative ${className}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
    <div ref={railRef} aria-label={label} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-2">
      {children}{children}
    </div>
    <button type="button" aria-label={`Previous ${label}`} onClick={() => move(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 shadow-card border border-border text-foreground opacity-0 group-hover/rail:opacity-100 transition-opacity hidden md:inline-flex items-center justify-center"><ChevronLeft className="h-5 w-5" /></button>
    <button type="button" aria-label={`Next ${label}`} onClick={() => move(1)} className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 shadow-card border border-border text-foreground opacity-0 group-hover/rail:opacity-100 transition-opacity hidden md:inline-flex items-center justify-center"><ChevronRight className="h-5 w-5" /></button>
  </div>;
}
