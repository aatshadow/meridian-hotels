/* The seagull mark — recreated from the brand logo (a gull gliding over the bay).
   Single-colour silhouette via currentColor, so it recolours per context. */
export function Seagull({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={(size * 70) / 150}
      viewBox="0 0 150 70"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 44 C26 19 45 19 61 40 C67 47.5 79 47.5 85 40 C101 19 120 19 138 44"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Horizontal lockup for the navigation bar. */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const ink = light ? "#FBF7EF" : "#143A4D";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Seagull size={34} className="text-gold" />
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.45rem] font-semibold leading-none tracking-[0.14em]"
          style={{ color: ink }}
        >
          PRIMO
        </span>
        <span className="data-label mt-1 text-[0.55rem] tracking-[0.42em] text-gold">ПРИМОРСКО</span>
      </span>
    </span>
  );
}

/* Stacked lockup for the preloader / footer. */
export function LogoStacked({ light = true, className = "" }: { light?: boolean; className?: string }) {
  const ink = light ? "#FBF7EF" : "#143A4D";
  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      <Seagull size={64} className="text-gold" />
      <span
        className="mt-3 font-display text-3xl font-semibold leading-none tracking-[0.2em]"
        style={{ color: ink }}
      >
        PRIMO
      </span>
      <span className="data-label mt-2 text-[0.6rem] tracking-[0.5em] text-gold">ПРИМОРСКО</span>
    </span>
  );
}
