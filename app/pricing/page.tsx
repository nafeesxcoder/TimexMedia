import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnView from "../components/AnimateOnView";
import Image from "next/image";
import Link from "next/link";
import ComparisonTable from "./ComparisonTable";
import TrustBadges from "./TrustBadges";

export const metadata = {
  title: "Pricing - Timex Media",
  description:
    "Transparent pricing for real estate photography, video, 3D tours, and marketing content. Choose the perfect package for your property.",
};

export default function PricingPage() {
  const packages = [
    {
      name: "Basic Photography",
      price: "$299",
      description: "Perfect for standard listings",
      features: [
        "20-25 professional photos",
        "48-hour turnaround",
        "Online gallery delivery",
        "Basic color correction",
        "MLS ready format",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonLink: "/book-now",
    },
    {
      name: "Premium Package",
      price: "$599",
      description: "Most popular for luxury listings",
      features: [
        "30-40 professional photos",
        "Cinematic video tour (60 sec)",
        "Aerial drone photos (5 shots)",
        "24-hour turnaround",
        "Virtual staging (2 rooms)",
        "Floor plan included",
      ],
      popular: true,
      buttonText: "Book Now",
      buttonLink: "/book-now",
    },
    {
      name: "Ultimate Package",
      price: "$999",
      description: "Full-service marketing solution",
      features: [
        "50+ professional photos",
        "Cinematic video tour (90 sec)",
        "Aerial drone video + photos",
        "3D virtual tour (Matterport)",
        "12-hour turnaround",
        "Social media reels (2)",
        "Virtual staging (4 rooms)",
        "Floor plan + measurements",
      ],
      popular: false,
      buttonText: "Contact Us",
      buttonLink: "/book-now",
    },
  ];

  const addOns = [
    {
      name: "Additional Photos",
      price: "$25",
      description: "Per 5 photos beyond package",
    },
    {
      name: "Drone Video Add-on",
      price: "$150",
      description: "2-minute aerial video",
    },
    {
      name: "Twilight Photos",
      price: "$100",
      description: "5 exterior twilight shots",
    },
    {
      name: "Express Delivery",
      price: "$50",
      description: "Same-day delivery",
    },
    {
      name: "Virtual Staging",
      price: "$75",
      description: "Per room virtually staged",
    },
    {
      name: "Floor Plan",
      price: "$99",
      description: "2D floor plan with measurements",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100 bg-black">
      <Header />

      {/* Hero Section */}
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
              Pricing
            </h1>
          </AnimateOnView>
        </div>
      </section>

      {/* Banner */}
      <section className="w-full bg-brand-600 py-3 sm:py-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest">
            Simple & Transparent Pricing
          </h2>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <AnimateOnView
                key={pkg.name}
                animation="fade-in-up"
                delay={`${0.1 + i * 0.1}s`}
                className="h-full"
              >
                <div
                  className={`relative h-full rounded-2xl border ${
                    pkg.popular
                      ? "border-brand bg-gradient-to-b from-brand/10 to-transparent shadow-xl shadow-brand/20"
                      : "border-white/20 bg-white/5"
                  } p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-brand text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{pkg.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl sm:text-5xl font-bold text-brand">
                        {pkg.price}
                      </span>
                      <span className="text-gray-400"> /property</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-gray-300 text-sm sm:text-base"
                      >
                        <svg
                          className="w-5 h-5 text-brand shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={pkg.buttonLink}
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-brand hover:bg-brand-600 text-white"
                        : "border border-brand text-brand hover:bg-brand hover:text-white"
                    }`}
                  >
                    {pkg.buttonText}
                  </Link>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Trust Badges - */}
      <TrustBadges />

      {/* Add-ons Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <AnimateOnView animation="fade-in-down">
              <p className="text-brand-400 text-sm sm:text-base font-medium uppercase tracking-wide">
                Customize Your Package
              </p>
            </AnimateOnView>
            <AnimateOnView animation="fade-in-up" delay="0.08s">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-2">
                Add-ons & <span className="text-brand">Extras</span>
              </h2>
            </AnimateOnView>
            <AnimateOnView animation="fade-in-left" delay="0.16s">
              <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
                Enhance your package with these optional services
              </p>
            </AnimateOnView>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {addOns.map((addon, i) => (
              <AnimateOnView
                key={addon.name}
                animation="scale-in"
                delay={`${0.05 + i * 0.03}s`}
                className="rounded-xl border border-white/20 bg-white/5 p-5 sm:p-6 hover:border-brand/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {addon.name}
                  </h3>
                  <span className="text-brand font-bold text-lg">
                    {addon.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{addon.description}</p>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <AnimateOnView animation="fade-in-down">
              <p className="text-brand-400 text-sm sm:text-base font-medium uppercase tracking-wide">
                Frequently Asked Questions
              </p>
            </AnimateOnView>
            <AnimateOnView animation="fade-in-up" delay="0.08s">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-2">
                Got <span className="text-brand">questions?</span>
              </h2>
            </AnimateOnView>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the turnaround time?",
                a: "Standard turnaround is 48 hours for photos and 72 hours for videos. Express delivery available for an additional fee.",
              },
              {
                q: "Do you travel outside your service areas?",
                a: "Yes, we can travel beyond our standard service areas for an additional travel fee. Contact us for a custom quote.",
              },
              {
                q: "What if I need to reschedule?",
                a: "We understand plans change. Just let us know at least 24 hours in advance and we'll reschedule at no charge.",
              },
              {
                q: "Do you offer monthly subscriptions for agents?",
                a: "Yes! We offer custom monthly packages for high-volume agents. Contact us to discuss a tailored plan.",
              },
              {
                q: "Are the photos edited?",
                a: "Absolutely. All photos receive professional color correction, exposure adjustment, and enhancement to make your property shine.",
              },
            ].map((faq, i) => (
              <AnimateOnView
                key={faq.q}
                animation="fade-in-up"
                delay={`${0.05 + i * 0.05}s`}
                className="rounded-xl border border-white/20 bg-white/5 p-5 sm:p-6 hover:border-brand/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{faq.a}</p>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand/20 via-transparent to-brand/20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnView animation="float-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Ready to get started?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Book your shoot today and let's create stunning content for your
              property.
            </p>
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center min-h-[48px] px-8 sm:px-10 py-3 sm:py-4 bg-brand hover:bg-brand-600 text-white text-base sm:text-lg font-semibold rounded-lg transition-colors"
            >
              Book Your Shoot Now
            </Link>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </div>
  );
}
