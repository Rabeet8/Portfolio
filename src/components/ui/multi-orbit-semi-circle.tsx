"use client";
import React, { useState, useEffect } from "react";

const ICONS = [
  // Frontend (Inner orbit)
  { src: "https://svgl.app/library/react.svg", name: "React", color: "hsl(200, 95%, 50%)" },
  { src: "https://svgl.app/library/nextjs_icon_dark.svg", name: "Next.js", color: "hsl(0, 0%, 60%)" },
  { src: "https://svgl.app/library/javascript.svg", name: "JavaScript", color: "hsl(50, 90%, 50%)" },
  { src: "https://svgl.app/library/typescript.svg", name: "TypeScript", color: "hsl(210, 80%, 55%)" },
  { src: "https://svgl.app/library/tailwindcss.svg", name: "TailwindCSS", color: "hsl(190, 90%, 50%)" },
  { src: "https://svgl.app/library/materialui.svg", name: "MaterialUI", color: "hsl(210, 80%, 60%)" },
  // Middle orbit
  { src: "https://svgl.app/library/react.svg", name: "React Native", color: "hsl(200, 95%, 50%)" },
  { src: "https://svgl.app/library/expo.svg", name: "Expo", color: "hsl(260, 70%, 60%)" },
  { src: "https://svgl.app/library/nodejs.svg", name: "Node.js", color: "hsl(120, 55%, 45%)" },
  { src: "https://svgl.app/library/expressjs_dark.svg", name: "Express.js", color: "hsl(0, 0%, 55%)" },
  { src: "https://svgl.app/library/fastapi.svg", name: "FastAPI", color: "hsl(170, 70%, 45%)" },
  { src: "https://svgl.app/library/solidity.svg", name: "Solidity", color: "hsl(220, 15%, 50%)" },
  // Outer orbit
  { src: "https://svgl.app/library/hardhat.svg", name: "Hardhat", color: "hsl(45, 90%, 55%)" },
  { src: "https://svgl.app/library/firebase.svg", name: "Firebase", color: "hsl(35, 95%, 55%)" },
  { src: "https://svgl.app/library/google-cloud.svg", name: "Google Cloud", color: "hsl(210, 80%, 55%)" },
  { src: "https://svgl.app/library/git.svg", name: "Git", color: "hsl(10, 80%, 55%)" },
  { src: "https://svgl.app/library/github-dark.svg", name: "GitHub", color: "hsl(260, 50%, 55%)" },
  { src: "https://svgl.app/library/openai_dark.svg", name: "OpenAI", color: "hsl(160, 60%, 45%)" },
];

function SemiCircleOrbit({
  radius,
  centerX,
  centerY,
  icons,
  iconSize,
}: {
  radius: number;
  centerX: number;
  centerY: number;
  icons: typeof ICONS;
  iconSize: number;
}) {
  const count = icons.length;
  return (
    <>
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

      {icons.map((icon, index) => {
        const angle = count === 1 ? 90 : (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
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

  // Inner orbit: Frontend (6)
  const innerIcons = ICONS.slice(0, 6);
  // Middle orbit: Mobile + Backend + Web3 (6)
  const middleIcons = ICONS.slice(6, 12);
  // Outer orbit: Cloud/DevOps + AI (6)
  const outerIcons = ICONS.slice(12, 18);

  return (
    <div className="w-full flex justify-center items-center bg-background">
      <div
        className="relative mx-auto"
        style={{ width: baseWidth, height: baseWidth * 0.55 }}
      >
        <SemiCircleOrbit
          radius={baseWidth * 0.25}
          centerX={centerX}
          centerY={centerY}
          icons={innerIcons}
          iconSize={iconSize}
        />
        <SemiCircleOrbit
          radius={baseWidth * 0.37}
          centerX={centerX}
          centerY={centerY}
          icons={middleIcons}
          iconSize={iconSize}
        />
        <SemiCircleOrbit
          radius={baseWidth * 0.49}
          centerX={centerX}
          centerY={centerY}
          icons={outerIcons}
          iconSize={iconSize}
        />
      </div>
    </div>
  );
}
