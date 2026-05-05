import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimateOnView from "../../components/AnimateOnView";
import { getVideoBySlug } from "../../lib/videos";
import { FiCheckCircle, FiArrowRight, FiImage } from "react-icons/fi";

export const metadata = {
  title: "Photo Gallery - Timex Media",
  description: "Professional HDR and flambient photography",
};

export default function PhotoGalleryPage() {
  const video = getVideoBySlug("photo-gallery")!;

  // प्लेसहोल्डर गैलरी - बिना इमेज लिंक के
  const placeholderGallery = [
    { id: 1, title: "Living Room HDR", category: "Interior" },
    { id: 2, title: "Kitchen Flambient", category: "Interior" },
    { id: 3, title: "Exterior Twilight", category: "Exterior" },
    { id: 4, title: "Master Bedroom", category: "Interior" },
    { id: 5, title: "Drone Aerial", category: "Aerial" },
    { id: 6, title: "Bathroom Detail", category: "Detail" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-blue-900/30" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
                <span className="text-2xl">📸</span>
                <span className="text-green-400 font-medium">
                  Professional Photography
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

          <AnimateOnView animation="fade-in-up" delay="0.1s">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 bg-black/50 flex items-center justify-center border border-white/10">
              <div className="text-center">
                <FiImage className="w-16 h-16 text-gray-600 mx-auto mb-4" />
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
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
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
                  <FiCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
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
                  <div className="text-4xl font-bold text-green-500 mb-4">
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Photo Gallery
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Our professional photography portfolio - Coming soon
            </p>
          </AnimateOnView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderGallery.map((item, i) => (
              <AnimateOnView
                key={item.id}
                animation="fade-in-up"
                delay={`${0.05 * i}s`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02]">
                  {/* Black Placeholder without image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <div className="text-center">
                      <FiImage className="w-12 h-12 text-gray-700 mx-auto mb-2" />
                      <p className="text-gray-600 text-sm">Photo coming soon</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-green-400">
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-white mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 via-transparent to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnView animation="float-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready for Stunning Photos?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Book your photoshoot today
            </p>
            <Link
              href="/book-now"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold text-lg rounded-lg hover:opacity-90 transition gap-2"
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
