"use client";

import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "Michael Chen",
      role: "Founder & Creative Director",
      bio: "10+ years in real estate media, marketing degree, started in major metro markets.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format",
    },
    {
      name: "Sarah Rodriguez",
      role: "Lead Photographer",
      bio: "Award-winning architectural photographer with an eye for luxury details.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format",
    },
    {
      name: "David Kim",
      role: "Drone & Video Specialist",
      bio: "FAA certified drone pilot, cinematic storyteller.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-wider">
            The Faces Behind the Lens
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Meet Our Creative Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Passionate professionals dedicated to making your listings shine
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-brand-500/50 transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-brand-400 text-sm mt-1">{member.role}</p>
                <p className="text-gray-400 text-sm mt-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
