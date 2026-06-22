import { motion } from "framer-motion";
import { Reveal, MaskText, RevealImage } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { HorizonLine } from "@/components/HorizonLine";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL, IMG } from "@/lib/hotel";
import { viewportOnce } from "@/lib/motion";

export default function About() {
  const t = useT();
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* text */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-sea-deep">{t(C.about.eyebrow)}</span>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[0.98] text-navy">
              <MaskText text={t(C.about.titleA)} />{" "}
              <span className="italic text-gold-foil">
                <MaskText text={t(C.about.titleB)} delay={0.12} />
              </span>
            </h2>

            <Reveal i={1} className="pretty mt-8 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
              <p>{t(C.about.body1)}</p>
            </Reveal>
            <Reveal i={2} className="pretty mt-4 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
              <p>{t(C.about.body2)}</p>
            </Reveal>

            {/* stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-9">
              <Stat value={<Counter to={33} />} label={t(C.about.stats[0].label)} />
              <Stat value="0 м" label={t(C.about.stats[1].label)} />
              <Stat value={<Counter to={60} />} label={t(C.about.stats[2].label)} />
            </div>
          </div>

          {/* image collage */}
          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <RevealImage
                src={IMG.facade[0]}
                alt={t(HOTEL.name)}
                className="col-span-8 aspect-[4/5] rounded-2xl"
              />
              <div className="col-span-4 flex flex-col gap-4">
                <RevealImage src={IMG.pool[0]} alt="" className="aspect-[3/4] rounded-2xl" />
                <RevealImage src={IMG.lobby[0]} alt="" className="aspect-[3/4] rounded-2xl" />
              </div>
            </div>
            {/* floating turquoise card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 left-4 hidden rounded-2xl bg-navy px-7 py-5 shadow-[var(--shadow-lift)] md:block"
            >
              <span className="data-label text-[0.6rem] uppercase tracking-[0.2em] text-sea-mist">{t(HOTEL.place)} · {t(HOTEL.country)}</span>
              <div className="mt-1 font-display text-2xl italic text-cream">Calypso Blue</div>
            </motion.div>
          </div>
        </div>

        <HorizonLine left={t(HOTEL.place)} right={HOTEL.coords} className="mt-24" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-[2.6rem] font-medium leading-none text-navy">{value}</div>
      <div className="data-label mt-2 text-[0.62rem] uppercase leading-snug tracking-[0.12em] text-ink-soft">{label}</div>
    </div>
  );
}
