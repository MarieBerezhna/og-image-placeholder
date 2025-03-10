import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

export const useImageUrl = () => {
	const [title, setTitle] = useState("");
	const [fontSize, setFontSize] = useState<number>(60);
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [color, setColor] = useState("#fff");
	const [bgcolor, setBgolor] = useState("#1e1e1e");
	const [loading, setLoading] = useState(false);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const generateImage = useCallback(
		debounce((encodedTitle, fontSize, color, bgcolor) => {
			setImageUrl(
				`/api/og?title=${encodedTitle}&fontsize=${fontSize}&color=${color}&bgcolor=${bgcolor}`
			);
			setLoading(false);
		}, 800),
		[title, fontSize, color, bgcolor]
	);

	useEffect(() => {
		if (!title.length) return;
		setLoading(true);
		const [encodedTitle, encodedFontSize, encodedColor, encodedBgcolor] = [
			title,
			fontSize,
			color,
			bgcolor,
		].map(encodeURIComponent);
		generateImage(encodedTitle, encodedFontSize, encodedColor, encodedBgcolor);
	}, [generateImage, title, fontSize, color, bgcolor]);

	return {
		imageUrl,
		setImageUrl,
		title,
		setTitle,
		fontSize,
		setFontSize,
		color,
		setColor,
		bgcolor,
		setBgolor,
		loading,
	};
};
