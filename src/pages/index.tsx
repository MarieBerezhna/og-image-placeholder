"use client";
import { SetStateAction, useState } from "react";
import Flex from "@/components/ui/Flex";
import Preview from "@/components/Preview";
import dynamic from "next/dynamic";

const Button = dynamic(() => import('../components/ui/Button'), { ssr: false });
const TextInput = dynamic(() => import('../components/ui/Input'), { ssr: false });

type Event = { key: string; preventDefault: () => void; target: { value: SetStateAction<string>; }};
export default function Home() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const generateImage = () => {
    setImageUrl(null);
    const encodedTitle = encodeURIComponent(title);
    setImageUrl(`/api/og?title=${encodedTitle}`);
  };

  return (
    <Flex style={{ gap: "1rem" }}>
      <h1>OpenGraph Image Generator</h1>
      <Flex style={{ flexDirection: "row"}}>
      <TextInput
        placeholder="Enter a title..."
        value={title}
        onChange={(e: Event) => setTitle(e.target.value)}
        onKeyDown={(e: Event) => e.key === "Enter" && generateImage()}
      />

      <Button onClick={generateImage}>Go!</Button>
      </Flex>

      {imageUrl && <Preview imageUrl={imageUrl} />}
    </Flex>
  );
}