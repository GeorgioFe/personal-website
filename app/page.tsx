import "./globals.css";
import AnimatedSection from "../components/AnimatedSection";
import HomeHeroSection from "../components/home/HomeHeroSection";
import SnapshotsSection from "../components/home/SnapshotsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ProjectsDivider from "@/components/home/ProjectsDivider";
import SnapshotsDivider from "@/components/home/SnapshotsDivider";
import HeroDivider from "@/components/home/HeroDivider";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <AnimatedSection>
      <main className="bg-black text-white">
        <HomeHeroSection />
        <HeroDivider />
        <ProjectsSection />
        <ProjectsDivider />
        <SnapshotsSection />
        <SnapshotsDivider />
        <Footer />
      </main>
    </AnimatedSection>
  );
}