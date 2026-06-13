import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { tajawal, C } from "../theme";

const steps = [
  "الاستقبال والاستماع",
  "التقييم الشامل",
  "خطة تكفل فردية",
  "جلسات علاجية",
  "متابعة الأسرة",
  "تقارير شهرية",
  "إعادة التقييم الدورية",
];

export const Scene4Workflow: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 5, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: 100 }}>
      <Bg tone="soft" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [20, 0])}px)` }}>
        <div style={{ fontSize: 28, color: C.mint, fontWeight: 700 }}>كيف نعمل</div>
        <div style={{ fontSize: 80, fontWeight: 800, marginTop: 8 }}>مسار علمي واضح وممنهج</div>
      </div>
      <div style={{ marginTop: 80, display: "flex", flexDirection: "column", gap: 22 }}>
        {steps.map((s, i) => (
          <Sequence key={i} from={15 + i * 7}>
            <Step n={i + 1} t={s} />
          </Sequence>
        ))}
      </div>
    </AbsoluteFill>
  );
};

const Step: React.FC<{ n: number; t: string }> = ({ n, t }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 16 } });
  return (
    <div style={{
      opacity: s, transform: `translateX(${interpolate(s, [0, 1], [-60, 0])}px)`,
      display: "flex", alignItems: "center", gap: 28, padding: "22px 36px",
      borderRadius: 20, background: "rgba(255,255,255,0.05)", border: `1px solid ${C.line}`,
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: 16,
        background: `linear-gradient(135deg,${C.primary},${C.accent})`,
        display: "grid", placeItems: "center", fontSize: 30, fontWeight: 800,
      }}>{n}</div>
      <div style={{ fontSize: 38, fontWeight: 700 }}>{t}</div>
    </div>
  );
};
