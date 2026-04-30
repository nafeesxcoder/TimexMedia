import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimateOnView from "@/app/components/AnimateOnView";

import {
  FiPlay,
  FiClock,
  FiCpu,
  FiZap,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

export const metadata = {
  title: "AI Videos - Timex Media",
  description:
    "AI-powered virtual staging and automated property walkthroughs that save time and money while delivering stunning results.",
};

export default function AIVideosPage() {
  const videoGallery = [
    {
      id: 1,
      title: "Virtual Staging Demo",
      duration: "1:45",
      thumbnail:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "AI Property Walkthrough",
      duration: "2:30",
      thumbnail:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Before & After AI",
      duration: "1:20",
      thumbnail:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Luxury Home AI Tour",
      duration: "3:00",
      thumbnail:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Modern Apartment AI",
      duration: "1:50",
      thumbnail:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Commercial AI Tour",
      duration: "2:15",
      thumbnail:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const features = [
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "AI-Powered",
      desc: "Advanced AI technology for stunning results",
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Fast Turnaround",
      desc: "24-hour delivery for most projects",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Cost Effective",
      desc: "Save up to 80% vs traditional staging",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
                <span className="text-2xl">🤖</span>
                <span className="text-purple-400 font-medium">
                  AI Technology
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                AI Videos
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                AI-powered virtual staging and automated property walkthroughs
                that save time and money while delivering stunning results.
              </p>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.1s">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-16">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="AI Videos Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                  <div className="text-purple-400 text-4xl mb-4 flex justify-center">
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
              Our AI Video Gallery
            </h2>
          </AnimateOnView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoGallery.map((video, i) => (
              <AnimateOnView
                key={video.id}
                animation="fade-in-up"
                delay={`${0.05 * i}s`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center">
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
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-gray-300 mb-8">
              Book your AI video production today
            </p>
            <Link
              href="/book-now"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition"
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
