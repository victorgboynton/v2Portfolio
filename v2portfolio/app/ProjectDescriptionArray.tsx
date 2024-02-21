"use client";

export const ProjectDescriptionArray: ProjectDescriptionProps[] = [
	{
		id: 1,
		projectName: "Hopeful Humans",
		slug: "hopeful-humans",
		picture: "/hopefulHumans.webp",
		alt: "Picture of the Hopeful Humans landing page",
		skills: ["React", "TailwindCSS", "Nextjs"],
		description:
			"<p>This project involved creating a website for a charity named <strong>'Hopeful Humans'</strong>. The goal was to design a platform that not only serves the charity's needs but also stands as a testament to my skills and dedication.</p><p>Leveraging technologies like React, TailwindCSS, and Nextjs, I focused on building an intuitive, responsive, and visually appealing site.</p><p>My aspiration for this project is for it to be recognized as the magnum opus of my portfolio, showcasing my technical abilities and my commitment to using technology for social good.</p>",
	},
];
export type ProjectDescriptionProps = {
	id: number;
	picture: string;
	alt: string;
	slug: string;
	projectName: string;
	skills: string[];
	description: string;
};
