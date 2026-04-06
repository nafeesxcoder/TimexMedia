import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnView from "../components/AnimateOnView";
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

      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full min-w-0 text-center">
          <AnimateOnView animation="fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Services
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
              Professional real estate photography, video, 3D tours, and marketing content tailored for agents and teams.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Service cards */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service, i) => (
              <AnimateOnView
                key={service.slug}
                animation="fade-in-up"
                delay={`${0.1 * i}s`}
                className="rounded-xl border border-white/20 bg-white/5 p-6 sm:p-8 flex flex-col min-w-0"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base flex-grow mb-6">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="block w-full min-h-[48px] py-4 sm:py-5 px-4 sm:px-6 bg-white text-gray-900 text-center text-base sm:text-lg font-semibold rounded-lg hover:opacity-90 active:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent flex items-center justify-center"
                >
                  Learn more
                </Link>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
