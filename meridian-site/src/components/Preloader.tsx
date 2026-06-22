import { useEffect } from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { LogoMark } from "./Logo";
import { EASE_IN_OUT_QUINT, EASE_OUT_EXPO } from "@/lib/motion";

/* Opening sequence: mark settles, name rises, the horizon line draws,
   then the whole panel lifts away like a curtain. */
export function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 1850);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="grain fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden bg-sea-deep"
      initial={{ y: 0 }}
      exit={{ y: "-101%" }}
      transition={{ duration: 1.05, ease: EASE_IN_OUT_QUINT }}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          <LogoMark size={48} />
        </motion.div>

        <span className="overflow-hidden">
          <motion.span
            className="block pl-[0.3em] font-display text-3xl tracking-[0.3em] text-pearl"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.15 }}
          >
            {BRAND.name}
          </motion.span>
        </span>

        <motion.div
          className="h-px bg-gold-foil"
          initial={{ width: 0 }}
          animate={{ width: 230 }}
          transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: 0.25 }}
        />

        <motion.span
          className="data-label text-[0.7rem] tracking-[0.3em] text-sea-mist"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {BRAND.coordinates}
        </motion.span>
      </div>
    </motion.div>
  );
}
