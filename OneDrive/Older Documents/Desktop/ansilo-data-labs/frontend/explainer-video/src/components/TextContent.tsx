import React from "react";

export const AnimatedText: React.FC<{
  text: string;
  opacity: number;
  y: number;
  x?: number;
  fontSize: number;
  fontWeight?: number;
  color?: string;
  maxWidth?: number;
  textAlign?: "left" | "center" | "right";
}> = ({
  text,
  opacity,
  y,
  x,
  fontSize,
  fontWeight = 600,
  color = "#fff",
  maxWidth,
  textAlign = "center",
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${y}px`,
        ...(x !== undefined ? { left: `${x}px`, transform: "translateX(0)" } : {
          left: 0,
          right: 0,
        }),
        opacity,
        fontSize,
        fontWeight,
        color,
        fontFamily: "Inter, system-ui, sans-serif",
        textAlign,
        maxWidth: maxWidth || (x !== undefined ? undefined : 1800),
        ...(x !== undefined ? {} : { margin: "0 auto" }),
        lineHeight: 1.3,
      }}
    >
      {text}
    </div>
  );
};
