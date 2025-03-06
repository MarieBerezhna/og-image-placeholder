"use client";
import { SetStateAction, useState } from "react";
import Flex from "@/components/ui/Flex";
import Preview from "@/components/Preview";
import dynamic from "next/dynamic";

const Button = dynamic(() => import('../components/ui/Button'), { ssr: false });
const TextInput = dynamic(() => import('../components/ui/Input'), { ssr: false });

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

      <TextInput
        placeholder="Enter a title..."
        value={title}
        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setTitle(e.target.value)}
      />

      <Button onClick={generateImage}>Generate Image</Button>
      {imageUrl && <Preview imageUrl={imageUrl} />}
    </Flex>
  );
}