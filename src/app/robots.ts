import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain = "https://arnawadigital.com/";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
