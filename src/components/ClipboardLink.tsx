import { useState } from "react";
import Button from "./ui/Button";
import Flex from "./ui/Flex";

export default function ClipboardLink({ href }: { href: string }) {
	const [title, setTitle] = useState("Copy to clipboard");
	const [text, setText] = useState("Copy");
	const onCopy = () => {
		navigator.clipboard.writeText(href);
		setTitle("Copied to clipboard");
		setText("Copied!");
	};

	return (
		<Flex
			style={{
				flexDirection: "row",
				gap: "0.5rem",
				justifyContent: "space-between",
				width: "100%",
			}}
		>
			<pre>
				<code>{href}</code>
			</pre>
			<Button onClick={onCopy} title={title}>
				{text}
			</Button>
		</Flex>
	);
}
