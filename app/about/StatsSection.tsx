"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiCamera, FiClock, FiStar, FiMapPin } from "react-icons/fi";

export default function StatsSection() {
  const [properties, setProperties] = useState(0);
  const [turnaround, setTurnaround] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [cities, setCities] = useState(0);

  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = window.setInterval(() => {
      setProperties((prev) => (prev < 500 ? prev + 10 : 500));
      setTurnaround((prev) => (prev < 48 ? prev + 1 : 48));
      setSatisfaction((prev) => (prev < 100 ? prev + 2 : 100));
      setCities((prev) => (prev < 25 ? prev + 1 : 25));
    }, 30);

    return () => window.clearInterval(interval);
  }, [hasStarted]);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-sm font-semibold tracking-wider text-brand-400 uppercase">
            By The Numbers
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Timex Media at a Glance
          </p>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Real results that speak for themselves
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onViewportEnter={() => setHasStarted(true)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <FiCamera />,
              value: `${properties}+`,
              title: "Properties Shot",
              sub: "Residential & Commercial",
            },
            {
              icon: <FiClock />,
              value: `${turnaround}hr`,
              title: "Avg. Turnaround",
              sub: "Lightning Fast",
            },
            {
              icon: <FiStar />,
              value: `${satisfaction}%`,
              title: "Client Satisfaction",
              sub: "5‑Star Rated",
            },
            {
              icon: <FiMapPin />,
              value: `${cities}+`,
              title: "Cities Covered",
              sub: "Across California",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center p-6 hover:border-brand-500/50 transition-all"
            >
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-brand-400 text-4xl mb-4"
              >
                {item.icon}
              </motion.div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {item.value}
              </div>

              {/* Title */}
              <p className="text-xl font-semibold text-white mt-3">
                {item.title}
              </p>

              {/* Sub */}
              <p className="text-sm text-gray-400 mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
