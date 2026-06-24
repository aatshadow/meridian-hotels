import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { PageWrap } from "@/components/PageWrap";
import { MaskText, Reveal, RevealImage } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { MagneticButton } from "@/components/MagneticButton";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL, PHOTOS, ROOMS, CTA_BOOK, type Room } from "@/lib/hotel";
import { EASE_OUT_EXPO, viewportOnce, riseIn } from "@/lib/motion";

const LOAD = 0.35;

export default function Rooms() {
  return (
    <PageWrap>
      <Hero />
      <RoomsList />
      <RatesNote />
      <ClosingCTA />
    </PageWrap>
  );
}

/* ------------------------------------------------------------------ HERO */
function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD, duration: 0.8, ease: EASE_OUT_EXPO }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold">{t(C.rooms.heroEyebrow)}</span>
        </motion.div>

        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7.5vw,6rem)] font-medium leading-[0.98] text-navy">
          <MaskText text={t(C.rooms.heroTitleA)} delay={LOAD + 0.05} />{" "}
          <span className="italic text-gold-foil">
            <MaskText text={t(C.rooms.heroTitleB)} delay={LOAD + 0.18} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          {t(C.rooms.heroSub)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: LOAD + 0.7, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="mt-14 md:mt-16"
        >
          <RevealImage
            src={PHOTOS.heroDay}
            alt={t({ bg: "Панорамен изглед от балкон към залива", en: "Panoramic balcony view over the bay" })}
            className="aspect-[16/9] w-full rounded-2xl md:aspect-[21/8]"
          />
        </motion.div>

        <HorizonLine className="mt-10" left={t(HOTEL.place)} right={HOTEL.coordinates} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- ROOMS LIST */
function RoomsList() {
  return (
    <section className="bg-cream">
      {ROOMS.map((room, i) => (
        <RoomRow key={room.id} room={room} index={i} />
      ))}
    </section>
  );
}

function RoomRow({ room, index }: { room: Room; index: number }) {
  const t = useT();
  const flip = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-line">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-10 md:py-28">
        {/* image */}
        <Reveal i={1} className={`md:col-span-7 ${flip ? "md:order-2" : "md:order-1"}`}>
          <RevealImage
            src={room.img}
            alt={t(room.name)}
            className="aspect-[4/3] w-full rounded-2xl shadow-[0_30px_70px_-45px_rgba(20,58,77,0.4)]"
          />
        </Reveal>

        {/* details */}
        <div className={`md:col-span-5 ${flip ? "md:order-1" : "md:order-2"}`}>
          <Reveal>
            <span className="data-label text-sm text-gold">{num}</span>
          </Reveal>

          <h2 className="mt-3 font-display text-[clamp(1.8rem,3.6vw,3rem)] font-medium leading-[1.05] text-navy">
            <MaskText text={t(room.name)} stagger={0.03} />
          </h2>

          <Reveal i={1}>
            <p className="pretty mt-5 max-w-md text-lg leading-relaxed text-ink-soft">{t(room.desc)}</p>
          </Reveal>

          <Reveal i={2} className="mt-8">
            <span className="eyebrow text-ink-soft">{t(C.rooms.featuresLabel)}</span>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {room.features.map((f, fi) => (
                <li key={fi} className="flex items-start gap-3">
                  <Check size={16} strokeWidth={2} className="mt-1 shrink-0 text-gold" />
                  <span className="text-[0.95rem] leading-snug text-navy">{t(f)}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal i={3} className="mt-9">
            <MagneticButton to="/book" variant="outline">
              {t(C.rooms.bookThis)}
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------- RATES NOTE */
function RatesNote() {
  const t = useT();
  return (
    <section className="border-y border-line bg-cream-deep py-14 md:py-16">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-5 px-6 md:flex-row md:items-center md:gap-8 md:px-10">
        <motion.span
          variants={riseIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-gold"
        />
        <Reveal i={1}>
          <p className="pretty max-w-2xl font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium leading-snug text-navy">
            {t(C.rooms.note)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ CLOSING CTA */
function ClosingCTA() {
  const t = useT();
  return (
    <section className="grain relative overflow-hidden bg-navy py-24 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-navy-deep/60 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">{t(C.home.ctaTitle)}</span>
            </Reveal>
            <h2 className="mt-7 max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.0] text-cream">
              <MaskText
                text={t({ bg: "Изберете стая, ние се грижим за останалото.", en: "Choose a room, we'll handle the rest." })}
              />
            </h2>
            <Reveal i={1}>
              <p className="pretty mt-7 max-w-md text-lg leading-relaxed text-cream/70">{t(C.home.ctaSub)}</p>
            </Reveal>
          </div>

          <Reveal i={2} className="shrink-0">
            <MagneticButton to="/book" variant="gold">
              {t(CTA_BOOK)}
            </MagneticButton>
          </Reveal>
        </div>

        <HorizonLine className="mt-16" tone="faint" left={t(HOTEL.town)} right={HOTEL.coordinates} />
      </div>
    </section>
  );
}
