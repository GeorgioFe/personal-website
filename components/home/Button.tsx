import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type ButtonProps = {
  title: string;
  href: string;
};

export default function Button({ title, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        group inline-flex items-center gap-2
        rounded-full border border-neutral-600
        px-5 py-2
        text-sm text-neutral-300
        transition-colors
        hover:border-[#1565c0] hover:text-[#1565c0]
      "
    >
      <span>{title}</span>
      <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}