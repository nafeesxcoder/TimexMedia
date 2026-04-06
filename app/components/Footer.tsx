import AnimateOnView from "./AnimateOnView";

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden max-w-[100vw]">
      {/* Top Brand Bar - Included in All Photo Packages */}
      <div className=" py-6 sm:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <AnimateOnView animation="fade-in-down">
            <h2 className="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 px-2">
              Included in <span className="italic font-normal">All Service Packages</span>
            </h2>
          </AnimateOnView>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white text-sm sm:text-base">
            {["Professional Editing", "Marketing Materials", "3D Virtual Tours", "Quality Guarantee", "Fast Turnaround"].map((item, i) => (
              <AnimateOnView
                key={item}
                animation="fade-in-up"
                delay={`${0.15 + i * 0.08}s`}
                className="whitespace-nowrap inline-block"
              >
                <span className="text-white">{item}</span>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Section - Three Columns */}
      <div className="bg-black/20 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Turnaround Column */}
            <AnimateOnView animation="fade-in-left" delay="0.1s">
              <h3 className=" font-bold text-lg sm:text-xl mb-4">
                Turnaround
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                <strong className="text-white">Lightning-fast delivery</strong> on photos and 3D tours (24-48 hours). Videos completed in 2-3 business days. Weekend services available.
              </p>
            </AnimateOnView>

            {/* Support Column */}
            <AnimateOnView animation="fade-in-up" delay="0.2s">
              <h3 className=" font-bold text-lg sm:text-xl mb-4">
                Support
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Dedicated support team with same-day response. Contact us via phone, email, or text for all your real estate media needs.
              </p>
            </AnimateOnView>

            {/* Terms of Service Column */}
            <AnimateOnView animation="fade-in-right" delay="0.3s">
              <h3 className=" font-bold text-lg sm:text-xl mb-4">
                Terms of Service
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Properties must be photo-ready. Minimum 24-hour notice required for rescheduling or cancellations.
              </p>
            </AnimateOnView>
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Media */}
      <div className="bg-black/10 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <AnimateOnView animation="blur-in" delay="0.1s">
            <h3 className="text-center text-white font-bold text-lg sm:text-xl mb-6 underline italic">
              Follow us on Socials
            </h3>
          </AnimateOnView>
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {/* Instagram */}
            <AnimateOnView animation="pop-in" delay="0.2s" className="flex">
              <a
                href="https://instagram.com/timexmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </AnimateOnView>

            {/* YouTube */}
            <AnimateOnView animation="pop-in" delay="0.28s" className="flex">
            <a
              href="https://youtube.com/@timexmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
              aria-label="YouTube"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            </AnimateOnView>

            {/* TikTok */}
            <AnimateOnView animation="pop-in" delay="0.36s" className="flex">
            <a
              href="https://tiktok.com/@timexmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-black hover:opacity-90 transition-opacity"
              aria-label="TikTok"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            </AnimateOnView>

            {/* Facebook */}
            <AnimateOnView animation="pop-in" delay="0.44s" className="flex">
            <a
              href="https://facebook.com/timexmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            </AnimateOnView>
          </div>
        </div>
      </div>

      {/* Info Icon at Bottom Left */}
      <div className="pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <button
            type="button"
            className="w-7 h-7 min-h-[44px] min-w-[44px] rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
            aria-label="Information"
          >
            <span className="text-gray-200 text-sm font-bold">i</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
