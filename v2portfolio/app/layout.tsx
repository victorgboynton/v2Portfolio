import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Victor Boynton",
	description: "Portfolio for Victor Boynton",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<title>Landing Page</title>
				<meta
					name="Victor Boynton"
					content="Landing Page"
					key="portfolio victor boynton developer"
				></meta>
			</Head>
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
