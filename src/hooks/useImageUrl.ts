import { useCallback, useEffect, useState } from "react";

export const useImageUrl = () => {
	const [title, setTitle] = useState("");
	const [fontSize, setFontSize] = useState<number>(60);
	const [imageUrl, setImageUrl] = useState<string | null>(null)
	const generateImage = useCallback(() => {
		const encodedTitle = encodeURIComponent(title);
		setImageUrl(`/api/og?title=${encodedTitle}&fontsize=${fontSize}`);
	}, [fontSize, title]);

	useEffect(() => {
		generateImage();
	}, [fontSize, generateImage]);

	return { imageUrl, setImageUrl, title, setTitle, fontSize, setFontSize, generateImage };
};
