"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PopImage {
  id: number;
  x: number;
  y: number;
  image: string;
  index: number;
}

interface PreloaderProps {
  children: React.ReactNode;
  minLoadTime?: number;
}

export default function Preloader({
  children,
  minLoadTime = 5000,
}: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [popImages, setPopImages] = useState<PopImage[]>([]);

  const mousePos = useRef({ x: 0, y: 0 });
  const imageCounter = useRef(0);
  const lastPopTime = useRef(0);

  const images = [
    "Image1.png",
    "Image2.png",
    "Image3.png",
    "Image4.png",
    "Image5.png",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const now = Date.now();

      if (now - lastPopTime.current > 150) {
        lastPopTime.current = now;

        const newPopImage: PopImage = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          image: images[imageCounter.current % images.length],
          index: imageCounter.current,
        };

        imageCounter.current++;

        setPopImages((prev) => [...prev, newPopImage]);

        setTimeout(() => {
          setPopImages((prev) =>
            prev.filter((img) => img.id !== newPopImage.id),
          );
        }, 1200);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadTime);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [minLoadTime]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-[#0B0F1A] via-[#13172B] to-[#0B0F1A]">
        {/* Background Text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="whitespace-nowrap text-8xl font-black tracking-wider md:text-9xl">
              <span className="bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent">
                TIMEX
              </span>

              <br />

              <span className="text-6xl text-white/30 md:text-7xl">MEDIA</span>
            </h1>

            <p className="mt-4 text-sm tracking-wider text-white/20 md:text-base">
              PREMIUM MEDIA SERVICES
            </p>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-20 left-1/2 z-20 w-80 -translate-x-1/2 transform">
          <div className="h-0.5 overflow-hidden rounded-full bg-white/20">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: minLoadTime / 1000,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.p
            className="mt-3 text-center text-xs tracking-wider text-white/40"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            MOVE YOUR MOUSE • WATCH THE MAGIC
          </motion.p>
        </div>

        {/* Pop Images */}
        <AnimatePresence>
          {popImages.map((img, idx) => {
            const mainSize = 140;
            const isEven = img.index % 2 === 0;

            return (
              <motion.div
                key={img.id}
                className="pointer-events-none fixed"
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: isEven ? -200 : 200,
                  y: -30,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.3, 1.1, 0.4],
                  rotate: [0, 180, 360, 540],
                  x: img.x - mainSize / 2 + Math.sin(img.index) * 30,
                  y: img.y - mainSize / 2 - 50 + Math.cos(img.index) * 20,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1.2,
                  times: [0, 0.2, 0.5, 1],
                  ease: [0.34, 1.2, 0.64, 1],
                }}
                style={{
                  left: 0,
                  top: 0,
                  zIndex: 100 - idx,
                }}
              >
                <div className="relative">
                  <div
                    className="relative overflow-hidden rounded-2xl border-2 border-white/40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-2xl"
                    style={{
                      width: mainSize,
                      height: mainSize,
                    }}
                  >
                    <Image
                      src={`/${img.image}`}
                      alt=""
                      width={mainSize}
                      height={mainSize}
                      className="h-full w-full object-cover"
                      priority
                    />

                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-purple-400"
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    <motion.div
                      className="absolute -inset-4 rounded-full bg-purple-500/30 blur-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: [0, 0.4, 0] }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-white/30"
                      initial={{ opacity: 0, x: "-100%" }}
                      animate={{
                        opacity: [0, 0.5, 0],
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  <motion.div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: [0, 0.8, 0], y: [10, 0, -10] }}
                    transition={{
                      duration: 1,
                      times: [0, 0.3, 1],
                    }}
                  >
                    <span className="rounded-full bg-black/30 px-2 py-1 text-xs text-white/60 backdrop-blur-sm">
                      {img.image.replace(".png", "")}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  }

  return <>{children}</>;
}
