import ContactPage from "@/components/layouts/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact | Arnawa Digital`,
  description: `Design & Development Agency`,
  openGraph: {
    title: `Contact | Arnawa Digital`,
    description: `Design & Development Agency`,
    authors: `Arnawa Digital`,
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
