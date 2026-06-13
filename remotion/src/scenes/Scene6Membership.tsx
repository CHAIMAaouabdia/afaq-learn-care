import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { tajawal, C } from "../theme";

const perks = [
  "إشعارات لحظية",
  "متابعة مفصلة مباشرة",
  "مكالمات فيديو مع المختصين",
  "متابعة خلال العطل",
  "تمارين منزلية متقدمة",
  "توصيات مخصصة",
  "حصص علاجية إضافية",
];

export const Scene6Membership: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 5, fps, config: { damping: 18 } });
  const sP = spring({ frame: f - 30, fps, config: { damping: 16 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: "80px 100px", display: "flex", flexDirection: "column", gap: 36 }}>
      <Bg tone="deep" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [20, 0])}px)` }}>
        <div style={{ fontSize: 28, color: C.gold, fontWeight: 700, letterSpacing: 2 }}>عضوية آفاق+</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 10 }}>المميزة — تجربة أعمق وأشمل</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 50, flex: 1 }}>
        <div style={{
          opacity: sP, transform: `scale(${interpolate(sP, [0, 1], [0.92, 1])})`,
          padding: 40, borderRadius: 26,
          background: `linear-gradient(160deg, ${C.gold}26, ${C.accent}26)`,
          border: `1px solid ${C.gold}66`,
          display: "flex", flexDirection: "column", justifyContent: "center", gap: 14,
        }}>
          <div style={{ fontSize: 28, color: C.gold, fontWeight: 700 }}>السعر</div>
          <div style={{ fontSize: 110, fontWeight: 800, lineHeight: 1 }}>5,900<span style={{ fontSize: 40, color: C.muted, marginInlineStart: 14 }}>دج / شهرياً</span></div>
          <div style={{ fontSize: 20, color: C.muted, marginTop: 6 }}>التكلفة قابلة للتعديل حسب الدراسة المستقبلية للسوق</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignContent: "center" }}>
          {perks.map((p, i) => (
            <Sequence key={i} from={15 + i * 6}>
              <Perk t={p} />
            </Sequence>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Perk: React.FC<{ t: string }> = ({ t }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 16 } });
  return (
    <div style={{
      opacity: s, transform: `translateX(${interpolate(s, [0, 1], [30, 0])}px)`,
      display: "flex", alignItems: "center", gap: 14, padding: "16px 20px",
      borderRadius: 14, background: "rgba(255,255,255,0.05)", border: `1px solid ${C.line}`,
      fontSize: 24, fontWeight: 700,
    }}>
      <div style={{ width: 26, height: 26, borderRadius: 8, flexShrink: 0, background: `linear-gradient(135deg,${C.gold},${C.accent})`, display: "grid", placeItems: "center", fontSize: 16, fontWeight: 800 }}>✓</div>
      {t}
    </div>
  );
};
