import React from "react";
import { Sequence, useCurrentFrame } from "remotion";
import { Scene1 } from "./components/Scene1";
import { Scene2 } from "./components/Scene2";
import { Scene3 } from "./components/Scene3";
import { Scene4 } from "./components/Scene4";
import { Scene5 } from "./components/Scene5";

const SCENE_FRAMES = 180;

const SceneWrapper: React.FC<{ from: number; children: React.ReactNode }> = ({
  from,
  children,
}) => (
  <Sequence
    name={`scene-${from}`}
    from={from}
    durationInFrames={SCENE_FRAMES}
    showInTimeline={false}
  >
    {children}
  </Sequence>
);

export const Main: React.FC = () => {
  return (
    <>
      <SceneWrapper from={0}>
        <Scene1 />
      </SceneWrapper>
      <SceneWrapper from={SCENE_FRAMES}>
        <Scene2 />
      </SceneWrapper>
      <SceneWrapper from={SCENE_FRAMES * 2}>
        <Scene3 />
      </SceneWrapper>
      <SceneWrapper from={SCENE_FRAMES * 3}>
        <Scene4 />
      </SceneWrapper>
      <SceneWrapper from={SCENE_FRAMES * 4}>
        <Scene5 />
      </SceneWrapper>
    </>
  );
};
