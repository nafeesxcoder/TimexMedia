export interface VideoData {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  highlights: string[];
  stats: { label: string; value: string }[];
  whyChoose?: string[];
  process?: { step: string; title: string; desc: string }[];
  gallery?: { id: number; title: string; duration?: string; category?: string; thumbnail?: string }[];
}

export const VIDEOS: VideoData[] = [
  {
    id: "1",
    slug: "ai-videos",
    title: "AI Videos 🤖",
    category: "AI Videos",
    description: "AI-powered virtual staging and automated property walkthroughs",
    longDescription: "Transform your real estate marketing with cutting-edge AI video technology. Our AI-powered videos create stunning virtual staging and automated property walkthroughs that captivate buyers and save you time and money.",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:30",
    highlights: [
      "AI-powered virtual staging",
      "Automated property walkthroughs",
      "Cost-effective solution",
      "24-hour turnaround time",
      "Multiple design styles available",
      "4K video output"
    ],
    stats: [
      { label: "Projects", value: "150+" },
      { label: "Happy Clients", value: "98%" },
      { label: "Avg Turnaround", value: "24hrs" }
    ],
    whyChoose: [
      "Save up to 80% compared to traditional staging",
      "Get results in hours, not days",
      "Choose from 10+ design styles",
      "No physical furniture needed"
    ],
    process: [
      { step: "01", title: "Upload Photos", desc: "Send us photos of your empty rooms" },
      { step: "02", title: "AI Processing", desc: "Our AI adds realistic furniture" },
      { step: "03", title: "Review & Approve", desc: "Get your stunning virtual staging" }
    ],
    gallery: [
      { id: 1, title: "Virtual Staging Demo", duration: "1:45" },
      { id: 2, title: "AI Property Walkthrough", duration: "2:30" },
      { id: 3, title: "Before & After AI", duration: "1:20" }
    ]
  },
  {
    id: "2",
    slug: "walkthrough-videos",
    title: "Walkthrough Videos 🎥",
    category: "Walkthrough Videos",
    description: "Smooth cinematic property tours that showcase every room",
    longDescription: "Cinematic walkthrough videos give buyers an immersive experience of your property. Our stabilized, professionally edited tours highlight every room and create an emotional connection with potential buyers.",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    duration: "3:15",
    highlights: [
      "4K cinematic quality",
      "Professional gimbal stabilization",
      "Custom music selection",
      "24-48 hour turnaround",
      "Multiple length options",
      "Vertical and horizontal formats"
    ],
    stats: [
      { label: "Properties", value: "300+" },
      { label: "Avg Views", value: "5K+" },
      { label: "Satisfaction", value: "99%" }
    ],
    whyChoose: [
      "Professional equipment and techniques",
      "Engaging storytelling approach",
      "Optimized for all platforms",
      "Music tailored to your property"
    ],
    process: [
      { step: "01", title: "Schedule Shoot", desc: "Book a convenient time" },
      { step: "02", title: "Professional Capture", desc: "We film your property" },
      { step: "03", title: "Expert Editing", desc: "Cinematic post-production" }
    ],
    gallery: [
      { id: 1, title: "Luxury Villa Tour", duration: "3:30" },
      { id: 2, title: "Modern Apartment", duration: "2:15" },
      { id: 3, title: "Beachfront Property", duration: "4:00" }
    ]
  },
  {
    id: "3",
    slug: "photo-gallery",
    title: "Photo Gallery 📸",
    category: "Photo Gallery",
    description: "Professional HDR and flambient photography",
    longDescription: "Professional photography is the foundation of great real estate marketing. We use advanced HDR and flambient techniques to capture every room with perfect exposure, natural colors, and inviting ambiance.",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    duration: "1:45",
    highlights: [
      "HDR and flambient options",
      "Twilight photography available",
      "Drone aerial photography",
      "MLS-ready deliverables",
      "24-48 hour delivery",
      "High-resolution files"
    ],
    stats: [
      { label: "Photos Taken", value: "10K+" },
      { label: "Properties", value: "500+" },
      { label: "5-Star Ratings", value: "98%" }
    ],
    whyChoose: [
      "Perfect exposure in every shot",
      "Magazine-ready quality",
      "Fast turnaround times",
      "MLS optimized files"
    ],
    process: [
      { step: "01", title: "Book Session", desc: "Schedule your photoshoot" },
      { step: "02", title: "Professional Shoot", desc: "We capture every angle" },
      { step: "03", title: "Expert Editing", desc: "Premium photo enhancement" }
    ],
    gallery: [
      { id: 1, title: "Living Room HDR", category: "Interior" },
      { id: 2, title: "Kitchen Flambient", category: "Interior" },
      { id: 3, title: "Exterior Twilight", category: "Exterior" },
      { id: 4, title: "Master Bedroom", category: "Interior" },
      { id: 5, title: "Drone Aerial", category: "Aerial" },
      { id: 6, title: "Bathroom Detail", category: "Detail" }
    ]
  },
  {
    id: "4",
    slug: "talking-head-videos",
    title: "Talking Head Videos 🗣️",
    category: "Talking Head Videos",
    description: "Agent introduction videos and client testimonials",
    longDescription: "Build trust and connect with potential clients through professional talking head videos. Perfect for agent introductions, market updates, and powerful client testimonials that drive conversions.",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    duration: "2:00",
    highlights: [
      "Professional 3-point lighting",
      "Broadcast-quality cameras",
      "Professional lapel microphones",
      "Teleprompter included",
      "Script writing assistance",
      "Multiple background options"
    ],
    stats: [
      { label: "Agents", value: "200+" },
      { label: "Conversion Rate", value: "+40%" },
      { label: "Satisfaction", value: "100%" }
    ],
    whyChoose: [
      "Build trust with clients",
      "Professional studio quality",
      "Script support included",
      "Social media optimized"
    ],
    process: [
      { step: "01", title: "Plan Script", desc: "We help write your message" },
      { step: "02", title: "Studio Shoot", desc: "Professional recording" },
      { step: "03", title: "Edit & Deliver", desc: "Polished final video" }
    ],
    gallery: [
      { id: 1, title: "Agent Introduction", duration: "1:30" },
      { id: 2, title: "Client Testimonial", duration: "2:00" },
      { id: 3, title: "Market Update", duration: "3:15" }
    ]
  },
  {
    id: "5",
    slug: "business-videos",
    title: "Business Videos 🏢",
    category: "Business Videos",
    description: "Brand stories, corporate culture reels, and commercial promos",
    longDescription: "Elevate your brand with professional business videos that tell your story. From company culture reels to commercial promos, we create content that impresses clients and attracts top talent.",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    duration: "2:45",
    highlights: [
      "Full-scale production available",
      "Drone and aerial options",
      "Client testimonial integration",
      "Website and social optimized",
      "Professional crew and equipment",
      "Script and storyboard included"
    ],
    stats: [
      { label: "Businesses", value: "100+" },
      { label: "Avg ROI", value: "300%" },
      { label: "Repeat Clients", value: "85%" }
    ],
    whyChoose: [
      "Professional brand storytelling",
      "High production value",
      "Multi-platform optimization",
      "Measurable ROI"
    ],
    process: [
      { step: "01", title: "Discovery Call", desc: "Understand your brand" },
      { step: "02", title: "Production", desc: "Professional filming" },
      { step: "03", title: "Post-Production", desc: "Expert editing" }
    ],
    gallery: [
      { id: 1, title: "Brand Story", duration: "3:00" },
      { id: 2, title: "Corporate Culture", duration: "2:30" },
      { id: 3, title: "Client Testimonial", duration: "1:45" }
    ]
  }
];


export const ALL_VIDEOS = VIDEOS;


export const FEATURED_VIDEOS = VIDEOS; // 

export function getVideoBySlug(slug: string): VideoData | undefined {
  return VIDEOS.find((v) => v.slug === slug);
}


export function getAllVideoSlugs(): string[] {
  return VIDEOS.map((v) => v.slug);
}