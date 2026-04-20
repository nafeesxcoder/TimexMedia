import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimateOnView from "./components/AnimateOnView";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "./lib/services";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Hero Section - responsive heights for all viewports */}
      <section className="relative h-[70vh] min-h-[400px] sm:min-h-[500px] max-h-[90dvh] flex items-center justify-center overflow-hidden">
        {/* Background Image from Unsplash */}
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
          {/* Blur overlay */}
          <div className="absolute inset-0 backdrop-blur-xs bg-black/10"></div>
        </AnimateOnView>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 w-full max-w-[100vw]">
          <AnimateOnView
            animation="float-in"
            delay="0.2s"
            rootMargin="0px"
            threshold={0.2}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand tracking-tight break-words">
              Timex Media
            </h1>
          </AnimateOnView>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <AnimateOnView animation="fade-in-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand mb-4 uppercase tracking-tight">
                Real Estate Photography, Video & Marketing
              </h2>
              <p className="text-brand-400 text-sm sm:text-base font-medium uppercase tracking-wide">
                Service
              </p>
            </AnimateOnView>

            {/* Right Column */}
            <AnimateOnView
              animation="fade-in-right"
              delay="0.15s"
              className="space-y-6 text-gray-300 leading-relaxed"
            >
              <p className="text-base sm:text-lg">
                Timex Media is a premier full-service creative agency
                specializing in delivering exceptional photography, videography,
                aerial drone services, immersive 3D virtual tours, and
                comprehensive real estate marketing solutions. Our passionate
                team is committed to working tirelessly to maximize your
                efficiency and help you achieve your business goals.
              </p>

              <p className="text-base sm:text-lg">
                With lightning-fast turnaround times, breathtaking visual
                content, and unwavering commitment to quality, our services
                enable clients to stand out in a competitive market, establish a
                distinctive brand identity, and position themselves as industry
                leaders.
              </p>

              <div className="pt-4 border-t border-gray-500/50">
                <p className="text-base sm:text-lg font-medium text-white mb-2">
                  Service Areas:
                </p>
                <p className="text-base sm:text-lg text-gray-300">
                  Currently serving major metropolitan areas including San
                  Francisco, Oakland, San Jose, Sacramento, Fresno, and
                  surrounding communities throughout Northern California. We are
                  actively expanding our reach to serve clients across the West
                  Coast.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-base sm:text-lg text-gray-300">
                  <span className="font-semibold text-white">Coming Soon:</span>{" "}
                  We are excited to announce our expansion into the greater Los
                  Angeles area and Southern California region, bringing our
                  premium services to even more clients.
                </p>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-black/10">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <div className="mb-10 sm:mb-12 md:mb-14 text-center max-w-3xl mx-auto">
            <AnimateOnView animation="fade-in-down">
              <p className="text-brand-400 text-sm sm:text-base font-medium uppercase tracking-wide">
                What we offer
              </p>
            </AnimateOnView>
            <AnimateOnView
              animation="fade-in-up"
              delay="0.08s"
              className="mt-2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Services built for{" "}
                <span className="text-brand">real estate</span>
              </h2>
            </AnimateOnView>
            <AnimateOnView
              animation="fade-in-left"
              delay="0.16s"
              className="mt-4"
            >
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                From listing photos and cinematic videos to 3D tours, social
                content, and branding—we help you list faster and stand out.
              </p>
            </AnimateOnView>
          </div>

          {/* Value props strip */}
          <div className="mb-8 sm:mb-10 md:mb-12 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {[
              "Fast turnaround",
              "Professional editing",
              "All platforms",
              "Quality guarantee",
            ].map((label, i) => (
              <AnimateOnView
                key={label}
                animation="scale-in"
                delay={`${0.2 + i * 0.06}s`}
                className="flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 sm:px-5 py-2.5 sm:py-3"
              >
                <span
                  className="h-2 w-2 rounded-full bg-brand shrink-0"
                  aria-hidden
                />
                <span className="text-gray-200 text-sm sm:text-base font-medium">
                  {label}
                </span>
              </AnimateOnView>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {SERVICES.map((service, i) => (
              <AnimateOnView
                key={service.slug}
                animation="fade-in-up"
                delay={`${0.06 + i * 0.05}s`}
                className="min-w-0 group"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full rounded-xl sm:rounded-2xl border border-white/20 bg-white/5 p-5 sm:p-6 lg:p-7 hover:border-brand/50 hover:bg-white/[0.08] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <span className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 text-brand text-sm sm:text-base font-medium">
                    Learn more
                    <span
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </Link>
              </AnimateOnView>
            ))}
          </div>

          <AnimateOnView
            animation="fade-in-up"
            delay="0.4s"
            className="mt-10 sm:mt-12 md:mt-14 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 bg-brand hover:bg-brand-600 text-white text-base sm:text-lg font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Explore all services
            </Link>
          </AnimateOnView>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
