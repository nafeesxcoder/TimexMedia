"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimateOnView from "@/app/components/AnimateOnView";

// वीडियो प्लेसहोल्डर कार्ड - सिर्फ ब्लैक बॉक्स
function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black border border-white/20 p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex flex-col items-center text-center gap-4">
        {/* Black Video Placeholder Box */}
        <div className="w-full aspect-video bg-black rounded-lg border border-white/10 flex items-center justify-center group-hover:border-purple-500/30 transition-colors">
          <div className="text-center">
            <svg
              className="w-12 h-12 text-gray-600 mx-auto mb-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 15l5-3-5-3v6zm11-3c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 8 3.59 8 8z" />
            </svg>
            <p className="text-gray-500 text-xs">Video coming soon</p>
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}

export default function AIVideosPage() {
  const service = {
    title: "AI Videos 🤖",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    intro:
      "Transform your real estate marketing with cutting-edge AI video technology. Our AI-powered videos create stunning virtual staging and automated property walkthroughs that captivate buyers and save you time.",
    contentBlocks: [
      {
        heading: "AI-Powered Virtual Staging",
        body: "Empty rooms come to life with realistic AI-generated furniture and decor. Choose from multiple design styles that match your property's aesthetic and target buyer. Modern, traditional, minimalist, or luxury - we have styles for every property type.",
      },
      {
        heading: "Automated Walkthroughs",
        body: "Create smooth, professional property tours automatically. Our AI technology analyzes floor plans and creates natural camera movements that highlight every key feature. No need for expensive equipment or lengthy editing sessions.",
      },
      {
        heading: "Cost-Effective Solution",
        body: "Traditional virtual staging can cost hundreds per room and take days. Our AI solution delivers stunning results in hours at a fraction of the cost. Perfect for vacant properties or listings on a budget.",
      },
    ],
    highlights: [
      "AI-powered virtual staging",
      "Automated property walkthroughs",
      "Cost-effective production",
      "24-hour turnaround time",
      "Multiple design styles available",
      "4K video output",
      "Social media optimized formats",
      "Unlimited revisions",
    ],
    ctaLine: "Ready to revolutionize your property marketing with AI?",
  };

  // 10 वीडियो की लिस्ट
  const videos = [
    { id: 1, title: "Virtual Staging Demo" },
    { id: 2, title: "Property Walkthrough" },
    { id: 3, title: "Neighborhood Tour" },
    { id: 4, title: "Luxury Home Showcase" },
    { id: 5, title: "Apartment Tour" },
    { id: 6, title: "Before & After AI" },
    { id: 7, title: "Commercial Property" },
    { id: 8, title: "Vacant Home Staging" },
    { id: 9, title: "Exterior Enhancement" },
    { id: 10, title: "Room Transformation" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimateOnView animation="fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {service.title}
            </h1>
          </AnimateOnView>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              {service.intro}
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* 10 Videos Grid - Black Placeholders */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Our AI Video Gallery
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Coming soon - Professional AI-powered real estate videos
            </p>
          </AnimateOnView>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {videos.map((video, i) => (
              <AnimateOnView
                key={video.id}
                animation="fade-in-up"
                delay={`${0.05 * i}s`}
              >
                <VideoPlaceholder title={video.title} />
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {service.contentBlocks.map((block, i) => (
            <AnimateOnView key={i} animation="fade-in-up" delay={`${0.1 * i}s`}>
              <h2 className="text-2xl font-bold text-white mb-3">
                {block.heading}
              </h2>
              <p className="text-gray-300 leading-relaxed">{block.body}</p>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* Highlights + CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-2xl font-bold text-white mb-6">What You Get</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {service.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {service.ctaLine && (
              <p className="text-white font-medium mb-6 text-lg">
                {service.ctaLine}
              </p>
            )}
            <Link
              href="/book-now"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </AnimateOnView>
        </div>
      </section>

      {/* Back Link */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/services"
            className="text-white/70 hover:text-white transition-colors"
          >
            ← Back to All Services
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
