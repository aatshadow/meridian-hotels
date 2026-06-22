import { Waves, Utensils, Umbrella, Wifi, Wind, Baby } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, MaskText, RevealImage } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { AMENITIES, IMG } from "@/lib/hotel";

const ICONS: Record<string, LucideIcon> = { waves: Waves, utensils: Utensils, umbrella: Umbrella, wifi: Wifi, wind: Wind, baby: Baby };

export default function Amenities() {
  const t = useT();
  return (
    <section id="amenities" className="grain relative scroll-mt-24 overflow-hidden bg-navy py-24 text-cream md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-navy-deep/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-sea-mist">{t(C.amenities.eyebrow)}</span>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.8rem)] font-medium leading-[0.98] text-cream">
            <MaskText text={t(C.amenities.titleA)} />{" "}
            <span className="italic text-gold-foil">
              <MaskText text={t(C.amenities.titleB)} delay={0.12} />
            </span>
          </h2>
        </div>

        {/* Pool feature */}
        <div className="mt-16 grid grid-cols-1 items-center gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <RevealImage src={IMG.pool[1]} alt={t(C.amenities.poolTitle)} className="aspect-[5/4] rounded-2xl md:order-2" />
          <div className="md:order-1">
            <span className="data-label text-[0.62rem] uppercase tracking-[0.22em] text-sea">01</span>
            <h3 className="mt-3 font-display text-4xl italic text-cream md:text-5xl">{t(C.amenities.poolTitle)}</h3>
            <p className="pretty mt-5 max-w-md text-[1.02rem] leading-relaxed text-cream/70">{t(C.amenities.poolText)}</p>
          </div>
        </div>

        {/* Restaurant feature */}
        <div className="mt-16 grid grid-cols-1 items-center gap-10 md:mt-24 md:grid-cols-2 md:gap-16">
          <RevealImage src={IMG.restaurant[1]} alt={t(C.amenities.restTitle)} className="aspect-[5/4] rounded-2xl" />
          <div>
            <span className="data-label text-[0.62rem] uppercase tracking-[0.22em] text-sea">02</span>
            <h3 className="mt-3 font-display text-4xl italic text-cream md:text-5xl">{t(C.amenities.restTitle)}</h3>
            <p className="pretty mt-5 max-w-md text-[1.02rem] leading-relaxed text-cream/70">{t(C.amenities.restText)}</p>
          </div>
        </div>

        {/* Amenity grid */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-cream/12 bg-cream/12 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a) => {
            const Icon = ICONS[a.icon] ?? Waves;
            return (
              <Reveal key={a.icon} className="group bg-navy p-7 transition-colors duration-500 hover:bg-navy-soft">
                <Icon size={26} strokeWidth={1.4} className="text-sea transition-colors group-hover:text-gold-light" />
                <h4 className="mt-4 font-display text-2xl text-cream">{t(a.title)}</h4>
                <p className="pretty mt-2 text-sm leading-relaxed text-cream/60">{t(a.text)}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
