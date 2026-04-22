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

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate position relative to container
    let x = clientX - rect.left;
    // Clamp to container bounds
    x = Math.max(0, Math.min(x, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percent)));
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ("clientX" in e) {
      updateSliderPosition(e.clientX);
    } else {
      e.preventDefault();
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    let clientX: number;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    updateSliderPosition(clientX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Handle tap/click on container
  const handleContainerTap = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    let clientX: number;
    if ("clientX" in e) {
      clientX = e.clientX;
    } else {
      clientX = e.changedTouches[0].clientX;
    }
    const rect = containerRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percent)));
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleMove, { passive: false });
      window.addEventListener("touchend", handleDragEnd);
      window.addEventListener("touchcancel", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleDragEnd);
      window.removeEventListener("touchcancel", handleDragEnd);
    };
  }, [isDragging]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative w-full ${className}`}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg touch-action-none"
        style={{
          aspectRatio: "16/12",
          width: "100%",
          cursor: "grab",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleContainerTap}
        onClick={handleContainerTap}
      >
        {/* After Image (Full Width) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={afterImage}
            alt={afterLabel}
            className="w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            width: `${sliderPosition}%`,
          }}
        >
          <div className="absolute inset-0 w-[calc(100%*100/var(--percent,100))] min-w-full">
            <img
              src={beforeImage}
              alt={beforeLabel}
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Slider Handle - Larger touch area for mobile */}
        <div
          className="absolute top-0 bottom-0 z-10 touch-none"
          style={{
            left: `calc(${sliderPosition}% - 24px)`,
            width: "48px",
            cursor: "ew-resize",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Handle Line */}
          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width: "3px",
              backgroundColor: "white",
              boxShadow: "0 0 8px rgba(0,0,0,0.5)",
            }}
          />

          {/* Handle Button - Larger for mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center shadow-lg active:scale-95 transition-transform">
              {/* Left Arrow */}
              <svg width="16" height="16" viewBox="0 0 10 10" fill="#7c3aed">
                <path d="M6.5 0L1 5L6.5 10L7.5 9L3 5L7.5 1Z" />
              </svg>
              {/* Right Arrow */}
              <svg width="16" height="16" viewBox="0 0 10 10" fill="#7c3aed">
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
