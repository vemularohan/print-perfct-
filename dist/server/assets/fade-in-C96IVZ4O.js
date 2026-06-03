import { jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
function FadeIn({ children, delay = 0, className }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.45, ease: "easeOut", delay },
      className,
      children
    }
  );
}
export {
  FadeIn as F
};
