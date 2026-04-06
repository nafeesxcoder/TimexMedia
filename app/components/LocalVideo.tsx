"use client";

type Aspect = "vertical" | "horizontal";

interface LocalVideoProps {
  /** Path under /vedio/ e.g. "videoForHome/1.mp4" */
  src: string;
  title: string;
  aspect?: Aspect;
  /** Optional poster path under /vedio/ e.g. "thumbnails/videoForHome/1-poster.jpg" */
  poster?: string;
  className?: string;
}

export default function LocalVideo({
  src,
  title,
  aspect = "vertical",
  poster,
  className = "",
}: LocalVideoProps) {
  const videoSrc = src.startsWith("/") ? src : `/vedio/${src}`;
  const posterSrc = poster
    ? poster.startsWith("/")
      ? poster
      : `/vedio/${poster}`
    : undefined;

  return (
    <div
      className={`w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/20 bg-black/20 shadow-lg ${className}`}
    >
      <div
        className={
          aspect === "vertical"
            ? "aspect-[9/16] w-full max-w-[min(320px,100%)] mx-auto bg-black/30"
            : "aspect-video w-full bg-black/30"
        }
      >
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          title={title}
          controls
          playsInline
          preload="metadata"
          poster={posterSrc}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
