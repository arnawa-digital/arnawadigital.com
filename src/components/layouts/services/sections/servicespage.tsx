"use client";

import { urlEndpoint } from "@/common";
import Maintenance from "@/components/elements/maintenance";
import * as FadeIn from "@/components/elements/motion";
import PageContainer from "@/components/elements/page-container";
import { IKImage } from "imagekitio-next";

const ServicesPage = () => {
  return (
    <PageContainer className="min-h-screen pb-24 pt-6">
      <FadeIn.Container>
        <FadeIn.Item>
          <Maintenance />
        </FadeIn.Item>

        <FadeIn.Item>
          <header className="mb-4 text-center">
            <h1 className="text-2xl font-semibold">Our Services</h1>
            <p className="mx-auto mt-1 max-w-lg text-lg text-gray-800">
              A selection of the best projects crafted in Indonesia by Arnawa Digital.
            </p>
          </header>
        </FadeIn.Item>

        <main className="mt-12 flex flex-col gap-16 px-5 md:px-24">
          <FadeIn.Item>
            <article className="flex w-full flex-col gap-4 md:flex-row md:gap-8">
              <figure className="aspect-video h-48 rounded-lg bg-gray-300 md:aspect-square">
                <IKImage
                  urlEndpoint={urlEndpoint}
                  path={"/healthcare-registration-system.png"}
                  alt={"Web. Mobile. and Platform Image"}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-video h-48 overflow-hidden rounded-lg object-cover md:aspect-square"
                />
              </figure>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Web, Mobile, and Platform</h2>
                <p className="mt-2 text-sm text-gray-600">
                  We give solutions that create opportunities to achieve your business goals.
                </p>
                <ul className="mt-4 list-inside list-disc text-sm text-gray-800">
                  <li>Website Development</li>
                  <li>Application Development</li>
                  <li>Frontend/Backend Development</li>
                  <li>SEO Strategy</li>
                  <li>Hosting and Deployment</li>
                </ul>
              </div>
            </article>
          </FadeIn.Item>
          <FadeIn.Item>
            <article className="flex w-full flex-col gap-4 md:flex-row-reverse md:gap-8">
              <figure className="aspect-video h-48 rounded-lg bg-gray-300 md:aspect-square">
                <IKImage
                  urlEndpoint={urlEndpoint}
                  path={"/mobile-recipe-app.png"}
                  alt={"Web. Mobile. and Platform Image"}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-video h-48 overflow-hidden rounded-lg object-cover md:aspect-square"
                />
              </figure>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Product and Design Builder</h2>
                <p className="mt-2 text-sm text-gray-600">
                  We build products and designs that are meaningful, beautiful, and relevant to
                  users.
                </p>
                <ul className="mt-4 list-inside list-disc text-sm text-gray-800">
                  <li>User Research</li>
                  <li>Ideation & Prototyping</li>
                  <li>UI/UX Design</li>
                  <li>Design Systems</li>
                  <li>Content Storyboarding</li>
                </ul>
              </div>
            </article>
          </FadeIn.Item>
        </main>
      </FadeIn.Container>
    </PageContainer>
  );
};

export default ServicesPage;
