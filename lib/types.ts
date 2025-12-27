// Project type
export type Project = {
  title: string;
  subtitle: string;
  year: number | string;
  thumbnailSrc: string;
  slug: string;
  href?: string;
  links?: { type: "github" | "paper" | "website"; href: string }[];
};

// Snapshot Type
export type Snapshot = {
  src: string;
  alt: string;
};