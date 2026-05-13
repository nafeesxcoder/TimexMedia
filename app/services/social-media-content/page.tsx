import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ServiceDetailClient from "@/app/components/ServiceDetailClient";
import { getServiceBySlug } from "@/app/lib/services";

export const metadata = {
  title: "Social Media Content | Timex Media",
  description:
    "Scroll-stopping reels, stories, and feeds for real estate agents. Grow your following with engaging content.",
};

export default function SocialMediaContentPage() {
  const service = getServiceBySlug("social-media-content")!;

  return (
    <>
      <Header />
      <ServiceDetailClient service={service} />
      <Footer />
    </>
  );
}
