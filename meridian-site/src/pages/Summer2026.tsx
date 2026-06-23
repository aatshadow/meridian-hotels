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
          alt="Лятна сутрин на Черноморието, гледана от хотелския балкон"
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
          <span className="eyebrow text-pearl/80">( Програмата Лято 2026 )</span>
        </motion.div>

        <h1 className="max-w-5xl font-display text-[clamp(2.6rem,8vw,7rem)] font-light leading-[0.94] text-pearl [text-shadow:0_2px_40px_rgba(8,31,41,0.45)]">
          <MaskText text="Превърнете Лято 2026" delay={LOAD + 0.05} />
          <br />
          <span className="text-gold-foil italic">
            <MaskText text="в сезона, който се продава сам." delay={LOAD + 0.18} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-8 max-w-xl text-lg leading-relaxed text-pearl/75"
        >
          Една цялостна програма — сайт, видео и фотография — изградена преди сезона, така че стаите ви
          да се пълнят много преди да пристигне първият гост.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.65, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton to="/contact" variant="gold">
            Запазете сезона си
          </MagneticButton>
          <MagneticButton to="/success-cases" variant="light">
            Виж резултатите
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
  const items = ["Юни", "Юли", "Август", "Септември", "Разпродадено", "Директни резервации", "Черно море", "Лято 2026"];
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
    { big: <Counter to={10} />, label: "празни нощувки", sub: "в една тиха лятна вечер", tone: "plain" as const },
    { big: <span>×</span>, label: "средна цена на стая", sub: "за нощувка на брега", tone: "dim" as const },
    { big: <Counter to={1000} prefix="€" />, label: "изпарени само за една вечер", sub: "примерна сметка, не оферта", tone: "gold" as const },
  ];

  return (
    <section className="grain relative overflow-hidden bg-sea-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow text-gold">( Математиката на празната стая )</span>
          <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.0] text-pearl">
            <MaskText text="Непродадена нощ" />
            <br />
            <span className="text-gold-foil italic">
              <MaskText text="е изгубена завинаги." delay={0.12} />
            </span>
          </h2>
        </Reveal>

        <Reveal i={1} className="mt-10">
          <p className="pretty max-w-xl text-lg leading-relaxed text-pearl/70">
            За разлика от стоката на рафта, една нощувка не може да се продаде на следващия ден. Всяко
            празно легло през юли е приход, който просто се изпарява — тихо, всяка вечер от сезона.
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
            Умножете го по целия слаб сезон и цената на бездействието далеч надхвърля цената на това да
            се свърши както трябва.
          </p>
        </Reveal>

        <HorizonLine className="mt-16" tone="sea" left="( Показаните числа са илюстративни )" right={BRAND.home} />
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
    tag: "Фаза 01",
    window: "Зима · Извън сезона",
    title: "Основи",
    blurb:
      "Заснемаме имота и изграждаме кинематографичния сайт — системата за резервации, която продава престоя още преди гостът да е стъпил при вас.",
    service: SERVICES[0],
    image: PHOTOS.roomFramed,
  },
  {
    tag: "Фаза 02",
    window: "Пролет · Преди сезона",
    title: "Преди сезона",
    blurb:
      "Три кратки видеа излизат и тръгват да обикалят — изправяйки стаите ви пред хората, които вече мечтаят за брега, седмици преди да резервират.",
    service: SERVICES[1],
    image: PHOTOS.terrace,
  },
  {
    tag: "Фаза 03",
    window: "Лято · Пик",
    title: "Пик",
    blurb:
      "Фотография, сайт и видео работят като едно цяло през най-натоварените седмици — превръщайки разсеяното скролване в директни резервации, вечер след вечер.",
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
            <span className="eyebrow text-gold">( Какво включва )</span>
          </Reveal>
          <h2 className="mt-7 max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.0] text-sea-deep">
            <MaskText text="Една програма," />
            <br />
            <MaskText text="три фази." delay={0.1} />
          </h2>
        </div>
        <Reveal className="max-w-sm">
          <p className="pretty text-ink-soft">
            Целият пакет, разгърнат по ритъма на сезона — така че всяка част е готова точно когато ѝ дойде
            времето.
          </p>
        </Reveal>
      </div>

      <HorizonLine className="mt-12" left="( Разгръщането )" right="Основи → Преди сезона → Пик" />

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
            <span className="data-label text-xs uppercase tracking-[0.16em] text-sea-deep">Цял сезон, една система</span>
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
      k: "Само няколко хотела на крайбрежие",
      v: "Всеки сезон поемаме ограничен брой хотели, така че всеки имот получава пълното внимание, което работата изисква.",
    },
    {
      k: "Работата е на първо място",
      v: "Заснемането, изграждането и снимането стават преди сезонът да отвори — пряк път няма, ако искаме стаите да са вече пълни.",
    },
    {
      k: "Обхват, който се натрупва",
      v: "Органичният обхват расте седмица след седмица. Колкото по-рано излязат видеата, толкова по-далеч ще са стигнали до юли.",
    },
  ];

  return (
    <section className="grain relative overflow-hidden bg-sea-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">( Защо сега )</span>
            </Reveal>
            <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.0] text-pearl">
              <MaskText text="Сезонът се" />
              <br />
              <span className="text-gold-foil italic">
                <MaskText text="печели преди да започне." delay={0.12} />
              </span>
            </h2>
          </div>
          <Reveal className="max-w-sm">
            <p className="pretty text-pearl/70">
              Когато пристигнат първите гости, работата вече е свършена. За да е пълно лятото,
              трябва да започнем сега.
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

        <HorizonLine className="mt-16" tone="gold" left="( Ограничен прием )" right="Лято 2026 · Черно море" />

        <Reveal className="mt-10">
          <p className="balance max-w-3xl font-display text-2xl font-light leading-snug text-pearl md:text-3xl">
            Три хотела по Черноморието. Над десет милиона органични гледания. Следващото крайбрежие
            отваря за шепа хотели — и сезонът се разпродава.
          </p>
          <Link
            to="/success-cases"
            className="group mt-7 inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-pearl"
          >
            Виж как ги напълнихме
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
      <HorizonLine left="( Лято 2026 )" right={BRAND.coordinates} />
      <div className="mt-12 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
        <Reveal>
          <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[0.98] text-sea-deep">
            <MaskText text="Запазете своето" />
            <br />
            <span className="text-gold-foil italic">
              <MaskText text="лято." delay={0.1} />
            </span>
          </h2>
        </Reveal>
        <Reveal i={1} className="max-w-sm">
          <p className="pretty text-ink-soft">
            Един кратък разговор, за да видим дали хотелът ви пасва на сезона. Работата започва
            много преди юни — а разговорът трябва да започне още по-рано.
          </p>
          <div className="mt-8">
            <MagneticButton to="/contact" variant="gold">
              Запази разговор
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
