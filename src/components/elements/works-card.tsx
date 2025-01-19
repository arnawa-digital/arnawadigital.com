"use client";

import { urlEndpoint } from "@/common";
import { IKImage } from "imagekitio-next";

interface WorksCardProps {
  href: string;
  imageSrc: string;
  title: string;
  desc: string;
  tags: string[];
  altText?: string;
  className?: string;
}

const WorksCard: React.FC<WorksCardProps> = ({
  imageSrc,
  title,
  desc,
  tags,
  altText = "Work card image",
  className = "",
}) => {
  return (
    <article className={`block aspect-[4/3] rounded-lg ${className}`}>
      <IKImage
        urlEndpoint={urlEndpoint}
        path={imageSrc}
        alt={altText}
        width={1024}
        height={1024}
        loading="lazy"
        className="aspect-[3/2] w-full rounded object-cover"
      />
      <div className="mt-2">
        <dl>
          <div className="my-2 flex items-center gap-1">
            {tags.map((item, index) => {
              return (
                <article key={index} className="rounded-sm bg-gray-200 px-1 py-0.5 text-xs">
                  {item}
                </article>
              );
            })}
          </div>

          <div>
            <dt className="sr-only">Title</dt>
            <dd className="font-semibold text-gray-800 hover:underline hover:underline-offset-2">
              {title}
            </dd>
          </div>

          <div>
            <dt className="sr-only">Description</dt>
            <dd className="line-clamp-2 text-sm text-gray-700">{desc}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default WorksCard;
