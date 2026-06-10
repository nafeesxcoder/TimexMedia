import type { Metadata, Viewport } from "next";
import "./globals.css";
import Preloader from "./components/Preloader";
import ClientChatBot from "./components/ClientChatBot";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

// Base URL - replace with your actual domain
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://timexmedia.com";
const defaultImage = `${baseUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    template: "%s | Timex Media - Real Estate Photography & Marketing",
    default: "Timex Media - Real Estate Photography, Video & Drone Services",
    absolute: "Timex Media - Premier Real Estate Creative Agency",
  },
  description:
    "Premier full-service creative agency specializing in real estate photography, videography, aerial drone services, 3D virtual tours, and comprehensive marketing solutions. Serving agents, brokers, and property developers.",

  keywords: [
    "real estate photography",
    "real estate videography",
    "drone photography",
    "aerial real estate",
    "3D virtual tours",
    "real estate marketing",
    "property photography",
    "listing photography",
    "commercial real estate photography",
    "real estate content creation",
  ],

  authors: [{ name: "Timex Media", url: baseUrl }],
  creator: "Timex Media",
  publisher: "Timex Media",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    title: "Timex Media - Premier Real Estate Photography & Marketing",
    description:
      "Professional real estate photography, videography, drone services, and 3D virtual tours. Elevate your property listings with stunning visual content.",
    url: baseUrl,
    siteName: "Timex Media",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Timex Media - Real Estate Photography & Marketing",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["team@timexsolutioninc.com"],
    phoneNumbers: ["+1 (559) 505-3443"],
  },

  twitter: {
    card: "summary_large_image",
    site: "@timexmedia",
    creator: "@timexmedia",
    title: "Timex Media - Real Estate Photography, Video & Marketing",
    description:
      "Premier full-service creative agency for real estate photography, videography, drone services, and 3D virtual tours.",
    images: [defaultImage],
  },

  category: "real-estate-photography",

  verification: {
    google: "your-google-site-verification-code",
  },

  appleWebApp: {
    title: "Timex Media",
    statusBarStyle: "black-translucent",
    capable: true,
  },

  manifest: "/manifest.json",

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="canonical" href={baseUrl} />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Favicon Icons - Direct from public folder */}
        <link rel="icon" href="/icon-72x72.png" sizes="72x72" type="image/png" />
        <link rel="icon" href="/icon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/icon-128x128.png" sizes="128x128" type="image/png" />
        <link rel="icon" href="/icon-144x144.png" sizes="144x144" type="image/png" />
        <link rel="icon" href="/icon-152x152.png" sizes="152x152" type="image/png" />
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-384x384.png" sizes="384x384" type="image/png" />
        <link rel="icon" href="/icon-512x512.png" sizes="512x512" type="image/png" />
        
        {/* Shortcut icon */}
        <link rel="shortcut icon" href="/icon-192x192.png" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/icon-152x152.png" />

        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Timex Media",
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              image: defaultImage,
              description:
                "Premier full-service creative agency specializing in real estate photography, videography, aerial drone services, 3D virtual tours, and comprehensive marketing solutions.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3661 West Shield Ave",
                addressLocality: "Fresno",
                addressRegion: "CA",
                postalCode: "93722",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "36.7392",
                longitude: "-119.8048",
              },
              telephone: "+1 (559) 505-3443",
              email: "team@timexsolutioninc.com",
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [
                "https://www.instagram.com/timexmedia",
                "https://www.facebook.com/timexmedia",
                "https://www.linkedin.com/company/timexmedia",
                "https://www.youtube.com/timexmedia",
                "https://twitter.com/timexmedia",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Real Estate Media Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Real Estate Photography",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Real Estate Videography",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Drone Photography",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "3D Virtual Tours",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              parentOrganization: {
                "@type": "Organization",
                name: "Timex Media",
              },
              name: "Timex Media",
              image: defaultImage,
              telephone: "+1 (559) 505-3443",
              email: "team@timexsolutioninc.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3661 West Shield Ave",
                addressLocality: "Fresno",
                addressRegion: "CA",
                postalCode: "93722",
                addressCountry: "US",
              },
              priceRange: "$$",
              areaServed: "Austin, Round Rock, Cedar Park",
              availableLanguage: ["English"],
            }),
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden min-h-screen bg-black">
        <Preloader minLoadTime={2500}>
          {children}
        </Preloader>
        <ClientChatBot />
        <WhatsAppFloat />
      </body>
    </html>
  );
}