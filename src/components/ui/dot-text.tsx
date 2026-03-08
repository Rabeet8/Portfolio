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
    baseX: number;
    baseY: number;
    size: number;
    alpha: number;
    speed: number;
    offset: number;
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

    // Draw text offscreen to sample pixels
    const offscreen = document.createElement("canvas");
    offscreen.width = rect.width;
    offscreen.height = rect.height;
    const offCtx = offscreen.getContext("2d");
    if (!offCtx) return;

    const fontSize = Math.min(rect.width / (text.length * 0.55), rect.height * 0.7);
    offCtx.fillStyle = "#ffffff";
    offCtx.font = `800 ${fontSize}px 'Poppins', sans-serif`;
    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.fillText(text, rect.width / 2, rect.height / 2);

    const imageData = offCtx.getImageData(0, 0, rect.width, rect.height);
    const pixels = imageData.data;

    const gap = Math.max(2, Math.floor(fontSize / 40));
    const particles: typeof particlesRef.current = [];

    for (let y = 0; y < rect.height; y += gap) {
      for (let x = 0; x < rect.width; x += gap) {
        const i = (y * rect.width + x) * 4;
        if (pixels[i + 3] > 128) {
          particles.push({
            x,
            y,
            baseX: x,
            baseY: y,
            size: Math.random() * 2 + 1,
            alpha: Math.random() * 0.3 + 0.55,
            speed: Math.random() * 0.02 + 0.005,
            offset: Math.random() * Math.PI * 2,
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

    const dpr = window.devicePixelRatio || 1;

    let time = 0;
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const p of particlesRef.current) {
        time += 0.00001;
        const flicker = Math.sin(time * 1000 + p.offset) * 0.5 + 0.5;
        const currentAlpha = p.alpha * (0.3 + flicker * 0.7);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      initParticles();
    };
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
