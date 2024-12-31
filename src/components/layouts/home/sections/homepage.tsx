import PageContainer from "@/components/elements/page-container";
import * as FadeIn from "@/components/elements/motion";
import Marquee from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import Maintenance from "@/components/elements/maintenance";
import ReviewCard from "@/components/elements/review-card";
import { works_content } from "@/common";
import Link from "next/link";

const Homepage = () => {
  return (
    <PageContainer className="pt-6 pb-24 min-h-screen">
      <FadeIn.Container className="">
        <FadeIn.Item>
          <Maintenance />
        </FadeIn.Item>
        <FadeIn.Item>
          <div className="flex flex-col text-center items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Arnawa Digital</h1>
            <h3 className="text-gray-800 text-lg mt-1">
              Digital Agency | Design & Development Service
            </h3>
          </div>
        </FadeIn.Item>

        <FadeIn.Item>
          <div className="w-full flex justify-center">
            <p className="text-center text-gray-700 max-w-xl">
              Digital agency that builds products and connections where visuals
              and needs meet outstanding solutions, through well-planned
              strategies and thinking.
            </p>
          </div>
        </FadeIn.Item>
        <FadeIn.Item>
          <div className="relative flex h-full py-6 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <Marquee className="[--duration:24s]">
              {works_content.map((item) => (
                <ReviewCard
                  key={item.title}
                  title={item.title}
                  image={item.assetsImage[0]}
                  ratio={"16/9"}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        </FadeIn.Item>
        <FadeIn.Item>
          <div className="grid grid-cols-2 md:px-48 gap-6">
            <p className="text-sm text-gray-700">
              As a trusted ally to local and global organizations of all kinds,
              we support leaders like you to build an organization or business
              that people love online and in beyond—through technology
            </p>
            <p className="text-sm text-gray-700">
              Our promise? To make your organization or business smartly win
              over your clients, markets, and employees, while undoubtedly
              charming even your unconditionally loving mother&apos;s eyes
            </p>
          </div>
        </FadeIn.Item>

        <FadeIn.Item>
          <div className="md:px-48 mt-8">
            <h1 className="text-xl font-semibold md:-translate-x-4 max-w-60 text-gray-800">
              What’s it like working with us?
            </h1>
          </div>
        </FadeIn.Item>

        <FadeIn.Item>
          <div className="grid grid-cols-2 md:px-48 gap-6 mt-4">
            <p className="text-sm text-gray-700">
              Our clients will tell you, that our attention to detail,
              trust—filled collaboration, and deliver high-performing projects
              while making the process, make it more enjoyable, rewarding, and
              full of unexpected opportunities
            </p>
            <div className="text-sm text-gray-700">
              <p>Our services? Include</p>
              <p className="translate-x-2">UI/UX Design</p>
              <p className="translate-x-2">Product Design</p>
              <p className="translate-x-2">Website Development</p>
              <p className="translate-x-2">Apps Development</p>
              <p className="translate-x-2">Automation System</p>
              <p className="translate-x-2 text-gray-500">(Coming Soon)</p>
            </div>
          </div>
        </FadeIn.Item>

        <FadeIn.Item>
          <div className="md:px-48 mt-6 flex gap-3 items-center">
            <Button asChild className="rounded-full px-6 flex items-center">
              <Link href={"https://www.instagram.com/arnawadigital"} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                  className="fill-white"
                >
                  <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z"></path>
                </svg>
                DM&apos;s us
              </Link>
            </Button>
          </div>
        </FadeIn.Item>
      </FadeIn.Container>
    </PageContainer>
  );
};

export default Homepage;