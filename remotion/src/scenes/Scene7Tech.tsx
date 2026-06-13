import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { LogoMark } from "../components/LogoMark";
import { tajawal, C } from "../theme";

const tech = [
  { t: "React 19 + TypeScript", d: "واجهات حديثة وآمنة" },
  { t: "TanStack Start", d: "تصيير سريع من الخادم" },
  { t: "Tailwind CSS", d: "تصميم متجاوب وأنيق" },
  { t: "قاعدة بيانات سحابية", d: "تخزين آمن بصلاحيات دقيقة" },
  { t: "حماية ومصادقة", d: "خصوصية بيانات الأطفال أولاً" },
  { t: "تجربة عربية RTL", d: "مصممة للمستخدم العربي" },
];

export const Scene7Tech: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 5, fps, config: { damping: 18 } });
  const sEnd = spring({ frame: f - 220, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: "70px 100px", display: "flex", flexDirection: "column", gap: 30 }}>
      <Bg tone="deep" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [20, 0])}px)` }}>
        <div style={{ fontSize: 26, color: C.accent, fontWeight: 700, letterSpacing: 2 }}>الجانب التقني وتجربة المستخدم</div>
        <div style={{ fontSize: 64, fontWeight: 800, marginTop: 10 }}>تقنيات حديثة لتجربة موثوقة</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
        {tech.map((s, i) => (
          <Sequence key={i} from={15 + i * 5}>
            <Tile t={s.t} d={s.d} />
          </Sequence>
        ))}
      </div>
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 18, marginTop: "auto",
        opacity: sEnd, transform: `translateY(${interpolate(sEnd, [0, 1], [30, 0])}px)`,
      }}>
        <LogoMark size={100} delay={220} />
        <div style={{ fontSize: 52, fontWeight: 800, textAlign: "center" }}>آفاق — نفتح آفاقاً جديدة لأطفالنا</div>
        <div style={{ fontSize: 26, color: C.muted }}>الجزائر — تلمسان</div>
      </div>
    </AbsoluteFill>
  );
};

const Tile: React.FC<{ t: string; d: string }> = ({ t, d }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 16 } });
  return (
    <div style={{
      opacity: s, transform: `translateY(${interpolate(s, [0, 1], [30, 0])}px)`,
      padding: 24, borderRadius: 18, minHeight: 130,
      background: "rgba(255,255,255,0.05)", border: `1px solid ${C.line}`,
      display: "flex", flexDirection: "column", justifyContent: "center", gap: 6,
    }}>
      <div style={{ fontSize: 26, fontWeight: 800 }}>{t}</div>
      <div style={{ fontSize: 20, color: C.muted }}>{d}</div>
    </div>
  );
};
