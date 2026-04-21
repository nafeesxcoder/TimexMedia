"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percent)));
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove as any);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove as any);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
        style={{
          aspectRatio: "16/12",
          minHeight: 300,
        }}
        onMouseMove={handleMouseMove}
      >
        {/* After Image */}
        <div className="absolute inset-0 bg-gray-800 z-1">
          <img
            src={afterImage}
            alt={afterLabel}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Before Image */}
        <div
          className="absolute inset-0 bg-gray-600 z-2"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 z-10 cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
            width: "2px",
            backgroundColor: "white",
            boxShadow: "0 0 5px rgba(0,0,0,0.3)",
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center shadow-lg">
              <svg width="12" height="12" viewBox="0 0 10 10" fill="#7c3aed">
                <path d="M6.5 0L1 5L6.5 10L7.5 9L3 5L7.5 1Z" />
              </svg>
              <svg width="12" height="12" viewBox="0 0 10 10" fill="#7c3aed">
                <path d="M3.5 0L9 5L3.5 10L2.5 9L7 5L2.5 1Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-5 pointer-events-none">
          <span className="bg-black/70 text-white px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold backdrop-blur-sm">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-5 pointer-events-none">
          <span className="bg-black/70 text-white px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold backdrop-blur-sm">
            {afterLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
