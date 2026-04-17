"use client";

import AnimateOnView from "../components/AnimateOnView";
import { motion } from "framer-motion";

const guarantees = [
  {
    title: "100% Satisfaction",
    description: "Not happy? We reshoot for free. No questions asked.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <polyline
          points="22 4 12 14.01 9 11.01"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    description: "Late delivery? Get 50% off your next shoot.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <polyline
          points="12 6 12 12 16 14"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Best Price Match",
    description: "Found lower price? We'll match + 10% off.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    description: "100% secure. Pay only when satisfied.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <rect
          x="3"
          y="11"
          width="18"
          height="11"
          rx="2"
          ry="2"
          strokeWidth="1.5"
        />
        <path
          d="M7 11V7a5 5 0 0 1 10 0v4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-white/5 to-black">
      <div className="max-w-7xl mx-auto">
        <AnimateOnView animation="fade-in-down" className="text-center mb-16">
          <p className="text-brand-400 text-sm font-medium uppercase tracking-wider">
            Why Choose Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            We stand behind <span className="text-brand">our work</span>
          </h2>
          <div className="w-20 h-0.5 bg-brand/50 mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            No fine print. No hidden fees. Just quality you can count on.
          </p>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, i) => (
            <AnimateOnView
              key={item.title}
              animation="fade-in-up"
              delay={`${0.05 + i * 0.05}s`}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="relative group h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-brand/40 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-5 text-brand group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 w-8 h-px bg-brand/30 group-hover:w-12 transition-all" />
                </div>
              </motion.div>
            </AnimateOnView>
          ))}
        </div>

        {/* Trust Badge with Stats */}
        <AnimateOnView animation="fade-in-up" delay="0.3s">
          <div className="mt-16 pt-8 text-center">
            <div className="inline-flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { label: "Happy Clients", value: "500+" },
                { label: "Properties", value: "2,000+" },
                { label: "Experience", value: "5+ Years" },
                { label: "Satisfaction", value: "100%" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-brand">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
