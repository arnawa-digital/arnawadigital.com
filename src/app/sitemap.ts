import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain =
    process.env.DOMAIN ||
    "http://localhost:3000" ||
    "https://www.arnawadigital.com/";
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
