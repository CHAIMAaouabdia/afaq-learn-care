import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { Bg } from "../components/Bg";
import { LogoMark } from "../components/LogoMark";
import { tajawal, C } from "../theme";

export const Scene1Hero: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sLabel = spring({ frame: f, fps, config: { damping: 18 } });
  const sT = spring({ frame: f - 20, fps, config: { damping: 18 } });
  const sS = spring({ frame: f - 40, fps, config: { damping: 18 } });
  const sB = spring({ frame: f - 60, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink }}>
      <Bg tone="dark" />
      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
        <div style={{ opacity: sLabel, fontSize: 26, color: C.mint, fontWeight: 700, letterSpacing: 4 }}>الحــــــــــلّ</div>
        <LogoMark size={180} delay={0} />
        <div style={{
          fontSize: 200, fontWeight: 800, letterSpacing: -4, lineHeight: 1,
          transform: `translateY(${interpolate(sT, [0, 1], [40, 0])}px)`, opacity: sT,
          background: `linear-gradient(135deg,#fff,#9AA8C2)`, WebkitBackgroundClip: "text", color: "transparent",
        }}>آفاق</div>
        <div style={{
          fontSize: 42, color: C.muted, fontWeight: 400, textAlign: "center", maxWidth: 1400,
          transform: `translateY(${interpolate(sS, [0, 1], [20, 0])}px)`, opacity: sS,
        }}>منصة رقمية متخصصة في التكفل بذوي صعوبات التعلم</div>
        <div style={{
          display: "flex", gap: 14, opacity: sB,
          transform: `translateY(${interpolate(sB, [0, 1], [20, 0])}px)`,
        }}>
          {["نمائية", "أكاديمية", "متابعة شهرية"].map((t) => (
            <span key={t} style={{
              padding: "14px 28px", borderRadius: 999, fontSize: 26, fontWeight: 700,
              background: "rgba(255,255,255,0.06)", border: `1px solid ${C.line}`,
            }}>{t}</span>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
