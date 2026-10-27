import { Building2, Calendar, ArrowLeft, Star, Users, Briefcase, GraduationCap, Heart, Megaphone, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const allCompanies = [
    {
        name: "Infosys",
        category: "IT & Corporate",
        description: "Custom branded apparel for team events, onboarding kits, and quarterly employee engagement activities.",
        highlight: "500+ orders delivered",
    },
    {
        name: "Wipro",
        category: "IT & Corporate",
        description: "Bulk corporate merchandise, hackathon tees, and employee engagement kits for multiple centers.",
        highlight: "Long-term partner",
    },
    {
        name: "TCS",
        category: "IT & Corporate",
        description: "Premium quality printed T-shirts for hackathons, off-sites, and annual celebrations across Hyderabad.",
        highlight: "300+ orders delivered",
    },
    {
        name: "Tech Mahindra",
        category: "IT & Corporate",
        description: "Custom apparel for innovation labs, team outings, and tech summits with quick turnaround.",
        highlight: "Repeat orders",
    },
    {
        name: "Deloitte",
        category: "IT & Corporate",
        description: "Employee onboarding kits, branded merchandise, and leadership summit apparel.",
        highlight: "Premium quality",
    },
    {
        name: "Amazon",
        category: "IT & Corporate",
        description: "Warehouse team uniforms, delivery partner T-shirts, and prime day promotional merch.",
        highlight: "Bulk specialist",
    },
    {
        name: "JNTU Hyderabad",
        category: "Education",
        description: "College fest merchandise, department uniforms, and convocation memorabilia for multiple departments.",
        highlight: "Annual partner",
    },
    {
        name: "Osmania University",
        category: "Education",
        description: "Event T-shirts, custom hoodies for student organizations, and inter-university sports meet kits.",
        highlight: "5+ years association",
    },
    {
        name: "IIIT Hyderabad",
        category: "Education",
        description: "Techfest merchandise, coding competition T-shirts, and alumni reunion apparel.",
        highlight: "Premium designs",
    },
    {
        name: "VNR VJIET",
        category: "Education",
        description: "Annual fest merchandise, department hoodies, and sports day uniforms for the entire college.",
        highlight: "Bulk orders",
    },
    {
        name: "CBIT",
        category: "Education",
        description: "Cultural fest T-shirts, technical symposium merch, and farewell batch hoodies.",
        highlight: "Creative designs",
    },
    {
        name: "Apollo Hospitals",
        category: "Healthcare",
        description: "Staff uniforms, awareness campaign merchandise, and health camp volunteer T-shirts.",
        highlight: "Quality assured",
    },
    {
        name: "Care Hospitals",
        category: "Healthcare",
        description: "Department uniforms, doctor's day celebration merchandise, and patient care campaign T-shirts.",
        highlight: "Trusted partner",
    },
    {
        name: "Hyderabad Metro Rail",
        category: "Government & Infrastructure",
        description: "Staff uniforms, promotional merchandise, and event T-shirts for metro anniversary celebrations.",
        highlight: "Official vendor",
    },
    {
        name: "Telangana Tourism",
        category: "Government & Infrastructure",
        description: "Promotional T-shirts, tourist merchandise, and cultural event uniforms.",
        highlight: "State-level partner",
    },
    {
        name: "Decathlon",
        category: "Retail & Sports",
        description: "Custom sports team jerseys, marathon event T-shirts, and fitness challenge merchandise.",
        highlight: "Sports specialist",
    },
    {
        name: "Startup Ecosystem",
        category: "Startups",
        description: "Branded swag for 100+ startups in T-Hub, IIIT Hyderabad incubator, and WeWork spaces.",
        highlight: "100+ startups served",
    },
    {
        name: "Wedding Planners Network",
        category: "Events & Weddings",
        description: "Custom couple T-shirts, family matching outfits, bridesmaids/groomsmen tees, and wedding crew merch.",
        highlight: "Personalized designs",
    },
];

const allEvents = [
    {
        name: "College Fests & Techfests",
        icon: GraduationCap,
        description: "Custom merchandise for 50+ college festivals across Telangana including Srujana, Convergence, and more.",
        stats: "50+ fests covered",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        name: "Corporate Off-sites & Team Events",
        icon: Briefcase,
        description: "Branded apparel for team-building events, annual meets, leadership summits, and employee bonding activities.",
        stats: "200+ corporate events",
        color: "from-indigo-500/20 to-purple-500/20",
    },
    {
        name: "Marathons & Sports Events",
        icon: Trophy,
        description: "Custom race-day T-shirts, finisher tees, volunteer kits, and medal ceremonies for events like Hyderabad Marathon and local 10K runs.",
        stats: "30+ sporting events",
        color: "from-green-500/20 to-emerald-500/20",
    },
    {
        name: "Product Launches & Brand Activations",
        icon: Megaphone,
        description: "Promotional merchandise for brand launches, store openings, product reveals, and marketing activations.",
        stats: "100+ launches covered",
        color: "from-orange-500/20 to-amber-500/20",
    },
    {
        name: "Weddings & Celebrations",
        icon: Heart,
        description: "Personalized T-shirts, matching family outfits, bridal party tees, gift hampers, and custom celebration merch.",
        stats: "500+ celebrations",
        color: "from-pink-500/20 to-rose-500/20",
    },
    {
        name: "NGO & Community Drives",
        icon: Users,
        description: "Awareness campaign T-shirts, charity run kits, volunteer uniforms, and fundraiser merchandise for social causes.",
        stats: "40+ community events",
        color: "from-teal-500/20 to-green-500/20",
    },
    {
        name: "Religious & Cultural Events",
        icon: Star,
        description: "Custom T-shirts for Ganesh Chaturthi mandals, Bonalu celebrations, temple events, and cultural programs.",
        stats: "Seasonal orders",
        color: "from-yellow-500/20 to-orange-500/20",
    },
    {
        name: "School Events & Annual Days",
        icon: GraduationCap,
        description: "Class T-shirts, annual day uniforms, sports day kits, and farewell batch prints for schools across Hyderabad.",
        stats: "100+ schools served",
        color: "from-violet-500/20 to-purple-500/20",
    },
];

const categoryColors: Record<string, string> = {
    "IT & Corporate": "bg-blue-500/10 text-blue-500",
    "Education": "bg-emerald-500/10 text-emerald-500",
    "Healthcare": "bg-red-500/10 text-red-500",
    "Government & Infrastructure": "bg-amber-500/10 text-amber-500",
    "Retail & Sports": "bg-cyan-500/10 text-cyan-500",
    "Startups": "bg-violet-500/10 text-violet-500",
    "Events & Weddings": "bg-pink-500/10 text-pink-500",
};

const ClientsPage = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: companiesRef, isVisible: companiesVisible } = useScrollReveal();
    const { ref: eventsRef, isVisible: eventsVisible } = useScrollReveal();
    const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Banner */}
            <section className="pt-28 pb-16 gradient-dark relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        ref={headerRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={headerVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="text-center"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors mb-6 text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-secondary-foreground mb-4">
                            Our <span className="text-gradient">Clients</span> & <span className="text-gradient">Events</span>
                        </h1>
                        <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
                            We've proudly served hundreds of companies, colleges, and events with premium quality custom printing solutions across India.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mt-10">
                            {[
                                { value: "300+", label: "Companies Served" },
                                { value: "500+", label: "Events Covered" },
                                { value: "50K+", label: "Orders Delivered" },
                                { value: "10+", label: "Years Experience" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={headerVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl sm:text-4xl font-bold font-heading text-gradient">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-secondary-foreground/60 mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Companies Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        ref={companiesRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={companiesVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Building2 className="w-7 h-7 text-primary" />
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Trusted By Industry Leaders</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground">
                            Companies We've Worked With
                        </h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl">
                            From Fortune 500 companies to dynamic startups, we deliver premium custom printing solutions that meet corporate standards.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allCompanies.map((company, index) => (
                            <motion.div
                                key={company.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={companiesVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 + (index % 6) * 0.08, duration: 0.5 }}
                                className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-300 overflow-hidden"
                            >
                                {/* Top accent gradient */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                                {/* Hover gradient */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                                                {company.name}
                                            </h3>
                                            <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-1 ${categoryColors[company.category] || "bg-primary/10 text-primary"}`}>
                                                {company.category}
                                            </span>
                                        </div>
                                        <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            {company.name.charAt(0)}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                        {company.description}
                                    </p>
                                    <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
                                        <Star className="w-3.5 h-3.5 fill-primary" />
                                        {company.highlight}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-20 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        ref={eventsRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={eventsVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Calendar className="w-7 h-7 text-primary" />
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Events We Cover</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground">
                            Events & Occasions We Serve
                        </h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl">
                            No matter the occasion — from college techfests to grand weddings — we create custom merchandise that makes your event memorable.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {allEvents.map((event, index) => (
                            <motion.div
                                key={event.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={eventsVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 + (index % 4) * 0.1, duration: 0.5 }}
                                className="group relative bg-background rounded-xl p-8 border border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-300 overflow-hidden"
                            >
                                {/* Background gradient */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${event.color} pointer-events-none`} />

                                {/* Left accent */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 group-hover:h-20 w-1 rounded-r-full bg-border group-hover:bg-primary transition-all duration-300" />

                                <div className="relative z-10 flex gap-5">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                            <event.icon className="w-7 h-7" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                            {event.name}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                            {event.description}
                                        </p>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            <Star className="w-3 h-3 fill-primary" />
                                            {event.stats}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        ref={ctaRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center bg-card border border-border rounded-2xl p-10 sm:p-14 relative overflow-hidden"
                    >
                        {/* Decorative blurs */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                Your Event, Our Expertise
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mt-2 mb-4">
                                Have an Event Coming Up?
                            </h2>
                            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                                Whether it's a corporate team event, college fest, marathon, or wedding — let us create custom merchandise that makes your event unforgettable. Get in touch today!
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="/#contact">
                                    <Button
                                        size="lg"
                                        className="gap-2 gradient-primary text-primary-foreground border-0 hover:scale-105 transition-all duration-300"
                                    >
                                        Get a Free Quote
                                    </Button>
                                </a>
                                <a href="tel:+919676662304">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="gap-2 hover:scale-105 transition-all duration-300"
                                    >
                                        Call Us Now
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default ClientsPage;
