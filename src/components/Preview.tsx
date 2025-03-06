"use client"
import Image from "next/image";
import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";
import isMobile from "is-mobile";
export default function Preview({imageUrl}: {imageUrl: string}) {
  const small = isMobile();
  return  <Flex style={{ gap: "1rem", height: "60vh", width: `${small ? 100: 50}%` }}>
            <Image
              src={imageUrl}
              alt="OG Image Preview"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ minHeight: 300, minWidth: 300 }}
              fill
            />
              <a href={imageUrl} target="_blank" rel="noopener noreferrer">
              <Button>
                Open in new tab
                </Button>
              </a>
          </Flex>;
}