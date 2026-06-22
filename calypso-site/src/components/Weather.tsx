import { useEffect, useState } from "react";
import { Sun, CloudSun, Cloud, CloudFog, CloudRain, CloudSnow, CloudLightning, Wind, Droplets } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useT, useLang } from "@/lib/i18n";
import { C } from "@/lib/content";
import { HOTEL } from "@/lib/hotel";

type Pair = { bg: string; en: string };
type Current = { temp: number; code: number; wind: number };
type Day = { date: string; max: number; min: number; code: number };

function describe(code: number): { icon: LucideIcon; label: Pair } {
  if (code === 0) return { icon: Sun, label: { bg: "Слънчево", en: "Clear" } };
  if (code <= 2) return { icon: CloudSun, label: { bg: "Разкъсана облачност", en: "Partly cloudy" } };
  if (code === 3) return { icon: Cloud, label: { bg: "Облачно", en: "Overcast" } };
  if (code <= 48) return { icon: CloudFog, label: { bg: "Мъгла", en: "Fog" } };
  if (code <= 67) return { icon: CloudRain, label: { bg: "Дъжд", en: "Rain" } };
  if (code <= 77) return { icon: CloudSnow, label: { bg: "Сняг", en: "Snow" } };
  if (code <= 82) return { icon: CloudRain, label: { bg: "Превалявания", en: "Showers" } };
  if (code <= 86) return { icon: CloudSnow, label: { bg: "Снеговалеж", en: "Snow showers" } };
  return { icon: CloudLightning, label: { bg: "Гръмотевици", en: "Thunderstorm" } };
}

const DOW: Pair[] = [
  { bg: "нд", en: "Sun" },
  { bg: "пн", en: "Mon" },
  { bg: "вт", en: "Tue" },
  { bg: "ср", en: "Wed" },
  { bg: "чт", en: "Thu" },
  { bg: "пт", en: "Fri" },
  { bg: "сб", en: "Sat" },
];

/* Live weather for Primorsko via Open-Meteo (no API key). */
export function Weather({ className = "" }: { className?: string }) {
  const t = useT();
  const { lang } = useLang();
  const [cur, setCur] = useState<Current | null>(null);
  const [days, setDays] = useState<Day[]>([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${HOTEL.lat}&longitude=${HOTEL.lon}` +
      `&current=temperature_2m,weather_code,wind_speed_10m` +
      `&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=4&timezone=auto`;
    let alive = true;
    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        if (!alive) return;
        setCur({ temp: Math.round(d.current.temperature_2m), code: d.current.weather_code, wind: Math.round(d.current.wind_speed_10m) });
        const out: Day[] = d.daily.time.slice(1, 4).map((date: string, i: number) => ({
          date,
          max: Math.round(d.daily.temperature_2m_max[i + 1]),
          min: Math.round(d.daily.temperature_2m_min[i + 1]),
          code: d.daily.weather_code[i + 1],
        }));
        setDays(out);
      })
      .catch(() => alive && setErr(true));
    return () => {
      alive = false;
    };
  }, []);

  const now = cur ? describe(cur.code) : null;
  const NowIcon = now?.icon ?? Sun;

  return (
    <div className={`glass-dark rounded-2xl p-6 text-cream ${className}`}>
      <div className="flex items-center justify-between">
        <span className="eyebrow text-sea-mist">{t(C.location.weatherTitle)}</span>
        <span className="data-label text-[0.62rem] text-cream/50">{t(HOTEL.place)}</span>
      </div>

      {err ? (
        <p className="mt-6 font-sans text-sm text-cream/60">
          {lang === "bg" ? "Времето е временно недостъпно." : "Weather is momentarily unavailable."}
        </p>
      ) : !cur ? (
        <div className="mt-6 h-24 animate-pulse rounded-xl bg-cream/10" />
      ) : (
        <>
          <div className="mt-5 flex items-center gap-4">
            <NowIcon size={52} strokeWidth={1.4} className="text-gold-light" />
            <div>
              <div className="font-display text-5xl leading-none text-cream">{cur.temp}°</div>
              <div className="mt-1 font-sans text-sm text-cream/75">{t(now!.label)}</div>
            </div>
            <div className="ml-auto flex flex-col gap-1.5 text-[0.72rem] text-cream/60">
              <span className="inline-flex items-center gap-1.5">
                <Wind size={13} /> {cur.wind} km/h
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Droplets size={13} /> {t(HOTEL.country)}
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-cream/12 pt-4">
            {days.map((d) => {
              const dd = describe(d.code);
              const DIcon = dd.icon;
              const dow = DOW[new Date(d.date + "T00:00:00").getDay()];
              return (
                <div key={d.date} className="flex flex-col items-center gap-1.5 rounded-lg py-1">
                  <span className="data-label text-[0.62rem] uppercase text-cream/55">{t(dow)}</span>
                  <DIcon size={22} strokeWidth={1.5} className="text-sea-mist" />
                  <span className="font-sans text-[0.8rem] text-cream">
                    {d.max}° <span className="text-cream/45">{d.min}°</span>
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
