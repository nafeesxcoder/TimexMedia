import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ServiceDetailClient from "@/app/components/ServiceDetailClient";
import { getServiceBySlug } from "@/app/lib/services";

export const metadata = {
  title: "3D Virtual Tour | Timex Media",
  description:
    "Matterport-style 3D tours for real estate. Let buyers explore properties from anywhere.",
};

export default function ThreeDVirtualTourPage() {
  const service = getServiceBySlug("3d-virtual-tour")!;

  return (
    <>
      <Header />
      <ServiceDetailClient service={service} />
      <Footer />
    </>
  );
}
