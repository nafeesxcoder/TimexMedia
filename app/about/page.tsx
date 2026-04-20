import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import StatsSection from "./StatsSection";
import ProcessSection from "./ProcessSection";
import AnimateOnView from "../components/AnimateOnView";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About - Timex Media | Real Estate Photography & Marketing",
  description:
    "Timex Media is a premier full-service creative agency specializing in photography, videography, drone, 3D tours, and real estate marketing. Serving Northern California, expanding to SoCal.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Hero section - same as before */}
      <section className="relative h-[40vh] min-h-[280px] sm:min-h-[320px] md:min-h-[380px] max-h-[55dvh] flex items-center justify-center overflow-hidden">
        <AnimateOnView
          animation="blur-in"
          className="absolute inset-0"
          rootMargin="0px"
          threshold={0.2}
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2073&auto=format&fit=crop"
            alt="Modern luxury home interior"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
        </AnimateOnView>
        <div className="relative z-10 text-center px-4 w-full">
          <AnimateOnView animation="float-in" delay="0.15s">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
              About Timex Media
            </h1>
          </AnimateOnView>
        </div>
      </section>

      {/* Full-width brand strip */}
      <section className="w-full bg-brand-600 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest">
            Visual Storytelling That Sells Real Estate
          </h2>
        </div>
      </section>

      {/* ✅ AboutSection component - replaces the old two-column layout */}
      <AboutSection variant="full" showCta={true} />
      <TeamSection />
      <StatsSection />
      <ProcessSection />

      {/* Contact strip - same as before */}
      <section className="border-t border-white/10 bg-black/30 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-300">
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-brand-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:support@timex.media"
              className="text-white hover:text-brand-300 underline underline-offset-2"
            >
              support@timex.media
            </a>
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-brand-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
