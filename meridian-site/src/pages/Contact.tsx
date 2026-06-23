import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Mail, Phone, MapPin, Compass } from "lucide-react";

import { PageWrap } from "@/components/PageWrap";
import { MaskText, Reveal } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { MagneticButton } from "@/components/MagneticButton";

import { BRAND } from "@/lib/brand";
import { CASES } from "@/lib/cases";
import { EASE_OUT_EXPO } from "@/lib/motion";

export default function Contact() {
  return (
    <PageWrap>
      <Hero />
      <ContactDetails />
      <WhatHappensNext />
    </PageWrap>
  );
}

/* ----------------------------------------------------------------- HERO */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-sea-deep pb-28 pt-36 md:pb-40 md:pt-44">
      {/* atmospheric side image — anchored right, faded into the deep sea field */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="edge-fade-b pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block"
      >
        <img
          src={CASES[0].images[5]}
          alt="Здрач на терасата над Черно море"
          loading="lazy"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sea-deep via-sea-deep/55 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-gold/30" />
      </motion.div>
      <div className="vignette absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* LEFT — headline + intro + quiet reassurance */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
            className="mb-7 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-gold">( Да започнем )</span>
          </motion.div>

          <h1 className="max-w-2xl font-display text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[0.96] text-pearl">
            <MaskText text="Да напълним" delay={0.1} />
            <br />
            <span className="text-gold-foil italic">
              <MaskText text="хотела ви." delay={0.22} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.5 }}
            className="pretty mt-8 max-w-md text-lg leading-relaxed text-pearl/70"
          >
            Разкажете ни за стаите си и за вашия бряг. До ден ще ви върнем с ясен, честен план как
            да напълним сезона ви — без презентации, без натиск.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.6 }}
            className="mt-12 hidden flex-col gap-5 md:flex"
          >
            <HorizonLine tone="sea" left="( Време за отговор )" right="До 24 часа" />
            <p className="data-label text-xs text-pearl/45">
              {BRAND.descriptor} — {BRAND.home}
            </p>
          </motion.div>
        </div>

        {/* RIGHT — the form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 0.45 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FORM */
const FIELD_LABEL = "data-label mb-2 block text-[0.68rem] uppercase tracking-[0.2em] text-pearl/45";
const FIELD =
  "w-full rounded-lg border border-pearl/15 bg-pearl/[0.04] px-4 py-3.5 font-sans text-pearl placeholder:text-pearl/30 transition-[border,background,box-shadow] duration-300 focus:border-gold/70 focus:bg-pearl/[0.07] focus:outline-none focus:ring-1 focus:ring-gold/40";

function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-pearl/12 bg-sea-night/40 p-6 backdrop-blur-sm md:p-9">
      {/* gold horizon hairline across the top of the card */}
      <div className="absolute inset-x-0 top-0 h-px bg-gold-foil opacity-70" />

      <div className="mb-7 flex items-baseline justify-between gap-4">
        <span className="eyebrow text-pearl/55">( Запази разговор )</span>
        <span className="data-label text-[0.65rem] text-gold">01 / 01</span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
            className="flex min-h-[420px] flex-col items-start justify-center"
          >
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold"
            >
              <Check size={22} strokeWidth={1.8} />
            </motion.span>
            <h3 className="mt-7 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.05] text-pearl">
              Благодарим — ще се свържем с вас до 24 часа.
            </h3>
            <p className="pretty mt-4 max-w-sm text-pearl/60">
              Съобщението ви вече пътува към студиото ни в Приморско. Дотогава можете да се свържете с нас директно.
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="group mt-7 inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-gold"
            >
              {BRAND.email}
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="flex flex-col gap-6"
            noValidate
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={FIELD_LABEL}>
                  Име
                </label>
                <input id="name" name="name" type="text" required placeholder="Вашето име" className={FIELD} />
              </div>
              <div>
                <label htmlFor="hotel" className={FIELD_LABEL}>
                  Име на хотела
                </label>
                <input id="hotel" name="hotel" type="text" required placeholder="Вашият хотел" className={FIELD} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={FIELD_LABEL}>
                Имейл
              </label>
              <input id="email" name="email" type="email" required placeholder="you@hotel.com" className={FIELD} />
            </div>

            <div>
              <label htmlFor="message" className={FIELD_LABEL}>
                Разкажете ни за хотела си
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Къде сте на брега, колко стаи имате и какво би означавал за вас един пълен сезон."
                className={`${FIELD} resize-none`}
              />
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-4">
              <MagneticButton type="submit" variant="gold">
                Изпрати и запази разговор
              </MagneticButton>
              <a
                href={`mailto:${BRAND.email}`}
                className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-pearl/55 transition-colors hover:text-gold"
              >
                или ни пишете на имейл
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <p className="data-label mt-1 text-[0.62rem] leading-relaxed text-pearl/30">
              Без спам. Отговаря ви истински човек, още същия ден.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------- CONTACT DETAILS */
function ContactDetails() {
  const rows = [
    { icon: Mail, label: "Имейл", value: BRAND.email, href: `mailto:${BRAND.email}` },
    {
      icon: Phone,
      label: "Телефон",
      value: BRAND.phoneDisplay,
      href: `tel:${BRAND.phoneDisplay.replace(/\s/g, "")}`,
    },
    { icon: MapPin, label: "Студио", value: BRAND.home, href: undefined as string | undefined },
    { icon: Compass, label: "Координати", value: BRAND.coordinates, href: undefined as string | undefined },
  ];

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <span className="eyebrow text-gold">( Намерете ни )</span>
      </Reveal>
      <h2 className="mt-7 max-w-3xl font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-light leading-[1.06] text-sea-deep">
        <MaskText text="Малко студио на" stagger={0.02} />{" "}
        <span className="text-ink-soft">
          <MaskText text="българското Черноморие." stagger={0.02} delay={0.08} />
        </span>
      </h2>

      <div className="mt-16 border-t border-hairline">
        {rows.map((r, i) => {
          const Icon = r.icon;
          const content = (
            <div className="flex items-center gap-5 py-7 md:gap-8">
              <span className="data-label w-6 shrink-0 text-xs text-gold">0{i + 1}</span>
              <Icon size={18} strokeWidth={1.5} className="shrink-0 text-sea" />
              <span className="data-label hidden w-32 shrink-0 text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft sm:inline">
                {r.label}
              </span>
              <span className="flex-1 font-display text-xl text-sea-deep md:text-2xl">{r.value}</span>
              {r.href && (
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-gold opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              )}
            </div>
          );
          return (
            <Reveal i={i} key={r.label} className="border-b border-hairline">
              {r.href ? (
                <a
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel={r.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group block transition-colors hover:bg-pearl-deep/50"
                >
                  {content}
                </a>
              ) : (
                <div className="group block">{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>

      <HorizonLine className="mt-16" left={BRAND.est} right={BRAND.coordinates} />
    </section>
  );
}

/* ------------------------------------------------------ WHAT HAPPENS NEXT */
const STEPS = [
  { no: "01", title: "Говорим", body: "Спокоен разговор. Разказвате ни за хотела и брега си; ние се вслушваме къде стаите остават празни." },
  { no: "02", title: "Планираме сезона ви", body: "Ясен, честен план — сайт, видео и фотография — изграден около месеците, които най-много трябва да напълните." },
  { no: "03", title: "Ние творим, вие пълните", body: "Създаваме всичко, а после гледаме как обхватът расте седмица след седмица — директни резервации, без нито лев за реклама." },
];

function WhatHappensNext() {
  return (
    <section className="grain relative overflow-hidden bg-sea-deep py-28 md:py-40">
      <div className="vignette absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow text-gold">( Какво следва )</span>
          <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.0] text-pearl">
            <MaskText text="Три стъпки" />
            <br />
            <span className="text-gold-foil italic">
              <MaskText text="до пълен сезон." delay={0.12} />
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-pearl/10 bg-pearl/[0.06] md:mt-20 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal i={i} key={s.no} className="grain relative bg-sea-deep p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="data-label text-sm text-gold">{s.no}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
              </div>
              <h3 className="mt-8 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-light text-pearl">{s.title}</h3>
              <p className="pretty mt-4 text-sm leading-relaxed text-pearl/60">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-xl font-display text-2xl font-light leading-snug text-pearl md:text-3xl">
            <MaskText
              text="Три хотела по Черноморието. Над десет милиона органични гледания. Нека вашият е следващият."
              stagger={0.016}
            />
          </p>
          <MagneticButton href={`mailto:${BRAND.email}`} variant="gold" className="shrink-0">
            Започни разговора
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
