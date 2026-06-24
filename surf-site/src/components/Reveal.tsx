import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO, riseIn, viewportOnce } from "@/lib/motion";

/* Fade + rise on scroll-in. */
export function Reveal({
  children,
  i = 0,
  className = "",
}: {
  children: ReactNode;
  i?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={riseIn}
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

/* Headline reveal: each word rises from behind a mask, staggered.
   Observes a STABLE container (not the translated words) so the trigger is
   reliable, with a static fallback when reduced motion is requested. */
export function MaskText({
  text,
  className = "",
  delay = 0,
  stagger = 0.055,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {text}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {words.map((w, idx) => (
        <span key={idx}>
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "115%" }}
              animate={inView ? { y: "0%" } : { y: "115%" }}
              transition={{ duration: 0.85, ease: EASE_OUT_EXPO, delay: delay + idx * stagger }}
            >
              {w}
            </motion.span>
          </span>
          {idx < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

/* Clip-reveal container — wipes open from the bottom with a slow scale settle.
   Uses useInView + explicit animate (whileInView + clip-path variants proved
   unreliable in this stack), so it always completes for every user. */
export function RevealBox({
  children,
  className = "",
  amount = 0.18,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}

/* Image that wipes open from the bottom. */
export function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <RevealBox className={className}>
      <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${imgClassName}`} />
    </RevealBox>
  );
}
