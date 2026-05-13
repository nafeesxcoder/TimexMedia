import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ServiceDetailClient from "@/app/components/ServiceDetailClient";
import { getServiceBySlug } from "@/app/lib/services";

export const metadata = {
  title: "Listing Photography | Timex Media",
  description:
    "Professional real estate photography that sells. HDR, wide-angle, and quick turnaround for your listings.",
};

export default function ListingPhotographyPage() {
  const service = getServiceBySlug("listing-photography")!;

  return (
    <>
      <Header />
      <ServiceDetailClient service={service} />
      <Footer />
    </>
  );
}
