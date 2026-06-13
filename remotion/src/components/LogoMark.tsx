import { useCurrentFrame, spring, useVideoConfig } from "remotion";

export const LogoMark: React.FC<{ size?: number; delay?: number }> = ({ size = 180, delay = 0 }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f - delay, fps, config: { damping: 14, stiffness: 120 } });
  return (
    <div style={{
      width: size, height: size, transform: `scale(${s})`,
      display: "grid", placeItems: "center",
      borderRadius: size * 0.28,
      background: "linear-gradient(135deg,#4F8BFF,#7C5CFF 60%,#34D6B0)",
      boxShadow: "0 30px 80px rgba(79,139,255,0.45)",
    }}>
      <svg viewBox="0 0 48 48" width={size * 0.62} height={size * 0.62} fill="none">
        <path d="M6 30 A18 18 0 0 1 42 30" stroke="white" strokeWidth="2.4" strokeLinecap="round" opacity="0.85" />
        <path d="M11 34 A13 13 0 0 1 37 34" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <circle cx="24" cy="30" r="4.2" fill="white" />
        <path d="M24 8 L26 14 L32 13 L27.5 17.5 L30 23 L24 19.5 L18 23 L20.5 17.5 L16 13 L22 14 Z" fill="white" opacity="0.95" />
      </svg>
    </div>
  );
};
