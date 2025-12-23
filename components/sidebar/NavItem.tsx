"use client";

import type { Icon as PhosphorIcon } from "phosphor-react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  Icon: PhosphorIcon;
  isActive?: boolean;
}

function NavItem({ href, label, Icon, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`
        group flex items-center gap-4
        w-full h-12
        p-4 rounded-xl
        transition-colors duration-200
        ${isActive ? "bg-[#1A1A1A] text-[#E6E6E6]" : "text-[#999999] hover:text-[#1565c0]"}
      `}
    >

      <Icon
        size={16}
        className={`transition-transform duration-200 ${
          isActive ? "" : "group-hover:scale-150"
        }`}
      />

      <span className="transition-colors duration-200">
        {label}
      </span>
      
    </Link>
  );
};

export default NavItem;
