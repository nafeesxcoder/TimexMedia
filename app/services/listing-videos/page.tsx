import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ServiceDetailClient from "@/app/components/ServiceDetailClient";
import { getServiceBySlug } from "@/app/lib/services";

export const metadata = {
  title: "Listing Videos | Timex Media",
  description:
    "Cinematic walkthrough and lifestyle videos for real estate listings. 4K, drone, and social media cuts.",
};

export default function ListingVideosPage() {
  const service = getServiceBySlug("listing-videos")!;

  return (
    <>
      <Header />
      <ServiceDetailClient service={service} />
      <Footer />
    </>
  );
}
