"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimateOnView from "./AnimateOnView";
import { SERVICES } from "../lib/services";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Book Now", href: "/book-now" },
  { label: "Pricing", href: "#" },
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

  // 🔥 Scroll effect (premium navbar)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown outside click
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

  return (
    <>
      {/* ✅ HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 
        ${
          scrolled
            ? "bg-[#0B0F1A]/80 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-lg">
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
              <span className="text-lg font-semibold text-white hidden sm:block">
                timex.media
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className={`text-white ${pathname === "/" ? "opacity-70" : ""}`}
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
                    isServicesActive ? "opacity-70" : ""
                  }`}
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition ${
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

              {navItems
                .filter((item) => item.label !== "Home")
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-white ${
                      pathname === item.href ? "opacity-70" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#0B0F1A] border-t border-white/10 px-4 pb-6">
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ✅ IMPORTANT SPACING FIX */}
      <div className="h-20" />
    </>
  );
}
