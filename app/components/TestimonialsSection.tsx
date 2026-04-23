"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FiCamera, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AnimateOnView from "./AnimateOnView";

type Testimonial = {
  name: string;
  role: string;
  location: string;
  rating: number;
  headline: string;
  quote: string;
  highlights: string[];
  initials: string;
  accent: string;
};

export default function TestimonialsSection() {
  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        name: "Ziprent",
        role: "Property Management",
        location: "San Francisco, CA",
        rating: 5,
        headline: "Listings that rent themselves.",
        quote:
          "Timex Media completely changed how our rentals perform online. The photos, drone work, and walkthrough videos cut our average days-on-market in half and inquiries doubled overnight. Truly a game-changer for our portfolio.",
        highlights: ["Rental Photography", "Drone Footage", "Walkthrough Video"],
        initials: "ZR",
        accent: "from-brand via-fuchsia-500 to-pink-500",
      },
      {
        name: "Nova West",
        role: "Real Estate Group",
        location: "San Jose, CA",
        rating: 5,
        headline: "24hr turnaround, zero compromises.",
        quote:
          "We upload a shoot in the afternoon and have gallery-ready photos, a branded reel, and a 3D tour ready by the next morning. Their consistency and attention to detail is why every agent on our team uses them.",
        highlights: ["3D Virtual Tour", "Same Day Edit", "Branded Reel"],
        initials: "NW",
        accent: "from-violet-500 via-brand to-indigo-500",
      },
      {
        name: "Mountain Mike's",
        role: "Pizza · Franchise Marketing",
        location: "Oakland, CA",
        rating: 4.9,
        headline: "Content that actually drives foot traffic.",
        quote:
          "From sizzle reels to in-store brand shoots, Timex Media delivered assets that made our locations stand out on every platform. Our social engagement jumped significantly after the first campaign launched.",
        highlights: ["Brand Campaign", "Food Cinematography", "Social Reels"],
        initials: "MM",
        accent: "from-brand-300 via-brand to-purple-700",
      },
      {
        name: "Calcost",
        role: "Commercial Services",
        location: "Sacramento, CA",
        rating: 5,
        headline: "The kind of media clients remember.",
        quote:
          "Timex Media made our company look twice its size. The aerial work and on-site video storytelling are genuinely gallery quality, and our conversion rate on quote requests went up 38% after relaunching with their content.",
        highlights: ["Aerial Drone", "Corporate Video", "Site Photography"],
        initials: "CC",
        accent: "from-pink-500 via-brand to-violet-600",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = testimonials[activeIndex];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, testimonials.length]);

  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-brand/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <AnimateOnView animation="fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/40 bg-brand/10 backdrop-blur-sm">
              <HiOutlineSparkles className="text-brand-300" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-brand-200">
                Client Love
              </span>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.1s">
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-brand-200 to-white bg-clip-text text-transparent">
                Real Agents. Real Results.
              </span>
            </h2>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.2s">
            <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              From first showing to sold – hear how Timex Media helps top
              agents win listings and move homes faster.
            </p>
          </AnimateOnView>
        </div>

        {/* Featured card */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-brand/70 via-white/10 to-fuchsia-500/50 shadow-[0_20px_80px_-20px_rgba(146,52,235,0.45)]">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#120726]/95 via-[#0b0418]/95 to-black/95 backdrop-blur-xl p-8 sm:p-12 overflow-hidden">
              {/* Decorative camera glyph */}
              <FiCamera className="absolute -top-6 -right-6 text-[10rem] text-brand/5" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-10 md:grid-cols-[auto_1fr] items-start"
                >
                  {/* Left column: avatar + rating */}
                  <div className="flex md:flex-col items-center md:items-start gap-5">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${active.accent} blur-xl opacity-70`}
                      />
                      <div
                        className={`relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl bg-gradient-to-br ${active.accent} flex items-center justify-center text-2xl sm:text-3xl font-bold text-white ring-1 ring-white/20`}
                      >
                        {active.initials}
                      </div>
                    </div>

                    <div className="md:mt-2">
                      <div className="flex items-center gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const filled = i < Math.floor(active.rating);
                          const half =
                            !filled && i < Math.ceil(active.rating) &&
                            active.rating % 1 !== 0;
                          return (
                            <RatingBar
                              key={i}
                              state={
                                filled ? "full" : half ? "half" : "empty"
                              }
                            />
                          );
                        })}
                        <span className="ml-2 text-sm font-semibold text-brand-200">
                          {active.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="mt-2 text-xs uppercase tracking-wider text-gray-400">
                        Verified Project
                      </p>
                    </div>
                  </div>

                  {/* Right column: quote */}
                  <div>
                    <span className="block text-6xl sm:text-7xl leading-none font-serif text-brand/60 mb-2">
                      &ldquo;
                    </span>

                    <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-4">
                      {active.headline}
                    </h3>

                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      {active.quote}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {active.highlights.map((chip) => (
                        <span
                          key={chip}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-brand/30 text-brand-100 hover:bg-brand/20 transition"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-end justify-between flex-wrap gap-4 pt-5 border-t border-white/10">
                      <div>
                        <p className="text-white font-semibold text-lg">
                          {active.name}
                        </p>
                        <p className="text-sm text-gray-400">{active.role}</p>
                        <p className="text-xs text-brand-300 mt-0.5">
                          {active.location}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Previous testimonial"
                          onClick={goPrev}
                          className="h-10 w-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-brand/20 hover:border-brand/60 transition flex items-center justify-center"
                        >
                          <FiChevronLeft />
                        </button>
                        <button
                          type="button"
                          aria-label="Next testimonial"
                          onClick={goNext}
                          className="h-10 w-10 rounded-full border border-brand/60 bg-brand/30 text-white hover:bg-brand/50 transition flex items-center justify-center"
                        >
                          <FiChevronRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Client picker row */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {testimonials.map((t, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`group relative text-left rounded-xl p-3 border transition-all duration-300 ${
                    isActive
                      ? "border-brand/60 bg-gradient-to-br from-brand/25 to-transparent shadow-[0_8px_30px_-10px_rgba(146,52,235,0.5)]"
                      : "border-white/10 bg-white/[0.03] hover:border-brand/30 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br ${t.accent} flex items-center justify-center text-xs font-bold text-white ring-1 ring-white/15`}
                    >
                      {t.initials}
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`text-sm font-semibold truncate ${
                          isActive ? "text-white" : "text-gray-200"
                        }`}
                      >
                        {t.name}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate">
                        {t.location}
                      </p>
                    </div>
                  </div>

                  {/* Progress indicator on active */}
                  {isActive && !paused && (
                    <motion.span
                      key={`bar-${activeIndex}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="absolute left-3 right-3 bottom-1.5 h-0.5 rounded-full bg-gradient-to-r from-brand via-fuchsia-400 to-brand-300"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RatingBar({ state }: { state: "full" | "half" | "empty" }) {
  return (
    <span className="relative inline-block h-2.5 w-6 rounded-full bg-white/10 overflow-hidden">
      <span
        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand to-fuchsia-400 ${
          state === "full" ? "w-full" : state === "half" ? "w-1/2" : "w-0"
        }`}
      />
    </span>
  );
}
