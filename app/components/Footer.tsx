"use client";

import Link from "next/link";
import AnimateOnView from "./AnimateOnView";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  // Exact address
  const address = "3661 West Shield Ave, Fresno, CA 93722";

  // Google Maps embed URL
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.8!2d-119.805!3d36.735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945f0f5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s3661%20West%20Shield%20Ave%2C%20Fresno%2C%20CA%2093722!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus";

  return (
    <footer className="w-full overflow-x-hidden max-w-[100vw] bg-black">
      {/* Top Brand Bar */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-down">
            <h2 className="text-center text-white text-base sm:text-lg md:text-xl font-semibold mb-3">
              Included in{" "}
              <Link
                href="/pricing"
                className="text-brand hover:text-brand/80 transition-colors hover:underline cursor-pointer"
                aria-label="View all service packages"
              >
                All Service Packages
              </Link>
            </h2>
          </AnimateOnView>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5">
            {[
              "Professional Editing",
              "Marketing Materials",
              "3D Virtual Tours",
              "Quality Guarantee",
              "Fast Turnaround",
            ].map((item, i) => (
              <AnimateOnView
                key={item}
                animation="fade-in-up"
                delay={`${0.15 + i * 0.08}s`}
              >
                <span className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors">
                  {item}
                </span>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer - 4 Columns with Map */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Turnaround */}
            <AnimateOnView animation="fade-in-left" delay="0.1s">
              <div>
                <h3 className="font-semibold text-white text-base mb-2">
                  ⚡ Turnaround
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Photos & 3D tours in{" "}
                  <span className="text-brand">24-48 hours</span>. Videos in{" "}
                  <span className="text-brand">2-3 days</span>. Weekend
                  available.
                </p>
              </div>
            </AnimateOnView>

            {/* Contact */}
            <AnimateOnView animation="fade-in-up" delay="0.15s">
              <div>
                <h3 className="font-semibold text-white text-base mb-2">
                  📞 Contact
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+15595053443"
                    className="flex items-center gap-2 text-gray-400 hover:text-brand text-sm transition-colors group"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    +1 (559) 505-3443
                  </a>
                  <a
                    href="mailto:team@timexsolutioninc.com"
                    className="flex items-center gap-2 text-gray-400 hover:text-brand text-sm transition-colors group"
                  >
                    <MdEmail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    team@timexsolutioninc.com
                  </a>
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <MdLocationOn className="w-3.5 h-3.5 mt-0.5" />
                    <span>{address}</span>
                  </div>
                </div>
              </div>
            </AnimateOnView>

            {/* Terms */}
            <AnimateOnView animation="fade-in-right" delay="0.2s">
              <div>
                <h3 className="font-semibold text-white text-base mb-2">
                  📋 Terms
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                  Photo-ready required. 24hr notice for cancellations.
                </p>
                <div className="flex gap-4">
                  <button className="text-gray-500 hover:text-brand text-xs transition-colors">
                    Terms
                  </button>
                  <button className="text-gray-500 hover:text-brand text-xs transition-colors">
                    Privacy
                  </button>
                </div>
              </div>
            </AnimateOnView>

            {/* Google Map - Exact Address */}
            <AnimateOnView animation="fade-in-right" delay="0.25s">
              <div>
                <h3 className="font-semibold text-white text-base mb-2">
                  🗺️ Find Us
                </h3>
                <div className="rounded-lg overflow-hidden border border-white/20 h-[160px] w-full">
                  <iframe
                    title="Timex Media Location Map"
                    src={googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    address,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand text-xs mt-2 inline-block hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </div>

      {/* Social Icons - Compact */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-6">
            <AnimateOnView animation="pop-in" delay="0.2s">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0077b5] transition-all hover:scale-110 inline-block"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </AnimateOnView>
            <AnimateOnView animation="pop-in" delay="0.24s">
              <a
                href="https://x.com/timexsolution?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-all hover:scale-110 inline-block"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </AnimateOnView>
            <AnimateOnView animation="pop-in" delay="0.28s">
              <a
                href="https://www.facebook.com/share/15tRLbGLS9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#1877f2] transition-all hover:scale-110 inline-block"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
            </AnimateOnView>
            <AnimateOnView animation="pop-in" delay="0.32s">
              <a
                href="https://www.instagram.com/timexsolutioninc?igsh=MWZodjU5cnZ4OGw0YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#e4405f] transition-all hover:scale-110 inline-block"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </AnimateOnView>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} Timex Media. All rights reserved.
            </p>
            <p>
              Powered by{" "}
              <a
                href="https://timexsolutioninc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand/80 hover:underline transition-colors"
              >
                Timex Solution Inc
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
