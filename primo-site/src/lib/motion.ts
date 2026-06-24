import type { Variants, Transition } from "framer-motion";

/* Shared easings */
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT_QUINT: [number, number, number, number] = [0.83, 0, 0.17, 1];

export const springSoft: Transition = { type: "spring", stiffness: 120, damping: 20, mass: 0.6 };
export const springSnappy: Transition = { type: "spring", stiffness: 260, damping: 26 };

/* A word/line that rises into place behind a mask (clip reveal) */
export const maskUp: Variants = {
  hidden: { y: "110%" },
  show: (i: number = 0) => ({
    y: "0%",
    transition: { duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.05 * i },
  }),
};

/* Generic fade + rise, used on whileInView */
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.06 * i },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({ opacity: 1, transition: { duration: 1, ease: EASE_OUT_EXPO, delay: 0.06 * i } }),
};

/* Stagger container */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export const staggerSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

/* Image clip reveal — wipes open from bottom */
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: { duration: 1.1, ease: EASE_OUT_EXPO },
  },
};

/* Default viewport for whileInView */
export const viewportOnce = { once: true, amount: 0.3 } as const;
