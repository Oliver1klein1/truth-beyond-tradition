import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

const PARTICLE_COUNT = 15;

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
};

// Pre-generate positions for consistent rendering
const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  x: 80 + i * 120 + (i % 3) * 40,
  y: 100 + (i % 5) * 200,
  size: 3 + (i % 4) * 2,
  speed: 0.5 + (i % 5) * 0.3,
  opacity: 0.1 + (i % 3) * 0.05,
  delay: i * 0.8,
}));

export const ParticleBackground: React.FC<{ startFrame: number }> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden", top: 0, left: 0 }}>
      {particles.map((particle, i) => {
        const y = interpolate(
          relativeFrame,
          [particle.delay * 30, (particle.delay + 3) * 30],
          [HEIGHT + 20, -20],
          { extrapolateRight: "clamp" }
        );
        const opacity = interpolate(
          relativeFrame,
          [particle.delay * 30, (particle.delay + 0.5) * 30],
          [0, particle.opacity],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        const x = particle.x + Math.sin((relativeFrame + i * 20) * 0.05) * 15;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              backgroundColor: "#6366f1",
              opacity,
              filter: `blur(${particle.size}px)`,
            }}
          />
        );
      })}
    </div>
  );
};
