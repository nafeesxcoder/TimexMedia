import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnView from "../components/AnimateOnView";
import LocalVideo from "../components/LocalVideo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Marketing Materials - Timex Media",
  description:
    "Browse our real estate reels, listing videos, and marketing clips. Use these samples for social, listings, and brand campaigns.",
};

/** All videos under public/vedio - grouped for layout */
const REELS = [
  "videoForHome/1.mp4", "videoForHome/2.mp4", "videoForHome/3.mp4", "videoForHome/4.mp4",
  "videoForHome/5.mp4", "videoForHome/6.mp4", "videoForHome/7.mp4", "videoForHome/8.mp4",
  "videoForHome/9.mp4", "videoForHome/10.mp4", "videoForHome/12.mp4", "videoForHome/13.mp4",
  "videoForHome/14.mp4", "videoForHome/15.mp4", "videoForHome/16.mp4", "videoForHome/17.mp4",
  "videoForHome/18.mp4", "videoForHome/21.mp4", "videoForHome/22.mp4", "videoForHome/24.mp4",
];
const REEL_POSTERS: Record<string, string> = {};
REELS.forEach((src) => {
  const name = src.replace("videoForHome/", "").replace(".mp4", "");
  REEL_POSTERS[src] = `thumbnails/videoForHome/${name}-poster.jpg`;
});

const LISTING_VIDEOS = [
  { src: "vedio1.mp4", title: "Listing highlight 1" },
  { src: "vedio2.mp4", title: "Listing highlight 2" },
  { src: "original/vedio1.mp4", title: "Property tour 1" },
  { src: "original/vedio2.mp4", title: "Property tour 2" },
  { src: "video001.mp4", title: "Listing video 1" },
  { src: "video002.mp4", title: "Listing video 2" },
  { src: "video003.mp4", title: "Listing video 3", poster: "thumbnails/video003-poster.jpg" },
  { src: "video004.mp4", title: "Listing video 4", poster: "thumbnails/video004-poster.jpg" },
  { src: "video005.mp4", title: "Listing video 5", poster: "thumbnails/video005-poster.jpg" },
  { src: "video006.mp4", title: "Listing video 6", poster: "thumbnails/video006-poster.jpg" },
  { src: "video007.mp4", title: "Listing video 7", poster: "thumbnails/video007-poster.jpg" },
  { src: "video008.mp4", title: "Listing video 8", poster: "thumbnails/video008-poster.jpg" },
  { src: "video009.mp4", title: "Listing video 9", poster: "thumbnails/video009-poster.jpg" },
];

const GIF_CLIPS = [
  { src: "gif/gif.mp4", title: "Short clip" },
  { src: "gif/gif-original.mp4", title: "Short clip (original)" },
];

export default function MarketingMaterialsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] sm:min-h-[320px] md:min-h-[380px] max-h-[55dvh] flex items-center justify-center overflow-hidden">
        <AnimateOnView
          animation="blur-in"
          className="absolute inset-0"
          rootMargin="0px"
          threshold={0.2}
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2073&auto=format&fit=crop"
            alt="Modern home interior"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />
        </AnimateOnView>
        <div className="relative z-10 text-center px-4 w-full max-w-[100vw]">
          <AnimateOnView
            animation="float-in"
            delay="0.15s"
            rootMargin="0px"
            threshold={0.2}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
              Marketing Materials
            </h1>
          </AnimateOnView>
        </div>
      </section>

      {/* Banner */}
      <section className="w-full bg-brand-600 py-3 sm:py-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest">
            Video Gallery
          </h2>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-3xl mx-auto w-full min-w-0 text-center">
          <AnimateOnView animation="fade-in-up">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Our reels, listing videos, and short clips are built for social feeds, listing pages, and ads. 
              Use these samples to see the style and quality we deliver for every client—then book a shoot when you’re ready.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Reels & social – vertical grid */}
      <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-black/10">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <AnimateOnView animation="fade-in-down" className="mb-8 sm:mb-12 text-center">
            <p className="text-brand-400 text-sm sm:text-base font-medium uppercase tracking-wide">
              Reels & social
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
              Scroll-stopping content for every platform
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              Vertical videos optimized for Instagram Reels, TikTok, and stories. Same quality and pacing we use for our clients.
            </p>
          </AnimateOnView>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {REELS.map((src, i) => (
              <AnimateOnView
                key={src}
                animation="fade-in-up"
                delay={`${0.03 * (i % 10)}s`}
                className="min-w-0 flex justify-center"
              >
                <LocalVideo
                  src={src}
                  title={`Reel ${i + 1}`}
                  aspect="vertical"
                  poster={REEL_POSTERS[src]}
                  className="w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px]"
                />
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Listing videos – horizontal */}
      <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <AnimateOnView animation="fade-in-down" className="mb-8 sm:mb-12 text-center">
            <p className="text-brand-400 text-sm sm:text-base font-medium uppercase tracking-wide">
              Listing videos
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
              Cinematic tours and highlights
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              Horizontal edits for listing sites, YouTube, and email. Full walkthroughs and hero clips that showcase every property.
            </p>
          </AnimateOnView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {LISTING_VIDEOS.map((v, i) => (
              <AnimateOnView
                key={v.src}
                animation="fade-in-up"
                delay={`${0.05 + i * 0.04}s`}
                className="min-w-0"
              >
                <LocalVideo
                  src={v.src}
                  title={v.title}
                  aspect="horizontal"
                  poster={v.poster}
                />
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Quick clips */}
      <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-black/10">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <AnimateOnView animation="fade-in-down" className="mb-8 sm:mb-12 text-center">
            <p className="text-brand-400 text-sm sm:text-base font-medium uppercase tracking-wide">
              Quick clips
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
              Short-form moments for stories and ads
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              Bite-sized clips perfect for Instagram stories, Facebook ads, or email headers.
            </p>
          </AnimateOnView>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-3xl mx-auto">
            {GIF_CLIPS.map((v, i) => (
              <AnimateOnView
                key={v.src}
                animation="scale-in"
                delay={`${0.1 + i * 0.1}s`}
                className="min-w-0"
              >
                <LocalVideo
                  src={v.src}
                  title={v.title}
                  aspect="horizontal"
                />
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + contact strip */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <AnimateOnView animation="fade-in-up">
            <p className="text-gray-300 text-base sm:text-lg">
              Ready for your own set? We’ll match this quality and style for your listings and brand.
            </p>
            <Link
              href="/book-now"
              className="inline-block mt-6 px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:opacity-90 transition-opacity"
            >
              Book now
            </Link>
          </AnimateOnView>
        </div>
      </section>

      <section className="border-t border-white/20 bg-black/20 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-300">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:support@timex.media" className="text-white hover:text-brand-300 underline underline-offset-2 transition-colors">
              support@timex.media
            </a>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+15551234567" className="text-white hover:text-brand-300 transition-colors">
              (555) 123-4567
            </a>
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
