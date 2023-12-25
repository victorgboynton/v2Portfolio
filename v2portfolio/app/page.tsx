import React from "react";
import { Navbar } from "./Navbar";
import me from "/public/picOfMe.jpg";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<h1 className="h-[100vh] mt-[2vh] sm:mt-[5vh] bg-gradient-to-b from-purple-950 to-fuchsia-950 text-white text-[50px] break-words flex items-center ">
				Full-Stack Web Development, Done Right
			</h1>
			<div className="h-[100vh] bg-[#f7f7f7] text-black pt-[10vh] block sm:flex sm:flex-row text-3xl">
				<div className="items-center">
					I am a new developer, trying to show off my skills. I hope that this
					website will give you a little taste of what I know how to do!
				</div>
				<Image
					src={me}
					alt="Picture of Me"
					height={300}
					width={600}
					className="sm:h-[800px] border-2 border-black my-5"
				/>
			</div>
			<div className="h-[100vh] bg-[#f0f0f0]">What I know how to do:</div>
		</main>
	);
}
