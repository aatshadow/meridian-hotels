import { useState } from "react";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { GALLERY } from "@/lib/hotel";
import { MaskText, RevealBox } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { Lightbox } from "@/components/Lightbox";
import { EASE_OUT_EXPO, viewportOnce } from "@/lib/motion";

/* Tailwind span classes cycled across the mosaic so a few tiles grow into
   larger plates of midnight + gold. Tuned so the rhythm reads editorially
   rather than as a uniform grid. */
const LAYOUT: string[] = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:row-span-2",
  "",
  "md:col-span-2",
  "",
  "",
  "md:col-span-2 md:row-span-2",
  "",
  "md:row-span-2",
  "",
];

export default function Gallery() {
  const t = useT();
  const imgs = GALLERY.slice(0, 24);
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="scroll-mt-24 bg-navy py-24 md:py-36">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="eyebrow text-sea">{t(C.gallery.eyebrow)}</span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] text-cream">
            <MaskText text={t(C.gallery.title)} />{" "}
            <span className="script text-gold-foil text-[1.15em]">{t(C.gallery.script)}</span>
          </h2>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-12 bg-gold-foil" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gold-foil" />
          </div>
          <p className="mt-6 text-cream/60">{t(C.gallery.sub)}</p>
        </div>

        {/* Mosaic */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-6 md:gap-4 md:[grid-auto-rows:13rem]">
          {imgs.map((src, i) => {
            const n = i + 1;
            const alt = t({
              bg: `Хотел Оман, Приморско — кадър ${n}`,
              en: `Hotel Oman, Primorsko — frame ${n}`,
            });
            return (
              <RevealBox
                key={src}
                className={`group relative gold-frame rounded-xl ${LAYOUT[i % LAYOUT.length]}`}
              >
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={alt}
                  className="relative block h-full min-h-[9rem] w-full overflow-hidden rounded-xl"
                >
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  {/* gold gradient overlay on hover */}
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(2,3,14,0.7) 0%, rgba(159,140,95,0.16) 45%, transparent 75%)",
                    }}
                  />
                  {/* gold index number */}
                  <span className="data-label pointer-events-none absolute bottom-3 left-3 text-[0.7rem] tracking-[0.22em] text-gold-light opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {n.toString().padStart(2, "0")}
                  </span>
                </button>
              </RevealBox>
            );
          })}
        </div>

        {/* Closing flourish */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          className="mt-16 md:mt-24"
        >
          <HorizonLine tone="gold" />
        </motion.div>
      </div>

      <Lightbox images={imgs} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </section>
  );
}
