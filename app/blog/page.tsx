import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnView from "../components/AnimateOnView";
import Image from "next/image";

export const metadata = {
  title: "Blog - Timex Media",
  description:
    "Tips and insights on real estate photography, video, 3D tours, and marketing for agents. Stay ahead with Timex Media.",
};

const BLOG_POSTS = [
  {
    id: 1,
    title: "Why Great Listing Media Still Wins in Real Estate",
    date: "Monday, February 20, 2025",
    author: "Timex Media",
    intro:
      "Listings with strong photos and video get more clicks, more showings, and often sell faster. Here’s how investing in quality media helps you stand out and close more deals.",
    sections: [
      {
        heading: "1. Strong Photos Create a Strong First Impression",
        body: "Most buyers start their search online. Your photos are the first thing they see. Clean, well-lit shots that show space and flow help listings feel inviting and trustworthy. They also signal that you take your job seriously—which reflects on your brand and your seller.",
      },
      {
        heading: "2. Video and 3D Tours Keep Buyers Engaged",
        body: "Walkthrough videos and 3D tours let serious buyers explore from anywhere. They filter out tire-kickers and bring qualified leads who already like the property. That means fewer wasted showings and more focused conversations.",
      },
      {
        heading: "3. Consistency Builds Trust and Referrals",
        body: "When every listing you share looks polished and professional, clients and colleagues notice. Consistent quality builds trust and makes you the go-to agent for sellers who want their property presented at its best.",
      },
    ],
  },
  {
    id: 2,
    title: "Using Social Media and Branding to Grow Your Real Estate Presence",
    date: "Wednesday, February 8, 2025",
    author: "Timex Media",
    intro:
      "Social platforms are where many clients discover and remember agents. Pairing a clear personal brand with strong visual content can help you attract more listings and stay top of mind.",
    sections: [
      {
        heading: "1. Define Your Brand Before You Post",
        body: "Decide what you want to be known for: a certain area, type of property, or style of service. Use the same tone, colors, and types of content across profiles so people recognize you at a glance.",
      },
      {
        heading: "2. Lead With Quality Visuals",
        body: "Reels, carousels, and stories perform best when the imagery is sharp and well-composed. Use your listing photos and videos as the backbone of your feed so your expertise shows in every post.",
      },
      {
        heading: "3. Post Regularly and Engage",
        body: "A steady stream of listings, tips, and local insights keeps you visible. Reply to comments and DMs, and share client wins (with permission) to build credibility and community.",
      },
    ],
  },
  {
    id: 3,
    title: "How Professional Photography and Video Support Your Listings",
    date: "Friday, January 26, 2025",
    author: "Timex Media",
    intro:
      "Sellers and buyers both benefit when a property is presented with care. Here’s how professional stills and video work together to market listings more effectively.",
    sections: [
      {
        heading: "1. Photography That Shows Space and Light",
        body: "Wide, balanced shots help buyers understand layout and flow. Proper lighting and editing make rooms feel bright and spacious without looking fake. That combination helps listings compete with brand-new construction and staged homes.",
      },
      {
        heading: "2. Video That Tells a Short Story",
        body: "A short walkthrough or highlight reel can convey mood and key features in under a minute. Used on listing sites and social, video increases time on listing and improves the chance of a showing or inquiry.",
      },
      {
        heading: "3. One Package, Many Uses",
        body: "The same photo and video set can power your MLS listing, social posts, flyers, and email campaigns. Investing once in quality media saves time and keeps your marketing consistent across every channel.",
      },
    ],
  },
  {
    id: 4,
    title: "Building Your Personal Brand With Quality Content",
    date: "Tuesday, January 14, 2025",
    author: "Timex Media",
    intro:
      "Your reputation as an agent is tied to the content you put out. When that content is consistently high quality, you become the obvious choice for sellers who want the best for their home.",
    sections: [
      {
        heading: "1. Content as Your Portfolio",
        body: "Every listing you share is a sample of your work. Clean, professional media signals that you invest in your clients’ success. Over time, your feed and listings become a portfolio that speaks for itself.",
      },
      {
        heading: "2. Mix Listings With Value",
        body: "Balance listing highlights with tips, market updates, and behind-the-scenes moments. That mix keeps followers interested and positions you as a knowledgeable local expert, not only a listing feed.",
      },
      {
        heading: "3. Quality Over Quantity",
        body: "A few strong posts per week beat daily low-effort posts. Focus on clear images, concise captions, and a consistent look so your brand stays recognizable and trustworthy.",
      },
    ],
  },
];

function BlogPostCard({
  post,
  index,
}: {
  post: (typeof BLOG_POSTS)[0];
  index: number;
}) {
  return (
    <article className="border-b border-white/20 pb-10 sm:pb-14 last:border-b-0 last:pb-0">
      <AnimateOnView
        animation="fade-in-up"
        delay={`${0.05 * index}s`}
        className="space-y-4 sm:space-y-5"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
          {post.title}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          {post.date} · By {post.author}
        </p>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          {post.intro}
        </p>
        <div className="space-y-4 pt-2">
          {post.sections.map((section, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white">
                {section.heading}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </AnimateOnView>
    </article>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Hero - blurred background with centered title */}
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
              Blog
            </h1>
          </AnimateOnView>
        </div>
      </section>

      {/* Full-width banner strip (theme: brand purple) */}
      <section className="w-full bg-brand-600 py-3 sm:py-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest">
            Blog
          </h2>
        </div>
      </section>

      {/* Main content - single column, readable width */}
      <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-3xl mx-auto w-full min-w-0 space-y-10 sm:space-y-14">
          {BLOG_POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
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
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
