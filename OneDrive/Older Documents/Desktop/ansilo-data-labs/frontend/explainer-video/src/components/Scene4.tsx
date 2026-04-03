import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  const headlineOpacity = spring({ frame, fps, config: { damping: 200 } });
  const mockupOpacity = spring({ frame: frame - 5, fps, config: { damping: 200 } });

  const card1YShift = interpolate(frame, [10, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const card2YShift = interpolate(frame, [25, 33], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const card3YShift = interpolate(frame, [40, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cards = [
    {
      label: "Claim Matrix",
      desc: "Balanced analysis of claim, defense, and critique perspectives",
      color: "#6366f1",
      bg: "rgba(99,102,241,0.1)",
      borderColor: "rgba(99,102,241,0.3)",
      shift: card1YShift,
    },
    {
      label: "COI Audit",
      desc: "Sponsor-linked authors in the stabilizing literature",
      color: "#eab308",
      bg: "rgba(234,179,8,0.1)",
      borderColor: "rgba(234,179,8,0.3)",
      shift: card2YShift,
    },
    {
      label: "Beneficiary Scorecard",
      desc: "Which stakeholder groups derive the most value",
      color: "#22c55e",
      bg: "rgba(34,197,94,0.1)",
      borderColor: "rgba(34,197,94,0.3)",
      shift: card3YShift,
    },
  ];

  const cardXs = [80, 680, 1280];
  const cardY = 400;
  const cardW = 540;
  const cardH = 140;

  return (
    <div style={{ width: 1920, height: 1080, background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      {/* Headline */}
      <div style={{ position: "absolute", top: 200, left: 60, right: 60, textAlign: "center", opacity: headlineOpacity }}>
        <span style={{ fontSize: 72, fontWeight: 800, color: "#fff", fontFamily: "Inter, system-ui, sans-serif" }}>
          What you get.
        </span>
      </div>

      {/* Report mockup center-bottom */}
      <div style={{
        position: "absolute", top: 720, left: 760,
        width: 400, height: 200,
        background: "linear-gradient(135deg, #1a1a2a, #0f0f1a)",
        borderRadius: 16, border: "2px solid rgba(99,102,241,0.3)",
        opacity: mockupOpacity,
        overflow: "hidden",
      }}>
        <div style={{ padding: "20px 25px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: "#6366f1", fontFamily: "Inter, system-ui, sans-serif", letterSpacing: 2 }}>
            NARRATIVE FRICTION REPORT
          </span>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#fff", fontFamily: "Inter, system-ui, sans-serif", marginTop: 4 }}>
            The Empagliflozin Case
          </div>
        </div>
        <div style={{ padding: "16px 25px" }}>
          <div style={{ height: 5, width: "100%", background: "rgba(255,255,255,0.08)", borderRadius: 3, marginBottom: 6 }} />
          <div style={{ height: 5, width: "85%", background: "rgba(255,255,255,0.06)", borderRadius: 3, marginBottom: 6 }} />
          <div style={{ height: 5, width: "95%", background: "rgba(255,255,255,0.08)", borderRadius: 3 }} />
        </div>
      </div>

      {/* Horizontal cards */}
      {cards.map((card, i) => (
        <div key={i} style={{
          position: "absolute",
          top: cardY + (1 - card.shift) * 30,
          left: cardXs[i],
          width: cardW,
          height: cardH,
          opacity: card.shift,
        }}>
          <div style={{
            padding: "20px 25px",
            background: card.bg,
            borderRadius: 14,
            border: `2px solid ${card.borderColor}`,
            marginBottom: 10,
          }}>
            <span style={{ fontSize: 38, fontWeight: 600, color: card.color, fontFamily: "Inter, system-ui, sans-serif" }}>
              {card.label}
            </span>
          </div>
          <span style={{ fontSize: 30, color: "rgba(255,255,255,0.6)", fontFamily: "Inter, system-ui, sans-serif" }}>
            {card.desc}
          </span>
        </div>
      ))}
    </div>
  );
};
