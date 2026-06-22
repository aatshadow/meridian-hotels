import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { GALLERY, HOTEL } from "@/lib/hotel";
import { Reveal, MaskText, RevealBox } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { Lightbox } from "@/components/Lightbox";

type Span = { col: string; row: string; aspect: string };

const LAYOUT: Span[] = [
  { col: "md:col-span-2", row: "md:row-span-2", aspect: "aspect-[4/5] md:aspect-auto" },
  { col: "md:col-span-2", row: "", aspect: "aspect-[4/3]" },
  { col: "md:col-span-2", row: "", aspect: "aspect-[4/3]" },
  { col: "md:col-span-2", row: "", aspect: "aspect-[4/3]" },
  { col: "md:col-span-2", row: "md:row-span-2", aspect: "aspect-[4/5] md:aspect-auto" },
  { col: "md:col-span-2", row: "", aspect: "aspect-[4/3]" },
  { col: "md:col-span-3", row: "", aspect: "aspect-[16/9]" },
  { col: "md:col-span-3", row: "", aspect: "aspect-[16/9]" },
];

export default function Gallery() {
  const t = useT();
  const imgs = GALLERY.slice(0, 24);
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="scroll-mt-24 bg-cream py-24 md:py-36">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-12 max-w-2xl md:mb-16">
          <Reveal>
            <span className="eyebrow text-sea-deep">{t(C.gallery.eyebrow)}</span>
          </Reveal>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] text-navy">
            <MaskText text={t(C.gallery.titleA)} />{" "}
            <MaskText
              text={t(C.gallery.titleB)}
              delay={0.08}
              className="italic text-gold-foil"
            />
          </h2>
          <Reveal i={1}>
            <p className="pretty mt-5 max-w-xl text-base text-ink-soft md:text-lg">
              {t(C.gallery.sub)}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4 md:[grid-auto-rows:14rem]">
          {imgs.map((src: string, i: number) => {
            const span = LAYOUT[i % LAYOUT.length];
            const alt = t({
              bg: `Хотел Калипсо, Приморско — кадър ${i + 1}`,
              en: `Hotel Calypso, Primorsko — frame ${i + 1}`,
            });
            return (
              <RevealBox key={src} className={`${span.col} ${span.row}`}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={t(C.gallery.open)}
                  className={`group relative block h-full w-full overflow-hidden rounded-2xl ${span.aspect}`}
                >
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-navy-deep/0 to-navy-deep/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute left-3 top-3 data-label text-xs text-cream/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-gold-foil text-white opacity-0 shadow-[var(--shadow-soft)] transition-all duration-500 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                </button>
              </RevealBox>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto mt-16 max-w-[1440px] px-6 md:mt-24 md:px-10">
        <HorizonLine
          left={t(C.gallery.eyebrow)}
          right={t(HOTEL.place)}
          tone="sea"
        />
      </div>

      <Lightbox
        images={imgs}
        index={index}
        onClose={() => setIndex(null)}
        onIndex={setIndex}
      />
    </section>
  );
}
