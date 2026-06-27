
import Hero from "./components/hero";
import PopularMenu from "./components/pupolarMenu";
import WhyStudents from "./components/why-students";
import Reviews from "./components/reviews";
import Reveal from "./components/reveal";

export default function Home() {
  return (
    <div>
      <Hero />
      <Reveal direction="up">
        <PopularMenu />
      </Reveal>
      <WhyStudents />
      <Reviews />
    </div>
  );
}
