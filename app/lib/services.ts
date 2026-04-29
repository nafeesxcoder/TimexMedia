export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  /** YouTube embed ID (e.g. "aqz-KE-bpKQ") for main video */
  videoId: string;
  /** Optional second video embed ID */
  videoId2?: string;
  /** Unique intro paragraph */
  intro: string;
  /** 2-4 unique content blocks (headline + body) */
  contentBlocks: { heading: string; body: string }[];
  /** Bullet list of benefits or highlights */
  highlights: string[];
  /** CTA line above button */
  ctaLine?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "ai-videos",
    title: "AI Videos 🤖",
    shortDescription: "AI-powered virtual staging and automated property walkthroughs that save time and money while delivering stunning results.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    videoId: "dQw4w9WgXcQ",
    intro: "Transform your real estate marketing with cutting-edge AI video technology. Our AI-powered videos create stunning virtual staging and automated property walkthroughs that captivate buyers and save you time.",
    contentBlocks: [
      {
        heading: "AI-Powered Virtual Staging",
        body: "Empty rooms come to life with realistic AI-generated furniture and decor. Choose from multiple design styles that match your property's aesthetic and target buyer.",
      },
      {
        heading: "Automated Walkthroughs",
        body: "Create smooth, professional property tours automatically. Our AI technology analyzes floor plans and creates natural camera movements that highlight every key feature.",
      },
    ],
    highlights: [
      "Cost-effective virtual staging",
      "Fast turnaround (24 hours)",
      "Multiple design styles available",
      "4K video output",
    ],
    ctaLine: "Ready to revolutionize your property marketing with AI?",
  },
  {
    slug: "walkthrough-video",
    title: "Walkthrough Video 🎥",
    shortDescription: "Smooth cinematic property tours that showcase every room and highlight your property's best features.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    videoId: "ScMzIvxBSi4",
    intro: "Cinematic walkthrough videos give buyers an immersive experience of your property. Our stabilized, professionally edited tours highlight every room and create an emotional connection with potential buyers.",
    contentBlocks: [
      {
        heading: "Smooth Cinematic Movement",
        body: "Using professional gimbals and stabilization equipment, we create buttery-smooth walkthroughs that feel professional and engaging.",
      },
      {
        heading: "Strategic Room Sequencing",
        body: "We plan the perfect flow through your property, showcasing rooms in an order that tells a compelling story and highlights the best features first.",
      },
    ],
    highlights: [
      "4K cinematic quality",
      "Professional gimbal stabilization",
      "Custom music selection",
      "24-48 hour turnaround",
    ],
    ctaLine: "Give your listings the cinematic treatment they deserve.",
  },
  {
    slug: "photos",
    title: "Photos 📸",
    shortDescription: "Professional HDR and flambient photography that makes listings stand out and attract more buyers.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2073&auto=format&fit=crop",
    videoId: "aqz-KE-bpKQ",
    intro: "Professional photography is the foundation of great real estate marketing. We use advanced HDR and flambient techniques to capture every room with perfect exposure, natural colors, and inviting ambiance.",
    contentBlocks: [
      {
        heading: "HDR & Flambient Techniques",
        body: "We combine multiple exposures and flash techniques to balance window light, eliminate harsh shadows, and create naturally bright, inviting spaces.",
      },
      {
        heading: "Professional Editing",
        body: "Every photo is individually edited for consistent color, perspective correction, and that perfect 'magazine-ready' look that attracts premium buyers.",
      },
    ],
    highlights: [
      "HDR and flambient options",
      "Twilight photography available",
      "MLS-ready deliverables",
      "24-48 hour delivery",
    ],
    ctaLine: "Showcase your listings in the best light possible.",
  },
  {
    slug: "talking-head-videos",
    title: "Talking Head Videos 🗣️",
    shortDescription: "Agent introduction videos and client testimonials that build trust and personal connection.",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
    videoId: "aqz-KE-bpKQ",
    intro: "Build trust and connect with potential clients through professional talking head videos. Perfect for agent introductions, market updates, and powerful client testimonials that drive conversions.",
    contentBlocks: [
      {
        heading: "Professional Setup",
        body: "We bring professional lighting, cameras, and audio equipment to create polished, broadcast-quality videos that build credibility.",
      },
      {
        heading: "Teleprompter & Script Support",
        body: "Never worry about forgetting your lines. We provide teleprompter assistance and can help refine your script for maximum impact.",
      },
    ],
    highlights: [
      "Professional lighting & audio",
      "Teleprompter included",
      "Multiple background options",
      "Social-optimized deliverables",
    ],
    ctaLine: "Let your personality shine and build trust with clients.",
  },
  {
    slug: "business-videos",
    title: "Business Videos 🏢",
    shortDescription: "Brand stories, corporate culture reels, and commercial promos for your business.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    videoId: "ScMzIvxBSi4",
    intro: "Elevate your brand with professional business videos that tell your story. From company culture reels to commercial promos, we create content that impresses clients and attracts top talent.",
    contentBlocks: [
      {
        heading: "Brand Storytelling",
        body: "We work with you to understand your unique value proposition and craft compelling narratives that resonate with your target audience.",
      },
      {
        heading: "Commercial & Promotional",
        body: "High-impact promotional videos for your services, featuring client testimonials, team introductions, and your best work.",
      },
    ],
    highlights: [
      "Full-scale production available",
      "Drone and aerial options",
      "Client testimonial integration",
      "Website and social optimized",
    ],
    ctaLine: "Tell your brand's story with professional video.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}