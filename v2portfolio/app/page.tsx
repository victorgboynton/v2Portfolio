import React from "react";
import { Navbar } from "./Navbar";

export default function Home() {
	return (
		<main>
			<h1 className="h-[100vh] mt-[2vh] sm:mt-[5vh] bg-gradient-to-b from-purple-950 to-fuchsia-950 text-white text-[50px] break-words flex items-center ">
				Full-Stack Web Development, Done Right
			</h1>
			<div className="h-[100vh] bg-[#f7f7f7] text-black"></div>
		</main>
	);
}
