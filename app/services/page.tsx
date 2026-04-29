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
  // Additional Stats
  const stats = [
    { number: "8+", label: "Happy Clients" },
    { number: "72+", label: "Properties" },
    { number: "3+ Years", label: "Experience" },
    { number: "100%", label: "Satisfaction" },
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      title: "Professional Quality",
      description:
        "Industry-leading equipment and expert editing for stunning results",
      icon: "🎯",
    },
    {
      title: "Fast Turnaround",
      description:
        "Most projects delivered within 24-48 hours, rush options available",
      icon: "⚡",
    },
    {
      title: "Competitive Pricing",
      description: "Premium quality at affordable rates with package deals",
      icon: "💰",
    },
    {
      title: "Dedicated Support",
      description: "Personal account manager for all your media needs",
      icon: "🤝",
    },
  ];

  // Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Book Your Shoot",
      description: "Schedule online in just 2 minutes",
    },
    {
      step: "02",
      title: "We Capture",
      description: "Professional photography & videography",
    },
    {
      step: "03",
      title: "Expert Editing",
      description: "Premium editing & retouching",
    },
    {
      step: "04",
      title: "Fast Delivery",
      description: "Get your media within 24-48 hours",
    },
  ];

  // Industries We Serve
  const industries = [
    "Real Estate Agents",
    "Property Managers",
    "Home Builders",
    "Interior Designers",
    "Architects",
    "Vacation Rentals",
    "Commercial Real Estate",
    "Luxury Estates",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Hero with Background Image */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto w-full min-w-0 text-center">
          <AnimateOnView animation="fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Our Services
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
              Professional real estate photography, video, 3D tours, and
              marketing content tailored for agents and teams.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Stats Section - NEW */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimateOnView
                key={i}
                animation="fade-in-up"
                delay={`${0.1 * i}s`}
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {stat.number}
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              What We Offer
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive media solutions for modern real estate professionals
            </p>
          </AnimateOnView>

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

      {/* Why Choose Us Section - NEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Why Choose Timex Media?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              We're trusted by top real estate professionals across the country
            </p>
          </AnimateOnView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <AnimateOnView
                key={i}
                animation="fade-in-up"
                delay={`${0.1 * i}s`}
              >
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-black/30 hover:border-purple-500/30 transition-all duration-300">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - NEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Simple 4-step process to get professional media for your listings
            </p>
          </AnimateOnView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <AnimateOnView
                key={i}
                animation="fade-in-up"
                delay={`${0.1 * i}s`}
              >
                <div className="relative">
                  <div className="text-5xl font-bold text-purple-500/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 text-gray-600">
                      →
                    </div>
                  )}
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section - NEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Trusted by professionals across various sectors
            </p>
          </AnimateOnView>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <AnimateOnView
                key={i}
                animation="fade-in-up"
                delay={`${0.03 * i}s`}
              >
                <span className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-gray-300 text-sm hover:bg-purple-500/20 transition-colors">
                  {industry}
                </span>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton text="Book Now" link="/book-now" />
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-white font-semibold text-lg rounded-lg hover:bg-purple-500/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </div>
  );
}
