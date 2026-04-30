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
}

export const VIDEOS: VideoData[] = [
  {
    id: "1",
    slug: "ai-videos",
    title: "AI Videos 🤖",
    category: "AI Videos",
    description: "AI-powered virtual staging and automated property walkthroughs",
    longDescription: "Transform your real estate marketing with cutting-edge AI video technology. Our AI-powered videos create stunning virtual staging and automated property walkthroughs that captivate buyers and save you time and money.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
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
    ]
  },
  {
    id: "2",
    slug: "walkthrough-videos",
    title: "Walkthrough Videos 🎥",
    category: "Walkthrough Videos",
    description: "Smooth cinematic property tours that showcase every room",
    longDescription: "Cinematic walkthrough videos give buyers an immersive experience of your property. Our stabilized, professionally edited tours highlight every room and create an emotional connection with potential buyers.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
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
    ]
  },
  {
    id: "3",
    slug: "photo-gallery",
    title: "Photo Gallery 📸",
    category: "Photo Gallery",
    description: "Professional HDR and flambient photography",
    longDescription: "Professional photography is the foundation of great real estate marketing. We use advanced HDR and flambient techniques to capture every room with perfect exposure, natural colors, and inviting ambiance.",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2073&auto=format&fit=crop",
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
    ]
  },
  {
    id: "4",
    slug: "talking-head-videos",
    title: "Talking Head Videos 🗣️",
    category: "Talking Head Videos",
    description: "Agent introduction videos and client testimonials",
    longDescription: "Build trust and connect with potential clients through professional talking head videos. Perfect for agent introductions, market updates, and powerful client testimonials that drive conversions.",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
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
    ]
  },
  {
    id: "5",
    slug: "business-videos",
    title: "Business Videos 🏢",
    category: "Business Videos",
    description: "Brand stories, corporate culture reels, and commercial promos",
    longDescription: "Elevate your brand with professional business videos that tell your story. From company culture reels to commercial promos, we create content that impresses clients and attracts top talent.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
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
    ]
  }
];

// सभी वीडियोज
export const ALL_VIDEOS = VIDEOS;

// फीचर्ड वीडियोज (होम पेज के लिए - पहली 3)
export const FEATURED_VIDEOS = VIDEOS.slice(0, 3);

// स्लग के हिसाब से वीडियो ढूंढने के लिए
export function getVideoBySlug(slug: string): VideoData | undefined {
  return VIDEOS.find((v) => v.slug === slug);
}