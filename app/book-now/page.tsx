import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnView from "../components/AnimateOnView";
import Image from "next/image";
import BookNowForm from "./BookNowForm";
import BookingCalendar from "../components/BookingCalendar";

export const metadata = {
  title: "Book Now - Timex Media",
  description:
    "Book real estate photography, video, 3D tours, and marketing content with Timex Media. Fast turnaround and professional results.",
};

export default function BookNowPage() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Order Form banner */}
      <section className="w-full bg-brand-600 py-3 sm:py-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest">
            Order Form
          </h2>
        </div>
      </section>

      {/* Two Column Layout - Calendar + Form */}
      <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-6xl mx-auto w-full min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Calendar */}
            <AnimateOnView animation="fade-in-left" className="space-y-6">
              <div className="text-center lg:text-left mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Select a Date
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Choose your preferred shooting date
                </p>
              </div>
              <BookingCalendar />
            </AnimateOnView>

            {/* Right Column - Form */}
            <AnimateOnView
              animation="fade-in-right"
              delay="0.2s"
              className="space-y-6"
            >
              <div className="text-center lg:text-left mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Order Form
                </h3>
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-white">
                    timex.media
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Complete the steps below to place your order. We'll confirm
                  availability and follow up within one business day.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8">
                <BookNowForm />
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="border-t border-white/20 bg-black/20 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-300">
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-brand-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:support@timex.media"
              className="text-white hover:text-brand-300 underline underline-offset-2 transition-colors"
            >
              support@timex.media
            </a>
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-brand-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>(555) 123-4567</span>
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
