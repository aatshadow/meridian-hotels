import { BRAND } from "@/lib/brand";

/* The mark: a sun/porthole bisected by the horizon line — the studio's signature */
export function LogoMark({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="18" r="11" stroke="url(#mlg)" strokeWidth="1.4" />
      <path d="M2.5 23.5H37.5" stroke="url(#mlg)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M20 23.5V32" stroke="url(#mlg)" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <defs>
        <linearGradient id="mlg" x1="3" y1="7" x2="37" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EAD49A" />
          <stop offset="0.5" stopColor="#C8A24E" />
          <stop offset="1" stopColor="#9A7426" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ light = false, size = 26, className = "" }: { light?: boolean; size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size + 4} />
      <span
        className="font-display text-[1.3rem] leading-none tracking-[0.04em]"
        style={{ color: light ? "#FAF7F1" : "#0E2F3D" }}
      >
        {BRAND.name}
      </span>
    </span>
  );
}
