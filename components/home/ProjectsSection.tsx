import ProjectCard from "../projects/ProjectCard";
import { getProjects } from "@/lib/utils/projectUtils";

const projects = getProjects().sort((a, b) => Number(b.year) - Number(a.year)).slice(0, 3);

export default function ProjectsSection() {
  return (
    <section className="px-16 py-20">
      <h3 className="text-2xl text-[#E6E6E6]">Recent Projects</h3>

      <div className="mt-20 grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}