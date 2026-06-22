import { Waves, Utensils, Wine, Trees, BellRing, Umbrella } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { AMENITIES, IMG } from "@/lib/hotel";
import { Reveal, MaskText, RevealImage } from "@/components/Reveal";

const ICONS: Record<string, LucideIcon> = {
  waves: Waves,
  utensils: Utensils,
  wine: Wine,
  trees: Trees,
  bell: BellRing,
  umbrella: Umbrella,
};

export default function Amenities() {
  const t = useT();

  return (
    <section id="amenities" className="scroll-mt-24 bg-navy-deep py-24 md:py-36">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow text-sea">{t(C.amenities.eyebrow)}</span>
          </Reveal>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] text-cream">
            <MaskText text={t(C.amenities.title)} />{" "}
            <span className="script text-gold-foil text-[1.15em]">{t(C.amenities.script)}</span>
          </h2>
          <Reveal i={1} className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-foil" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gold-foil" />
          </Reveal>
        </div>

        {/* gold-framed garden band */}
        <Reveal i={2} className="mt-14">
          <RevealImage
            src={IMG.garden[0]}
            alt={t(C.amenities.title)}
            className="gold-frame aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]"
            imgClassName="transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
          />
        </Reveal>

        {/* amenities grid — gold hairline bordered */}
        <div
          className="mt-16 grid grid-cols-1 overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderColor: "var(--gold-line)" }}
        >
          {AMENITIES.map((a, i) => {
            const Icon = ICONS[a.icon] ?? Waves;
            return (
              <Reveal
                key={a.icon}
                i={i}
                className="border-b border-r p-7 transition-colors duration-500 hover:bg-navy-soft/40"
              >
                <div
                  className="flex h-full flex-col border-transparent"
                  style={{ borderColor: "var(--gold-line)" }}
                >
                  <Icon size={26} strokeWidth={1.4} className="text-gold" />
                  <h3 className="mt-4 font-display text-2xl text-cream">{t(a.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{t(a.text)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
