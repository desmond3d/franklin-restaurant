import Image from "next/image";
import Reveal from "./reveal";
import FloatingLeaves from "./floating-leaves";

type Review = {
  name: string;
  role: string;
  img: string;
  rating: number;
  quote: string;
};

// Square, face-centred crops. Replace with real customer photos when you have them.
const FACE = "auto=format&fit=crop&w=160&h=160&q=80&crop=faces";

const REVIEWS: Review[] = [
  {
    name: "Ajiri Samuel",
    role: "Student · FUPRE",
    img: `https://images.unsplash.com/photo-1531384441138-2736e62e0919?${FACE}`,
    rating: 5,
    quote:
      "The jumbo shawarma is unreal for the price. I order on WhatsApp between lectures and it's ready before I get there.",
  },
  {
    name: "Amara Nwachukwu",
    role: "Regular",
    img: `https://images.unsplash.com/photo-1589156280159-27698a70f29e?${FACE}`,
    rating: 5,
    quote:
      "Special jollof rice tastes like a party every time. Portions are huge and the staff are so friendly.",
  },
  {
    name: "Esegbona Desmond",
    role: "Student · FUPRE",
    img: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?${FACE}`,
    rating: 5,
    quote:
      "Closest thing to home-cooked food near campus. The classic beef burger is my weekend ritual now.",
  },
  {
    name: "Blessing Ufuoma",
    role: "Food lover",
    img: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?${FACE}`,
    rating: 5,
    quote:
      "Fast, affordable, and always fresh. I've never had a bad meal here — the egusi and eba is a must try.",
  },
  {
    name: "Joshua Ighodaro",
    role: "Student · UNIBEN",
    img: `https://images.unsplash.com/photo-1599566150163-29194dcaad36?${FACE}`,
    rating: 4,
    quote:
      "Great value and the WhatsApp ordering makes everything easy. Tacos special is genuinely the best in Warri.",
  },
  {
    name: "Chioma Bello",
    role: "Regular",
    img: `https://images.unsplash.com/photo-1531123897727-8f129e1688ce?${FACE}`,
    rating: 5,
    quote:
      "I bring my whole crew here. Big portions, small prices — Franklin just gets students.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden scroll-mt-24 bg-neutral-950 text-white"
    >
      <FloatingLeaves />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal direction="up">
          <header className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500">
              Loved by Locals
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
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
                    src={review.img}
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
