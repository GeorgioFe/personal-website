"use client"; 

import NavItem from "./NavItem";
import { House, UserCircle, Wall, EnvelopeSimple, BookOpen } from "phosphor-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: House },
  // { href: "/about", label: "About", icon: UserCircle },
  { href: "/projects", label: "Projects", icon: Wall },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: EnvelopeSimple },
];

export default function NavMenu() {
    const pathname = usePathname(); // returns current path, e.g., "/projects"
  return (
    <nav className=" w-48 flex flex-col items-center gap-1">
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
          Icon={item.icon}
          isActive={item.href === pathname} // example: mark active item
        />
      ))}
    </nav>
  );
}