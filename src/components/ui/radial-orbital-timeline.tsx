"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
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

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-foreground bg-background border-foreground";
      case "in-progress":
        return "text-background bg-foreground border-background";
      case "pending":
        return "text-foreground bg-background/40 border-foreground/50";
      default:
        return "text-foreground bg-background/40 border-foreground/50";
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        <div
          ref={orbitRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Orbital rings */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-foreground/20" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-foreground/15" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-foreground/10" />

          {/* Center dot */}
          <div className="absolute w-3 h-3 rounded-full bg-foreground/50" />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle: React.CSSProperties = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Pulse ring */}
                {isPulsing && (
                  <div className="absolute -inset-2 rounded-full border-2 border-foreground/40 animate-ping" />
                )}

                {/* Node circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isExpanded
                      ? "scale-125 border-foreground bg-foreground text-background"
                      : isRelated
                      ? "scale-110 border-foreground/60 bg-secondary text-foreground"
                      : "border-border bg-card text-foreground hover:border-foreground/40"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Label */}
                <div
                  className={`absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium transition-all duration-300 ${
                    isExpanded ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72">
                    <Card className="border-border/30 bg-card/95 backdrop-blur-lg">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className={getStatusStyles(item.status)}
                          >
                            {item.status === "completed"
                              ? "COMPLETE"
                              : item.status === "in-progress"
                              ? "IN PROGRESS"
                              : "PENDING"}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {item.date}
                          </span>
                        </div>
                        <CardTitle className="text-base mt-2">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.content}
                        </p>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Zap className="w-3 h-3" />
                            Energy Level
                          </div>
                          <span className="text-xs font-medium text-foreground">
                            {item.energy}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                          <div
                            className="h-full rounded-full bg-foreground transition-all duration-1000"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>

                        {item.relatedIds.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-border/20">
                            <div className="flex items-center gap-1 mb-2">
                              <Link className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                Connected Nodes
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {item.relatedIds.map((relatedId) => {
                                const relatedItem = timelineData.find(
                                  (i) => i.id === relatedId
                                );
                                return (
                                  <Button
                                    key={relatedId}
                                    variant="outline"
                                    size="sm"
                                    className="h-6 text-xs"
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
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
