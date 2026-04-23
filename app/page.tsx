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
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  // Typewriter effect states
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

      {/* Hero Section with Typewriter - Reduced Height */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2073&auto=format&fit=crop"
            alt="Modern home interior"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <AnimateOnView animation="fade-in-up" delay="0.1s">
            <div className="inline-block mb-4 px-5 py-2 bg-white/10 backdrop-blur-sm border-l-4 border-purple-500">
              <span className="text-white text-sm font-medium tracking-wider uppercase">
                Premium Real Estate Media
              </span>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.2s">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
                Timex Media
              </span>
            </h1>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.3s">
            <div className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-4 leading-relaxed">
              <span className="font-medium">Professional </span>
              <span className="relative">
                <span className="text-purple-400 font-bold border-r-2 border-purple-400 animate-pulse">
                  {text}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-500"></span>
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed">
              Transforming properties into{" "}
              <span className="text-purple-400 font-semibold border-b border-purple-400">
                visual masterpieces
              </span>{" "}
              that stand out and sell faster.
            </p>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.4s">
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <AnimatedButton text="Book Your Shoot →" link="/book-now" />

              <Link href="#services">
                <button className="group px-8 py-3.5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Explore Services
                  <span className="inline-block ml-2 group-hover:translate-y-1 transition-transform">
                    ↓
                  </span>
                </button>
              </Link>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.5s">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-6 border-t border-white/10">
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-white">
                  500+
                </p>
                <p className="text-sm text-gray-300 mt-1">Properties Shot</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-white">50+</p>
                <p className="text-sm text-gray-300 mt-1">Happy Agents</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-white">
                  24hr
                </p>
                <p className="text-sm text-gray-300 mt-1">Turnaround</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-white">
                  4.9★
                </p>
                <p className="text-sm text-gray-300 mt-1">Client Rating</p>
              </div>
            </div>
          </AnimateOnView>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 rounded-full border border-white/40 flex justify-center">
            <div className="w-1 h-1.5 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
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
            <BeforeAfterSlider
              beforeImage="https://framerusercontent.com/images/4PGq4w5rfdX9aFwoglHjuLkEbw.png?width=1600&height=1200"
              afterImage="https://framerusercontent.com/images/gtCK1FJ1DO1s0BqfXUkLNUsb39E.png?width=1600&height=1200"
              beforeLabel="BEFORE"
              afterLabel="AFTER"
            />
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
