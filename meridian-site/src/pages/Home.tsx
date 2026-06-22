import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { PageWrap } from "@/components/PageWrap";
import { MaskText, Reveal, RevealImage } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { Marquee } from "@/components/Marquee";
import { MagneticButton } from "@/components/MagneticButton";
import { Counter } from "@/components/Counter";

import { BRAND, PHOTOS, SERVICES } from "@/lib/brand";
import { CASES, HEADLINE_STATS } from "@/lib/cases";
import { EASE_OUT_EXPO, viewportOnce, riseIn, stagger } from "@/lib/motion";

/* timing so the hero plays in as the preloader curtain lifts (~1.85s) */
const LOAD = 1.85;

export default function Home() {
  return (
    <PageWrap>
      <Hero />
      <ProofMarquee />
      <Statement />
      <Contrast />
      <Offer />
      <Proof />
      <CasesTeaser />
      <GalleryStrip />
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
        <img src={PHOTOS.hero} alt="Golden hour over the Black Sea from the hotel terrace" className="h-full w-full object-cover" />
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
          <span className="eyebrow text-pearl/80">
            {BRAND.descriptor} — {BRAND.home}
          </span>
        </motion.div>

        <h1 className="max-w-5xl font-display text-[clamp(3rem,9vw,7.5rem)] font-light leading-[0.92] text-pearl [text-shadow:0_2px_40px_rgba(8,31,41,0.45)]">
          <MaskText text="We fill" delay={LOAD + 0.05} />{" "}
          <span className="text-gold-foil italic">
            <MaskText text="coastal hotels." delay={LOAD + 0.18} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-8 max-w-xl text-lg leading-relaxed text-pearl/75"
        >
          Cinematic websites, organic reels and photography that turn a quiet scroll into a direct booking — season after season.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.65, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton to="/contact" variant="gold">
            Book a call
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
        <span className="data-label text-xs text-pearl/55">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} className="text-gold" />
        </motion.span>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------- PROOF MARQUEE */
function ProofMarquee() {
  const items = ["5.1M organic views", "95% reach from new audiences", "€0 ad spend", "Direct bookings", "Primorsko · Black Sea", "Booked-out summers"];
  return (
    <section className="border-y border-hairline bg-pearl py-5">
      <Marquee speed={34}>
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

/* ----------------------------------------------------------- STATEMENT */
function Statement() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <span className="eyebrow text-gold">( What we do )</span>
      </Reveal>
      <h2 className="mt-8 max-w-5xl font-display text-[clamp(1.9rem,4.4vw,3.6rem)] font-light leading-[1.08] text-sea-deep">
        <MaskText
          text="An empty room is revenue you can never get back. We build the website, the films and the photography that keep coastal hotels full —"
          stagger={0.018}
        />{" "}
        <span className="text-ink-soft">
          <MaskText text="and keep the bookings direct." stagger={0.018} delay={0.1} />
        </span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
        {[
          { k: "Full all season", v: "We turn quiet shoulder weeks into booked-out months." },
          { k: "Direct, not OTA", v: "Guests who book with you — not through a 20% commission." },
          { k: "Organic, compounding", v: "Reach that grows every week, with no ad budget to feed." },
        ].map((b, i) => (
          <Reveal i={i} key={b.k} className="bg-pearl p-8">
            <span className="data-label text-sm text-gold">0{i + 1}</span>
            <h3 className="mt-4 font-display text-2xl text-sea-deep">{b.k}</h3>
            <p className="pretty mt-3 text-sm leading-relaxed text-ink-soft">{b.v}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ CONTRAST */
function Contrast() {
  const without = ["Rooms unsold outside peak weeks", "Bookings arrive through OTAs, minus commission", "A feed nobody sees", "Guessing whether summer fills"];
  const wth = ["A booking funnel working every night", "Guests booking you directly", "Films the algorithm pushes to new people", "A season that sells out before it starts"];
  return (
    <section className="grain relative overflow-hidden bg-sea-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow text-gold">( The shift )</span>
          <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.0] text-pearl">
            <MaskText text="From hoping it fills" />
            <br />
            <span className="text-gold-foil italic">
              <MaskText text="to watching it sell out." delay={0.12} />
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-20">
          <div>
            <span className="data-label text-sm text-pearl/45">Without a system</span>
            <ul className="mt-7 flex flex-col">
              {without.map((t, i) => (
                <Reveal i={i} key={t} className="border-t border-pearl/10 py-5">
                  <span className="pretty text-lg text-pearl/55">{t}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <span className="data-label text-sm text-gold">With {BRAND.name}</span>
            <ul className="mt-7 flex flex-col">
              {wth.map((t, i) => (
                <Reveal i={i} key={t} className="flex items-start gap-3 border-t border-gold/25 py-5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="pretty text-lg text-pearl">{t}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- OFFER */
const OFFER_IMAGES = [PHOTOS.roomFramed, PHOTOS.exterior, PHOTOS.pool];

function Offer() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <span className="eyebrow text-gold">( The complete pack )</span>
          </Reveal>
          <h2 className="mt-7 max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.0] text-sea-deep">
            <MaskText text="One funnel." />
            <br />
            <MaskText text="Three pieces." delay={0.1} />
          </h2>
        </div>
        <Reveal className="max-w-sm">
          <p className="pretty text-ink-soft">
            Everything a coastal hotel needs to fill itself — built to work together, from the first scroll to the booked night.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.no}
            variants={riseIn}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="group flex flex-col"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src={OFFER_IMAGES[i]}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sea-night/60 via-transparent to-transparent" />
              <span className="data-label absolute left-5 top-5 text-sm text-pearl/90">{s.no}</span>
              <h3 className="absolute bottom-5 left-5 right-5 font-display text-3xl text-pearl">{s.title}</h3>
            </div>
            <div className="mt-6 border-t border-hairline pt-5">
              <p className="font-display text-lg italic text-sea-deep">{s.line}</p>
              <p className="pretty mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <Reveal className="mt-14">
        <Link to="/summer-2026" className="group inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-sea-deep">
          See the Summer 2026 programme
          <ArrowUpRight size={15} className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Reveal>
    </section>
  );
}

/* --------------------------------------------------------------- PROOF */
function Proof() {
  return (
    <section className="bg-pearl-deep py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow text-gold">( The proof )</span>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-8">
          {HEADLINE_STATS.map((s, i) => (
            <Reveal i={i} key={s.label}>
              <StatBlock value={s.value} label={s.label} sub={s.sub} />
            </Reveal>
          ))}
        </div>
        <HorizonLine className="mt-16" left="Real clients · real numbers" right={BRAND.coordinates} />
        <Reveal className="mt-10">
          <p className="max-w-2xl font-display text-2xl font-light leading-snug text-sea-deep md:text-3xl">
            Two small Primorsko hotels. Over ten million organic views. Not a euro spent on ads.
          </p>
          <Link to="/success-cases" className="group mt-7 inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-sea-deep">
            Read the success cases
            <ArrowUpRight size={15} className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function StatBlock({ value, label, sub }: { value: string; label: string; sub?: string }) {
  // split a value like "10M+" / "95%" / "€0" / "+1,171" into number + suffix for the counter
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const prefix = m?.[1] ?? "";
  const numStr = m?.[2] ?? "";
  const suffix = m?.[3] ?? "";
  const num = parseFloat(numStr.replace(/,/g, ""));
  const decimals = numStr.includes(".") ? 1 : 0;
  const useCounter = !Number.isNaN(num);
  return (
    <div>
      <div className="font-display text-[clamp(2.6rem,6vw,4.4rem)] font-light leading-none text-sea-deep">
        {useCounter ? (
          <Counter to={num} prefix={prefix} suffix={suffix} decimals={decimals} />
        ) : (
          value
        )}
      </div>
      <div className="mt-3 h-px w-8 bg-gold" />
      <div className="mt-3 text-sm font-medium text-sea-deep">{label}</div>
      {sub && <div className="data-label mt-1 text-xs text-ink-soft">{sub}</div>}
    </div>
  );
}

/* -------------------------------------------------------- CASES TEASER */
function CasesTeaser() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="flex items-end justify-between">
        <Reveal>
          <span className="eyebrow text-gold">( Selected work )</span>
          <h2 className="mt-7 font-display text-[clamp(2rem,5vw,4rem)] font-light leading-none text-sea-deep">
            <MaskText text="The hotels" />
            <br />
            <MaskText text="we filled." delay={0.1} />
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {CASES.map((c, i) => (
          <Reveal i={i} key={c.slug}>
            <Link to="/success-cases" className="group block">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                <img
                  src={c.cover}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sea-night/75 via-sea-night/10 to-transparent" />
                <div className="absolute left-6 top-6 flex items-center gap-3">
                  <span className="data-label text-xs text-pearl/80">{c.native}</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-4xl text-pearl">{c.name}</h3>
                    <p className="data-label mt-1 text-xs text-pearl/70">{c.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl text-gold-foil">{c.stats[0].value}</div>
                    <div className="data-label text-[0.65rem] text-pearl/70">{c.stats[0].label}</div>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------- GALLERY STRIP */
function GalleryStrip() {
  const row = PHOTOS.gallery;
  return (
    <section className="overflow-hidden bg-pearl pb-28 md:pb-40">
      <div className="mx-auto mb-12 max-w-[1400px] px-6 md:px-10">
        <HorizonLine left="( Photography )" right="Chaica · Primorsko" />
      </div>
      <Marquee speed={55}>
        {row.map((src, i) => (
          <div key={i} className="mx-3 h-[42vw] max-h-[420px] w-[60vw] max-w-[640px] shrink-0 overflow-hidden rounded-xl md:mx-4">
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
