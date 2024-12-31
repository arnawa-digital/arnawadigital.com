import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain =
    process.env.DOMAIN ||
    "http://localhost:3000" ||
    "https://www.arnawadigital.com/";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
