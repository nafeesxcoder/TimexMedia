import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnView from "../components/AnimateOnView";
import AnimatedButton from "../components/AnimatedButton";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "../lib/services";

export const metadata = {
  title: "Services - Timex Media",
  description:
    "Explore Timex Media services: listing photography, videos, 3D virtual tours, floor plans, virtual staging, headshots, branding, and social media content for real estate.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Hero with Background Image */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2073&auto=format&fit=crop"
            alt="Services background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full min-w-0 text-center">
          <AnimateOnView animation="fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Services
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
              Professional real estate photography, video, 3D tours, and
              marketing content tailored for agents and teams.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Service cards - Same as home page */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full min-w-0">
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
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-6">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-purple-400 font-medium group-hover:gap-3 transition-all">
                    Learn more
                    <span className="group-hover:translate-x-1 transition">
                      →
                    </span>
                  </span>
                </Link>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnView animation="float-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
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
