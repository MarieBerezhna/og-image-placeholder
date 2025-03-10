import { useImageUrl } from "@/hooks/useImageUrl";
import Flex from "../ui/Flex";
import TextInput from "../ui/Input";
import { SetStateAction } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import isMobile from "is-mobile";
import PopoverPicker from "../PopoverPicker";
import { StyledPreviewContainer, StyledSideForm } from "./Preview.style";
import Spinner from "../ui/Spinner";

type Event = { key: string; preventDefault: () => void; target: { value: SetStateAction<string> } };

export default function Preview() {
	const {
		imageUrl,
		loading,
		title,
		setTitle,
		fontSize,
		setFontSize,
		color,
		setColor,
		bgcolor,
		setBgolor,
		width,
		setWidth,
		height,
		setHeight,
	} = useImageUrl();
	const small = isMobile();

	return (
		<StyledPreviewContainer>
			<Flex style={{ flexDirection: "row" }}>
				<TextInput
					type="text"
					placeholder="Enter a title..."
					value={title}
					onChange={(e: Event) => setTitle(e.target.value)}
					onKeyDown={(e: Event) => e.key === "Enter" && setTitle(e.target.value)}
				/>
			</Flex>
			<StyledSideForm>
				Width:
				<TextInput
					type="number"
					min="300"
					max="2000"
					value={width}
					onChange={(e: { target: { value: number } }) => setWidth(e.target.value)}
				/>
				Height:
				<TextInput
					type="number"
					min="300"
					max="2000"
					value={height}
					onChange={(e: { target: { value: number } }) => setHeight(e.target.value)}
				/>
				Font Size:
				<TextInput
					type="number"
					max="100"
					placeholder="60"
					value={fontSize}
					onChange={(e: { target: { value: number } }) => setFontSize(e.target.value)}
				/>
				Text Color
				<PopoverPicker color={color} onChange={setColor} />
				Background Color
				<PopoverPicker color={bgcolor} onChange={setBgolor} />
			</StyledSideForm>
			{loading && <Spinner />}
			{!loading && imageUrl && (
				<>
					<Flex style={{ gap: "1rem" }}>
						<Image
							src={imageUrl}
							alt="OG Image Preview"
							style={{ minHeight: 300, minWidth: 300 }}
							width={small ? 300 : width}
							height={small ? 300 : height}
						/>
						{small && (
							<p>
								The image will be shown at 300x300. <br />
								For best preview, use a larger screen
							</p>
						)}
					</Flex>
					<a href={imageUrl} target="_blank" rel="noopener noreferrer">
						<Button>Open in new tab</Button>
					</a>
				</>
			)}
		</StyledPreviewContainer>
	);
}
