"use client";
import React, { useRef, useState, useEffect, ReactNode } from "react";

type ScrollAnimationProps = {
	children: ReactNode;
	inAnimation: string;
	outAnimation: string;
};
export function ScrollAnimation({
	children,
	inAnimation,
	outAnimation,
}: ScrollAnimationProps) {
	const [isVisible, setIsVisible] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// const callBackFunction = (entries: HTMLDivElement) => {
		const callBackFunction = (entries: IntersectionObserverEntry[]) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
				setIsVisible(true);
			}
		};
		const options = {
			root: null,
			rootMargin: "100px",
			threshold: 0.7,
		};
		const observer = new IntersectionObserver(callBackFunction, options);
		if (containerRef.current) {
			observer.observe(containerRef.current);
			console.log("In");
		}
		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
				console.log("Out");
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={`opacity-0 flex justify-center ${
				isVisible ? inAnimation : outAnimation
			}`}
		>
			{children}
		</div>
	);
}
