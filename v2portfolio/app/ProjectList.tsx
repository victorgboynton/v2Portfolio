"use client";
import React from "react";
import {
	ProjectDescriptionArray,
	ProjectDescriptionProps,
} from "./ProjectDescriptionArray";
import { AnimatedLinkToProjectPage } from "./AnimatedLinkToProjectPage";

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
						{ProjectDescriptionArray.map((project: ProjectDescriptionProps) => {
							return (
								<div key={project.id}>
									<AnimatedLinkToProjectPage
										picture={project.picture}
										altText={project.alt}
										name={project.projectName}
										target={`/${project.slug}`}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
