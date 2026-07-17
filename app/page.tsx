"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimateOnView from "./components/AnimateOnView";
import AnimatedButton from "./components/AnimatedButton";
import PortfolioPreview from "./components/PortfolioPreview";
import Image from "next/image";
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

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden -mt-16">
        <div className="absolute inset-0">
          <Image
            src="/herosection.png"
            alt="Modern home interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <AnimateOnView animation="fade-in-up" delay="0.1s">
            <div className="inline-block mb-4 px-5 py-2 bg-white/10 backdrop-blur-sm border-l-4 border-purple-500 rounded-r-full">
              <span className="text-white text-sm font-medium tracking-wider uppercase animate-pulse">
                ⚡ Limited Time Offer: 20% Off First Shoot
              </span>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.2s">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                Timex Media
              </span>
            </h1>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.3s">
            <div className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4 leading-relaxed">
              <span className="font-bold">Capturing Dreams, </span>
              <span className="relative">
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold">
                  {text}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse"></span>
              </span>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              Where Every Pixel Tells a Story
            </p>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Professional photography & videography that makes your property
              <span className="text-purple-400 font-semibold">
                {" "}
                irresistible to buyers
              </span>
            </p>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.4s">
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <AnimatedButton text="🎬 Book Your Shoot →" link="/book-now" />
              <Link href="#services">
                <button className="group px-8 py-3.5 bg-white/10 backdrop-blur-md border border-purple-500/50 text-white font-semibold rounded-lg hover:bg-purple-600/30 hover:border-purple-400 transition-all duration-300">
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
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.5s">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-2 pt-2 border-t-0">
              <div className="group hover:scale-105 transition-all duration-300 cursor-pointer">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  500+
                </p>
                <p className="text-sm text-gray-300 mt-1 group-hover:text-purple-300 transition">
                  Properties Shot
                </p>
              </div>
              <div className="group hover:scale-105 transition-all duration-300 cursor-pointer">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  50+
                </p>
                <p className="text-sm text-gray-300 mt-1 group-hover:text-purple-300 transition">
                  Happy Agents
                </p>
              </div>
              <div className="group hover:scale-105 transition-all duration-300 cursor-pointer">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  24hr
                </p>
                <p className="text-sm text-gray-300 mt-1 group-hover:text-purple-300 transition">
                  Fast Turnaround
                </p>
              </div>
              <div className="group hover:scale-105 transition-all duration-300 cursor-pointer">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  4.9★
                </p>
                <p className="text-sm text-gray-300 mt-1 group-hover:text-purple-300 transition">
                  Client Rating
                </p>
              </div>
            </div>
          </AnimateOnView>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
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

