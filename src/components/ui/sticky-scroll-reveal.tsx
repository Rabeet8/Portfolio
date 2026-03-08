"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgb(0 0 0)",
    "rgb(0 0 0)",
    "rgb(0 0 0)",
  ];

  const linearGradients = [
    "transparent",
    "transparent",
    "transparent",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[36rem] overflow-y-auto flex justify-between relative space-x-16 rounded-md px-6 md:px-12 lg:px-16 py-10 no-scrollbar scroll-smooth max-w-7xl mx-auto"
      ref={ref}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        scrollBehavior: "smooth",
      }}
    >
      <div className="div relative flex items-start px-4 flex-1 min-w-0">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-28">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-bold text-foreground"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-base text-muted-foreground mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-80 w-[28rem] rounded-md sticky top-10 overflow-hidden flex-shrink-0",
          contentClassName
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ background: backgroundGradient }}
          className="h-full w-full"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
};
