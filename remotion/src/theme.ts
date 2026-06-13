import { loadFont as loadTajawal } from "@remotion/google-fonts/Tajawal";
import { loadFont as loadAmiri } from "@remotion/google-fonts/Amiri";

export const tajawal = loadTajawal("normal", { weights: ["400", "700", "800"], subsets: ["arabic"] }).fontFamily;
export const amiri = loadAmiri("normal", { weights: ["400", "700"], subsets: ["arabic"] }).fontFamily;

export const C = {
  bg: "#0B1220",
  bg2: "#101a30",
  ink: "#F4F7FB",
  muted: "#9AA8C2",
  primary: "#4F8BFF",
  accent: "#7C5CFF",
  mint: "#34D6B0",
  gold: "#F2C66B",
  line: "rgba(255,255,255,0.08)",
};
