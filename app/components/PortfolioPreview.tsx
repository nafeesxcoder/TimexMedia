"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "./AnimateOnView";
import AnimatedButton from "./AnimatedButton";

const PortfolioPreview = () => {
  // Array of 10 image numbers
  const imageNumbers = [1, 25, 3, 6, 26, 27, 9, 10, 21, 22];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
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

        {/* Image Grid - 10 Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {imageNumbers.map((num, i) => (
            <AnimateOnView
              key={num}
              animation="scale-in"
              delay={`${0.03 * i}s`}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <Image
                src={`/Image${num}.png`}
                alt={`Portfolio image ${num}`}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium text-center">
                  View Project →
                </p>
              </div>
            </AnimateOnView>
          ))}
        </div>

        {/* View All Button - Using AnimatedButton component */}
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
