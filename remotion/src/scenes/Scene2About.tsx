import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { tajawal, C } from "../theme";

const stats = [
  { v: "3 – 17", l: "سنة" },
  { v: "+5", l: "اختصاصات" },
  { v: "شهري", l: "تقارير الأولياء" },
  { v: "فردي وجماعي", l: "نمط المتابعة" },
];

export const Scene2About: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 10, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: "90px 110px", display: "flex", flexDirection: "column", gap: 50 }}>
      <Bg tone="deep" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [30, 0])}px)` }}>
        <div style={{ fontSize: 28, color: C.mint, fontWeight: 700, letterSpacing: 2 }}>من نحن</div>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.1, marginTop: 14, maxWidth: 1600 }}>
          مركز متخصص في التكفل بذوي صعوبات التعلم
        </div>
        <div style={{ fontSize: 34, color: C.muted, marginTop: 24, maxWidth: 1500, lineHeight: 1.55 }}>
          النمائية والأكاديمية للأطفال والمراهقين من سن 3 سنوات إلى 17 سنة — تقييم شامل، خطط فردية، وتدخّل متعدد الاختصاصات.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: "auto" }}>
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
      padding: 30, borderRadius: 22, minHeight: 160,
      background: "rgba(255,255,255,0.05)", border: `1px solid ${C.line}`,
      display: "flex", flexDirection: "column", justifyContent: "center",
    }}>
      <div style={{ fontSize: 48, fontWeight: 800, color: C.primary, lineHeight: 1.1 }}>{v}</div>
      <div style={{ fontSize: 24, color: C.muted, marginTop: 8 }}>{l}</div>
    </div>
  );
};
