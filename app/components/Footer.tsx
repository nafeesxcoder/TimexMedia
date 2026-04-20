import AnimateOnView from "./AnimateOnView";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden max-w-[100vw] bg-black">
      {/* Top Brand Bar */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-down">
            <h2 className="text-center text-white text-base sm:text-lg md:text-xl font-semibold mb-3">
              Included in{" "}
              <span className="text-brand">All Service Packages</span>
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

      {/* Main Footer - 3 Columns */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                <div className="space-y-1.5">
                  <a
                    href="tel:+15595053443"
                    className="flex items-center gap-2 text-gray-400 hover:text-brand text-sm transition-colors"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    +1 (559) 505-3443
                  </a>
                  <a
                    href="mailto:team@timexsolutioninc.com"
                    className="flex items-center gap-2 text-gray-400 hover:text-brand text-sm transition-colors"
                  >
                    <MdEmail className="w-3.5 h-3.5" />
                    team@timexsolutioninc.com
                  </a>
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <MdLocationOn className="w-3.5 h-3.5 mt-0.5" />
                    <span>3661 West Shield Ave, Fresno, CA 93722</span>
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
              Powered by <span className="text-brand">Timex Solution Inc</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
