import Image from "next/image";
import Reveal from "./reveal";

type Review = {
  name: string;
  role: string;
  img: number;
  rating: number;
  quote: string;
};

const REVIEWS: Review[] = [
  {
    name: "Ajiri Samuel",
    role: "Student · FUPRE",
    img: 12,
    rating: 5,
    quote:
      "The jumbo shawarma is unreal for the price. I order on WhatsApp between lectures and it's ready before I get there.",
  },
  {
    name: "Amara Nwachukwu",
    role: "Regular",
    img: 5,
    rating: 5,
    quote:
      "Special jollof rice tastes like a party every time. Portions are huge and the staff are so friendly.",
  },
  {
    name: "Esegbona Desmond",
    role: "Student · FUPRE",
    img: 33,
    rating: 5,
    quote:
      "Closest thing to home-cooked food near campus. The classic beef burger is my weekend ritual now.",
  },
  {
    name: "Blessing Ufuoma",
    role: "Food lover",
    img: 47,
    rating: 5,
    quote:
      "Fast, affordable, and always fresh. I've never had a bad meal here — the egusi and eba is a must try.",
  },
  {
    name: "Joshua Ighodaro",
    role: "Student · UNIBEN",
    img: 14,
    rating: 4,
    quote:
      "Great value and the WhatsApp ordering makes everything easy. Tacos special is genuinely the best in Warri.",
  },
  {
    name: "Chioma Bello",
    role: "Regular",
    img: 9,
    rating: 5,
    quote:
      "I bring my whole crew here. Big portions, small prices — Franklin just gets students.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal direction="up">
          <header className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500">
              Loved by Locals
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-neutral-400">
              Thousands of happy plates served — here&apos;s what keeps everyone
              coming back.
            </p>
          </header>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal
              key={review.name}
              direction="up"
              delay={(i % 3) * 90}
              className="h-full"
            >
            <figure
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-neutral-900/60 p-6 transition hover:border-amber-500/40 hover:bg-neutral-900"
            >
              <div className="flex text-amber-400" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < review.rating ? "" : "text-neutral-700"}
                  >
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-300">
                “{review.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/10">
                  <Image
                    src={`https://i.pravatar.cc/80?img=${review.img}`}
                    alt={review.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {review.name}
                  </p>
                  <p className="text-xs text-neutral-400">{review.role}</p>
                </div>
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
