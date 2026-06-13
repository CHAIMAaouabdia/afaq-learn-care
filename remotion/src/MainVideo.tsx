import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Scene1Hero } from "./scenes/Scene1Hero";
import { Scene2About } from "./scenes/Scene2About";
import { Scene3Services } from "./scenes/Scene3Services";
import { Scene4Workflow } from "./scenes/Scene4Workflow";
import { Scene5Platform } from "./scenes/Scene5Platform";
import { Scene6Tech } from "./scenes/Scene6Tech";

const T = () => <TransitionSeries.Transition presentation={fade()} timing={springTiming({ config: { damping: 200 }, durationInFrames: 18 })} />;

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={270}><Scene1Hero /></TransitionSeries.Sequence>
        <T />
        <TransitionSeries.Sequence durationInFrames={300}><Scene2About /></TransitionSeries.Sequence>
        <T />
        <TransitionSeries.Sequence durationInFrames={300}><Scene3Services /></TransitionSeries.Sequence>
        <T />
        <TransitionSeries.Sequence durationInFrames={300}><Scene4Workflow /></TransitionSeries.Sequence>
        <T />
        <TransitionSeries.Sequence durationInFrames={310}><Scene5Platform /></TransitionSeries.Sequence>
        <T />
        <TransitionSeries.Sequence durationInFrames={400}><Scene6Tech /></TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
