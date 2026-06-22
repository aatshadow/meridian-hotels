import { useState } from "react";
import { Search } from "lucide-react";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { ROOMS, GUEST_OPTIONS, CTA_AVAIL } from "@/lib/hotel";
import { emitEnquiry } from "@/lib/booking";
import { scrollToId } from "@/lib/useLenis";

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

/* The booking / availability dock.
   variant "hero" — large frosted panel that floats over the hero photo.
   variant "bar"  — condensed single row for the sticky availability bar. */
export function BookingDock({ variant = "hero" }: { variant?: "hero" | "bar" }) {
  const t = useT();
  const min = todayISO();
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [room, setRoom] = useState("");
  const [guests, setGuests] = useState(2);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    emitEnquiry({ checkin, checkout, room, guests });
    scrollToId("contact");
  }

  const bar = variant === "bar";
  const fieldCls = `w-full bg-transparent font-sans text-navy outline-none placeholder:text-ink-soft/50 ${
    bar ? "text-[0.92rem]" : "text-[1rem]"
  }`;
  const labelCls = "data-label mb-1 block text-[0.58rem] uppercase tracking-[0.18em] text-sea-deep";

  return (
    <form
      onSubmit={submit}
      data-cursor="hover"
      className={`glass grid w-full items-end gap-x-5 gap-y-4 rounded-2xl shadow-[var(--shadow-dock)] ${
        bar
          ? "grid-cols-2 px-4 py-3 sm:grid-cols-[1fr_1fr_1fr_0.8fr_auto] sm:gap-x-4 sm:py-2.5"
          : "grid-cols-2 p-5 md:grid-cols-[1fr_1fr_1fr_0.8fr_auto] md:p-6"
      }`}
    >
      <label className="flex flex-col">
        <span className={labelCls}>{t(C.dock.checkin)}</span>
        <input type="date" min={min} value={checkin} onChange={(e) => setCheckin(e.target.value)} className={fieldCls} />
      </label>

      <label className="flex flex-col">
        <span className={labelCls}>{t(C.dock.checkout)}</span>
        <input
          type="date"
          min={checkin || min}
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
          className={fieldCls}
        />
      </label>

      <label className="flex flex-col">
        <span className={labelCls}>{t(C.dock.room)}</span>
        <select value={room} onChange={(e) => setRoom(e.target.value)} className={`${fieldCls} -ml-0.5 cursor-pointer`}>
          <option value="">{t(C.dock.anyRoom)}</option>
          {ROOMS.map((r) => (
            <option key={r.id} value={r.id}>
              {t(r.name)}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col">
        <span className={labelCls}>{t(C.dock.guests)}</span>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className={`${fieldCls} -ml-0.5 cursor-pointer`}
        >
          {GUEST_OPTIONS.map((g) => (
            <option key={g} value={g}>
              {g} {g === 1 ? t(C.dock.guestWord) : t(C.dock.guestWordPlural)}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        data-cursor="hover"
        className={`group col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gold-foil font-mono uppercase tracking-[0.12em] text-white transition-[filter,transform] duration-300 hover:brightness-105 active:scale-[0.98] sm:col-span-1 ${
          bar ? "px-5 py-3 text-[0.66rem]" : "px-6 py-4 text-[0.72rem] md:py-3.5"
        }`}
      >
        <Search size={bar ? 14 : 16} strokeWidth={2} />
        <span>{t(CTA_AVAIL)}</span>
      </button>
    </form>
  );
}
