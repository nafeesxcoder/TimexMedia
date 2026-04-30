import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimateOnView from "@/app/components/AnimateOnView";

import { FiPlay, FiClock, FiBriefcase, FiGlobe, FiUsers } from "react-icons/fi";

export const metadata = {
  title: "Business Videos - Timex Media",
  description:
    "Brand stories, corporate culture reels, and commercial promos for your business.",
};

export default function BusinessVideosPage() {
  const videoGallery = [
    {
      id: 1,
      title: "Brand Story",
      duration: "3:00",
      thumbnail:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Corporate Culture",
      duration: "2:30",
      thumbnail:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Client Testimonial",
      duration: "1:45",
      thumbnail:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Product Launch",
      duration: "2:15",
      thumbnail:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Company Overview",
      duration: "4:00",
      thumbnail:
        "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2076&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Recruitment Video",
      duration: "2:00",
      thumbnail:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  const features = [
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Professional Production",
      desc: "Full-scale video production",
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Multi-Platform",
      desc: "Optimized for all channels",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Brand Storytelling",
      desc: "Compelling narratives",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black to-blue-900/30" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
                <span className="text-2xl">🏢</span>
                <span className="text-cyan-400 font-medium">
                  Corporate Production
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Business Videos
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Brand stories, corporate culture reels, and commercial promos
                for your business.
              </p>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.1s">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-16">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Business Video Demo"
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
                  <div className="text-cyan-400 text-4xl mb-4 flex justify-center">
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
              Business Video Gallery
            </h2>
          </AnimateOnView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoGallery.map((video, i) => (
              <AnimateOnView
                key={video.id}
                animation="fade-in-up"
                delay={`${0.05 * i}s`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center">
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
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-gray-300 mb-8">
              Book your business video production today
            </p>
            <Link
              href="/book-now"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition"
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
