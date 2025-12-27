import type { IconType as ReactIcon } from "react-icons";

export type ContactItemProps = {
  href: string;
  title: string;
  Icon: ReactIcon;
};

export default function ContactItem({ href, title, Icon }: ContactItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`
        group flex items-center gap-4
        w-full h-10
        rounded-xl
        transition-colors duration-200
        text-[#999999] hover:text-[#1565c0]
      `}
    >
      <Icon size={16} className="transition-transform duration-200 group-hover:scale-150" />
      <span className="transition-colors duration-200">{title}</span>
    </a>
  );
}