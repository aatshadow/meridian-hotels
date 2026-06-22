/* CALYPSO mark — a sun setting into the sea: a coral sun ring above two
   turquoise wavelets. Two-tone by default; `mono` collapses to currentColor
   for watermarks. Recreated as the brand mark for Hotel Calypso Blue. */
export function CalypsoMark({
  size = 34,
  mono = false,
  className = "",
}: {
  size?: number;
  mono?: boolean;
  className?: string;
}) {
  const sun = mono ? "currentColor" : "#FF6F5B"; // coral
  const wave = mono ? "currentColor" : "#16A9BE"; // turquoise
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {/* sun */}
      <circle cx="32" cy="26" r="12.5" stroke={sun} strokeWidth="3" />
      {/* rays */}
      <g stroke={sun} strokeWidth="3" strokeLinecap="round">
        <path d="M32 5.5v4.5" />
        <path d="M14.5 12.5l3.2 3.2" />
        <path d="M49.5 12.5l-3.2 3.2" />
        <path d="M7 26h4.5" />
        <path d="M52.5 26H57" />
      </g>
      {/* sea */}
      <g stroke={wave} strokeWidth="3" strokeLinecap="round">
        <path d="M6 44c4.3 0 4.3-4 8.7-4s4.3 4 8.7 4 4.3-4 8.6-4 4.3 4 8.7 4 4.3-4 8.6-4 4.4 4 8.7 4" />
        <path d="M10 53c3.7 0 3.7-3.4 7.3-3.4S21 53 24.7 53s3.6-3.4 7.3-3.4S35.6 53 39.3 53s3.6-3.4 7.3-3.4S50.2 53 53.9 53" />
      </g>
    </svg>
  );
}

/* Horizontal lockup for the navigation bar. */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const ink = light ? "#FDFBF6" : "#083C4E";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <CalypsoMark size={36} />
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.6rem] font-semibold leading-none tracking-[0.22em]"
          style={{ color: ink }}
        >
          CALYPSO
        </span>
        <span className="data-label mt-1 text-[0.52rem] tracking-[0.34em] text-sea">BLUE · ПРИМОРСКО</span>
      </span>
    </span>
  );
}

/* Stacked lockup for the preloader / footer. */
export function LogoStacked({ light = true, className = "" }: { light?: boolean; className?: string }) {
  const ink = light ? "#FDFBF6" : "#083C4E";
  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      <CalypsoMark size={66} />
      <span
        className="mt-3 font-display text-4xl font-semibold leading-none tracking-[0.28em]"
        style={{ color: ink }}
      >
        CALYPSO
      </span>
      <span className="data-label mt-2 text-[0.6rem] tracking-[0.46em] text-sea">BLUE · ПРИМОРСКО</span>
    </span>
  );
}
