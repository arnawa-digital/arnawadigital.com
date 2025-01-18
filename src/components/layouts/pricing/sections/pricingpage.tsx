import { pricing_content } from "@/common";
import Maintenance from "@/components/elements/maintenance";
import * as FadeIn from "@/components/elements/motion";
import PageContainer from "@/components/elements/page-container";
import PricingCard from "@/components/elements/pricing-card";

const PricingPage = () => {
  return (
    <PageContainer className="min-h-screen pb-24 pt-6">
      <main>
        <FadeIn.Container>
          <FadeIn.Item>
            <Maintenance />
          </FadeIn.Item>

          <FadeIn.Item>
            <header className="mb-4 text-center">
              <h1 className="text-2xl font-semibold">Our Pricing Plans</h1>
              <p className="mx-auto mt-1 max-w-80 text-lg text-gray-800">
                All plans include top design and developer talents, and a dedicated project manager.
              </p>
            </header>
          </FadeIn.Item>

          <section className="mt-12 flex flex-col md:grid gap-8 px-5 md:grid-cols-2">
            {pricing_content.slice(0, 2).map((item, index) => (
              <FadeIn.Item key={index}>
                <PricingCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  price_description={item.price_description}
                  free_trial_href={item.free_trial_href}
                  service_title={item.service_title}
                  feature_list={item.feature_list}
                  className={index === pricing_content.length - 1 ? "col-span-2" : "col-span-1"}
                />
              </FadeIn.Item>
            ))}

            <PricingCard
              title={pricing_content[2].title}
              description={pricing_content[2].description}
              price={pricing_content[2].price}
              price_description={pricing_content[2].price_description}
              free_trial_href={pricing_content[2].free_trial_href}
              service_title={pricing_content[2].service_title}
              feature_list={pricing_content[2].feature_list}
              className={"col-span-2"}
            />

            <article className="col-span-2 w-full rounded-lg border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <header>
                <h2 className="text-2xl font-semibold text-gray-800 text-center">All Plans Include</h2>
              </header>
              <ul className="mt-6 flex flex-col md:grid md:grid-cols-2 gap-y-4 font-medium text-gray-700">
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="size-10 rounded-full bg-sky-100 fill-blue-500 p-2"
                    aria-hidden="true"
                  >
                    <path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"></path>
                  </svg>
                  <span>Project Manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="size-10 rounded-full bg-sky-100 fill-blue-500 p-2"
                    aria-hidden="true"
                  >
                    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"></path>
                  </svg>
                  <span>Developer</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="size-10 rounded-full bg-sky-100 fill-blue-500 p-2"
                    aria-hidden="true"
                  >
                    <path d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM124.42,113.55q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z"></path>
                  </svg>
                  <span>Designer</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="size-10 rounded-full bg-sky-100 fill-blue-500 p-2"
                    aria-hidden="true"
                  >
                    <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-34.32,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                  <span>Quality Assurance</span>
                </li>
              </ul>
            </article>
          </section>
        </FadeIn.Container>
      </main>
    </PageContainer>
  );
};

export default PricingPage;
