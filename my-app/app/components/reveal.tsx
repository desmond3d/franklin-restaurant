"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const HIDDEN_TRANSFORM: Record<Direction, string> = {
  up: "translateY(48px)",
  down: "translateY(-48px)",
  left: "translateX(48px)",
  right: "translateX(-48px)",
};

export default function Reveal({
  children,
  direction = "up",
  duration = 700,
  delay = 0,
  once = false,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  /** Animation length in ms. */
  duration?: number;
  /** Stagger offset in ms. */
  delay?: number;
  /** Animate in once and stay (no slide-out on exit). */
  once?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.unobserve(el);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : HIDDEN_TRANSFORM[direction],
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
