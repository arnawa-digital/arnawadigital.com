import ServicesPage from "@/components/layouts/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Services | Arnawa Digital`,
  description: `Design & Development Agency`,
  openGraph: {
    title: `Services | Arnawa Digital`,
    description: `Design & Development Agency`,
    authors: `Arnawa Digital`,
  },
};

const Services = () => {
  return <ServicesPage />;
};

export default Services;
