import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTABanner = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary-foreground mb-4">
            Get Your Custom Products Printed Today!
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            From idea to delivery — we make it easy. Request a free quote now and bring your designs to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-base px-8 gap-2">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="tel:+919999999999">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-base px-8 gap-2">
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
