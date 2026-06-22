import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Ruler, Users, BedDouble, Hash, Check, ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { ROOMS, CTA_BOOK } from "@/lib/hotel";
import { Reveal, MaskText } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { emitEnquiry } from "@/lib/booking";
import { scrollToId } from "@/lib/useLenis";
import { EASE_OUT_EXPO } from "@/lib/motion";

type Pair = { bg: string; en: string };

export default function RoomsSection() {
  const t = useT();
  const [activeRoom, setActiveRoom] = useState<number>(0);
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const room = ROOMS[activeRoom];
  const photos = room.photos;
  const largeSrc = photos[activePhoto] ?? photos[0];

  const selectRoom = (index: number): void => {
    setActiveRoom(index);
    setActivePhoto(0);
  };

  const book = (): void => {
    emitEnquiry({ checkin: "", checkout: "", room: room.id, guests: 2 });
    scrollToId("contact");
  };

  const specs: { label: Pair; value: string }[] = [
    { label: C.rooms.sizeLabel, value: `${room.size} m²` },
    { label: C.rooms.sleepsLabel, value: t(room.sleeps) },
    { label: C.rooms.bedsLabel, value: t(room.beds) },
    { label: C.rooms.unitsLabel, value: String(room.count) },
  ];

  return (
    <section id="rooms" className="scroll-mt-24 bg-ivory py-24 md:py-36">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-sea-deep">{t(C.rooms.eyebrow)}</span>
          </Reveal>
          <h2 className="mt-4 font-display text-navy text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.04]">
            <MaskText text={t(C.rooms.titleA)} />{" "}
            <span className="italic text-gold-foil">
              <MaskText text={t(C.rooms.titleB)} delay={0.08} />
            </span>
          </h2>
          <Reveal i={1}>
            <p className="balance mt-6 max-w-xl font-sans text-base text-ink-soft md:text-lg">
              {t(C.rooms.sub)}
            </p>
          </Reveal>
        </div>

        <Reveal i={1} className="mt-10 md:mt-14">
          <HorizonLine tone="sea" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-12">
          {/* Selector */}
          <Reveal>
            {/* Mobile: horizontal chips */}
            <div className="no-bar -mx-6 flex gap-3 overflow-x-auto px-6 pb-2 lg:hidden">
              {ROOMS.map((r, i) => {
                const on = i === activeRoom;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => selectRoom(i)}
                    className={`shrink-0 rounded-2xl border px-5 py-3 text-left transition-colors ${
                      on
                        ? "border-gold bg-sea-pale text-navy"
                        : "border-sea/30 bg-cream text-ink-soft"
                    }`}
                  >
                    <span className="block font-display text-lg leading-tight">
                      {t(r.name)}
                    </span>
                    <span className="data-label mt-1 block text-xs text-sea-deep">
                      {t(C.rooms.fromLabel)} {r.priceFrom}€
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop: vertical list */}
            <ul className="hidden flex-col gap-2 lg:flex">
              {ROOMS.map((r, i) => {
                const on = i === activeRoom;
                return (
                  <li key={r.id}>
                    <button
                      type="button"
                      onClick={() => selectRoom(i)}
                      className="group relative flex w-full items-center gap-4 rounded-2xl px-5 py-5 text-left transition-colors"
                    >
                      {/* accent bar */}
                      <span
                        className={`absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-gold-foil transition-all duration-300 ${
                          on ? "h-10 opacity-100" : "opacity-0"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-display text-2xl leading-tight transition-colors ${
                            on ? "text-navy" : "text-ink-soft group-hover:text-navy"
                          }`}
                        >
                          {t(r.name)}
                        </span>
                        <span
                          className={`data-label mt-1 block text-xs transition-colors ${
                            on ? "text-gold" : "text-ink-soft/70"
                          }`}
                        >
                          {t(C.rooms.fromLabel)} {r.priceFrom}€
                        </span>
                      </span>
                      <ArrowRight
                        className={`size-4 shrink-0 transition-all ${
                          on
                            ? "translate-x-0 text-gold opacity-100"
                            : "-translate-x-1 text-sea opacity-0 group-hover:opacity-60"
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Preview panel */}
          <Reveal i={1}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
              {/* Image + thumbs */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cream-deep shadow-[var(--shadow-lift)]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.img
                      key={`${room.id}-${largeSrc}`}
                      src={largeSrc}
                      alt={t(room.name)}
                      className="absolute inset-0 size-full object-cover"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                    />
                  </AnimatePresence>
                  <span className="data-label absolute left-4 top-4 rounded-full bg-navy/70 px-3 py-1 text-[0.7rem] text-cream backdrop-blur-sm">
                    {String(activePhoto + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                  </span>
                </div>

                {photos.length > 1 && (
                  <div className="no-bar flex gap-3 overflow-x-auto pb-1">
                    {photos.map((src, i) => {
                      const on = i === activePhoto;
                      return (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setActivePhoto(i)}
                          aria-label={`${t(room.name)} ${i + 1}`}
                          className={`relative aspect-[4/3] w-20 shrink-0 overflow-hidden rounded-xl transition-all md:w-24 ${
                            on
                              ? "ring-2 ring-gold ring-offset-2 ring-offset-ivory"
                              : "opacity-65 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={src}
                            alt=""
                            className="size-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                  className="flex flex-col"
                >
                  <h3 className="font-display text-3xl text-navy md:text-4xl">
                    {t(room.name)}
                  </h3>
                  <p className="balance mt-4 font-sans text-sm text-ink-soft md:text-base">
                    {t(room.desc)}
                  </p>

                  {/* Spec grid */}
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {specs.map((spec, i) => {
                      const Icon = [Ruler, Users, BedDouble, Hash][i];
                      return (
                        <div
                          key={spec.label.en}
                          className="rounded-2xl border border-sea/20 bg-cream px-4 py-3"
                        >
                          <span className="flex items-center gap-1.5 text-sea-deep">
                            <Icon className="size-3.5" aria-hidden="true" />
                            <span className="eyebrow text-[0.65rem]">
                              {t(spec.label)}
                            </span>
                          </span>
                          <span className="data-label mt-1.5 block text-sm font-medium text-navy">
                            {spec.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Feature pills */}
                  {room.features.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {room.features.map((feature: Pair) => (
                        <li
                          key={feature.en}
                          className="flex items-center gap-1.5 rounded-full bg-sea-pale px-3 py-1.5 font-sans text-xs text-sea-deep"
                        >
                          <Check className="size-3" aria-hidden="true" />
                          {t(feature)}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Price + CTA */}
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-sea/20 pt-6">
                    <div className="flex items-end gap-2">
                      <span className="data-label pb-2 text-xs uppercase text-ink-soft">
                        {t(C.rooms.fromLabel)}
                      </span>
                      <span className="font-display text-5xl leading-none text-gold-foil md:text-6xl">
                        {room.priceFrom}€
                      </span>
                      <span className="data-label pb-2 text-xs text-ink-soft">
                        {t(C.rooms.perNight)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={book}
                      className="group inline-flex items-center gap-2 rounded-full bg-gold-foil px-7 py-3.5 font-sans text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
                    >
                      {t(CTA_BOOK)}
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
