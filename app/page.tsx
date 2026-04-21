import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimateOnView from "./components/AnimateOnView";
import AnimatedButton from "./components/AnimatedButton";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "./lib/services";
import BeforeAfterSlider from "./components/BeforeAfterSlider"; // Make sure this is default import

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] sm:min-h-[500px] max-h-[90dvh] flex items-center justify-center overflow-hidden">
        <AnimateOnView animation="blur-in" className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2073&auto=format&fit=crop"
            alt="Modern home interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 backdrop-blur-xs bg-black/10"></div>
        </AnimateOnView>

        <div className="relative z-10 text-center px-4">
          <AnimateOnView animation="float-in" delay="0.2s">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand">
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

      {/* Before/After Slider Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimateOnView animation="fade-in-down">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                See the <span className="text-brand">Difference</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Our professional editing transforms ordinary photos into
                stunning visuals
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <AnimateOnView animation="fade-in-down">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Our Services
              </h2>
              <p className="text-gray-300 mt-4">
                Professional photography and videography solutions for your
                property
              </p>
            </AnimateOnView>
          </div>

          {/* Premium Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <AnimateOnView
                key={service.slug}
                animation="fade-in-up"
                delay={`${0.05 * i}s`}
                className="group"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full rounded-2xl border border-white/20 bg-white/5 p-6 
                  backdrop-blur-md transition-all duration-300
                  hover:scale-[1.04] hover:-translate-y-2
                  hover:border-purple-500/50 hover:bg-white/[0.08]
                  shadow-[0_0_20px_rgba(168,85,247,0.15)]
                  hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
                >
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* CTA */}
                  <span className="mt-4 inline-flex items-center gap-2 text-purple-400 font-medium">
                    Learn more
                    <span className="group-hover:translate-x-1 transition">
                      →
                    </span>
                  </span>
                </Link>
              </AnimateOnView>
            ))}
          </div>

          {/* Button */}
          <AnimateOnView
            animation="fade-in-up"
            delay="0.4s"
            className="mt-14 text-center"
          >
            <AnimatedButton text="Explore all services" link="/services" />
          </AnimateOnView>
        </div>
      </section>

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
            <AnimatedButton text="Book Now" link="/book-now" />
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </div>
  );
}
