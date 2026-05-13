"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import type { ServiceItem } from "@/app/lib/services";

interface ServiceDetailClientProps {
  service: ServiceItem;
}

export default function ServiceDetailClient({
  service,
}: ServiceDetailClientProps) {
  const [activeVideo, setActiveVideo] = useState<"primary" | "secondary">(
    "primary",
  );

  const getGradient = (slug: string) => {
    if (
      slug.includes("listing") ||
      slug.includes("3d") ||
      slug.includes("2d") ||
      slug.includes("virtual-staging")
    )
      return "from-blue-500 to-cyan-500";
    if (
      slug.includes("social") ||
      slug.includes("headshots") ||
      slug.includes("branding")
    )
      return "from-purple-500 to-pink-500";
    if (slug.includes("viral") || slug.includes("management"))
      return "from-orange-500 to-red-500";
    return "from-purple-500 to-pink-500";
  };

  const getIcon = (slug: string) => {
    const icons: Record<string, string> = {
      "listing-photography": "📸",
      "listing-videos": "🎥",
      "social-media-content": "📱",
      "3d-virtual-tour": "🏠",
      "2d-floor-plans": "📐",
      "virtual-staging": "🛋️",
      headshots: "👤",
      "branding-session": "✨",
      "viral-video-editing": "⚡",
      "social-media-management": "📊",
    };
    return icons[slug] || "🎯";
  };

  const gradient = getGradient(service.slug);
  const icon = getIcon(service.slug);

  const stats = [
    { value: "100+", label: "Happy Clients" },
    { value: "500+", label: "Projects" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Satisfaction" },
  ];

  const pricingPlans = [
    {
      package: "Basic",
      price: "$249",
      features: [
        "Essential coverage",
        "24-48 hr turnaround",
        "Basic editing",
        "MLS ready files",
      ],
    },
    {
      package: "Standard",
      price: "$399",
      features: [
        "Full property coverage",
        "Premium editing",
        "Social media ready",
        "Rush options",
      ],
      popular: true,
    },
    {
      package: "Premium",
      price: "$599",
      features: [
        "Everything in Standard",
        "Priority support",
        "Additional services",
        "Extended license",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F1A] via-[#13172B] to-[#0B0F1A] pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div
              className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center shadow-2xl`}
            >
              <span className="text-5xl">{icon}</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
            <span className="text-2xl">✨</span>
            <span className="text-purple-400 font-medium">Premium Service</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-purple-400 mb-6 max-w-2xl mx-auto">
            {service.shortDescription}
          </p>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            {service.intro}
          </p>
        </motion.div>

        {/* Video Section */}
        {(service.videoId || service.videoId2) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <div className="max-w-4xl mx-auto">
              {service.videoId && service.videoId2 && (
                <div className="flex justify-center gap-4 mb-6">
                  <button
                    onClick={() => setActiveVideo("primary")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeVideo === "primary" ? `bg-gradient-to-r ${gradient} text-white shadow-lg` : "bg-white/10 text-white/60 hover:bg-white/20"}`}
                  >
                    Main Video
                  </button>
                  <button
                    onClick={() => setActiveVideo("secondary")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeVideo === "secondary" ? `bg-gradient-to-r ${gradient} text-white shadow-lg` : "bg-white/10 text-white/60 hover:bg-white/20"}`}
                  >
                    Bonus Video
                  </button>
                </div>
              )}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black/50">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeVideo === "primary" ? service.videoId : service.videoId2}`}
                  title={service.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl border border-white/10 bg-black/30"
              >
                <div
                  className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What's{" "}
            <span
              className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            >
              Included
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.contentBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {block.heading}
                </h3>
                <p className="text-white/50 leading-relaxed">{block.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Key{" "}
            <span
              className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            >
              Highlights
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center`}
                >
                  <FiCheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 text-sm">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Pricing{" "}
            <span
              className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            >
              Plans
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${plan.popular ? "border-purple-500 shadow-xl shadow-purple-500/10" : "border-white/10"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`bg-gradient-to-r ${gradient} text-white text-xs px-3 py-1 rounded-full`}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.package}
                </h3>
                <div className="text-3xl font-bold text-white mb-4">
                  {plan.price}
                  <span className="text-sm text-white/40">/project</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-white/60 text-sm"
                    >
                      <FiCheckCircle className="w-4 h-4 text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/book-now">
                  <button
                    className={`w-full py-3 rounded-xl ${plan.popular ? `bg-gradient-to-r ${gradient} text-white` : "bg-white/10 text-white"} font-semibold hover:opacity-90 transition-all`}
                  >
                    Get {plan.package}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className={`bg-gradient-to-r ${gradient} rounded-3xl p-12`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {service.ctaLine ||
                "Book your session today and get stunning media that sells!"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now">
                <button className="px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all">
                  Book Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
