"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "../lib/services";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Book Now", href: "/book-now" },
  { label: "Pricing", href: "/pricing" }, // Fixed: Changed from "#" to "/pricing"
  { label: "Marketing Materials", href: "/marketing-materials" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-[#0B0F1A]/95 via-[#13172B]/95 to-[#0B0F1A]/95 backdrop-blur-2xl shadow-2xl border-b border-white/10"
            : "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-50"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center rounded-xl backdrop-blur-sm border border-white/20">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2 7-7 7 7 2 2M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent hidden sm:block">
                timex.media
              </span>
            </Link>

            {/* Desktop Navigation - Same sequence as original */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className={`text-white ${pathname === "/" ? "opacity-70" : "hover:opacity-80"}`}
              >
                Home
              </Link>

              {/* SERVICES DROPDOWN */}
              <div
                className="relative"
                ref={servicesRef}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  className={`text-white flex items-center gap-1 ${
                    isServicesActive ? "opacity-70" : "hover:opacity-80"
                  }`}
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" strokeWidth={2} />
                  </svg>
                </Link>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-white rounded-xl shadow-2xl py-2 min-w-[220px]">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other nav items in original order */}
              {navItems
                .filter((item) => item.label !== "Home")
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-white ${
                      pathname === item.href ? "opacity-70" : "hover:opacity-80"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden relative z-50 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-br from-[#0B0F1A] to-[#13172B] shadow-2xl z-[101] lg:hidden overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Content */}
              <div className="px-6 pb-8">
                {/* Logo in Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center gap-3 mb-10 pb-6 border-b border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-white/10">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2 7-7 7 7 2 2M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      timex.media
                    </p>
                    <p className="text-white/40 text-xs">
                      Premium Media Services
                    </p>
                  </div>
                </motion.div>

                {/* Navigation Links - Same sequence as original */}
                <div className="space-y-2">
                  {/* Home */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-5 rounded-xl transition-all duration-300 ${
                        pathname === "/"
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="font-medium text-base">Home</span>
                      {pathname === "/" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Book Now */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/book-now"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-5 rounded-xl transition-all duration-300 ${
                        pathname === "/book-now"
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="font-medium text-base">Book Now</span>
                      {pathname === "/book-now" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Pricing - Now Working */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/pricing"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-5 rounded-xl transition-all duration-300 ${
                        pathname === "/pricing"
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="font-medium text-base">Pricing</span>
                      {pathname === "/pricing" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Marketing Materials */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/marketing-materials"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-5 rounded-xl transition-all duration-300 ${
                        pathname === "/marketing-materials"
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="font-medium text-base">
                        Marketing Materials
                      </span>
                      {pathname === "/marketing-materials" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Blog */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/blog"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-5 rounded-xl transition-all duration-300 ${
                        pathname === "/blog"
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="font-medium text-base">Blog</span>
                      {pathname === "/blog" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* About */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/about"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-5 rounded-xl transition-all duration-300 ${
                        pathname === "/about"
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="font-medium text-base">About</span>
                      {pathname === "/about" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Services Accordion */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center justify-between w-full py-3.5 px-5 rounded-xl transition-all duration-300 ${
                        isServicesActive
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium text-base">Services</span>
                      <motion.svg
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </motion.button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-6 mt-2 space-y-1 overflow-hidden"
                        >
                          {SERVICES.map((service, idx) => (
                            <motion.div
                              key={service.slug}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ x: 8 }}
                            >
                              <Link
                                href={`/services/${service.slug}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2.5 px-5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
                              >
                                {service.title}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacing for fixed header */}
      <div className="h-20" />
    </>
  );
}
