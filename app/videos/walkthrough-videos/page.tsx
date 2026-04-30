import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimateOnView from "@/app/components/AnimateOnView";

import { FiPlay, FiClock, FiVideo, FiCamera, FiMap } from "react-icons/fi";

export const metadata = {
  title: "Walkthrough Videos - Timex Media",
  description:
    "Smooth cinematic property tours that showcase every room and highlight your property's best features.",
};

export default function WalkthroughVideosPage() {
  const videoGallery = [
    {
      id: 1,
      title: "Luxury Villa Tour",
      duration: "3:30",
      thumbnail:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Modern Apartment Walkthrough",
      duration: "2:15",
      thumbnail:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Beachfront Property Tour",
      duration: "4:00",
      thumbnail:
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Downtown Condo Walkthrough",
      duration: "2:45",
      thumbnail:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Suburban Family Home",
      duration: "3:00",
      thumbnail:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Commercial Space Tour",
      duration: "2:30",
      thumbnail:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const features = [
    {
      icon: <FiVideo className="w-6 h-6" />,
      title: "4K Cinematic",
      desc: "Ultra HD quality for stunning visuals",
    },
    {
      icon: <FiCamera className="w-6 h-6" />,
      title: "Gimbal Stabilized",
      desc: "Butter-smooth camera movement",
    },
    {
      icon: <FiMap className="w-6 h-6" />,
      title: "Strategic Flow",
      desc: "Perfect room sequencing",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/30" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                <span className="text-2xl">🎥</span>
                <span className="text-blue-400 font-medium">
                  Cinematic Quality
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Walkthrough Videos
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Smooth cinematic property tours that showcase every room and
                highlight your property's best features.
              </p>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.1s">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-16">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Walkthrough Video Demo"
                allowFullScreen
              />
            </div>
          </AnimateOnView>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {features.map((feature, i) => (
              <AnimateOnView
                key={i}
                animation="fade-in-up"
                delay={`${0.1 * i}s`}
              >
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Walkthrough Gallery
            </h2>
          </AnimateOnView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoGallery.map((video, i) => (
              <AnimateOnView
                key={video.id}
                animation="fade-in-up"
                delay={`${0.05 * i}s`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                        <FiPlay className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-xs flex items-center gap-1">
                      <FiClock className="w-3 h-3" /> {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{video.title}</h3>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnView animation="float-in">
            <h2 className="text-3xl font-bold mb-4">
              Ready for a Cinematic Tour?
            </h2>
            <p className="text-gray-300 mb-8">
              Book your walkthrough video today
            </p>
            <Link
              href="/book-now"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </div>
  );
}
