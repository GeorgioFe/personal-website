import Link from "next/link";

export default function MoreAboutButton() {
  return (
    <Link
      href="/about"
      className="
        flex items-center gap-2
        rounded-full border border-neutral-600
        px-5 py-2
        text-sm text-neutral-300
        transition-colors
        hover:border-[#1565c0] hover:text-[#1565c0]
      "
    >
      More about Me →
    </Link>
  );
}