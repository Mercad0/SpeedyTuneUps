import Link from "next/link";
import Image from "next/image";
import { LinkProps } from "../Types";
import { RiMenuFoldLine } from "react-icons/ri";
import React from "react";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const links = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="h-fit w-full fixed duration-500 bg-white shadow-xl font-medium z-50">
      <div className="container flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image
            src="/Svgs/SpeedyTuneUpsLogo.svg"
            alt="Logo"
            width={200}
            height={100}
            priority={true}
            className="ml-10 w-auto"
          />
        </Link>
        <LinkName links={links} />
        <button
          className="block md:hidden px-4 transition-all text-lg"
          onClick={toggle}
          aria-label="Mobile menu"
        >
          {isOpen ? (
            <RiMenuFoldLine className="w-10 h-10 text-lime-50 duration-300 translate-x-52 z-50 mt-28" />
          ) : (
            <RiMenuFoldLine className="w-10 h-10 duration-700 hover:text-red-600 mt-28" />
          )}
        </button>
      </div>
      <MobileNav isOpen={isOpen} onClose={toggle} links={[]} />
    </nav>
  );
};

const LinkName = ({ links }: LinkProps) => {
  const router = useRouter();
  return (
    <ul className="hidden space-x-8 text-xl md:flex rounded-md px-8 transition-all">
      {links.map(({ href, title }) => {
        const isActive = router.pathname === href;
        const linkName = isActive
          ? "transform hover:scale-105 duration-500 the-underline text-red-600"
          : "transform hover:scale-105 duration-500 the-underline hover:text-red-600";
        return (
          <li key={href} className={linkName}>
            <Link href={href}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
