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
    <main className="flex h-screen w-full items-center justify-center gap-3">
      <FadeIn.Container>
        <FadeIn.Item>
          <Maintenance />
        </FadeIn.Item>

        <FadeIn.Item>
          <div className="flex w-full flex-col items-center py-12">
            <h1 className="w-full text-center text-4xl font-semibold text-gray-800">
              404 Page Not Found
            </h1>
            <p className="mt-4 w-full max-w-[360px] text-center text-gray-700">
              The page you searched is not available for now, you can go back to the home.
            </p>
          </div>
        </FadeIn.Item>

        <FadeIn.Item>
          <div className="flex w-full justify-center">
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
