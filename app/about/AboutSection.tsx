"use client";

import Link from "next/link";

interface AboutSectionProps {
  variant?: "full" | "compact";
  showCta?: boolean;
}

export default function AboutSection({ showCta = true }: AboutSectionProps) {
  const serviceCities = [
    "San Francisco",
    "Oakland",
    "San Jose",
    "Sacramento",
    "Fresno",
  ];

  // 6 cards for perfect grid (3x2 on desktop, 2x3 on mobile)
  const features = [
    {
      icon: "📸",
      title: "Photography",
      desc: "HDR & flambient interiors, twilight exteriors, detail shots",
    },
    {
      icon: "🎥",
      title: "Videography",
      desc: "Cinematic walkthroughs, drone video, social reels",
    },
    {
      icon: "🚁",
      title: "Aerial Drone",
      desc: "FAA certified pilots, property overview, neighborhood context",
    },
    {
      icon: "🌀",
      title: "3D Virtual Tours",
      desc: "Matterport, dollhouse view, guided tours",
    },
    {
      icon: "📈",
      title: "Marketing Suite",
      desc: "Floor plans, social campaigns, listing presentations",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      desc: "Next-day delivery for photos, 48h for video & 3D tours",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 -z-10" />
      <div className="absolute top-40 -left-32 w-72 h-72 bg-brand-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-brand-600/20 text-brand-400 rounded-full mb-4">
            Full‑Service Creative Agency
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Visual Storytelling{" "}
            <span className="text-brand-400">That Sells Real Estate</span>
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* 6 Cards Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-500/50 transition-all group hover:-translate-y-1 duration-300"
            >
              <div className="text-4xl mb-3">{feat.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feat.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Two unique blocks: Promise + Service Areas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Our Promise card */}
          <div className="bg-gradient-to-br from-brand-900/30 to-purple-900/30 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚡</span>
              <h3 className="text-2xl font-bold text-white">Our Promise</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Lightning‑fast turnaround, breathtaking visuals, and unwavering
              quality. We don't just deliver content — we deliver confidence.
              Your listings will stand out, sell faster, and build your brand as
              an industry leader.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-brand-300">
                Next‑day delivery*
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-brand-300">
                5‑star support
              </span>
            </div>
          </div>

          {/* Service Areas card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📍</span>
              <h3 className="text-2xl font-bold text-white">Service Areas</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {serviceCities.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1.5 bg-gray-800 rounded-lg text-sm text-gray-200"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              + Surrounding Northern California communities.
              <br />
              <span className="text-brand-300">
                Actively expanding across the West Coast.
              </span>
            </p>
            {/* Coming Soon chip */}
            <div className="mt-5 flex items-center gap-2 bg-black/30 rounded-full px-4 py-2 w-fit">
              <span className="text-yellow-400 text-sm">🚀</span>
              <span className="text-white text-sm font-medium">
                Coming Soon:
              </span>
              <span className="text-gray-300 text-sm">Los Angeles & SoCal</span>
              <span className="bg-brand-500/40 text-brand-200 text-xs px-2 py-0.5 rounded-full">
                2025
              </span>
            </div>
          </div>
        </div>

        {/* Call to action */}
        {showCta && (
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition shadow-xl hover:shadow-2xl"
            >
              Start Your Success Story →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
