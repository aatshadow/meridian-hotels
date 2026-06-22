import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, Quote } from "lucide-react";

import { PageWrap } from "@/components/PageWrap";
import { MaskText, Reveal, RevealImage } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { Marquee } from "@/components/Marquee";
import { MagneticButton } from "@/components/MagneticButton";
import { Counter } from "@/components/Counter";

import { BRAND } from "@/lib/brand";
import { CASES, HEADLINE_STATS, type Case, type Stat } from "@/lib/cases";
import { EASE_OUT_EXPO, viewportOnce, riseIn } from "@/lib/motion";

/* timing so the hero plays in as the route transition settles */
const LOAD = 0.35;

export default function SuccessCases() {
  return (
    <PageWrap>
      <Hero />
      <ProofMarquee />
      {CASES.map((c, i) => (
        <CaseStudy key={c.slug} c={c} index={i} />
      ))}
      <ClosingCTA />
    </PageWrap>
  );
}

/* =========================================================== shared bits */

/* Split a value like "5.1M" / "+1,171" / "95%" / "€0" / "545K" into
   prefix + animatable number + suffix, mirroring Home's StatBlock logic. */
function AnimatedStat({
  value,
  className = "",
  duration = 2,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const prefix = m?.[1] ?? "";
  const numStr = m?.[2] ?? "";
  const suffix = m?.[3] ?? "";
  const num = parseFloat(numStr.replace(/,/g, ""));
  const decimals = numStr.includes(".") ? 1 : 0;
  const useCounter = !Number.isNaN(num);
  return useCounter ? (
    <Counter to={num} prefix={prefix} suffix={suffix} decimals={decimals} duration={duration} className={className} />
  ) : (
    <span className={className}>{value}</span>
  );
}

/* =================================================================== HERO */
function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-sea-deep pb-24 pt-40 md:pb-32 md:pt-52">
      {/* faint coordinate watermark + horizon glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sea-night/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD, duration: 0.8, ease: EASE_OUT_EXPO }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold">( Proof, in numbers )</span>
        </motion.div>

        <h1 className="max-w-5xl font-display text-[clamp(2.6rem,8vw,7rem)] font-light leading-[0.94] text-pearl">
          <MaskText text="Two hotels." delay={LOAD + 0.05} />{" "}
          <span className="text-gold-foil italic">
            <MaskText text="Ten million views." delay={LOAD + 0.2} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.55, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-9 max-w-xl text-lg leading-relaxed text-pearl/70"
        >
          No invented numbers. These are the real analytics from two small Primorsko
          hotels — every view earned organically, not a euro spent on ads.
        </motion.p>

        {/* aggregate headline stats — the big animated row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.75, duration: 1, ease: EASE_OUT_EXPO }}
          className="mt-16 grid grid-cols-2 gap-y-12 border-t border-pearl/12 pt-12 md:mt-20 md:grid-cols-4 md:gap-8"
        >
          {HEADLINE_STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[clamp(2.8rem,6.5vw,5rem)] font-light leading-none text-pearl">
                <AnimatedStat value={s.value} />
              </div>
              <div className="mt-4 h-px w-8 bg-gold" />
              <div className="mt-4 max-w-[14rem] text-sm font-medium text-pearl/85">{s.label}</div>
              {s.sub && <div className="data-label mt-1 text-xs text-pearl/45">{s.sub}</div>}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: LOAD + 1.1, duration: 1 }}
        className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 md:right-10 md:flex"
      >
        <span className="data-label text-xs text-pearl/45">The receipts</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} className="text-gold" />
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ========================================================== PROOF MARQUEE */
function ProofMarquee() {
  const items = [
    "10M+ organic views",
    "95% reach from new audiences",
    "€0 ad spend",
    "545K on a single reel",
    "+1,171 follows in 28 days",
    "Direct bookings",
    "Primorsko · Black Sea",
  ];
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

/* ============================================================ CASE STUDY */
function CaseStudy({ c, index }: { c: Case; index: number }) {
  // alternate the cinematic rhythm: case 0 = pearl, case 1 = dark sea
  const dark = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className={dark ? "grain relative overflow-hidden bg-sea-deep" : "bg-pearl"}>
      <CoverPanel c={c} num={num} dark={dark} />

      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        {/* THE STORY — headline + problem→outcome */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <Reveal>
              <span className={`eyebrow ${dark ? "text-gold" : "text-gold"}`}>
                ( Case {num} — {c.kind} )
              </span>
            </Reveal>
            <h2
              className={`mt-7 max-w-2xl font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-light leading-[1.05] ${
                dark ? "text-pearl" : "text-sea-deep"
              }`}
            >
              <MaskText text={c.headline} stagger={0.02} />
            </h2>
          </div>
          <div className="md:col-span-5">
            <Reveal i={1}>
              <p className={`pretty text-lg leading-relaxed ${dark ? "text-pearl/65" : "text-ink-soft"}`}>
                {c.summary}
              </p>
            </Reveal>
          </div>
        </div>

        {/* problem → outcome */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border md:mt-20 md:grid-cols-2"
          style={{ borderColor: dark ? "rgba(245,247,241,0.12)" : "var(--color-hairline)" }}
        >
          <Reveal className={dark ? "bg-sea-night/40 p-8 md:p-10" : "bg-pearl-deep p-8 md:p-10"}>
            <span className="data-label text-sm text-gold-deep">The problem</span>
            <p className={`pretty mt-5 text-lg leading-relaxed ${dark ? "text-pearl/55" : "text-ink-soft"}`}>
              {c.problem}
            </p>
          </Reveal>
          <Reveal
            i={1}
            className={dark ? "bg-sea-night/40 p-8 md:p-10" : "bg-pearl-deep p-8 md:p-10"}
            // visually divided by the gridline + gold tick
          >
            <span className="data-label flex items-center gap-2 text-sm text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              The outcome
            </span>
            <p className={`pretty mt-5 text-lg leading-relaxed ${dark ? "text-pearl" : "text-sea-deep"}`}>
              {c.outcome}
            </p>
          </Reveal>
        </div>

        {/* THE REAL NUMBERS */}
        <HorizonLine
          className="mt-24 md:mt-28"
          left={`( ${c.native} · the real numbers )`}
          right={c.year}
          tone={dark ? "sea" : "gold"}
        />
        <div className="mt-12 grid grid-cols-2 gap-y-12 md:mt-16 md:grid-cols-4 md:gap-8">
          {c.stats.map((s, i) => (
            <Reveal i={i} key={s.label}>
              <BigStat s={s} dark={dark} />
            </Reveal>
          ))}
        </div>

        {/* THE PROOF — result screenshots in framed chrome cards */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className={`font-display text-[clamp(1.6rem,3.6vw,2.8rem)] font-light leading-none ${dark ? "text-pearl" : "text-sea-deep"}`}>
                The proof, unedited.
              </h3>
              <span className={`data-label text-xs ${dark ? "text-pearl/45" : "text-ink-soft"}`}>
                Screenshots · {c.name} analytics
              </span>
            </div>
          </Reveal>
          <ResultsGrid results={c.results} name={c.name} dark={dark} />
        </div>

        {/* small image gallery */}
        <div className="mt-24 md:mt-32">
          <HorizonLine
            className="mb-12"
            left="( From the shoot )"
            right={c.location}
            tone={dark ? "sea" : "faint"}
          />
          <GalleryGrid images={c.images} />
        </div>

        {/* THE QUOTE */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <Quote
              size={40}
              strokeWidth={1}
              className={dark ? "text-gold/60" : "text-gold/70"}
            />
            <blockquote
              className={`mt-7 max-w-4xl font-display text-[clamp(1.8rem,4.6vw,3.4rem)] font-light italic leading-[1.12] ${
                dark ? "text-pearl" : "text-sea-deep"
              }`}
            >
              <MaskText text={`“${c.quote}”`} stagger={0.02} />
            </blockquote>
          </Reveal>
          <Reveal i={1} className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className={`data-label text-sm ${dark ? "text-pearl/70" : "text-ink-soft"}`}>{c.quoteBy}</span>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

/* cinematic full-bleed cover with overlaid identity */
function CoverPanel({ c, num, dark }: { c: Case; num: string; dark: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);

  return (
    <div ref={ref} className="relative h-[64vh] min-h-[460px] w-full overflow-hidden md:h-[78vh]">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src={c.cover}
          alt={`${c.name} — ${c.kind} in ${c.location}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="vignette absolute inset-0" />
      <div className="grain absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-sea-night/85 via-sea-night/25 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sea-night/45 to-transparent" />

      <div className="absolute inset-0 mx-auto flex max-w-[1400px] flex-col justify-between px-6 py-8 md:px-10 md:py-12">
        {/* top tide-mark row */}
        <div className="flex items-center justify-between">
          <span className="data-label text-xs text-pearl/75">Case {num} / 02</span>
          <span className="data-label text-xs text-pearl/60">{BRAND.coordinates}</span>
        </div>

        {/* bottom identity block */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="data-label text-sm text-gold-light">{c.native}</span>
            <h2 className="mt-2 font-display text-[clamp(3rem,9vw,7rem)] font-light leading-none text-pearl">
              {c.name}
            </h2>
            <p className="data-label mt-3 text-xs uppercase tracking-[0.2em] text-pearl/65">
              {c.location} — {c.kind}
            </p>
          </div>
          <div className="text-left md:text-right">
            <div className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-light leading-none text-gold-foil">
              {c.stats[0].value}
            </div>
            <div className="data-label mt-2 text-xs text-pearl/70">{c.stats[0].label}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BigStat({ s, dark }: { s: Stat; dark: boolean }) {
  return (
    <div>
      <div
        className={`font-display text-[clamp(2.4rem,5.5vw,4rem)] font-light leading-none ${
          dark ? "text-pearl" : "text-sea-deep"
        }`}
      >
        <AnimatedStat value={s.value} />
      </div>
      <div className="mt-3 h-px w-8 bg-gold" />
      <div className={`mt-3 text-sm font-medium ${dark ? "text-pearl/90" : "text-sea-deep"}`}>{s.label}</div>
      {s.sub && <div className={`data-label mt-1 text-xs ${dark ? "text-pearl/45" : "text-ink-soft"}`}>{s.sub}</div>}
    </div>
  );
}

/* result screenshots wrapped in a faux browser/phone chrome */
function ResultsGrid({ results, name, dark }: { results: string[]; name: string; dark: boolean }) {
  // single screenshot → centred feature; many → responsive grid
  const single = results.length === 1;
  return (
    <div
      className={
        single
          ? "mt-12 flex justify-center md:mt-16"
          : "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:gap-8 lg:grid-cols-3"
      }
    >
      {results.map((src, i) => (
        <motion.figure
          key={src}
          variants={riseIn}
          custom={i}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className={`group overflow-hidden rounded-2xl border shadow-[var(--shadow-soft)] ${
            dark ? "border-pearl/12 bg-sea-night/50" : "border-hairline bg-ivory"
          } ${single ? "w-full max-w-2xl" : ""}`}
        >
          {/* chrome bar */}
          <div
            className={`flex items-center gap-2 border-b px-4 py-3 ${
              dark ? "border-pearl/10" : "border-hairline"
            }`}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
            <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-pearl/25" : "bg-sea-mist/50"}`} />
            <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-pearl/15" : "bg-hairline"}`} />
            <span
              className={`data-label ml-3 truncate text-[0.62rem] uppercase tracking-[0.16em] ${
                dark ? "text-pearl/45" : "text-ink-soft"
              }`}
            >
              {name} — analytics 0{i + 1}
            </span>
          </div>
          <div className={`overflow-hidden ${dark ? "bg-sea-night/30" : "bg-pearl-deep/40"}`}>
            <img
              src={src}
              alt={`${name} analytics screenshot ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
            />
          </div>
        </motion.figure>
      ))}
    </div>
  );
}

/* editorial image grid from the shoot — first image spans wide */
function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {images.map((src, i) => {
        const wide = i === 0;
        return (
          <RevealImage
            key={src}
            src={src}
            alt=""
            className={`overflow-hidden rounded-xl ${
              wide ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
            }`}
            imgClassName="object-cover"
          />
        );
      })}
    </div>
  );
}

/* ============================================================ CLOSING CTA */
function ClosingCTA() {
  return (
    <section className="bg-pearl-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <HorizonLine left="( Your hotel, next )" right={BRAND.coordinates} />
        <div className="mt-14 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-light leading-[1.0] text-sea-deep">
            <MaskText text="These are real rooms," />
            <br />
            <span className="text-gold-foil italic">
              <MaskText text="filled by real numbers." delay={0.12} />
            </span>
          </h2>
          <Reveal className="max-w-sm">
            <p className="pretty text-ink-soft">
              Two hotels on one coastline. The same playbook is ready for yours —
              the website, the films, the photography, working as one funnel.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton to="/contact" variant="gold">
                Book a call
              </MagneticButton>
              <MagneticButton to="/summer-2026" variant="outline">
                Summer 2026
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-sea-deep"
          >
            How we work
            <ArrowUpRight
              size={15}
              className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
