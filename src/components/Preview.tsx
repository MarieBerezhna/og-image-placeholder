import Image from "next/image";
import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";

export default function Preview({imageUrl}: {imageUrl: string}) {
    return  <Flex style={{ gap: "1rem" }}>
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
            </Flex>;
}