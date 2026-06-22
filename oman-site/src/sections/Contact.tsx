import type { ComponentType } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Facebook, MapPin, Send } from "lucide-react";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL } from "@/lib/hotel";
import { Reveal, MaskText } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { OmanCrest } from "@/components/Logo";
import { EASE_OUT_EXPO, viewportOnce } from "@/lib/motion";

type IconType = ComponentType<{ className?: string }>;

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: IconType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="gold-frame flex items-center gap-5 rounded-2xl bg-navy-soft/30 p-5 transition-colors duration-300 hover:bg-navy-soft/60"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="eyebrow text-sea">{label}</span>
        <span className="mt-1 truncate text-cream">{value}</span>
      </span>
    </a>
  );
}

export default function Contact() {
  const t = useT();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = [name, phone, email, dates, "", message].join("\n");
    window.location.href =
      HOTEL.mailto +
      "?subject=" +
      encodeURIComponent("Запитване — Хотел Оман") +
      "&body=" +
      encodeURIComponent(body);
  }

  const inputClass =
    "w-full rounded-xl bg-navy-deep/60 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/35 focus:border-gold";
  const goldLineStyle = { borderColor: "var(--gold-line)" } as const;

  return (
    <section
      id="contact"
      className="grain relative scroll-mt-24 overflow-hidden bg-navy py-24 md:py-36"
    >
      <div className="pointer-events-none absolute -right-24 top-10 opacity-[0.05]">
        <OmanCrest size={420} className="text-gold" />
      </div>

      <div className="container relative mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Heading */}
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-sea">{t(C.contact.eyebrow)}</span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] text-cream">
            <MaskText text={t(C.contact.title)} />{" "}
            <span className="script text-gold-foil text-[1.15em]">
              {t(C.contact.script)}
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-cream/65">{t(C.contact.sub)}</p>

          <span className="mt-8 flex items-center gap-3">
            <span className="h-px w-12 bg-gold-foil" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gold-foil" />
          </span>
        </Reveal>

        {/* Columns */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — contact rows */}
          <Reveal i={1} className="flex flex-col gap-4">
            <ContactRow
              icon={Phone}
              label={t(C.contact.call)}
              value={HOTEL.phoneDisplay}
              href={HOTEL.tel}
            />
            <ContactRow
              icon={Mail}
              label={t(C.contact.email)}
              value={HOTEL.email}
              href={HOTEL.mailto}
            />
            <ContactRow
              icon={Facebook}
              label="Facebook"
              value="Hotel Oman Primorsko"
              href={HOTEL.facebook}
              external
            />
            <ContactRow
              icon={MapPin}
              label={t(C.contact.addressLabel)}
              value={t(HOTEL.address)}
              href={HOTEL.mapLink}
              external
            />

            <HorizonLine tone="gold" className="mt-2" />
          </Reveal>

          {/* RIGHT — enquiry form */}
          <Reveal i={2}>
            <motion.form
              onSubmit={handleSubmit}
              className="gold-frame rounded-2xl bg-navy-soft/30 p-6 md:p-9"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            >
              <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-tight text-cream">
                {t(C.contact.formTitle)}
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t(C.contact.fName)}
                    autoComplete="name"
                    className={inputClass}
                    style={goldLineStyle}
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t(C.contact.fPhone)}
                    autoComplete="tel"
                    className={inputClass}
                    style={goldLineStyle}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t(C.contact.fEmail)}
                    autoComplete="email"
                    className={inputClass}
                    style={goldLineStyle}
                  />
                  <input
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder={t(C.contact.fDates)}
                    className={inputClass}
                    style={goldLineStyle}
                  />
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t(C.contact.fMessage)}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  style={goldLineStyle}
                />

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-xl bg-gold-foil px-7 py-4 text-xs uppercase tracking-wider text-navy-deep transition-transform duration-300 hover:-translate-y-0.5 shadow-[var(--shadow-soft)]"
                >
                  <Send className="h-4 w-4" />
                  {t(C.contact.send)}
                </button>

                <p className="mt-1 text-center text-xs text-cream/45">
                  {t(C.contact.sentVia)}
                </p>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
