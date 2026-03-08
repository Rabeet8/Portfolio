"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"

interface LocationMapProps {
  location?: string
  coordinates?: string
  className?: string
}

export function LocationMap({
  location = "Karachi, Pakistan",
  coordinates = "24.8607° lat, 67.0011° long",
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = (containerRef.current as HTMLElement).getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`relative ${className ?? ""}`}>
      <motion.div
        ref={containerRef}
        className="relative w-72 h-44 rounded-2xl overflow-hidden cursor-pointer border border-border bg-card shadow-lg"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          perspective: 800,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        animate={{
          width: isExpanded ? 320 : 288,
          height: isExpanded ? 280 : 176,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-transparent z-0" />

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute inset-0 z-[1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Map visualization */}
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Main roads */}
                <line x1="30" y1="0" x2="30" y2="100" stroke="hsl(var(--foreground) / 0.1)" strokeWidth="0.8" />
                <line x1="70" y1="0" x2="70" y2="100" stroke="hsl(var(--foreground) / 0.1)" strokeWidth="0.8" />
                <line x1="0" y1="35" x2="100" y2="35" stroke="hsl(var(--foreground) / 0.1)" strokeWidth="0.8" />
                <line x1="0" y1="65" x2="100" y2="65" stroke="hsl(var(--foreground) / 0.1)" strokeWidth="0.8" />

                {/* Secondary streets */}
                {[20, 50, 80].map((y, i) => (
                  <line key={`h-${i}`} x1="0" y1={y} x2="100" y2={y} stroke="hsl(var(--foreground) / 0.05)" strokeWidth="0.4" />
                ))}
                {[15, 45, 55, 85].map((x, i) => (
                  <line key={`v-${i}`} x1={x} y1="0" x2={x} y2="100" stroke="hsl(var(--foreground) / 0.05)" strokeWidth="0.4" />
                ))}
              </svg>

              {/* Buildings */}
              <div className="absolute top-[20%] left-[10%] w-8 h-6 rounded-sm bg-muted-foreground/10" />
              <div className="absolute top-[40%] left-[40%] w-10 h-5 rounded-sm bg-muted-foreground/10" />
              <div className="absolute top-[60%] left-[75%] w-6 h-8 rounded-sm bg-muted-foreground/10" />
              <div className="absolute top-[15%] left-[60%] w-7 h-7 rounded-sm bg-muted-foreground/10" />
              <div className="absolute top-[70%] left-[20%] w-9 h-4 rounded-sm bg-muted-foreground/10" />

              {/* Location pin */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40" />
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-30" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid pattern - only when collapsed */}
        <svg className="absolute inset-0 w-full h-full z-[1] pointer-events-none" style={{ opacity: isExpanded ? 0 : 0.4 }}>
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--foreground) / 0.06)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-5">
          {/* Top section */}
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              {/* Map pin icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-1.5 bg-primary/10 rounded-full px-2.5 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-medium text-primary">Live</span>
            </div>
          </div>

          {/* Bottom section */}
          <div>
            <p className="text-sm font-semibold text-foreground">{location}</p>
            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  className="text-xs text-muted-foreground mt-0.5"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {coordinates}
                </motion.p>
              )}
            </AnimatePresence>
            {/* Animated underline */}
            <motion.div
              className="h-0.5 bg-primary/40 rounded-full mt-2"
              animate={{ width: isHovered || isExpanded ? "100%" : "40%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Click hint */}
      <motion.p
        className="text-[10px] text-muted-foreground text-center mt-2"
        animate={{ opacity: isHovered && !isExpanded ? 1 : 0 }}
      >
        Click to expand
      </motion.p>
    </div>
  )
}
