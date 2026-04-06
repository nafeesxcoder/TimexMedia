import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimateOnView from "../../components/AnimateOnView";
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "../../lib/services";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service - Timex Media" };
  return {
    title: `${service.title} - Timex Media`,
    description: service.shortDescription,
  };
}

function VideoEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="w-full min-w-0 overflow-hidden rounded-xl border border-white/20 bg-black/20 shadow-lg">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] text-gray-100">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] sm:min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimateOnView animation="fade-in-up" rootMargin="0px" threshold={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {service.title}
            </h1>
          </AnimateOnView>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-3xl mx-auto w-full min-w-0">
          <AnimateOnView animation="fade-in-up">
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              {service.intro}
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Video(s) */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-4xl mx-auto w-full min-w-0 space-y-8">
          <AnimateOnView animation="fade-in-up" className="w-full">
            <VideoEmbed id={service.videoId} title={service.title} />
          </AnimateOnView>
          {service.videoId2 && (
            <AnimateOnView animation="fade-in-up" className="w-full">
              <VideoEmbed id={service.videoId2} title={`${service.title} (2)`} />
            </AnimateOnView>
          )}
        </div>
      </section>

      {/* Content blocks */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-3xl mx-auto w-full min-w-0 space-y-8">
          {service.contentBlocks.map((block, i) => (
            <AnimateOnView key={i} animation="fade-in-up" delay={`${0.1 * i}s`}>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {block.heading}
              </h2>
              <p className="text-gray-300 leading-relaxed">{block.body}</p>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* Highlights + CTA */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-white/10">
        <div className="max-w-3xl mx-auto w-full min-w-0">
          <AnimateOnView animation="fade-in-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              What you get
            </h2>
            <ul className="space-y-3 mb-8">
              {service.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {service.ctaLine && (
              <p className="text-white font-medium mb-4">{service.ctaLine}</p>
            )}
            <Link
              href="#"
              className="inline-flex items-center justify-center min-h-[48px] min-w-[140px] px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold text-base sm:text-lg rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Get started
            </Link>
          </AnimateOnView>
        </div>
      </section>

      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/services"
            className="text-white font-medium hover:underline text-sm sm:text-base"
          >
            ← All services
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
