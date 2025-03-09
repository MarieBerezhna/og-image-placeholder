import { useImageUrl } from "@/hooks/useImageUrl";
import Flex from "./ui/Flex";
import TextInput from "./ui/Input";
import { SetStateAction } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import isMobile from "is-mobile";

type Event = { key: string; preventDefault: () => void; target: { value: SetStateAction<string> } };

export default function Preview() {
	const { fontSize, setFontSize, title, setTitle, generateImage, imageUrl } = useImageUrl();
	const small = isMobile();

	return (
		<Flex style={{ position: "static", width: "100%", gap: "1rem" }}>
			<Flex style={{ flexDirection: "row" }}>
				<TextInput
					type="text"
					placeholder="Enter a title..."
					value={title}
					onChange={(e: Event) => setTitle(e.target.value)}
					onKeyDown={(e: Event) => e.key === "Enter" && generateImage()}
				/>
				<Button onClick={generateImage}>Go!</Button>
			</Flex>
			<Flex
				style={{
					position: "absolute",
					top: 0,
					right: 0,
					zIndex: 1,
				}}
			>
				Font Size:
				<TextInput
					type="number"
					max="100"
					placeholder="60"
					value={fontSize}
					onChange={(e: { target: { value: number } }) => {
						console.log(e.target.value);
						setFontSize(e.target.value);
					}}
				/>
			</Flex>
			{imageUrl && (
				<Flex style={{ gap: "1rem", height: "60vh", width: `${small ? 100 : 50}%` }}>
					<Image
						src={imageUrl}
						alt="OG Image Preview"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						style={{ minHeight: 300, minWidth: 300 }}
						fill
					/>
					<a href={imageUrl} target="_blank" rel="noopener noreferrer">
						<Button>Open in new tab</Button>
					</a>
				</Flex>
			)}
		</Flex>
	);
}
