"use client";

import { urlEndpoint } from "@/common";
import { cn } from "@/lib/utils";
import { IKImage } from "imagekitio-next";

interface ReviewCardProps {
  title: string;
  image: string;
  ratio?: string;
}

const ReviewCard = ({ title, image, ratio = "1/1" }: ReviewCardProps) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-lg",
        `aspect-${ratio.replace(":", "/")}`
      )}
      title={title}
    >
      <IKImage
        urlEndpoint={urlEndpoint}
        path={image}
        alt={title}
        width={1024}
        height={1024}
        loading="lazy"
        className="h-full w-full object-cover object-center"
        placeholder="blur"
        blurDataURL="/placeholder.png"
      />
    </figure>
  );
};

export default ReviewCard;
