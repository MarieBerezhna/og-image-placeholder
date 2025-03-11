import { useImageUrl } from "@/hooks/useImageUrl";
import Flex from "../ui/Flex";
import TextInput from "../ui/Input";
import { CSSProperties, SetStateAction } from "react";
import Image from "next/image";
import isMobile from "is-mobile";
import PopoverPicker from "../PopoverPicker";
import { StyledPreviewContainer, StyledSideForm } from "./Preview.style";
import Spinner from "../ui/Spinner";
import { fonts } from "@/constants";
import ClipboardLink from "../ClipboardLink";

type Event = { key: string; preventDefault: () => void; target: { value: SetStateAction<string> } };

export default function Preview() {
	const {
		imageUrl,
		loading,
		setLoading,
		title,
		setTitle,
		fontFamily,
		setFontFamily,
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

	const sizeInputsProps = {
		type: "range",
		min: 300,
		max: 1500,
		step: 1,
	};

	const inputRowStyle: CSSProperties = {
		flexDirection: "row",
		alignItems: "center",
		gap: "0.5rem",
		width: "100%",
		justifyContent: "space-between",
	};

	const colorInputRowStyle: CSSProperties = {
		...inputRowStyle,
		justifyContent: "flex-start",
	};
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
				<h2>Settings</h2>
				<label>Width:</label>
				<Flex style={inputRowStyle}>
					<span>{width}</span>
					<input
						{...sizeInputsProps}
						value={width}
						onChange={e => {
							const value = parseInt(e.target.value);
							setWidth(value);
						}}
					/>
				</Flex>
				<label>Height:</label>
				<Flex style={inputRowStyle}>
					<span>{height}</span>
					<input
						{...sizeInputsProps}
						value={height}
						onChange={e => {
							const value = parseInt(e.target.value);
							setHeight(value);
						}}
					/>
				</Flex>
				<label>Font Family</label>
				<select
					value={fontFamily}
					onChange={e => setFontFamily(e.target.value)}
					style={{ width: "100%", padding: "0.5rem", borderRadius: "5px" }}
				>
					{fonts.map(font => (
						<option key={font.value} value={font.value}>
							{font.label}
						</option>
					))}
				</select>
				<label>Font Size:</label>
				<Flex style={inputRowStyle}>
					<span>{fontSize}</span>
					<input
						value={fontSize}
						type="range"
						min={18}
						max={140}
						step={1}
						onChange={e => {
							const value = parseInt(e.target.value);
							setFontSize(value);
						}}
					/>
				</Flex>
				<Flex style={colorInputRowStyle}>
					<PopoverPicker color={color} onChange={setColor} />
					<label>Text Color</label>
				</Flex>
				<Flex style={colorInputRowStyle}>
					<PopoverPicker color={bgcolor} onChange={setBgolor} />
					<label>Background Color</label>
				</Flex>
			</StyledSideForm>
			{loading && <Spinner />}
			{imageUrl && (
				<>
					<Flex style={{ gap: "1rem" }}>
						<Image
							src={imageUrl}
							alt="OG Image Preview"
							style={{ minHeight: 300, minWidth: 300 }}
							width={small ? 300 : width || 1200}
							height={small ? 300 : height}
							onLoad={() => setLoading(false)}
						/>
						{small && (
							<p>
								The image will be shown at 300x300. <br />
								For best preview, use a larger screen
							</p>
						)}
					</Flex>
					{!loading && (
						<Flex
							style={{
								alignItems: "flex-start",
								justifyContent: "space-between",
								gap: "1rem",
							}}
						>
							<ClipboardLink href={`${location.origin}${imageUrl}`} />
							<ClipboardLink
								href={`<meta property="og:image" content="${location.origin}${imageUrl}" />`}
							/>
						</Flex>
					)}
				</>
			)}
		</StyledPreviewContainer>
	);
}
