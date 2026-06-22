import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Custom coral cursor — a dot that opens into a ring over interactive elements. */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 38, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 600, damping: 38, mass: 0.35 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) {
      setEnabled(false);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ x: sx, y: sy }} aria-hidden="true">
      <motion.div
        className="rounded-full border border-gold"
        animate={{
          width: hovering ? 54 : 12,
          height: hovering ? 54 : 12,
          marginLeft: hovering ? -27 : -6,
          marginTop: hovering ? -27 : -6,
          backgroundColor: hovering ? "rgba(255,111,91,0.10)" : "rgba(255,111,91,0.95)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      />
    </motion.div>
  );
}
