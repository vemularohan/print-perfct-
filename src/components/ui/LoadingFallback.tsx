import { motion } from "framer-motion";

const LoadingFallback = () => {
    return (
        <div className="flex items-center justify-center py-20">
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                <p className="text-muted-foreground text-sm">Loading...</p>
            </motion.div>
        </div>
    );
};

export default LoadingFallback;
