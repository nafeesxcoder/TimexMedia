"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimateOnView from "./components/AnimateOnView";
import AnimatedButton from "./components/AnimatedButton";
import PortfolioPreview from "./components/PortfolioPreview";
import Link from "next/link";
import { SERVICES } from "./lib/services";
import { FEATURED_VIDEOS } from "./lib/videos";
import SocialPosts from "./components/SocialPosts";

import BeforeAfterSlider from "./components/BeforeAfterSlider";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const words = [
    "Photography",
    "Videography",
    "Drone Shots",
    "3D Tours",
    "Cinematic Edits",
  ];

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentWord.length) {
            setText(currentWord.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (text.length > 0) {
            setText(currentWord.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 80 : 120,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  // Scroll-locked hero video: page can't scroll past hero until video fully scrubs.
  // Text/buttons only reveal once the video is nearly finished.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Total wheel/touch px needed to scrub the ENTIRE video.
    // Higher = slower, more scroll needed. Tune this to taste.
    const SCROLL_DISTANCE = 1400;
    // Text/button reveal only after this fraction of the video has played
    const REVEAL_THRESHOLD = 0.85;

    let progress = 0; // 0 = start, 1 = fully scrubbed
    let rafId: number | null = null;
    let pendingProgress: number | null = null;

    const applyVideoTime = () => {
      rafId = null;
      if (pendingProgress === null) return;
      const p = pendingProgress;
      if (video.duration && !Number.isNaN(video.duration)) {
        video.currentTime = p * video.duration;
      }
      setShowContent(p >= REVEAL_THRESHOLD);
      pendingProgress = null;
    };

    const scheduleApply = (p: number) => {
      pendingProgress = p;
      if (!rafId) rafId = requestAnimationFrame(applyVideoTime);
    };

    // We only intervene while the page hasn't scrolled past the hero.
    const atHeroTop = () => window.scrollY <= 0;

    const handleWheel = (e: WheelEvent) => {
      if (!atHeroTop()) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // Video finished + scrolling down -> release, let the page scroll to next section
      if (progress >= 1 && scrollingDown) return;
      // Video at start + scrolling up -> nothing to rewind, let default happen
      if (progress <= 0 && scrollingUp) return;

      // Otherwise we own this scroll: scrub the video instead of moving the page
      e.preventDefault();
      progress = Math.min(Math.max(progress + e.deltaY / SCROLL_DISTANCE, 0), 1);
      scheduleApply(progress);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!atHeroTop()) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY; // positive = finger moving up = scroll-down intent
      touchStartY = currentY;

      const scrollingDown = deltaY > 0;
      const scrollingUp = deltaY < 0;

      if (progress >= 1 && scrollingDown) return;
      if (progress <= 0 && scrollingUp) return;

      e.preventDefault();
      progress = Math.min(
        Math.max(progress + deltaY / (SCROLL_DISTANCE * 0.6), 0),
        1,
      );
      scheduleApply(progress);
    };

    const handleLoaded = () => scheduleApply(progress);

    video.addEventListener("loadedmetadata", handleLoaded);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    if (video.readyState >= 1) scheduleApply(progress);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

     {/* Scroll-locked video hero — text/buttons reveal only near the end of the video */}
      <section
        ref={sectionRef}
        className="relative h-screen flex items-center justify-center overflow-hidden -mt-16"
      >
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/homevideo.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/30"></div>
        </div>

        <div
          className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-700 ease-out ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
          }`}
        >
          <h1 className="mb-5 tracking-tight">
            <span
              className={`block text-lg sm:text-2xl md:text-3xl font-light text-purple-200/80 tracking-[0.3em] uppercase mb-2 transition-all duration-700 ${
                showContent
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-3"
              }`}
              style={{ transitionDelay: showContent ? "150ms" : "0ms" }}
            >
              Welcome to
            </span>
            <span
              className={`block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] transition-all duration-700 ${
                showContent
                  ? "opacity-100 blur-0 translate-y-0 scale-100"
                  : "opacity-0 blur-sm translate-y-4 scale-95"
              }`}
              style={{ transitionDelay: showContent ? "350ms" : "0ms" }}
            >
              Timex Media
            </span>
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg text-transparent bg-gradient-to-r from-purple-200 via-white to-pink-200 bg-clip-text font-medium tracking-[0.15em] uppercase mb-10 max-w-xl mx-auto transition-all duration-700 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: showContent ? "550ms" : "0ms" }}
          >
            Real Estate Photography &amp; Video, Reimagined
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 justify-center items-center transition-all duration-700 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: showContent ? "700ms" : "0ms" }}
          >
            <AnimatedButton text="🎬 Book Your Shoot →" link="/book-now" />
            <Link href="#services">
              <button className="group px-5 py-2.5 text-sm bg-white/10 backdrop-blur-md border border-purple-500/50 text-white font-semibold rounded-lg hover:bg-purple-600/30 hover:border-purple-400 transition-all duration-300">
                <span className="inline-block mr-2 group-hover:rotate-12 transition-transform">
                  🎥
                </span>
                View Our Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-500 ${
            showContent ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-6 h-10 rounded-full border-2 border-purple-400/60 flex justify-center">
            <div className="w-1.5 h-2 bg-purple-400 rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-\[gradient_3s_linear_infinite\] {
          animation: gradient 3s linear infinite;
        }
      `}</style>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <AnimateOnView animation="fade-in-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand mb-4 uppercase tracking-tight">
                Real Estate Photography, Video & Marketing
              </h2>
              <p className="text-brand-400 text-sm sm:text-base font-medium uppercase tracking-wide">
                Service
              </p>
            </AnimateOnView>

            <AnimateOnView
              animation="fade-in-right"
              delay="0.15s"
              className="space-y-6 text-gray-300 leading-relaxed"
            >
              <p className="text-base sm:text-lg">
                Timex Media is a premier full-service creative agency
                specializing in delivering exceptional photography, videography,
                aerial drone services, immersive 3D virtual tours, and
                comprehensive real estate marketing solutions.
              </p>
              <p className="text-base sm:text-lg">
                With lightning-fast turnaround times and breathtaking visual
                content, our services enable clients to stand out in a
                competitive market.
              </p>
              <div className="pt-4 border-t border-gray-500/50">
                <p className="text-base sm:text-lg font-medium text-white mb-2">
                  Service Areas:
                </p>
                <p className="text-base sm:text-lg text-gray-300">
                  San Francisco, Oakland, San Jose, Sacramento, Fresno, and
                  surrounding communities.
                </p>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimateOnView animation="fade-in-down">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                See the <span className="text-brand">Difference</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Professional editing transforms ordinary photos into stunning
                visuals
              </p>
            </AnimateOnView>
          </div>
          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider beforeLabel="BEFORE" afterLabel="AFTER" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimateOnView animation="fade-in-down">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Our Services
              </h2>
              <p className="text-gray-300 mt-4">
                Professional solutions for your property
              </p>
            </AnimateOnView>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES && SERVICES.length > 0 ? (
              SERVICES.map((service, i) => (
                <AnimateOnView
                  key={service.slug}
                  animation="fade-in-up"
                  delay={`${0.05 * i}s`}
                  className="group"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="block h-full rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 hover:border-purple-500/50"
                  >
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-purple-400 font-medium">
                      Learn more{" "}
                      <span className="group-hover:translate-x-1 transition">
                        →
                      </span>
                    </span>
                  </Link>
                </AnimateOnView>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-400 py-10">
                No services available
              </div>
            )}
          </div>

          <AnimateOnView
            animation="fade-in-up"
            delay="0.4s"
            className="mt-14 text-center"
          >
            <AnimatedButton text="Explore all services" link="/services" />
          </AnimateOnView>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Videos
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Check out our latest video productions
            </p>
          </AnimateOnView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_VIDEOS.map((video, i) => (
              <AnimateOnView
                key={video.id}
                animation="fade-in-up"
                delay={`${0.05 * i}s`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                  {/* Video Thumbnail Placeholder - Without Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 text-gray-600 mx-auto mb-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <p className="text-gray-600 text-sm">
                        Preview coming soon
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-purple-400">
                      {video.category}
                    </span>
                    <h3 className="font-semibold text-white mt-1">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                      {video.description}
                    </p>
                    {/* Learn More Button  */}
                    <Link
                      href={`/videos/${video.slug}`}
                      className="inline-flex items-center gap-2 mt-3 text-sm text-purple-400 hover:text-purple-300 transition-colors group/learn"
                    >
                      Learn More
                      <span className="group-hover/learn:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>

          {/* View All Videos button removed */}
        </div>
      </section>
      <SocialPosts />

      <PortfolioPreview />

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnView animation="float-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Showcase Your Property?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you create stunning visuals that sell. Book your shoot
              today!
            </p>
            <div className="flex justify-center">
              <AnimatedButton text="Book Now" link="/book-now" />
            </div>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </div>
  );
}