"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function VideoServiceCard({ service }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/40"
    >
      {/* VIDEO THUMBNAIL */}
      <div className="relative">
        <img
          src={`https://img.youtube.com/vi/${service.videoId}/maxresdefault.jpg`}
          alt={service.title}
          className="w-full h-56 object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

        {/* ▶ PLAY BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 text-black rounded-full p-4 group-hover:scale-110 transition">
            ▶
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-white">
          {service.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {service.shortDescription}
        </p>

        {/* CTA */}
        <Link
          href={`/services/${service.slug}`}
          className="text-purple-400 hover:text-purple-300 transition"
        >
          Watch Video →
        </Link>
      </div>
    </motion.div>
  );
}
