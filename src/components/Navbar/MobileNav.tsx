import React from "react";
import { MobileNavProps } from "../Types";
import { RiMenuUnfoldLine } from "react-icons/ri";
import Link from "next/link";

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Gallery", href: "/gallery" },
  ];

  return (
    <div
      className={`md:hidden fixed top-0 right-0 ease-in-out w-full h-fit mt-48 rounded-bl-3xl bg-gradient-to-br from-lime-300 to-lime-500 z-50 transition-all ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        transitionDuration: "0.9s",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <div className="h-full container mx-auto px-4 md:px-8 flex flex-col">
        <button
          onClick={onClose}
          aria-label="Close drop-down Menu"
          className="absolute -top-16 right-4 text-red-500 focus:outline-none transition-all duration-500"
        >
          <RiMenuUnfoldLine className="w-10 h-10" />
        </button>
        <LinkName links={links} onClose={onClose} isOpen />
      </div>
    </div>
  );
}

const LinkName = ({ links, onClose }: MobileNavProps) => {
  return (
    <ul className="space-x-4 text-black text-center font-mono text-xl">
      {links.map((link) => (
        <li
          key={link.href}
          className="cursor-pointer inline-block"
          onClick={onClose}
        >
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};
