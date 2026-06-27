function Leaf({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute select-none opacity-20 drop-shadow ${className}`}
    >
      <span
        className="block animate-leaf"
        style={{ animationDelay: `${delay}s` }}
      >
        🌿
      </span>
    </span>
  );
}

/** Subtle decorative basil leaves scattered behind a section's content. */
export default function FloatingLeaves() {
  return (
    <>
      <Leaf className="left-[4%] top-[14%] rotate-[18deg] text-3xl" delay={0} />
      <Leaf
        className="right-[7%] top-[10%] -rotate-12 text-4xl"
        delay={1.2}
      />
      <Leaf
        className="left-[14%] bottom-[12%] rotate-[8deg] text-2xl"
        delay={0.6}
      />
      <Leaf
        className="right-[12%] bottom-[16%] -rotate-6 text-3xl"
        delay={1.8}
      />
    </>
  );
}
