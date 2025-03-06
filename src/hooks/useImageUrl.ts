import { useState } from "react";

export const useImageUrl = () => {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const generateImage = () => {
        const encodedTitle = encodeURIComponent(title);
        setImageUrl(`/api/og?title=${encodedTitle}`);
      };

    return { imageUrl, setImageUrl, title, setTitle, generateImage };
};