import Maintenance from "@/components/elements/maintenance";
import * as FadeIn from "@/components/elements/motion";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Page Not Found | Arnawa Digital`,
};

const NotFound = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center gap-3">
      <FadeIn.Container>
        <FadeIn.Item>
          <Maintenance />
        </FadeIn.Item>

        <FadeIn.Item>
          <div className="py-12 w-full flex flex-col items-center">
            <h1 className="text-4xl font-semibold w-full text-center text-gray-800">
              404 Page Not Found
            </h1>
            <p className="text-gray-700 mt-4 w-full max-w-[360px] text-center">
              The page you searched is not available for now, you can go back to
              the home.
            </p>
          </div>
        </FadeIn.Item>

        <FadeIn.Item>
          <div className="w-full flex justify-center">
            <Button asChild className="rounded-full text-sm">
              <Link href={"/"}>Back to home</Link>
            </Button>
          </div>
        </FadeIn.Item>
      </FadeIn.Container>
    </main>
  );
};

export default NotFound;
