"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureList = ({ feature_name }: { feature_name: string }) => {
  return (
    <li className="flex items-center gap-2 text-gray-700">
      <Check size={16} className="flex-shrink-0 text-green-500" />
      <span>{feature_name}</span>
    </li>
  );
};

const PricingCard = ({
  title,
  description,
  price,
  price_description,
  service_title,
  feature_list,
  free_trial_href,
  className,
}: {
  title: string;
  description: string;
  price: string;
  price_description: string;
  service_title: string;
  feature_list: string[];
  free_trial_href: string;
  className?: string;
}) => {
  return (
    <article
      className={cn(
        "flex w-full flex-col gap-6 rounded-lg border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <header>
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-600">{description}</p>
        </header>

        <div className="flex flex-col gap-1">
          <h2 className="text-4xl font-bold text-gray-900">{price}</h2>
          <p className="text-sm text-gray-500">*{price_description}</p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            className="w-full"
            onClick={() =>
              (location.href = `https://api.whatsapp.com/send?phone=62895710149040&text=Halo%20Arnawa%20Digital%20,%20mau%20tanya%20tentang%20Pricing%20${title}%20Package`)
            }
          >
            Start Your Journey
          </Button>
          <Link
            href={free_trial_href}
            className="text-center text-gray-600 underline hover:text-gray-800"
            aria-label="Get a trial project for 249,000 IDR"
          >
            Get One Trial Project for 299,000 IDR
          </Link>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-800 underline">{service_title}:</h3>
        <ul className="mt-4 space-y-2">
          {feature_list.map((item, index) => (
            <FeatureList key={index} feature_name={item} />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PricingCard;
