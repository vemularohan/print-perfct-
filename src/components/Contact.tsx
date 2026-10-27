import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 96766 62304", href: "tel:+919676662304" },
  { icon: Mail, label: "Email", value: "suryaenterprises244@gmail.com", href: "mailto:suryaenterprises244@gmail.com" },
  { icon: MapPin, label: "Address", value: "Ayodhya Nagar, Quthbullapur, Hyderabad, Telangana 500055, India" },
  { icon: Clock, label: "Business Hours", value: "Everyday: 8:00 AM – 12:00 PM" },
];

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mt-2">
            For Enquiry, Contact
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Get in touch with us on WhatsApp for instant quotes and inquiries about your printing needs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6 mb-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 items-start group bg-background p-6 rounded-xl border border-border hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-8"
          >
            <a
              href="https://wa.me/919676662304"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <div className="relative">
                <Button
                  size="lg"
                  className="gap-3 bg-[#25D366] text-white border-0 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-500 px-10 py-7 text-lg font-semibold rounded-2xl overflow-hidden group-hover:scale-105 relative"
                >
                  <div className="absolute inset-0 bg-[#128C7E] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-3">
                    <div className="relative">
                      <WhatsAppIcon className="w-7 h-7 drop-shadow-lg group-hover:rotate-12 transition-transform duration-300 text-white" />
                      <div className="absolute inset-0 w-7 h-7 bg-white/30 rounded-full blur-md animate-pulse"></div>
                    </div>
                    <span className="relative">Chat on WhatsApp</span>
                  </div>
                </Button>
              </div>
            </a>
            <p className="text-muted-foreground text-sm mt-4">
              Click to start a conversation with us instantly
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-xl overflow-hidden border border-border shadow-card"
          >
            <iframe
              src="https://maps.google.com/maps?q=GF54%2B28+Hyderabad,+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Surya Enterprises - Ayodhya Nagar, Quthbullapur, Hyderabad"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
