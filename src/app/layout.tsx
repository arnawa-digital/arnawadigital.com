import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Layouts from "@/components/layouts/Layouts";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  applicationName: "arnawadigital",
  appleWebApp: {
    title: "arnawadigital",
    capable: true,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://arnawadigital.com",
  ),
  description: "",
  keywords: "",
  creator: "",
  authors: {
    name: "",
    url: "",
  },
  openGraph: {
    images: "",
    url: "",
    siteName: "",
    locale: "",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`} suppressHydrationWarning>
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}
