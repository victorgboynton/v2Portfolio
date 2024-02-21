"use client";
import React from "react";
import { ProjectPreview } from "./ProjectPreview";
import { ScrollAnimation } from "./ScrollAnimation";
import { ProjectDescriptionArray } from "./ProjectDescriptionArray";

export function ProjectList() {
	return (
		<div
			id="projects"
			className="bg-gradient-to-t from-[#1a032b] to-[#330336] text-white text-xl py-20 "
		>
			<div className="flex flex-col w-[90vw] mx-auto ">
				<h1 className="text-center text-3xl font-bold mb-10">My Projects:</h1>
				<div className="flex justify-center mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						<ScrollAnimation
							inAnimation="animate-[fade-in_3s_forwards]"
							outAnimation=""
						>
							<ProjectPreview
								picture="/CookSuccess.webp"
								altText="Picture of the CookSuccess Landing Page"
								name="CookSuccess"
								target={`/${ProjectDescriptionArray[0].slug}`}
							/>
						</ScrollAnimation>
						<ScrollAnimation
							inAnimation="animate-[fade-in_3s_forwards]"
							outAnimation=""
						>
							<ProjectPreview
								picture="/WhackAFood.webp"
								altText="Picture of the Wack-a-Food load screen"
								name="Whack-A-Food"
								target="/"
							/>
						</ScrollAnimation>
						<ScrollAnimation
							inAnimation="animate-[fade-in_3s_forwards]"
							outAnimation=""
						>
							<ProjectPreview
								picture="/gameForceOne.webp"
								altText="Picture of the Game Force Landing Page"
								name="Game Force"
								target="/"
							/>
						</ScrollAnimation>
						<ScrollAnimation
							inAnimation="animate-[fade-in_3s_forwards]"
							outAnimation=""
						>
							<ProjectPreview
								picture="/hopefulHumans.webp"
								altText="Picture of the Hopeful Humans Landing Page"
								name="Hopeful Humans"
								target="/"
							/>
						</ScrollAnimation>
					</div>
				</div>
			</div>
		</div>
	);
}
