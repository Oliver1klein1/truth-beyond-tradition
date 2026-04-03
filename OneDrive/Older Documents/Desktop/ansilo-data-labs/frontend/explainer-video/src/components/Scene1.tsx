import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  const headlineOpacity = spring({ frame, fps, config: { damping: 200 } });
  const leftNumberOpacity = spring({ frame: frame - 25, fps, config: { damping: 200 } });
  const rightVoteOpacity = spring({ frame: frame - 45, fps, config: { damping: 200 } });
  const bottomTextOpacity = spring({ frame: frame - 130, fps, config: { damping: 200 } });
  const scale = spring({ frame: frame - 25, fps, config: { damping: 200 } });

  const glowWidth = interpolate(frame, [50, 75], [0, 40], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const yesWidth = interpolate(frame, [55, 75], [0, 180], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const noWidth = interpolate(frame, [60, 80], [0, 165], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const thirtyEight = Math.round(
    interpolate(frame, [25, 50], [0, 38], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  return (
    <div style={{ width: 1920, height: 1080, background: "#0a0a0a", position: "relative" }}>
      {/* Headline */}
      <div style={{
        position: "absolute", top: 200, left: 60, right: 60,
        textAlign: "center", opacity: headlineOpacity,
      }}>
        <span style={{
          fontSize: 68, fontWeight: 800, color: "#fff",
          fontFamily: "Inter, system-ui, sans-serif",
        }}>
          When the story outruns the evidence.
        </span>
      </div>

      {/* Left: Big 38% */}
      <div style={{
        position: "absolute", top: 400, left: 100,
        width: 600, display: "flex", justifyContent: "center",
        flexDirection: "column", alignItems: "center",
        opacity: leftNumberOpacity,
      }}>
        <div style={{
          transform: `scale(${scale})`,
          fontSize: 180, fontWeight: 800, color: "#6366f1",
          fontFamily: "Inter, system-ui, sans-serif",
          fontVariantNumeric: "tabular-nums", lineHeight: 1,
        }}>
          {thirtyEight}%
        </div>
        <div style={{
          marginTop: 10, fontSize: 36, fontWeight: 600,
          color: "rgba(255,255,255,0.6)",
          fontFamily: "Inter, system-ui, sans-serif",
        }}>
          reduction in CV death
        </div>
      </div>

      {/* Center glow */}
      <div style={{
        position: "absolute", top: 350, left: "50%",
        transform: "translateX(-50%)",
        width: glowWidth, height: 300,
        background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)",
        borderRadius: 100,
      }} />

      {/* Right: FDA Vote */}
      <div style={{
        position: "absolute", top: 360, right: 60,
        width: 700, opacity: rightVoteOpacity,
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <div style={{
          fontSize: 48, fontWeight: 600, color: "rgba(255,255,255,0.5)",
          fontFamily: "Inter, system-ui, sans-serif",
          marginBottom: 40, textAlign: "center",
        }}>
          FDA Advisory Committee
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 30 }}>
          <div style={{
            width: yesWidth * 1.8, height: 72, background: "#22c55e",
            borderRadius: 10, display: "flex",
            alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: "#fff", fontFamily: "Inter, system-ui, sans-serif" }}>12</span>
          </div>
          <span style={{ fontSize: 44, fontWeight: 600, color: "#22c55e", fontFamily: "Inter, system-ui, sans-serif" }}>Yes</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{
            width: noWidth * 1.8, height: 72, background: "#ef4444",
            borderRadius: 10, display: "flex",
            alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: "#fff", fontFamily: "Inter, system-ui, sans-serif" }}>11</span>
          </div>
          <span style={{ fontSize: 44, fontWeight: 600, color: "#ef4444", fontFamily: "Inter, system-ui, sans-serif" }}>No</span>
        </div>
      </div>

      {/* Bottom text */}
      <div style={{
        position: "absolute", bottom: 170, left: 60, right: 60,
        textAlign: "center", opacity: bottomTextOpacity,
      }}>
        <span style={{
          fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.7)",
          fontFamily: "Inter, system-ui, sans-serif",
        }}>
          The medical world treated it as certainty.
        </span>
      </div>
    </div>
  );
};
