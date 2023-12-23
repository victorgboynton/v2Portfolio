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
					<div className="absolute z-10 flex flex-col">
						<div className="">
							<Image
								src={burgerVert}
								height={30}
								width={30}
								alt="burger"
								className="animate-rotateBurger"
							/>
						</div>
						<div className="flex flex-col">
							<a>Home</a>
							<a>Projects</a>
							<a>About</a>
							<a>Contact</a>
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
