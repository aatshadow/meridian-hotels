import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

/* Per-route transition wrapper. Works with <AnimatePresence mode="wait">. */
export function PageWrap({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.12 } }}
      exit={{ opacity: 0, y: -12, transition: { duration: 0.35, ease: "easeIn" } }}
    >
      {children}
    </motion.main>
  );
}
