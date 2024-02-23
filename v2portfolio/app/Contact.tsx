"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export function Contact() {
	const [messageSuccess, setMessageSuccess] = useState(false);
	const [messageFail, setMessageFail] = useState(false);
	async function handleSubmit(event: any) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const apiKey = process.env.NEXT_PUBLIC_EMAIL_ACCESS_TOKEN;
		if (!apiKey) {
			throw new Error("Invalid Email Access Token");
		}
		formData.append("access_key", apiKey);

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		});
		const result = await response.json();
		if (result.success) {
			setMessageSuccess(true);
			console.log(result);
			event.target.reset();
			alert("Message sent successfully!");
		} else {
			setMessageFail(true);
			alert("Message send failed, please try again later.");
		}
	}

	return (
		<div className="flex flex-col w-[90vw] mx-auto lg:flex-row justify-center">
			<div className="space-y-5 w-[90vw] mx-auto md:w-[70vw] lg:w-[30vw] mb-10">
				<h1 className="text-2xl text-center sm:text-start">
					Reasons to contact me:
				</h1>
				<div>
					<h2 className="border-b-2 border-white">You want to hire me!</h2>
					<p className="text-lg">
						Chances are, if you are looking at the website, I am currently
						looking for work. If you need some help, let me know!
					</p>
				</div>
				<div>
					<h2 className="border-b-2 border-white">You need a hand!</h2>
					<p className="text-lg">
						If you are a charity seeing this website, just know that I help at
						no cost for most non-profits.
					</p>
				</div>
				<div>
					<h2 className="border-b-2 border-white">You want to say hello!</h2>
					<p className="text-lg">
						A nice hello is always welcome. Tell me what you thought of the
						website, and leave a nice message.
					</p>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row sm:justify-center">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col h-[50vh] w-[80vw] sm:w-[50vw] lg:w-[30vw] mx-auto sm:mx-20"
				>
					<label htmlFor="name" className="font-ribeye">
						Name:
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Your Name"
						className="rounded-xl mb-2 px-2 py-1 text-black"
						required
					/>

					<label htmlFor="email" className="font-ribeye">
						Email:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="your.email@email.com"
						className="rounded-xl mb-2 text-black px-2 py-1"
						required
					/>

					<label htmlFor="message" className="font-ribeye">
						Message:
					</label>
					<textarea
						id="message"
						placeholder="Hello, I'm trying to reach you about your car's extended warranty"
						className="rounded-xl p-[4px] text-black"
						name="message"
						required
					></textarea>

					<button
						type="submit"
						className="font-ribeye text-2xl p-2 border-2 w-32 mx-auto rounded-full border-black bg-purple-900 mt-3 font-bold"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
}
