import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

import { PageWrap } from "@/components/PageWrap";
import { MaskText, Reveal } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { Marquee } from "@/components/Marquee";
import { MagneticButton } from "@/components/MagneticButton";
import { Counter } from "@/components/Counter";

import { BRAND, PHOTOS, SERVICES } from "@/lib/brand";
import { EASE_OUT_EXPO, viewportOnce, riseIn } from "@/lib/motion";

/* timing so the hero plays in as the preloader curtain lifts (~1.85s) */
const LOAD = 1.85;

export default function Summer2026() {
  return (
    <PageWrap>
      <Hero />
      <SeasonMarquee />
      <Stakes />
      <Programme />
      <WhyNow />
      <ClosingCTA />
    </PageWrap>
  );
}

/* ----------------------------------------------------------------- HERO */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[660px] w-full overflow-hidden bg-sea-deep">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src={PHOTOS.heroAltDay}
          alt="A summer morning on the Black Sea coast, seen from the hotel balcony"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="vignette absolute inset-0" />
      <div className="grain absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-sea-night/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[88%] bg-gradient-to-t from-sea-night/92 via-sea-night/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-sea-night/55 via-transparent to-transparent" />

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
          <span className="eyebrow text-pearl/80">( The Summer 2026 Programme )</span>
        </motion.div>

        <h1 className="max-w-5xl font-display text-[clamp(2.6rem,8vw,7rem)] font-light leading-[0.94] text-pearl [text-shadow:0_2px_40px_rgba(8,31,41,0.45)]">
          <MaskText text="Make Summer 2026" delay={LOAD + 0.05} />
          <br />
          <span className="text-gold-foil italic">
            <MaskText text="the one that sells itself." delay={LOAD + 0.18} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-8 max-w-xl text-lg leading-relaxed text-pearl/75"
        >
          One complete programme — website, films and photography — built over the winter so your rooms
          are booking out long before the first guest arrives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.65, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton to="/contact" variant="gold">
            Reserve your season
          </MagneticButton>
          <MagneticButton to="/success-cases" variant="light">
            See the results
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: LOAD + 1, duration: 1 }}
        className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 md:right-10 md:flex"
      >
        <span className="data-label text-xs text-pearl/55">{BRAND.coordinates}</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} className="text-gold" />
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------- SEASON MARQUEE */
function SeasonMarquee() {
  const items = ["June", "July", "August", "September", "Booked-out", "Direct bookings", "Black Sea", "Summer 2026"];
  return (
    <section className="border-y border-hairline bg-pearl py-5">
      <Marquee speed={36}>
        {items.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl text-sea-deep md:text-3xl">{t}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

/* -------------------------------------------------------------- STAKES */
function Stakes() {
  const cells = [
    { big: <Counter to={10} />, label: "empty room-nights", sub: "on one quiet summer night", tone: "plain" as const },
    { big: <span>×</span>, label: "the average room rate", sub: "for a night on the coast", tone: "dim" as const },
    { big: <Counter to={1000} prefix="€" />, label: "gone — that night", sub: "illustrative example, not a price", tone: "gold" as const },
  ];

  return (
    <section className="grain relative overflow-hidden bg-sea-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow text-gold">( The math of an empty room )</span>
          <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.0] text-pearl">
            <MaskText text="A night unsold" />
            <br />
            <span className="text-gold-foil italic">
              <MaskText text="is gone for good." delay={0.12} />
            </span>
          </h2>
        </Reveal>

        <Reveal i={1} className="mt-10">
          <p className="pretty max-w-xl text-lg leading-relaxed text-pearl/70">
            Unlike a product on a shelf, a room-night can never be re-sold tomorrow. Every empty bed in
            July is revenue that simply disappears — quietly, every single night of the season.
          </p>
        </Reveal>

        {/* Illustrative counter band */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-pearl/10 bg-pearl/10 md:mt-20 md:grid-cols-3">
          {cells.map((b, i) => (
            <Reveal i={i} key={i} className="bg-sea-night/50 p-8 md:p-10">
              <div
                className={`font-display text-[clamp(2.6rem,6vw,4.4rem)] font-light leading-none ${
                  b.tone === "gold" ? "text-gold-foil" : b.tone === "dim" ? "text-pearl/40" : "text-pearl"
                }`}
              >
                {b.big}
              </div>
              <div className={`mt-3 h-px w-8 ${b.tone === "gold" ? "bg-gold" : "bg-pearl/30"}`} />
              <div className="mt-3 text-sm font-medium text-pearl">{b.label}</div>
              <div className="data-label mt-1 text-xs text-pearl/55">{b.sub}</div>
            </Reveal>
          ))}
        </div>

        <Reveal i={3} className="mt-10">
          <p className="pretty max-w-2xl font-display text-xl font-light italic leading-snug text-pearl/80 md:text-2xl">
            Multiply that across a whole shoulder-season, and the cost of doing nothing dwarfs the cost
            of getting it right.
          </p>
        </Reveal>

        <HorizonLine className="mt-16" tone="sea" left="( Figures shown are illustrative )" right={BRAND.home} />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- PROGRAMME */
type Phase = {
  tag: string;
  window: string;
  title: string;
  blurb: string;
  service: (typeof SERVICES)[number];
  image: string;
};

const PHASES: Phase[] = [
  {
    tag: "Phase 01",
    window: "Winter · Off-season",
    title: "Foundations",
    blurb:
      "We shoot the property and build the cinematic website — the booking funnel that sells the stay before a guest ever arrives.",
    service: SERVICES[0],
    image: PHOTOS.roomFramed,
  },
  {
    tag: "Phase 02",
    window: "Spring · Pre-season",
    title: "Pre-season",
    blurb:
      "Three short films go live and start travelling — putting your rooms in front of the people already dreaming of the coast, weeks before they book.",
    service: SERVICES[1],
    image: PHOTOS.terrace,
  },
  {
    tag: "Phase 03",
    window: "Summer · Peak",
    title: "Peak",
    blurb:
      "Photography, site and films work as one funnel through the busiest weeks — turning quiet scrolls into direct bookings, night after night.",
    service: SERVICES[2],
    image: PHOTOS.pool,
  },
];

function Programme() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <span className="eyebrow text-gold">( What's included )</span>
          </Reveal>
          <h2 className="mt-7 max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.0] text-sea-deep">
            <MaskText text="One programme," />
            <br />
            <MaskText text="three phases." delay={0.1} />
          </h2>
        </div>
        <Reveal className="max-w-sm">
          <p className="pretty text-ink-soft">
            The complete pack, rolled out on the season's clock — so every piece is ready exactly when it
            earns its keep.
          </p>
        </Reveal>
      </div>

      <HorizonLine className="mt-12" left="( The rollout )" right="Foundations → Pre-season → Peak" />

      <div className="mt-14 flex flex-col gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:mt-16">
        {PHASES.map((p, i) => (
          <PhaseRow key={p.tag} phase={p} index={i} reverse={i % 2 === 1} />
        ))}
      </div>

      <Reveal className="mt-14">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {SERVICES.map((s) => (
            <span key={s.no} className="flex items-center gap-2.5">
              <Check size={15} className="text-gold" strokeWidth={2} />
              <span className="data-label text-xs uppercase tracking-[0.16em] text-sea-deep">{s.title}</span>
            </span>
          ))}
          <span className="flex items-center gap-2.5">
            <Check size={15} className="text-gold" strokeWidth={2} />
            <span className="data-label text-xs uppercase tracking-[0.16em] text-sea-deep">All season, one funnel</span>
          </span>
        </div>
      </Reveal>
    </section>
  );
}

function PhaseRow({ phase, index, reverse }: { phase: Phase; index: number; reverse: boolean }) {
  return (
    <motion.article
      variants={riseIn}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="group grid grid-cols-1 items-stretch gap-px bg-hairline md:grid-cols-2"
    >
      <div className={`relative aspect-[16/10] overflow-hidden md:aspect-auto ${reverse ? "md:order-2" : ""}`}>
        <img
          src={phase.image}
          alt={phase.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sea-night/55 via-transparent to-transparent" />
        <span className="data-label absolute left-6 top-6 text-sm text-pearl/90">{phase.tag}</span>
        <span className="data-label absolute bottom-6 left-6 text-xs text-pearl/75">{phase.window}</span>
      </div>

      <div className="flex flex-col justify-center bg-pearl p-8 md:p-12">
        <div className="flex items-center gap-3">
          <span className="font-display text-5xl font-light text-gold-foil md:text-6xl">0{index + 1}</span>
          <span className="data-label text-xs uppercase tracking-[0.16em] text-ink-soft">{phase.window}</span>
        </div>
        <h3 className="mt-5 font-display text-3xl text-sea-deep md:text-4xl">{phase.title}</h3>
        <p className="mt-3 font-display text-lg italic text-sea">{phase.service.title}</p>
        <p className="pretty mt-4 max-w-md text-sm leading-relaxed text-ink-soft">{phase.blurb}</p>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------- WHY NOW */
function WhyNow() {
  const points = [
    {
      k: "A few hotels per coast",
      v: "We take on a limited number of hotels each season, so every property gets the full attention the work demands.",
    },
    {
      k: "The work comes first",
      v: "Filming, building and shooting all happen before the season opens — there is no shortcut once the rooms are already full.",
    },
    {
      k: "Reach that compounds",
      v: "Organic reach builds week over week. The earlier the films go live, the further they travel by July.",
    },
  ];

  return (
    <section className="grain relative overflow-hidden bg-sea-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">( Why now )</span>
            </Reveal>
            <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.0] text-pearl">
              <MaskText text="The season is" />
              <br />
              <span className="text-gold-foil italic">
                <MaskText text="won in winter." delay={0.12} />
              </span>
            </h2>
          </div>
          <Reveal className="max-w-sm">
            <p className="pretty text-pearl/70">
              By the time the first guests arrive, the work is already done. To be full in summer, we have
              to start now.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {points.map((p, i) => (
            <Reveal i={i} key={p.k} className="border-t border-gold/25 pt-6">
              <span className="data-label text-sm text-gold">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl text-pearl">{p.k}</h3>
              <p className="pretty mt-3 text-sm leading-relaxed text-pearl/65">{p.v}</p>
            </Reveal>
          ))}
        </div>

        <HorizonLine className="mt-16" tone="gold" left="( Limited intake )" right="Summer 2026 · Black Sea" />

        <Reveal className="mt-10">
          <p className="balance max-w-3xl font-display text-2xl font-light leading-snug text-pearl md:text-3xl">
            Two small Primorsko hotels. Over ten million organic views. The next coastline opens for a
            handful of hotels — and the season is filling up.
          </p>
          <Link
            to="/success-cases"
            className="group mt-7 inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-pearl"
          >
            See how we filled them
            <ArrowUpRight size={15} className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- CLOSING CTA */
function ClosingCTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <HorizonLine left="( Summer 2026 )" right={BRAND.coordinates} />
      <div className="mt-12 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
        <Reveal>
          <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[0.98] text-sea-deep">
            <MaskText text="Reserve your" />
            <br />
            <span className="text-gold-foil italic">
              <MaskText text="summer." delay={0.1} />
            </span>
          </h2>
        </Reveal>
        <Reveal i={1} className="max-w-sm">
          <p className="pretty text-ink-soft">
            One short call to see if your hotel is the right fit for the season. The work starts long
            before June — and so should the conversation.
          </p>
          <div className="mt-8">
            <MagneticButton to="/contact" variant="gold">
              Book a call
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
