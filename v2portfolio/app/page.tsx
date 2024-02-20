"use client";
import React from "react";
import { Navbar } from "./Navbar";
import me from "/public/picOfMe.jpg";
import Image from "next/image";
import Link from "next/link";
import { BlinkDescriptor } from "./BlinkDescriptor";
import { SkillsCard, softSkills, hardSkills } from "./SkillsCard";
import { ScrollAnimation } from "./ScrollAnimation";
import { Contact } from "./Contact";
import { ProjectList } from "./ProjectList";
const b = `pb-5 pt-10`;

export default function Home() {
	return (
		<main className="flex flex-col font-robotoSlab">
			<div className="h-[98vh] pt-[2vh] sm:mt-[5vh] bg-gradient-to-b px-[5vw] sm:px-10 from-[#1a032b] to-[#330336] flex flex-col justify-center md:items-center">
				<div className="w-[90vw] mx-auto flex flex-col items-center justify-center">
					<h1 className=" text-white mx-auto text-[40px] md:text-[45px] lg:text-[50px] lg:leading-[90px] xl:text-[70px] break-words flex flex-col animate-[slide-in_1s,fade-in_1s] max-h-min">
						Software Development,{" "}
						<span className="animate-[fade-in_1s_1s_forwards] text-[#5dc213] opacity-0">
							<BlinkDescriptor />
						</span>{" "}
						<span className="relative animate-[fade-in_1s_1.5s_forwards] text-[30px] right-0 italic opacity-0">
							by Victor Boynton
						</span>
					</h1>
					<nav className="flex flex-col md:flex-row w-[90vw] md:w-[70vw] justify-between items-center space-y-4 mx-auto mt-20">
						<Link
							href="/#aboutMeSection"
							className="text-white bg-gray-700 hover:bg-purple-700 opacity-0 p-5 mt-4 text-3xl sm:text-2xl md:text-3xl w-[300px] md:w-auto rounded-full animate-[fade-in_1.5s_2s_forwards]"
						>
							Learn More
						</Link>
						<Link
							href="/#projects"
							className="text-white bg-gray-700 hover:bg-purple-700 opacity-0 p-5 text-3xl w-[300px] md:w-auto rounded-full animate-[fade-in_1.5s_2.5s_forwards]"
						>
							My Projects
						</Link>
						<Link
							href="/#contact"
							className="text-white bg-gray-700 hover:bg-purple-700 opacity-0 p-5 text-3xl w-[300px] md:w-auto rounded-full animate-[fade-in_1.5s_3s_forwards]"
						>
							Contact Me
						</Link>
					</nav>
				</div>
			</div>
			<div className="h-[10vh] bg-gradient-to-b from-[#330336] to-[#414344] via-[#3a233d]"></div>
			<div className="bg-gradient-to-b from-[#414344] to-[#555555]">
				<div
					id="aboutMeSection"
					className=" w-[90vw] mx-auto text-white text-xl"
				>
					<div className="pt-20 md:pt-32 flex flex-col md:flex-row justify-between">
						<div className="md:w-[60vw] mx-auto">
							<h1 className="text-center text-2xl font-bold pb-5">
								Welcome! I&apos;m Victor Boynton
							</h1>
							<p>
								As a recent graduate in the field of programming, my
								professional journey is just beginning. While I may not yet have
								extensive industry experience, I bring a portfolio rich with
								diverse projects and freelance ventures.
							</p>
							<br />
							<p>
								Consider this website your personal gateway to my world of work,
								all neatly organized and beautifully displayed for your viewing
								pleasure.
							</p>
							<br />
							<div className="my-10">
								<h2 className="text-2xl">Visit Me Elsewhere:</h2>
								<div className="flex flex-row flex-wrap justify-between sm:justify-normal sm:space-x-2">
									<Link
										href="https://github.com/victorgboynton"
										target="_blank"
									>
										<div className="flex flex-row hover:text-blue-600">
											<div className="relative h-7 w-7">
												<Image
													src="/github-mark-white.svg"
													alt="github logo, is a link"
													fill
												/>
											</div>
											<p className="ml-2">GitHub</p>
										</div>
									</Link>
									<p>|</p>
									<Link
										href="https://www.linkedin.com/in/victor-boynton/"
										target="_blank"
									>
										<div className="flex flex-row hover:text-blue-600">
											<div className="relative h-7 w-7">
												<Image
													src="/linkedIn.svg"
													alt="linkedIn logo, is a link"
													fill
												/>
											</div>
											<p className="ml-2">LinkedIn</p>
										</div>
									</Link>
									<p>|</p>
									<Link
										href="https://docs.google.com/document/d/18LAL50lpS0qSegzxLI1A30z4Sh1lg9Rrlv-8cTqVDhs/edit?usp=sharing"
										target="_blank"
									>
										<div className="flex flex-row hover:text-blue-600">
											<div className="relative h-7 w-7">
												<Image
													src="/resumeIcon.svg"
													alt="Icon of a piece of paper, is a link"
													fill
												/>
											</div>
											<p className="ml-2">Résumé</p>
										</div>
									</Link>
								</div>
							</div>
						</div>{" "}
						<div className="w-[90vw] mx-auto">
							<ScrollAnimation
								inAnimation="animate-[slide-down_2s,fade-in_2s_forwards]"
								outAnimation="animate-[fade-out_2s_forwards]"
							>
								<div className="min-h-80 w-80 resize-none rounded-full relative border-2">
									<Image
										src="/picOfMe.jpg"
										alt="Picture of Victor Boynton in a suit and tie"
										fill
										className="rounded-full object-cover object-left-top relative border-1"
									/>
								</div>
							</ScrollAnimation>
						</div>
					</div>
					<div className=" text-white text-xl py-20">
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
				</div>
			</div>
			<div className="h-[10vh] bg-gradient-to-b to-[#330336] from-[#555555] via-[#3a233d]"></div>
			<div className="">
				<ProjectList />
			</div>
			<div className="h-[10vh] bg-gradient-to-b to-[#555555] from-[#1a032b] via-[#3a233d]"></div>
			<div
				id="contact"
				className="bg-gradient-to-b to-[#414344] from-[#555555] pt-20"
			>
				<div className="w-[90vw] mx-auto text-white text-xl ">
					<h1 className="text-2xl font-bold text-center">Get Ahold of Me!</h1>
					<Contact />
				</div>
			</div>
		</main>
	);
}
