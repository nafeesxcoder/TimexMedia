"use client";

import { useEffect, useState } from "react";

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Consult",
      desc: "We understand your vision and goals.",
      longDesc:
        "Deep dive into your property, target audience, and marketing objectives.",
      icon: "🎯",
    },
    {
      step: "02",
      title: "Plan",
      desc: "Custom shot list and scheduling.",
      longDesc: "Every angle mapped, every detail planned for maximum impact.",
      icon: "📋",
    },
    {
      step: "03",
      title: "Shoot",
      desc: "Professional capture of every detail.",
      longDesc: "Cinema-grade equipment, drone coverage, and 3D scanning.",
      icon: "📸",
    },
    {
      step: "04",
      title: "Edit",
      desc: "Expert color grading and retouching.",
      longDesc: "Pixel-perfect editing that makes every listing irresistible.",
      icon: "✨",
    },
    {
      step: "05",
      title: "Deliver",
      desc: "Next-day delivery of stunning assets.",
      longDesc: "Lightning-fast turnaround without compromising quality.",
      icon: "🚀",
    },
    {
      step: "06",
      title: "Market",
      desc: "Ready-to-use marketing materials.",
      longDesc:
        "Social templates, listing copy, and promotional assets included.",
      icon: "📢",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNumber = parseInt(
              entry.target.getAttribute("data-step") || "0",
            );
            setVisibleSteps((prev) => {
              if (!prev.includes(stepNumber)) {
                return [...prev, stepNumber];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    const stepElements = document.querySelectorAll("[data-step]");
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isStepVisible = (stepNum: number) => visibleSteps.includes(stepNum);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with fade-in animation */}
        <div className="text-center mb-16 animate-[fadeInUp_0.6s_ease_forwards]">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-3 block animate-[pulse_2s_infinite]">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            How It{" "}
            <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-brand-500 to-purple-500 mx-auto mt-4 rounded-full animate-[expandWidth_0.8s_ease_out]" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A seamless workflow from start to finish
          </p>
        </div>

        {/* Simple 6 Column Grid with animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {steps.map((step, idx) => {
            const isVisible = isStepVisible(idx + 1);
            const isHovered = hoveredStep === idx;
            const colors = [
              "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
              "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
              "from-purple-500/20 to-pink-500/20 border-purple-500/30",
              "from-pink-500/20 to-rose-500/20 border-pink-500/30",
              "from-orange-500/20 to-red-500/20 border-orange-500/30",
              "from-green-500/20 to-emerald-500/20 border-green-500/30",
            ];

            return (
              <div
                key={step.step}
                data-step={idx + 1}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`
                  group relative text-center transition-all duration-700 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Glowing background on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-br ${colors[idx].split(" ")[0]} ${colors[idx].split(" ")[1]}
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl
                  `}
                />

                {/* Card */}
                <div
                  className={`
                    relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 border 
                    ${colors[idx].split(" ")[2]}
                    transition-all duration-500
                    group-hover:scale-105 group-hover:shadow-2xl
                    ${isHovered ? "scale-105 shadow-2xl" : "scale-100"}
                  `}
                >
                  {/* Animated step number circle */}
                  <div className="relative mb-4">
                    <div
                      className={`
                        w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-gray-800 to-gray-900
                        border-2 ${colors[idx].split(" ")[2]}
                        flex items-center justify-center transition-all duration-300
                        group-hover:scale-110 group-hover:shadow-lg
                        ${isHovered ? "scale-110 shadow-lg" : "scale-100"}
                      `}
                    >
                      <span
                        className={`
                          text-brand-400 font-bold text-lg transition-all duration-300
                          ${isHovered ? "animate-bounce" : ""}
                        `}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Connector line */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[2px]">
                        <div className="w-full h-full bg-gradient-to-r from-brand-500/50 to-transparent rounded-full animate-[flowLine_1.5s_ease_infinite]" />
                      </div>
                    )}
                  </div>

                  {/* Icon with bounce animation on hover */}
                  <div
                    className={`
                      text-4xl mb-3 transition-all duration-300 inline-block
                      ${isHovered ? "animate-bounce" : ""}
                    `}
                  >
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover:text-brand-400">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-300">
                    {step.desc}
                  </p>

                  {/* Long description on hover */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500
                      ${isHovered ? "max-h-20 opacity-100 mt-3" : "max-h-0 opacity-0"}
                    `}
                  >
                    <p className="text-gray-500 text-xs leading-relaxed border-t border-white/10 pt-2">
                      {step.longDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated bottom note */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 animate-pulse">
            <span className="text-yellow-400 text-sm animate-bounce">⚡</span>
            <span className="text-gray-300 text-sm">
              <span className="text-brand-400 font-semibold">
                Next-day delivery
              </span>{" "}
              on all photo shoots
            </span>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 64px;
            opacity: 1;
          }
        }
        @keyframes flowLine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
        .animate-expandWidth {
          animation: expandWidth 0.8s ease-out;
        }
        .animate-flowLine {
          animation: flowLine 1.5s ease infinite;
          background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
          background-size: 200% 100%;
        }
      `}</style>
    </section>
  );
}
