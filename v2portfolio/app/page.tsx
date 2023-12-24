"use client";
import Image from "next/image";
import burger from "/public/burger.svg";
import React, { useState } from "react";
import burgerVert from "/public/burgerVert.svg";

export default function Home() {
	return (
		<main>
			<Navbar />
		</main>
	);
}
function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleSetIsNavOpen = () => setIsNavOpen(!isNavOpen);
	return (
		<div>
			<button
				className="sm:hidden focus:fill-purple-300"
				onClick={handleSetIsNavOpen}
			>
				{isNavOpen ? (
					<div className="bg-black h-[100vh] w-[100vw] text-white flex flex-col pt-[25vh] justify-between">
						<div className="flex flex-col items-center space-y-10">
							<a>Home</a>
							<a>Projects</a>
							<a>About</a>
							<a>Contact</a>
						</div>
						<div className="bg-gray-950 items-center pt-[5vh]">
							<button>Close</button>
						</div>
					</div>
				) : (
					<Image src={burger} height={30} width={30} alt="burger" />
				)}
			</button>
			<div className="hidden sm:block">Testing responsive design</div>
		</div>
	);
}
