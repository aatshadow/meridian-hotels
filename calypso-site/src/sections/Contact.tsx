import { useEffect, useState } from "react";
import { Phone, Mail, Facebook, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal, MaskText } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL, ROOMS } from "@/lib/hotel";
import { onEnquiry } from "@/lib/booking";

export default function Contact() {
  const t = useT();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");

  // pre-fill from the booking dock
  useEffect(() => {
    return onEnquiry((e) => {
      const room = ROOMS.find((r) => r.id === e.room);
      const roomLabel = room ? t(room.name) : t(C.dock.anyRoom);
      const range = e.checkin && e.checkout ? `${e.checkin} → ${e.checkout}` : e.checkin || "";
      setDates(range);
      setMessage(
        t({
          bg: `Здравейте, бих искал/а да проверя наличност за ${roomLabel}, ${e.guests} гости${range ? `, ${range}` : ""}.`,
          en: `Hello, I'd like to check availability for ${roomLabel}, ${e.guests} guests${range ? `, ${range}` : ""}.`,
        }),
      );
    });
  }, [t]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = t({ bg: `Запитване — Хотел Калипсо Блу`, en: `Enquiry — Hotel Calypso Blue` });
    const body = [
      `${t(C.contact.fName)}: ${name}`,
      `${t(C.contact.fPhone)}: ${phone}`,
      `${t(C.contact.fEmail)}: ${email}`,
      `${t(C.contact.fDates)}: ${dates}`,
      "",
      message,
    ].join("\n");
    window.location.href = `${HOTEL.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputCls =
    "w-full rounded-xl border border-line bg-ivory px-4 py-3 font-sans text-[0.95rem] text-navy outline-none transition-colors placeholder:text-ink-soft/40 focus:border-sea";

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-sea-deep">{t(C.contact.eyebrow)}</span>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.6rem)] font-medium leading-[0.96] text-navy">
            <MaskText text={t(C.contact.titleA)} />{" "}
            <span className="italic text-gold-foil">
              <MaskText text={t(C.contact.titleB)} delay={0.12} />
            </span>
          </h2>
          <Reveal i={1} className="pretty mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            <p>{t(C.contact.sub)}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* contact methods */}
          <div className="flex flex-col gap-4">
            <ContactCard icon={Phone} label={t(C.contact.call)} value={HOTEL.phone1Display} href={HOTEL.phone1Tel} />
            <ContactCard icon={Phone} label={t(C.contact.call)} value={HOTEL.phone2Display} href={HOTEL.phone2Tel} />
            <ContactCard icon={Mail} label={t(C.contact.email)} value={HOTEL.email} href={HOTEL.mailto} />
            <ContactCard icon={Facebook} label="Facebook" value="Calypso Primorsko" href={HOTEL.facebook} external />
            <ContactCard icon={MapPin} label={t(C.contact.addressLabel)} value={t(HOTEL.address)} href={HOTEL.mapLink} external />
          </div>

          {/* enquiry form */}
          <Reveal className="rounded-3xl border border-line bg-cream-deep/40 p-6 md:p-9">
            <h3 className="font-display text-3xl italic text-navy">{t(C.contact.formTitle)}</h3>
            <form onSubmit={submit} className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input className={inputCls} placeholder={t(C.contact.fName)} value={name} onChange={(e) => setName(e.target.value)} required />
                <input className={inputCls} placeholder={t(C.contact.fPhone)} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input className={inputCls} type="email" placeholder={t(C.contact.fEmail)} value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className={inputCls} placeholder={t(C.contact.fDates)} value={dates} onChange={(e) => setDates(e.target.value)} />
              </div>
              <textarea className={`${inputCls} min-h-[120px] resize-none`} placeholder={t(C.contact.fMessage)} value={message} onChange={(e) => setMessage(e.target.value)} />
              <button
                type="submit"
                data-cursor="hover"
                className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gold-foil px-7 py-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-white transition-[filter,transform] duration-300 hover:brightness-105 active:scale-[0.99]"
              >
                {t(C.contact.send)}
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <span className="data-label text-center text-[0.62rem] text-ink-soft/70">{t(C.contact.sentVia)}</span>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      data-cursor="hover"
      className="group flex items-center gap-5 rounded-2xl border border-line bg-ivory p-5 transition-all duration-300 hover:border-sea hover:shadow-[var(--shadow-soft)]"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sea-pale text-sea-deep transition-colors group-hover:bg-sea group-hover:text-white">
        <Icon size={19} strokeWidth={1.6} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="data-label block text-[0.6rem] uppercase tracking-[0.18em] text-ink-soft">{label}</span>
        <span className="mt-0.5 block truncate font-sans text-[1.02rem] text-navy">{value}</span>
      </span>
      <ArrowUpRight size={18} className="shrink-0 text-ink-soft/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sea" />
    </a>
  );
}
