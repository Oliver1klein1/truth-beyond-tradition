import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";

const HEIGHT = 1080;

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  const headlineOpacity = spring({ frame, fps, config: { damping: 200 } });
  const subheadOpacity = spring({ frame: frame - 8, fps, config: { damping: 200 } });

  const card1Opacity = spring({ frame: frame - 15, fps, config: { damping: 200 } });
  const card2Opacity = spring({ frame: frame - 25, fps, config: { damping: 200 } });
  const card3Opacity = spring({ frame: frame - 35, fps, config: { damping: 200 } });
  const card4Opacity = spring({ frame: frame - 45, fps, config: { damping: 200 } });

  const logoOpacity = spring({ frame: frame - 90, fps, config: { damping: 200 } });
  const taglineOpacity = spring({ frame: frame - 100, fps, config: { damping: 200 } });

  const labels = ["Regulatory Affairs", "Pharmacovigilance", "Market Access & Payers", "Clinical Development"];
  const opacities = [card1Opacity, card2Opacity, card3Opacity, card4Opacity];
  const cardW = 440;
  const cardH = 140;
  const totalW = cardW * 2 + 40;
  const startX = (1920 - totalW) / 2;

  // Particles
  const particles = Array.from({ length: 12 }, (_, i) => {
    const startX = 100 + i * 155;
    const delay = i * 3;
    const size = 4 + (i % 3) * 2;
    const opacity = 0.06 + (i % 4) * 0.03;
    const y = interpolate(frame, [delay, delay + 160], [HEIGHT + 20, -20], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const dx = startX + Math.sin((frame + i * 30) * 0.02) * 20;
    return (
      <div key={i} style={{
        position: "absolute", left: dx, top: y,
        width: size, height: size, borderRadius: "50%",
        backgroundColor: "#6366f1", opacity,
        filter: `blur(${size}px)`,
      }} />
    );
  });

  return (
    <div style={{ width: 1920, height: 1080, background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      {/* Particles */}
      {particles}

      {/* Headline */}
      <div style={{ position: "absolute", top: 200, left: 60, right: 60, textAlign: "center", opacity: headlineOpacity }}>
        <span style={{ fontSize: 72, fontWeight: 800, color: "#fff", fontFamily: "Inter, system-ui, sans-serif" }}>
          Built for decision-makers.
        </span>
      </div>

      {/* Sub-headline */}
      <div style={{ position: "absolute", top: 300, left: 60, right: 60, textAlign: "center", opacity: subheadOpacity }}>
        <span style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.6)", fontFamily: "Inter, system-ui, sans-serif" }}>
          Who benefits from our reports?
        </span>
      </div>

      {/* 2x2 Grid */}
      {labels.map((label, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = startX + col * (cardW + 40);
        const y = 380 + row * (cardH + 40);
        return (
          <div key={i} style={{
            position: "absolute", top: y, left: x,
            width: cardW, height: cardH, opacity: opacities[i],
          }}>
            <div style={{
              width: "100%", height: "100%",
              background: "rgba(99,102,241,0.08)",
              borderRadius: 16, border: "2px solid rgba(99,102,241,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontSize: 36, fontWeight: 600, color: "#fff",
                fontFamily: "Inter, system-ui, sans-serif",
                textAlign: "center", padding: "0 20px",
              }}>
                {label}
              </span>
            </div>
          </div>
        );
      })}

      {/* Ansilo Data Labs logo */}
      <div style={{ position: "absolute", bottom: 170, left: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center", opacity: logoOpacity }}>
        <img
          src="public/context/adl-logo-blk-bg.png"
          alt="Ansilo Data Labs"
          style={{ height: 100, objectFit: "contain" }}
        />
      </div>
      <div style={{ position: "absolute", bottom: 170, left: 0, right: 0, textAlign: "center", opacity: taglineOpacity }}>
        <span style={{ fontSize: 30, fontWeight: 400, color: "rgba(255,255,255,0.6)", fontFamily: "Inter, system-ui, sans-serif" }}>
          Evidence-led investigative reports for healthcare professionals.
        </span>
      </div>
    </div>
  );
};
