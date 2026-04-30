"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AnimatedButton({
  text = "Explore Our Services",
  link = "/services",
}) {
  const router = useRouter();

  return (
    <motion.div
      className="flex justify-center lg:justify-start"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        onClick={() => router.push(link)}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-block rounded-full p-[2px] overflow-hidden w-full lg:w-auto"
      >
        {/* 🔥 SLOW SPINNING BORDER */}
        <span
          className="absolute inset-0 rounded-full animate-[spin_6s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, #a855f7, #ffffff, #7c3aed, #a855f7)",
          }}
        />

        {/* Inner Layer */}
        <span className="absolute inset-[2px] rounded-full bg-black/70 backdrop-blur-md" />

        {/* Button Content */}
        <span className="relative z-10 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3 text-white font-medium hover:from-purple-500 hover:to-purple-400 transition-all duration-300">
          {text}
          <motion.span whileHover={{ x: 6 }}>→</motion.span>
        </span>

        {/* Light Shine */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-30" />
      </motion.button>
    </motion.div>
  );
}