import { useState } from "react";
import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";
import Preview from "@/components/Preview";

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
      {imageUrl && <Preview imageUrl={imageUrl} />}
    </Flex>
  );
}