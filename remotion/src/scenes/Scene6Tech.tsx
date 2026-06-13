import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { LogoMark } from "../components/LogoMark";
import { tajawal, C } from "../theme";

const tech = [
  { t: "React 19 + TypeScript", d: "واجهات حديثة وآمنة" },
  { t: "TanStack Start", d: "تصيير من جهة الخادم وأداء عالٍ" },
  { t: "Tailwind CSS", d: "تصميم متجاوب وأنيق" },
  { t: "قاعدة بيانات سحابية", d: "تخزين آمن مع صلاحيات دقيقة" },
  { t: "مصادقة وحماية كاملة", d: "خصوصية بيانات الأطفال أولاً" },
  { t: "تجربة عربية RTL", d: "مصممة خصيصاً للمستخدم العربي" },
];

export const Scene6Tech: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 5, fps, config: { damping: 18 } });
  const sEnd = spring({ frame: f - 180, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: 100 }}>
      <Bg tone="deep" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [20, 0])}px)` }}>
        <div style={{ fontSize: 28, color: C.accent, fontWeight: 700 }}>الجانب التقني وتجربة المستخدم</div>
        <div style={{ fontSize: 70, fontWeight: 800, marginTop: 8 }}>تقنيات حديثة لتجربة موثوقة</div>
      </div>
      <div style={{ marginTop: 50, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {tech.map((s, i) => (
          <Sequence key={i} from={15 + i * 5}>
            <Tile t={s.t} d={s.d} />
          </Sequence>
        ))}
      </div>
      <div style={{
        position: "absolute", bottom: 80, left: 0, right: 0,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 24,
        opacity: sEnd, transform: `translateY(${interpolate(sEnd, [0, 1], [30, 0])}px)`,
      }}>
        <LogoMark size={120} delay={180} />
        <div style={{ fontSize: 56, fontWeight: 800 }}>آفاق — نفتح آفاقاً جديدة لأطفالنا</div>
        <div style={{ fontSize: 28, color: C.muted }}>الجزائر — تلمسان</div>
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
      padding: 28, borderRadius: 22, minHeight: 150,
      background: "rgba(255,255,255,0.04)", border: `1px solid ${C.line}`,
    }}>
      <div style={{ fontSize: 30, fontWeight: 800 }}>{t}</div>
      <div style={{ fontSize: 22, color: C.muted, marginTop: 8 }}>{d}</div>
    </div>
  );
};
