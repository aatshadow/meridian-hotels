import { ChevronRight } from "lucide-react";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { ROOMS } from "@/lib/hotel";
import type { Room } from "@/lib/hotel";
import { Reveal, MaskText, RevealImage } from "@/components/Reveal";
import { scrollToId } from "@/lib/useLenis";

function Filigree() {
  return (
    <span className="flex items-center justify-center gap-3">
      <span className="h-px w-12 bg-gold-foil" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-px w-12 bg-gold-foil" />
    </span>
  );
}

function RoomCard({ room, featured }: { room: Room; featured: boolean }) {
  const t = useT();
  return (
    <Reveal
      className={`gold-frame group overflow-hidden rounded-2xl bg-navy shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${
        featured ? "lg:col-span-3 lg:grid lg:grid-cols-2 lg:items-stretch" : ""
      }`}
    >
      <RevealImage
        src={room.photos[0]}
        alt={t(room.name)}
        className={`overflow-hidden ${featured ? "aspect-[16/9] lg:h-full lg:aspect-auto" : "aspect-[4/3]"}`}
        imgClassName="transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />

      <div className={`flex flex-col p-6 ${featured ? "lg:justify-center lg:p-10" : ""}`}>
        <span className="eyebrow text-sea">
          {t(room.kicker)}
          {room.count ? <span className="text-gold/70"> · {room.count}</span> : null}
        </span>

        <h3
          className={`mt-2 font-display text-cream ${
            featured ? "text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.1]" : "text-2xl"
          }`}
        >
          {t(room.name)}
        </h3>

        <p className={`mt-3 text-sm leading-relaxed text-cream/65 ${featured ? "max-w-md text-[0.95rem]" : ""}`}>
          {t(room.desc)}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {room.features.map((f, i) => (
            <span
              key={i}
              className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold-light"
            >
              {t(f)}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToId("contact")}
          className="group/link mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-gold transition-colors hover:text-gold-light"
        >
          {t(C.rooms.reserveLabel)}
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </button>
      </div>
    </Reveal>
  );
}

export default function Rooms() {
  const t = useT();
  const lastIndex = ROOMS.length - 1;

  return (
    <section id="rooms" className="scroll-mt-24 bg-navy-deep py-24 md:py-36">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-sea">{t(C.rooms.eyebrow)}</span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] text-cream">
            <MaskText text={t(C.rooms.title)} />{" "}
            <span className="script text-gold-foil text-[1.15em]">{t(C.rooms.script)}</span>
          </h2>
          <div className="mt-6">
            <Filigree />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/60">
            {t(C.rooms.sub)}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.id} room={room} featured={i === lastIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
