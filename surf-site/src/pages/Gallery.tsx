import { motion } from "framer-motion";

import { PageWrap } from "@/components/PageWrap";
import { MaskText, Reveal, RevealBox } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { MagneticButton } from "@/components/MagneticButton";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL, PHOTOS, CTA_BOOK } from "@/lib/hotel";
import { EASE_OUT_EXPO } from "@/lib/motion";

const LOAD = 0.35;

export default function Gallery() {
  return (
    <PageWrap>
      <Hero />
      <GalleryGrid />
      <Closing />
    </PageWrap>
  );
}

/* ------------------------------------------------------------------ HERO */
function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden bg-cream pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD, duration: 0.8, ease: EASE_OUT_EXPO }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold">{t(C.gallery.heroEyebrow)}</span>
        </motion.div>

        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7.5vw,6rem)] font-medium leading-[0.98] text-navy">
          <MaskText text={t(C.gallery.heroTitleA)} delay={LOAD + 0.05} />{" "}
          <span className="italic text-gold-foil">
            <MaskText text={t(C.gallery.heroTitleB)} delay={LOAD + 0.18} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          {t(C.gallery.heroSub)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: LOAD + 0.7, duration: 1 }}
          className="mt-12"
        >
          <HorizonLine left={t(HOTEL.place)} right={HOTEL.coordinates} />
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- GALLERY GRID
   Editorial masonry on a 6-column desktop grid: tall feature tiles claim
   4 cols / 2 rows, while the rest fill in to keep a dense, magazine rhythm.
   On mobile it relaxes to a calm two-column flow with portrait/landscape
   aspect ratios so nothing feels cropped. */

type Layout = { span: string; aspect: string };

/* The 14 photos, choreographed. `span` drives the desktop footprint;
   `aspect` shapes mobile (and short tiles where rows aren't spanned). */
const LAYOUT: Layout[] = [
  { span: "md:col-span-4 md:row-span-2", aspect: "aspect-[4/5] md:aspect-auto" }, // 0 · sunset — tall feature
  { span: "md:col-span-2", aspect: "aspect-[4/5]" }, // 1
  { span: "md:col-span-2", aspect: "aspect-[4/5]" }, // 2
  { span: "md:col-span-3", aspect: "aspect-[3/2]" }, // 3 · blue-hour pool
  { span: "md:col-span-3", aspect: "aspect-[3/2]" }, // 4
  { span: "md:col-span-2", aspect: "aspect-[4/5]" }, // 5 · facade
  { span: "md:col-span-4 md:row-span-2", aspect: "aspect-[4/5] md:aspect-auto" }, // 6 · lifestyle — tall feature
  { span: "md:col-span-2", aspect: "aspect-[4/5]" }, // 7 · terrace
  { span: "md:col-span-3", aspect: "aspect-[3/2]" }, // 8 · pool
  { span: "md:col-span-3", aspect: "aspect-[3/2]" }, // 9
  { span: "md:col-span-3", aspect: "aspect-[3/2]" }, // 10 · beach
  { span: "md:col-span-3", aspect: "aspect-[3/2]" }, // 11 · curtain view
  { span: "md:col-span-4 md:row-span-2", aspect: "aspect-[4/5] md:aspect-auto" }, // 12 · bay — tall feature
  { span: "md:col-span-2", aspect: "aspect-[4/5]" }, // 13
];

function GalleryGrid() {
  const t = useT();

  return (
    <section className="bg-cream pb-24 pt-4 md:pb-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-5 md:[grid-auto-rows:11rem] lg:[grid-auto-rows:13rem]">
          {PHOTOS.gallery.map((src, i) => {
            const layout = LAYOUT[i % LAYOUT.length];
            return (
              <RevealBox
                key={src}
                className={`group relative rounded-xl bg-cream-deep ${layout.span} ${layout.aspect}`}
              >
                <img
                  src={src}
                  alt={t({
                    bg: `Хотел Чайка, Приморско — кадър ${i + 1}`,
                    en: `Hotel Chaika, Primorsko — frame ${i + 1}`,
                  })}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[0.6rem] tracking-[0.2em] text-cream/0 transition-colors duration-500 group-hover:text-cream/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </RevealBox>
            );
          })}
        </div>

        <Reveal className="mt-16">
          <HorizonLine left={t(HOTEL.place)} right={t(C.gallery.heroEyebrow)} />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- CLOSING */
function Closing() {
  const t = useT();
  return (
    <section className="grain relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-navy-deep/60 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <Reveal>
          <span className="eyebrow text-gold">
            {t({ bg: "На живо е още по-красиво", en: "Even better in person" })}
          </span>
        </Reveal>
        <h2 className="mx-auto mt-7 max-w-3xl font-display text-[clamp(1.9rem,5vw,3.8rem)] font-medium leading-[1.04] text-cream">
          <MaskText text={t({ bg: "Елате и вижте морето", en: "Come and see the sea" })} />{" "}
          <span className="italic text-gold-foil">
            <MaskText text={t({ bg: "със собствените си очи.", en: "with your own eyes." })} />
          </span>
        </h2>
        <Reveal i={1} className="mt-10 flex justify-center">
          <MagneticButton to="/book" variant="gold">
            {t(CTA_BOOK)}
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
