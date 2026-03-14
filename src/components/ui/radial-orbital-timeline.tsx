"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [rotationAngle, setRotationAngle] = useState(230);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const toggleItem = (id: number) => {
    const index = timelineData.findIndex(item => item.id === id);
    
    setExpandedItems((prev) => {
      const isAboutToExpand = !prev[id];
      const newState = { ...prev };
      
      // Close others
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (isAboutToExpand) {
        setActiveNodeId(id);
        setAutoRotate(false);

        // Smoothly rotate to top (270 degrees)
        const targetRotation = 270 - (index / timelineData.length) * 360;
        
        // Use framer-motion's animate utility for a smooth transition
        animate(rotationAngle, targetRotation, {
          type: "spring",
          stiffness: 60,
          damping: 15,
          onUpdate: (latest) => setRotationAngle(latest)
        });

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let frameId: number;
    
    if (autoRotate) {
      const updateRotation = () => {
        setRotationAngle((prev) => (prev + 0.1) % 360);
        frameId = requestAnimationFrame(updateRotation);
      };
      frameId = requestAnimationFrame(updateRotation);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 240;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    return { x, y };
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center scale-75 md:scale-100">
        
        {/* Main Orbital Rings - Thicker */}
        <div className="absolute w-[480px] h-[480px] rounded-full border-2 border-white/[0.08]" />
        <div className="absolute w-[220px] h-[220px] rounded-full border-2 border-white/[0.05]" />
        
        {/* Core AI Orb */}
        <div className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center">
            {/* Minimal Outer Halo */}
            <div className="absolute inset-0 rounded-full bg-indigo-500/10" />
            <div className="absolute inset-4 rounded-full bg-blue-500/20" />
            
            {/* Core */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/30">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-400 to-cyan-300" />
                <div className="absolute inset-4 bg-white rounded-full shadow-lg" />
            </div>
        </div>

        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = expandedItems[item.id];
          const isActive = activeNodeId === item.id;
          const isRelated = isRelatedToActive(item.id);
          const isPulsing = pulseEffect[item.id];
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              ref={(el) => (nodeRefs.current[item.id] = el)}
              className={cn(
                "absolute transition-all duration-700 ease-in-out cursor-pointer group",
                isExpanded ? "z-[100]" : "z-20"
              )}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              {/* Pulse ring */}
              {isPulsing && (
                <div className="absolute -inset-2 rounded-full border-2 border-white/40 animate-ping" />
              )}

              {/* Glow Halo */}
              <div className={cn(
                "absolute -inset-6 rounded-full bg-white/10 blur-2xl transition-opacity duration-500",
                (isActive || isRelated) ? "opacity-100" : "opacity-0 group-hover:opacity-40"
              )} />

              <div className="flex flex-col items-center gap-4">
                <div className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-500",
                  isActive 
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : isRelated
                    ? "bg-zinc-800 text-white border-white/40 scale-110"
                    : "bg-zinc-900/80 text-white border-white/20 hover:border-white/50"
                )}>
                  <Icon className="w-6 h-6" />
                </div>
                {!isExpanded && (
                  <span className={cn(
                    "text-xs md:text-sm font-medium tracking-wide transition-colors duration-300",
                    isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                  )}>
                    {item.title}
                  </span>
                )}
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-16 left-1/2 -translate-x-1/2 w-80 z-[101] pointer-events-none"
                  >
                    <Card className="border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-2xl pointer-events-auto border-2">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-white font-bold">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                          {item.content}
                        </p>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1 text-xs text-zinc-400">
                            <Zap className="w-3 h-3 text-indigo-400" />
                            Energy Level
                          </div>
                          <span className="text-xs font-bold text-white">
                            100%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-1000"
                            style={{ width: `100%` }}
                          />
                        </div>

                        {item.relatedIds.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-white/5">
                            <div className="flex items-center gap-1 mb-2">
                              <Link className="w-3 h-3 text-zinc-500" />
                              <span className="text-xs text-zinc-500 font-medium">
                                Connected Phases
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.relatedIds.map((relatedId) => {
                                const relatedItem = timelineData.find(
                                  (i) => i.id === relatedId
                                );
                                return (
                                  <Button
                                    key={relatedId}
                                    variant="outline"
                                    size="sm"
                                    className="h-7 text-[10px] bg-zinc-800/50 border-white/10 hover:bg-zinc-700 hover:text-white"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleItem(relatedId);
                                    }}
                                  >
                                    {relatedItem?.title}
                                    <ArrowRight className="w-3 h-3 ml-1" />
                                  </Button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
