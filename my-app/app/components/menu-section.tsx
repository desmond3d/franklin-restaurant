"use client";

import { MENU, type Category, type MenuItem } from "../data/menu";
import { useCart } from "./cart-context";
import Reveal from "./reveal";

/** Display order + emoji per category. */
const CATEGORIES: { name: Category; emoji: string }[] = [
  { name: "Shawarma", emoji: "🌯" },
  { name: "Burgers", emoji: "🍔" },
  { name: "Sandwiches", emoji: "🥪" },
  { name: "Specials", emoji: "🌮" },
  { name: "Rice & Pasta", emoji: "🍚" },
  { name: "Proteins", emoji: "🍗" },
  { name: "Swallows", emoji: "🍲" },
  { name: "Extras", emoji: "🥡" },
];

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function MenuSection() {
  const { addItem } = useCart();

  return (
    <section id="full-menu" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Heading */}
        <header className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500">
            Our Menu
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Explore the Full Menu
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-neutral-400">
            From sizzling shawarma to smoky party jollof — tap the{" "}
            <span className="text-amber-400">+</span> to add anything straight to
            your order.
          </p>
        </header>

        {/* Quick-jump category pills */}
        <nav className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href={`#${slug(cat.name)}`}
              className="rounded-full border border-white/10 bg-neutral-900/60 px-4 py-1.5 text-sm text-neutral-300 transition hover:border-amber-500/40 hover:text-white"
            >
              <span className="mr-1">{cat.emoji}</span>
              {cat.name}
            </a>
          ))}
        </nav>

        {/* Category groups */}
        <div className="mt-16 space-y-16">
          {CATEGORIES.map((cat) => {
            const items = MENU.filter((m) => m.category === cat.name);
            if (items.length === 0) return null;

            return (
              <Reveal key={cat.name} direction="up">
              <div id={slug(cat.name)} className="scroll-mt-24">
                <h3 className="flex items-center gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl">{cat.emoji}</span>
                  <span className="font-serif text-xl tracking-wide sm:text-2xl">
                    {cat.name}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="shrink-0 whitespace-nowrap text-xs uppercase tracking-widest text-neutral-500">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </span>
                </h3>

                <div className="mt-6 grid gap-x-12 gap-y-1 sm:grid-cols-2">
                  {items.map((item) => (
                    <MenuRow
                      key={item.id}
                      item={item}
                      onAdd={() =>
                        addItem({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: cat.emoji,
                        })
                      }
                    />
                  ))}
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MenuRow({ item, onAdd }: { item: MenuItem; onAdd: () => void }) {
  return (
    <div className="group flex items-start gap-3 border-b border-white/5 py-3.5">
      {/* Name + description — wraps freely instead of truncating */}
      <div className="min-w-0 flex-1 sm:flex-initial">
        <p className="font-medium leading-snug text-neutral-100">{item.name}</p>
        {item.desc && (
          <p className="mt-0.5 text-xs text-neutral-500">{item.desc}</p>
        )}
      </div>

      {/* Dotted leader — desktop only */}
      <span className="mt-3 hidden flex-1 self-start border-b border-dotted border-white/15 sm:block" />

      {/* Price + add button stay together on the right */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <span className="whitespace-nowrap text-sm font-semibold text-amber-400 sm:text-base">
          {naira(item.price)}
        </span>
        <button
          onClick={onAdd}
          aria-label={`Add ${item.name} to order`}
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-linear-to-r from-amber-600 to-amber-500 text-lg leading-none text-white shadow-md shadow-amber-600/30 transition hover:scale-110"
        >
          +
        </button>
      </div>
    </div>
  );
}
