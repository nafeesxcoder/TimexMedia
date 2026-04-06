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
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  // Close desktop dropdown when clicking outside
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
    <header className="sticky top-0 z-[100] [background:var(--gradient-page)] backdrop-blur-sm border-b border-white/20 w-full overflow-visible">
      <AnimateOnView
        animation="slide-in-top"
        rootMargin="0px"
        threshold={0.01}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 overflow-visible"
      >
        <div className="flex items-center justify-between h-16 sm:h-20 min-h-[64px] gap-2">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <AnimateOnView
              animation="scale-in"
              delay="0.1s"
              className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-lg"
            >
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </AnimateOnView>
            <AnimateOnView
              animation="fade-in-left"
              delay="0.2s"
              className="hidden sm:block"
            >
              <span className="text-lg font-semibold text-white">
                timex.media
              </span>
            </AnimateOnView>
          </Link>

          {/* Desktop Navigation - overflow-visible so dropdown doesn't trigger page scrollbar */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink min-w-0 overflow-visible">
            <AnimateOnView
              animation="fade-in-down"
              delay="0.25s"
              className="flex"
            >
              <Link
                href="/"
                className={`text-white hover:text-gray-200 transition-colors font-medium ${pathname === "/" ? "text-gray-200" : ""}`}
              >
                Home
              </Link>
            </AnimateOnView>
            <div
              className="relative flex overflow-visible"
              ref={servicesRef}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <AnimateOnView
                animation="fade-in-down"
                delay="0.3s"
                className="flex overflow-visible"
              >
                <Link
                  href="/services"
                  className={`text-white hover:text-gray-200 transition-colors font-medium flex items-center gap-1 ${isServicesActive ? "text-gray-200" : ""}`}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`}
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
                  </svg>
                </Link>
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 min-w-[220px] z-[110]">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 overflow-y-auto overscroll-contain scrollbar-hide">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors whitespace-nowrap"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </AnimateOnView>
            </div>
            {navItems
              .filter((item) => item.label !== "Home")
              .map((item, i) => (
                <AnimateOnView
                  key={item.label}
                  animation="fade-in-down"
                  delay={`${0.35 + i * 0.05}s`}
                  className={
                    item.label === "Pricing" ? "flex items-center gap-1" : "flex"
                  }
                >
                  <Link
                    href={item.href}
                    className={`text-white hover:text-gray-200 transition-colors font-medium flex items-center gap-1 ${pathname === item.href ? "text-gray-200" : ""}`}
                  >
                    {item.label}
                    {item.label === "Pricing" && (
                      <svg
                        className="w-4 h-4"
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
                      </svg>
                    )}
                  </Link>
                </AnimateOnView>
              ))}
            <AnimateOnView animation="fade-in-down" delay="0.6s" className="flex">
              <button
                type="button"
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Search"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </AnimateOnView>
          </nav>

          {/* Mobile Menu Button */}
          <AnimateOnView
            animation="pop-in"
            delay="0.2s"
            className="lg:hidden flex"
            rootMargin="0px"
            threshold={0.01}
          >
            <button
              type="button"
              className="text-white p-2 -m-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
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
              ) : (
                <svg
                  className="w-6 h-6"
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
              )}
            </button>
          </AnimateOnView>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 pt-4 border-t border-white/20">
            <div className="flex flex-col">
              <Link
                href="/"
                className="py-3 min-h-[44px] flex items-center font-medium text-white hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div>
                <button
                  type="button"
                  className="w-full py-3 min-h-[44px] flex items-center justify-between font-medium text-white hover:text-gray-200"
                  onClick={() => setServicesOpen((o) => !o)}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="pl-4 border-l-2 border-white/20 ml-2 mt-1 space-y-0 overflow-y-auto scrollbar-hide">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block py-2.5 text-sm text-gray-400 hover:text-white"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {navItems
                .filter((item) => item.label !== "Home")
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="py-3 min-h-[44px] flex items-center font-medium text-white hover:text-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </nav>
        )}
      </AnimateOnView>
    </header>
  );
}
