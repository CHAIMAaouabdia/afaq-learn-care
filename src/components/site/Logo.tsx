import { Link } from "@tanstack/react-router";

export function Logo({ size = 44, withText = true, subtitle = true }: { size?: number; withText?: boolean; subtitle?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <LogoMark size={size} />
      {withText && (
        <div className="leading-tight">
          <div className="text-xl font-extrabold tracking-tight text-foreground">آفاق</div>
          {subtitle && <div className="text-[11px] text-muted-foreground">مركز صعوبات التعلم</div>}
        </div>
      )}
    </Link>
  );
}

export function LogoMark({ size = 44, tone = "primary" }: { size?: number; tone?: "primary" | "light" }) {
  const isLight = tone === "light";
  return (
    <span
      style={{ width: size, height: size }}
      className={`relative inline-grid place-items-center rounded-2xl shadow-lg ${
        isLight ? "bg-white/15 backdrop-blur ring-1 ring-white/30" : "bg-gradient-to-br from-primary via-accent to-mint shadow-primary/30"
      }`}
      aria-label="آفاق"
    >
      <svg viewBox="0 0 48 48" width={size * 0.62} height={size * 0.62} fill="none">
        {/* horizon / sunrise arc — "آفاق" means horizons */}
        <path d="M6 30 A18 18 0 0 1 42 30" stroke="white" strokeWidth="2.4" strokeLinecap="round" opacity="0.85" />
        <path d="M11 34 A13 13 0 0 1 37 34" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        {/* sun */}
        <circle cx="24" cy="30" r="4.2" fill="white" />
        {/* spark / growth */}
        <path d="M24 8 L26 14 L32 13 L27.5 17.5 L30 23 L24 19.5 L18 23 L20.5 17.5 L16 13 L22 14 Z" fill="white" opacity="0.95" />
      </svg>
    </span>
  );
}
