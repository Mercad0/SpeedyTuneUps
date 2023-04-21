import Link from "next/link";
import { LinkProps } from "../Types";
import { RiMenuFoldLine } from "react-icons/ri";
import React from "react";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";
import { SpeedyLogo } from "@/Svg/SpeedyLogo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [scrollingUp, setScrollingUp] = React.useState(true);
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);

  const handleScroll = React.useCallback(() => {
    const currentScrollPosition = window.scrollY;
    setScrollingUp(currentScrollPosition < lastScrollPosition);
    setLastScrollPosition(currentScrollPosition);
  }, [lastScrollPosition]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  const links = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Gallery", href: "/gallery" },
  ];

  return (
    <nav
      className={`h-fit max-w-screen-2xl w-full fixed duration-500 font-medium z-50 transition-all ${
        scrollingUp ? "bg-white bg-opacity-95" : "bg-white bg-opacity-50"
      }`}
    >
      <div className="flex items-center md:justify-between justify-center">
        <div className="w-96 transition-all duration-500 hover:scale-105">
          <Link href="/" aria-label="Home">
            <SpeedyLogo />
          </Link>
        </div>
        <div>
          <LinkName links={links} />
        </div>
        <button
          className="block md:hidden px-4 transition-all text-lg"
          onClick={toggle}
          aria-label="Mobile menu"
        >
          {isOpen ? (
            <RiMenuFoldLine className="w-10 h-10 text-lime-50 duration-700 translate-x-52 z-50 mt-28" />
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
