import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Scene0Problem } from "./scenes/Scene0Problem";
import { Scene1Hero } from "./scenes/Scene1Hero";
import { Scene2About } from "./scenes/Scene2About";
import { Scene3Services } from "./scenes/Scene3Services";
import { Scene4Workflow } from "./scenes/Scene4Workflow";
import { Scene5Platform } from "./scenes/Scene5Platform";
import { Scene6Membership } from "./scenes/Scene6Membership";
import { Scene7Tech } from "./scenes/Scene7Tech";

const timing = springTiming({ config: { damping: 200 }, durationInFrames: 18 });

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={300}><Scene0Problem /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={210}><Scene1Hero /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={270}><Scene2About /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={330}><Scene3Services /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={360}><Scene4Workflow /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={330}><Scene5Platform /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={270}><Scene6Membership /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={360}><Scene7Tech /></TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
