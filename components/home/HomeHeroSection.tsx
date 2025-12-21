import Hero from "./Hero";
import IntroText from "./IntroText";
import LocationRow from "./LocationRow";
import MoreAboutButton from "./MoreAboutButton";

export default function HomeHeroSection() {
  return (
    <section className="px-16 py-20 max-w-4xl">
      <Hero />
      <IntroText />

      <div className="mt-16 flex items-center justify-between">
        <LocationRow />
        <MoreAboutButton />
      </div>
    </section>
  );
}