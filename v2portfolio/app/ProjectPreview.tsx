"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export type ProjectPreviewProps = {
	picture: string;
	altText: string;
	name: string;
	target: string;
};
export function ProjectPreview({
	picture,
	name,
	altText,
	target,
}: ProjectPreviewProps) {
	return (
		<Link href={target}>
			<div className="py-2 px-6 m-2 bg-purple-900/20 hover:bg-purple-600/30 rounded-md w-[90vw] md:w-auto">
				<div className="relative w-[70vw] md:w-[30vw] lg:w-[25vw] h-[20vh] md:h-32 lg:h-52 mx-auto">
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
