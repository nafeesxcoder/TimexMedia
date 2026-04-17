"use client";

import AnimateOnView from "../components/AnimateOnView";

const comparisonData = [
  {
    feature: "Professional Photos",
    essential: "25",
    professional: "40",
    enterprise: "75+",
  },
  {
    feature: "Photo Quality",
    essential: "HD",
    professional: "4K",
    enterprise: "4K HDR",
  },
  {
    feature: "Video Tour",
    essential: "—",
    professional: "60 sec",
    enterprise: "120 sec",
  },
  {
    feature: "Video Quality",
    essential: "—",
    professional: "4K",
    enterprise: "4K Cinematic",
  },
  {
    feature: "Aerial Drone",
    essential: "—",
    professional: "5 photos",
    enterprise: "Video + 15 photos",
  },
  {
    feature: "3D Virtual Tour",
    essential: "—",
    professional: "—",
    enterprise: "Matterport",
  },
  {
    feature: "Virtual Staging",
    essential: "—",
    professional: "2 rooms",
    enterprise: "6 rooms",
  },
  {
    feature: "Floor Plan",
    essential: "—",
    professional: "2D",
    enterprise: "3D Interactive",
  },
  {
    feature: "Social Media Reels",
    essential: "—",
    professional: "2",
    enterprise: "4",
  },
  {
    feature: "Turnaround Time",
    essential: "48 hrs",
    professional: "24 hrs",
    enterprise: "12 hrs",
  },
  {
    feature: "Priority Support",
    essential: "—",
    professional: "✓",
    enterprise: "✓",
  },
  {
    feature: "Dedicated Manager",
    essential: "—",
    professional: "—",
    enterprise: "✓",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <AnimateOnView animation="fade-in-down" className="text-center mb-10">
          <p className="text-brand-400 text-sm sm:text-base font-medium uppercase tracking-wide">
            Compare Packages
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
            Find the perfect <span className="text-brand">fit</span>
          </h2>
        </AnimateOnView>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-gray-400 font-medium">
                  Features
                </th>
                <th className="text-center py-4 px-4 text-white font-semibold bg-white/5 rounded-t-xl">
                  Essential
                </th>
                <th className="text-center py-4 px-4 text-brand font-semibold bg-gradient-to-b from-brand/10 to-transparent border-x border-brand/20">
                  Professional
                  <span className="block text-xs text-brand-400">
                    ⭐ Most Popular
                  </span>
                </th>
                <th className="text-center py-4 px-4 text-white font-semibold bg-white/5 rounded-t-xl">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr
                  key={row.feature}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-3 px-4 text-gray-300 text-sm font-medium">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-400 text-sm">
                    {row.essential}
                  </td>
                  <td className="py-3 px-4 text-center text-white text-sm bg-brand/5">
                    {row.professional}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-400 text-sm">
                    {row.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            * All packages include professional editing, online gallery, and
            digital delivery
          </p>
        </div>
      </div>
    </section>
  );
}
