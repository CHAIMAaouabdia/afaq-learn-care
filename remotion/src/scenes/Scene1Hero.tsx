import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { Bg } from "../components/Bg";
import { LogoMark } from "../components/LogoMark";
import { tajawal, C } from "../theme";

export const Scene1Hero: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sT = spring({ frame: f - 20, fps, config: { damping: 18 } });
  const sS = spring({ frame: f - 40, fps, config: { damping: 18 } });
  const sB = spring({ frame: f - 60, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink }}>
      <Bg tone="dark" />
      <AbsoluteFill style={{ display: "grid", placeItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <LogoMark size={200} delay={0} />
          <div style={{
            marginTop: 40, fontSize: 180, fontWeight: 800, letterSpacing: -4,
            transform: `translateY(${interpolate(sT, [0, 1], [40, 0])}px)`, opacity: sT,
            background: `linear-gradient(135deg,#fff,#9AA8C2)`, WebkitBackgroundClip: "text", color: "transparent",
          }}>آفاق</div>
          <div style={{
            marginTop: 8, fontSize: 44, color: C.muted, fontWeight: 400,
            transform: `translateY(${interpolate(sS, [0, 1], [20, 0])}px)`, opacity: sS,
          }}>منصة رقمية متخصصة في صعوبات التعلم</div>
          <div style={{
            marginTop: 48, display: "inline-flex", gap: 14, opacity: sB,
            transform: `translateY(${interpolate(sB, [0, 1], [20, 0])}px)`,
          }}>
            {["نمائية", "أكاديمية", "متابعة شهرية"].map((t) => (
              <span key={t} style={{
                padding: "14px 28px", borderRadius: 999, fontSize: 26, fontWeight: 700,
                background: "rgba(255,255,255,0.06)", border: `1px solid ${C.line}`,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
