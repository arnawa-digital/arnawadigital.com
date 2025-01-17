"use client";

import { urlEndpoint } from "@/common";
import { IKImage } from "imagekitio-next";
import { Button } from "../ui/button";

interface TemplateCardProps {
  title: string;
  desc: string;
  href: string;
  purchase_number: number;
  imageSrc: string;
  altText?: string;
  className?: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  desc,
  purchase_number,
  imageSrc,
  altText = "Work card image",
  className = "",
}: TemplateCardProps) => {
  return (
    <article className={`block rounded-lg ${className}`}>
      <IKImage
        urlEndpoint={urlEndpoint}
        path={imageSrc}
        alt={altText}
        width={960}
        height={960}
        loading="lazy"
        className="aspect-[3/2] w-full rounded object-cover"
      />
      <div className="mt-2">
        <dl>
          <div className="flex w-full gap-3">
            <Button
              className="flex w-full items-center"
              size={"sm"}
              onClick={() =>
                (location.href = `https://api.whatsapp.com/send?phone=62895710149040&text=Halo%20Arnawa%20Digital%20,%20mau%20tanya%20tentang%20template%20${title}`)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
                className="fill-white"
              >
                <path d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86Zm-16.25,1.47L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"></path>
              </svg>
              <p>Consultation Now</p>
            </Button>
            <Button
              className="flex w-full cursor-not-allowed items-center"
              size={"sm"}
              variant={"secondary"}
              disabled
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z"></path>
              </svg>
              <p>Live</p>
            </Button>
          </div>

          <div className="mt-3">
            <div>
              <dt className="sr-only">Title</dt>
              <dd className="font-semibold text-gray-800">{title}</dd>
            </div>

            <div>
              <dt className="sr-only">Description</dt>
              <dd className="line-clamp-2 text-sm text-gray-700">{desc}</dd>
            </div>

            <div className="mt-2 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 256 256"
                className="fill-gray-700"
              >
                <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z"></path>
              </svg>
              <p className="text-sm font-medium text-gray-700">
                {purchase_number} Orang membeli website ini
              </p>
            </div>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default TemplateCard;
