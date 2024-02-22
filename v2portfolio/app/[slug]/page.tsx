"use client";
import { stringify } from "querystring";
import {
	ProjectDescriptionArray,
	ProjectDescriptionProps,
} from "../ProjectDescriptionArray";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
	const project = ProjectDescriptionArray.find((e: ProjectDescriptionProps) => {
		if (e.slug === params.slug) {
			return e;
		}
	});
	if (!project) {
		return <div>Project Not Found</div>;
	}
	const progressColor =
		project.status.toLowerCase() === "completed"
			? "text-green-500"
			: "text-yellow-400";
	return (
		<div className="mt-20 text-white text-xl w-[90vw] mx-auto">
			<div className="relative w-72 h-60 md:w-96 md:h-72 lg:w-[450px] lg:h-[300px] mx-auto">
				<Image
					src={project.picture}
					alt="The Landing page of the website"
					fill
					className="object-scale-down"
				/>
			</div>
			<h1 className="text-center text-[2.5em] mb-10">{project.projectName}</h1>
			<p>{project.description}</p>
			<div className="flex flex-row">
				<h2>Skills Used:&nbsp;</h2>
				{project.skills.map((e: string, index: number) => {
					return <div key={index}>{e}&nbsp;</div>;
				})}
			</div>
			<div className="flex flex-row text-2xl">
				<p>Status:&nbsp;</p>
				<p className={`${progressColor}`}>{project.status}</p>
			</div>
		</div>
	);
}
