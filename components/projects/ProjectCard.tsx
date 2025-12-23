"use client";

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  year: string;
  imageSrc: string;
  href?: string;
}

function ProjectCard({ title, year, imageSrc, href }: ProjectCardProps) {
  const cardContent = (
    <div className="w-full overflow-hidden rounded-3xl border border-[#1f1f1f] bg-[#121212] p-3 transition-transform duration-300 group-hover:-translate-y-1">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-[#1a1a1a]">
        <img
          src={imageSrc}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="px-1 pb-2 pt-4">
        <p className="text-xs uppercase tracking-[0.3em] main-gradient">
          {year}
        </p>
        <p className="mt-2 text-lg font-medium text-[#f2f2f2]">{title}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        {cardContent}
      </Link>
    );
  }

  return <div className="group">{cardContent}</div>;
}

export default ProjectCard;
