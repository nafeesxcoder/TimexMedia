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
    slug: "listing-photography",
    title: "Listing Photography",
    shortDescription: "Professional real estate photography that sells.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2073&auto=format&fit=crop",
    videoId: "aqz-KE-bpKQ",
    intro:
      "High-impact listing photos are the first thing buyers see. We shoot every angle with the right light and composition so your listings look their best and stand out in search results and on social.",
    contentBlocks: [
      {
        heading: "Interior & exterior coverage",
        body: "We cover every room, key features, and curb appeal so listings feel complete and inviting. Staging-aware angles and consistent editing keep your brand looking premium.",
      },
      {
        heading: "Fast turnaround",
        body: "Get edited, web-ready photos within 24–48 hours so you can list and market without delay. Rush options available for same-day needs.",
      },
    ],
    highlights: [
      "Wide-angle and detail shots for every space",
      "HDR and natural-light balance",
      "Consistent color and exposure across the set",
      "Optimized files for MLS and social",
    ],
    ctaLine: "Ready to list with photos that convert?",
  },
  {
    slug: "listing-videos",
    title: "Listing Videos",
    shortDescription: "Cinematic walkthrough and lifestyle videos for listings.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    videoId: "ScMzIvxBSi4",
    videoId2: "aqz-KE-bpKQ",
    intro:
      "Video tours and lifestyle clips give buyers a real feel for the property. We produce smooth walkthroughs, drone footage, and short hero clips tailored for listing pages, social, and ads.",
    contentBlocks: [
      {
        heading: "Walkthrough & drone",
        body: "Stabilized interior walkthroughs plus aerial shots of the home and neighborhood. We deliver in 2–3 business days, with options for same-day or next-day when needed.",
      },
      {
        heading: "Formats for every platform",
        body: "You get horizontal cuts for listing sites and YouTube, plus vertical edits for Instagram Reels, TikTok, and stories—so one shoot powers all your channels.",
      },
    ],
    highlights: [
      "4K-capable capture and editing",
      "Music and pacing matched to property style",
      "Multiple lengths: 60s, 90s, 2+ min",
      "Caption-ready and platform-optimized",
    ],
    ctaLine: "Give your listings a video edge.",
  },
  {
    slug: "social-media-content",
    title: "Social Media Content",
    shortDescription: "Scroll-stopping reels, stories, and feeds for agents.",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    videoId: "aqz-KE-bpKQ",
    intro:
      "Stand out on Instagram, TikTok, and Facebook with content built for real estate. We create reels, stories, and feed posts that highlight listings, tips, and your personal brand so you stay top of mind.",
    contentBlocks: [
      {
        heading: "Reels & short-form",
        body: "Punchy hooks, quick cuts, and on-brand graphics. We script and edit so each piece feels native to the platform and drives saves and shares.",
      },
      {
        heading: "Stories and feed posts",
        body: "Templates and one-off graphics for listings, open houses, and market updates. Consistent look and voice so your feed feels professional and recognizable.",
      },
    ],
    highlights: [
      "Vertical-first for Reels and Stories",
      "Trend-aware hooks and pacing",
      "Hashtag and caption suggestions",
      "Bulk packages for consistent posting",
    ],
    ctaLine: "Grow your following with content that performs.",
  },
  {
    slug: "3d-virtual-tour",
    title: "3D Virtual Tour",
    shortDescription: "Matterport-style 3D tours buyers can explore from anywhere.",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    videoId: "ScMzIvxBSi4",
    intro:
      "Let buyers walk through the property online with immersive 3D tours. We capture and build Matterport-style experiences so out-of-area buyers and busy clients can explore every room on any device.",
    contentBlocks: [
      {
        heading: "Full-property capture",
        body: "We scan each level and key area so the tour feels complete. High-quality imagery and smooth navigation make it easy to understand the floor plan and flow.",
      },
      {
        heading: "Embed and share",
        body: "Tours embed seamlessly on listing sites, your website, and social. You get a link and embed code so you can drop it anywhere and track engagement.",
      },
    ],
    highlights: [
      "Matterport-compatible workflow",
      "Floor plan and measurement options",
      "Mobile and desktop friendly",
      "Next-day delivery available",
    ],
    ctaLine: "Turn every listing into an immersive experience.",
  },
  {
    slug: "2d-floor-plans",
    title: "2D Floor Plans",
    shortDescription: "Clean, accurate floor plans for listings and marketing.",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2076&auto=format&fit=crop",
    videoId: "aqz-KE-bpKQ",
    intro:
      "Clear floor plans help buyers visualize layout and square footage. We deliver accurate 2D plans with room labels and dimensions, styled for MLS, brochures, and digital marketing.",
    contentBlocks: [
      {
        heading: "Accuracy and clarity",
        body: "Plans are drawn from measurements and photos so dimensions and room relationships are correct. Clean lines and readable labels work in print and on screen.",
      },
      {
        heading: "Multiple formats",
        body: "You receive high-res PDFs and image files suitable for listing uploads, flyers, and social. Optional branding and color styling to match your materials.",
      },
    ],
    highlights: [
      "Room dimensions and square footage",
      "MLS-ready and print-ready files",
      "Fast turnaround (24–48 hours)",
      "Optional 3D tour integration",
    ],
    ctaLine: "Give every listing a professional floor plan.",
  },
  {
    slug: "virtual-staging",
    title: "Virtual Staging",
    shortDescription: "Digitally furnished rooms to showcase potential.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    videoId: "ScMzIvxBSi4",
    intro:
      "Empty or under-furnished rooms can feel cold online. We add realistic furniture and decor so buyers see the potential of each space without a single piece of physical staging.",
    contentBlocks: [
      {
        heading: "Realistic style options",
        body: "Choose from modern, traditional, minimalist, and more. We match furniture and decor to the room and the target buyer so the result feels natural and aspirational.",
      },
      {
        heading: "Same-day options",
        body: "Need a few key rooms fast? We offer same-day and next-day virtual staging so you can list with fully staged photos on your timeline.",
      },
    ],
    highlights: [
      "High-resolution, print-quality output",
      "Multiple style options per room",
      "Before/after comparisons for marketing",
      "Consistent lighting and perspective",
    ],
    ctaLine: "Show every room at its best.",
  },
  {
    slug: "headshots",
    title: "Headshots",
    shortDescription: "Professional headshots for agents and teams.",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
    videoId: "aqz-KE-bpKQ",
    intro:
      "Your face is your brand. We shoot headshots that look sharp on business cards, websites, and social—so you present a consistent, professional image everywhere you show up.",
    contentBlocks: [
      {
        heading: "In-studio or on location",
        body: "We offer clean studio setups or outdoor/location shots so your headshots match your brand. Multiple looks and backgrounds in one session so you have options for years.",
      },
      {
        heading: "Retouching and delivery",
        body: "Light retouching keeps you looking like you at your best. You get a set of final files in multiple crops (square, portrait) ready for web, print, and social.",
      },
    ],
    highlights: [
      "Multiple outfits and backgrounds",
      "Web and print resolution",
      "Quick turnaround (24–48 hours)",
      "Team and group packages",
    ],
    ctaLine: "Put your best face forward.",
  },
  {
    slug: "branding-session",
    title: "Branding Session",
    shortDescription: "Photo and video content for your personal brand.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    videoId: "ScMzIvxBSi4",
    videoId2: "aqz-KE-bpKQ",
    intro:
      "Build a library of on-brand photos and short videos for your website, social, and ads. We plan shots around your style and message so you have a go-to set of assets that feel authentically you.",
    contentBlocks: [
      {
        heading: "Lifestyle and professional mix",
        body: "We capture you at the office, with clients, at listings, and in lifestyle settings. You get a mix of hero images, candid moments, and B-roll for reels and ads.",
      },
      {
        heading: "Video for social and ads",
        body: "Short talking-head and lifestyle clips for intros, tips, and testimonials. We edit for Reels, Stories, and paid social so you can run campaigns without a separate production.",
      },
    ],
    highlights: [
      "Half-day and full-day sessions",
      "Outfit changes and locations",
      "Photo + video packages",
      "Usage rights for marketing",
    ],
    ctaLine: "Invest in a brand that stands out.",
  },
  {
    slug: "viral-video-editing",
    title: "Viral Video Editing",
    shortDescription: "Short-form edits designed to trend and convert.",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    videoId: "aqz-KE-bpKQ",
    videoId2: "ScMzIvxBSi4",
    intro:
      "Raw footage becomes scroll-stopping reels when the edit is right. We cut for hooks, pacing, and platform trends so your real estate content has a real shot at going viral and driving leads.",
    contentBlocks: [
      {
        heading: "Hook-first editing",
        body: "We structure every clip so the first 1–3 seconds grab attention. Text overlays, captions, and music are tuned to the platform so the algorithm and viewers both engage.",
      },
      {
        heading: "Bulk and subscription options",
        body: "Send us clips regularly and we turn them into a steady stream of reels and shorts. Perfect for agents who shoot on their phone but want a pro finish.",
      },
    ],
    highlights: [
      "Vertical and horizontal cuts",
      "Trend-aligned music and captions",
      "Fast turnaround (24–48 hours)",
      "Unlimited revisions on select plans",
    ],
    ctaLine: "Turn your footage into content that performs.",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    shortDescription: "Ongoing strategy, posting, and engagement for real estate.",
    heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop",
    videoId: "aqz-KE-bpKQ",
    intro:
      "Stay visible without spending your day on social. We handle content planning, posting, and engagement so your feeds stay active and on-brand while you focus on listings and clients.",
    contentBlocks: [
      {
        heading: "Content calendar and posting",
        body: "We plan a mix of listings, tips, market updates, and personal brand content. Posts go out on schedule across your chosen platforms with captions and hashtags included.",
      },
      {
        heading: "Engagement and growth",
        body: "We monitor DMs and comments, suggest responses, and track what’s working so we can double down on content that drives followers and leads.",
      },
    ],
    highlights: [
      "Instagram, Facebook, TikTok, LinkedIn",
      "Custom content + curated posts",
      "Monthly reports and strategy calls",
      "Flexible packages by platform",
    ],
    ctaLine: "Let us run your social so you can run your business.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
