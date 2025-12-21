"use client";

import type { Icon as PhosphorIcon } from "phosphor-react";

interface NavItemProps {
  href: string;
  label: string;
  Icon: PhosphorIcon;
  isActive?: boolean;
}

function NavItem({ href, label, Icon, isActive }: NavItemProps) {
  return (
    <a
      href={href}
      className={`
        group flex items-center gap-4
        w-full h-12
        p-4 rounded-xl
        transition-colors duration-200
        ${isActive ? "bg-[#1A1A1A] text-[#E6E6E6]" : "text-[#999999]"}
      `}
    >

      <Icon
        size={16}
        className={`transition-transform duration-300 ${
          isActive ? "" : "group-hover:scale-150 group-hover:text-[#1565c0]"
        }`}
      />

      <span
        className={`transition-colors duration-200 ${
          isActive
            ? "" : "hover:text-[#1565c0]"
        }`}
      >
        {label}
      </span>
      
    </a>
  );
};

export default NavItem;