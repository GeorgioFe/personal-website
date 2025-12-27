import "../globals.css";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/projects/ProjectCard";
import { getProjects } from "@/lib/utils/projectUtils";
import Footer from "@/components/footer/Footer";

export default function Projects() {
  const projects = getProjects().sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-8 py-20">
        <AnimatedSection>
          <h1 className="text-5xl font-medium tracking-tight">Projects</h1>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </main>
  );
}