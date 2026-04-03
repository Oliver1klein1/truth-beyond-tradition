import { Composition } from "remotion";
import { Main } from "./Main";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="NarrativeFrictionExplainer"
      component={Main}
      durationInFrames={30 * 30} // 30 seconds at 30fps
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
