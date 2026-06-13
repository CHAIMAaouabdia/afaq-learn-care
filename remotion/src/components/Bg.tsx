import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { C } from "../theme";

export const Bg: React.FC<{ tone?: "dark" | "deep" | "soft" }> = ({ tone = "dark" }) => {
  const f = useCurrentFrame();
  const t = f / 30;
  const x = 50 + Math.sin(t * 0.4) * 8;
  const y = 50 + Math.cos(t * 0.3) * 8;
  const grads: Record<string, string> = {
    dark: `radial-gradient(1200px 800px at ${x}% ${y}%, ${C.primary}33, transparent 60%), radial-gradient(1000px 700px at ${100 - x}% ${100 - y}%, ${C.accent}26, transparent 60%), linear-gradient(135deg, ${C.bg} 0%, ${C.bg2} 100%)`,
    deep: `radial-gradient(1200px 900px at 50% 30%, ${C.accent}40, transparent 60%), linear-gradient(180deg, #0a0f1f, #131c34)`,
    soft: `radial-gradient(1400px 900px at 30% 40%, ${C.mint}33, transparent 60%), linear-gradient(160deg, #0d1730, #1a2547)`,
  };
  return (
    <AbsoluteFill style={{ background: grads[tone] }}>
      <AbsoluteFill style={{
        backgroundImage: `linear-gradient(${C.line} 1px, transparent 1px), linear-gradient(90deg, ${C.line} 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
        opacity: 0.5,
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
      }} />
      <AbsoluteFill style={{ opacity: interpolate(f, [0, 20], [0, 1], { extrapolateRight: "clamp" }) }} />
    </AbsoluteFill>
  );
};
