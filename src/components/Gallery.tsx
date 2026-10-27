import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.jpg";
import photo8 from "@/assets/photo-8.jpg";
import photo9 from "@/assets/photo-9.jpg";
import photo10 from "@/assets/photo-10.jpg";
import photo11 from "@/assets/photo-11.jpg";
import photo12 from "@/assets/photo-12.jpg";
import photo13 from "@/assets/photo-13.jpg";
import photo14 from "@/assets/photo-14.jpg";
import photo15 from "@/assets/photo-15.jpg";

type Category = "All" | "T-Shirts" | "Corporate Gifts" | "Printing";

const images: { src: string; alt: string; label: string; category: Category[] }[] = [
  { src: photo1, alt: "Custom branded water bottles bulk order", label: "Branded Bottles", category: ["Corporate Gifts"] },
  { src: photo2, alt: "Corporate branded notebooks and pens", label: "Notebooks & Pens", category: ["Corporate Gifts"] },
  { src: photo3, alt: "Bulk branded stationery and corporate kits", label: "Corporate Kits", category: ["Corporate Gifts"] },
  { src: photo4, alt: "Custom branded backpacks for corporate events", label: "Branded Backpacks", category: ["Corporate Gifts"] },
  { src: photo5, alt: "Custom branded backpack closeup with logo", label: "Backpack Closeup", category: ["Corporate Gifts"] },
  { src: photo6, alt: "Custom branded polo T-shirts with logo printing", label: "Polo T-Shirts", category: ["T-Shirts"] },
  { src: photo7, alt: "Branded polo T-shirts in multiple colors", label: "Branded Polos", category: ["T-Shirts"] },
  { src: photo8, alt: "Embroidery machine printing on polo shirts", label: "Embroidery Work", category: ["Printing"] },
  { src: photo9, alt: "Custom ID cards and lanyards for events", label: "ID Cards & Lanyards", category: ["Corporate Gifts"] },
  { src: photo10, alt: "Custom branded pens in bulk", label: "Branded Pens", category: ["Corporate Gifts"] },
  { src: photo11, alt: "Custom printed paper bags for events", label: "Printed Paper Bags", category: ["Corporate Gifts", "Printing"] },
  { src: photo12, alt: "Embroidered polo T-shirt with company logo", label: "Embroidered Polo", category: ["T-Shirts"] },
  { src: photo13, alt: "Custom printed chocolate wrappers for gifts", label: "Custom Wrappers", category: ["Printing"] },
  { src: photo14, alt: "Custom printed event T-shirts for Rotaract club", label: "Event T-Shirts", category: ["T-Shirts"] },
  { src: photo15, alt: "Custom branded polo T-shirt with logo", label: "Business Polo", category: ["T-Shirts"] },
];

const categories: Category[] = ["All", "T-Shirts", "Corporate Gifts", "Printing"];

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category.includes(activeCategory));

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mt-2">
            Gallery & Portfolio
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Browse through our collection of custom printed T-shirts, corporate gifts, and promotional merchandise.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all-smooth ${activeCategory === cat
                ? "gradient-primary animate-gradient text-primary-foreground shadow-card hover:scale-110 hover-glow"
                : "bg-background text-muted-foreground hover:text-foreground border border-border hover:scale-105 hover:border-primary/40"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.label}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-xl overflow-hidden aspect-square shadow-card cursor-pointer hover-tilt"
                onClick={() => setLightbox(images.indexOf(img))}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all-smooth flex items-center justify-center">
                  <span className="text-secondary-foreground font-semibold font-heading text-lg scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all-smooth text-shadow-glow">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-secondary/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-all-smooth hover:scale-110 hover:rotate-90 hover-glow"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
