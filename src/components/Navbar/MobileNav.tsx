import React from "react";
import { MobileNavProps } from "../Types";
import { RiMenuUnfoldLine } from "react-icons/ri";
import Link from "next/link";

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const links = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Gallery", href: "/gallery" },
  ];

  return (
    <div
      className={`md:hidden absolute mt-40 top-0 right-0 ease-in-out w-full h-fit z-50 bg-lime-400 transition-all ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        transitionDuration: "0.9s",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <div className="h-full container mx-auto px-2 md:px-8 flex flex-col">
        <button
          onClick={onClose}
          aria-label="Close drop-down Menu"
          className="absolute sm:-top-4 -top-14 right-6 bg-white rounded-lg text-red-500 focus:outline-none transition-all duration-500"
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
    <ul className="space-x-4 text-black text-center font-mono text-xl bg-lime-400 rounded-lg">
      {links.map(({ href, title }) => (
        <li
          key={href}
          className="cursor-pointer inline-block"
          onClick={onClose}
        >
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
