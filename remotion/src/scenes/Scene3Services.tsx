import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { tajawal, C } from "../theme";

const services = [
  { t: "تقييم شامل", d: "تشخيص دقيق متعدد التخصصات", c: C.primary },
  { t: "أرطفونيا", d: "اضطرابات اللغة والنطق والتواصل", c: C.accent },
  { t: "علم النفس", d: "دعم نفسي للطفل والأسرة", c: C.mint },
  { t: "بيداغوجيا", d: "خطط أكاديمية فردية", c: C.gold },
  { t: "طب نفسي", d: "متابعة طبية متخصصة", c: C.primary },
  { t: "متابعة شهرية", d: "تقارير ومراجعات منتظمة", c: C.mint },
];

export const Scene3Services: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 5, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: 100 }}>
      <Bg tone="dark" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [20, 0])}px)` }}>
        <div style={{ fontSize: 28, color: C.primary, fontWeight: 700 }}>خدماتنا</div>
        <div style={{ fontSize: 80, fontWeight: 800, marginTop: 8 }}>تكفل متكامل ومتعدد الاختصاصات</div>
      </div>
      <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
        {services.map((s, i) => (
          <Sequence key={i} from={20 + i * 6}>
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
      padding: 36, borderRadius: 28, minHeight: 220,
      background: "rgba(255,255,255,0.04)", border: `1px solid ${C.line}`,
    }}>
      <div style={{ width: 60, height: 60, borderRadius: 16, background: `linear-gradient(135deg, ${c}, ${c}80)`, marginBottom: 22 }} />
      <div style={{ fontSize: 40, fontWeight: 800 }}>{t}</div>
      <div style={{ fontSize: 24, color: C.muted, marginTop: 10 }}>{d}</div>
    </div>
  );
};
