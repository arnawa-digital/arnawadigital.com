"use client";

import { urlEndpoint } from "@/common";
import { IKImage } from "imagekitio-next";

interface WorksCardProps {
  href: string;
  imageSrc: string;
  title: string;
  price: string;
  desc: string;
  tags: string[];
  altText?: string;
  className?: string;
}

const WorksCard: React.FC<WorksCardProps> = ({
  imageSrc,
  title,
  price,
  desc,
  tags,
  altText = "Work card image",
  className = "",
}) => {
  return (
    <article className={`block rounded-lg aspect-[4/3] ${className}`}>
      <IKImage
        urlEndpoint={urlEndpoint}
        path={imageSrc}
        alt={altText}
        width={1024}
        height={1024}
        loading="lazy"
        className="aspect-[3/2] w-full rounded object-cover"
        placeholder="blur"
        blurDataURL="/placeholder.png"
      />
      <div className="mt-2">
        <dl>
          <div className="flex gap-1 items-center my-2">
            {tags.map((item, index) => {
              return (
                <article
                  key={index}
                  className="text-xs py-0.5 px-1 bg-gray-200 rounded-sm"
                >
                  {item}
                </article>
              );
            })}
          </div>
          <div>
            <dt className="sr-only">Price</dt>
            <dd className="text-sm text-gray-500">{price}</dd>
          </div>

          <div>
            <dt className="sr-only">Title</dt>
            <dd className="font-semibold text-gray-800">{title}</dd>
          </div>

          <div>
            <dt className="sr-only">Description</dt>
            <dd className="text-sm line-clamp-2 text-gray-700">{desc}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default WorksCard;
