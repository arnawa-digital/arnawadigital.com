import CollectionsPage from "@/components/layouts/collections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Collections | Arnawa Digital`,
  description: `Design & Development Agency`,
  openGraph: {
    title: `Collections | Arnawa Digital`,
    description: `Design & Development Agency`,
    authors: `Arnawa Digital`,
  },
};

const Works = () => {
  return <CollectionsPage />;
};

export default Works;
