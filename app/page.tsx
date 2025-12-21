import "./globals.css";
import AnimatedSection from "../components/AnimatedSection";
import HomeHeroSection from "../components/home/HomeHeroSection";

export default function Home() {
  return (
    <AnimatedSection>
      <main className="bg-black text-white">
        <HomeHeroSection />
      </main>
    </AnimatedSection>
  );
}