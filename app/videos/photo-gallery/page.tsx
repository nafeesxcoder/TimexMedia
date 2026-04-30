import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimateOnView from "@/app/components/AnimateOnView";

import { FiCamera, FiSun, FiEdit, FiImage } from "react-icons/fi";

export const metadata = {
  title: "Photo Gallery - Timex Media",
  description:
    "Professional HDR and flambient photography that makes listings stand out and attract more buyers.",
};

export default function PhotoGalleryPage() {
  const photoGallery = [
    {
      id: 1,
      title: "Living Room HDR",
      category: "Interior",
      thumbnail:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2073&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Kitchen Flambient",
      category: "Interior",
      thumbnail:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Master Bedroom",
      category: "Interior",
      thumbnail:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Exterior Twilight",
      category: "Exterior",
      thumbnail:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Drone Aerial",
      category: "Aerial",
      thumbnail:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Bathroom Detail",
      category: "Detail",
      thumbnail:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const features = [
    {
      icon: <FiCamera className="w-6 h-6" />,
      title: "HDR & Flambient",
      desc: "Perfect exposure every time",
    },
    {
      icon: <FiSun className="w-6 h-6" />,
      title: "Twilight Shots",
      desc: "Magical golden hour photos",
    },
    {
      icon: <FiEdit className="w-6 h-6" />,
      title: "Expert Editing",
      desc: "Magazine-ready quality",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-blue-900/30" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
                <span className="text-2xl">📸</span>
                <span className="text-green-400 font-medium">
                  Professional Photography
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Professional Photos
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Professional HDR and flambient photography that makes listings
                stand out and attract more buyers.
              </p>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" delay="0.1s">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-16">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/aqz-KE-bpKQ"
                title="Photography Showcase"
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
                  <div className="text-green-400 text-4xl mb-4 flex justify-center">
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
              Photo Gallery
            </h2>
          </AnimateOnView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoGallery.map((photo, i) => (
              <AnimateOnView
                key={photo.id}
                animation="fade-in-up"
                delay={`${0.05 * i}s`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.thumbnail}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center">
                        <FiImage className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-green-400">
                      {photo.category}
                    </span>
                    <h3 className="font-semibold text-white mt-1">
                      {photo.title}
                    </h3>
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
              Ready for Stunning Photos?
            </h2>
            <p className="text-gray-300 mb-8">Book your photoshoot today</p>
            <Link
              href="/book-now"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition"
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
