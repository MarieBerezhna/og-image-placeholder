import { useState } from "react";
import Button from "./ui/Button";
import Flex from "./ui/Flex";

export default function ClipboardLink({ href }: { href: string }) {
	const defaultText = "Copy";
	const [title, setTitle] = useState("Copy to clipboard");
	const [text, setText] = useState(defaultText);
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
				{text !== defaultText && <span>&#10003;</span>}
				{text}
			</Button>
		</Flex>
	);
}
