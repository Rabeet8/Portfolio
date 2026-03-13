"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    id: "muhammad-ahmed",
    testimonial: "I had the opportunity to lead and work closely with Syed Rabeet at Technyx Systems. He consistently demonstrated strong ownership and problem-solving skills, particularly in building performant React Native features and complex UI components. Rabeet collaborates well with product and QA teams and is reliable when it comes to delivering stable, high-quality releases. I highly recommend him as a dependable and skilled mobile engineer.",
    by: "Muhammad Ahmed, Software Engineer @Technyx Systems",
    link: "https://www.linkedin.com/in/syedrabeet/details/recommendations/"
  },
  {
    id: "huizaifa",
    testimonial: "I had the pleasure of working with Syed Rabeet on a mobile application project, and it was a great experience. He is highly responsive, reliable, and consistently delivers high-quality work. One thing that really stands out is his ability to complete tasks ahead of schedule while maintaining excellent attention to detail. I would definitely recommend him to anyone looking for a skilled and dependable professional.",
    by: "Huzaifa Kamran, AI Engineer at TMC",
    link: "https://www.linkedin.com/in/syedrabeet/details/recommendations/"
  },

];

export const StaggerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(480);
  const [cardWidth, setCardWidth] = useState(420);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardWidth(matches ? 400 : 300);
      setCardHeight(matches ? 440 : 500);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full h-[700px] flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {testimonials.map((testimonial, index) => {
            let position = index - currentIndex;

            if (position > testimonials.length / 2) position -= testimonials.length;
            if (position < -testimonials.length / 2) position += testimonials.length;

            if (Math.abs(position) > 2) return null;

            const isCenter = position === 0;

            return (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  x: position * (cardWidth * 0.72),
                  scale: isCenter ? 1 : 0.85,
                  opacity: isCenter ? 1 : 0.45,
                  zIndex: isCenter ? 20 : 10 - Math.abs(position),
                  rotate: isCenter ? 0 : position * 2,
                  y: isCenter ? -40 : Math.abs(position) * 20,
                }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) handlePrev();
                  else if (info.offset.x < -100) handleNext();
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
                onClick={() => position !== 0 && setCurrentIndex(index)}
                className={cn(
                  "absolute p-6 md:p-8 cursor-pointer border transition-colors flex flex-col group",
                  isCenter
                    ? "bg-white text-black border-white"
                    : "bg-zinc-800/50 text-zinc-400 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600"
                )}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  clipPath: `polygon(40px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 40px) 100%, 40px 100%, 0 100%, 0 0)`,
                  boxShadow: isCenter ? "0px 30px 60px -15px rgba(255,255,255,0.1)" : "none"
                }}
              >
                <span
                  className="absolute block origin-top-right rotate-45 bg-zinc-200"
                  style={{
                    right: -2,
                    top: 38,
                    width: SQRT_5000,
                    height: 1
                  }}
                />

                <Quote className={cn(
                  "mb-4 h-8 w-8 md:h-10 md:w-10 opacity-20 shrink-0",
                  isCenter ? "text-black" : "text-white"
                )} />

                <div className="flex-grow flex flex-col justify-start overflow-y-auto pr-4 custom-scrollbar">
                  <h3 className={cn(
                    "text-sm sm:text-base md:text-[16px] font-medium leading-[1.6] italic",
                    isCenter ? "text-black" : "text-zinc-200"
                  )}>
                    "{testimonial.testimonial}"
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-current/10 shrink-0">
                  <p className={cn(
                    "text-[10px] md:text-xs font-bold uppercase tracking-[0.1em]",
                    isCenter ? "text-black/60" : "text-zinc-600"
                  )}>
                    {testimonial.by}
                  </p>

                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={cn(
                      "mt-3 inline-flex items-center gap-2 text-xs font-bold transition-all hover:gap-3",
                      isCenter
                        ? "text-black border-b border-black/20 hover:border-black"
                        : "text-white/30 hover:text-white"
                    )}
                  >
                    View Recommendation
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8 z-30">
        <button
          onClick={handlePrev}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all border",
            "bg-black border-zinc-800 text-white hover:bg-white hover:text-black shadow-2xl shadow-black"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all border",
            "bg-black border-zinc-800 text-white hover:bg-white hover:text-black shadow-2xl shadow-black"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
