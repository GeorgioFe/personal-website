import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project } from "@/lib/types";

const projectsDir = path.join(process.cwd(), "content/projects");

function getProjectMetadata(fileName: string): Project {
  const slug = fileName.replace(/\.mdx?$/, "");
  const filePath = path.join(projectsDir, fileName);
  const { data } = matter(fs.readFileSync(filePath, "utf8"));

  return {
    title: data.title,
    subtitle: data.subtitle,
    year: data.year,
    thumbnailSrc: data.thumbnailSrc,
    slug,
    href: `/projects/${slug}`,
    links: data.links,
  };
}

export function getProjects(): Project[] {
  return fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map(getProjectMetadata);
}

export function getProjectBySlug(slug: string): Project | null {
  const fileName = fs
    .readdirSync(projectsDir)
    .find((file) => file.startsWith(slug));

  return fileName ? getProjectMetadata(fileName) : null;
}