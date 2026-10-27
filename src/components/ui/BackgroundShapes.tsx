import { motion } from "framer-motion";

const BackgroundShapes = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[100px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-accent/5 blur-[80px]"
                animate={{
                    x: [0, -70, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
            <motion.div
                className="absolute top-[40%] left-[20%] w-[20vw] h-[20vw] rounded-full bg-secondary/5 blur-[90px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 80, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
            />
        </div>
    );
};

export default BackgroundShapes;
