import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// All the companies and events we serve — displayed as a scrolling marquee
const logoItems = [
    { name: "Infosys", category: "Corporate" },
    { name: "Wipro", category: "Corporate" },
    { name: "TCS", category: "Corporate" },
    { name: "Tech Mahindra", category: "Corporate" },
    { name: "Deloitte", category: "Corporate" },
    { name: "Amazon", category: "Corporate" },
    { name: "JNTU Hyderabad", category: "Education" },
    { name: "Osmania University", category: "Education" },
    { name: "IIIT Hyderabad", category: "Education" },
    { name: "VNR VJIET", category: "Education" },
    { name: "CBIT", category: "Education" },
    { name: "Apollo Hospitals", category: "Healthcare" },
    { name: "Care Hospitals", category: "Healthcare" },
    { name: "Hyderabad Metro Rail", category: "Government" },
    { name: "Telangana Tourism", category: "Government" },
    { name: "Decathlon", category: "Sports" },
];

const eventItems = [
    { name: "College Fests", icon: "🎓" },
    { name: "Corporate Off-sites", icon: "🏢" },
    { name: "Marathons", icon: "🏃" },
    { name: "Product Launches", icon: "🚀" },
    { name: "Weddings", icon: "💍" },
    { name: "NGO Drives", icon: "💚" },
    { name: "Cultural Events", icon: "🎭" },
    { name: "School Annual Days", icon: "📚" },
    { name: "Sports Tournaments", icon: "🏆" },
    { name: "Charity Runs", icon: "❤️" },
];

// Color palette for category badges
const categoryColors: Record<string, string> = {
    Corporate: "from-blue-500 to-cyan-500",
    Education: "from-emerald-500 to-teal-500",
    Healthcare: "from-rose-500 to-pink-500",
    Government: "from-amber-500 to-orange-500",
    Sports: "from-violet-500 to-purple-500",
};

const LogoCard = ({ name, category }: { name: string; category: string }) => (
    <div className="flex-shrink-0 group cursor-default">
        <div className="relative bg-background border border-border rounded-xl px-6 py-4 flex items-center gap-4 hover:border-primary/50 hover:shadow-elevated transition-all duration-300 min-w-[220px]">
            {/* Gradient initial circle */}
            <div
                className={`w-11 h-11 rounded-full bg-gradient-to-br ${categoryColors[category] || "from-primary to-primary/70"} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}
            >
                {name.charAt(0)}
            </div>
            <div>
                <div className="font-bold font-heading text-foreground text-sm whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                    {name}
                </div>
                <div className="text-xs text-muted-foreground">{category}</div>
            </div>
        </div>
    </div>
);

const EventBadge = ({ name, icon }: { name: string; icon: string }) => (
    <div className="flex-shrink-0 group cursor-default">
        <div className="relative bg-background border border-border rounded-full px-5 py-3 flex items-center gap-3 hover:border-primary/50 hover:shadow-elevated transition-all duration-300">
            <span className="text-xl group-hover:scale-125 transition-transform duration-300">{icon}</span>
            <span className="font-semibold text-foreground text-sm whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                {name}
            </span>
        </div>
    </div>
);

const Clients = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="clients" className="py-20 bg-card overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Trusted By Many
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mt-2">
                        Companies & Events We Serve
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        From top IT companies to college fests and marathons — we've delivered custom printing solutions for hundreds of organizations and events across India.
                    </p>
                </motion.div>
            </div>

            {/* Scrolling Company Logos - Row 1 (left to right) */}
            <div className="relative mb-5">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

                <div className="marquee-container">
                    <div className="marquee-track marquee-left">
                        {[...logoItems, ...logoItems].map((item, i) => (
                            <LogoCard key={`r1-${i}`} name={item.name} category={item.category} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Scrolling Company Logos - Row 2 (right to left) */}
            <div className="relative mb-12">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

                <div className="marquee-container">
                    <div className="marquee-track marquee-right">
                        {[...logoItems.slice().reverse(), ...logoItems.slice().reverse()].map((item, i) => (
                            <LogoCard key={`r2-${i}`} name={item.name} category={item.category} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Scrolling Events Row */}
            <div className="relative mb-12">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

                <div className="marquee-container">
                    <div className="marquee-track marquee-left-slow">
                        {[...eventItems, ...eventItems].map((item, i) => (
                            <EventBadge key={`ev-${i}`} name={item.name} icon={item.icon} />
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center"
            >
                <Link to="/clients">
                    <Button
                        size="lg"
                        className="gap-2 gradient-primary text-primary-foreground border-0 hover:scale-105 transition-all duration-300 group"
                    >
                        View All Clients & Events
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
};

export default Clients;
