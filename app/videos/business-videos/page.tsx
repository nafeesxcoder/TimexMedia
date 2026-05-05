import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimateOnView from "../../components/AnimateOnView";
import { getVideoBySlug } from "../../lib/videos";
import { FiClock, FiCheckCircle, FiArrowRight, FiPlay } from "react-icons/fi";

export const metadata = {
  title: "Business Videos - Timex Media",
  description: "Brand stories, corporate culture reels, and commercial promos",
};

export default function BusinessVideosPage() {
  const video = getVideoBySlug("business-videos")!;

  // प्लेसहोल्डर गैलरी - बिना इमेज लिंक के
  const placeholderGallery = [
    { id: 1, title: "Brand Story", duration: "3:00" },
    { id: 2, title: "Corporate Culture", duration: "2:30" },
    { id: 3, title: "Client Testimonial", duration: "1:45" },
    { id: 4, title: "Product Launch", duration: "2:15" },
    { id: 5, title: "Company Overview", duration: "4:00" },
    { id: 6, title: "Recruitment Video", duration: "2:00" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black to-blue-900/30" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
                <span className="text-2xl">🏢</span>
                <span className="text-cyan-400 font-medium">
                  Corporate Production
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                {video.title}
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {video.description}
              </p>
            </div>
          </AnimateOnView>

          {/* Main Video - Placeholder */}
          <AnimateOnView animation="fade-in-up" delay="0.1s">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 bg-black/50 flex items-center justify-center border border-white/10">
              <div className="text-center">
                <FiPlay className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500">Video Preview Coming Soon</p>
              </div>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.2s">
            <p className="text-gray-300 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              {video.longDescription}
            </p>
          </AnimateOnView>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {video.stats.map((stat, i) => (
              <AnimateOnView
                key={i}
                animation="fade-in-up"
                delay={`${0.1 * i}s`}
              >
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-black/30">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 mt-2">{stat.label}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {video.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
                >
                  <FiCheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {video.whyChoose?.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {video.process?.map((step, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-2xl border border-white/10 bg-black/30"
                >
                  <div className="text-4xl font-bold text-cyan-500 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Gallery Section - with Placeholders */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Business Video Gallery
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Our business video production portfolio - Coming soon
            </p>
          </AnimateOnView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderGallery.map((item, i) => (
              <AnimateOnView
                key={item.id}
                animation="fade-in-up"
                delay={`${0.05 * i}s`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]">
                  {/* Black Placeholder without image */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <div className="text-center">
                      <FiPlay className="w-12 h-12 text-gray-700 mx-auto mb-2" />
                      <p className="text-gray-600 text-sm">Video coming soon</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition">
                        {item.title}
                      </h3>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <FiClock className="w-3 h-3" /> {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnView animation="float-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Book your business video production today
            </p>
            <Link
              href="/book-now"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-lg rounded-lg hover:opacity-90 transition gap-2"
            >
              Get Started <FiArrowRight className="w-5 h-5" />
            </Link>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </div>
  );
}
