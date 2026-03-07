"use client";
import React, { useState, useEffect } from "react";

const ICONS = [
  { src: "https://svgl.app/library/react.svg", name: "React" },
  { src: "https://svgl.app/library/typescript.svg", name: "TypeScript" },
  { src: "https://svgl.app/library/tailwindcss.svg", name: "Tailwind" },
  { src: "https://svgl.app/library/figma.svg", name: "Figma" },
  { src: "https://svgl.app/library/nextjs_icon_dark.svg", name: "Next.js" },
  { src: "https://svgl.app/library/nodejs.svg", name: "Node.js" },
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize }: any) {
  return (
    <>
      {/* Semi-circle glow */}
      <div
        className="absolute"
        style={{
          width: radius * 2,
          height: radius,
          left: centerX - radius,
          top: centerY - radius,
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
          border: "1px solid hsl(var(--border))",
          borderBottom: "none",
        }}
      />

      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const icon = ICONS[index % ICONS.length];
        const tooltipAbove = angle > 90;

        return (
          <div
            key={`${radius}-${index}`}
            className="absolute group"
            style={{
              width: iconSize,
              height: iconSize,
              left: centerX + x - iconSize / 2,
              top: centerY - y - iconSize / 2,
            }}
          >
            <div className="w-full h-full rounded-full bg-card border border-border flex items-center justify-center shadow-lg backdrop-blur-sm">
              <img
                src={icon.src}
                alt={icon.name}
                className="w-1/2 h-1/2 object-contain brightness-0 invert"
              />
            </div>
            {/* Tooltip */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-card border border-border text-foreground text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                tooltipAbove ? "bottom-full mb-2" : "top-full mt-2"
              }`}
            >
              {icon.name}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.8, 700);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(24, baseWidth * 0.05)
      : size.width < 768
        ? Math.max(28, baseWidth * 0.06)
        : Math.max(32, baseWidth * 0.07);

  return (
    <div className="w-full flex justify-center items-center bg-background">
      <div
        className="relative mx-auto"
        style={{ width: baseWidth, height: baseWidth * 0.55 }}
      >
        <SemiCircleOrbit radius={baseWidth * 0.25} centerX={centerX} centerY={centerY} count={3} iconSize={iconSize} />
        <SemiCircleOrbit radius={baseWidth * 0.37} centerX={centerX} centerY={centerY} count={4} iconSize={iconSize} />
        <SemiCircleOrbit radius={baseWidth * 0.49} centerX={centerX} centerY={centerY} count={6} iconSize={iconSize} />
      </div>
    </div>
  );
}
