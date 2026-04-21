"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type PreloaderProps = {
  minLoadTime?: number;
  children: React.ReactNode;
};

export default function Preloader({
  minLoadTime = 2500,
  children,
}: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [minLoadTime]);

  const particles = [
    { top: "15%", left: "20%" },
    { top: "25%", left: "75%" },
    { top: "45%", left: "35%" },
    { top: "60%", left: "80%" },
    { top: "75%", left: "15%" },
    { top: "85%", left: "55%" },
    { top: "35%", left: "45%" },
    { top: "55%", left: "10%" },
    { top: "70%", left: "65%" },
    { top: "90%", left: "40%" },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <div className="relative h-32 w-32">
              {/* Main rotating circle */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand border-r-brand"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Second rotating circle (reverse) */}
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-transparent border-b-purple-500 border-l-purple-500"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Center dot */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-3 w-3 rounded-full bg-brand" />
              </motion.div>

              {/* Floating particles */}
              {particles.map((position, i) => (
                <motion.div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-brand/60"
                  style={{
                    top: position.top,
                    left: position.left,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Loading text */}
            <motion.div
              className="absolute bottom-20 left-0 right-0 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-gray-400">
                Loading amazing content...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children only when not loading */}
      {!isLoading && children}
    </>
  );
}
