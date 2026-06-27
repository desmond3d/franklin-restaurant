import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/reveal";
import FloatingLeaves from "../components/floating-leaves";

export const metadata: Metadata = {
  title: "About · Franklin",
  description:
    "The story behind Franklin — fresh shawarma, burgers and smoky jollof, made for students and locals in Warri. Generous portions, fair prices, order on WhatsApp.",
};

const STATS = [
  { value: "10,000+", label: "Plates served" },
  { value: "4.9★", label: "Average rating" },
  { value: "8", label: "Menu categories" },
  { value: "100%", label: "Made fresh daily" },
];

const VALUES = [
  {
    emoji: "🔥",
    title: "Made Fresh",
    desc: "Every order is cooked to order — shawarma off the grill, jollof with that smoky party flavour. Nothing sits around.",
  },
  {
    emoji: "💛",
    title: "Fair Prices",
    desc: "Generous portions that respect a student budget. Real, filling meals from as little as ₦700.",
  },
  {
    emoji: "⚡",
    title: "Fast & Easy",
    desc: "Build your order, send it on WhatsApp, and it's ready by the time you arrive. No app, no queue, no stress.",
  },
  {
    emoji: "🤝",
    title: "Part of the Community",
    desc: "Proudly serving Warri from our spot behind Ugbromo market — a neighbourhood favourite, one plate at a time.",
  },
];

const WHATSAPP_NUMBER = "2349090267533";

export default function AboutPage() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* ---------- Intro ---------- */}
      <section className="relative overflow-hidden">
        <FloatingLeaves />
        <div className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-amber-600/15 blur-[120px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <Reveal direction="up">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500">
                Our Story
              </p>
              <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Good food, made for our community.
              </h1>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400">
                Franklin started with a simple idea: students and locals deserve
                food that&apos;s tasty, filling, and affordable — without the
                wait. What began as a small spot behind Ugbromo market in Warri
                has grown into a neighbourhood favourite, one shawarma, burger,
                and plate of smoky jollof at a time.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="rounded-full bg-linear-to-r from-amber-600 to-amber-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-amber-600/30 transition hover:from-amber-500 hover:to-amber-400"
                >
                  View Menu
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-white/5"
                >
                  Visit Us
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
                alt="Friends sharing a meal at Franklin"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 28rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Stats band ---------- */}
      <section className="border-y border-white/10 bg-neutral-900">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} direction="up" delay={i * 90}>
              <div className="text-center">
                <p className="font-display text-3xl text-amber-400 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-neutral-400">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="relative overflow-hidden">
        <FloatingLeaves />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal direction="up">
          <header className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500">
              What We Stand For
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              The Franklin Promise
            </h2>
          </header>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} direction="up" delay={i * 90} className="h-full">
              <div className="group h-full rounded-3xl border border-white/10 bg-neutral-900/60 p-7 transition hover:border-amber-500/40 hover:bg-neutral-900">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-600/15 text-2xl ring-1 ring-amber-500/20 transition group-hover:scale-110">
                  {value.emoji}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {value.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden border-t border-white/10">
        <FloatingLeaves />
        <Reveal direction="up">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Hungry already?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-neutral-400">
              Browse the full menu and send your order straight to our kitchen on
              WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/menu"
                className="rounded-full bg-linear-to-r from-amber-600 to-amber-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-amber-600/30 transition hover:from-amber-500 hover:to-amber-400"
              >
                Order Now
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi Franklin! 👋 I'd like to place an order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#1ebe5b]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
