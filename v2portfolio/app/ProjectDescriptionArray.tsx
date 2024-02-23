"use client";
import { ElementRef } from "react";
import { HopefulHumansProjectDescription } from "./HopefulHumansProjectDescription";
export const ProjectDescriptionArray: ProjectDescriptionProps[] = [
	{
		id: 1,
		projectName: "CookSuccess",
		slug: "cooksuccess",
		githubLink: "https://github.com/victorgboynton/cook_success",
		picture: "/CookSuccess.webp",
		alt: "Picture of the CookSuccess landing page",
		status: "In Progress",
		skills: ["React", "TailwindCSS", "Nextjs", "MongoDB"],
		description: <HopefulHumansProjectDescription />,
	},
	{
		id: 2,
		projectName: "Whack-a-Food",
		slug: "whack-a-food",
		githubLink: "https://github.com/victorgboynton",
		picture: "/WhackAFood.webp",
		alt: "Picture of the Whack-a-Food menu",
		status: "Completed",
		skills: ["C#", "Unity"],
		description: (
			<div>
				<p className="text-white ">
					{" "}
					This project involved creating a website for a charity named{" "}
					<strong>&apos;Hopeful Humans&apos;</strong>. The goal was to design a
					platform that not only serves the charity&apos;s needs but also stands
					as a testament to my skills and dedication.
				</p>
				<p>
					Leveraging technologies like React, TailwindCSS, and Nextjs, I focused
					on building an intuitive, responsive, and visually appealing site.
				</p>
				<p>
					My aspiration for this project is for it to be recognized as the
					magnum opus of my portfolio, showcasing my technical abilities and my
					commitment to using technology for social good.
				</p>
			</div>
		),
	},
	{
		id: 3,
		projectName: "Game Force",
		slug: "game-force",
		githubLink: "https://github.com/ProjectGameForce/ProjectGameForceFE",
		picture: "/gameForceOne.webp",
		alt: "Picture of the Game Force landing page",
		status: "Completed",
		skills: ["React", "TailwindCSS", "Nextjs"],
		description: <HopefulHumansProjectDescription />,
	},
	{
		id: 4,
		projectName: "Hopeful Humans",
		slug: "hopeful-humans",
		picture: "/hopefulHumans.webp",
		alt: "Picture of the Hopeful Humans landing page",
		status: "Completed",
		skills: ["React", "TailwindCSS", "Nextjs"],
		description: (
			<div>
				<p className="text-white ">
					{" "}
					This project involved creating a website for a charity named{" "}
					<strong>&apos;Hopeful Humans&apos;</strong>. The goal was to design a
					platform that not only serves the charity&apos;s needs but also stands
					as a testament to my skills and dedication.
				</p>
				<p>
					Leveraging technologies like React, TailwindCSS, and Nextjs, I focused
					on building an intuitive, responsive, and visually appealing site.
				</p>
				<p>
					My aspiration for this project is for it to be recognized as the
					magnum opus of my portfolio, showcasing my technical abilities and my
					commitment to using technology for social good.
				</p>
			</div>
		),
	},
];
export type ProjectDescriptionProps = {
	id: number;
	picture: string;
	alt: string;
	slug: string;
	projectName: string;
	skills: string[];
	description: JSX.Element;
	status: string;
	githubLink?: string;
};
