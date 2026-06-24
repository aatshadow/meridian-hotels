import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { PageWrap } from "@/components/PageWrap";
import { MaskText, Reveal, RevealImage } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { Marquee } from "@/components/Marquee";
import { MagneticButton } from "@/components/MagneticButton";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL, PHOTOS, ROOMS, AMENITIES, CTA_BOOK } from "@/lib/hotel";
import { EASE_OUT_EXPO, viewportOnce, riseIn } from "@/lib/motion";

const LOAD = 1.85;

export default function Home() {
  return (
    <PageWrap>
      <Hero />
      <FeatureMarquee />
      <Welcome />
      <RoomsTeaser />
      <AmenitiesSection />
      <GalleryStrip />
      <LocationSection />
    </PageWrap>
  );
}

/* ------------------------------------------------------------------ HERO */
function Hero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img src={PHOTOS.heroSunset} alt="Изглед към плажа и морето, хотел Сърф, Приморско" className="h-full w-full object-cover" />
      </motion.div>
      <div className="vignette absolute inset-0" />
      <div className="grain absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-navy-deep/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[88%] bg-gradient-to-t from-navy-deep/92 via-navy-deep/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/55 via-transparent to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD, duration: 0.8, ease: EASE_OUT_EXPO }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-cream/80">{t(C.home.heroEyebrow)}</span>
        </motion.div>

        <h1 className="max-w-4xl font-display text-[clamp(2.8rem,8.5vw,7rem)] font-medium leading-[0.98] text-cream [text-shadow:0_2px_40px_rgba(13,43,56,0.5)]">
          <MaskText text={t(C.home.heroTitleA)} delay={LOAD + 0.05} />{" "}
          <span className="italic text-gold-foil">
            <MaskText text={t(C.home.heroTitleB)} delay={LOAD + 0.18} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-8 max-w-xl text-lg leading-relaxed text-cream/75"
        >
          {t(C.home.heroSub)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.65, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton to="/book" variant="gold">
            {t(CTA_BOOK)}
          </MagneticButton>
          <MagneticButton to="/rooms" variant="light">
            {t(C.home.heroExplore)}
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: LOAD + 1, duration: 1 }}
        className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 md:right-10 md:flex"
      >
        <span className="data-label text-xs text-cream/55">{HOTEL.coordinates}</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} className="text-gold" />
        </motion.span>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------- FEATURE MARQUEE */
function FeatureMarquee() {
  const t = useT();
  const items = [t(C.home.marquee.a), t(C.home.marquee.b), t(C.home.marquee.c), t(C.home.marquee.d), t(C.home.marquee.e)];
  return (
    <section className="border-y border-line bg-cream py-5">
      <Marquee speed={36}>
        {items.map((x, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl text-navy md:text-3xl">{x}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

/* --------------------------------------------------------------- WELCOME */
function Welcome() {
  const t = useT();
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <span className="eyebrow text-gold">{t(C.home.welcomeEyebrow)}</span>
          </Reveal>
          <h2 className="mt-7 max-w-2xl font-display text-[clamp(1.9rem,4.4vw,3.5rem)] font-medium leading-[1.08] text-navy">
            <MaskText text={t(C.home.welcomeTitle)} stagger={0.03} />
          </h2>
          <Reveal i={1}>
            <p className="pretty mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">{t(C.home.welcomeBody1)}</p>
          </Reveal>
          <Reveal i={2}>
            <p className="pretty mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{t(C.home.welcomeBody2)}</p>
          </Reveal>
        </div>
        <Reveal i={1} className="md:col-span-5">
          <RevealImage src={PHOTOS.terrace} alt="Тераса над морето" className="aspect-[4/5] w-full rounded-2xl" />
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- ROOMS TEASER */
function RoomsTeaser() {
  const t = useT();
  const rooms = ROOMS.slice(0, 3);
  return (
    <section className="bg-cream-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">{t(C.home.roomsEyebrow)}</span>
            </Reveal>
            <h2 className="mt-7 max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.0] text-navy">
              <MaskText text={t(C.home.roomsTitle)} />
            </h2>
          </div>
          <Reveal className="max-w-sm">
            <p className="pretty text-ink-soft">{t(C.home.roomsSub)}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {rooms.map((r, i) => (
            <motion.div key={r.id} variants={riseIn} custom={i} initial="hidden" whileInView="show" viewport={viewportOnce}>
              <Link to="/rooms" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <img
                    src={r.img}
                    alt={t(r.name)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/65 via-transparent to-transparent" />
                  <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl text-cream">{t(r.name)}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            to="/rooms"
            className="group inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-navy"
          >
            {t(C.home.roomsAll)}
            <ArrowUpRight size={15} className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ AMENITIES */
function AmenitiesSection() {
  const t = useT();
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <span className="eyebrow text-gold">{t(C.home.amenitiesEyebrow)}</span>
      </Reveal>
      <h2 className="mt-7 max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.0] text-navy">
        <MaskText text={t(C.home.amenitiesTitle)} />
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {AMENITIES.map((a, i) => (
          <motion.article key={a.id} variants={riseIn} custom={i} initial="hidden" whileInView="show" viewport={viewportOnce} className="group">
            <div className="relative aspect-[5/6] overflow-hidden rounded-xl">
              <img
                src={a.img}
                alt={t(a.name)}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-5 font-display text-2xl text-navy">{t(a.name)}</h3>
            <p className="pretty mt-2 text-sm leading-relaxed text-ink-soft">{t(a.text)}</p>
          </motion.article>
        ))}
      </div>

      <Reveal className="mt-12">
        <Link
          to="/amenities"
          className="group inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-navy"
        >
          {t(C.home.amenitiesAll)}
          <ArrowUpRight size={15} className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Reveal>
    </section>
  );
}

/* -------------------------------------------------------- GALLERY STRIP */
function GalleryStrip() {
  const t = useT();
  return (
    <section className="overflow-hidden bg-cream-deep py-24 md:py-32">
      <div className="mx-auto mb-12 max-w-[1400px] px-6 md:px-10">
        <HorizonLine left={t(C.home.galleryEyebrow)} right={t(C.home.galleryTitle)} />
      </div>
      <Marquee speed={58}>
        {PHOTOS.gallery.map((src, i) => (
          <div key={i} className="mx-3 h-[42vw] max-h-[420px] w-[60vw] max-w-[620px] shrink-0 overflow-hidden rounded-xl md:mx-4">
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

/* ------------------------------------------------------------ LOCATION */
function LocationSection() {
  const t = useT();
  return (
    <section className="grain relative overflow-hidden bg-navy py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">{t(C.home.locationEyebrow)}</span>
            </Reveal>
            <h2 className="mt-7 max-w-xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.0] text-cream">
              <MaskText text={t(C.home.locationTitle)} />
            </h2>
            <Reveal i={1}>
              <p className="pretty mt-7 max-w-md text-lg leading-relaxed text-cream/70">{t(C.home.locationBody)}</p>
            </Reveal>
            <Reveal i={2} className="mt-9">
              <MagneticButton to="/book" variant="gold">
                {t(CTA_BOOK)}
              </MagneticButton>
            </Reveal>
          </div>
          <Reveal i={1}>
            <RevealImage src={PHOTOS.beach} alt="Плажът на Приморско" className="aspect-[4/3] w-full rounded-2xl" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
