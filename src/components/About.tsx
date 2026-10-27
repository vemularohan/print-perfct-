import { CheckCircle, MapPin, Users, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal, useCounter } from "@/hooks/use-scroll-reveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: counterRef, isVisible: counterVisible } = useScrollReveal();

  const orders = useCounter(500, 2000, counterVisible);
  const clients = useCounter(300, 2000, counterVisible);
  const years = useCounter(10, 1500, counterVisible);
  const products = useCounter(50, 1500, counterVisible);

  const counters = [
    { icon: Award, value: orders, suffix: "+", label: "Orders Completed" },
    { icon: Users, value: clients, suffix: "+", label: "Happy Clients" },
    { icon: ShieldCheck, value: years, suffix: "+", label: "Years Experience" },
    { icon: MapPin, value: products, suffix: "+", label: "Product Types" },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mt-2 mb-6">
              Trusted Printing Partner in Hyderabad
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Surya Enterprises is a trusted Hyderabad-based printing company providing high-quality custom printed T-shirts and corporate gifting solutions. Located in Ayodhya Nagar, Quthbullapur, we have been serving the local community and businesses with dedication and commitment to quality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We serve businesses, colleges, events, teams, and organizations with bulk orders, creative designs, fast delivery, and competitive pricing. Whether you need 50 T-shirts or 5,000, we deliver on time with premium quality.
            </p>
            <ul className="space-y-3">
              {["Bulk & corporate order specialists", "Premium quality printing", "Fast turnaround & delivery", "Competitive pricing"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-background rounded-2xl p-8 shadow-elevated">
              <h3 className="text-xl font-bold font-heading text-foreground mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                {["State-of-the-art printing equipment", "Eco-friendly inks & materials", "In-house design team", "Quality assurance on every order", "Pan India Delivery"].map((item, i) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Counters */}
        <div ref={counterRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              animate={counterVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-background rounded-xl p-6 text-center shadow-card hover:shadow-elevated transition-shadow"
            >
              <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-bold font-heading text-foreground">
                {c.value}{c.suffix}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
