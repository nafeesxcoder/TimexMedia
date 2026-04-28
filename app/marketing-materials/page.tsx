import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnView from "../components/AnimateOnView";
import AnimatedButton from "../components/AnimatedButton";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Marketing Materials - Timex Media",
  description:
    "Professional photography portfolio, brand resources, and marketing guides for real estate agents.",
};

// Generate images array from Image1.png to Image30.png
const generateImageArray = (start: number, end: number) => {
  const images = [];
  for (let i = start; i <= end; i++) {
    images.push(`/Image${i}.png`);
  }
  return images;
};

// All 30 images
const ALL_IMAGES = generateImageArray(1, 30);

// Split images into 3 categories (10 images each)
// Note: Image1 - Image5 are grouped under "Exterior & Aerial"
const PORTFOLIO_CATEGORIES = [
  {
    name: "Interior Excellence",
    icon: "🏠",
    images: generateImageArray(6, 15),
  },
  {
    name: "Exterior & Aerial",
    icon: "🏡",
    images: [
      ...generateImageArray(1, 3),
      "/IMG_1535.jpg",
      "/20260318_181347521_iOS.jpg",
      ...generateImageArray(16, 17),
      "/IMG_1138.jpg",
      "/IMG_1159.jpg",
      "/IMG_1160.jpg",
    ],
  },
  {
    name: "Luxury Details",
    icon: "✨",
    images: generateImageArray(21, 30),
  },
];

// Resource Library - 4 cards as requested
const RESOURCE_LIBRARY = [
  {
    title: "Listing Launch Kit",
    description:
      "Complete checklist and timeline for successful property launches",
    type: "Guide",
    readTime: "5 min",
    icon: "📋",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Social Media Calendar",
    description: "30-day content plan for real estate agents",
    type: "Template",
    readTime: "10 min",
    icon: "📅",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Photography Checklist",
    description: "What to prepare before your professional shoot",
    type: "Checklist",
    readTime: "3 min",
    icon: "✅",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Brand Identity Guide",
    description:
      "Create a memorable real estate brand with our comprehensive guide",
    type: "Guide",
    readTime: "8 min",
    icon: "🎨",
    color: "from-orange-500/20 to-red-500/20",
  },
];

// Statistics / impact numbers
const IMPACT_STATS = [
  {
    number: "73%",
    label: "More views",
    description: "Listings with pro photos get 73% more online views",
  },
  {
    number: "2x",
    label: "Faster sales",
    description: "Professional imagery sells homes twice as fast",
  },
  {
    number: "$11k",
    label: "Higher sale price",
    description: "Average premium on professionally photographed homes",
  },
  {
    number: "89%",
    label: "Buyer preference",
    description: "Prefer listings with high-quality photos first",
  },
];

// Testimonials
const TESTIMONIALS = [
  {
    text: "Timex Media transformed our listings. The quality is unmatched, and our clients are consistently impressed.",
    author: "Jennifer Martinez",
    role: "Top Producer, Golden Gate Realty",
    rating: 5,
  },
  {
    text: "The attention to detail and quick turnaround make them our go-to for all property marketing.",
    author: "David Chen",
    role: "Broker, Chen & Associates",
    rating: 5,
  },
];

export default function MarketingMaterialsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Hero Section */}
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
            <div className="inline-block px-4 py-1 rounded-full border border-brand/30 bg-brand/10 backdrop-blur-sm mb-4">
              <span className="text-brand text-sm font-medium">
                Resource Center
              </span>
            </div>
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
            Portfolio Gallery
          </h2>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 md:py-20 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {IMPACT_STATS.map((stat, i) => (
              <AnimateOnView
                key={stat.label}
                animation="scale-in"
                delay={`${0.1 + i * 0.1}s`}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand/30 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold text-lg mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase - All 30 Images */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <AnimateOnView animation="fade-in-down">
              <p className="text-brand text-sm font-medium uppercase tracking-wider">
                Portfolio
              </p>
            </AnimateOnView>
            <AnimateOnView animation="fade-in-up" delay="0.1s">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
                Visual <span className="text-brand">Excellence</span>
              </h2>
            </AnimateOnView>
            <AnimateOnView animation="fade-in-left" delay="0.2s">
              <p className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl mx-auto">
                Explore our work across different property types and styles
              </p>
            </AnimateOnView>
          </div>

          <div className="space-y-16 md:space-y-20">
            {PORTFOLIO_CATEGORIES.map((category, catIdx) => (
              <div key={category.name} className="relative">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <span className="text-3xl md:text-4xl">{category.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {category.name}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand/50 to-transparent" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                  {category.images.map((img, imgIdx) => (
                    <AnimateOnView
                      key={img}
                      animation="fade-in-up"
                      delay={`${0.05 + (imgIdx % 5) * 0.03}s`}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`${category.name} showcase ${imgIdx + 1}`}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">
                          View Project →
                        </p>
                      </div>
                    </AnimateOnView>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Total Images Counter */}
          <div className="text-center mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              Showing all {ALL_IMAGES.length} premium photographs from our
              portfolio
            </p>
          </div>
        </div>
      </section>

      {/* Resource Library - Card Grid with icons */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <AnimateOnView animation="fade-in-down">
              <p className="text-brand text-sm font-medium uppercase tracking-wider">
                Resources
              </p>
            </AnimateOnView>
            <AnimateOnView animation="fade-in-up" delay="0.1s">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
                Free <span className="text-brand">Marketing Resources</span>
              </h2>
            </AnimateOnView>
            <AnimateOnView animation="fade-in-right" delay="0.2s">
              <p className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl mx-auto">
                Downloadable guides, templates, and checklists to grow your
                business
              </p>
            </AnimateOnView>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESOURCE_LIBRARY.map((resource, i) => (
              <AnimateOnView
                key={resource.title}
                animation="scale-in"
                delay={`${0.1 + i * 0.08}s`}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${resource.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-brand/40 transition-all duration-300 h-full flex flex-col">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <div className="mb-3">
                    <span className="text-xs font-medium text-brand uppercase tracking-wider">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500">
                      {resource.readTime} read
                    </span>
                    <button className="text-brand text-sm font-medium hover:text-brand-300 transition-colors flex items-center gap-1">
                      Download
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
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <AnimateOnView
                key={testimonial.author}
                animation="fade-in-up"
                delay={`${0.1 + i * 0.1}s`}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative"
              >
                <div className="absolute top-6 right-6 text-brand text-6xl opacity-20 font-serif">
                  "
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-brand fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed with AnimatedButton */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnView
            animation="scale-in"
            className="bg-gradient-to-r from-brand/20 to-brand/5 border border-brand/30 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to elevate your <span className="text-brand">listings</span>
              ?
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Get professional photography and marketing materials that actually
              sell properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Book a Shoot - Same as home page button */}
              <AnimatedButton text="Book a Shoot" link="/book-now" />

              {/* Contact Us - Different styling (Outline button) */}
              <Link href="/contact">
                <button className="group px-8 py-3.5 bg-transparent border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300">
                  Contact Us
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
      {/* Footer Contact Strip */}
     

      <Footer />
    </div>
  );
}
