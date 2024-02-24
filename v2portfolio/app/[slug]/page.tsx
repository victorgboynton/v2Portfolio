"use client";

import Head from "next/head";
import {
	ProjectDescriptionArray,
	ProjectDescriptionProps,
} from "../ProjectDescriptionArray";
import Image from "next/image";
import Link from "next/link";

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
		<div className="bg-gradient-to-t from-[#1a032b] to-[#330336] min-h-[100vh] pb-20">
			<Head>
				<title>Project Page</title>
				<meta name={project.projectName} content="Landing Page"></meta>
				<meta name="next-size adjust" content="Hope this will fix it"></meta>
			</Head>
			<div>
				<div className="mt-20 text-white text-xl w-[90vw] mx-auto space-y-3 font-robotoSlab">
					<div className="relative w-72 h-60 md:w-96 md:h-72 lg:w-[600px] lg:h-[300px] mx-auto">
						<Image
							src={project.picture}
							alt="The Landing page of the website"
							fill
							className="object-scale-down"
						/>
					</div>
					<h1 className="text-center text-[2em] sm:text-[2.5em] font-bold pb-8">
						{project.projectName}
					</h1>
					<div className="w-[90vw] md:w-[70vw] lg:w-[50vw] mx-auto space-y-4">
						<div className="flex flex-row flex-wrap items-center">
							<h2>Skills Used:&nbsp;</h2>
							{project.skills.map((e: string, index: number) => {
								return (
									<div key={index} className=" bg-black mx-1 p-1 rounded-xl">
										{e}
									</div>
								);
							})}
						</div>
						<div>{project.description}</div>
						{project.githubLink !== undefined && (
							<div className="bg-green-700/25 p-3 rounded-md w-[170px] hover:bg-blue-700/25">
								<Link href={project.githubLink} target="_blank">
									<h4>Github Repo →</h4>
								</Link>
							</div>
						)}
						<div className="flex flex-row text-2xl">
							<h3>Status:&nbsp;</h3>
							<h4 className={`${progressColor}`}>{project.status}</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
