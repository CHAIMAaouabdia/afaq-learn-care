import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { tajawal, C } from "../theme";

const features = [
  "حجز المواعيد عبر الإنترنت",
  "ملف رقمي لكل طفل",
  "تقارير شهرية مفصلة",
  "تواصل مباشر مع المختصين",
  "تمارين منزلية متابعة",
  "إشعارات لحظية للأولياء",
];

export const Scene5Platform: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 5, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: "80px 100px", display: "flex", flexDirection: "column", gap: 40 }}>
      <Bg tone="dark" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [20, 0])}px)` }}>
        <div style={{ fontSize: 28, color: C.gold, fontWeight: 700, letterSpacing: 2 }}>المنصة الرقمية</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 10 }}>تجربة سلسة للأولياء والمختصين</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "center", flex: 1 }}>
        <Mockup />
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {features.map((t, i) => (
            <Sequence key={i} from={20 + i * 8}>
              <Feat t={t} />
            </Sequence>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Feat: React.FC<{ t: string }> = ({ t }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 16 } });
  return (
    <div style={{
      opacity: s, transform: `translateX(${interpolate(s, [0, 1], [40, 0])}px)`,
      display: "flex", alignItems: "center", gap: 18, fontSize: 32, fontWeight: 700,
    }}>
      <div style={{ width: 14, height: 14, borderRadius: 99, flexShrink: 0, background: `linear-gradient(135deg,${C.primary},${C.mint})` }} />
      {t}
    </div>
  );
};

const Mockup: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f - 10, fps, config: { damping: 18 } });
  return (
    <div style={{
      opacity: s, transform: `scale(${interpolate(s, [0, 1], [0.9, 1])})`,
      borderRadius: 26, padding: 22, background: "linear-gradient(160deg,#0c1428,#172242)",
      border: `1px solid ${C.line}`, boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
    }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["#ff5f56", "#ffbd2e", "#27c93f"].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: 99, background: c }} />)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {[C.primary, C.accent, C.mint, C.gold, C.primary, C.accent].map((c, i) => (
          <div key={i} style={{
            height: 100, borderRadius: 14,
            background: `linear-gradient(135deg, ${c}40, ${c}10)`,
            border: `1px solid ${c}40`,
          }}>
            <div style={{ height: 10, margin: "16px 16px 8px", borderRadius: 6, background: `${c}80`, width: "50%" }} />
            <div style={{ height: 6, margin: "0 16px", borderRadius: 4, background: "rgba(255,255,255,0.18)" }} />
            <div style={{ height: 6, margin: "8px 16px", borderRadius: 4, background: "rgba(255,255,255,0.1)", width: "70%" }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, height: 150, borderRadius: 14, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.line}`, padding: 16 }}>
        <div style={{ height: 10, width: "30%", background: "rgba(255,255,255,0.2)", borderRadius: 6 }} />
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 96, marginTop: 16 }}>
          {[40, 65, 50, 80, 70, 92, 60].map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, borderRadius: 8,
              background: `linear-gradient(180deg,${C.primary},${C.accent})`,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};
