import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["Custom", "Premium", "Quality", "Professional", "Creative"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 1200);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                    <div>
                        <Button size="sm" className="gap-4 bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 backdrop-blur-md">
                            #1 Printing Solutions in Hyderabad <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                            <span className="text-white">Surya Enterprises - </span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-semibold text-gradient"
                                        initial={{ opacity: 0, y: "-100" }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                                : {
                                                    y: titleNumber > index ? -150 : 150,
                                                    opacity: 0,
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="text-white">Printing Solutions</span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white/90 max-w-2xl text-center">
                            T-Shirts, Corporate Gifts, Mugs, Caps, Bags & More.
                            High-quality custom printing for businesses, colleges, events & teams.
                            Bulk orders, creative designs, fast delivery.
                        </p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <a href="tel:+919999999999">
                            <Button size="lg" className="gap-2 bg-white text-secondary hover:bg-white/90">
                                <PhoneCall className="w-4 h-4" />
                                Call Now
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button size="lg" className="gap-2 bg-primary text-white hover:bg-primary/90">
                                Get a Quote <ArrowRight className="w-4 h-4" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Hero };
