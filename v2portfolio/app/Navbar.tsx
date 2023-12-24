"use client";
import Image from "next/image";
import burger from "/public/burger.svg";
import React, { useState } from "react";

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSetIsNavOpen = () => setIsNavOpen(!isNavOpen);
  return (
    <div className="flex flex-row justify-between bg-purple-950 items-center">
      {isNavOpen ? <p></p> : <h1 className="text-white">Victor Boynton</h1>}
      <button
        className="sm:hidden focus:fill-purple-300"
        onClick={handleSetIsNavOpen}
      >
        {isNavOpen ? (
          <div className="bg-purple-950 h-[100vh] w-[100vw] text-white flex flex-col pt-[25vh] justify-between">
            <div className="flex flex-col items-center space-y-10">
              <a>Home</a>
              <a>Projects</a>
              <a>About</a>
              <a>Contact</a>
            </div>
            <div className="bg-gray-950 items-center py-[2vh]">
              <button>Close</button>
            </div>
          </div>
        ) : (
          <Image src={burger} height={30} width={30} alt="burger" />
        )}
      </button>
      <div className="hidden sm:flex h-[5vh] items-center">
        <div className="flex flex-row items-center justify-between space-x-4 text-white ml-4">
          <a>Home</a>
          <a>Projects</a>
          <a>About</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}
