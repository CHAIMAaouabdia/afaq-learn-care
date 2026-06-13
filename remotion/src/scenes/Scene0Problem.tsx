import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from "remotion";
import { Bg } from "../components/Bg";
import { tajawal, C } from "../theme";

const problems = [
  { n: "1 من 10", t: "أطفال يعانون من صعوبات تعلم" },
  { n: "غياب", t: "تشخيص مبكر ومتخصص" },
  { n: "تشتت", t: "بين عدة عيادات وأخصائيين" },
  { n: "قلق", t: "متزايد لدى الأولياء" },
];

export const Scene0Problem: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sH = spring({ frame: f - 5, fps, config: { damping: 18 } });
  const sQ = spring({ frame: f - 200, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ direction: "rtl", fontFamily: tajawal, color: C.ink, padding: "90px 110px", display: "flex", flexDirection: "column" }}>
      <Bg tone="deep" />
      <div style={{ opacity: sH, transform: `translateY(${interpolate(sH, [0, 1], [30, 0])}px)` }}>
        <div style={{ fontSize: 28, color: "#F2C66B", fontWeight: 700, letterSpacing: 2 }}>المشكلة</div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 14, lineHeight: 1.15, maxWidth: 1600 }}>
          صعوبات التعلم تحدٍّ يومي لآلاف الأطفال
        </div>
        <div style={{ fontSize: 32, color: C.muted, marginTop: 22, maxWidth: 1500, lineHeight: 1.5 }}>
          تأخر دراسي، فقدان الثقة بالنفس، وضغط نفسي على الأسرة — في غياب مركز متكامل يجمع كل الاختصاصات تحت سقف واحد.
        </div>
      </div>
      <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, flex: 1, alignContent: "center" }}>
        {problems.map((p, i) => (
          <Sequence key={i} from={40 + i * 10}>
            <Card n={p.n} t={p.t} />
          </Sequence>
        ))}
      </div>
      <div style={{ fontSize: 30, color: C.muted, opacity: sQ, transform: `translateY(${interpolate(sQ, [0, 1], [20, 0])}px)`, textAlign: "center", marginTop: 30 }}>
        فكان لا بد من حلٍّ شامل ومنظَّم…
      </div>
    </AbsoluteFill>
  );
};

const Card: React.FC<{ n: string; t: string }> = ({ n, t }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 16 } });
  return (
    <div style={{
      opacity: s, transform: `translateY(${interpolate(s, [0, 1], [40, 0])}px)`,
      padding: 30, borderRadius: 22, minHeight: 220,
      background: "rgba(255,255,255,0.05)", border: `1px solid ${C.line}`,
      display: "flex", flexDirection: "column", justifyContent: "center",
    }}>
      <div style={{ fontSize: 52, fontWeight: 800, color: "#F2C66B", lineHeight: 1 }}>{n}</div>
      <div style={{ fontSize: 24, color: C.ink, marginTop: 14, lineHeight: 1.4 }}>{t}</div>
    </div>
  );
};
