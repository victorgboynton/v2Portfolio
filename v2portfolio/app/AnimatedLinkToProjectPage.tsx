"use client";
import React from "react";
import { ProjectPreview, ProjectPreviewProps } from "./ProjectPreview";
import { ScrollAnimation } from "./ScrollAnimation";

export function AnimatedLinkToProjectPage({
	picture,
	altText,
	name,
	target,
}: ProjectPreviewProps) {
	return (
		<ScrollAnimation
			inAnimation="animate-[fade-in_3s_forwards]"
			outAnimation=""
		>
			<ProjectPreview
				picture={picture}
				altText={altText}
				name={name}
				target={target}
			/>
		</ScrollAnimation>
	);
}
