"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationName =
  | "fade-in-up"
  | "fade-in-down"
  | "fade-in-left"
  | "fade-in-right"
  | "scale-in"
  | "slide-in-top"
  | "blur-in"
  | "float-in"
  | "pop-in";

interface AnimateOnViewProps {
  children: ReactNode;
  animation: AnimationName;
  delay?: string;
  className?: string;
  /** Root margin for Intersection Observer (e.g. "0px 0px -50px 0px" to trigger when 50px from bottom) */
  rootMargin?: string;
  /** Threshold 0–1, fraction of element visibility to trigger */
  threshold?: number;
}

const animationClass: Record<AnimationName, string> = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in-down": "animate-fade-in-down",
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
  "scale-in": "animate-scale-in",
  "slide-in-top": "animate-slide-in-top",
  "blur-in": "animate-blur-in",
  "float-in": "animate-float-in",
  "pop-in": "animate-pop-in",
};

export default function AnimateOnView({
  children,
  animation,
  delay,
  className = "",
  rootMargin = "0px 0px -40px 0px",
  threshold = 0.1,
}: AnimateOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const animateClass = animationClass[animation];
  const baseClass = inView ? animateClass : "opacity-0";
  const style = inView && delay ? { animationDelay: delay } : undefined;

  return (
    <div
      ref={ref}
      className={`${baseClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
