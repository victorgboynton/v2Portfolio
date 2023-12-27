"use client";
import Image from "next/image";
import burger from "/public/burger.svg";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleSetIsNavOpen = () => setIsNavOpen((prev) => !prev);

  const controlSetShowNav = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlSetShowNav);
    }
    return () => {
      window.removeEventListener("scroll", controlSetShowNav);
    };
  });

  return (
    <header
      className={`fixed top-0 w-full sm:px-5 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-row justify-between sm:h-[5vh] bg-purple-950 items-center z-50;">
        {isNavOpen ? <p></p> : <h1 className="text-white">Victor Boynton</h1>}
        <button className="sm:hidden" onClick={handleSetIsNavOpen}>
          {isNavOpen ? (
            <div
              className={`fixed inset-0 bg-gradient-to-b from-purple-800 to-purple-950  h-[100vh] w-[100vw] text-white flex flex-col pt-[25vh] justify-between`}
            >
              <div className="flex flex-col items-center text-2xl space-y-10">
                <NavButton target={"/"}>Home</NavButton>
                <NavButton target={"/projectsPage"}>Projects</NavButton>
                <NavButton target={"/about"}>About</NavButton>
                <NavButton target={"/contact"}>Contact Me</NavButton>
              </div>
              <div className="bg-gray-950 items-center py-[2vh]">
                <button>Close</button>
              </div>
            </div>
          ) : (
            <Image src={burger} height={30} width={30} alt="burger" />
          )}
        </button>
        <div className="hidden sm:flex sm:h-[5vh] items-center">
          <div className="flex flex-row items-center justify-between space-x-4 text-white">
            <NavButton target={"/"}>Home</NavButton>
            <NavButton target={"/projectsPage"}>Projects</NavButton>
            <NavButton target={"/about"}>About</NavButton>
            <NavButton target={"/contact"}>Contact Me</NavButton>
          </div>
        </div>
      </div>
    </header>
  );
}
type navButton = {
  children: string;
  target: string;
};
function NavButton(props: navButton) {
  const pathname = usePathname();
  return (
    <Link
      href={props.target}
      className={`${
        pathname === props.target ? "border-b-2 border-white" : ""
      }`}
    >
      {props.children}
    </Link>
  );
}
