import { useState } from "react";
import Image from "next/image";
import Flex from "@/components/Flex";
import Button from "@/components/Button";

export default function Home() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = () => {
    const encodedTitle = encodeURIComponent(title);
    setImageUrl(`/api/og?title=${encodedTitle}`);
  };

  return (
    <Flex style={{ gap: "1rem" }}>
      <h1>OpenGraph Image Generator</h1>

      <input
        type="text"
        placeholder="Enter a title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button onClick={generateImage}>Generate Image</Button>

      {imageUrl && (
        <Flex style={{ gap: "1rem" }}>
          <p>Preview:</p>
          <Image
            src={imageUrl}
            alt="OG Image Preview"
            width={1200}
            height={630}
            className="preview-img"
            unoptimized
          />
          
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            <Button>
              Open in new tab
              </Button>
            </a>
          
        </Flex>
      )}
    </Flex>
  );
}