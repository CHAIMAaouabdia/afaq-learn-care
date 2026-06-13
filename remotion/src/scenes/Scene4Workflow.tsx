import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { tajawal, C } from "../theme";

const steps = [
  { t: "الاستقبال والاستماع", d: "حوار أولي مع الأسرة لفهم الحاجة" },
  { t: "التقييم الشامل", d: "تقييم نمائي وأكاديمي ونفسي" },
  { t: "خطة تكفل فردية", d: "أهداف واضحة وقابلة للقياس" },
  { t: "جلسات علاجية", d: "تدخّل متعدد الاختصاصات" },
  { t: "متابعة الأسرة", d: "إرشاد الوالدين وتمارين منزلية" },
  { t: "تقارير شهرية", d: "متابعة دورية لتطوّر الطفل" },
  { t: "إعادة التقييم", d: "تعديل الخطة كلما لزم الأمر" },
];

export const Scene4Workflow: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 5, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: "80px 100px", display: "flex", flexDirection: "column", gap: 30 }}>
      <Bg tone="soft" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [20, 0])}px)` }}>
        <div style={{ fontSize: 28, color: C.mint, fontWeight: 700, letterSpacing: 2 }}>كيف نعمل</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 10 }}>مسار علمي واضح وممنهج</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1, justifyContent: "center" }}>
        {steps.map((s, i) => (
          <Sequence key={i} from={15 + i * 7}>
            <Step n={i + 1} t={s.t} d={s.d} />
          </Sequence>
        ))}
      </div>
    </AbsoluteFill>
  );
};

const Step: React.FC<{ n: number; t: string; d: string }> = ({ n, t, d }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 16 } });
  return (
    <div style={{
      opacity: s, transform: `translateX(${interpolate(s, [0, 1], [-60, 0])}px)`,
      display: "flex", alignItems: "center", gap: 24, padding: "18px 30px",
      borderRadius: 18, background: "rgba(255,255,255,0.05)", border: `1px solid ${C.line}`,
    }}>
      <div style={{
        width: 58, height: 58, borderRadius: 14, flexShrink: 0,
        background: `linear-gradient(135deg,${C.primary},${C.accent})`,
        display: "grid", placeItems: "center", fontSize: 28, fontWeight: 800,
      }}>{n}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 32, fontWeight: 800 }}>{t}</div>
        <div style={{ fontSize: 22, color: C.muted, marginTop: 2 }}>{d}</div>
      </div>
    </div>
  );
};
