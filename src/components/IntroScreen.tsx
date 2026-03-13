import React, { useEffect } from "react";
import { motion, Variants } from "framer-motion";

export const IntroScreen = ({ onFinished }: { onFinished: () => void }) => {
  const words = ["Software Engineer", "Researcher", "Community Builder"];

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinished]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(12px)",
      scale: 1.02,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <motion.div
      key="intro-screen"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black px-4 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-full">
        {words.map((word, i) => (
          <React.Fragment key={i}>
            <motion.span
              variants={item}
              className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-white tracking-tighter whitespace-nowrap"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && (
              <motion.div
                variants={item}
                className="hidden md:block w-2 h-2 rounded-full bg-white/40 shrink-0"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};
