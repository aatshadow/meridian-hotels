import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { MaskText } from "@/components/Reveal";
import { BookingDock } from "@/components/BookingDock";
import { Marquee } from "@/components/Marquee";
import { CalypsoMark } from "@/components/Logo";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { IMG } from "@/lib/hotel";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { scrollToId } from "@/lib/useLenis";

const LOAD = 2.0; // begin after the preloader lifts

export function Hero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy">
      {/* Parallax photo */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={IMG.heroBay} alt="" className="h-full w-full object-cover" />
      </motion.div>
      {/* Scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/88 via-navy-deep/25 to-navy-deep/45" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy-deep/55 to-transparent" />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-8 md:px-10 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD, duration: 0.8, ease: EASE_OUT_EXPO }}
          className="mb-6 flex items-center gap-3"
        >
          <CalypsoMark size={22} />
          <span className="eyebrow text-sea-mist">{t(C.hero.kicker)}</span>
        </motion.div>

        <h1 className="max-w-[16ch] font-display text-[clamp(3.4rem,11vw,9rem)] font-medium leading-[0.92] text-cream">
          <MaskText text={t(C.hero.titleA)} delay={LOAD + 0.05} />{" "}
          <span className="italic text-gold-foil">
            <MaskText text={t(C.hero.titleB)} delay={LOAD + 0.18} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-7 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg"
        >
          {t(C.hero.sub)}
        </motion.p>

        {/* Booking dock — the signature element */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.7, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="mt-9 w-full max-w-4xl"
        >
          <BookingDock variant="hero" />
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.button
        onClick={() => scrollToId("about")}
        aria-label="Scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: LOAD + 1.1, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 text-cream/60 md:block"
      >
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="block">
          <ChevronDown size={26} strokeWidth={1.4} />
        </motion.span>
      </motion.button>
    </section>
  );
}

/* Thin feature marquee under the hero. */
export function FeatureStrip() {
  const t = useT();
  return (
    <div className="border-y border-line bg-cream py-4">
      <Marquee speed={34}>
        {C.marquee.items.map((it, i) => (
          <span key={i} className="flex items-center">
            <span className="px-7 font-display text-xl italic text-navy md:text-2xl">{t(it)}</span>
            <CalypsoMark size={16} mono className="mx-1 text-sea" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
