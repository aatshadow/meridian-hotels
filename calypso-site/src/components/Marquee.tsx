import type { ReactNode } from "react";
import { motion } from "framer-motion";

/* Seamless infinite marquee (duplicated track, translate -50%). */
export function Marquee({
  children,
  speed = 32,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max shrink-0 items-center"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        <span className="flex shrink-0 items-center">{children}</span>
        <span className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </span>
      </motion.div>
    </div>
  );
}
