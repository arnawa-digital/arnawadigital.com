import PricingPage from "@/components/layouts/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Pricing | Arnawa Digital`,
  description: `Design & Development Agency`,
  openGraph: {
    title: `Pricing | Arnawa Digital`,
    description: `Design & Development Agency`,
    authors: `Arnawa Digital`,
  },
};

const Pricing = () => {
  return <PricingPage />;
};

export default Pricing;
