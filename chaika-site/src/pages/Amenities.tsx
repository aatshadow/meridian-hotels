import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { PageWrap } from "@/components/PageWrap";
import { MaskText, Reveal, RevealImage } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { MagneticButton } from "@/components/MagneticButton";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { AMENITIES, SERVICES, CTA_BOOK } from "@/lib/hotel";
import { EASE_OUT_EXPO, viewportOnce, riseIn } from "@/lib/motion";

const LOAD = 0.35;

export default function Amenities() {
  return (
    <PageWrap>
      <Hero />
      <FeatureBlocks />
      <ServicesIncluded />
      <ClosingCta />
    </PageWrap>
  );
}

/* ------------------------------------------------------------------ HERO */
function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-gold/[0.07] blur-3xl" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD, duration: 0.8, ease: EASE_OUT_EXPO }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold">{t(C.amenities.heroEyebrow)}</span>
        </motion.div>

        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7.5vw,6rem)] font-medium leading-[0.98] text-navy">
          <MaskText text={t(C.amenities.heroTitleA)} delay={LOAD + 0.05} />{" "}
          <span className="italic text-gold-foil">
            <MaskText text={t(C.amenities.heroTitleB)} delay={LOAD + 0.18} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          {t(C.amenities.heroSub)}
        </motion.p>

        <Reveal className="mt-14">
          <HorizonLine left={t(C.amenities.heroEyebrow)} right={t(C.home.amenitiesTitle)} />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- FEATURE BLOCKS */
function FeatureBlocks() {
  const t = useT();
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="flex flex-col gap-24 md:gap-36">
        {AMENITIES.map((a, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={a.id}
              className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16"
            >
              {/* image */}
              <Reveal
                i={reversed ? 1 : 0}
                className={`md:col-span-7 ${reversed ? "md:order-2" : "md:order-1"}`}
              >
                <RevealImage
                  src={a.img}
                  alt={t(a.name)}
                  className="aspect-[4/3] w-full rounded-2xl shadow-[0_40px_90px_-50px_rgba(13,43,56,0.45)]"
                  imgClassName="transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                />
              </Reveal>

              {/* copy */}
              <div className={`md:col-span-5 ${reversed ? "md:order-1" : "md:order-2"}`}>
                <Reveal>
                  <span className="data-label text-xs text-gold/80">
                    0{i + 1} / 0{AMENITIES.length}
                  </span>
                </Reveal>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-navy">
                  <MaskText text={t(a.name)} stagger={0.04} />
                </h2>
                <Reveal i={1}>
                  <p className="pretty mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                    {t(a.text)}
                  </p>
                </Reveal>
                <Reveal i={2} className="mt-8">
                  <span className="flex items-center gap-4">
                    <span className="h-px w-12 bg-gold/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------------------------------------------- SERVICES INCLUDED */
function ServicesIncluded() {
  const t = useT();
  return (
    <section className="grain relative overflow-hidden bg-navy py-24 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-navy-deep/60 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <span className="eyebrow text-gold">{t(C.amenities.servicesEyebrow)}</span>
            </Reveal>
            <h2 className="mt-7 max-w-md font-display text-[clamp(2rem,4.6vw,3.6rem)] font-medium leading-[1.04] text-cream">
              <MaskText text={t(C.amenities.servicesTitle)} stagger={0.03} />
            </h2>
            <Reveal i={1}>
              <p className="pretty mt-7 max-w-sm text-lg leading-relaxed text-cream/70">
                {t({
                  bg: "Без скрити такси и без излишни въпроси — основните удобства са част от вашия престой.",
                  en: "No hidden fees and no fuss — the essentials are part of your stay.",
                })}
              </p>
            </Reveal>
          </div>

          <motion.ul
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04] sm:grid-cols-2 md:col-span-7"
          >
            {SERVICES.map((s, i) => (
              <motion.li
                key={i}
                variants={riseIn}
                custom={i}
                className="flex items-center gap-4 bg-navy px-6 py-7 transition-colors duration-300 hover:bg-navy-soft/30 md:px-7 md:py-8"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                  <Check size={16} strokeWidth={2} />
                </span>
                <span className="font-display text-xl text-cream md:text-2xl">{t(s)}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <HorizonLine
          className="mt-16"
          tone="sea"
          left={t(C.amenities.servicesEyebrow)}
          right={t(C.home.amenitiesEyebrow)}
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ CLOSING CTA */
function ClosingCta() {
  const t = useT();
  return (
    <section className="bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">{t(C.home.ctaTitle)}</span>
            </Reveal>
            <h2 className="mt-7 max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.0] text-navy">
              <MaskText text={t({ bg: "Лятото е по-хубаво", en: "Summer is better" })} />{" "}
              <span className="italic text-gold-foil">
                <MaskText text={t({ bg: "край морето.", en: "by the sea." })} delay={0.12} />
              </span>
            </h2>
            <Reveal i={1}>
              <p className="pretty mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
                {t(C.home.ctaSub)}
              </p>
            </Reveal>
          </div>

          <Reveal i={1} className="shrink-0">
            <MagneticButton to="/book" variant="gold">
              {t(CTA_BOOK)}
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
