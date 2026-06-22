import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { PageWrap } from "@/components/PageWrap";
import { MaskText, Reveal, RevealImage } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { Marquee } from "@/components/Marquee";
import { MagneticButton } from "@/components/MagneticButton";

import { BRAND, PHOTOS } from "@/lib/brand";
import { CASES } from "@/lib/cases";
import { EASE_OUT_EXPO, viewportOnce, riseIn } from "@/lib/motion";

/* page-load timing so the hero plays in with the route transition */
const LOAD = 0.35;

export default function About() {
  return (
    <PageWrap>
      <Hero />
      <Philosophy />
      <Principles />
      <WhereWeWork />
      <ValuesClose />
    </PageWrap>
  );
}

/* ----------------------------------------------------------------- HERO */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-pearl pt-36 md:pt-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD, duration: 0.8, ease: EASE_OUT_EXPO }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold">( The studio )</span>
        </motion.div>

        <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.4rem,6.4vw,5.6rem)] font-light leading-[0.98] text-sea-deep">
          <MaskText text="A studio on the Black Sea," delay={LOAD + 0.05} />{" "}
          <span className="text-gold-foil italic">
            <MaskText text="built for any coastline." delay={LOAD + 0.2} />
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: LOAD + 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
            className="pretty max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {BRAND.name} is a small hotel growth studio that treats a property like a place worth
            filming. We build the websites, the films and the photography that keep coastal hotels
            full — and keep their bookings direct.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: LOAD + 0.62, duration: 0.9, ease: EASE_OUT_EXPO }}
            className="shrink-0 text-right"
          >
            <div className="data-label text-xs text-ink-soft">{BRAND.est}</div>
            <div className="mt-2 font-display text-lg text-sea-deep">{BRAND.home}</div>
          </motion.div>
        </div>

        <HorizonLine className="mt-12" left="( Who we are )" right={BRAND.coordinates} />
      </div>

      <div className="mt-14 overflow-hidden md:mt-20">
        <motion.div style={{ y: imgY, scale: imgScale }}>
          <RevealImage
            src={PHOTOS.exterior}
            alt={`${BRAND.name} — the seafront facade in Primorsko`}
            className="aspect-[16/9] w-full md:aspect-[21/9]"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- PHILOSOPHY */
function Philosophy() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <span className="eyebrow text-gold">( Philosophy )</span>
      </Reveal>
      <h2 className="mt-8 max-w-5xl font-display text-[clamp(1.9rem,4.6vw,3.8rem)] font-light leading-[1.06] text-sea-deep">
        <MaskText
          text="We treat a hotel like a place worth filming. Rooted in Primorsko, we make coastal hotels impossible to scroll past —"
          stagger={0.016}
        />{" "}
        <span className="text-ink-soft">
          <MaskText text="and we keep their bookings direct." stagger={0.016} delay={0.12} />
        </span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <p className="pretty max-w-2xl text-lg leading-relaxed text-ink-soft">
            A beautiful hotel and an empty feed is a quiet kind of loss. The rooms are there, the
            light is there, the sea is there — and nobody scrolling at home ever sees it. We exist to
            close that gap: to put the place in front of the people already dreaming about the coast,
            and to make the booking the easy part.
          </p>
          <p className="pretty mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            We are deliberately small, and that is the point. Fewer clients, more care — every site,
            every reel, every frame made by people who have stood on that terrace at golden hour.
          </p>
        </Reveal>

        <Reveal i={1} className="md:col-span-5">
          <div className="overflow-hidden rounded-2xl">
            <RevealImage
              src={PHOTOS.terrace}
              alt="A hotel terrace at golden hour over the Black Sea"
              className="aspect-[4/5] w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ PRINCIPLES */
const PRINCIPLES = [
  {
    no: "01",
    title: "Direct over OTA",
    body: "Every funnel is built to win the booking for the hotel — not to feed a commission to a platform that owns the guest.",
  },
  {
    no: "02",
    title: "Organic over ads",
    body: "Reach that compounds week after week, with no ad budget to keep alive. Over ten million views, zero euros spent.",
  },
  {
    no: "03",
    title: "Craft over templates",
    body: "No off-the-shelf themes, no stock reels. Each property is shot, written and built from scratch to feel like itself.",
  },
  {
    no: "04",
    title: "Local eyes, global reach",
    body: "We know this coast intimately and shoot it like locals — then put it in front of the whole internet.",
  },
];

function Principles() {
  return (
    <section className="grain relative overflow-hidden bg-sea-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="eyebrow text-gold">( How we work )</span>
            <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.0] text-pearl">
              <MaskText text="Four rules" />
              <br />
              <span className="text-gold-foil italic">
                <MaskText text="we never bend." delay={0.12} />
              </span>
            </h2>
          </Reveal>
          <Reveal className="max-w-sm">
            <p className="pretty text-pearl/65">
              A method, not a mood. These are the decisions we make on every project, before a single
              frame is shot.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col md:mt-20">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              i={i}
              key={p.no}
              className="grid grid-cols-1 gap-4 border-t border-pearl/10 py-9 md:grid-cols-12 md:items-baseline md:gap-8 md:py-11"
            >
              <span className="data-label col-span-2 text-sm text-gold">{p.no}</span>
              <h3 className="col-span-4 font-display text-2xl font-light text-pearl md:text-[2rem]">
                {p.title}
              </h3>
              <p className="pretty col-span-6 text-base leading-relaxed text-pearl/60">{p.body}</p>
            </Reveal>
          ))}
          <div className="border-t border-pearl/10" />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- WHERE WE WORK */
function WhereWeWork() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <Reveal>
            <span className="eyebrow text-gold">( Where we work )</span>
            <h2 className="mt-7 max-w-xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.02] text-sea-deep">
              <MaskText text="Home is" />{" "}
              <span className="text-gold-foil italic">
                <MaskText text="Primorsko." delay={0.1} />
              </span>
              <br />
              <MaskText text="The coast is the brief." delay={0.18} />
            </h2>
          </Reveal>

          <Reveal i={1}>
            <p className="pretty mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
              We grew up on the Bulgarian Black Sea — the bay, the long light, the shoulder-season
              quiet. It is where we learned to fill rooms, and where the work is still made. From
              here, we travel: the method is built for any coastline that needs to be impossible to
              scroll past.
            </p>
          </Reveal>

          <Reveal i={2} className="mt-12">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
              {[
                { k: "Home base", v: BRAND.home },
                { k: "Coordinates", v: BRAND.coordinates },
                { k: "Coastline", v: "Bulgarian Black Sea" },
                { k: "Reach", v: "Expanding globally" },
              ].map((d) => (
                <div key={d.k} className="bg-pearl p-6">
                  <div className="data-label text-[0.65rem] uppercase tracking-[0.18em] text-gold">
                    {d.k}
                  </div>
                  <div className="mt-2 font-display text-lg leading-snug text-sea-deep">{d.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <RevealImage
                src={PHOTOS.beach}
                alt="The Primorsko beach on the Bulgarian Black Sea coast"
                className="aspect-[4/5] w-full md:aspect-[3/4]"
              />
            </div>
          </Reveal>
          <HorizonLine
            className="mt-7"
            tone="faint"
            left="Primorsko · Black Sea"
            right={BRAND.coordinates}
          />
        </div>
      </div>

      <Quote />
    </section>
  );
}

function Quote() {
  const c = CASES[0];
  return (
    <Reveal className="mt-24 md:mt-32">
      <HorizonLine left="( In their words )" right={c.quoteBy} />
      <blockquote className="mt-10 max-w-4xl font-display text-[clamp(1.6rem,3.6vw,2.8rem)] font-light leading-[1.18] text-sea-deep">
        <span className="text-gold">“</span>
        {c.quote}
        <span className="text-gold">”</span>
      </blockquote>
      <div className="data-label mt-6 text-xs text-ink-soft">{c.quoteBy}</div>
    </Reveal>
  );
}

/* -------------------------------------------------------- VALUES + CLOSE */
const VALUES = [
  "Hospitality",
  "Craft",
  "Reach",
  "Direct bookings",
  "Cinematic",
  "Organic",
  "Local eyes",
];

function ValuesClose() {
  return (
    <section className="grain relative overflow-hidden bg-sea-deep">
      <div className="absolute inset-0">
        <img
          src={PHOTOS.blueHourPool}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
      </div>
      <div className="vignette absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sea-night/80 to-transparent" />

      <div className="relative border-y border-pearl/10 py-6">
        <Marquee speed={38}>
          {VALUES.map((t, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 font-display text-2xl text-pearl/85 md:text-3xl">{t}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 text-center md:px-10 md:py-40">
        <Reveal>
          <span className="eyebrow text-gold">( Let's fill it )</span>
        </Reveal>
        <h2 className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.2rem,5.6vw,4.6rem)] font-light leading-[1.0] text-pearl">
          <MaskText text="If your hotel is worth filming," />{" "}
          <span className="text-gold-foil italic">
            <MaskText text="let's keep it full." delay={0.12} />
          </span>
        </h2>
        <Reveal i={1}>
          <p className="pretty mx-auto mt-8 max-w-xl text-lg leading-relaxed text-pearl/70">
            We take on a small number of coastal hotels each season. If yours could be one of them,
            the next step is a conversation.
          </p>
        </Reveal>

        <motion.div
          variants={riseIn}
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton to="/contact" variant="gold">
            Book a call
          </MagneticButton>
          <MagneticButton to="/success-cases" variant="light">
            See the results
          </MagneticButton>
        </motion.div>

        <Reveal i={3} className="mt-14">
          <a
            href={`mailto:${BRAND.email}`}
            className="group inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-pearl/70"
          >
            {BRAND.email}
            <ArrowUpRight
              size={15}
              className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
