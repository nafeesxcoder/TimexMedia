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

export default function Preloader({ children }: { children: React.ReactNode }) {
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
      // Pop up one image at a time on mouse move
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

        // Remove image after animation completes
        setTimeout(() => {
          setPopImages((prev) =>
            prev.filter((img) => img.id !== newPopImage.id),
          );
        }, 1200);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => setIsLoading(false), 5000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0B0F1A] via-[#13172B] to-[#0B0F1A] overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-8xl md:text-9xl font-black tracking-wider whitespace-nowrap">
              <span className="bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent">
                TIMEX
              </span>
              <br />
              <span className="text-6xl md:text-7xl text-white/30">MEDIA</span>
            </h1>
            <p className="text-white/20 text-sm md:text-base mt-4 tracking-wider">
              PREMIUM MEDIA SERVICES
            </p>
          </motion.div>
        </div>

        {/* Loading Progress Bar */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 z-20">
          <div className="h-0.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "easeInOut" }}
            />
          </div>
          <motion.p
            className="text-white/40 text-xs text-center mt-3 tracking-wider"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            MOVE YOUR MOUSE • WATCH THE MAGIC
          </motion.p>
        </div>

        {/* One by One Pop Up Images */}
        <AnimatePresence>
          {popImages.map((img, idx) => {
            // Larger image sizes
            const mainSize = 140;
            const isEven = img.index % 2 === 0;

            return (
              <motion.div
                key={img.id}
                className="fixed pointer-events-none"
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
                style={{ left: 0, top: 0, zIndex: 100 - idx }}
              >
                <div className="relative">
                  {/* Main Large Image */}
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/40 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                    style={{ width: mainSize, height: mainSize }}
                  >
                    <Image
                      src={`/${img.image}`}
                      alt=""
                      width={mainSize}
                      height={mainSize}
                      className="object-cover w-full h-full"
                      priority
                    />

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-purple-400"
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    {/* Soft Glow */}
                    <motion.div
                      className="absolute -inset-4 rounded-full bg-purple-500/30 blur-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: [0, 0.4, 0] }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />

                    {/* Flash Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-white/30"
                      initial={{ opacity: 0, x: "-100%" }}
                      animate={{ opacity: [0, 0.5, 0], x: ["-100%", "100%"] }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Floating Particles Around Image */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-3 h-3 bg-purple-400 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      x: [0, 20],
                      y: [0, -20],
                    }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      x: [0, -15],
                      y: [0, 15],
                    }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  />
                  <motion.div
                    className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-yellow-400 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      x: [0, 25],
                      y: [0, -10],
                    }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-1/2 -left-4 w-1.5 h-1.5 bg-blue-400 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      x: [0, -20],
                      y: [0, 10],
                    }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  />

                  {/* Text Label that fades in/out */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: [0, 0.8, 0], y: [10, 0, -10] }}
                    transition={{ duration: 1, times: [0, 0.3, 1] }}
                  >
                    <span className="text-xs text-white/60 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                      {img.image.replace(".png", "")}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Custom Cursor */}
        <motion.div
          className="fixed pointer-events-none z-[200]"
          animate={{
            x: mousePos.current.x - 16,
            y: mousePos.current.y - 16,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 500,
            mass: 0.3,
          }}
        >
          <div className="relative">
            {/* Outer ring */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg" />
            {/* Inner dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Pulse ring */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-purple-400/60"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Cursor Glow Effect */}
        <motion.div
          className="fixed pointer-events-none z-[199] w-56 h-56 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            x: mousePos.current.x - 112,
            y: mousePos.current.y - 112,
          }}
          transition={{ type: "tween", duration: 0.05 }}
        />
      </div>
    );
  }

  return <>{children}</>;
}
