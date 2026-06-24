import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowUpRight } from "lucide-react";

import { PageWrap } from "@/components/PageWrap";
import { MaskText, Reveal } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { motion } from "framer-motion";

import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL } from "@/lib/hotel";
import { EASE_OUT_EXPO, viewportOnce, riseIn } from "@/lib/motion";

const LOAD = 0.35;

export default function Book() {
  return (
    <PageWrap>
      <Hero />
      <ContactMethods />
      <FindUs />
    </PageWrap>
  );
}

/* ------------------------------------------------------------------ HERO */
function Hero() {
  const t = useT();
  return (
    <section className="grain relative overflow-hidden bg-navy pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-navy-deep/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD, duration: 0.8, ease: EASE_OUT_EXPO }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold">{t(C.book.heroEyebrow)}</span>
        </motion.div>

        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7.5vw,6rem)] font-medium leading-[0.98] text-cream">
          <MaskText text={t(C.book.heroTitleA)} delay={LOAD + 0.05} />{" "}
          <span className="italic text-gold-foil">
            <MaskText text={t(C.book.heroTitleB)} delay={LOAD + 0.18} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOAD + 0.5, duration: 0.9, ease: EASE_OUT_EXPO }}
          className="pretty mt-8 max-w-xl text-lg leading-relaxed text-cream/72"
        >
          {t(C.book.heroSub)}
        </motion.p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- CONTACT METHODS */
function ContactMethods() {
  const t = useT();
  const cards = [
    {
      href: HOTEL.tel,
      icon: Phone,
      title: t(C.book.callTitle),
      sub: t(C.book.callSub),
      value: HOTEL.phoneDisplay,
    },
    {
      href: `mailto:${HOTEL.email}`,
      icon: Mail,
      title: t(C.book.emailTitle),
      sub: t(C.book.emailSub),
      value: HOTEL.email,
    },
    {
      href: HOTEL.viber,
      icon: MessageCircle,
      title: t(C.book.viberTitle),
      sub: t(C.book.viberSub),
      value: HOTEL.phoneDisplay,
    },
  ];

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <span className="eyebrow text-gold">{t(C.book.chooseLabel)}</span>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.a
              key={i}
              href={card.href}
              variants={riseIn}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              data-cursor="hover"
              className="group flex flex-col rounded-2xl border border-line bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_30px_70px_-40px_rgba(20,58,77,0.4)] md:p-9"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-cream">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <h3 className="mt-7 font-display text-2xl text-navy">{card.title}</h3>
              <p className="pretty mt-1.5 text-sm text-ink-soft">{card.sub}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.9rem] text-navy transition-colors group-hover:text-gold">
                {card.value}
                <ArrowUpRight size={15} className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FIND US */
function FindUs() {
  const t = useT();
  return (
    <section className="bg-cream-deep py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow text-gold">{t(C.book.findUs)}</span>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-navy">
            <MaskText text={t(C.book.findUsSub)} stagger={0.03} />
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* details */}
          <div className="md:col-span-5">
            <Reveal>
              <ul className="flex flex-col gap-7">
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1 shrink-0 text-gold" />
                  <div>
                    <div className="data-label text-xs uppercase tracking-[0.18em] text-ink-soft">{t(HOTEL.town)}</div>
                    <div className="mt-1 font-display text-lg text-navy">{t(HOTEL.address)}</div>
                    <div className="data-label mt-1 text-xs text-ink-soft">{HOTEL.coordinates}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock size={20} className="mt-1 shrink-0 text-gold" />
                  <div>
                    <div className="data-label text-xs uppercase tracking-[0.18em] text-ink-soft">{t(C.book.hoursTitle)}</div>
                    <div className="mt-1 font-display text-lg text-navy">{t(HOTEL.reception)}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={20} className="mt-1 shrink-0 text-gold" />
                  <div>
                    <a href={HOTEL.tel} className="font-display text-lg text-navy transition-colors hover:text-gold">
                      {HOTEL.phoneDisplay}
                    </a>
                    <div className="mt-1">
                      <a href={`mailto:${HOTEL.email}`} className="data-label text-xs text-ink-soft transition-colors hover:text-gold">
                        {HOTEL.email}
                      </a>
                    </div>
                  </div>
                </li>
              </ul>

              <a
                href={HOTEL.mapLink}
                target="_blank"
                rel="noreferrer"
                className="group mt-9 inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-navy"
              >
                {t(C.book.openMap)}
                <ArrowUpRight size={15} className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          {/* map */}
          <Reveal i={1} className="md:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-line shadow-[0_30px_70px_-45px_rgba(20,58,77,0.4)]">
              <iframe
                src={HOTEL.mapEmbed}
                title="Hotel Surf — Primorsko map"
                className="h-[320px] w-full md:h-[420px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        <HorizonLine className="mt-16" left={t(HOTEL.place)} right={HOTEL.coordinates} />
      </div>
    </section>
  );
}
