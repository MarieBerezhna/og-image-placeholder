import { useCallback, useEffect, useState } from "react";

export const useImageUrl = () => {
    const [title, setTitle] = useState("");
    const [fontSize, setFontSize] = useState<number>(60);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const generateImage = useCallback(() => {
        const encodedTitle = encodeURIComponent(title);
        console.log("generating", fontSize);
        setImageUrl(`/api/og?title=${encodedTitle}&fontsize=${fontSize}`);
      }, [fontSize, title]);

      useEffect(() => {
        console.log(imageUrl);
      }, [imageUrl]);
  
      useEffect(() => {
        console.log("fontsize change", fontSize)
        generateImage();
      }, [fontSize, generateImage]);

    return { imageUrl, setImageUrl, title, setTitle, fontSize, setFontSize, generateImage };
};