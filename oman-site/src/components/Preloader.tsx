import { useEffect } from "react";
import { motion } from "framer-motion";
import { OmanCrest } from "./Logo";
import { useT } from "@/lib/i18n";
import { EASE_IN_OUT_QUINT, EASE_OUT_EXPO } from "@/lib/motion";

/* Opening: the crest fades in, HOTEL OMAN lifts, a gold rule draws, then the panel slides up. */
export function Preloader({ onComplete }: { onComplete: () => void }) {
  const t = useT();
  useEffect(() => {
    const tm = setTimeout(onComplete, 1900);
    return () => clearTimeout(tm);
  }, [onComplete]);

  return (
    <motion.div
      className="grain fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden bg-navy-deep"
      initial={{ y: 0 }}
      exit={{ y: "-101%" }}
      transition={{ duration: 1.05, ease: EASE_IN_OUT_QUINT }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          className="text-gold"
        >
          <OmanCrest size={104} />
        </motion.div>

        <span className="mt-5 overflow-hidden">
          <motion.span
            className="block font-display text-4xl tracking-[0.26em] text-cream md:text-5xl"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.2 }}
          >
            HOTEL OMAN
          </motion.span>
        </span>

        <motion.div
          className="mt-5 h-px bg-gold-foil"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: 0.35 }}
        />

        <motion.span
          className="script mt-4 text-2xl text-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.7 }}
        >
          {t({ bg: "мечтаната лятна почивка", en: "the summer you dream of" })}
        </motion.span>
      </div>
    </motion.div>
  );
}
