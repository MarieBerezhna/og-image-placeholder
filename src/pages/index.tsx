import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = () => {
    const encodedTitle = encodeURIComponent(title);
    setImageUrl(`/api/og?title=${encodedTitle}`);
  };

  return (
    <div className="container">
      <h1>OpenGraph Image Generator</h1>

      <input
        type="text"
        placeholder="Enter a title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={generateImage}>Generate Image</button>

      {imageUrl && (
        <div className="preview">
          <p>Preview:</p>
          <Image
            src={imageUrl}
            alt="OG Image Preview"
            width={1200}
            height={630}
            className="preview-img"
            unoptimized
          />
          <p>
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
              Open in new tab
            </a>
          </p>
        </div>
      )}
    </div>
  );
}