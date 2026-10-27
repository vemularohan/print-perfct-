import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Breadcrumb Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-4">
                            Our Services
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl">
                            Explore our comprehensive range of custom printing and gifting solutions — from apparel and drinkware to wood carving and personalized gifts.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <Services />

            {/* CTA Banner */}
            <CTABanner />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ServicesPage;
