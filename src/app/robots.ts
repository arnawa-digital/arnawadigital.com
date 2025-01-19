import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain = "https://arnawadigital.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/api/"],
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: domain,
  };
}
