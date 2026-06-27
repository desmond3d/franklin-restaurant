import Reveal from "./reveal";

type Perk = {
  emoji: string;
  title: string;
  desc: string;
};

const PERKS: Perk[] = [
  {
    emoji: "💸",
    title: "Student-Friendly Prices",
    desc: "Real meals that fit a student budget — from ₦700 portions to loaded jumbo packages.",
  },
  {
    emoji: "🍗",
    title: "Big, Filling Portions",
    desc: "No tiny plates here. Every order is generous enough to actually keep you going.",
  },
  {
    emoji: "⚡",
    title: "Fast Pickup",
    desc: "Order ahead on WhatsApp and skip the wait — your food is ready when you arrive.",
  },
  {
    emoji: "📍",
    title: "Close to Campus",
    desc: "Right behind Ugbromo market — a quick walk or ride from class to your next meal.",
  },
  {
    emoji: "📱",
    title: "Order on WhatsApp",
    desc: "No app, no stress. Build your order, tap once, and send it straight to our kitchen.",
  },
  {
    emoji: "🔥",
    title: "Always Fresh",
    desc: "Shawarma off the grill, jollof with that smoky party flavour — made fresh, every time.",
  },
];

export default function WhyStudents() {
  return (
    <section
      id="why-students"
      className="scroll-mt-24 border-t border-white/10 bg-neutral-900 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal direction="up">
          <header className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500">
              Campus Favourite
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Why Students Love Us
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-neutral-400">
              Built around student life — affordable, fast, and right where you
              need it.
            </p>
          </header>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((perk, i) => (
            <Reveal
              key={perk.title}
              direction="up"
              delay={i * 90}
              className="h-full"
            >
              <div className="group h-full rounded-3xl border border-white/10 bg-neutral-950/60 p-7 transition hover:border-amber-500/40 hover:bg-neutral-950">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-600/15 text-2xl ring-1 ring-amber-500/20 transition group-hover:scale-110">
                  {perk.emoji}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {perk.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
