import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL, IMG } from "@/lib/hotel";
import { Reveal, MaskText, RevealImage } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";

export default function About() {
  const t = useT();

  return (
    <section
      id="about"
      className="grain relative scroll-mt-24 overflow-hidden bg-navy py-24 md:py-36"
    >
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — editorial copy */}
          <div>
            <Reveal>
              <span className="eyebrow text-sea">{t(C.about.eyebrow)}</span>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] text-cream">
                <MaskText text={t(C.about.title)} />{" "}
                <span className="script text-gold-foil text-[1.15em]">
                  {t(C.about.script)}
                </span>
              </h2>
            </Reveal>

            <Reveal i={1} className="mt-8 max-w-md space-y-5">
              <p className="text-cream/70">{t(C.about.body1)}</p>
              <p className="text-cream/70">{t(C.about.body2)}</p>
            </Reveal>

            {/* Pull-quote */}
            <Reveal i={2} className="mt-10 max-w-md">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold-foil" />
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                <span className="h-px w-12 bg-gold-foil" />
              </div>
              <p className="script mt-6 text-2xl leading-snug text-gold md:text-3xl">
                {t(C.about.quote)}
              </p>
            </Reveal>

            {/* Stat row — gold-framed distances */}
            <Reveal i={3} className="mt-12 max-w-md">
              <div className="gold-frame grid grid-cols-3 rounded-2xl shadow-[var(--shadow-soft)]">
                {HOTEL.distances.map((d, idx) => (
                  <div
                    key={t(d.label)}
                    className={`px-4 py-6 text-center ${idx > 0 ? "border-l" : ""}`}
                    style={{ borderColor: "var(--gold-line)" }}
                  >
                    <div className="font-display text-3xl text-gold">{d.value}</div>
                    <div className="mt-2 text-xs leading-snug text-cream/60">
                      {t(d.label)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — image composition */}
          <Reveal i={1} className="relative">
            <RevealImage
              src={IMG.facadeDusk}
              alt={t(HOTEL.name)}
              className="gold-frame aspect-[4/5] w-full rounded-2xl shadow-[var(--shadow-lift)]"
            />
            <RevealImage
              src={IMG.pool[0]}
              alt={t(HOTEL.place)}
              className="gold-frame absolute -bottom-10 -left-10 hidden aspect-[4/3] w-[44%] rounded-xl shadow-[var(--shadow-lift)] md:block"
            />
          </Reveal>
        </div>

        <HorizonLine
          tone="gold"
          left={t(HOTEL.place)}
          right={HOTEL.coords}
          className="mt-24"
        />
      </div>
    </section>
  );
}
