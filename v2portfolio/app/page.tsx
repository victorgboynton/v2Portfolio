"use client";
import React from "react";
import { Navbar } from "./Navbar";
import me from "/public/picOfMe.jpg";
import Image from "next/image";
import Link from "next/link";
import { BlinkDescriptor } from "./BlinkDescriptor";
import { SkillsCard, softSkills, hardSkills } from "./SkillsCard";
const b = `pb-5 pt-10`;

export default function Home() {
	return (
		<main className="flex flex-col font-robotoSlab">
			<div className="h-[98vh] mt-[2vh] sm:mt-[5vh] bg-gradient-to-b px-[5vw] sm:px-10 from-[#1a032b] to-[#330336] flex flex-col justify-center md:items-center">
				<h1 className=" text-white text-[40px] md:text-[45px] lg:text-[50px] lg:leading-[90px] xl:text-[70px] break-words flex flex-col animate-[slide-in_1s,fade-in_1s]">
					Software Development,{" "}
					<span className="animate-[fade-in_1s_1s_forwards] text-[#5dc213] opacity-0">
						<BlinkDescriptor />
					</span>{" "}
					<span className="relative animate-[fade-in_1s_1.5s_forwards] text-[30px] right-0 italic opacity-0">
						by Victor Boynton
					</span>
				</h1>
				<nav className="flex flex-col md:flex-row w-[90vw] md:w-[70vw] justify-between md:items-center space-y-4 mx-auto mt-20">
					<Link
						href="/#aboutMeSection"
						className="text-white bg-gray-700 hover:bg-purple-700 opacity-0 p-5 mt-4 text-3xl sm:text-2xl md:text-3xl w-[300px] md:w-auto rounded-full animate-[slide-in_1s_1.5s,fade-in_1.5s_1.5s_forwards] md:animate-[slide-in-right_1s_2s,fade-in_1.5s_2s_forwards]"
					>
						Learn More
					</Link>
					<Link
						href="/#projects"
						className="text-white bg-gray-700 hover:bg-purple-700 opacity-0 p-5 text-3xl w-[300px] md:w-auto rounded-full animate-[slide-in_1s_2s,fade-in_1.5s_2s_forwards] md:animate-[slide-down_1s_1.5s,fade-in_1.5s_1.5s_forwards]"
					>
						My Projects
					</Link>
					<Link
						href="/Contact"
						className="text-white bg-gray-700 hover:bg-purple-700 opacity-0 p-5 text-3xl w-[300px] md:w-auto rounded-full animate-[slide-in_1s_2.5s,fade-in_1.5s_2.5s_forwards]"
					>
						Contact Me
					</Link>
				</nav>
			</div>
			<div className="h-[10vh] bg-gradient-to-b from-[#330336] to-gray-700"></div>
			<div id="aboutMeSection" className="bg-gray-700">
				<div className="text-white text-xl py-20 md:py-32 w-[90vw] mx-auto flex flex-col md:flex-row justify-between">
					<div className="md:w-[60vw] mx-auto">
						<h1 className="text-center text-2xl font-bold pb-5">
							Welcome! I&apos;m Victor Boynton
						</h1>
						<p>
							As a recent graduate in the field of programming, my professional
							journey is just beginning. While I may not yet have extensive
							industry experience, I bring a portfolio rich with diverse
							projects and freelance ventures.
						</p>
						<br />
						<p>
							Consider this website your personal gateway to my world of work,
							all neatly organized and beautifully displayed for your viewing
							pleasure.
						</p>
						<br />
						<div>
							<h2>Relevant Links:</h2>
						</div>
					</div>
					<div className="min-h-80 w-80 resize-none rounded-full relative border-2">
						<Image
							src="/picOfMe.jpg"
							alt="Picture of Victor Boynton in a suit and tie"
							fill
							className="rounded-full object-cover object-left-top relative border-1"
						/>
					</div>
				</div>
			</div>
			<div className="h-[20vh] bg-gradient-to-b to-[#330336] from-gray-700"></div>
			<div className="bg-[#330336] text-white text-xl py-20">
				<div className="flex flex-col w-[90vw] mx-auto">
					<h1 className="text-center text-3xl font-bold mb-10">
						What do I know?
					</h1>
					<div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-20 mx-auto">
						<SkillsCard SkillsMap={softSkills} MapName="My Soft Skills" />
						<SkillsCard SkillsMap={hardSkills} MapName="My Hard Skills" />
					</div>
				</div>
			</div>
			<div className="h-[10vh] bg-gradient-to-b from-[#330336] to-gray-700"></div>
			<ProjectList />
		</main>
	);
}
type ProjectPreviewProps = {
	picture: string;
	altText: string;
	name: string;
	target: string;
};
function ProjectPreview({
	picture,
	name,
	altText,
	target,
}: ProjectPreviewProps) {
	return (
		<Link href={target}>
			<div className="py-2 px-6 m-2 bg-black/20 rounded-md w-[90vw] md:w-auto">
				<div className="relative md:w-96 h-60">
					<Image
						src={picture}
						alt={altText}
						fill
						className="object-scale-down"
					/>
				</div>
				<h2 className="text-center">{name}</h2>
			</div>
		</Link>
	);
}

function ProjectList() {
	return (
		<div id="projects" className="bg-gray-700 text-white text-xl py-20">
			<div className="flex flex-col w-[90vw] mx-auto">
				<h1 className="text-center text-3xl font-bold mb-10">My Projects:</h1>
				<div className="flex w-[90vw] mx-auto">
					<div className="flex flex-col md:flex-row flex-wrap items-center">
						<ProjectPreview
							picture="/CookSuccess.png"
							altText="Picture of the CookSuccess Landing Page"
							name="CookSuccess"
							target="/"
						/>
						<ProjectPreview
							picture="/WhackAFood.png"
							altText="Picture of the Wack-a-Food load screen"
							name="Whack-A-Food"
							target="/"
						/>
						<ProjectPreview
							picture="/gameForceOne.png"
							altText="Picture of the Game Force Landing Page"
							name="Game Force"
							target="/"
						/>
						<ProjectPreview
							picture="/hopefulHumans.png"
							altText="Picture of the Hopeful Humans Landing Page"
							name="Hopeful Humans"
							target="/"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
