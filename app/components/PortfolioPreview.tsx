"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimateOnView from "./AnimateOnView";
import AnimatedButton from "./AnimatedButton";

const PortfolioPreview = () => {
  // Array of 10 image numbers
  const imageNumbers = [1, 25, 3, 6, 26, 27, 9, 10, 21, 22];

  // State to track hover position for each slider
  const [sliderPositions, setSliderPositions] = useState<{
    [key: number]: number;
  }>(imageNumbers.reduce((acc, _, index) => ({ ...acc, [index]: 50 }), {}));

  const [isDragging, setIsDragging] = useState<{ [key: number]: boolean }>(
    imageNumbers.reduce((acc, _, index) => ({ ...acc, [index]: false }), {}),
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (!isDragging[index]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPositions((prev) => ({
      ...prev,
      [index]: Math.min(Math.max(percentage, 0), 100),
    }));
  };

  const handleMouseDown = (index: number) => {
    setIsDragging((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseUp = () => {
    setIsDragging((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        newState[Number(key)] = false;
      });
      return newState;
    });
  };

  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement>,
    index: number,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPositions((prev) => ({
      ...prev,
      [index]: Math.min(Math.max(percentage, 0), 100),
    }));
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20"
      onMouseUp={handleMouseUp}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading - Our Recent Work */}
        <div className="text-center mb-16">
          <AnimateOnView animation="fade-in-down">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-brand">Recent Work</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Browse through our latest professional photography and videography
              projects
            </p>
          </AnimateOnView>
        </div>

        {/* Before & After Section */}
        <div className="text-center mb-12">
          <AnimateOnView animation="fade-in-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Before <span className="text-brand">& After</span>
            </h3>
            <p className="text-gray-300 text-md max-w-2xl mx-auto">
              Slide to see the transformation
            </p>
          </AnimateOnView>
        </div>

        {/* Image Grid - 10 Images with Before/After Sliders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {imageNumbers.map((num, i) => (
            <AnimateOnView
              key={num}
              animation="scale-in"
              delay={`${0.03 * i}s`}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-900 shadow-lg">
                {/* Slider Container */}
                <div
                  className="relative w-full h-full cursor-ew-resize"
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  onMouseDown={() => handleMouseDown(i)}
                  onTouchMove={(e) => handleTouchMove(e, i)}
                >
                  {/* AFTER Image (High Quality) - Full width */}
                  <div className="absolute inset-0">
                    <Image
                      src={`/Image${num}.png`}
                      alt={`After - Image ${num}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      quality={100}
                      priority={i < 4}
                    />
                  </div>

                  {/* BEFORE Image (Extremely Low Quality) - Clipped */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPositions[i]}%` }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={`/Image${num}.png`}
                        alt={`Before - Image ${num}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        quality={1}
                        style={{
                          filter:
                            "blur(20px) brightness(0.2) contrast(0.3) saturate(0) grayscale(1)",
                          opacity: 0.8,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent"></div>
                    </div>
                  </div>

                  {/* Slider Handle - Only Line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg cursor-ew-resize z-20"
                    style={{ left: `${sliderPositions[i]}%` }}
                  />

                  {/* Labels - Only BEFORE and AFTER */}
                  <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-white z-20">
                    BEFORE
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-white z-20">
                    AFTER
                  </div>

                  {/* Drag Instruction */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-[8px] text-white/70 z-20 whitespace-nowrap">
                    {isDragging[i] ? "DRAG →" : "← DRAG →"}
                  </div>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <AnimateOnView animation="fade-in-up" delay="0.4s">
            <AnimatedButton
              text="View All Materials"
              link="/marketing-materials"
            />
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
