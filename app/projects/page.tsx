import "../globals.css";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "Project Vader",
    year: "2025",
    imageSrc: "/georgio_feghali_logo.png",
    href: "/projects/kombo-portfolio",
  },
  {
    title: "Synaptic",
    year: "2024",
    imageSrc: "/georgio_feghali_logo.png",
    href: "/projects/spendly-website",
  },
  {
    title: "Hydrolink",
    year: "2024",
    imageSrc: "/georgio_feghali_logo.png",
    href: "/projects/fintech-dashboard",
  },
];

export default function Projects() {
  return (
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-6xl px-8 py-20">
          <AnimatedSection>
            <h1 className="text-5xl font-medium tracking-tight">Projects</h1>
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.href} {...project} />
            ))}
            </div>
          </AnimatedSection>
          
        </div>
      </main>
  );
}