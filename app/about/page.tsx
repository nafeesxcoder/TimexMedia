import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnView from "../components/AnimateOnView";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About - Timex Media",
  description:
    "Learn about Timex Media: professional real estate photography, video, 3D tours, and marketing content. Our story, team, and service areas.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Hero - blurred background with centered title */}
      <section className="relative h-[40vh] min-h-[280px] sm:min-h-[320px] md:min-h-[380px] max-h-[55dvh] flex items-center justify-center overflow-hidden">
        <AnimateOnView
          animation="blur-in"
          className="absolute inset-0"
          rootMargin="0px"
          threshold={0.2}
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2073&auto=format&fit=crop"
            alt="Modern home interior"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />
        </AnimateOnView>
        <div className="relative z-10 text-center px-4 w-full max-w-[100vw]">
          <AnimateOnView
            animation="float-in"
            delay="0.15s"
            rootMargin="0px"
            threshold={0.2}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
              About
            </h1>
          </AnimateOnView>
        </div>
      </section>

      {/* Full-width banner strip (theme: brand purple) */}
      <section className="w-full bg-brand-600 py-3 sm:py-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest">
            About
          </h2>
        </div>
      </section>

      {/* Main content - single column, readable width */}
      <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-3xl mx-auto w-full min-w-0">
          <AnimateOnView animation="fade-in-up" className="space-y-6 sm:space-y-8">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Timex Media provides photography, aerial photography and video, 3D
              Matterport virtual tours, 2D floor plans, and other media services
              to residential and commercial real estate agents and property
              managers. We offer next-day turnaround on photos and create
              engaging content, reels, and social media marketing so agents get
              seen and build their personal brand as the expert in their market.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Our team brings years of experience in real estate media. We
              combine consistent quality, fast delivery, and marketing support so
              every listing stands out and every agent looks their best.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              The founder graduated with a degree in marketing and has 10+ years
              of experience in the real estate media industry, with a career that
              started in major metro markets and now serves clients across
              multiple regions with the same high standards and personal touch.
            </p>
            <div className="space-y-4 pt-2">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Serving the <strong className="text-white">Central Valley</strong>:
                Fresno, Clovis, Hanford, Oakhurst, Madera, Visalia, Merced, and
                surrounding areas.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Also serving the <strong className="text-white">Bay Area</strong> and{" "}
                <strong className="text-white">Central Coast</strong>: San Jose,
                Gilroy, Salinas, and surrounding areas.
              </p>
            </div>
          </AnimateOnView>

          {/* CTA button - centered */}
          <AnimateOnView animation="fade-in-up" delay="0.2s" className="mt-10 sm:mt-14 flex justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 text-base sm:text-lg font-semibold uppercase tracking-wide rounded-lg hover:opacity-90 active:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Book a call
            </Link>
          </AnimateOnView>
        </div>
      </section>

      {/* Contact strip - footer-like */}
      <section className="border-t border-white/20 bg-black/20 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-300">
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-brand-400 flex-shrink-0"
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
              className="text-white hover:text-brand-300 underline underline-offset-2 transition-colors"
            >
              support@timex.media
            </a>
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-brand-400 flex-shrink-0"
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
            <a
              href="tel:+15551234567"
              className="text-white hover:text-brand-300 transition-colors"
            >
              (555) 123-4567
            </a>
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
