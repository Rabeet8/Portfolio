import { useEffect, useRef, useCallback } from "react";

interface DotTextProps {
  text: string;
  className?: string;
}

export function DotText({ text, className }: DotTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    baseAlpha: number;
    phase: number;
    speed: number;
    layer: number; // 0 = core, 1 = mid, 2 = edge
  }>>([]);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Draw text offscreen
    const offscreen = document.createElement("canvas");
    offscreen.width = rect.width;
    offscreen.height = rect.height;
    const offCtx = offscreen.getContext("2d");
    if (!offCtx) return;

    const fontSize = Math.min(rect.width / (text.length * 0.52), rect.height * 0.65);
    offCtx.fillStyle = "#ffffff";
    offCtx.font = `900 ${fontSize}px 'Poppins', sans-serif`;
    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.fillText(text, rect.width / 2, rect.height / 2);

    const imageData = offCtx.getImageData(0, 0, rect.width, rect.height);
    const pixels = imageData.data;

    // Create distance field for edge detection
    const gap = Math.max(2, Math.floor(fontSize / 45));
    const particles: typeof particlesRef.current = [];

    for (let y = 0; y < rect.height; y += gap) {
      for (let x = 0; x < rect.width; x += gap) {
        const i = (y * rect.width + x) * 4;
        const alpha = pixels[i + 3];
        if (alpha > 50) {
          // Check neighbors to determine if edge or core
          const neighbors = [
            pixels[((y - gap) * rect.width + x) * 4 + 3] || 0,
            pixels[((y + gap) * rect.width + x) * 4 + 3] || 0,
            pixels[(y * rect.width + (x - gap)) * 4 + 3] || 0,
            pixels[(y * rect.width + (x + gap)) * 4 + 3] || 0,
          ];
          const avgNeighbor = neighbors.reduce((a, b) => a + b, 0) / 4;
          
          let layer: number;
          if (avgNeighbor < 100) layer = 2; // edge
          else if (avgNeighbor < 200) layer = 1; // mid
          else layer = 0; // core

          const sizeByLayer = layer === 0 
            ? Math.random() * 1.2 + 1.4 
            : layer === 1 
              ? Math.random() * 1 + 0.8 
              : Math.random() * 0.8 + 0.3;

          const alphaByLayer = layer === 0
            ? Math.random() * 0.15 + 0.35
            : layer === 1
              ? Math.random() * 0.15 + 0.2
              : Math.random() * 0.12 + 0.08;

          particles.push({
            x: x + (Math.random() - 0.5) * (layer === 2 ? 2 : 0.5),
            y: y + (Math.random() - 0.5) * (layer === 2 ? 2 : 0.5),
            size: sizeByLayer,
            baseAlpha: alphaByLayer,
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.8,
            layer,
          });
        }
      }
    }

    particlesRef.current = particles;
  }, [text]);

  useEffect(() => {
    initParticles();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const p of particlesRef.current) {
        const wave = Math.sin(elapsed * p.speed + p.phase);
        const shimmer = wave * 0.5 + 0.5; // 0-1
        
        const alpha = p.baseAlpha * (0.4 + shimmer * 0.6);
        
        // Subtle warm tint for edge particles
        const r = p.layer === 2 ? 200 : 255;
        const g = p.layer === 2 ? 210 : 255;
        const b = 255;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    const handleResize = () => initParticles();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
