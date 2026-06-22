import { motion } from "framer-motion";
import { MapPin, Compass } from "lucide-react";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL, NEARBY } from "@/lib/hotel";
import { MaskText } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { EASE_OUT_EXPO, viewportOnce } from "@/lib/motion";

export default function Location() {
  const t = useT();

  return (
    <section
      id="location"
      className="grain relative scroll-mt-24 overflow-hidden bg-navy-deep py-24 md:py-36"
    >
      {/* faint gold glow, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---------------------------------------------------------- LEFT */}
          <div>
            <motion.span
              className="eyebrow text-sea"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            >
              {t(C.location.eyebrow)}
            </motion.span>

            <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] text-cream">
              <MaskText text={t(C.location.title)} />{" "}
              <span className="script text-gold-foil text-[1.15em]">
                {t(C.location.script)}
              </span>
            </h2>

            <motion.p
              className="mt-6 max-w-md font-sans text-base leading-relaxed text-cream/70"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
            >
              {t(C.location.body)}
            </motion.p>

            <HorizonLine tone="faint" className="my-8 max-w-md" />

            {/* nearby */}
            <span className="eyebrow text-sea">{t(C.location.nearby)}</span>
            <motion.ul
              className="mt-4 flex max-w-md flex-wrap gap-2.5"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {NEARBY.map((place: { bg: string; en: string }, i: number) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 12, scale: 0.96 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
                  }}
                >
                  <span className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-gold/30 px-4 py-1.5 text-sm text-cream/80 transition-colors duration-300 hover:border-gold hover:text-gold-light">
                    <Compass className="h-3.5 w-3.5 text-gold/70" strokeWidth={1.5} />
                    {t(place)}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* directions CTA */}
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 }}
            >
              <a
                href={HOTEL.mapLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold-foil px-6 py-3 text-xs uppercase tracking-wider text-navy-deep shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
              >
                <MapPin className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2} />
                {t(C.location.directions)}
              </a>

              <span className="data-label text-cream/40">{HOTEL.coords}</span>
            </motion.div>
          </div>

          {/* --------------------------------------------------------- RIGHT */}
          <motion.div
            className="gold-frame overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: EASE_OUT_EXPO }}
          >
            <iframe
              src={HOTEL.mapEmbed}
              title="map"
              loading="lazy"
              className="h-[340px] w-full border-0 md:h-[460px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
