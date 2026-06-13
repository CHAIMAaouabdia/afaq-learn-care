import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { tajawal, C } from "../theme";

const stats = [
  { v: "3 – 17", l: "سنة" },
  { v: "+5", l: "اختصاصات" },
  { v: "شهري", l: "تقارير الأولياء" },
  { v: "فردي", l: "وجماعي" },
];

export const Scene2About: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 10, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: 120 }}>
      <Bg tone="deep" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [30, 0])}px)` }}>
        <div style={{ fontSize: 28, color: C.mint, fontWeight: 700, marginBottom: 16 }}>من نحن</div>
        <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1.1, maxWidth: 1500 }}>
          مركز متخصص في التكفل بذوي صعوبات التعلم
        </div>
        <div style={{ fontSize: 38, color: C.muted, marginTop: 30, maxWidth: 1400, lineHeight: 1.5 }}>
          النمائية والأكاديمية للأطفال والمراهقين من سن 3 سنوات إلى 17 سنة. نقدم متابعة فردية وجماعية، تقييماً شاملاً، وخططاً تكفلية علاجية.
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 100, right: 120, left: 120, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
        {stats.map((s, i) => (
          <Sequence key={i} from={30 + i * 8}>
            <Stat v={s.v} l={s.l} />
          </Sequence>
        ))}
      </div>
    </AbsoluteFill>
  );
};

const Stat: React.FC<{ v: string; l: string }> = ({ v, l }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 16 } });
  return (
    <div style={{
      opacity: s, transform: `translateY(${interpolate(s, [0, 1], [30, 0])}px)`,
      padding: 32, borderRadius: 24,
      background: "rgba(255,255,255,0.04)", border: `1px solid ${C.line}`,
      backdropFilter: "blur(0)",
    }}>
      <div style={{ fontSize: 56, fontWeight: 800, color: C.primary }}>{v}</div>
      <div style={{ fontSize: 24, color: C.muted, marginTop: 6 }}>{l}</div>
    </div>
  );
};
