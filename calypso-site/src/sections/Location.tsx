import { motion } from "framer-motion";
import { MapPin, Navigation, Compass } from "lucide-react";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL, ATTRACTIONS } from "@/lib/hotel";
import { Reveal, MaskText } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { Weather } from "@/components/Weather";
import { EASE_OUT_EXPO, viewportOnce } from "@/lib/motion";

export default function Location() {
  const t = useT();

  return (
    <section
      id="location"
      className="grain scroll-mt-24 bg-navy-deep py-24 md:py-36 text-cream"
    >
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — destination copy + nearby + CTA */}
          <div>
            <Reveal>
              <span className="eyebrow text-sea-mist">
                {t(C.location.eyebrow)}
              </span>
            </Reveal>

            <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.25rem)] leading-[1.02] text-cream">
              <MaskText text={t(C.location.titleA)} />{" "}
              <span className="italic text-gold-foil">
                <MaskText text={t(C.location.titleB)} delay={0.08} />
              </span>
            </h2>

            <Reveal i={1}>
              <p className="balance mt-6 max-w-md text-base leading-relaxed text-cream/70 md:text-lg">
                {t(C.location.body)}
              </p>
            </Reveal>

            <Reveal i={2} className="mt-10">
              <div className="flex items-center gap-3">
                <Compass className="h-4 w-4 text-sea" aria-hidden="true" />
                <span className="data-label text-sea-mist uppercase">
                  {t(C.location.nearby)}
                </span>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2.5">
                {ATTRACTIONS.map((place: { bg: string; en: string }, i: number) => (
                  <motion.li
                    key={place.en}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.05,
                      ease: EASE_OUT_EXPO,
                    }}
                    className="rounded-full border border-cream/20 px-3 py-1 text-sm text-cream/75 transition-colors duration-300 hover:border-sea"
                  >
                    {t(place)}
                  </motion.li>
                ))}
              </ul>
            </Reveal>

            <Reveal i={3} className="mt-10">
              <a
                href={HOTEL.mapLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold-foil px-6 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t(C.location.directions)}
                <Navigation className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>

              <p className="data-label mt-6 text-cream/45">{HOTEL.coords}</p>
            </Reveal>
          </div>

          {/* RIGHT — live map + live weather */}
          <div className="flex flex-col gap-6">
            <Reveal i={1}>
              <div className="overflow-hidden rounded-2xl border border-cream/10 shadow-[var(--shadow-lift)]">
                <iframe
                  src={HOTEL.mapEmbed}
                  title="map"
                  loading="lazy"
                  className="h-[320px] w-full border-0 md:h-[420px]"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal i={2}>
              <Weather className="w-full" />
            </Reveal>
          </div>
        </div>

        <HorizonLine
          tone="sea"
          left={t(HOTEL.place)}
          right={t(HOTEL.country)}
          className="mt-20 md:mt-28"
        />
      </div>
    </section>
  );
}
