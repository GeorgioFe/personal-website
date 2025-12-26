"use client";

import Link from "next/link";
import { FileText, Globe } from "phosphor-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/types";

type ProjectCardProps = Project;

const linkIcons = {
  github: FaGithub,
  paper: FileText,
  website: Globe,
} as const;

function ProjectCard({ title, subtitle, year, thumbnailSrc, href, links }: ProjectCardProps) {
  const cardContent = (
    <div className="relative w-full overflow-hidden rounded-3xl border border-[#1f1f1f] bg-[#121212] p-3 transition-transform duration-300 group-hover:-translate-y-1">
      
      {/*href ? (
        <Link href={href} className="absolute inset-0 z-0" aria-label={title} />
      ) : null*/}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-[#1a1a1a]">
        <img
          src={thumbnailSrc}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="relative z-10 px-1 pb-2 pt-4 flex flex-col gap-1">
        <p className="text-lg font-medium text-[#f2f2f2]">{title}</p>
        <p className="text-sm leading-snug main-gradient">{subtitle}</p>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm tracking-widest text-neutral-400">{year}</p>
          {links && links.length > 0 ? (
            <div className="flex items-center gap-3">
              {links.map((link) => {
                const Icon = linkIcons[link.type];
                if (!Icon) {
                  return null;
                }
                return (
                  <a
                    key={`${link.type}-${link.href}`}
                    href={link.href}
                    className="text-neutral-400 transition-colors duration-200 hover:text-[#f2f2f2]"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.type}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  return <div className="group">{cardContent}</div>;
}

export default ProjectCard;
