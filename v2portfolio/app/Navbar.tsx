"use client";
import Image from "next/image";
import burger from "/public/burger.svg";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleSetIsNavOpen = () => setIsNavOpen(!isNavOpen);
	const pathname = usePathname();

	return (
		<div className="flex flex-row justify-between h-[5vh] bg-purple-950 items-center">
			{isNavOpen ? <p></p> : <h1 className="text-white">Victor Boynton</h1>}
			<button
				className="sm:hidden focus:fill-purple-300"
				onClick={handleSetIsNavOpen}
			>
				{isNavOpen ? (
					<div className=" bg-gradient-to-b from-purple-800 to-purple-950  h-[100vh] w-[100vw] text-white flex flex-col pt-[25vh] justify-between">
						<div className="flex flex-col items-center text-2xl space-y-10">
							<Link
								href="/"
								className={`${
									pathname === "/" ? "border-b-2 border-white" : ""
								}`}
							>
								Home
							</Link>
							<Link
								href="/"
								className={`${
									pathname === "/projects" ? "border-b-2 border-white" : ""
								}`}
							>
								Projects
							</Link>
							<Link
								href="/about"
								className={`${
									pathname === "/about" ? "border-b-2 border-white" : ""
								}`}
							>
								About
							</Link>
							<Link
								href="/contact"
								className={`${
									pathname === "/contact" ? "border-b-2 border-white" : ""
								}`}
							>
								Contact Me
							</Link>
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
					<NavButton target={"/"}>Home</NavButton>
					<NavButton target={"/projects"}>Projects</NavButton>
					<NavButton target={"/about"}>About</NavButton>
					<NavButton target={"/contact"}>Contact Me</NavButton>
				</div>
			</div>
		</div>
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
