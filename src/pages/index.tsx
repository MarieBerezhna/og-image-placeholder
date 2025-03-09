"use client";
import Flex from "@/components/ui/Flex";
import dynamic from "next/dynamic";

const Preview = dynamic(() => import("../components/Preview"), { ssr: false });

export default function Home() {
	return (
		<Flex style={{ gap: "1rem", margin: "2rem" }}>
			<h1>OpenGraph Image Generator</h1>
			<Preview />
		</Flex>
	);
}
