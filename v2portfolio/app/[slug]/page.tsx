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
	return (
		<div className="mt-10 text-white text-xl w-[90vw] mx-auto">
			<h1 className="text-center text-3xl">{project.projectName}</h1>
			<div className="relative w-72 h-60">
				<Image
					src={project.picture}
					alt="The Landing page of the website"
					fill
					className="object-scale-down"
				/>
			</div>
			<p>{project.description}</p>
		</div>
	);
}
