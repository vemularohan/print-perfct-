import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

interface AnimatedButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text?: string;
    icon?: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
}

export const AnimatedButton = React.forwardRef<HTMLAnchorElement, AnimatedButtonProps>(
    ({ text = "Button", icon, variant = "primary", className, ...props }, ref) => {
        const variantStyles = {
            primary: "bg-primary text-white hover:bg-primary outline-primary",
            secondary: "bg-secondary text-white hover:bg-secondary outline-secondary",
            outline: "bg-white text-foreground hover:bg-white outline-border",
        };

        const slideColors = {
            primary: "bg-gradient-to-r from-primary via-accent to-primary",
            secondary: "bg-secondary",
            outline: "bg-primary",
        };

        return (
            <a
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all rounded hover:bg-white group outline outline-1",
                    variantStyles[variant],
                    className
                )}
                {...props}
            >
                <span className="w-48 h-48 rounded rotate-[-40deg] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 bg-gradient-to-r from-primary via-pink-500 to-primary"></span>
                <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white flex items-center gap-2">
                    {text}
                    {icon || <ArrowRight className="w-4 h-4" />}
                </span>
            </a>
        );
    }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton as Component };
