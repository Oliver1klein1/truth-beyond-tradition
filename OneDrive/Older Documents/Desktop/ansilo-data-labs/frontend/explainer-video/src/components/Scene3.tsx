import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  const headlineOpacity = spring({ frame, fps, config: { damping: 200 } });

  const node1Opacity = spring({ frame: frame - 15, fps, config: { damping: 200 } });
  const node2Opacity = spring({ frame: frame - 35, fps, config: { damping: 200 } });
  const node3Opacity = spring({ frame: frame - 55, fps, config: { damping: 200 } });

  const line1Progress = interpolate(frame, [25, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const line2Progress = interpolate(frame, [45, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const bottomTextOpacity = spring({ frame: frame - 90, fps, config: { damping: 200 } });

  const nodes = [
    { label: "Regulatory Records", x: 160 },
    { label: "Narrative Critique & Defense", x: 720 },
    { label: "Conflict-of-Interest Audit", x: 1280 },
  ];
  const opacities = [node1Opacity, node2Opacity, node3Opacity];

  return (
    <div style={{ width: 1920, height: 1080, background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      {/* Headline */}
      <div style={{ position: "absolute", top: 200, left: 60, right: 60, textAlign: "center", opacity: headlineOpacity }}>
        <span style={{ fontSize: 72, fontWeight: 800, color: "#fff", fontFamily: "Inter, system-ui, sans-serif" }}>
          Evidence-led. Not accusation-led.
        </span>
      </div>

      {/* Flow diagram connector lines */}
      <svg width="1920" height="200" style={{ position: "absolute", top: 380 }}>
        <line
          x1={nodes[0].x + 130} y1="60"
          x2={nodes[0].x + 130 + 440 * line1Progress} y2="60"
          stroke="#6366f1" strokeWidth="3" strokeDasharray="440" strokeDashoffset={440 * (1 - line1Progress)}
        />
        <line
          x1={nodes[1].x + 130} y1="60"
          x2={nodes[1].x + 130 + 440 * line2Progress} y2="60"
          stroke="#6366f1" strokeWidth="3" strokeDasharray="440" strokeDashoffset={440 * (1 - line2Progress)}
        />
        {line1Progress > 0.3 && (
          <polygon
            points={`${nodes[0].x + 570},45 ${nodes[0].x + 570},75 ${nodes[0].x + 590},60`}
            fill="#6366f1"
            opacity={line1Progress}
          />
        )}
        {line2Progress > 0.3 && (
          <polygon
            points={`${nodes[1].x + 570},45 ${nodes[1].x + 570},75 ${nodes[1].x + 590},60`}
            fill="#6366f1"
            opacity={line2Progress}
          />
        )}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <div key={i} style={{
          position: "absolute", top: 380, left: node.x,
          width: 260, height: 200,
          background: "rgba(99,102,241,0.12)",
          borderRadius: 16, border: "2px solid rgba(99,102,241,0.4)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          opacity: opacities[i],
        }}>
          <svg width="48" height="48">
            {i === 0 && (
              <>
                <rect x="8" y="8" width="32" height="32" rx="4" fill="none" stroke="#6366f1" strokeWidth="3"/>
                <line x1="16" y1="20" x2="36" y2="20" stroke="#6366f1" strokeWidth="2"/>
                <line x1="16" y1="28" x2="30" y2="28" stroke="#6366f1" strokeWidth="2"/>
                <line x1="16" y1="36" x2="32" y2="36" stroke="#6366f1" strokeWidth="2"/>
              </>
            )}
            {i === 1 && (
              <>
                <circle cx="18" cy="24" r="12" fill="none" stroke="#6366f1" strokeWidth="3"/>
                <circle cx="30" cy="24" r="12" fill="none" stroke="#6366f1" strokeWidth="3"/>
              </>
            )}
            {i === 2 && (
              <>
                <circle cx="24" cy="24" r="16" fill="none" stroke="#6366f1" strokeWidth="3"/>
                <line x1="14" y1="14" x2="34" y2="34" stroke="#6366f1" strokeWidth="3"/>
                <line x1="34" y1="14" x2="14" y2="34" stroke="#6366f1" strokeWidth="3"/>
              </>
            )}
          </svg>
          <span style={{
            fontSize: 30, fontWeight: 600, color: "#fff",
            fontFamily: "Inter, system-ui, sans-serif",
            textAlign: "center", marginTop: 12,
          }}>
            {node.label}
          </span>
        </div>
      ))}

      {/* Bottom text */}
      <div style={{ position: "absolute", bottom: 170, left: 60, right: 60, textAlign: "center", opacity: bottomTextOpacity }}>
        <span style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.7)", fontFamily: "Inter, system-ui, sans-serif" }}>
          We don't assume bad faith. We examine structural incentives.
        </span>
      </div>
    </div>
  );
};
