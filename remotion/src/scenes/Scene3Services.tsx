import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { tajawal, C } from "../theme";

const services = [
  { t: "تقييم شامل", d: "تشخيص دقيق متعدد التخصصات", c: C.primary },
  { t: "أرطفونيا", d: "اضطرابات اللغة والنطق والتواصل", c: C.accent },
  { t: "علم النفس", d: "دعم نفسي للطفل والأسرة", c: C.mint },
  { t: "بيداغوجيا", d: "خطط أكاديمية فردية", c: C.gold },
  { t: "طب نفسي", d: "متابعة طبية متخصصة", c: C.primary },
  { t: "خدمة اجتماعية", d: "مرافقة الأسرة والمدرسة", c: C.mint },
  { t: "ورشات جماعية", d: "تنمية المهارات الاجتماعية", c: C.accent },
  { t: "متابعة شهرية", d: "تقارير ومراجعات منتظمة", c: C.gold },
];

export const Scene3Services: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 5, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: "80px 100px", display: "flex", flexDirection: "column", gap: 40 }}>
      <Bg tone="dark" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [20, 0])}px)` }}>
        <div style={{ fontSize: 28, color: C.primary, fontWeight: 700, letterSpacing: 2 }}>خدماتنا</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 10 }}>تكفل متكامل ومتعدد الاختصاصات</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22, flex: 1 }}>
        {services.map((s, i) => (
          <Sequence key={i} from={15 + i * 5}>
            <Card t={s.t} d={s.d} c={s.c} />
          </Sequence>
        ))}
      </div>
    </AbsoluteFill>
  );
};

const Card: React.FC<{ t: string; d: string; c: string }> = ({ t, d, c }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 16 } });
  return (
    <div style={{
      opacity: s, transform: `translateY(${interpolate(s, [0, 1], [40, 0])}px) scale(${interpolate(s, [0, 1], [0.95, 1])})`,
      padding: 28, borderRadius: 22,
      background: "rgba(255,255,255,0.05)", border: `1px solid ${C.line}`,
      display: "flex", flexDirection: "column", gap: 14,
    }}>
      <div style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg, ${c}, ${c}80)` }} />
      <div style={{ fontSize: 32, fontWeight: 800 }}>{t}</div>
      <div style={{ fontSize: 20, color: C.muted, lineHeight: 1.5 }}>{d}</div>
    </div>
  );
};
