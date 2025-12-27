import Hero from "./Hero";
import IntroText from "./IntroText";

export default function HomeHeroSection() {
  return (
    <section className="px-16 py-20 max-w-4xl">
      <Hero />
      <IntroText />
    </section>
  );
}