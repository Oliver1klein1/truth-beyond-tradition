import React from "react";
import { useCurrentFrame, interpolate, spring, Sequence } from "remotion";

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  const headlineOpacity = spring({ frame, fps, config: { damping: 200 } });
  const narrativeOpacity = spring({ frame: frame - 20, fps, config: { damping: 200 } });
  const evidenceOpacity = spring({ frame: frame - 40, fps, config: { damping: 200 } });
  const seamOpacity = spring({ frame: frame - 55, fps, config: { damping: 200 } });
  const bottomTextOpacity = spring({ frame: frame - 100, fps, config: { damping: 200 } });

  const pulse = 0.5 + 0.5 * Math.sin(frame * 0.2);

  return (
    <div style={{ width: 1920, height: 1080, background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      {/* Headline */}
      <div style={{ position: "absolute", top: 200, left: 60, right: 60, textAlign: "center", opacity: headlineOpacity }}>
        <span style={{ fontSize: 80, fontWeight: 800, color: "#fff", fontFamily: "Inter, system-ui, sans-serif" }}>
          <span style={{ color: "#6366f1" }}>Narrative Friction.</span>
        </span>
      </div>

      {/* The Narrative - top layer */}
      <div style={{ position: "absolute", top: 380, left: 160, right: 160, height: 160, opacity: narrativeOpacity }}>
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(135deg, #1a2a1a, #2a3a2a)",
          borderRadius: 16,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "2px solid rgba(34,197,94,0.4)",
        }}>
          <svg width="48" height="48" style={{ marginRight: 20 }}>
            <circle cx="24" cy="24" r="16" fill="none" stroke="#22c55e" strokeWidth="3" />
            <path d="M 16 24 L 22 30 L 34 18" fill="none" stroke="#22c55e" strokeWidth="3" />
          </svg>
          <span style={{ fontSize: 42, fontWeight: 600, color: "#22c55e", fontFamily: "Inter, system-ui, sans-serif" }}>
            The Narrative
          </span>
        </div>
      </div>

      {/* Glowing seam */}
      <div style={{ position: "absolute", top: 550, left: 160, right: 160, height: 30, opacity: seamOpacity }}>
        <div style={{
          width: "100%", height: "100%",
          background: `linear-gradient(90deg, transparent, rgba(99,102,241,${0.3 + pulse * 0.3}), transparent)`,
          filter: "blur(6px)",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: 0, right: 0,
          height: 2, background: `rgba(99,102,241,${0.5 + pulse * 0.3})`,
          transform: "translateY(-50%)",
        }} />
      </div>

      {/* The Evidence - bottom layer with fractures */}
      <div style={{ position: "absolute", top: 590, left: 160, right: 160, height: 160, opacity: evidenceOpacity }}>
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(135deg, #2a1a1a, #3a2a2a)",
          borderRadius: 16,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "2px solid rgba(239,68,68,0.4)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Fracture lines */}
          <svg style={{ position: "absolute", width: "100%", height: "100%" }}>
            <line x1="250" y1="10" x2="350" y2="150" stroke="rgba(239,68,68,0.3)" strokeWidth="2" />
            <line x1="550" y1="0" x2="650" y2="160" stroke="rgba(239,68,68,0.25)" strokeWidth="2" />
            <line x1="900" y1="20" x2="850" y2="140" stroke="rgba(239,68,68,0.3)" strokeWidth="2" />
            <line x1="1100" y1="5" x2="1200" y2="155" stroke="rgba(239,68,68,0.25)" strokeWidth="2" />
            <line x1="1400" y1="15" x2="1350" y2="145" stroke="rgba(239,68,68,0.3)" strokeWidth="2" />
          </svg>
          <svg width="48" height="48" style={{ marginRight: 20 }}>
            <path d="M 14 14 L 34 34 M 34 14 L 14 34" fill="none" stroke="#ef4444" strokeWidth="3" />
          </svg>
          <span style={{ fontSize: 42, fontWeight: 600, color: "#ef4444", fontFamily: "Inter, system-ui, sans-serif" }}>
            The Evidence
          </span>
        </div>
      </div>

      {/* Bottom explanation text */}
      <div style={{ position: "absolute", bottom: 170, left: 100, right: 100, textAlign: "center", opacity: bottomTextOpacity }}>
        <span style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.7)", fontFamily: "Inter, system-ui, sans-serif" }}>
          Uneasy approvals. Close votes. Smoothed into consensus.
        </span>
      </div>
    </div>
  );
};
