import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

export const useImageUrl = () => {
	const [title, setTitle] = useState("");
	const [fontSize, setFontSize] = useState<number>(60);
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [color, setColor] = useState("#fff");
	const [bgcolor, setBgolor] = useState("#1e1e1e");
	const [loading, setLoading] = useState(false);
	const [width, setWidth] = useState<number>(1200);
	const [height, setHeight] = useState<number>(630);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const generateImage = useCallback(
		debounce((encodedTitle, fontSize, color, bgcolor, width, height) => {
			setImageUrl(
				`/api/og?title=${encodedTitle}&fontsize=${fontSize}&color=${color}&bgcolor=${bgcolor}&width=${width}&height=${height}`
			);
		}, 1000),
		[title, fontSize, color, bgcolor, width, height]
	);

	useEffect(() => {
		if (!title.length) return;
		generateImage.flush();
		setLoading(true);
		setImageUrl(null);
		const [
			encodedTitle,
			encodedFontSize,
			encodedColor,
			encodedBgcolor,
			encodedWidth,
			encodedHeight,
		] = [title, fontSize, color, bgcolor, width, height].map(encodeURIComponent);

		generateImage(
			encodedTitle,
			encodedFontSize,
			encodedColor,
			encodedBgcolor,
			encodedWidth,
			encodedHeight
		);
	}, [generateImage, title, fontSize, color, bgcolor, width, height]);

	return {
		imageUrl,
		loading,
		setLoading,
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
	};
};
