import { useLang } from "@/lib/i18n";

/* BG / EN switch. Bulgarian is primary. */
export function LangToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLang();
  const base = light ? "text-cream/55" : "text-ink-soft";
  const active = light ? "text-cream" : "text-navy";
  return (
    <div className="flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.12em]">
      <button
        onClick={() => setLang("bg")}
        aria-pressed={lang === "bg"}
        className={`transition-colors ${lang === "bg" ? active : base} hover:text-gold`}
      >
        БГ
      </button>
      <span className={light ? "text-cream/25" : "text-line"}>/</span>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`transition-colors ${lang === "en" ? active : base} hover:text-gold`}
      >
        EN
      </button>
    </div>
  );
}
