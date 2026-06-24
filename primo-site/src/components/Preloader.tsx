import { useEffect } from "react";
import { motion } from "framer-motion";
import { Seagull } from "./Logo";
import { EASE_IN_OUT_QUINT, EASE_OUT_EXPO } from "@/lib/motion";

/* Opening: the gull glides in, PRIMO rises, the horizon draws, then the panel lifts. */
export function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 1850);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="grain fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden bg-navy"
      initial={{ y: 0 }}
      exit={{ y: "-101%" }}
      transition={{ duration: 1.05, ease: EASE_IN_OUT_QUINT }}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
        >
          <Seagull size={74} className="text-gold" />
        </motion.div>

        <span className="overflow-hidden">
          <motion.span
            className="block font-display text-4xl font-semibold tracking-[0.22em] text-cream"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.2 }}
          >
            PRIMO
          </motion.span>
        </span>

        <motion.div
          className="h-px bg-gold-foil"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: 0.3 }}
        />

        <motion.span
          className="data-label text-[0.62rem] tracking-[0.5em] text-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          ПРИМОРСКО
        </motion.span>
      </div>
    </motion.div>
  );
}
