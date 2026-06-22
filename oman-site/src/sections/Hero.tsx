import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";

import { MaskText } from "@/components/Reveal";
import { OmanCrest } from "@/components/Logo";
import { Marquee } from "@/components/Marquee";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { IMG, HOTEL, CTA_BOOK } from "@/lib/hotel";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { scrollToId } from "@/lib/useLenis";

const LOAD = 2.0;

export function Hero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="vignette relative flex h-[100svh] min-h-[660px] w-full items-center justify-center overflow-hidden bg-navy-deep">
      {/* Parallax photo, graded to midnight */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={IMG.hero} alt="" className="h-full w-full object-cover opacity-[0.55]" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/45 to-navy-deep/92" />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: LOAD, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="text-gold"
        >
          <OmanCrest size={64} />
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: LOAD + 0.2, duration: 0.8 }}
          className="eyebrow mt-6 text-sea"
        >
          {t(C.hero.kicker)}
        </motion.span>

        {/* script line + Prata line */}
        <h1 className="mt-4 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: LOAD + 0.3, duration: 0.9, ease: EASE_OUT_EXPO }}
            className="script text-gold-foil text-[clamp(3rem,9vw,6.5rem)] leading-[0.9]"
          >
            {t(C.hero.line1)}
          </motion.span>
          <span className="mt-1 font-display text-[clamp(2.2rem,6.5vw,4.6rem)] leading-[1.02] tracking-wide text-cream">
            <MaskText text={t(C.hero.line2)} delay={LOAD + 0.45} />
          </span>
        </h1>

        {/* filigree divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: LOAD + 0.7, duration: 1 }}
          className="mt-7 flex items-center gap-3 text-gold"
        >
          <span className="h-px w-12 bg-gold-foil" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px w-12 bg-gold-foil" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.8, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-6 max-w-xl text-[1.02rem] leading-relaxed text-cream/75"
        >
          {t(C.hero.sub)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.95, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToId("contact")}
            data-cursor="hover"
            className="inline-flex items-center gap-2 rounded-full bg-gold-foil px-8 py-3.5 text-[0.74rem] uppercase tracking-[0.18em] text-navy-deep transition-[filter] duration-300 hover:brightness-110"
          >
            {t(CTA_BOOK)}
          </button>
          <a
            href={HOTEL.tel}
            data-cursor="hover"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-[0.74rem] uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:border-gold hover:text-gold-light"
          >
            <Phone size={14} /> {HOTEL.phoneDisplay}
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollToId("about")}
        aria-label="Scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: LOAD + 1.2, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-gold/70"
      >
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="block">
          <ChevronDown size={26} strokeWidth={1.2} />
        </motion.span>
      </motion.button>
    </section>
  );
}

/* Gold marquee strip under the hero. */
export function FeatureStrip() {
  const t = useT();
  return (
    <div className="border-y bg-navy py-4" style={{ borderColor: "var(--gold-line)" }}>
      <Marquee speed={36}>
        {C.marquee.items.map((it, i) => (
          <span key={i} className="flex items-center">
            <span className="px-7 font-display text-lg text-sea md:text-xl">{t(it)}</span>
            <span className="h-1 w-1 rotate-45 bg-gold" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
