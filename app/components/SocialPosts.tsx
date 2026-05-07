"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaHeart, FaComment, FaShare, FaClock } from "react-icons/fa";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  platform: "instagram" | "twitter" | "linkedin" | "facebook";
  likes: number;
  comments: number;
  shares: number;
  service: string;
}

export default function SocialPosts() {
  const [isVisible, setIsVisible] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const posts: Post[] = [
    {
      id: 1,
      title: "Professional Listing Photography",
      description:
        "High-quality real estate photography that captures every detail. Make your property stand out with professional shots! 📸",
      image: "/social/listing-photography.jpg",
      date: "2024-05-15",
      platform: "instagram",
      likes: 342,
      comments: 28,
      shares: 45,
      service: "Listing Photography",
    },
    {
      id: 2,
      title: "Stunning Listing Videos",
      description:
        "Cinematic property walkthrough videos that tell a story. Boost engagement by 200% with professional videography! 🎥",
      image: "/social/listing-videos.jpg",
      date: "2024-05-12",
      platform: "instagram",
      likes: 567,
      comments: 45,
      shares: 89,
      service: "Listing Videos",
    },
    {
      id: 3,
      title: "Social Media Content Strategy",
      description:
        "Custom social media content that drives engagement and generates leads. Real estate marketing made simple! 📱",
      image: "/social/social-media-content.jpg",
      date: "2024-05-10",
      platform: "facebook",
      likes: 234,
      comments: 56,
      shares: 78,
      service: "Social Media Content",
    },
    {
      id: 4,
      title: "3D Virtual Tour Experience",
      description:
        "Immersive 3D virtual tours that let buyers explore properties from anywhere. Increase viewing requests by 150%! 🏠",
      image: "/social/3d-virtual-tour.jpg",
      date: "2024-05-08",
      platform: "facebook",
      likes: 789,
      comments: 67,
      shares: 123,
      service: "3D Virtual Tour",
    },
    {
      id: 5,
      title: "Professional 2D Floor Plans",
      description:
        "Accurate and visually appealing floor plans that help buyers understand property layout. Essential for listings! 📐",
      image: "/social/2d-floor-plans.jpg",
      date: "2024-05-05",
      platform: "instagram",
      likes: 456,
      comments: 34,
      shares: 67,
      service: "2D Floor Plans",
    },
    {
      id: 6,
      title: "Virtual Staging Transformation",
      description:
        "Before & after virtual staging that helps buyers visualize potential. Sell properties faster with virtual staging! 🛋️",
      image: "/social/virtual-staging.jpg",
      date: "2024-05-03",
      platform: "twitter",
      likes: 623,
      comments: 89,
      shares: 145,
      service: "Virtual Staging",
    },
    {
      id: 7,
      title: "Professional Headshots",
      description:
        "High-quality headshots for real estate agents and teams. Build trust and credibility with professional photos! 👔",
      image: "/social/headshots.jpg",
      date: "2024-04-30",
      platform: "linkedin",
      likes: 345,
      comments: 23,
      shares: 56,
      service: "Headshots",
    },
    {
      id: 8,
      title: "Branding Session Photography",
      description:
        "Complete branding sessions that showcase your unique style. Stand out in the competitive real estate market! ✨",
      image: "/social/branding-session.jpg",
      date: "2024-04-28",
      platform: "instagram",
      likes: 567,
      comments: 78,
      shares: 89,
      service: "Branding Session",
    },
    {
      id: 9,
      title: "Viral Video Editing Tips",
      description:
        "Professional video editing techniques that make your content go viral. Learn the secrets of engaging real estate videos! 🔥",
      image: "/social/viral-video-editing.jpg",
      date: "2024-04-25",
      platform: "twitter",
      likes: 892,
      comments: 123,
      shares: 234,
      service: "Viral Video Editing",
    },
    {
      id: 10,
      title: "Social Media Management Services",
      description:
        "Full-service social media management for real estate agents. Get consistent, high-quality content without the stress! 📊",
      image: "/social/social-media-management.jpg",
      date: "2024-04-22",
      platform: "facebook",
      likes: 678,
      comments: 89,
      shares: 156,
      service: "Social Media Management",
    },
    {
      id: 11,
      title: "Drone Photography for Properties",
      description:
        "Aerial drone shots that showcase property surroundings. Give buyers a complete view of the neighborhood! 🚁",
      image: "/social/drone-photography.jpg",
      date: "2024-04-20",
      platform: "instagram",
      likes: 987,
      comments: 156,
      shares: 234,
      service: "Drone Photography",
    },
    {
      id: 12,
      title: "Twilight Photography Magic",
      description:
        "Stunning twilight exterior shots that create emotional appeal. Sell luxury properties faster with golden hour photos! 🌆",
      image: "/social/twilight-photography.jpg",
      date: "2024-04-18",
      platform: "facebook",
      likes: 734,
      comments: 67,
      shares: 123,
      service: "Twilight Photography",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <FaInstagram className="text-lg" />;
      case "twitter":
        return <FaXTwitter className="text-lg" />;
      case "linkedin":
        return <FaLinkedinIn className="text-lg" />;
      case "facebook":
        return <FaFacebookF className="text-lg" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const displayedPosts = showAll ? posts : posts.slice(0, visiblePosts);

  const mediaServices = [
    {
      title: "Listing Photography",
      slug: "listing-photography",
      icon: "fa-camera",
    },
    { title: "Listing Videos", slug: "listing-videos", icon: "fa-video" },
    {
      title: "Social Media Content",
      slug: "social-media-content",
      icon: "fa-hashtag",
    },
    { title: "3D Virtual Tour", slug: "3d-virtual-tour", icon: "fa-cube" },
    {
      title: "2D Floor Plans",
      slug: "2d-floor-plans",
      icon: "fa-draw-polygon",
    },
    { title: "Virtual Staging", slug: "virtual-staging", icon: "fa-couch" },
    { title: "Headshots", slug: "headshots", icon: "fa-user" },
    { title: "Branding Session", slug: "branding-session", icon: "fa-star" },
    {
      title: "Viral Video Editing",
      slug: "viral-video-editing",
      icon: "fa-fire",
    },
    {
      title: "Social Media Management",
      slug: "social-media-management",
      icon: "fa-chart-line",
    },
  ];

  const socialFollowLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/timexmedia.co?igsh=MXE2bjh3bDMzN3VvYQ==",
      icon: FaInstagram,
      hoverColor: "hover:text-pink-500",
      bgHover: "group-hover:border-pink-500",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/15tRLbGLS9/",
      icon: FaFacebookF,
      hoverColor: "hover:text-blue-600",
      bgHover: "group-hover:border-blue-600",
    },
    {
      name: "Twitter",
      url: "https://x.com/timexsolution?s=21",
      icon: FaXTwitter,
      hoverColor: "hover:text-blue-400",
      bgHover: "group-hover:border-blue-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nafeesxcoder",
      icon: FaLinkedinIn,
      hoverColor: "hover:text-blue-700",
      bgHover: "group-hover:border-blue-700",
    },
  ];

  // Simple placeholder without TypeScript error
  const ImagePlaceholder = ({ platform }: { platform: string }) => (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
        {getPlatformIcon(platform)}
      </div>
      <p className="text-gray-500 text-xs">Image coming soon</p>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <FaInstagram className="text-purple-400 text-sm" />
            <span className="text-sm font-medium text-purple-300">
              Real Estate Media
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Latest from Social Media
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-2xl mx-auto">
            Professional real estate media services - photography, video,
            virtual tours & more
          </p>
        </div>

        {/* Services Quick Links */}
        <div
          className={`mb-10 transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {mediaServices.map((service, idx) => (
              <button
                key={idx}
                className="group px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs hover:bg-purple-600/20 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
              >
                <i className={`fas ${service.icon} mr-1 text-[10px]`}></i>
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group transition-all duration-700 delay-${Math.min(index * 100, 500)} ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 h-full">
                {/* Image Section with Placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-800/30 to-gray-800/50">
                  {/* Show image if exists, otherwise show placeholder */}
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder platform={post.platform} />
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                  {/* Service Badge - Top Left */}
                  <div className="absolute top-3 left-3 z-20">
                    <div className="px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm border border-purple-500/30">
                      <span className="text-[10px] font-medium text-purple-400">
                        {post.service}
                      </span>
                    </div>
                  </div>

                  {/* Platform Badge - Top Right */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      {getPlatformIcon(post.platform)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <FaClock className="text-gray-500 text-xs" />
                    <span className="text-gray-500 text-xs">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-1">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <FaHeart className="text-pink-500 text-xs" />
                        <span className="text-gray-400 text-xs">
                          {post.likes}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaComment className="text-blue-500 text-xs" />
                        <span className="text-gray-400 text-xs">
                          {post.comments}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaShare className="text-green-500 text-xs" />
                        <span className="text-gray-400 text-xs">
                          {post.shares}
                        </span>
                      </div>
                    </div>

                    <button className="text-purple-400 text-xs hover:text-purple-300 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less Buttons */}
        {!showAll && posts.length > visiblePosts && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Posts ({posts.length - visiblePosts} more)
                <i className="fas fa-arrow-down text-sm group-hover:translate-y-1 transition-transform"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Show Less
                <i className="fas fa-arrow-up text-sm group-hover:-translate-y-1 transition-transform"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}

        {/* Social Follow Section */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className="text-gray-400 text-sm mb-4">
            Follow me for real estate media updates
          </p>
          <div className="flex justify-center gap-6">
            {socialFollowLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
                aria-label={`Follow on ${social.name}`}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center hover:scale-110 transition-all duration-300 border border-purple-500/30 ${social.bgHover}`}
                >
                  <social.icon
                    className={`text-purple-400 text-xl ${social.hoverColor} transition-colors`}
                  />
                </div>
                <span
                  className={`text-xs text-gray-500 transition-colors ${social.hoverColor}`}
                >
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-100 {
          transition-delay: 0.1s;
        }
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-300 {
          transition-delay: 0.3s;
        }
        .delay-400 {
          transition-delay: 0.4s;
        }
        .delay-500 {
          transition-delay: 0.5s;
        }
        .delay-600 {
          transition-delay: 0.6s;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
