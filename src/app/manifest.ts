import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arnawa Digital | Design & Development Agency",
    short_name: "Arnawa Digital",
    description:
      "Arnawa Digital is a design and development agency helping startups and small businesses with affordable, high-quality websites and digital solutions.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    lang: "en",
    scope: "/",
    categories: ["business", "development", "design", "agency", "technology"],
    screenshots: [
      {
        src: "/screenshots/homepage.png",
        sizes: "1080x1920",
        type: "image/png",
      },
      {
        src: "/screenshots/projects.png",
        sizes: "1080x1920",
        type: "image/png",
      },
    ],
  };
}
