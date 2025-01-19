import Homepage from "@/components/layouts/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Arnawa Digital | Design & Development Agency`,
  description: `Design & Development Agency`,
  openGraph: {
    title: `Arnawa Digital | Design & Development Agency`,
    description: `Design & Development Agency`,
    authors: `Arnawa Digital`,
  },
};

const Home = () => {
  return <Homepage />;
};

export default Home;
