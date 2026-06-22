import { motion } from "framer-motion";
import { EASE_OUT_EXPO, viewportOnce } from "@/lib/motion";

/* The signature divider: a gold horizon hairline that draws across,
   with optional mono "tide-mark" labels hanging off each end. */
export function HorizonLine({
  left,
  right,
  className = "",
  tone = "gold",
}: {
  left?: string;
  right?: string;
  className?: string;
  tone?: "gold" | "sea" | "faint";
}) {
  const lineStyle =
    tone === "gold"
      ? { background: "var(--gold-gradient)" }
      : tone === "sea"
        ? { background: "rgba(127,168,184,0.5)" }
        : { background: "var(--color-hairline)" };

  const labelColor = tone === "sea" ? "text-sea-mist" : "text-ink-soft";

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {left && <span className={`eyebrow shrink-0 ${labelColor}`}>{left}</span>}
      <motion.div
        className="h-px flex-1 origin-left"
        style={lineStyle}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.3, ease: EASE_OUT_EXPO }}
      />
      {right && <span className={`eyebrow shrink-0 ${labelColor}`}>{right}</span>}
    </div>
  );
}
