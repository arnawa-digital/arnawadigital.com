import WorksPage from "@/components/layouts/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Works | Arnawa Digital`,
  description: `Design & Development Agency`,
  openGraph: {
    title: `Works | Arnawa Digital`,
    description: `Design & Development Agency`,
    authors: `Arnawa Digital`,
  },
};

const Works = () => {
  return <WorksPage />;
};

export default Works;
