import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const CountUp: React.FC<{
  from: number;
  to: number;
  startFrame: number;
  duration: number;
  suffix?: string;
  prefix?: string;
  fontSize?: number;
  color?: string;
}> = ({ from, to, startFrame, duration, suffix = "", prefix = "", fontSize = 120, color = "#fff" }) => {
  const frame = useCurrentFrame();
  const value = Math.round(
    interpolate(frame, [startFrame, startFrame + duration], [from, to], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  return (
    <span
      style={{
        fontVariantNumeric: "tabular-nums",
        fontSize,
        fontWeight: 800,
        color,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {prefix}{value}{suffix}
    </span>
  );
};
